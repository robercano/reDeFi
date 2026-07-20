import {
  IProtocolPlugin,
  ILiquidityProtocolFeatures,
  IProtocolPluginContext,
} from '@thesolidchain/protocol-plugins-common'
import {
  ProtocolName,
  valuesOfChainFamilyMap,
  ChainFamilyName,
} from '@thesolidchain/sdk-common'
import { UniswapV3LiquidityFeatures } from './UniswapV3LiquidityFeatures'
import { UniswapV3Addresses } from './config/UniswapV3Addresses'
import { BaseProtocolPlugin } from '../../implementation/BaseProtocolPlugin'

/**
 * @class UniswapV3ProtocolPlugin
 * Uniswap V3 protocol plugin
 *
 * ⚠️ NOT REGISTERED: this plugin is intentionally deregistered from
 * `../ProtocolPluginsRecord.ts` (see issue #11 item 8) and therefore unreachable through the
 * normal SDK plugin registry (`ProtocolPluginsRegistry.getPlugin`). Re-register it only after
 * independently verifying the fixes in issue #11 — in particular the Base
 * NonfungiblePositionManager address in `./config/UniswapV3Addresses.ts`, which is a
 * best-effort, network-unverified value.
 */
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
    // Register the per-chain NonfungiblePositionManager addresses (issue #11 item 2).
    params.context.addressBookManager.registerAddresses(UniswapV3Addresses)
    this.liquidity = new UniswapV3LiquidityFeatures(params.context)
  }
}
