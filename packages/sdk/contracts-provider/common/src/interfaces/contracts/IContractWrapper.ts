import { ContractAbi } from '@thesolidchain/abi-provider-common'
import { IBlockchainClient } from '@thesolidchain/blockchain-client-common'
import { IAddress, IChainInfo } from '@thesolidchain/sdk-common'

/**
 * IContractWrapper
 * Base interface for all contract wrappers
 */
export interface IContractWrapper {
  /**
   * getChainInfo
   * Returns the chain information for this wrapper
   */
  get chainInfo(): IChainInfo

  /**
   * getAddress
   * Returns the address of the contract
   */
  get address(): IAddress

  /**
   * getBlockchainProvider
   * Returns the blockchain provider associated with the wrapper
   */
  get blockchainClient(): IBlockchainClient

  /**
   * getAbi
   * Returns the abi of the contract
   * @returns {ContractAbi}
   *
   * @dev This function should be implemented by the child class
   */
  getAbi(): ContractAbi
}
