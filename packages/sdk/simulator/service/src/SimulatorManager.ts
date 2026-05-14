import {
  ISimulatorManager,
  ILendingSimulatorManager,
  IStakeSimulatorManager,
  ITransferSimulatorManager,
  IYieldSimulatorManager,
} from '@thesolidchain/simulator-common'

export class SimulatorManager implements ISimulatorManager {
  readonly lend: ILendingSimulatorManager
  readonly stake: IStakeSimulatorManager
  readonly transfer: ITransferSimulatorManager
  readonly yield: IYieldSimulatorManager

  constructor() {
    // Stubs for phase 1. These will be properly implemented in phase 2.
    this.lend = {} as ILendingSimulatorManager
    this.stake = {} as IStakeSimulatorManager
    this.transfer = {} as ITransferSimulatorManager
    this.yield = {} as IYieldSimulatorManager
  }
}
