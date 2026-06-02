import { IStakeSimulatorManager } from '@thesolidchain/simulator-common'
import { IProtocolManager } from '@thesolidchain/protocol-manager-common'
import { IBlockchainManager } from '@thesolidchain/blockchain-client-common'
import {
  ITokenAmount,
  IStakingPoolId,
  IStakingPositionId,
  ISimulation,
  SimulationSteps,
  StakingSimulation,
} from '@thesolidchain/sdk-common'

export class StakeSimulatorManager implements IStakeSimulatorManager {
  public constructor(
    private readonly protocolManager: IProtocolManager,
    private readonly blockchainManager: IBlockchainManager,
  ) {}

  async simulateStake(params: {
    poolId: IStakingPoolId
    amount: ITokenAmount
  }): Promise<ISimulation> {
    await this.protocolManager.stake.getStakingPoolInfo(params.poolId)

    const steps = [
      {
        type: SimulationSteps.Stake,
        inputs: {
          depositAmount: { value: params.amount },
          poolId: params.poolId,
        },
        outputs: {
          depositAmount: params.amount,
        },
      } as unknown as ISimulation['steps'][number],
    ]

    return new StakingSimulation({
      steps,
      balanceChanges: [],
      gasEstimations: [],
    })
  }

  async simulateUnstake(params: {
    positionId: IStakingPositionId
    amount: ITokenAmount
  }): Promise<ISimulation> {
    const position = await this.protocolManager.stake.getStakingPosition(params.positionId)

    const steps = [
      {
        type: SimulationSteps.Unstake,
        inputs: {
          withdrawAmount: { value: params.amount },
          position: position,
        },
        outputs: {
          withdrawAmount: params.amount,
        },
      } as unknown as ISimulation['steps'][number],
    ]

    return new StakingSimulation({
      steps,
      balanceChanges: [],
      gasEstimations: [],
    })
  }

  async simulateClaim(params: { positionId: IStakingPositionId }): Promise<ISimulation> {
    const position = await this.protocolManager.stake.getStakingPosition(params.positionId)

    const steps = [
      {
        type: SimulationSteps.ClaimStakeRewards,
        inputs: {
          position: position,
        },
        outputs: {},
      } as unknown as ISimulation['steps'][number],
    ]

    return new StakingSimulation({
      steps,
      balanceChanges: [],
      gasEstimations: [],
    })
  }
}
