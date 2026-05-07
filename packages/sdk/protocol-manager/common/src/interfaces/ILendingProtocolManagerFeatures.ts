import {
  ILendingPoolId,
  ILendingPool,
  ILendingPoolInfo,
  ILendingPositionId,
  ILendingPosition,
  IExternalLendingPosition,
  IPositionsManager,
  TransactionInfo,
  Maybe,
  IUser,
} from '@thesolidchain/sdk-common'

/**
 * @interface ILendingProtocolManagerFeatures
 * Protocol Manager feature router for lending capabilities
 */
export interface ILendingProtocolManagerFeatures {
  getLendingPool(poolId: ILendingPoolId): Promise<ILendingPool>
  getLendingPoolInfo(poolId: ILendingPoolId): Promise<ILendingPoolInfo>
  getLendingPosition(positionId: ILendingPositionId): Promise<ILendingPosition>
  getImportPositionTransaction(params: {
    user: IUser
    externalPosition: IExternalLendingPosition
    positionsManager: IPositionsManager
  }): Promise<Maybe<TransactionInfo>>
}
