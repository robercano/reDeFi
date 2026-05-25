import { IToken, ITokenAmount, IPercentage, IFiatCurrencyAmount } from '@thesolidchain/sdk-common'

/**
 * DTO representing Lido Pool aggregated data.
 * @public
 */
export interface LidoPoolDto {
  underlyingToken: IToken
  receiptToken: IToken
  currentApy: IPercentage
  totalValueLocked: IFiatCurrencyAmount | undefined
}

/**
 * DTO representing a user's Lido position data.
 * @public
 */
export interface LidoPositionDto {
  currentAmount: ITokenAmount
  principalAmount: ITokenAmount
}

/**
 * Defines the contract for fetching Lido on-chain and off-chain data.
 * @public
 */
export interface ILidoDataSource {
  /**
   * Retrieves aggregated information about a specific Lido token pool (e.g. stETH).
   * @param tokenAddress - The address of the Lido receipt token.
   */
  getPool(tokenAddress: string): Promise<LidoPoolDto>

  /**
   * Retrieves the current Yield position of a specific user.
   * @param tokenAddress - The address of the Lido receipt token.
   * @param userAddress - The address of the user.
   */
  getUserPosition(tokenAddress: string, userAddress: string): Promise<LidoPositionDto>
}
