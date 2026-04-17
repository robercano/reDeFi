import { type ISwapManager } from '@thesolidchain/swap-common'
import { type IProtocolManager } from '@thesolidchain/protocol-manager-common'
import { type IOracleManager } from '@thesolidchain/oracle-common'

/**
 * @name IRefinanceDependencies
 * @description Dependencies required for the refinance strategy simulation
 */
export interface IRefinanceDependencies {
  /** Swap manager to quote swaps */
  swapManager: ISwapManager
  /** Oracle manager to get spot prices */
  oracleManager: IOracleManager
  /** Protocol manager to get pools  */
  protocolManager: IProtocolManager
}
