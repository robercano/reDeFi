import { ILendingSimulator } from '../../interfaces/simulations/ILendingSimulator'
import { RPCMainClientType } from '../../rpc/SDKMainClient'
import {
  ITokenAmount,
  ILendingPoolId,
  ISimulation,
} from '@thesolidchain/sdk-common'

export class LendingSimulator implements ILendingSimulator {
  public constructor(private readonly rpcClient: RPCMainClientType) {}

  async simulateSupply(params: {
    poolId: ILendingPoolId
    amount: ITokenAmount
  }): Promise<ISimulation> {
    return await this.rpcClient.simulator.lend.simulateSupply.query(params)
  }

  async simulateBorrow(params: {
    poolId: ILendingPoolId
    amount: ITokenAmount
  }): Promise<ISimulation> {
    return await this.rpcClient.simulator.lend.simulateBorrow.query(params)
  }
}
