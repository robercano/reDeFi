import {
  ChainInfo,
  ProtocolName,
} from '@thesolidchain/sdk-common'

import { type IProtocolPluginContext } from './IProtocolPluginContext'
import { ILendingProtocolFeatures } from './ILendingProtocolFeatures'
import { IYieldProtocolFeatures } from './IYieldProtocolFeatures'
import { IStakeProtocolFeatures } from './IStakeProtocolFeatures'

/**
 * @interface IProtocolPlugin
 * Interface to be implemented by a protocol plugin to provide protocol-specific functionality
 */
export interface IProtocolPlugin {
  protocolName: ProtocolName
  supportedChains: ChainInfo[]

  /** INITIALIZATION */
  initialize(params: { context: IProtocolPluginContext }): void

  // --- Feature Modules ---
  
  /** 
   * Lending features (optional). 
   * Defined if the protocol supports lending operations.
   */
  readonly lending?: ILendingProtocolFeatures

  /** 
   * Yield features (optional). 
   * Defined if the protocol supports yield operations.
   */
  readonly yield?: IYieldProtocolFeatures

  /** 
   * Staking features (optional). 
   * Defined if the protocol supports staking operations.
   */
  readonly stake?: IStakeProtocolFeatures
}
