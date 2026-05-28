import {
  ITokenAmount,
  ILiquidityPoolId,
  ILiquidityPositionId,
  ISimulation,
} from '@thesolidchain/sdk-common'

export interface ILiquiditySimulatorManager {
  simulateProvide(params: {
    poolId: ILiquidityPoolId
    amounts: ITokenAmount[]
    tickLower?: number
    tickUpper?: number
  }): Promise<ISimulation>

  simulateRemove(params: {
    positionId: ILiquidityPositionId
    amount: ITokenAmount
  }): Promise<ISimulation>
}
