import { ILiquiditySimulatorManager } from '@thesolidchain/simulator-common'
import { IProtocolManager } from '@thesolidchain/protocol-manager-common'
import { IBlockchainManager } from '@thesolidchain/blockchain-client-common'
import {
  ITokenAmount,
  ILiquidityPoolId,
  ILiquidityPositionId,
  ISimulation,
  SimulationSteps,
  LiquiditySimulation,
} from '@thesolidchain/sdk-common'

export class LiquiditySimulatorManager implements ILiquiditySimulatorManager {
  public constructor(
    private readonly protocolManager: IProtocolManager,
    private readonly blockchainManager: IBlockchainManager,
  ) {}

  async simulateProvide(params: {
    poolId: ILiquidityPoolId
    amounts: ITokenAmount[]
    tickLower?: number
    tickUpper?: number
  }): Promise<ISimulation> {
    await this.protocolManager.liquidity.getLiquidityPoolInfo(params.poolId)

    const steps = [
      {
        type: SimulationSteps.ProvideLiquidity,
        inputs: {
          amounts: { value: params.amounts },
          poolId: params.poolId,
          tickLower: params.tickLower,
          tickUpper: params.tickUpper,
        },
        outputs: {
          amounts: params.amounts,
        },
      } as unknown as ISimulation['steps'][number],
    ]

    return new LiquiditySimulation({
      steps,
      balanceChanges: [],
      gasEstimations: [],
    })
  }

  async simulateRemove(params: {
    positionId: ILiquidityPositionId
    amount: ITokenAmount
  }): Promise<ISimulation> {
    const position = await this.protocolManager.liquidity.getLiquidityPosition(params.positionId)

    const steps = [
      {
        type: SimulationSteps.RemoveLiquidity,
        inputs: {
          removeAmount: { value: params.amount },
          position: position,
        },
        outputs: {
          removeAmount: params.amount,
        },
      } as unknown as ISimulation['steps'][number],
    ]

    return new LiquiditySimulation({
      steps,
      balanceChanges: [],
      gasEstimations: [],
    })
  }
}
