import { ProtocolName } from '@thesolidchain/sdk-common'
import { ProtocolPluginsRecordType } from '../implementation/ProtocolPluginsRegistry'
import { AaveV3ProtocolPlugin } from './aave-v3/implementation/AAVEv3ProtocolPlugin'
import { YearnProtocolPlugin } from './yearn/implementation/YearnProtocolPlugin'

/**
 * Protocol plugins record
 *
 * Note: add here the plugins you want to use in the SDK
 */
export const ProtocolPluginsRecord: ProtocolPluginsRecordType = {
  [ProtocolName.AaveV3]: AaveV3ProtocolPlugin,
  [ProtocolName.Yearn]: YearnProtocolPlugin,
}
