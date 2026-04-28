import { IAddressBookManager } from '@thesolidchain/address-book-common'
import type { IBlockchainClient } from '@thesolidchain/blockchain-client-common'
import { IOracleManager } from '@thesolidchain/oracle-common'
import { ISwapManager } from '@thesolidchain/swap-common'
import { ITokensManager } from '@thesolidchain/tokens-common'

/**
 * IProtocolPluginContext
 * This is the context that will be passed to the protocol plugins to inject the different
 *              services that they might need
 */
export interface IProtocolPluginContext {
  /** The public client to interact with the blockchain */
  provider: IBlockchainClient
  /** The tokens manager to retrieve token information */
  tokensManager: ITokensManager
  /** The oracle service to fetch prices */
  oracleManager: IOracleManager
  /** The swap manager to request swap quotes and calldata */
  swapManager: ISwapManager
  /** Address book to retrieve contract addresses */
  addressBookManager: IAddressBookManager
}
