import {
  IProtocolPlugin,
  IProtocolPluginContext,
  ILendingProtocolFeatures,
  IYieldProtocolFeatures,
  IStakeProtocolFeatures,
} from '@thesolidchain/protocol-plugins-common'
import {
  ChainInfo,
  IAddress,
  IChainInfo,
  Maybe,
  ProtocolName,
} from '@thesolidchain/sdk-common'

import { getContractAddress } from '../plugins/utils/GetContractAddress'

/**
 * @class BaseProtocolPlugin
 * Base class for all protocol plugins
 *
 * It provides some extra functionality to validate input data coming from the SDK client
 */
export abstract class BaseProtocolPlugin implements IProtocolPlugin {
  /** Name of the protocol that the plugin is implementing */
  abstract readonly protocolName: ProtocolName
  /** List of supported chains for the protocol */
  abstract readonly supportedChains: ChainInfo[]

  /** Feature modules */
  readonly lending?: ILendingProtocolFeatures
  readonly yield?: IYieldProtocolFeatures
  readonly stake?: IStakeProtocolFeatures

  /** These properties are initialized in the constructor */
  private _context: Maybe<IProtocolPluginContext>

  /** INITIALIZATION */

  /** @see IProtocolPlugin.initialize */
  initialize(params: { context: IProtocolPluginContext }) {
    if (this._context) {
      throw new Error('Already initialized')
    }

    this._context = params.context

    if (!this._context.provider.chain) {
      throw new Error('ctx.provider.chain undefined')
    }

    if (!this._context.provider.chain.id) {
      throw new Error('ctx.provider.chain.id undefined')
    }
  }

  // Short alias for the context
  protected get context(): IProtocolPluginContext {
    if (!this._context) {
      throw new Error('Context not initialized')
    }

    return this._context
  }

  /** HELPERS */

  /**
   * Retrieves the contract address for a given chain
   * @param params.chainInfo The chain where the contract is deployed
   * @param params.contractName THe name of the contract
   * @returns The address of the contract or throws if not found
   */
  protected async _getContractAddress(params: {
    chainInfo: IChainInfo
    contractName: string
  }): Promise<IAddress> {
    return getContractAddress({
      addressBookManager: this.context.addressBookManager,
      chainInfo: params.chainInfo,
      contractName: params.contractName,
    })
  }

  /**
   * _checkChainIdSupported
   * @param params.chainId  The chain ID to validate
   * @returns asserts that the chain ID is supported
   */
  protected _checkChainIdSupported(chainId: number) {
    if (!this.supportedChains.some((chain) => chain.chainId === chainId)) {
      throw new Error(`Chain ID ${chainId} is not supported`)
    }
  }
}

