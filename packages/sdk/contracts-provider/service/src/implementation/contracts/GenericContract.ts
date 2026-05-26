import { IBlockchainClient } from '@thesolidchain/blockchain-client-common'
import { IERC20, IERC4626 } from '@thesolidchain/contracts-provider-common'
import { IAddress, IChainInfo } from '@thesolidchain/sdk-common'
import { ContractWrapper } from './ContractWrapper'
import { ContractsFactory } from '../../factory/ContractsFactory'

import type { ContractAbi } from '@thesolidchain/abi-provider-common'

/**
 * GenericContractWrapper
 * A specialized wrapper for contracts that allows dynamic ABI assignment.
 * It provides built-in utilities to cast the contract interface into standard
 * abstractions like ERC20 or ERC4626 dynamically.
 */
export class GenericContractWrapper<
  const TClient extends IBlockchainClient,
  TAddress extends IAddress,
  TAbi extends ContractAbi,
> extends ContractWrapper<TAbi, TClient, TAddress> {
  readonly _erc4626Contract: IERC4626
  readonly _abi: TAbi

  /** FACTORY METHOD */
  /**
   * Asynchronously creates a new instance of the GenericContractWrapper, instantiating
   * an underlying ERC4626 wrapper internally for rapid casting.
   *
   * @param params.blockchainClient - The viem client instance bound to this contract
   * @param params.chainInfo - Information about the chain where the contract resides
   * @param params.address - The strictly-typed contract address
   * @param params.abi - The custom ABI to bind to this generic wrapper
   * @returns A fully initialized GenericContractWrapper
   */
  static async create<
    TClient extends IBlockchainClient,
    TAddress extends IAddress,
    TAbi extends ContractAbi,
  >(params: {
    blockchainClient: TClient
    chainInfo: IChainInfo
    address: TAddress
    abi: TAbi
  }): Promise<GenericContractWrapper<TClient, TAddress, TAbi>> {
    const erc4626Contract = ContractsFactory.getERC4626(params) as unknown as IERC4626

    const instance = new GenericContractWrapper({
      blockchainClient: params.blockchainClient,
      chainInfo: params.chainInfo,
      address: params.address,
      erc4626Contract,
      abi: params.abi,
    })

    return instance
  }

  /** CONSTRUCTOR */
  constructor(params: {
    blockchainClient: TClient
    chainInfo: IChainInfo
    address: TAddress
    erc4626Contract: IERC4626
    abi: TAbi
  }) {
    super(params)

    this._erc4626Contract = params.erc4626Contract
    this._abi = params.abi
  }

  /**
   * Casts the underlying generic contract representation into a typed `IERC20` interface.
   * Useful when the generic contract is known to implement the ERC20 standard.
   *
   * @returns An `IERC20` implementation wrapper
   */
  asErc20(): IERC20 {
    return ContractsFactory.getERC20({
      blockchainClient: this.blockchainClient,
      chainInfo: this.chainInfo,
      address: this.address,
    }) as unknown as IERC20
  }

  /**
   * Casts the underlying generic contract representation into a typed `IERC4626` interface.
   * Useful when the generic contract is known to implement the ERC4626 Vault standard.
   *
   * @returns An `IERC4626` implementation wrapper
   */
  asErc4626(): IERC4626 {
    return this._erc4626Contract
  }

  /** @see IContractWrapper.getAbi */
  getAbi(): TAbi {
    return this._abi
  }

  /** PRIVATE */
}
