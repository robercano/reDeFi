import type { IAddress, IChainInfo, Maybe } from '@thesolidchain/sdk-common'

/**
 * IAddressBookManager
 * Interface for the IAddressBookManager. Allows to retrieve the address of a contract
 *              in a certain Chain by its address. It is used to retrieve the addresses of the
 *              deployments but also to retrieve the addresses of the dependencies of the
 *              system
 *
 * NOTICE: For tokens you should use the ITokensManager instead
 */
export interface IAddressBookManager {
  /**
   * getAddressByName
   * Retrieves the address of a contract by its name
   *
   * @param params.chainInfo The chain information of the token to retrieve
   * @param params.name The name of the contract to retrieve
   *
   * @returns The address of the contract with the given name
   */
  getAddressByName(params: { chainInfo: IChainInfo; name: string }): Promise<Maybe<IAddress>>

  /**
   * registerAddresses
   * Allows plugins or services to register their own addresses statically
   *
   * @param addresses A nested record mapping chainId to a map of contract names to addresses
   */
  registerAddresses(addresses: Record<number, Record<string, string>>): void
}
