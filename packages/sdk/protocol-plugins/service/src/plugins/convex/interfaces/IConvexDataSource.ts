import { IToken, ITokenAmount, IPercentage, IFiatCurrencyAmount } from '@thesolidchain/sdk-common'

export interface ConvexPoolDto {
  underlyingToken: IToken
  receiptToken: IToken
  currentApy: IPercentage
  totalValueLocked?: IFiatCurrencyAmount
}

export interface ConvexPositionDto {
  currentAmount: ITokenAmount
  principalAmount: ITokenAmount
}

export interface IConvexDataSource {
  getPool(tokenAddress: string): Promise<ConvexPoolDto>
  getUserPosition(tokenAddress: string, userAddress: string): Promise<ConvexPositionDto>
}
