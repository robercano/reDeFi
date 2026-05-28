import {
  IProtocolPlugin,
  ILiquidityProtocolFeatures,
  IProtocolPluginContext,
} from '@thesolidchain/protocol-plugins-common'
import {
  ProtocolName,
  ILiquidityPoolId,
  ILiquidityPoolInfo,
  ILiquidityPosition,
  ILiquidityPositionId,
  ITokenAmount,
  IUser,
  TransactionInfo,
  valuesOfChainFamilyMap,
  ChainFamilyName,
} from '@thesolidchain/sdk-common'
import { UniswapV3LiquidityFeatures } from './UniswapV3LiquidityFeatures'
import { BaseProtocolPlugin } from '../../implementation/BaseProtocolPlugin'

export class UniswapV3ProtocolPlugin extends BaseProtocolPlugin implements IProtocolPlugin {
  readonly protocolName = ProtocolName.UniswapV3
  readonly supportedChains = valuesOfChainFamilyMap([
    ChainFamilyName.Ethereum,
    ChainFamilyName.Arbitrum,
    ChainFamilyName.Optimism,
    ChainFamilyName.Base,
  ])
  
  public liquidity!: ILiquidityProtocolFeatures

  public initialize(params: { context: IProtocolPluginContext }): void {
    super.initialize(params)
    this.liquidity = new UniswapV3LiquidityFeatures(params.context)
  }
}
