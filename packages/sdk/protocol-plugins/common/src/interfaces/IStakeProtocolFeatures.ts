import { IPoolIdData, IPool, IPoolInfo, IPositionIdData, IPosition } from '@thesolidchain/sdk-common'

/**
 * @interface IStakeProtocolFeatures
 * Contains all staking-specific capabilities for a protocol plugin.
 * Hinted interface for future implementation.
 */
export interface IStakeProtocolFeatures {
  getStakePool(poolId: IPoolIdData): Promise<IPool>
  getStakePoolInfo(poolId: IPoolIdData): Promise<IPoolInfo>
  getStakePosition(positionId: IPositionIdData): Promise<IPosition>
}
