import { IStakeSimulatorManager } from '@thesolidchain/simulator-common'
import { IProtocolManager } from '@thesolidchain/protocol-manager-common'
import { IBlockchainManager } from '@thesolidchain/blockchain-client-common'

export class StakeSimulatorManager implements IStakeSimulatorManager {
  public constructor(
    private readonly protocolManager: IProtocolManager,
    private readonly blockchainManager: IBlockchainManager
  ) {}
}
