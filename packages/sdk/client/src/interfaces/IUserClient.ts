import {
  IProtocol,
  Maybe,
  Position,
  PositionId,
  Order,
  ISimulation,
  IUser,
  IUserPortfolio,
} from '@thesolidchain/sdk-common'

/**
 * @interface IUserClient
 * Represents a user and allows to access their positions and to create new orders
 *
 * @dev This interface must be used to get positions for a user that will be used to create orders. To retrieve
 *      positions for portfolio please @see PortfolioManager
 */
export interface IUserClient {
  user: IUser

  /**
   * getPortfolio
   * Retrieves the full user portfolio (wallet holdings and positions)
   *
   * @returns The user portfolio
   */
  getPortfolio(): Promise<IUserPortfolio>

  /**
   * getPositionsByProtocol
   * Retrieves the list of positions of the user for a given protocol
   */
  getPositionsByProtocol(params: { protocol: IProtocol }): Promise<Position[]>

  /**
   * getPositionsByIds
   * Retrieves the list of positions of the user for the given IDs
   */
  getPositionsByIds(params: { positionIds: PositionId[] }): Promise<Position[]>

  /**
   * getPosition
   * Retrieves a position of the user by its ID
   */
  getPosition(params: { id: PositionId }): Promise<Maybe<Position>>

  /**
   * newOrder
   * Creates a new order for the user based on the given simulation
   *
   * @param params.simulation The simulation to create the order for
   *
   * @returns The new order created for the user
   */
  newOrder(params: { simulation: ISimulation }): Promise<Maybe<Order>>
}
