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
})
