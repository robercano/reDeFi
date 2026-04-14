import { steps } from '@thesolidchain/sdk-common'
import type { StepOutputProcessor } from '../../../interfaces/steps'

export const repayFlashloanOutputProcessor: StepOutputProcessor<steps.RepayFlashloanStep> = async (
  step,
) => {
  return {
    ...step,
    outputs: undefined,
  }
}
