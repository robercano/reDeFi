import { IToken, ITokenAmount, IPercentage, IFiatCurrencyAmount } from '@thesolidchain/sdk-common'

export interface YearnVaultDto {
  underlyingToken: IToken
  receiptToken: IToken
  currentApy: IPercentage
  totalValueLocked: IFiatCurrencyAmount
}

export interface YearnPositionDto {
  principalAmount: ITokenAmount
  currentAmount: ITokenAmount
}

export interface IYearnDataSource {
  getVault(vaultAddress: string): Promise<YearnVaultDto>
  getUserPosition(vaultAddress: string, userAddress: string): Promise<YearnPositionDto>
}
