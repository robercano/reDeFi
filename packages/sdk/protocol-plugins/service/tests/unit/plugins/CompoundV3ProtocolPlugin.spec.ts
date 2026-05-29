import { IProtocolPluginContext } from '@thesolidchain/protocol-plugins-common'
import { ChainFamilyMap, ProtocolName } from '@thesolidchain/sdk-common'
import { describe, expect, it, vi } from 'vitest'
import { CompoundV3ProtocolPlugin } from '../../../src/plugins/compound-v3/CompoundV3ProtocolPlugin'

describe('CompoundV3ProtocolPlugin', () => {
  it('initializes correctly and exposes lending and yield features', () => {
    const plugin = new CompoundV3ProtocolPlugin()
    
    expect(plugin.protocolName).toBe(ProtocolName.CompoundV3)
    
    expect(plugin.supportedChains).toContainEqual(ChainFamilyMap.Ethereum.Mainnet)
    expect(plugin.supportedChains).toContainEqual(ChainFamilyMap.Arbitrum.ArbitrumOne)
    expect(plugin.supportedChains).toContainEqual(ChainFamilyMap.Optimism.Optimism)
    expect(plugin.supportedChains).toContainEqual(ChainFamilyMap.Base.Base)

    const contextMock = {
      provider: {
        chain: { id: 1 },
      },
    } as unknown as IProtocolPluginContext

    plugin.initialize({ context: contextMock })

    expect(plugin.lending).toBeDefined()
    expect(plugin.yield).toBeDefined()
  })
})
