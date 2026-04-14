import { SimulationSteps } from '@thesolidchain/sdk-common'
import { ActionBuildersMap } from '@thesolidchain/protocol-plugins-common'
import {
  DepositBorrowActionBuilder,
  FlashloanActionBuilder,
  ImportPositionActionBuilder,
  PaybackWithdrawActionBuilder,
  PositionCreatedActionBuilder,
  PullTokenActionBuilder,
  RepayFlashloanActionBuilder,
  ReturnFundsActionBuilder,
  SwapActionBuilder,
  OpenPositionActionBuilder,
  SkippedStepActionBuilder,
} from '@thesolidchain/protocol-plugins'

export const ActionBuildersConfig: ActionBuildersMap = {
  [SimulationSteps.PullToken]: PullTokenActionBuilder,
  [SimulationSteps.Flashloan]: FlashloanActionBuilder,
  [SimulationSteps.Swap]: SwapActionBuilder,
  [SimulationSteps.RepayFlashloan]: RepayFlashloanActionBuilder,
  [SimulationSteps.DepositBorrow]: DepositBorrowActionBuilder,
  [SimulationSteps.PaybackWithdraw]: PaybackWithdrawActionBuilder,
  [SimulationSteps.ReturnFunds]: ReturnFundsActionBuilder,
  [SimulationSteps.NewPositionEvent]: PositionCreatedActionBuilder,
  [SimulationSteps.Import]: ImportPositionActionBuilder,
  [SimulationSteps.OpenPosition]: OpenPositionActionBuilder,
  [SimulationSteps.Skipped]: SkippedStepActionBuilder,
}
