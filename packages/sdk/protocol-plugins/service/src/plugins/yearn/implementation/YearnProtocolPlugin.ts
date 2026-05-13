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
} from '@thesolidchain/sdk-common'
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

    return {
      [Symbol.for('@thesolidchain/sdk-common/IYieldPoolInfo')]: Symbol.for(
        '@thesolidchain/sdk-common/IYieldPoolInfo',
      ) as unknown as symbol,
      type: PoolType.Yield,
      id: poolId,
      underlyingToken: vaultDto.underlyingToken,
      receiptToken: vaultDto.receiptToken,
      yieldType: YieldType.ValueAccruing,
      currentApy: vaultDto.currentApy,
      totalValueLocked: vaultDto.totalValueLocked,
    } as unknown as IYieldPoolInfo
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

    return {
      [Symbol.for('@thesolidchain/sdk-common/IYieldPosition')]: Symbol.for(
        '@thesolidchain/sdk-common/IYieldPosition',
      ) as unknown as symbol,
      type: PositionType.Yield,
      id: positionId,
      poolId: new YearnYieldPoolId(
        positionId.vaultAddress,
        this.context.provider.chain as unknown as IChainInfo,
      ),
      principalAmount: positionDto.principalAmount,
      currentAmount: positionDto.currentAmount,
      claimableRewards: [],
    } as unknown as IYieldPosition
  }
}
