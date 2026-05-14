import { ILendingSimulatorManager } from './ILendingSimulatorManager'
import { IStakeSimulatorManager } from './IStakeSimulatorManager'
import { ITransferSimulatorManager } from './ITransferSimulatorManager'
import { IYieldSimulatorManager } from './IYieldSimulatorManager'

export interface ISimulatorManager {
  readonly lend: ILendingSimulatorManager
  readonly stake: IStakeSimulatorManager
  readonly transfer: ITransferSimulatorManager
  readonly yield: IYieldSimulatorManager
}
