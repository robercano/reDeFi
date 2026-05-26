import { Address, AddressValue, IAddress, IChainInfo, Maybe } from '@thesolidchain/sdk-common'
import { IKnownAddressesProvider } from '@thesolidchain/address-book-common'

/**
 * KnownAddressesProvider
 * Provides globally deterministic and known smart contract addresses across chains.
 */
export class KnownAddressesProvider implements IKnownAddressesProvider {
  /**
   * Statically maintained list of known addresses per chain.
   */
  public static readonly addresses: Record<number, Record<string, string>> = {
    // ChainId.Mainnet
    1: {
      Multicall3: '0xcA11bde05977b3631167028862bE2a173976CA11',
    },
    // ChainId.Base
    8453: {
      Multicall3: '0xcA11bde05977b3631167028862bE2a173976CA11',
    },
    // ChainId.Arbitrum
    42161: {
      Multicall3: '0xcA11bde05977b3631167028862bE2a173976CA11',
    },
    // ChainId.Optimism
    10: {
      Multicall3: '0xcA11bde05977b3631167028862bE2a173976CA11',
    },
    // ChainId.Polygon
    137: {
      Multicall3: '0xcA11bde05977b3631167028862bE2a173976CA11',
    }
  }

  /**
   * Deterministic fallback addresses across all EVM chains.
   */
  public static readonly deterministicAddresses: Record<string, string> = {
    Multicall3: '0xcA11bde05977b3631167028862bE2a173976CA11',
  }

  /** @see IKnownAddressesProvider.getAddress */
  getAddress(params: { chainInfo: IChainInfo; name: string }): Maybe<IAddress> {
    const chainAddresses = KnownAddressesProvider.addresses[params.chainInfo.chainId]
    
    // 1. Check if we have a specific address defined for this chain
    if (chainAddresses && chainAddresses[params.name]) {
      return Address.createFromEthereum({
        value: chainAddresses[params.name] as AddressValue,
      })
    }
    
    // 2. Fallback to deterministic addresses
    if (KnownAddressesProvider.deterministicAddresses[params.name]) {
      return Address.createFromEthereum({
        value: KnownAddressesProvider.deterministicAddresses[params.name] as AddressValue,
      })
    }

    return undefined
  }
}
