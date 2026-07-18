import { IProtocolPluginContext } from '@thesolidchain/protocol-plugins-common'
import {
  Address,
  TokenAmount,
  IChainInfo,
  Percentage,
  IFiatCurrencyAmount,
} from '@thesolidchain/sdk-common'
import { BigNumber } from 'bignumber.js'
import { parseAbi } from 'viem'
import { IConvexDataSource, ConvexPoolDto, ConvexPositionDto } from '../interfaces/IConvexDataSource'

const SECONDS_PER_YEAR = 31536000

/**
 * Minimal ABI for a Convex `BaseRewardPool` contract. `pid` and `stakingToken` are public
 * state variables on the real contract (exposed as zero-arg getters), so they can be read
 * directly from the reward pool itself without needing a separate Booster pool registry.
 */
const rewardPoolAbi = parseAbi([
  'function pid() view returns (uint256)',
  'function stakingToken() view returns (address)',
  'function rewardToken() view returns (address)',
  'function rewardRate() view returns (uint256)',
])

export class DefaultConvexDataSource implements IConvexDataSource {
  constructor(private context: IProtocolPluginContext) {}

  async getPool(tokenAddress: string): Promise<ConvexPoolDto> {
    const tokenAddressObj = Address.createFromEthereum({ value: tokenAddress })
    const chainInfo = this.context.provider.chain as unknown as IChainInfo

    const receiptToken = await this.context.tokensManager.getTokenByAddress({
      chainInfo,
      address: tokenAddressObj,
    })

    // Resolve the REAL Booster pool ID and underlying LP token directly from the reward pool
    // contract (see #10). These two reads are intentionally NOT wrapped in a try/catch: a
    // deposit built with the wrong pid moves user funds into an unrelated Convex pool, so a
    // failure here must propagate rather than silently fall back to a placeholder value.
    const [pid, stakingTokenAddress] = await Promise.all([
      this.context.provider.readContract({
        address: tokenAddress as `0x${string}`,
        abi: rewardPoolAbi,
        functionName: 'pid',
      }) as Promise<bigint>,
      this.context.provider.readContract({
        address: tokenAddress as `0x${string}`,
        abi: rewardPoolAbi,
        functionName: 'stakingToken',
      }) as Promise<`0x${string}`>,
    ])

    const underlyingToken = await this.context.tokensManager.getTokenByAddress({
      chainInfo,
      address: Address.createFromEthereum({ value: stakingTokenAddress }),
    })

    // Fallback calculation for TVL
    const totalAssetsAbi = parseAbi(['function totalSupply() view returns (uint256)'])
    let tvlAmount: IFiatCurrencyAmount | undefined = undefined
    let totalSupplyRaw = 0n

    try {
      totalSupplyRaw = (await this.context.provider.readContract({
        address: tokenAddress as `0x${string}`,
        abi: totalAssetsAbi,
        functionName: 'totalSupply',
      })) as bigint

      const totalSupplyAmount = TokenAmount.createFromBaseUnit({
        token: receiptToken,
        amount: totalSupplyRaw.toString(),
      })

      const spotPriceInfo = await this.context.oracleManager.getSpotPrice({
        baseToken: receiptToken,
      })

      tvlAmount = spotPriceInfo?.price
        ? (spotPriceInfo.price.multiply(totalSupplyAmount) as IFiatCurrencyAmount)
        : undefined
    } catch (e) {
      console.warn('Failed to fetch Convex totalSupply or spot price', e)
    }

    const currentApy = await this._getCurrentApy({ tokenAddress, chainInfo, underlyingToken, totalSupplyRaw })

    return {
      underlyingToken,
      receiptToken,
      pid,
      currentApy,
      totalValueLocked: tvlAmount,
    }
  }

  /**
   * Resolves ONLY the real Convex Booster pool ID for the reward pool at `tokenAddress`, via a
   * single `pid()` read on that same reward pool contract (see #10). This is the lightweight
   * path for `getDepositTransaction` — unlike `getPool`, it does not run token-metadata
   * lookups, TVL, or APY calculations, since those are irrelevant to building a deposit and
   * would otherwise add several serial RPC/oracle stages to the fund-movement hot path.
   *
   * Fund-safety invariant: this read is intentionally NOT wrapped in a try/catch and has no
   * fallback/default — a deposit built with the wrong pid moves user funds into an unrelated
   * Convex pool, so a revert here must propagate rather than silently resolve to pool 0.
   */
  async getPid(tokenAddress: string): Promise<bigint> {
    const pid = (await this.context.provider.readContract({
      address: tokenAddress as `0x${string}`,
      abi: rewardPoolAbi,
      functionName: 'pid',
    })) as bigint

    return pid
  }

  /**
   * Computes a real, on-chain-derived base APY from the reward pool's primary reward token
   * emission rate (`rewardRate`), valued against the underlying LP token TVL (see #10 — this
   * replaces the previous hardcoded `0` mock APY).
   *
   * This is intentionally a base-APY approximation: it only accounts for the pool's primary
   * reward token and does not include secondary "extra rewards" (e.g. CVX) or Curve's
   * boosted-CRV multiplier, since those require per-pool gauge/boost data that
   * `BaseRewardPool` alone does not expose. TODO(#10): extend to extra reward tokens/boost
   * data if this plugin needs a more precise APY.
   *
   * Unlike `pid`/`stakingToken` resolution, failures here are non-fatal (soft-fail to 0%)
   * since an approximate/missing APY does not put user funds at risk the way a wrong deposit
   * pid would.
   */
  private async _getCurrentApy(params: {
    tokenAddress: string
    chainInfo: IChainInfo
    underlyingToken: ConvexPoolDto['underlyingToken']
    totalSupplyRaw: bigint
  }): Promise<Percentage> {
    const { tokenAddress, chainInfo, underlyingToken, totalSupplyRaw } = params

    try {
      if (totalSupplyRaw <= 0n) {
        return Percentage.createFrom({ value: 0 })
      }

      const [rewardTokenAddress, rewardRateRaw] = await Promise.all([
        this.context.provider.readContract({
          address: tokenAddress as `0x${string}`,
          abi: rewardPoolAbi,
          functionName: 'rewardToken',
        }) as Promise<`0x${string}`>,
        this.context.provider.readContract({
          address: tokenAddress as `0x${string}`,
          abi: rewardPoolAbi,
          functionName: 'rewardRate',
        }) as Promise<bigint>,
      ])

      if (rewardRateRaw <= 0n) {
        return Percentage.createFrom({ value: 0 })
      }

      const rewardToken = await this.context.tokensManager.getTokenByAddress({
        chainInfo,
        address: Address.createFromEthereum({ value: rewardTokenAddress }),
      })

      const annualRewardAmount = TokenAmount.createFromBaseUnit({
        token: rewardToken,
        amount: (rewardRateRaw * BigInt(SECONDS_PER_YEAR)).toString(),
      })
      const stakedAmount = TokenAmount.createFromBaseUnit({
        token: underlyingToken,
        amount: totalSupplyRaw.toString(),
      })

      const [rewardPriceInfo, stakedPriceInfo] = await Promise.all([
        this.context.oracleManager.getSpotPrice({ baseToken: rewardToken }),
        this.context.oracleManager.getSpotPrice({ baseToken: underlyingToken }),
      ])

      if (!rewardPriceInfo?.price || !stakedPriceInfo?.price) {
        return Percentage.createFrom({ value: 0 })
      }

      const annualRewardValue = rewardPriceInfo.price.multiply(annualRewardAmount) as IFiatCurrencyAmount
      const stakedValue = stakedPriceInfo.price.multiply(stakedAmount) as IFiatCurrencyAmount

      if (new BigNumber(stakedValue.amount).isZero()) {
        return Percentage.createFrom({ value: 0 })
      }

      const apyValue = new BigNumber(annualRewardValue.amount)
        .dividedBy(stakedValue.amount)
        .multipliedBy(100)
        .toNumber()

      return Percentage.createFrom({ value: apyValue })
    } catch (e) {
      console.warn('Failed to compute Convex APY from on-chain reward rate', e)
      return Percentage.createFrom({ value: 0 })
    }
  }

  async getUserPosition(tokenAddress: string, userAddress: string): Promise<ConvexPositionDto> {
    const chainInfo = this.context.provider.chain as unknown as IChainInfo
    const tokenAddressObj = Address.createFromEthereum({ value: tokenAddress })

    // TODO(#10): this still resolves token metadata from the reward pool contract address
    // itself rather than the real underlying LP token (via `stakingToken()`, as `getPool`
    // now does). Left as-is here since `balanceOf` is read against the same reward pool
    // contract and is display-only (not used to build any transaction), unlike the pid
    // resolved in `getPool`/`getDepositTransaction`.
    const underlyingToken = await this.context.tokensManager.getTokenByAddress({
      chainInfo,
      address: tokenAddressObj,
    })

    const balanceAbi = parseAbi(['function balanceOf(address) view returns (uint256)'])
    let balanceRaw = 0n

    try {
      balanceRaw = (await this.context.provider.readContract({
        address: tokenAddress as `0x${string}`,
        abi: balanceAbi,
        functionName: 'balanceOf',
        args: [userAddress as `0x${string}`],
      })) as bigint
    } catch (e) {
      console.warn('Failed to fetch Convex position balance', e)
    }

    const currentAmount = TokenAmount.createFromBaseUnit({
      token: underlyingToken,
      amount: balanceRaw.toString(),
    })

    const principalAmount = TokenAmount.createFromBaseUnit({
      token: underlyingToken,
      amount: balanceRaw.toString(),
    })

    return {
      currentAmount,
      principalAmount,
    }
  }
}
