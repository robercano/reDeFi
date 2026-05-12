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
import { BigNumber } from 'bignumber.js'

export class YearnProtocolPlugin extends BaseProtocolPlugin implements IYieldProtocolFeatures {
  public readonly protocolName = ProtocolName.Yearn
  public readonly supportedChains = valuesOfChainFamilyMap([ChainFamilyName.Ethereum])

  // Explicitly assign self to the `yield` feature
  public readonly yield: IYieldProtocolFeatures = this

  public initialize(params: { context: IProtocolPluginContext }) {
    super.initialize(params)
  }

  // --- Yield Feature Implementations ---

  public async getYieldPoolInfo(poolId: IYieldPoolId): Promise<IYieldPoolInfo> {
    if (!isYearnYieldPoolId(poolId)) {
      throw new Error(`Invalid Yearn Pool ID: ${JSON.stringify(poolId)}`)
    }

    const chainId = this.context.provider.chain?.id || 1
    this._checkChainIdSupported(chainId)

    // TODO: Replace mock with actual on-chain or subgraph data fetch
    const mockToken = {
      address: '0x0000000000000000000000000000000000000000',
      decimals: 18,
      symbol: 'MOCK',
      name: 'Mock Token',
    } as unknown as IToken

    return {
      [Symbol.for('@thesolidchain/sdk-common/IYieldPoolInfo')]: Symbol.for('@thesolidchain/sdk-common/IYieldPoolInfo') as any,
      type: PoolType.Yield,
      id: poolId,
      underlyingToken: mockToken,
      receiptToken: mockToken,
      yieldType: YieldType.ValueAccruing,
      currentApy: { value: new BigNumber(0.05) }, // 5% APY
      totalValueLocked: { value: new BigNumber(1000000), currency: { symbol: 'USD', name: 'US Dollar', decimals: 2 } },
    } as unknown as IYieldPoolInfo
  }

  public async getYieldPosition(positionId: IYieldPositionId): Promise<IYieldPosition> {
    if (!isYearnYieldPositionId(positionId)) {
      throw new Error(`Invalid Yearn Position ID: ${JSON.stringify(positionId)}`)
    }

    const chainId = this.context.provider.chain?.id || 1
    this._checkChainIdSupported(chainId)

    // TODO: Replace mock with actual on-chain data fetch
    const mockToken = {
      address: '0x0000000000000000000000000000000000000000',
      decimals: 18,
      symbol: 'MOCK',
      name: 'Mock Token',
    } as unknown as IToken

    const mockAmount: ITokenAmount = TokenAmount.createFrom({
      token: mockToken,
      amount: '100',
    })

    return {
      [Symbol.for('@thesolidchain/sdk-common/IYieldPosition')]: Symbol.for('@thesolidchain/sdk-common/IYieldPosition') as any,
      type: PositionType.Yield,
      id: positionId,
      poolId: new YearnYieldPoolId(positionId.vaultAddress, this.context.provider.chain as unknown as IChainInfo),
      principalAmount: mockAmount,
      currentAmount: mockAmount,
      claimableRewards: [],
    } as unknown as IYieldPosition
  }
}
