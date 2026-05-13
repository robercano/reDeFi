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
    await this.rpcClient.protocols.getLendingPoolInfo.query(params.poolId)

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
      } as unknown as import('@thesolidchain/sdk-common').ISimulation['steps'][number],
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
    await this.rpcClient.protocols.getLendingPoolInfo.query(params.poolId)

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
      } as unknown as import('@thesolidchain/sdk-common').ISimulation['steps'][number],
    ]

    return new LendingSimulation({
      steps,
      balanceChanges: [],
      gasEstimations: [],
    })
  }
}
