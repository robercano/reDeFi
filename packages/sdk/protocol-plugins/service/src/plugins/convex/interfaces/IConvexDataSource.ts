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
}
