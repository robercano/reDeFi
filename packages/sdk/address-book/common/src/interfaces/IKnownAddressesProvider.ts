import type { IAddress, IChainInfo, Maybe } from '@thesolidchain/sdk-common'

/**
 * IKnownAddressesProvider
 * Interface for providing globally known and deterministic smart contract addresses
 * across different chains (e.g., Multicall3, Permit2).
 */
export interface IKnownAddressesProvider {
  /**
   * getAddress
   * Retrieves the address of a known contract by its name and chain.
   *
   * @param params.chainInfo The chain information to retrieve the address for
   * @param params.name The name of the contract to retrieve
   *
   * @returns The address of the known contract, or undefined if not found
   */
  getAddress(params: { chainInfo: IChainInfo; name: string }): Maybe<IAddress>
}
