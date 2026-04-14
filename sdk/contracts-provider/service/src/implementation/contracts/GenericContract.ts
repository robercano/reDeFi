import { IBlockchainClient } from '@thesolidchain/blockchain-client-common'
import { IERC20, IERC4626 } from '@thesolidchain/contracts-provider-common'
import { IAddress, IChainInfo } from '@thesolidchain/sdk-common'
import { ContractWrapper } from './ContractWrapper'
import { ContractsFactory } from '../../factory/ContractsFactory'

import type { ContractAbi } from '@thesolidchain/abi-provider-common'

/**
 * @name GenericContractWrapper
 * @description Implementation for the generic contract
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
   * Creates a new instance of the GenericContractWrapper
   *
   * @see constructor
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

  /** CASTING METHODS */
  asErc20(): IERC20 {
    return ContractsFactory.getERC20({
      blockchainClient: this.blockchainClient,
      chainInfo: this.chainInfo,
      address: this.address,
    }) as unknown as IERC20
  }

  asErc4626(): IERC4626 {
    return this._erc4626Contract
  }

  /** @see IContractWrapper.getAbi */
  getAbi(): TAbi {
    return this._abi
  }

  /** PRIVATE */
}
