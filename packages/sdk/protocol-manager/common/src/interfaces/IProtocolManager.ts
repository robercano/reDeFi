import {
  ILendingPoolId,
  Maybe,
  ILendingPool,
  ILendingPoolInfo,
  ILendingPosition,
  ILendingPositionId,
  IExternalLendingPosition,
  IPositionsManager,
  TransactionInfo,
  IUser,
} from '@thesolidchain/sdk-common'

/**
 * @interface IProtocolManager
 * Interface to be implemented by a protocol manager to provide access to protocol-specific functionality
 */
export interface IProtocolManager {
  /** LENDING POOLS */

  /**
   * getLendingPool
   * Gets the lending pool for the given pool ID
   * @param params.poolId The pool ID
   * @returns The lending pool for the specific protocol
   */
  getLendingPool(poolId: ILendingPoolId): Promise<ILendingPool>

  /**
   * getLendingPoolInfo
   * Gets the extended lending pool information for the given pool ID
   * @param params.poolId The pool ID
   * @returns The extended lending pool information for the specific protocol
   */
  getLendingPoolInfo(poolId: ILendingPoolId): Promise<ILendingPoolInfo>

  /** POSITIONS */

  /**
   * getLendingPosition
   * Gets the lending position for the given lending position ID
   * @param params.positionId The lending position ID for the specific protocol
   * @returns The lending position for the specific protocol
   */
  getLendingPosition(positionId: ILendingPositionId): Promise<ILendingPosition>

  /** IMPORT POSITION */

  /**
   * getImportPositionTransaction
   * Gets the transaction to import the given external position
   * @param params.params The parameters to get the import position transaction
   * @returns The transaction to import the given external position, or undefined if not supported
   */
  getImportPositionTransaction(params: {
    user: IUser
    externalPosition: IExternalLendingPosition
    positionsManager: IPositionsManager
  }): Promise<Maybe<TransactionInfo>>
}
