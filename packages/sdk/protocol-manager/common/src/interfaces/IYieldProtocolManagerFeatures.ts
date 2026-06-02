import {
  IYieldPoolId,
  IYieldPoolInfo,
  IYieldPositionId,
  IYieldPosition,
  IYieldTypeData,
} from '@thesolidchain/sdk-common'

/**
 * @interface IYieldProtocolManagerFeatures
 * Protocol Manager feature router for passive yield capabilities
 */
export interface IYieldProtocolManagerFeatures {
  getYieldPoolInfo(poolId: IYieldPoolId): Promise<IYieldPoolInfo>
  getYieldPosition(positionId: IYieldPositionId): Promise<IYieldPosition>
  getClaimTransaction(params: {
    positionId: IYieldPositionId
    user: import('@thesolidchain/sdk-common').IUser
  }): Promise<import('@thesolidchain/sdk-common').TransactionInfo>
}
