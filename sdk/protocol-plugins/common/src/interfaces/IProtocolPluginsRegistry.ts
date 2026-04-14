import { Maybe, ProtocolName } from '@thesolidchain/sdk-common'
import { type IProtocolPlugin } from './IProtocolPlugin'

export interface IProtocolPluginsRegistry {
  getPlugin(params: { protocolName: ProtocolName }): Maybe<IProtocolPlugin>
}
