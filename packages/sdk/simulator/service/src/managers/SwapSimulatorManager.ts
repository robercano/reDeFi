import {
  ISimulation,
  ISwapSimulationParams,
  SimulationSteps,
  SimulationType,
  SwapStep,
} from '@thesolidchain/sdk-common'
import { ISwapSimulatorManager } from '@thesolidchain/simulator-common'

/**
 * Manager responsible for simulating swap operations
 */
export class SwapSimulatorManager implements ISwapSimulatorManager {
  /**
   * Simulates a swap operation and returns the steps needed to execute it
   * @param params Parameters for the swap simulation
   * @returns A simulation containing the exact steps, gas estimation, and outputs
   */
  async simulateSwap(params: ISwapSimulationParams): Promise<ISimulation> {
    const { sellToken, buyToken, sellAmount, slippage, preferredProvider } = params

    // TODO: Connect to the actual SDK swap provider to get quotes and route.
    // For now, returning a stubbed Swap step to satisfy the pipeline architecture.

    const swapStep: SwapStep = {
      type: SimulationSteps.Swap,
      name: 'Swap',
      inputs: {
        provider: preferredProvider || ('' as any), // Stubbed provider
        routes: [],
        spotPrice: { value: '0', decimals: 18 } as any,
        offerPrice: { value: '0', decimals: 18 } as any,
        inputAmount: sellAmount,
        estimatedReceivedAmount: { token: buyToken, amount: '0' } as any,
        minimumReceivedAmount: { token: buyToken, amount: '0' } as any,
        slippage,
      },
      outputs: {
        received: { token: buyToken, amount: '0' } as any,
      },
    }

    return {
      type: SimulationType.Swap,
      steps: [swapStep],
      balanceChanges: [],
      gasEstimations: [],
    } as unknown as ISimulation
  }
}
