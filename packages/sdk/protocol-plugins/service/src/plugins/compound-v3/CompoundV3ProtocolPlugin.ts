import {
  IProtocolPlugin,
  IProtocolPluginContext,
} from '@thesolidchain/protocol-plugins-common'
import {
  ProtocolName,
  valuesOfChainFamilyMap,
  ChainFamilyName,
} from '@thesolidchain/sdk-common'
import { BaseProtocolPlugin } from '../../implementation/BaseProtocolPlugin'
import { CompoundV3LendingFeatures } from './implementation/CompoundV3LendingFeatures'
import { CompoundV3YieldFeatures } from './implementation/CompoundV3YieldFeatures'

export class CompoundV3ProtocolPlugin extends BaseProtocolPlugin implements IProtocolPlugin {
  readonly protocolName = ProtocolName.CompoundV3
  readonly supportedChains = valuesOfChainFamilyMap([
    ChainFamilyName.Ethereum,
    ChainFamilyName.Base,
    ChainFamilyName.Arbitrum,
    ChainFamilyName.Optimism,
  ])
  
  // Properties are inherited from BaseProtocolPlugin

  public initialize(params: { context: IProtocolPluginContext }): void {
    super.initialize(params)
    
    const lendingFeatures = new CompoundV3LendingFeatures()
    lendingFeatures.initialize(params)
    
    const yieldFeatures = new CompoundV3YieldFeatures()
    yieldFeatures.initialize(params)
    
    Object.assign(this, { lending: lendingFeatures, yield: yieldFeatures })
  }
}
