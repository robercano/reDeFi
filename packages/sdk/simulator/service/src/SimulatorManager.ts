import {
  ISimulatorManager,
  ILendingSimulatorManager,
  IStakeSimulatorManager,
  ITransferSimulatorManager,
  IYieldSimulatorManager,
  ISwapSimulatorManager,
} from '@thesolidchain/simulator-common'
import { IProtocolManager } from '@thesolidchain/protocol-manager-common'
import { IBlockchainManager } from '@thesolidchain/blockchain-client-common'
import { ISwapManager } from '@thesolidchain/swap-common'
import { IAllowanceManager } from '@thesolidchain/allowance-manager-common'

import { LendingSimulatorManager } from './LendingSimulatorManager'
import { YieldSimulatorManager } from './YieldSimulatorManager'
import { StakeSimulatorManager } from './StakeSimulatorManager'
import { TransferSimulatorManager } from './TransferSimulatorManager'
import { SwapSimulatorManager } from './managers/SwapSimulatorManager'

export class SimulatorManager implements ISimulatorManager {
  readonly lend: ILendingSimulatorManager
  readonly stake: IStakeSimulatorManager
  readonly transfer: ITransferSimulatorManager
  readonly yield: IYieldSimulatorManager
  readonly swap: ISwapSimulatorManager

  constructor(
    protocolManager: IProtocolManager,
    blockchainManager: IBlockchainManager,
    swapManager: ISwapManager,
    allowanceManager: IAllowanceManager,
  ) {
    this.lend = new LendingSimulatorManager(protocolManager, blockchainManager)
    this.stake = new StakeSimulatorManager(protocolManager, blockchainManager)
    this.transfer = new TransferSimulatorManager(protocolManager, blockchainManager)
    this.yield = new YieldSimulatorManager(protocolManager, blockchainManager)
    this.swap = new SwapSimulatorManager(swapManager, allowanceManager)
  }
}
