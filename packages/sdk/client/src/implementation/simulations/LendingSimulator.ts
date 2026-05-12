import { ILendingSimulator } from '../../interfaces/simulations/ILendingSimulator'
import { RPCMainClientType } from '../../rpc/SDKMainClient'
import {
  ITokenAmount,
  ILendingPoolId,
  ISimulation,
  SimulationSteps,
  LendingSimulation,
} from '@thesolidchain/sdk-common'

export class LendingSimulator implements ILendingSimulator {
  public constructor(private readonly rpcClient: RPCMainClientType) {}

  async simulateSupply(params: {
    poolId: ILendingPoolId
    amount: ITokenAmount
  }): Promise<ISimulation> {
    const poolInfo = await this.rpcClient.protocols.getLendingPoolInfo.query(params.poolId)

    // Build the SimulationStep
    const steps = [
      {
        type: SimulationSteps.DepositBorrow,
        input: {
          depositAmount: { value: params.amount },
          borrowAmount: { value: undefined },
          poolId: params.poolId,
        },
        output: {
          depositAmount: params.amount,
        },
      } as any, // Cast to any to bypass complex generics for now
    ]

    // Construct intent-based simulation output
    return new LendingSimulation({
      steps,
      balanceChanges: [],
      gasEstimations: [],
    })
  }

  async simulateBorrow(params: {
    poolId: ILendingPoolId
    amount: ITokenAmount
  }): Promise<ISimulation> {
    const poolInfo = await this.rpcClient.protocols.getLendingPoolInfo.query(params.poolId)

    const steps = [
      {
        type: SimulationSteps.DepositBorrow,
        input: {
          depositAmount: { value: undefined },
          borrowAmount: { value: params.amount },
          poolId: params.poolId,
        },
        output: {
          borrowAmount: params.amount,
        },
      } as any,
    ]

    return new LendingSimulation({
      steps,
      balanceChanges: [],
      gasEstimations: [],
    })
  }
}
