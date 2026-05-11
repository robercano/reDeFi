import {
  ILendingPool,
  ILendingPoolIdData,
  ILendingPoolInfo,
  ILendingPosition,
  ILendingPositionIdData,
  TransactionInfo,
  IUser,
  TokenAmount,
} from '@thesolidchain/sdk-common'

/**
 * @interface ILendingProtocolFeatures
 * Contains all lending-specific capabilities for a protocol plugin
 */
export interface ILendingProtocolFeatures {
  getLendingPool(poolId: ILendingPoolIdData): Promise<ILendingPool>
  getLendingPoolInfo(poolId: ILendingPoolIdData): Promise<ILendingPoolInfo>
  getLendingPosition(positionId: ILendingPositionIdData): Promise<ILendingPosition>
  getSupplyTransaction(params: {
    poolId: ILendingPoolIdData
    amount: TokenAmount
    user: IUser
  }): Promise<TransactionInfo>
}
