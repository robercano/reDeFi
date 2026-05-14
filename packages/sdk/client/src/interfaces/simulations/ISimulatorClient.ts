import { ILendingSimulator } from './ILendingSimulator'
import { IStakeSimulator } from './IStakeSimulator'
import { ITransferSimulator } from './ITransferSimulator'
import { IYieldSimulator } from './IYieldSimulator'

/**
 * Interface for the Simulator Client
 *
 * The Simulator Client is responsible for handling all the simulation related operations
 * and routing requests to the appropriate Intent Simulators.
 */
export interface ISimulatorClient {
  /** Transfer tokens between wallets or smart contracts */
  readonly transfer: ITransferSimulator
  /** Staking operations */
  readonly stake: IStakeSimulator
  /** Lending protocol operations */
  readonly lend: ILendingSimulator
  /** Passive yield protocol operations */
  readonly yield: IYieldSimulator
}
