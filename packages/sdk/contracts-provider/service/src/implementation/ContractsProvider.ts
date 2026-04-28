import { IBlockchainManager } from '@thesolidchain/blockchain-client-common'
import { IConfigurationProvider } from '@thesolidchain/configuration-provider-common'
import { IContractsProvider, IERC20, IERC4626 } from '@thesolidchain/contracts-provider-common'
import { IAddress, IChainInfo } from '@thesolidchain/sdk-common'
import { ContractsFactory } from '../factory/ContractsFactory'

/**
 * ContractsProvider
 * @implements IContractsProvider
 */
export class ContractsProvider implements IContractsProvider {
  private _configProvider: IConfigurationProvider
  private _blockchainClientProvider: IBlockchainManager

  /** CONSTRUCTOR */
  constructor(params: {
    configProvider: IConfigurationProvider
    blockchainClientProvider: IBlockchainManager
  }) {
    this._configProvider = params.configProvider
    this._blockchainClientProvider = params.blockchainClientProvider
  }

  /** PUBLIC */

  /** @see IContractsProvider.getErc20Contract */
  async getErc20Contract(params: { chainInfo: IChainInfo; address: IAddress }): Promise<IERC20> {
    return ContractsFactory.getERC20({
      blockchainClient: this._blockchainClientProvider.getBlockchainClient({
        chainInfo: params.chainInfo,
      }),
      chainInfo: params.chainInfo,
      address: params.address,
    }) as unknown as IERC20
  }

  /** @see IContractsProvider.getErc4626Contract */
  async getErc4626Contract(params: {
    chainInfo: IChainInfo
    address: IAddress
  }): Promise<IERC4626> {
    return ContractsFactory.getERC4626({
      blockchainClient: this._blockchainClientProvider.getBlockchainClient({
        chainInfo: params.chainInfo,
      }),
      chainInfo: params.chainInfo,
      address: params.address,
    }) as unknown as IERC4626
  }
}
