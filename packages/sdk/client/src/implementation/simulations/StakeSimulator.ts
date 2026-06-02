import { IStakeSimulator } from '../../interfaces/simulations/IStakeSimulator'
import { RPCMainClientType } from '../../rpc/SDKMainClient'
import {
  ITokenAmount,
  IStakingPoolId,
  IStakingPositionId,
  ISimulation,
} from '@thesolidchain/sdk-common'

export class StakeSimulator implements IStakeSimulator {
  public constructor(private readonly rpcClient: RPCMainClientType) {}

  async simulateStake(params: {
    poolId: IStakingPoolId
    amount: ITokenAmount
  }): Promise<ISimulation> {
    return await this.rpcClient.simulator.stake.simulateStake.query(params)
  }

  async simulateUnstake(params: {
    positionId: IStakingPositionId
    amount: ITokenAmount
  }): Promise<ISimulation> {
    return await this.rpcClient.simulator.stake.simulateUnstake.query(params)
  }

  async simulateClaim(params: { positionId: IStakingPositionId }): Promise<ISimulation> {
    return await this.rpcClient.simulator.stake.simulateClaim.query(params)
  }
}
