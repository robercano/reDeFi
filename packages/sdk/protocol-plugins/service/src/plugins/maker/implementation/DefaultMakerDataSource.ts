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
import { IMakerDataSource, MakerVaultDto, MakerPositionDto } from '../interfaces/IMakerDataSource'

/** RAY precision (1e27) used by Maker/Sky to scale the per-second savings rate. */
const RAY = new BigNumber(10).pow(27)

/** Seconds in a (365-day) year, used to annualize the per-second savings rate. */
const SECONDS_PER_YEAR = 31_536_000

/**
 * Sane upper bound on a plausible annualized DSR/SSR APY, expressed as a fraction (10.0 = 1000%).
 * Real-world DSR/SSR values are low single-digit percentages; even a generous, never-seen-in-practice
 * rate would not approach 1000%. The vault contract's `ssr()`/`dsr()` return value is
 * attacker-influenceable (it flows from `vaultAddress`, which ultimately derives from an
 * unvalidated `poolId.vaultAddress`), so a hostile vault could return an arbitrary `uint256`
 * (e.g. `2**256-1`), which would otherwise annualize to `Infinity`. Since an `Infinity`/implausible
 * APY would always win max-APY route selection in a yield router, any annualized value above this
 * cap - or any non-finite/negative result - is treated as bogus and clamped to 0 rather than trusted.
 */
const MAX_PLAUSIBLE_APY = 10.0

/**
 * Default implementation of the Maker data source.
 * This reads the real DSR/SSR APY (from the Pot/sUSDS per-second savings rate), TVL, and user
 * balances on-chain using the ERC-4626 standard.
 */
export class DefaultMakerDataSource implements IMakerDataSource {
  constructor(private context: IProtocolPluginContext) {}

  /**
   * Reads the per-second savings rate directly from the vault contract, RAY-scaled (1e27).
   * Tries the modern Sky Savings Rate `ssr()` first (as exposed by sUSDS), and falls back to the
   * legacy DAI Savings Rate `dsr()` (as exposed by the Pot contract) if `ssr()` is unavailable.
   * Returns `undefined` if neither function is available, so callers can fall back safely to 0
   * instead of throwing and breaking `getVault`.
   * @param vaultAddress The address of the Maker/Sky ERC-4626 vault.
   */
  private async _readSavingsRate(vaultAddress: string): Promise<bigint | undefined> {
    const ssrAbi = parseAbi(['function ssr() view returns (uint256)'])
    try {
      return (await this.context.provider.readContract({
        address: vaultAddress as `0x${string}`,
        abi: ssrAbi,
        functionName: 'ssr',
      })) as bigint
    } catch {
      // ssr() unavailable (legacy vault) - fall back to the DAI Pot's dsr()
    }

    const dsrAbi = parseAbi(['function dsr() view returns (uint256)'])
    try {
      return (await this.context.provider.readContract({
        address: vaultAddress as `0x${string}`,
        abi: dsrAbi,
        functionName: 'dsr',
      })) as bigint
    } catch {
      // Neither ssr() nor dsr() is available on this vault
      return undefined
    }
  }

  /**
   * Annualizes a RAY-scaled (1e27) per-second savings rate into a fractional APY.
   *
   * The rate is always extremely close to 1.0 (e.g. ~1.000000001585489599...), with the
   * meaningful per-second yield living roughly from the 9th-10th decimal digit onward. Converting
   * the full RAY bigint to a `Number` and exponentiating directly would need ~90 bits of mantissa
   * to retain that tiny increment, but an IEEE-754 double only has 53 bits, so the increment would
   * be lost entirely (e.g. `Number(rate) / 1e27` rounds straight to `1`, giving a 0% APY).
   *
   * Instead we isolate the increment above RAY - `(rate - RAY) / RAY` - which is itself a small
   * number (~1e-9) that a double represents with full precision, and only exponentiate
   * `1 + increment`. This keeps ~15-16 significant digits of precision on the part of the rate
   * that actually determines the APY.
   * @param ratePerSecondRay The RAY-scaled (1e27) per-second savings rate.
   * @returns The fractional APY (e.g. 0.05 for 5%).
   */
  private _annualizeSavingsRate(ratePerSecondRay: bigint): number {
    const rateRay = new BigNumber(ratePerSecondRay.toString())

    // A per-second rate below RAY (1.0) would annualize to a negative APY, which is not a valid
    // DSR/SSR outcome (the rate only ever accrues). Treat it as bogus rather than propagating a
    // negative currentApy.
    if (rateRay.isLessThan(RAY)) {
      return 0
    }

    const rateIncrement = rateRay.minus(RAY).dividedBy(RAY)
    const perSecondRate = 1 + rateIncrement.toNumber()
    const apy = Math.pow(perSecondRate, SECONDS_PER_YEAR) - 1

    // Reject implausibly large annualized rates (including Infinity from a hostile/overflowing
    // vault return value) and any non-finite or negative result, falling back to the safe default
    // of 0 rather than letting an attacker-controlled vault win max-APY route selection.
    if (!Number.isFinite(apy) || apy < 0 || apy > MAX_PLAUSIBLE_APY) {
      return 0
    }

    return apy
  }

  async getVault(vaultAddress: string): Promise<MakerVaultDto> {
    const vaultAddressObj = Address.createFromEthereum({ value: vaultAddress })
    const chainInfo = this.context.provider.chain as unknown as IChainInfo

    // 1. Fetch Receipt Token
    const receiptToken = await this.context.tokensManager.getTokenByAddress({
      chainInfo,
      address: vaultAddressObj,
    })

    // 2. Fetch Underlying Token from ERC-4626 `asset()` function
    const assetAbi = parseAbi(['function asset() view returns (address)'])
    const underlyingAddress = (await this.context.provider.readContract({
      address: vaultAddress as `0x${string}`,
      abi: assetAbi,
      functionName: 'asset',
    })) as `0x${string}`

    const underlyingToken = await this.context.tokensManager.getTokenByAddress({
      chainInfo,
      address: Address.createFromEthereum({ value: underlyingAddress }),
    })

    // 3. Real APY from the on-chain per-second savings rate (Sky Savings Rate `ssr()` on sUSDS,
    // falling back to the legacy DAI Savings Rate `dsr()` on the Pot contract). Falls back to 0
    // (rather than throwing) if neither rate is exposed by this vault.
    const ratePerSecondRay = await this._readSavingsRate(vaultAddress)
    const currentApyValue =
      ratePerSecondRay !== undefined ? this._annualizeSavingsRate(ratePerSecondRay) : 0

    // 4. TVL Calculation using ERC-4626 `totalAssets()`
    const totalAssetsAbi = parseAbi(['function totalAssets() view returns (uint256)'])
    const totalAssetsRaw = (await this.context.provider.readContract({
      address: vaultAddress as `0x${string}`,
      abi: totalAssetsAbi,
      functionName: 'totalAssets',
    })) as bigint

    const totalAssetsAmount = TokenAmount.createFromBaseUnit({
      token: underlyingToken,
      amount: totalAssetsRaw.toString(),
    })

    const spotPriceInfo = await this.context.oracleManager.getSpotPrice({
      baseToken: underlyingToken,
    })
    const tvlAmount = spotPriceInfo?.price
      ? (spotPriceInfo.price.multiply(totalAssetsAmount) as IFiatCurrencyAmount)
      : undefined

    return {
      underlyingToken,
      receiptToken,
      currentApy: Percentage.createFrom({ value: currentApyValue }),
      totalValueLocked: tvlAmount,
    }
  }

  async getUserPosition(vaultAddress: string, userAddress: string): Promise<MakerPositionDto> {
    const chainInfo = this.context.provider.chain as unknown as IChainInfo

    // Fetch the underlying token from ERC-4626 `asset()`
    const assetAbi = parseAbi(['function asset() view returns (address)'])
    const underlyingAddress = (await this.context.provider.readContract({
      address: vaultAddress as `0x${string}`,
      abi: assetAbi,
      functionName: 'asset',
    })) as `0x${string}`

    const underlyingToken = await this.context.tokensManager.getTokenByAddress({
      chainInfo,
      address: Address.createFromEthereum({ value: underlyingAddress }),
    })

    // Use Multicall to get balanceOf and convertToAssets in a single block
    const vaultAbi = parseAbi([
      'function balanceOf(address) view returns (uint256)',
      'function convertToAssets(uint256 shares) view returns (uint256)',
    ])

    const balanceRaw = (await this.context.provider.readContract({
      address: vaultAddress as `0x${string}`,
      abi: vaultAbi,
      functionName: 'balanceOf',
      args: [userAddress as `0x${string}`],
    })) as bigint

    let currentAssetsRaw = 0n
    if (balanceRaw > 0n) {
      currentAssetsRaw = (await this.context.provider.readContract({
        address: vaultAddress as `0x${string}`,
        abi: vaultAbi,
        functionName: 'convertToAssets',
        args: [balanceRaw],
      })) as bigint
    }

    const currentAmount = TokenAmount.createFromBaseUnit({
      token: underlyingToken,
      amount: currentAssetsRaw.toString(),
    })

    // Without historical subgraphs, default principal to current
    const principalAmount = TokenAmount.createFromBaseUnit({
      token: underlyingToken,
      amount: currentAssetsRaw.toString(),
    })

    return {
      currentAmount,
      principalAmount,
    }
  }
}
