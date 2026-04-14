import { ActionBuildersMap } from '@thesolidchain/protocol-plugins-common'
import { SparkDepositBorrowActionBuilder } from './SparkDepositBorrowActionBuilder'
import { SimulationSteps } from '@thesolidchain/sdk-common'
import { SparkPaybackWithdrawActionBuilder } from './SparkPaybackWithdrawActionBuilder'
import { SparkOpenPositionActionBuilder } from './SparkOpenPositionActionBuilder'

export const SparkStepBuilders: Partial<ActionBuildersMap> = {
  [SimulationSteps.DepositBorrow]: SparkDepositBorrowActionBuilder,
  [SimulationSteps.PaybackWithdraw]: SparkPaybackWithdrawActionBuilder,
  [SimulationSteps.OpenPosition]: SparkOpenPositionActionBuilder,
}
