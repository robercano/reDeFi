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
  IToken,
  ITokenAmount,
  PositionType,
  IAddress,
  Address,
  TokenAmount,
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

export class YearnProtocolPlugin extends BaseProtocolPlugin implements IYieldProtocolFeatures {
  public readonly protocolName = ProtocolName.Yearn
  public readonly supportedChains = valuesOfChainFamilyMap([ChainFamilyName.Ethereum])

  // Explicitly assign self to the `yield` feature
  public readonly yield: IYieldProtocolFeatures = this

  private dataSource!: IYearnDataSource

  public initialize(params: { context: IProtocolPluginContext; dataSource?: IYearnDataSource }) {
    super.initialize(params)
    this.dataSource = params.dataSource || new DefaultYearnDataSource(params.context)
  }

  // --- Yield Feature Implementations ---

  public async getYieldPoolInfo(poolId: IYieldPoolId): Promise<IYieldPoolInfo> {
    if (!isYearnYieldPoolId(poolId)) {
      throw new Error(`Invalid Yearn Pool ID: ${JSON.stringify(poolId)}`)
    }

    const chainId = this.context.provider.chain?.id || 1
    this._checkChainIdSupported(chainId)

    const vaultDto = await this.dataSource.getVault(poolId.vaultAddress)

    return {
      [Symbol.for('@thesolidchain/sdk-common/IYieldPoolInfo')]: Symbol.for('@thesolidchain/sdk-common/IYieldPoolInfo') as any,
      type: PoolType.Yield,
      id: poolId,
      underlyingToken: vaultDto.underlyingToken,
      receiptToken: vaultDto.receiptToken,
      yieldType: YieldType.ValueAccruing,
      currentApy: vaultDto.currentApy,
      totalValueLocked: vaultDto.totalValueLocked,
    } as unknown as IYieldPoolInfo
  }

  public async getYieldPosition(positionId: IYieldPositionId): Promise<IYieldPosition> {
    if (!isYearnYieldPositionId(positionId)) {
      throw new Error(`Invalid Yearn Position ID: ${JSON.stringify(positionId)}`)
    }

    const chainId = this.context.provider.chain?.id || 1
    this._checkChainIdSupported(chainId)

    const positionDto = await this.dataSource.getUserPosition(positionId.vaultAddress, positionId.walletAddress)

    return {
      [Symbol.for('@thesolidchain/sdk-common/IYieldPosition')]: Symbol.for('@thesolidchain/sdk-common/IYieldPosition') as any,
      type: PositionType.Yield,
      id: positionId,
      poolId: new YearnYieldPoolId(positionId.vaultAddress, this.context.provider.chain as unknown as IChainInfo),
      principalAmount: positionDto.principalAmount,
      currentAmount: positionDto.currentAmount,
      claimableRewards: [],
    } as unknown as IYieldPosition
  }
}
