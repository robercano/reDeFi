import { IPoolIdData, IPool, IPoolInfo, IPositionIdData, IPosition } from '@thesolidchain/sdk-common'

/**
 * @interface IYieldProtocolFeatures
 * Contains all yield-specific capabilities for a protocol plugin.
 * Hinted interface for future implementation.
 */
export interface IYieldProtocolFeatures {
  getYieldPool(poolId: IPoolIdData): Promise<IPool>
  getYieldPoolInfo(poolId: IPoolIdData): Promise<IPoolInfo>
  getYieldPosition(positionId: IPositionIdData): Promise<IPosition>
}
