import {
  ITokenAmount,
  IStakingPoolId,
  IStakingPositionId,
  ISimulation,
} from '@thesolidchain/sdk-common'

export interface IStakeSimulatorManager {
  simulateStake(params: { poolId: IStakingPoolId; amount: ITokenAmount }): Promise<ISimulation>
  simulateUnstake(params: {
    positionId: IStakingPositionId
    amount: ITokenAmount
  }): Promise<ISimulation>
  simulateClaim(params: { positionId: IStakingPositionId }): Promise<ISimulation>
}
