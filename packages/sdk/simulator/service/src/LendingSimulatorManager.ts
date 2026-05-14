import { ILendingSimulatorManager } from '@thesolidchain/simulator-common'
import { IProtocolManager } from '@thesolidchain/protocol-manager-common'
import { IBlockchainManager } from '@thesolidchain/blockchain-client-common'
import {
  ITokenAmount,
  ILendingPoolId,
  ISimulation,
  SimulationSteps,
  LendingSimulation,
} from '@thesolidchain/sdk-common'

export class LendingSimulatorManager implements ILendingSimulatorManager {
  public constructor(
    private readonly protocolManager: IProtocolManager,
    private readonly blockchainManager: IBlockchainManager
  ) {}

  async simulateSupply(params: {
    poolId: ILendingPoolId
    amount: ITokenAmount
  }): Promise<ISimulation> {
    await this.protocolManager.lending.getLendingPoolInfo(params.poolId)

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
      } as unknown as ISimulation['steps'][number],
    ]

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
    await this.protocolManager.lending.getLendingPoolInfo(params.poolId)

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
      } as unknown as ISimulation['steps'][number],
    ]

    return new LendingSimulation({
      steps,
      balanceChanges: [],
      gasEstimations: [],
    })
  }
}
