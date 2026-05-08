import { IAddressBookManager } from '@thesolidchain/address-book-common'
import { IContractsProvider } from '@thesolidchain/contracts-provider-common'
import { IProtocolPluginsRegistry } from '@thesolidchain/protocol-plugins-common'
import { ISwapManager } from '@thesolidchain/swap-common'

/**
 * Type for the dependencies of a build order request
 */
export interface IBuildOrderDependencies {
  swapManager: ISwapManager
  addressBookManager: IAddressBookManager
  protocolsRegistry: IProtocolPluginsRegistry
  contractsProvider: IContractsProvider
}
