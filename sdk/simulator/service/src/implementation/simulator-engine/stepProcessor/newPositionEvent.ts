import { steps } from '@thesolidchain/sdk-common'
import type { StepOutputProcessor } from '../../../interfaces/steps'

export const newPositionEventProcessor: StepOutputProcessor<steps.NewPositionEventStep> = async (
  step,
) => {
  return {
    ...step,
    outputs: undefined,
  }
}
