import { IYieldSimulator } from '../../interfaces/simulations/IYieldSimulator'
import { RPCMainClientType } from '../../rpc/SDKMainClient'
import {
  ITokenAmount,
  IYieldPoolId,
  ISimulation,
  SimulationSteps,
  YieldSimulation,
} from '@thesolidchain/sdk-common'

export class YieldSimulator implements IYieldSimulator {
  public constructor(private readonly rpcClient: RPCMainClientType) {}

  async simulateDeposit(params: {
    poolId: IYieldPoolId
    amount: ITokenAmount
  }): Promise<ISimulation> {
    await this.rpcClient.protocols.getYieldPoolInfo.query(params.poolId)

    // Build the SimulationStep
    const steps = [
      {
        type: SimulationSteps.DepositYield,
        input: {
          depositAmount: { value: params.amount },
          poolId: params.poolId,
        },
        output: {
          depositAmount: params.amount,
        },
      } as unknown as import('@thesolidchain/sdk-common').ISimulation['steps'][number],
    ]

    // Construct intent-based simulation output
    return new YieldSimulation({
      steps,
      balanceChanges: [],
      gasEstimations: [],
    })
  }

  async simulateWithdraw(params: {
    poolId: IYieldPoolId
    amount: ITokenAmount
  }): Promise<ISimulation> {
    await this.rpcClient.protocols.getYieldPoolInfo.query(params.poolId)

    const steps = [
      {
        type: SimulationSteps.WithdrawYield,
        input: {
          withdrawAmount: { value: params.amount },
          position: null as unknown as import('@thesolidchain/sdk-common').IYieldPositionId,
        },
        output: {
          withdrawAmount: params.amount,
        },
      } as unknown as import('@thesolidchain/sdk-common').ISimulation['steps'][number],
    ]

    return new YieldSimulation({
      steps,
      balanceChanges: [],
      gasEstimations: [],
    })
  }
}
