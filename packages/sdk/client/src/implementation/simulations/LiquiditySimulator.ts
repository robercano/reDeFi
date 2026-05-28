import { ILiquiditySimulator } from '../../interfaces/simulations/ILiquiditySimulator'
import { RPCMainClientType } from '../../rpc/SDKMainClient'
import {
  ITokenAmount,
  ILiquidityPoolId,
  ILiquidityPositionId,
  ISimulation,
} from '@thesolidchain/sdk-common'

export class LiquiditySimulator implements ILiquiditySimulator {
  public constructor(private readonly rpcClient: RPCMainClientType) {}

  async simulateProvide(params: {
    poolId: ILiquidityPoolId
    amounts: ITokenAmount[]
    tickLower?: number
    tickUpper?: number
  }): Promise<ISimulation> {
    return await this.rpcClient.simulator.liquidity.simulateProvide.query(params)
  }

  async simulateRemove(params: {
    positionId: ILiquidityPositionId
    amount: ITokenAmount
  }): Promise<ISimulation> {
    return await this.rpcClient.simulator.liquidity.simulateRemove.query(params)
  }
}
