import { IAddress, IChainInfo } from '@thesolidchain/sdk-common'
import { IERC20 } from '../generated/ERC20'
import { IERC4626 } from '../generated/ERC4626'

/**
 * @name IContractsProvider
 * @description Offers a set of methods to retrieve specific contract wrappers that allow to interact
 *              with their respective smart contracts.
 *
 * @dev         The returned wrapper allows to read directly from the smart contract through the view functions.
 *              It also allows to generate calldata for the write functions, but it is not capable of sending a
 *              transaction to the network. The generated calldata can be returned to the SDK client so it can
 *              be used to send the transaction through a wallet
 */
export interface IContractsProvider {
  /**
   * @name getErc20Contract
   * @description Returns an ERC20 contract wrapper
   *
   * @param {IChainInfo} chainInfo The chain information where the contract is deployed
   * @param {IAddress} address The address of the ERC20 contract
   *
   * @returns {IERC20}
   */
  getErc20Contract(params: { chainInfo: IChainInfo; address: IAddress }): Promise<IERC20>

  /**
   * @name getErc4626Contract
   * @description Returns an ERC4626 contract wrapper
   *
   * @param {IChainInfo} chainInfo The chain information where the contract is deployed
   * @param {IAddress} address The address of the ERC4626 contract
   *
   * @returns {IERC4626}
   */
  getErc4626Contract(params: { chainInfo: IChainInfo; address: IAddress }): Promise<IERC4626>
}
