import { IAddressBookManager } from '@thesolidchain/address-book-common'
import type { IBlockchainClientProvider } from '@thesolidchain/blockchain-client-common'
import { ConfigurationProvider } from '@thesolidchain/configuration-provider'
import { IOracleManager } from '@thesolidchain/oracle-common'
import { ProtocolPluginsRecord, ProtocolPluginsRegistry } from '@thesolidchain/protocol-plugins'
import { IProtocolPluginsRegistry } from '@thesolidchain/protocol-plugins-common'
import { ChainFamilyMap } from '@thesolidchain/sdk-common'
import { ISwapManager } from '@thesolidchain/swap-common'
import { ITokensManager } from '@thesolidchain/tokens-common'

/**
 * Create the protocol plugins registry
 * @param configProvider Configuration provider for environment variables
 * @param deployments Deployment index for the known deployments and dependencies
 * @param tokensManager Tokens manager for fetching known tokens
 * @param oracleManager Oracle manager for fetching prices for tokens
 * @param swapManager Swap manager for quoting swaps and getting calldata for performing swaps
 * @returns
 */
export function createProtocolsPluginsRegistry(params: {
  configProvider: ConfigurationProvider
  blockchainClientProvider: IBlockchainClientProvider
  tokensManager: ITokensManager
  oracleManager: IOracleManager
  swapManager: ISwapManager
  addressBookManager: IAddressBookManager
}): IProtocolPluginsRegistry {
  const {
    blockchainClientProvider,
    addressBookManager,
    swapManager,
    tokensManager,
    oracleManager,
  } = params

  return new ProtocolPluginsRegistry({
    plugins: ProtocolPluginsRecord,
    context: {
      provider: blockchainClientProvider.getBlockchainClient({
        chainInfo: ChainFamilyMap.Ethereum.Mainnet,
      }),
      tokensManager,
      oracleManager,
      swapManager,
      addressBookManager,
    },
  })
}
