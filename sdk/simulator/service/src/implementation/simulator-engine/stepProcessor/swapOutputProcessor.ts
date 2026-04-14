import { steps } from '@thesolidchain/sdk-common'
import type { StepOutputProcessor } from '../../../interfaces/steps'

export const swapOutputProcessor: StepOutputProcessor<steps.SwapStep> = async (step) => {
  return {
    ...step,
    outputs: {
      received: step.inputs.minimumReceivedAmount,
    },
  }
}
