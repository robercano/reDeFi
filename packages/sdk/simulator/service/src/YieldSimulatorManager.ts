import { IYieldSimulatorManager } from '@thesolidchain/simulator-common'
import { IProtocolManager } from '@thesolidchain/protocol-manager-common'
import { IBlockchainManager } from '@thesolidchain/blockchain-client-common'
import {
  ITokenAmount,
  IYieldPoolId,
  IYieldPositionId,
  ISimulation,
  SimulationSteps,
  YieldSimulation,
} from '@thesolidchain/sdk-common'

export class YieldSimulatorManager implements IYieldSimulatorManager {
  public constructor(
    private readonly protocolManager: IProtocolManager,
    private readonly blockchainManager: IBlockchainManager,
  ) {}

  async simulateDeposit(params: {
    poolId: IYieldPoolId
    amount: ITokenAmount
  }): Promise<ISimulation> {
    await this.protocolManager.yield.getYieldPoolInfo(params.poolId)

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
      } as unknown as ISimulation['steps'][number],
    ]

    return new YieldSimulation({
      steps,
      balanceChanges: [],
      gasEstimations: [],
    })
  }

  async simulateWithdraw(params: {
    positionId: IYieldPositionId
    amount: ITokenAmount
  }): Promise<ISimulation> {
    await this.protocolManager.yield.getYieldPosition(params.positionId)

    const steps = [
      {
        type: SimulationSteps.WithdrawYield,
        input: {
          withdrawAmount: { value: params.amount },
          position: params.positionId, // Notice: We store ID here, order planner will resolve
        },
        output: {
          withdrawAmount: params.amount,
        },
      } as unknown as ISimulation['steps'][number],
    ]

    return new YieldSimulation({
      steps,
      balanceChanges: [],
      gasEstimations: [],
    })
  }
}
