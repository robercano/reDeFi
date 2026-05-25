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
} from '@thesolidchain/sdk-common'
import {
  IProtocolPluginContext,
  IYieldProtocolFeatures,
} from '@thesolidchain/protocol-plugins-common'
import { BaseProtocolPlugin } from '../../../implementation/BaseProtocolPlugin'
import { LidoYieldPoolId } from './LidoYieldPoolId'
import { isLidoYieldPoolId } from '../interfaces/ILidoYieldPoolId'
import { LidoYieldPositionId } from './LidoYieldPositionId'
import { isLidoYieldPositionId } from '../interfaces/ILidoYieldPositionId'
import { ILidoDataSource } from '../interfaces/ILidoDataSource'
import { DefaultLidoDataSource } from './DefaultLidoDataSource'

/**
 * Protocol plugin for interacting with Lido Staking.
 * @public
 */
export class LidoProtocolPlugin extends BaseProtocolPlugin implements IYieldProtocolFeatures {
  public readonly protocolName = ProtocolName.Lido
  public readonly supportedChains = valuesOfChainFamilyMap([ChainFamilyName.Ethereum])

  public readonly yield: IYieldProtocolFeatures = this

  private dataSource!: ILidoDataSource

  public initialize(params: { context: IProtocolPluginContext; dataSource?: ILidoDataSource }) {
    super.initialize(params)
    this.dataSource = params.dataSource || new DefaultLidoDataSource(params.context)
  }

  public async getYieldPoolInfo(poolId: IYieldPoolId): Promise<IYieldPoolInfo> {
    if (!isLidoYieldPoolId(poolId)) {
      throw new Error(`Invalid Lido Pool ID: ${JSON.stringify(poolId)}`)
    }

    const chainId = this.context.provider.chain?.id || 1
    this._checkChainIdSupported(chainId)

    const poolDto = await this.dataSource.getPool(poolId.tokenAddress)

    return {
      [Symbol.for('@thesolidchain/sdk-common/IYieldPoolInfo')]: Symbol.for(
        '@thesolidchain/sdk-common/IYieldPoolInfo',
      ) as unknown as symbol,
      type: PoolType.Yield,
      id: poolId,
      underlyingToken: poolDto.underlyingToken,
      receiptToken: poolDto.receiptToken,
      yieldType: YieldType.Rebasing,
      currentApy: poolDto.currentApy,
      totalValueLocked: poolDto.totalValueLocked,
    } as unknown as IYieldPoolInfo
  }

  public async getYieldPosition(positionId: IYieldPositionId): Promise<IYieldPosition> {
    if (!isLidoYieldPositionId(positionId)) {
      throw new Error(`Invalid Lido Position ID: ${JSON.stringify(positionId)}`)
    }

    const chainId = this.context.provider.chain?.id || 1
    this._checkChainIdSupported(chainId)

    const positionDto = await this.dataSource.getUserPosition(
      positionId.tokenAddress,
      positionId.walletAddress,
    )

    return {
      [Symbol.for('@thesolidchain/sdk-common/IYieldPosition')]: Symbol.for(
        '@thesolidchain/sdk-common/IYieldPosition',
      ) as unknown as symbol,
      type: PositionType.Yield,
      id: positionId,
      poolId: new LidoYieldPoolId(
        positionId.tokenAddress,
        this.context.provider.chain as unknown as IChainInfo,
      ),
      principalAmount: positionDto.principalAmount,
      currentAmount: positionDto.currentAmount,
      claimableRewards: [],
    } as unknown as IYieldPosition
  }

  public async getDepositTransaction(): Promise<TransactionInfo> {
    throw new Error('Method not implemented.')
  }

  public async getWithdrawTransaction(): Promise<TransactionInfo> {
    throw new Error('Method not implemented.')
  }
}
