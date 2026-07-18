import { IProtocolPluginContext } from '@thesolidchain/protocol-plugins-common'
import { ChainFamilyMap, Price, FiatCurrency } from '@thesolidchain/sdk-common'
import { vi } from 'vitest'
import { DefaultConvexDataSource } from '../../../src/plugins/convex/implementation/DefaultConvexDataSource'

describe('DefaultConvexDataSource', () => {
  let ctx: any
  let dataSource: DefaultConvexDataSource

  const rewardPoolAddress = '0x3333333333333333333333333333333333333333'
  const lpTokenAddress = '0x4444444444444444444444444444444444444444'
  const crvAddress = '0x5555555555555555555555555555555555555555'

  const mockReceiptToken = {
    decimals: 18,
    symbol: 'cvxLP',
    name: 'Convex LP receipt',
    chainInfo: ChainFamilyMap.Ethereum.Mainnet,
    address: { value: rewardPoolAddress, type: 'Ethereum' },
  } as any

  const mockUnderlyingToken = {
    decimals: 18,
    symbol: 'crvLP',
    name: 'Curve LP token',
    chainInfo: ChainFamilyMap.Ethereum.Mainnet,
    address: { value: lpTokenAddress, type: 'Ethereum' },
  } as any

  const mockRewardToken = {
    decimals: 18,
    symbol: 'CRV',
    name: 'Curve DAO Token',
    chainInfo: ChainFamilyMap.Ethereum.Mainnet,
    address: { value: crvAddress, type: 'Ethereum' },
  } as any

  beforeEach(() => {
    ctx = {
      provider: { chain: { id: 1 }, readContract: vi.fn() },
      tokensManager: { getTokenByAddress: vi.fn() },
      oracleManager: { getSpotPrice: vi.fn() },
    } as unknown as IProtocolPluginContext

    dataSource = new DefaultConvexDataSource(ctx)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('getPool', () => {
    it('resolves the real on-chain pid instead of defaulting to 0', async () => {
      ;(ctx.tokensManager.getTokenByAddress as any)
        .mockResolvedValueOnce(mockReceiptToken)
        .mockResolvedValueOnce(mockUnderlyingToken)

      ;(ctx.provider.readContract as any)
        .mockImplementation(async ({ functionName }: { functionName: string }) => {
          switch (functionName) {
            case 'pid':
              return 42n
            case 'stakingToken':
              return lpTokenAddress
            case 'totalSupply':
              return 0n // no TVL/APY data available for this pool
            default:
              throw new Error(`unexpected call: ${functionName}`)
          }
        })

      const pool = await dataSource.getPool(rewardPoolAddress)

      expect(pool.pid).toBe(42n)
      expect(pool.underlyingToken).toBe(mockUnderlyingToken)
      expect(pool.receiptToken).toBe(mockReceiptToken)
    })

    it('propagates the error instead of defaulting pid to 0 when on-chain resolution fails', async () => {
      ;(ctx.tokensManager.getTokenByAddress as any).mockResolvedValueOnce(mockReceiptToken)
      ;(ctx.provider.readContract as any).mockImplementation(
        async ({ functionName }: { functionName: string }) => {
          if (functionName === 'pid') {
            throw new Error('reward pool contract reverted')
          }
          return lpTokenAddress
        },
      )

      await expect(dataSource.getPool(rewardPoolAddress)).rejects.toThrow(
        'reward pool contract reverted',
      )
    })

    it('computes a real APY from the on-chain reward rate instead of returning a mocked value', async () => {
      ;(ctx.tokensManager.getTokenByAddress as any)
        .mockResolvedValueOnce(mockReceiptToken)
        .mockResolvedValueOnce(mockUnderlyingToken)
        .mockResolvedValueOnce(mockRewardToken)

      ;(ctx.provider.readContract as any).mockImplementation(
        async ({ functionName }: { functionName: string }) => {
          switch (functionName) {
            case 'pid':
              return 7n
            case 'stakingToken':
              return lpTokenAddress
            case 'totalSupply':
              // 1000 LP tokens staked (18 decimals)
              return 1000n * 10n ** 18n
            case 'rewardToken':
              return crvAddress
            case 'rewardRate':
              // 1 CRV per second (18 decimals) => 31536000 CRV / year
              return 10n ** 18n
            default:
              throw new Error(`unexpected call: ${functionName}`)
          }
        },
      )

      ;(ctx.oracleManager.getSpotPrice as any).mockImplementation(
        async ({ baseToken }: { baseToken: { symbol: string } }) => {
          if (baseToken.symbol === 'CRV') {
            return { price: Price.createFrom({ value: '1', base: mockRewardToken, quote: FiatCurrency.USD }) }
          }
          if (baseToken.symbol === 'crvLP') {
            return { price: Price.createFrom({ value: '1', base: mockUnderlyingToken, quote: FiatCurrency.USD }) }
          }
          return { price: undefined }
        },
      )

      const pool = await dataSource.getPool(rewardPoolAddress)

      // annual reward value = 31536000 CRV * $1 = $31,536,000
      // staked value = 1000 LP * $1 = $1,000
      // APY = 31536000 / 1000 * 100 = 3,153,600 %
      expect(pool.currentApy.value).toBeCloseTo(3153600, 0)
      expect(pool.currentApy.value).not.toBe(0)
    })

    it('soft-fails APY to 0 when reward pricing is unavailable, without touching pid', async () => {
      ;(ctx.tokensManager.getTokenByAddress as any)
        .mockResolvedValueOnce(mockReceiptToken)
        .mockResolvedValueOnce(mockUnderlyingToken)
        .mockResolvedValueOnce(mockRewardToken)

      ;(ctx.provider.readContract as any).mockImplementation(
        async ({ functionName }: { functionName: string }) => {
          switch (functionName) {
            case 'pid':
              return 3n
            case 'stakingToken':
              return lpTokenAddress
            case 'totalSupply':
              return 1000n * 10n ** 18n
            case 'rewardToken':
              return crvAddress
            case 'rewardRate':
              return 10n ** 18n
            default:
              throw new Error(`unexpected call: ${functionName}`)
          }
        },
      )

      ;(ctx.oracleManager.getSpotPrice as any).mockResolvedValue({ price: undefined })

      const pool = await dataSource.getPool(rewardPoolAddress)

      expect(pool.pid).toBe(3n)
      expect(pool.currentApy.value).toBe(0)
    })
  })

  describe('getPid', () => {
    it('resolves the real on-chain pid from a single pid() read', async () => {
      ;(ctx.provider.readContract as any).mockImplementation(
        async ({ functionName }: { functionName: string }) => {
          if (functionName === 'pid') {
            return 99n
          }
          throw new Error(`unexpected call: ${functionName}`)
        },
      )

      const pid = await dataSource.getPid(rewardPoolAddress)

      expect(pid).toBe(99n)
      expect(ctx.provider.readContract).toHaveBeenCalledTimes(1)
      expect(ctx.provider.readContract).toHaveBeenCalledWith(
        expect.objectContaining({ address: rewardPoolAddress, functionName: 'pid' }),
      )
    })

    it('propagates the error instead of defaulting to 0 when the pid() read reverts', async () => {
      ;(ctx.provider.readContract as any).mockRejectedValueOnce(
        new Error('reward pool contract reverted'),
      )

      await expect(dataSource.getPid(rewardPoolAddress)).rejects.toThrow(
        'reward pool contract reverted',
      )
    })
  })

  // Ported from the W1.1 decimals-fix spec (#9): raw base-unit amounts from chain reads must
  // surface as human-readable amounts (createFromBaseUnit), never as the inflated raw value.
  describe('decimals regression (#9)', () => {
    it('computes a human-readable TVL from on-chain totalSupply, not the inflated raw base-unit value', async () => {
      ;(ctx.tokensManager.getTokenByAddress as any)
        .mockResolvedValueOnce(mockReceiptToken)
        .mockResolvedValueOnce(mockUnderlyingToken)
        .mockResolvedValueOnce(mockRewardToken)

      ;(ctx.provider.readContract as any).mockImplementation(
        async ({ functionName }: { functionName: string }) => {
          switch (functionName) {
            case 'pid':
              return 1n
            case 'stakingToken':
              return lpTokenAddress
            case 'totalSupply':
              // totalSupply raw = 250e18 base units => 250 LP tokens human-readable
              return 250n * 10n ** 18n
            case 'rewardToken':
              return crvAddress
            case 'rewardRate':
              return 0n
            default:
              throw new Error(`unexpected call: ${functionName}`)
          }
        },
      )

      // Price only the receipt token (TVL path); APY pricing soft-fails to 0.
      ;(ctx.oracleManager.getSpotPrice as any).mockImplementation(
        async ({ baseToken }: { baseToken: { symbol: string } }) => {
          if (baseToken.symbol === 'cvxLP') {
            return {
              price: Price.createFrom({ value: '1', base: mockReceiptToken, quote: FiatCurrency.USD }),
            }
          }
          return { price: undefined }
        },
      )

      const pool = await dataSource.getPool(rewardPoolAddress)

      // 250 LP at 1 USD/LP = 250 USD, NOT 2.5e20
      expect(pool.totalValueLocked?.amount).toBe('250')
      expect(pool.currentApy.value).toBe(0)
    })

    it('returns a human-readable user position amount for a known base-unit balance', async () => {
      const mockUsdcToken = {
        decimals: 6,
        symbol: 'USDC',
        name: 'USDC',
        chainInfo: ChainFamilyMap.Ethereum.Mainnet,
        address: { value: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', type: 'Ethereum' },
      } as any

      ;(ctx.tokensManager.getTokenByAddress as any).mockResolvedValueOnce(mockUsdcToken)

      // 2 USDC in base units (6 decimals)
      ;(ctx.provider.readContract as any).mockResolvedValueOnce(2000000n)

      const result = await dataSource.getUserPosition(
        rewardPoolAddress,
        '0x2222222222222222222222222222222222222222',
      )

      // 2 USDC base-unit (2000000, 6 decimals) must map to human-readable "2", NOT "2000000"
      expect(result.currentAmount.amount).toBe('2')
      expect(result.principalAmount.amount).toBe('2')
    })
  })
})
