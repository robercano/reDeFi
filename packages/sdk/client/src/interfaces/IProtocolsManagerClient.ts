import {
  Maybe,
  ILendingPool,
  ILendingPoolIdData,
  ILendingPoolInfo,
  IYieldPoolIdData,
  IYieldPoolInfo,
  IYieldPositionIdData,
  IYieldPosition,
  IStakingPoolIdData,
  IStakingPoolInfo,
  IStakingPositionIdData,
  IStakingPosition,
} from '@thesolidchain/sdk-common'

/**
 * @interface IProtocolsManagerClient
 * Interface of the ProtocolsManager for the SDK Client. Allows to retrieve information for a Protocol
 * @see IProtocolsManager
 */
export interface IProtocolsManagerClient {
  /**
   * getLendingPool
   * Get the lending pool from the protocol
   * @param {ILendingPoolIdData} params The pool id data
   * @returns {Promise<Maybe<ILendingPool>>} The lending pool
   */
  getLendingPool(params: { poolId: ILendingPoolIdData }): Promise<Maybe<ILendingPool>>

  /**
   * getLendingPoolInfo
   * Get the lending pool info from the protocol
   * @param {ILendingPoolIdData} params The pool id data
   * @returns {Promise<Maybe<ILendingPoolInfo>>} The lending pool info
   */
  getLendingPoolInfo(params: { poolId: ILendingPoolIdData }): Promise<Maybe<ILendingPoolInfo>>

  getYieldPoolInfo(params: { poolId: IYieldPoolIdData }): Promise<Maybe<IYieldPoolInfo>>
  getYieldPosition(params: { positionId: IYieldPositionIdData }): Promise<Maybe<IYieldPosition>>

  getStakingPoolInfo(params: { poolId: IStakingPoolIdData }): Promise<Maybe<IStakingPoolInfo>>
  getStakingPosition(params: { positionId: IStakingPositionIdData }): Promise<Maybe<IStakingPosition>>
}
