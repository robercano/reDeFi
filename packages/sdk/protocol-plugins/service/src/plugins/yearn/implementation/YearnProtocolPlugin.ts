import {
  ChainFamilyName,
  IYieldPoolId,
  IYieldPositionId,
  IYieldPoolInfo,
  IYieldPosition,
  ProtocolName,
  valuesOfChainFamilyMap,
  PoolType,
  YieldType,
  PositionType,
  IChainInfo,
  ITokenAmount,
  IUser,
  TransactionInfo,
  Address,
  HexData,
  YieldPoolInfo,
  YieldPosition,
} from '@thesolidchain/sdk-common'
import { parseAbi, encodeFunctionData } from 'viem'
import {
  IProtocolPluginContext,
  IYieldProtocolFeatures,
} from '@thesolidchain/protocol-plugins-common'
import { BaseProtocolPlugin } from '../../../implementation/BaseProtocolPlugin'
import { YearnYieldPoolId } from './YearnYieldPoolId'
import { isYearnYieldPoolId } from '../interfaces/IYearnYieldPoolId'
import { YearnYieldPositionId } from './YearnYieldPositionId'
import { isYearnYieldPositionId } from '../interfaces/IYearnYieldPositionId'
import { IYearnDataSource } from '../interfaces/IYearnDataSource'
import { DefaultYearnDataSource } from './DefaultYearnDataSource'

/**
 * Protocol plugin for interacting with Yearn Finance Vaults.
 * It provides implementations for the Yield Feature interfaces.
 * @public
 */
export class YearnProtocolPlugin extends BaseProtocolPlugin implements IYieldProtocolFeatures {
  /** The specific protocol name this plugin handles (Yearn). */
  public readonly protocolName = ProtocolName.Yearn
  /** The list of chain families supported by Yearn Protocol. */
  public readonly supportedChains = valuesOfChainFamilyMap([ChainFamilyName.Ethereum])

  /** Explicitly assign self to the `yield` feature property to expose yield implementations. */
  public readonly yield: IYieldProtocolFeatures = this

  private dataSource!: IYearnDataSource

  /**
   * Initializes the Yearn protocol plugin.
   *
   * @param params - Configuration parameters.
   * @param params.context - The protocol plugin context (provider, oracle, tokens managers).
   * @param params.dataSource - Optional custom data source implementation, defaults to `DefaultYearnDataSource`.
   */
  public initialize(params: { context: IProtocolPluginContext; dataSource?: IYearnDataSource }) {
    super.initialize(params)
    this.dataSource = params.dataSource || new DefaultYearnDataSource(params.context)
  }

  // --- Yield Feature Implementations ---

  /**
   * Retrieves aggregated information about a specific Yearn vault.
   *
   * @param poolId - The unique identifier for the Yearn vault.
   * @returns A promise that resolves to the yield pool information.
   * @throws Will throw an error if the poolId is not a valid YearnYieldPoolId.
   */
  public async getYieldPoolInfo(poolId: IYieldPoolId): Promise<IYieldPoolInfo> {
    if (!isYearnYieldPoolId(poolId)) {
      throw new Error(`Invalid Yearn Pool ID: ${JSON.stringify(poolId)}`)
    }

    const chainId = this.context.provider.chain?.id || 1
    this._checkChainIdSupported(chainId)

    const vaultDto = await this.dataSource.getVault(poolId.vaultAddress)

    return YieldPoolInfo.createFrom({
      id: poolId,
      underlyingToken: vaultDto.underlyingToken,
      receiptToken: vaultDto.receiptToken,
      yieldType: YieldType.ValueAccruing,
      currentApy: vaultDto.currentApy,
      totalValueLocked: vaultDto.totalValueLocked,
    })
  }

  /**
   * Retrieves user-specific position information for a Yearn vault.
   *
   * @param positionId - The unique identifier for the user's position.
   * @returns A promise that resolves to the yield position details.
   * @throws Will throw an error if the positionId is not a valid YearnYieldPositionId.
   */
  public async getYieldPosition(positionId: IYieldPositionId): Promise<IYieldPosition> {
    if (!isYearnYieldPositionId(positionId)) {
      throw new Error(`Invalid Yearn Position ID: ${JSON.stringify(positionId)}`)
    }

    const chainId = this.context.provider.chain?.id || 1
    this._checkChainIdSupported(chainId)

    const positionDto = await this.dataSource.getUserPosition(
      positionId.vaultAddress,
      positionId.walletAddress,
    )

    return YieldPosition.createFrom({
      id: positionId,
      poolId: new YearnYieldPoolId(
        positionId.vaultAddress,
        this.context.provider.chain as unknown as IChainInfo,
      ),
      principalAmount: positionDto.principalAmount,
      currentAmount: positionDto.currentAmount,
      claimableRewards: [],
    })
  }

  /**
   * Builds the calldata for depositing the underlying asset into a Yearn Vault.
   *
   * Yearn V3 vaults implement the ERC-4626 standard, so this is a plain
   * `deposit(uint256 assets, address receiver)` call targeting the vault contract.
   *
   * @param params - The deposit parameters.
   * @param params.poolId - The unique identifier for the Yearn vault.
   * @param params.amount - The amount of the underlying asset to deposit.
   * @param params.user - The user performing the deposit; also the receiver of the vault shares.
   * @returns A promise that resolves to the deposit transaction info.
   * @throws Will throw an error if the poolId is not a valid YearnYieldPoolId.
   */
  public async getDepositTransaction(params: {
    poolId: IYieldPoolId
    amount: ITokenAmount
    user: IUser
  }): Promise<TransactionInfo> {
    if (!isYearnYieldPoolId(params.poolId)) {
      throw new Error(`Invalid Yearn Pool ID: ${JSON.stringify(params.poolId)}`)
    }

    // Standard ERC-4626 deposit function
    const depositAbi = parseAbi([
      'function deposit(uint256 assets, address receiver) external returns (uint256)',
    ])

    const calldata = encodeFunctionData({
      abi: depositAbi,
      functionName: 'deposit',
      args: [
        BigInt(params.amount.toSolidityValue()),
        params.user.wallet.address.value as `0x${string}`,
      ],
    })

    return {
      transaction: {
        target: Address.createFromEthereum({ value: params.poolId.vaultAddress }),
        calldata: calldata as HexData,
        value: '0',
      },
      description: 'Deposit into Yearn Vault',
    }
  }

  /**
   * Builds the calldata for withdrawing the underlying asset from a Yearn Vault.
   *
   * Yearn V3 vaults implement the ERC-4626 standard. Since `params.amount` represents the
   * *underlying* asset amount the user wants back (rather than a share amount), this uses
   * `withdraw(uint256 assets, address receiver, address owner)` rather than `redeem`.
   *
   * @param params - The withdraw parameters.
   * @param params.positionId - The unique identifier for the user's Yearn vault position.
   * @param params.amount - The amount of the underlying asset to withdraw.
   * @param params.user - The user performing the withdrawal; also the receiver and owner.
   * @returns A promise that resolves to the withdraw transaction info.
   * @throws Will throw an error if the positionId is not a valid YearnYieldPositionId.
   */
  public async getWithdrawTransaction(params: {
    positionId: IYieldPositionId
    amount: ITokenAmount
    user: IUser
  }): Promise<TransactionInfo> {
    if (!isYearnYieldPositionId(params.positionId)) {
      throw new Error(`Invalid Yearn Position ID: ${JSON.stringify(params.positionId)}`)
    }

    // ERC-4626: withdraw(uint256 assets, address receiver, address owner)
    const withdrawAbi = parseAbi([
      'function withdraw(uint256 assets, address receiver, address owner) external returns (uint256)',
    ])

    const calldata = encodeFunctionData({
      abi: withdrawAbi,
      functionName: 'withdraw',
      args: [
        BigInt(params.amount.toSolidityValue()),
        params.user.wallet.address.value as `0x${string}`, // receiver
        params.user.wallet.address.value as `0x${string}`, // owner
      ],
    })

    return {
      transaction: {
        target: Address.createFromEthereum({ value: params.positionId.vaultAddress }),
        calldata: calldata as HexData,
        value: '0',
      },
      description: 'Withdraw from Yearn Vault',
    }
  }

  public async getClaimTransaction(): Promise<TransactionInfo> {
    throw new Error('Method getClaimTransaction is not supported for Yearn protocol (value-accruing)')
  }
}
