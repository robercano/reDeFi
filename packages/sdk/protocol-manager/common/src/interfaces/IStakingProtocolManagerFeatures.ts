import {
  ITokenAmount,
  IUser,
  TransactionInfo,
  IStakingPoolId,
  IStakingPositionId,
  IStakingPoolInfo,
  IStakingPosition,
} from '@thesolidchain/sdk-common'

/**
 * @interface IStakingProtocolManagerFeatures
 * Features for retrieving pool info and generating transaction payloads for Staking across protocols.
 */
export interface IStakingProtocolManagerFeatures {
  /**
   * getStakingPoolInfo
   * @param poolId The ID of the staking pool
   * @returns Information about the staking pool
   */
  getStakingPoolInfo(poolId: IStakingPoolId): Promise<IStakingPoolInfo>

  /**
   * getStakingPosition
   * @param positionId The ID of the staking position
   * @returns Details about the user's staking position
   */
  getStakingPosition(positionId: IStakingPositionId): Promise<IStakingPosition>

  /**
   * getStakeTransaction
   * @param params.poolId The ID of the staking pool
   * @param params.amount The amount to stake
   * @param params.user The user executing the stake
   * @returns Transaction information to stake
   */
  getStakeTransaction(params: {
    poolId: IStakingPoolId
    amount: ITokenAmount
    user: IUser
  }): Promise<TransactionInfo>

  /**
   * getUnstakeTransaction
   * @param params.positionId The ID of the staking position
   * @param params.amount The amount to unstake
   * @param params.user The user executing the unstake
   * @returns Transaction information to unstake
   */
  getUnstakeTransaction(params: {
    positionId: IStakingPositionId
    amount: ITokenAmount
    user: IUser
  }): Promise<TransactionInfo>

  /**
   * getClaimTransaction
   * @param params.positionId The ID of the staking position
   * @param params.user The user claiming the rewards
   * @returns Transaction information to claim rewards
   */
  getClaimTransaction(params: {
    positionId: IStakingPositionId
    user: IUser
  }): Promise<TransactionInfo>
}
