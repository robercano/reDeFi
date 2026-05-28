import { ProtocolName } from '@thesolidchain/sdk-common'
import { ProtocolPluginsRecordType } from '../implementation/ProtocolPluginsRegistry'
import { AaveV3ProtocolPlugin } from './aave-v3/implementation/AAVEv3ProtocolPlugin'
import { YearnProtocolPlugin } from './yearn/implementation/YearnProtocolPlugin'
import { LidoProtocolPlugin } from './lido/implementation/LidoProtocolPlugin'
import { MakerProtocolPlugin } from './maker/implementation/MakerProtocolPlugin'
import { UniswapV3ProtocolPlugin } from './uniswap-v3/UniswapV3ProtocolPlugin'

/**
 * Protocol plugins record
 *
 * Note: add here the plugins you want to use in the SDK
 */
export const ProtocolPluginsRecord: ProtocolPluginsRecordType = {
  [ProtocolName.AaveV3]: AaveV3ProtocolPlugin,
  [ProtocolName.Yearn]: YearnProtocolPlugin,
  [ProtocolName.Lido]: LidoProtocolPlugin,
  [ProtocolName.Maker]: MakerProtocolPlugin,
  [ProtocolName.UniswapV3]: UniswapV3ProtocolPlugin,
}
