import {
  Address,
  ChainFamilyMap,
  FiatCurrency,
  Price,
  TokenAmount,
} from '@thesolidchain/sdk-common'
import { encodeFunctionData } from 'viem'
import { beforeEach, afterEach, describe, expect, it, vi } from 'vitest'
import { UniswapV3LiquidityFeatures } from '../../../src/plugins/uniswap-v3/UniswapV3LiquidityFeatures'
import { UNISWAP_V3_NPM_ABI } from '../../../src/plugins/uniswap-v3/abis/UniswapV3ABIS'

const NPM_ADDRESS = '0x4444444444444444444444444444444444444444'
const POOL_ADDRESS = '0x5555555555555555555555555555555555555555'
const TOKEN0_ADDRESS = '0x1111111111111111111111111111111111111111'
const TOKEN1_ADDRESS = '0x2222222222222222222222222222222222222222'
const OWNER_ADDRESS = '0x6666666666666666666666666666666666666666'

const FIXED_NOW_MS = 1_700_000_000_000
const FIXED_DEADLINE = BigInt(Math.floor(FIXED_NOW_MS / 1000) + 60 * 20)

const chainInfo = ChainFamilyMap.Ethereum.Mainnet

const token0 = {
  decimals: 18,
  symbol: 'TK0',
  name: 'Token 0',
  chainInfo,
  address: { value: TOKEN0_ADDRESS, type: 'Ethereum' },
} as any

const token1 = {
  decimals: 18,
  symbol: 'TK1',
  name: 'Token 1',
  chainInfo,
  address: { value: TOKEN1_ADDRESS, type: 'Ethereum' },
} as any

const token1WithDifferentDecimals = {
  ...token1,
  decimals: 6,
}

describe('UniswapV3LiquidityFeatures', () => {
  let ctx: any
  let features: UniswapV3LiquidityFeatures

  beforeEach(() => {
    vi.spyOn(Date, 'now').mockReturnValue(FIXED_NOW_MS)

    ctx = {
      provider: {
        chain: { id: 1 },
        readContract: vi.fn(),
        multicall: vi.fn(),
        simulateContract: vi.fn(),
      },
      tokensManager: {
        getTokenByAddress: vi.fn(),
      },
      oracleManager: {
        getSpotPrice: vi.fn(),
      },
      addressBookManager: {
        getAddressByName: vi.fn().mockResolvedValue(Address.createFromEthereum({ value: NPM_ADDRESS })),
      },
    }

    features = new UniswapV3LiquidityFeatures(ctx)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('getProvideLiquidityTransaction (mint calldata)', () => {
    it('derives token0/token1/fee from the pool and applies the default 0.5% slippage minimums, regardless of caller amount ordering', async () => {
      ctx.provider.multicall.mockResolvedValueOnce([TOKEN0_ADDRESS, TOKEN1_ADDRESS, 3000])

      const amount0 = TokenAmount.createFrom({ token: token0, amount: '1000' })
      const amount1 = TokenAmount.createFrom({ token: token1, amount: '2000' })

      const txInfo = await features.getProvideLiquidityTransaction({
        poolId: { address: { value: POOL_ADDRESS }, chainId: chainInfo.chainId } as any,
        // Deliberately reversed vs. the pool's token0/token1 order to prove the fix doesn't rely
        // on caller-supplied ordering (issue #11 item 3).
        amounts: [amount1, amount0],
        user: { wallet: { address: { value: OWNER_ADDRESS } } } as any,
      })

      const amount0Desired = 1000n * 10n ** 18n
      const amount1Desired = 2000n * 10n ** 18n
      // Default slippage tolerance is 0.5% (50 bps)
      const amount0Min = (amount0Desired * 9950n) / 10000n
      const amount1Min = (amount1Desired * 9950n) / 10000n

      expect(amount0Min).toBe(995n * 10n ** 18n)
      expect(amount1Min).toBe(1990n * 10n ** 18n)

      const expectedCalldata = encodeFunctionData({
        abi: UNISWAP_V3_NPM_ABI,
        functionName: 'mint',
        args: [
          {
            token0: TOKEN0_ADDRESS,
            token1: TOKEN1_ADDRESS,
            fee: 3000,
            tickLower: -887220,
            tickUpper: 887220,
            amount0Desired,
            amount1Desired,
            amount0Min,
            amount1Min,
            recipient: OWNER_ADDRESS,
            deadline: FIXED_DEADLINE,
          },
        ],
      })

      expect(txInfo.transaction.calldata).toBe(expectedCalldata)
      expect(txInfo.transaction.target.value.toLowerCase()).toBe(NPM_ADDRESS.toLowerCase())
      expect(txInfo.transaction.value).toBe('0')
    })

    it('throws when the provided amounts do not match the pool tokens', async () => {
      ctx.provider.multicall.mockResolvedValueOnce([TOKEN0_ADDRESS, TOKEN1_ADDRESS, 3000])

      const unrelatedToken = {
        ...token0,
        address: { value: '0x9999999999999999999999999999999999999999', type: 'Ethereum' },
      }
      const badAmount = TokenAmount.createFrom({ token: unrelatedToken, amount: '1' })

      await expect(
        features.getProvideLiquidityTransaction({
          poolId: { address: { value: POOL_ADDRESS }, chainId: chainInfo.chainId } as any,
          amounts: [badAmount, badAmount],
          user: { wallet: { address: { value: OWNER_ADDRESS } } } as any,
        }),
      ).rejects.toThrow('Provided amounts do not match the pool tokens')
    })
  })

  describe('getRemoveLiquidityTransaction (decreaseLiquidity calldata)', () => {
    function mockPosition(totalLiquidity: bigint) {
      ctx.provider.readContract.mockResolvedValueOnce([
        0n, // nonce
        '0x0000000000000000000000000000000000000000', // operator
        TOKEN0_ADDRESS,
        TOKEN1_ADDRESS,
        3000, // fee
        -100, // tickLower
        100, // tickUpper
        totalLiquidity,
        0n, // feeGrowthInside0LastX128
        0n, // feeGrowthInside1LastX128
        0n, // tokensOwed0
        0n, // tokensOwed1
      ])
    }

    it('derives the actual on-chain liquidity to remove instead of reinterpreting the requested token amount as `L`', async () => {
      mockPosition(1_000_000n)

      // Full-position simulate: removing all 1_000_000n liquidity currently yields 1000/2000
      ctx.provider.simulateContract.mockResolvedValueOnce({
        result: [1000n * 10n ** 18n, 2000n * 10n ** 18n],
      })
      // Partial-liquidity simulate: removing the derived 200_000n liquidity
      ctx.provider.simulateContract.mockResolvedValueOnce({
        result: [200n * 10n ** 18n, 400n * 10n ** 18n],
      })

      const requestedAmount = TokenAmount.createFrom({ token: token0, amount: '200' })

      const txInfo = await features.getRemoveLiquidityTransaction({
        positionId: {
          tokenId: '42',
          poolId: { address: { value: POOL_ADDRESS }, chainId: chainInfo.chainId },
        } as any,
        amount: requestedAmount,
        user: { wallet: { address: { value: OWNER_ADDRESS } } } as any,
      })

      // 200e18 is 20% of the full-removal 1000e18 token0 total => 20% of 1_000_000n liquidity
      const expectedLiquidity = 200_000n
      const expectedAmount0Min = (200n * 10n ** 18n * 9950n) / 10000n
      const expectedAmount1Min = (400n * 10n ** 18n * 9950n) / 10000n

      const expectedCalldata = encodeFunctionData({
        abi: UNISWAP_V3_NPM_ABI,
        functionName: 'decreaseLiquidity',
        args: [
          {
            tokenId: 42n,
            liquidity: expectedLiquidity,
            amount0Min: expectedAmount0Min,
            amount1Min: expectedAmount1Min,
            deadline: FIXED_DEADLINE,
          },
        ],
      })

      expect(txInfo.transaction.calldata).toBe(expectedCalldata)
      expect(ctx.provider.simulateContract).toHaveBeenCalledTimes(2)
    })

    it('caps liquidity removal at the position total and only simulates once when removing 100%', async () => {
      mockPosition(1_000_000n)
      ctx.provider.simulateContract.mockResolvedValueOnce({
        result: [1000n * 10n ** 18n, 2000n * 10n ** 18n],
      })

      // Request the exact full token0 amount => should resolve to the full liquidity without a
      // second simulate call.
      const requestedAmount = TokenAmount.createFrom({ token: token0, amount: '1000' })

      const txInfo = await features.getRemoveLiquidityTransaction({
        positionId: {
          tokenId: '42',
          poolId: { address: { value: POOL_ADDRESS }, chainId: chainInfo.chainId },
        } as any,
        amount: requestedAmount,
        user: { wallet: { address: { value: OWNER_ADDRESS } } } as any,
      })

      const decoded = encodeFunctionData({
        abi: UNISWAP_V3_NPM_ABI,
        functionName: 'decreaseLiquidity',
        args: [
          {
            tokenId: 42n,
            liquidity: 1_000_000n,
            amount0Min: (1000n * 10n ** 18n * 9950n) / 10000n,
            amount1Min: (2000n * 10n ** 18n * 9950n) / 10000n,
            deadline: FIXED_DEADLINE,
          },
        ],
      })

      expect(txInfo.transaction.calldata).toBe(decoded)
      expect(ctx.provider.simulateContract).toHaveBeenCalledTimes(1)
    })

    it('throws if the position has no liquidity', async () => {
      mockPosition(0n)

      await expect(
        features.getRemoveLiquidityTransaction({
          positionId: {
            tokenId: '42',
            poolId: { address: { value: POOL_ADDRESS }, chainId: chainInfo.chainId },
          } as any,
          amount: TokenAmount.createFrom({ token: token0, amount: '1' }),
          user: { wallet: { address: { value: OWNER_ADDRESS } } } as any,
        }),
      ).rejects.toThrow('Position has no liquidity to remove')
    })

    it('throws if the requested amount token does not belong to the position', async () => {
      mockPosition(1_000_000n)

      const unrelatedToken = {
        ...token0,
        address: { value: '0x9999999999999999999999999999999999999999', type: 'Ethereum' },
      }

      await expect(
        features.getRemoveLiquidityTransaction({
          positionId: {
            tokenId: '42',
            poolId: { address: { value: POOL_ADDRESS }, chainId: chainInfo.chainId },
          } as any,
          amount: TokenAmount.createFrom({ token: unrelatedToken, amount: '1' }),
          user: { wallet: { address: { value: OWNER_ADDRESS } } } as any,
        }),
      ).rejects.toThrow('The requested removal amount token does not belong to this position')
    })

    it('throws when the positionId has no tokenId', async () => {
      await expect(
        features.getRemoveLiquidityTransaction({
          positionId: { poolId: { address: { value: POOL_ADDRESS }, chainId: chainInfo.chainId } } as any,
          amount: TokenAmount.createFrom({ token: token0, amount: '1' }),
          user: { wallet: { address: { value: OWNER_ADDRESS } } } as any,
        }),
      ).rejects.toThrow('Uniswap V3 requires a tokenId to remove liquidity')
    })
  })

  describe('getLiquidityPoolInfo (read)', () => {
    it('reads token0/token1 and computes TVL from actual pool balances priced via the oracle', async () => {
      ctx.provider.multicall
        .mockResolvedValueOnce([TOKEN0_ADDRESS, TOKEN1_ADDRESS])
        .mockResolvedValueOnce([1000n * 10n ** 18n, 500n * 10n ** 6n])

      ctx.tokensManager.getTokenByAddress
        .mockResolvedValueOnce(token0)
        .mockResolvedValueOnce(token1WithDifferentDecimals)

      ctx.oracleManager.getSpotPrice
        .mockResolvedValueOnce({
          price: Price.createFrom({ value: '2', base: token0, quote: FiatCurrency.USD }),
        })
        .mockResolvedValueOnce({
          price: Price.createFrom({
            value: '1',
            base: token1WithDifferentDecimals,
            quote: FiatCurrency.USD,
          }),
        })

      const poolInfo = await features.getLiquidityPoolInfo({
        address: { value: POOL_ADDRESS },
        chainId: chainInfo.chainId,
      } as any)

      expect(poolInfo.tokens).toEqual([token0, token1WithDifferentDecimals])
      // 1000 token0 @ $2 = $2000, 500 token1 @ $1 = $500 => $2500 total
      expect(poolInfo.totalValueLocked.amount).toBe('2500')
      expect(poolInfo.totalValueLocked.fiat).toBe(FiatCurrency.USD)
    })
  })

  describe('getLiquidityPosition (read)', () => {
    it('reads the position from the NPM and derives current amounts via a static decreaseLiquidity simulation', async () => {
      ctx.provider.multicall.mockResolvedValueOnce([
        [
          0n, // nonce
          '0x0000000000000000000000000000000000000000', // operator (NOT the owner)
          TOKEN0_ADDRESS,
          TOKEN1_ADDRESS,
          3000,
          -100,
          100,
          500_000n, // liquidity
          0n,
          0n,
          1n * 10n ** 18n, // tokensOwed0 = 1 token0
          2n * 10n ** 17n, // tokensOwed1 = 0.2 token1
        ],
        OWNER_ADDRESS,
      ])

      ctx.tokensManager.getTokenByAddress
        .mockResolvedValueOnce(token0)
        .mockResolvedValueOnce(token1)

      ctx.provider.simulateContract.mockResolvedValueOnce({
        result: [100n * 10n ** 18n, 50n * 10n ** 18n],
      })

      const position = await features.getLiquidityPosition({
        tokenId: '42',
        poolId: { address: { value: POOL_ADDRESS }, chainId: chainInfo.chainId },
      } as any)

      expect(position.currentAmounts[0].amount).toBe('100')
      expect(position.currentAmounts[1].amount).toBe('50')
      expect(position.claimableRewards[0].amount).toBe('1')
      expect(position.claimableRewards[1].amount).toBe('0.2')
      expect(position.tickLower).toBe(-100)
      expect(position.tickUpper).toBe(100)

      // The static call must use the ACTUAL owner (read via `ownerOf`), not the NPM's `operator`
      // field, otherwise the simulated call's authorization check would use the wrong account.
      expect(ctx.provider.simulateContract).toHaveBeenCalledWith(
        expect.objectContaining({ account: OWNER_ADDRESS }),
      )
    })

    it('returns zero amounts and skips simulation for an empty (fully withdrawn) position', async () => {
      ctx.provider.multicall.mockResolvedValueOnce([
        [
          0n,
          '0x0000000000000000000000000000000000000000',
          TOKEN0_ADDRESS,
          TOKEN1_ADDRESS,
          3000,
          -100,
          100,
          0n, // liquidity
          0n,
          0n,
          0n,
          0n,
        ],
        OWNER_ADDRESS,
      ])

      ctx.tokensManager.getTokenByAddress
        .mockResolvedValueOnce(token0)
        .mockResolvedValueOnce(token1)

      const position = await features.getLiquidityPosition({
        tokenId: '7',
        poolId: { address: { value: POOL_ADDRESS }, chainId: chainInfo.chainId },
      } as any)

      expect(position.currentAmounts[0].amount).toBe('0')
      expect(position.currentAmounts[1].amount).toBe('0')
      expect(ctx.provider.simulateContract).not.toHaveBeenCalled()
    })

    it('throws when the positionId has no tokenId', async () => {
      await expect(
        features.getLiquidityPosition({
          poolId: { address: { value: POOL_ADDRESS }, chainId: chainInfo.chainId },
        } as any),
      ).rejects.toThrow('Uniswap V3 requires a tokenId to fetch a position')
    })
  })
})
