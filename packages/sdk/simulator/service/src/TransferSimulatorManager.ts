import { ITransferSimulatorManager } from '@thesolidchain/simulator-common'
import { IProtocolManager } from '@thesolidchain/protocol-manager-common'
import { IBlockchainManager } from '@thesolidchain/blockchain-client-common'

export class TransferSimulatorManager implements ITransferSimulatorManager {
  public constructor(
    private readonly protocolManager: IProtocolManager,
    private readonly blockchainManager: IBlockchainManager,
  ) {}
}
