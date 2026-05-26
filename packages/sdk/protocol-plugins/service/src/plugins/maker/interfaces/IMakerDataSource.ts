import { IToken, ITokenAmount, Percentage, IFiatCurrencyAmount } from '@thesolidchain/sdk-common'

/**
 * DTO for the Maker Vault information.
 */
export type MakerVaultDto = {
  underlyingToken: IToken
  receiptToken: IToken
  currentApy: Percentage
  totalValueLocked: IFiatCurrencyAmount | undefined
}

/**
 * DTO for the Maker User Position information.
 */
export type MakerPositionDto = {
  currentAmount: ITokenAmount
  principalAmount: ITokenAmount
}

/**
 * Interface for the Maker data source used to fetch vault data and user positions.
 */
export interface IMakerDataSource {
  /**
   * Retrieves the vault information (APY, TVL, underlying token).
   * @param vaultAddress The address of the Maker ERC4626 vault.
   */
  getVault(vaultAddress: string): Promise<MakerVaultDto>

  /**
   * Retrieves a user's position within a given Maker vault.
   * @param vaultAddress The address of the Maker ERC4626 vault.
   * @param userAddress The address of the user.
   */
  getUserPosition(vaultAddress: string, userAddress: string): Promise<MakerPositionDto>
}
