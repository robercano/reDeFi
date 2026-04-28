import { IUser, Holding, UserPortfolio } from '@thesolidchain/sdk-common'

/**
 * IPortfolioManager
 * Responsible for fetching and generating a user's entire portfolio.
 * It aggregates data by interfacing with the TokensManager and OracleManager to 
 * compute current balances and fiat values across supported networks.
 */
export interface IPortfolioManager {
  /**
   * getWalletHoldings
   * Fetches all available balances for the user's wallet across common tokens
   * and calculates their current fiat values by querying spot prices.
   * 
   * @param params.params - The input parameters
   * @param params.user - The user entity containing the wallet address and target chain info
   * @returns A promise that resolves to an array of `Holding` objects representing the user's non-zero balances and fiat equivalents
   */
  getWalletHoldings(params: { user: IUser }): Promise<Holding[]>

  /**
   * getUserPortfolio
   * Calculates the full user portfolio by aggregating wallet holdings
   * and summing up the total fiat value across all detected assets. Implementations
   * may optionally implement caching mechanics here to avoid heavy repetitive API querying.
   * 
   * @param params.params - The input parameters
   * @param params.user - The user entity containing the wallet address and target chain info
   * @returns A promise that resolves to a hydrated `UserPortfolio` object
   */
  getUserPortfolio(params: { user: IUser }): Promise<UserPortfolio>
}
