import { IBlockchainManager } from '@thesolidchain/blockchain-client-common'
import { IConfigurationProvider } from '@thesolidchain/configuration-provider-common'
import { IContractsProvider, IERC20, IERC4626 } from '@thesolidchain/contracts-provider-common'
import { IAddress, IChainInfo } from '@thesolidchain/sdk-common'
import { ContractsFactory } from '../factory/ContractsFactory'

/**
 * ContractsProvider
 * Service that acts as a central factory for obtaining type-safe contract instances
 * bound to specific blockchain clients. This abstracts the underlying logic of fetching
 * the client and instantiating the contract.
 *
 * @implements IContractsProvider
 */
export class ContractsProvider implements IContractsProvider {
  private _configProvider: IConfigurationProvider
  private _blockchainClientProvider: IBlockchainManager

  /**
   * Initializes the ContractsProvider
   * 
   * @param params.configProvider - The configuration provider to access SDK config
   * @param params.blockchainClientProvider - The manager responsible for providing active blockchain clients
   */
  constructor(params: {
    configProvider: IConfigurationProvider
    blockchainClientProvider: IBlockchainManager
  }) {
    this._configProvider = params.configProvider
    this._blockchainClientProvider = params.blockchainClientProvider
  }

  /** PUBLIC */

  /**
   * Retrieves an instance of an ERC20 contract bounded to the specific chain's client.
   * 
   * @param params.chainInfo - Information about the chain where the contract is deployed
   * @param params.address - The on-chain address of the ERC20 contract
   * @returns A promise resolving to an `IERC20` interface for interacting with the contract
   */
  async getErc20Contract(params: { chainInfo: IChainInfo; address: IAddress }): Promise<IERC20> {
    return ContractsFactory.getERC20({
      blockchainClient: this._blockchainClientProvider.getBlockchainClient({
        chainInfo: params.chainInfo,
      }),
      chainInfo: params.chainInfo,
      address: params.address,
    }) as unknown as IERC20
  }

  /**
   * Retrieves an instance of an ERC4626 Vault contract bounded to the specific chain's client.
   * 
   * @param params.chainInfo - Information about the chain where the contract is deployed
   * @param params.address - The on-chain address of the ERC4626 contract
   * @returns A promise resolving to an `IERC4626` interface for interacting with the vault
   */
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
