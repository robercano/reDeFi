import { ILendingSimulatorManager } from './ILendingSimulatorManager'
import { ISwapSimulatorManager } from './ISwapSimulatorManager'
import { IStakeSimulatorManager } from './IStakeSimulatorManager'
import { ITransferSimulatorManager } from './ITransferSimulatorManager'
import { IYieldSimulatorManager } from './IYieldSimulatorManager'
import { ILiquiditySimulatorManager } from './ILiquiditySimulatorManager'

export interface ISimulatorManager {
  readonly lend: ILendingSimulatorManager
  readonly stake: IStakeSimulatorManager
  readonly transfer: ITransferSimulatorManager
  readonly yield: IYieldSimulatorManager
  readonly swap: ISwapSimulatorManager
  readonly liquidity: ILiquiditySimulatorManager
}
