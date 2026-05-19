import { ISimulation, ISwapSimulationParams } from '@thesolidchain/sdk-common'
import { ISwapSimulatorManager } from '@thesolidchain/simulator-common'
import { IRPCClient } from '../../interfaces/IRPCClient'

export class SwapSimulator extends IRPCClient implements ISwapSimulatorManager {
  async simulateSwap(params: ISwapSimulationParams): Promise<ISimulation> {
    return await this.rpcClient.simulator.swap.simulateSwap.query(params)
  }
}
