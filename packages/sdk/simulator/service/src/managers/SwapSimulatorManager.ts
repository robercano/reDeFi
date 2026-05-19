import {
  ISimulation,
  ISwapSimulationParams,
  SimulationSteps,
  SimulationType,
  SwapStep,
  ApproveStep,
} from '@thesolidchain/sdk-common'
import { ISwapSimulatorManager } from '@thesolidchain/simulator-common'
import { ISwapManager } from '@thesolidchain/swap-common'
import { IAllowanceManager } from '@thesolidchain/allowance-manager-common'

/**
 * Manager responsible for simulating swap operations
 */
export class SwapSimulatorManager implements ISwapSimulatorManager {
  private swapManager: ISwapManager
  private allowanceManager: IAllowanceManager

  constructor(swapManager: ISwapManager, allowanceManager: IAllowanceManager) {
    this.swapManager = swapManager
    this.allowanceManager = allowanceManager
  }

  /**
   * Simulates a swap operation and returns the steps needed to execute it
   * @param params Parameters for the swap simulation
   * @returns A simulation containing the exact steps, gas estimation, and outputs
   */
  async simulateSwap(params: ISwapSimulationParams): Promise<ISimulation> {
    const { sellToken, buyToken, sellAmount, slippage, user } = params

    const chainInfo = sellToken.chainInfo

    // 1. Get real swap data from the SwapManager
    const swapData = await this.swapManager.getSwapDataExactInput({
      fromAmount: sellAmount,
      toToken: buyToken,
      recipient: user.wallet.address,
      slippage,
    })

    const steps: (ApproveStep | SwapStep)[] = []

    // 2. Check allowance
    if (swapData.targetContract) {
      const approvalTxInfo = await this.allowanceManager.getApproval({
        chainInfo,
        spender: swapData.targetContract,
        amount: sellAmount,
        owner: user.wallet.address,
      })

      if (approvalTxInfo) {
        steps.push({
          type: SimulationSteps.Approve,
          name: 'Approve Token',
          description: `Approve ${sellToken.symbol} for Swap`,
          inputs: {
            token: sellToken,
            amount: approvalTxInfo.metadata.approvalAmount,
            spender: approvalTxInfo.metadata.approvalSpender,
          },
          outputs: {
            transaction: approvalTxInfo.transaction,
          },
        } as unknown as ApproveStep)
      }
    }

    // 3. Assemble the Swap Step
    const swapStep: SwapStep = {
      type: SimulationSteps.Swap,
      name: 'Swap Token',
      inputs: {
        provider: swapData.provider as unknown as string,
        routes: [],
        spotPrice: '0',
        offerPrice: '0',
        inputAmount: sellAmount,
        estimatedReceivedAmount: swapData.toTokenAmount,
        minimumReceivedAmount: swapData.toTokenAmount, // TODO: apply slippage to min amount
        slippage,
      },
      outputs: {
        received: swapData.toTokenAmount,
        transaction: {
          target: swapData.targetContract,
          calldata: swapData.calldata,
          value: swapData.value,
        },
      },
    } as unknown as SwapStep

    steps.push(swapStep)

    return {
      type: SimulationType.Swap,
      steps: steps,
      balanceChanges: [], // TODO: map from quote/swap data
      gasEstimations: [],
    } as unknown as ISimulation
  }
}
