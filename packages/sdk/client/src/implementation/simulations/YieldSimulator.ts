import { IYieldSimulator } from '../../interfaces/simulations/IYieldSimulator'
import { RPCMainClientType } from '../../rpc/SDKMainClient'
import {
  ITokenAmount,
  IYieldPoolId,
  IYieldPositionId,
  ISimulation,
} from '@thesolidchain/sdk-common'

export class YieldSimulator implements IYieldSimulator {
  public constructor(private readonly rpcClient: RPCMainClientType) {}

  async simulateDeposit(params: {
    poolId: IYieldPoolId
    amount: ITokenAmount
  }): Promise<ISimulation> {
    return await this.rpcClient.simulator.yield.simulateDeposit.query(params)
  }

  async simulateWithdraw(params: {
    positionId: IYieldPositionId
    amount: ITokenAmount
  }): Promise<ISimulation> {
    return await this.rpcClient.simulator.yield.simulateWithdraw.query(params)
  }
}
