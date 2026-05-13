import { ContractAbi } from '@thesolidchain/abi-provider-common'
import { IBlockchainClient } from '@thesolidchain/blockchain-client-common'
import { IContractWrapper } from '@thesolidchain/contracts-provider-common'
import { IAddress, IChainInfo, TransactionInfo } from '@thesolidchain/sdk-common'
import {
  type AbiStateMutability,
  type ContractFunctionArgs,
  type ContractFunctionName,
  type GetContractReturnType,
  encodeFunctionData,
  getContract,
} from 'viem'

/**
 * ContractWrapper
 * Base abstract class for all strictly-typed contract wrappers in the SDK.
 * It manages the underlying `viem` contract instance and provides standardized
 * methods to build transaction calldata.
 * 
 * @typeParam TAbi - The exact literal type of the contract ABI
 * @typeParam TClient - The specific client type (e.g. PublicClient, WalletClient)
 * @typeParam TAddress - The constrained IAddress type identifying the contract
 */
export abstract class ContractWrapper<
  const TAbi extends ContractAbi,
  const TClient extends IBlockchainClient,
  TAddress extends IAddress,
> implements IContractWrapper {
  private readonly _blockchainClient: TClient
  private readonly _chainInfo: IChainInfo
  private readonly _address: TAddress
  readonly _contract: GetContractReturnType<TAbi, TClient, TAddress['value']>

  /**
   * Initializes the ContractWrapper, automatically instantiating the viem `getContract` reference.
   * 
   * @param params.blockchainClient - The viem client instance bound to this contract
   * @param params.chainInfo - Information about the chain where the contract resides
   * @param params.address - The strictly-typed contract address
   */
  protected constructor(params: {
    blockchainClient: TClient
    chainInfo: IChainInfo
    address: TAddress
  }) {
    this._blockchainClient = params.blockchainClient
    this._chainInfo = params.chainInfo
    this._address = params.address
    this._contract = getContract({
      address: this._address.value,
      abi: this.getAbi(),
      client: this._blockchainClient,
    })
  }

  /** GETTERS */

  /** @see IContractWrapper.chainInfo */
  get chainInfo(): IChainInfo {
    return this._chainInfo
  }

  /** @see IContractWrapper.address */
  get address(): TAddress {
    return this._address
  }

  /** @see IContractWrapper.blockchainClient */
  get blockchainClient(): TClient {
    return this._blockchainClient
  }

  /**
   * The underlying viem contract instance used to perform reads and simulations.
   */
  get contract(): GetContractReturnType<TAbi, TClient, TAddress['value']> {
    return this._contract
  }

  /** HELPERS */

  /**
   * Helper function to construct a `TransactionInfo` object representing a contract interaction.
   * Automatically encodes the function data using the contract ABI.
   * 
   * @param params.functionName - The typed name of the function to call
   * @param params.args - The typed arguments matching the function signature
   * @param params.description - Human-readable description of the intent (e.g. 'Approve USDC')
   * @param params.value - Optional native value (e.g. ETH) to send with the transaction
   * @returns A constructed `TransactionInfo` representing the encoded intent
   */

  protected async _createTransaction<
    TFunctionName extends ContractFunctionName<TAbi>,
    TFunctionArgs extends ContractFunctionArgs<TAbi, AbiStateMutability, TFunctionName>,
  >(params: {
    functionName: TFunctionName
    args: TFunctionArgs
    description: string
    value?: bigint
  }): Promise<TransactionInfo> {
    // @ts-ignore
    const calldata = encodeFunctionData({
      abi: this.getAbi(),
      functionName: params.functionName,
      args: params.args,
    })

    return {
      transaction: {
        target: this.address,
        calldata: calldata,
        value: String(params.value ?? 0),
      },
      description: params.description,
    }
  }

  /** VIRTUAL FUNCTIONS */

  /**
   * getAbi
   * Returns the abi of the contract
   * @returns {ContractAbi}
   *
   * @dev This function should be implemented by the child class
   */
  abstract getAbi(): TAbi
}
