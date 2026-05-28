import { HexData, IAddress, IChainInfo, ITokenAmount, Transaction } from '@thesolidchain/sdk-common'
import { TransactionUtils } from '@thesolidchain/testing-utils'
import axios, { AxiosInstance } from 'axios'
import { JsonRpcProvider, ethers } from 'ethers'
import { TransactionReceipt } from 'viem'

/**
 * TenderlyFork
 * Represents a dedicated Tenderly Fork. Provides methods to manipulate the fork state
 * (e.g. setting balances, snapping/reverting) and send transactions for integration testing.
 */
export class TenderlyFork {
  public readonly tenderlyApiUrl: string
  public readonly tenderlyAccessKey: string
  public readonly apiRequestClient: AxiosInstance
  public readonly forkId: string
  public readonly forkUrl: string
  public readonly chainInfo: IChainInfo
  public readonly atBlock: number | 'latest'
  public readonly transactionUtils: TransactionUtils
  private readonly rpcProvider: JsonRpcProvider

  /** SEALED CONSTRUCTOR */
  private constructor(params: {
    transactionUtils: TransactionUtils
    tenderlyApiUrl: string
    tenderlyAccessKey: string
    chainInfo: IChainInfo
    forkId: string
    forkUrl: string
    atBlock: number | 'latest'
  }) {
    this.transactionUtils = params.transactionUtils
    this.tenderlyApiUrl = params.tenderlyApiUrl
    this.tenderlyAccessKey = params.tenderlyAccessKey
    this.chainInfo = params.chainInfo
    this.forkId = params.forkId
    this.forkUrl = params.forkUrl
    this.atBlock = params.atBlock

    this.apiRequestClient = axios.create({
      baseURL: 'https://api.tenderly.co/api/v1',
      headers: {
        'X-Access-Key': this.tenderlyAccessKey,
        'Content-Type': 'application/json',
      },
    })

    this.transactionUtils = new TransactionUtils({
      rpcUrl: this.forkUrl,
      chainInfo: this.chainInfo,
    })

    this.rpcProvider = new JsonRpcProvider(this.forkUrl)
  }

  /** FACTORY */

  /**
   * create
   * Asynchronously provisions a new Tenderly fork using the API and initializes the `TenderlyFork` wrapper.
   *
   * @param params.tenderlyApiUrl - The API URL for the Tenderly project
   * @param params.tenderlyAccessKey - Authentication access key
   * @param params.chainInfo - Information about the network to fork
   * @param params.atBlock - The block number to fork from, or 'latest'
   * @returns A promise resolving to a configured `TenderlyFork` instance
   */
  static async create(params: {
    tenderlyApiUrl: string
    tenderlyAccessKey: string
    chainInfo: IChainInfo
    atBlock: number | 'latest'
  }) {
    const apiRequestClient = axios.create({
      baseURL: 'https://api.tenderly.co/api/v1',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Access-Key': params.tenderlyAccessKey,
      },
    })

    const forkConfig = await this._createFork({
      apiRequestClient: apiRequestClient,
      tenderlyApiUrl: params.tenderlyApiUrl,
      tenderlyAccessKey: params.tenderlyAccessKey,
      chainInfo: params.chainInfo,
      atBlock: params.atBlock,
    })

    const transactionUtils = new TransactionUtils({
      chainInfo: params.chainInfo,
      rpcUrl: forkConfig.forkUrl,
    })

    return new TenderlyFork({
      transactionUtils: transactionUtils,
      chainInfo: params.chainInfo,
      forkId: forkConfig.forkId,
      forkUrl: forkConfig.forkUrl,
      tenderlyApiUrl: params.tenderlyApiUrl,
      tenderlyAccessKey: params.tenderlyAccessKey,
      atBlock: params.atBlock,
    })
  }

  /** PUBLIC METHODS */

  /**
   * dispose
   * Deletes the fork
   */
  public async dispose() {
    try {
      return await this.apiRequestClient.delete(`${this.tenderlyApiUrl}/${this.forkId}`)
    } catch (error: any) {
      if (error.response?.status !== 404) {
        console.warn(`Warning disposing fork: ${error.message}`)
      }
    }
  }

  /**
   * Retrieves the list of simulations in the fork
   * @returns The list of simulations
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async getSimulations(): Promise<any> {
    try {
      return await this.apiRequestClient.get(
        `${this.tenderlyApiUrl}/${this.forkId}/transactions?page=1&perPage=20`,
      )
    } catch (error: any) {
      throw new Error(`Error getting simulations: ${error.message}`)
    }
  }

  /**
   * getTransactionCount
   * Returns the number of transactions in the fork
   */
  public async getTransactionCount(): Promise<number> {
    const response = await this.getSimulations()
    return response.data.fork_transactions.length
  }

  /**
   * sendTransaction
   * Sends a transaction to the fork
   *
   * @param params.walletPrivateKey The private key of the wallet that will send the transaction
   * @param params.transaction The transaction to be sent
   * @param params.waitForConfirmation Whether to wait for the transaction to be confirmed
   */
  public async sendTransaction(params: {
    walletPrivateKey: HexData
    transaction: Transaction
  }): Promise<TransactionReceipt> {
    const transactionUtils = new TransactionUtils({
      chainInfo: this.chainInfo,
      rpcUrl: this.forkUrl,
      walletPrivateKey: params.walletPrivateKey,
    })

    return await transactionUtils.sendTransactionWithReceipt({
      transaction: params.transaction,
    })
  }

  /**
   * setErc20Balance
   * Sets the ERC20 balance of a wallet in the fork
   *
   * @param params.forkId The fork ID
   * @param params.balance The balance to set
   * @param params.walletAddress The address of the wallet
   */
  async setErc20Balance(params: { amount: ITokenAmount; walletAddress: IAddress }) {
    return this.rpcProvider.send('tenderly_setErc20Balance', [
      params.amount.token.address.value,
      params.walletAddress.value,
      ethers.toQuantity(params.amount.toSolidityValue()),
    ])
  }

  /**
   * setETHBalance
   * Sets the ETH balance of a wallet in the fork
   *
   * @param params.amount The amount to set as a bigint
   * @param params.walletAddress The address of the wallet
   */
  async setETHBalance(params: { amount: bigint; walletAddress: IAddress }) {
    return this.rpcProvider.send('tenderly_setBalance', [
      [params.walletAddress.value],
      ethers.toQuantity(params.amount),
    ])
  }

  /**
   * getETHBalance
   * Retrieves the ETH balance of a wallet in the fork
   *
   * @param params.walletAddress The address of the wallet
   *
   * @returns The ETH balance of the wallet as a big integer
   */
  async getETHBalance(params: { walletAddress: IAddress; atBlock?: number }): Promise<bigint> {
    return this.rpcProvider.send('eth_getBalance', [
      params.walletAddress.value,
      params.atBlock ? String(params.atBlock) : 'latest',
    ])
  }

  /**
   * snapshot
   * Takes a snapshot of the current state of the fork
   *
   * @returns The snapshot ID as a string
   */
  async snapshot(): Promise<string> {
    return this.rpcProvider.send('evm_snapshot', [])
  }

  /**
   * revert
   * Reverts the state of the fork to a given snapshot
   *
   * @param snapshotId The ID of the snapshot to revert to
   */
  async revert(snapshotId: string): Promise<void> {
    await this.rpcProvider.send('evm_revert', [snapshotId])
  }

  /** PRIVATE */

  /**
   * _initialize
   * Creates a new Tenderly fork and initializes the instance
   */
  private static async _createFork(params: {
    apiRequestClient: AxiosInstance
    tenderlyApiUrl: string
    tenderlyAccessKey: string
    chainInfo: IChainInfo
    atBlock: number | 'latest'
  }): Promise<{
    forkId: string
    forkUrl: string
  }> {
    let response

    try {
      response = await params.apiRequestClient.post(params.tenderlyApiUrl + '/vnets', {
        slug: 'sdk-testnet-' + Date.now(),
        display_name: 'SDK TestNet',
        fork_config: {
          network_id: params.chainInfo.chainId,
          block_number: params.atBlock,
        },
        virtual_network_config: {
          chain_config: {
            chain_id: params.chainInfo.chainId,
          },
        },
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const errorMsg = error.response ? JSON.stringify(error.response.data) : error.message
      throw new Error(`Error creating fork: ${errorMsg}`)
    }

    const forkId = response.data.id
    const adminRpc =
      response.data.rpcs.find((rpc: { name: string; url: string }) => rpc.name === 'Admin RPC')
        ?.url || response.data.rpcs[0].url
    return {
      forkId: forkId,
      forkUrl: adminRpc,
    }
  }
}
