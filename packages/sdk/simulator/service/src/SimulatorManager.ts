import {
  ISimulatorManager,
  ILendingSimulatorManager,
  IStakeSimulatorManager,
  ITransferSimulatorManager,
  IYieldSimulatorManager,
} from '@thesolidchain/simulator-common'
import { IProtocolManager } from '@thesolidchain/protocol-manager-common'
import { IBlockchainManager } from '@thesolidchain/blockchain-client-common'

import { LendingSimulatorManager } from './LendingSimulatorManager'
import { YieldSimulatorManager } from './YieldSimulatorManager'
import { StakeSimulatorManager } from './StakeSimulatorManager'
import { TransferSimulatorManager } from './TransferSimulatorManager'

export class SimulatorManager implements ISimulatorManager {
  readonly lend: ILendingSimulatorManager
  readonly stake: IStakeSimulatorManager
  readonly transfer: ITransferSimulatorManager
  readonly yield: IYieldSimulatorManager

  constructor(protocolManager: IProtocolManager, blockchainManager: IBlockchainManager) {
    this.lend = new LendingSimulatorManager(protocolManager, blockchainManager)
    this.stake = new StakeSimulatorManager(protocolManager, blockchainManager)
    this.transfer = new TransferSimulatorManager(protocolManager, blockchainManager)
    this.yield = new YieldSimulatorManager(protocolManager, blockchainManager)
  }
}
