import {
  IYieldPoolId,
  IYieldPoolInfo,
  IYieldPositionId,
  IYieldPosition,
} from '@thesolidchain/sdk-common'

/**
 * @interface IYieldProtocolFeatures
 * Contains all yield-specific capabilities for a protocol plugin.
 */
export interface IYieldProtocolFeatures {
  getYieldPoolInfo(poolId: IYieldPoolId): Promise<IYieldPoolInfo>
  getYieldPosition(positionId: IYieldPositionId): Promise<IYieldPosition>
}
