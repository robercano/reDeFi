import { HexData, IAddress, IChainInfo, ITokenAmount, Transaction } from '@thesolidchain/sdk-common'
import { TransactionUtils } from './TransactionUtils'
import { createAnvil, type Anvil } from '@viem/anvil'
import { TransactionReceipt } from 'viem'

/**
 * AnvilFork
 * Represents a dedicated local Anvil fork. Provides methods to manipulate the fork state
 * and send transactions for integration testing, similar to TenderlyFork but using a local node.
 */
export class AnvilFork {
  public readonly anvil: Anvil
  public readonly forkUrl: string
  public readonly chainInfo: IChainInfo
  public readonly atBlock: number | 'latest'
  public readonly transactionUtils: TransactionUtils

  private constructor(params: {
    transactionUtils: TransactionUtils
    chainInfo: IChainInfo
    forkUrl: string
    atBlock: number | 'latest'
    anvil: Anvil
  }) {
    this.transactionUtils = params.transactionUtils
    this.chainInfo = params.chainInfo
    this.forkUrl = params.forkUrl
    this.atBlock = params.atBlock
    this.anvil = params.anvil
  }

  /**
   * create
   * Spawns a local Anvil process forking the specified URL.
   */
  static async create(params: {
    forkUrl: string
    chainInfo: IChainInfo
    atBlock?: number | 'latest'
    port?: number
  }) {
    // Generate a random port to avoid parallel test conflicts
    const port = params.port || 8545 + Math.floor(Math.random() * 1000)

    const anvil = createAnvil({
      forkUrl: params.forkUrl,
      ...(params.atBlock && params.atBlock !== 'latest'
        ? { forkBlockNumber: BigInt(params.atBlock) }
        : {}),
      port,
      startTimeout: 60000,
    })

    try {
      await anvil.start()
    } catch (error: any) {
      throw new Error(`Failed to start local Anvil node. Error: ${error?.message || error}`)
    }

    const localRpcUrl = `http://127.0.0.1:${port}`

    const transactionUtils = new TransactionUtils({
      chainInfo: params.chainInfo,
      rpcUrl: localRpcUrl,
    })

    return new AnvilFork({
      transactionUtils,
      chainInfo: params.chainInfo,
      forkUrl: localRpcUrl,
      atBlock: params.atBlock || 'latest',
      anvil,
    })
  }

  public async dispose() {
    await this.anvil.stop()
  }

  public async snapshot(): Promise<string> {
    const id = await this.transactionUtils.testClient.snapshot()
    return id as string
  }

  public async revert(id: string) {
    await this.transactionUtils.testClient.revert({ id: id as `0x${string}` })
  }

  public async sendTransaction(params: {
    walletPrivateKey: HexData
    transaction: Transaction
  }): Promise<TransactionReceipt> {
    const utils = new TransactionUtils({
      chainInfo: this.chainInfo,
      rpcUrl: this.forkUrl,
      walletPrivateKey: params.walletPrivateKey,
    })

    return await utils.sendTransactionWithReceipt({
      transaction: params.transaction,
    })
  }

  public async setETHBalance(params: { amount: bigint; walletAddress: IAddress }) {
    await this.transactionUtils.testClient.setBalance({
      address: params.walletAddress.value as `0x${string}`,
      value: params.amount,
    })
  }

  public async getETHBalance(params: { walletAddress: IAddress }): Promise<bigint> {
    return await this.transactionUtils.publicClient.getBalance({
      address: params.walletAddress.value as `0x${string}`,
    })
  }
}
