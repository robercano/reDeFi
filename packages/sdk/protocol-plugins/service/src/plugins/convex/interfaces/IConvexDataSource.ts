import { IToken, ITokenAmount, IPercentage, IFiatCurrencyAmount } from '@thesolidchain/sdk-common'

export interface ConvexPoolDto {
  underlyingToken: IToken
  receiptToken: IToken
  currentApy: IPercentage
  totalValueLocked?: IFiatCurrencyAmount
  /**
   * The real Convex Booster pool ID for this reward pool, resolved on-chain from the reward
   * pool contract itself (see #10). Callers building a `Booster.deposit` transaction MUST use
   * this value — it is never hardcoded/defaulted, since depositing with the wrong pid moves
   * user funds into an unrelated pool.
   */
  pid: bigint
}

export interface ConvexPositionDto {
  currentAmount: ITokenAmount
  principalAmount: ITokenAmount
}

export interface IConvexDataSource {
  getPool(tokenAddress: string): Promise<ConvexPoolDto>
  getUserPosition(tokenAddress: string, userAddress: string): Promise<ConvexPositionDto>
  /**
   * Resolves ONLY the real Convex Booster pool ID for the reward pool at `tokenAddress`, via a
   * single `pid()` read on that same reward pool contract (see #10). This is the lightweight
   * path for the deposit hot path — unlike `getPool`, it does not run token-metadata lookups,
   * TVL, or APY calculations.
   *
   * Fund-safety invariant: implementations MUST NOT wrap this read in a try/catch or apply any
   * fallback/default — a revert MUST propagate so a deposit can never silently target pool 0.
   */
  getPid(tokenAddress: string): Promise<bigint>
}
