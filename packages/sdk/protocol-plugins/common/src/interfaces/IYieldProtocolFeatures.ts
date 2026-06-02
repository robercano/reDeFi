import {
  IYieldPoolId,
  IYieldPoolInfo,
  IYieldPositionId,
  IYieldPosition,
  ITokenAmount,
  IUser,
  TransactionInfo,
} from '@thesolidchain/sdk-common'

/**
 * @interface IYieldProtocolFeatures
 * Contains all yield-specific capabilities for a protocol plugin.
 */
export interface IYieldProtocolFeatures {
  getYieldPoolInfo(poolId: IYieldPoolId): Promise<IYieldPoolInfo>
  getYieldPosition(positionId: IYieldPositionId): Promise<IYieldPosition>
  getDepositTransaction(params: {
    poolId: IYieldPoolId
    amount: ITokenAmount
    user: IUser
  }): Promise<TransactionInfo>
  getWithdrawTransaction(params: {
    positionId: IYieldPositionId
    amount: ITokenAmount
    user: IUser
  }): Promise<TransactionInfo>

  getClaimTransaction(params: {
    positionId: IYieldPositionId
    user: IUser
  }): Promise<TransactionInfo>
}
