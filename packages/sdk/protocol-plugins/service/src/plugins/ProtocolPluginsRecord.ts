import { ProtocolName } from '@thesolidchain/sdk-common'
import { ProtocolPluginsRecordType } from '../implementation/ProtocolPluginsRegistry'
import { AaveV3ProtocolPlugin } from './aave-v3/implementation/AAVEv3ProtocolPlugin'
import { YearnProtocolPlugin } from './yearn/implementation/YearnProtocolPlugin'
import { LidoProtocolPlugin } from './lido/implementation/LidoProtocolPlugin'
import { MakerProtocolPlugin } from './maker/implementation/MakerProtocolPlugin'
// UniswapV3ProtocolPlugin is intentionally NOT imported/registered below — see the comment on
// `ProtocolName.UniswapV3` in this record for why (issue #11 item 8).
import { CompoundV3ProtocolPlugin } from './compound-v3/CompoundV3ProtocolPlugin'
import { ConvexProtocolPlugin } from './convex/implementation/ConvexProtocolPlugin'

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
  // [ProtocolName.UniswapV3]: UniswapV3ProtocolPlugin,
  // ^ Deregistered (issue #11 item 8): the slippage-minimums, per-chain NPM address,
  // token-ordering, fee-tier, decreaseLiquidity and read-method fixes in
  // `./uniswap-v3/UniswapV3LiquidityFeatures.ts` need independent verification — in particular
  // the Base NonfungiblePositionManager address in `./uniswap-v3/config/UniswapV3Addresses.ts`,
  // which is a best-effort value this sandboxed environment had no network access to verify —
  // before this plugin is safe to expose through the SDK's plugin registry again. Re-add this
  // line once that verification is done.
  [ProtocolName.CompoundV3]: CompoundV3ProtocolPlugin,
  [ProtocolName.Convex]: ConvexProtocolPlugin,
}
