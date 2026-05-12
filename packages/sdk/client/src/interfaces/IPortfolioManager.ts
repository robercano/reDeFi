import type {
  ChainInfo,
  Wallet,
  Position,
  IUser,
  IUserPortfolio,
  IHolding,
} from '@thesolidchain/sdk-common'

/**
 * @interface IPortfolioManager
 * Allows to retrieve a wallet's positions by their wallet and network. This is meant to be used in isolation
 *              without having to retrieve a User or a Network
 */
export interface IPortfolioManager {
  /**
   * getPositions
   * Retrieves all positions of the given wallet for the given networks. The positions can be filtered by
   *              their IDs
   *
   * @param params.networks The list of networks to retrieve the positions for
   * @param params.wallet The wallet to retrieve the positions for
   *
   * @returns The list of positions for the given wallet and networks
   */
  getPositions(params: { networks: ChainInfo[]; wallet: Wallet }): Promise<Position[]>

  /**
   * getUserPortfolio
   * Retrieves all holdings and positions for the user resolving their Fiat balances
   *
   * @param params.user The user to retrieve the portfolio for
   */
  getUserPortfolio(params: { user: IUser }): Promise<IUserPortfolio>

  /**
   * getWalletHoldings
   * Fetches standard ERC20 wallet holdings
   *
   * @param params.user The user to retrieve the holdings for
   */
  getWalletHoldings(params: { user: IUser }): Promise<IHolding[]>
}
