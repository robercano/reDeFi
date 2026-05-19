import { ISimulation, ISwapSimulationParams } from '@thesolidchain/sdk-common'

/**
 * Manager responsible for simulating swap operations
 */
export interface ISwapSimulatorManager {
  /**
   * Simulates a swap operation and returns the steps needed to execute it
   * @param params Parameters for the swap simulation
   * @returns A simulation containing the exact steps, gas estimation, and outputs
   */
  simulateSwap(params: ISwapSimulationParams): Promise<ISimulation>
}
