import { IToken, ITokenAmount, IPercentage, IFiatCurrencyAmount } from '@thesolidchain/sdk-common'

/**
 * Data Transfer Object containing the aggregated data for a Yearn Vault.
 * @public
 */
export interface YearnVaultDto {
  /** The underlying asset token of the vault (e.g., DAI, USDC). */
  underlyingToken: IToken
  /** The receipt token issued by the vault (e.g., yvDAI). */
  receiptToken: IToken
  /** The current APY (Annual Percentage Yield) of the vault as a percentage. */
  currentApy: IPercentage
  /** The total value locked in the vault, represented in fiat currency (USD). */
  totalValueLocked: IFiatCurrencyAmount
}

/**
 * Data Transfer Object representing a specific user's position in a Yearn Vault.
 * @public
 */
export interface YearnPositionDto {
  /** The total principal amount deposited by the user, denominated in the underlying token. */
  principalAmount: ITokenAmount
  /** The current value of the user's position, denominated in the underlying token. */
  currentAmount: ITokenAmount
}

/**
 * The data source interface for the Yearn protocol plugin.
 * Responsible for fetching all necessary on-chain and off-chain data related to Yearn vaults.
 * @public
 */
export interface IYearnDataSource {
  /**
   * Fetches vault-level aggregated data such as underlying tokens, TVL, and APY.
   *
   * @param vaultAddress - The contract address of the Yearn vault.
   * @returns A promise resolving to the Vault DTO.
   */
  getVault(vaultAddress: string): Promise<YearnVaultDto>

  /**
   * Fetches user-specific position data for a given vault.
   *
   * @param vaultAddress - The contract address of the Yearn vault.
   * @param userAddress - The address of the user holding the position.
   * @returns A promise resolving to the Position DTO.
   */
  getUserPosition(vaultAddress: string, userAddress: string): Promise<YearnPositionDto>
}
