import {
  ILendingPool,
  ILendingPoolIdData,
  ILendingPoolInfo,
  ILendingPosition,
  ILendingPositionIdData,
  IExternalLendingPosition,
  IPositionsManager,
  TransactionInfo,
  Maybe,
  IUser,
} from '@thesolidchain/sdk-common'

/**
 * @interface ILendingProtocolFeatures
 * Contains all lending-specific capabilities for a protocol plugin
 */
export interface ILendingProtocolFeatures {
  getLendingPool(poolId: ILendingPoolIdData): Promise<ILendingPool>
  getLendingPoolInfo(poolId: ILendingPoolIdData): Promise<ILendingPoolInfo>
  getLendingPosition(positionId: ILendingPositionIdData): Promise<ILendingPosition>
  getImportPositionTransaction(params: {
    user: IUser
    externalPosition: IExternalLendingPosition
    positionsManager: IPositionsManager
  }): Promise<Maybe<TransactionInfo>>
}
