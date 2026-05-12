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

  async simulateDeposit(params: { poolId: IYieldPoolId; amount: ITokenAmount }): Promise<ISimulation> {
    const poolInfo = await this.rpcClient.protocols.getYieldPoolInfo.query(params.poolId)

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
        }
      } as any // For now we cast to any since Step complex generics are not fully resolved here
    ]

    // Construct intent-based simulation output
    return new YieldSimulation({
      steps,
      balanceChanges: [],
      gasEstimations: [],
    })
  }

  async simulateWithdraw(params: { poolId: IYieldPoolId; amount: ITokenAmount }): Promise<ISimulation> {
    const poolInfo = await this.rpcClient.protocols.getYieldPoolInfo.query(params.poolId)

    const steps = [
      {
        type: SimulationSteps.WithdrawYield,
        input: {
          withdrawAmount: { value: params.amount },
          position: null as any, // In reality, we'd fetch or pass the position
        },
        output: {
          withdrawAmount: params.amount,
        }
      } as any
    ]

    return new YieldSimulation({
      steps,
      balanceChanges: [],
      gasEstimations: [],
    })
  }
}
