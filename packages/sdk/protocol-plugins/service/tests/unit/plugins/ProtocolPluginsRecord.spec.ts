import { ProtocolName } from '@thesolidchain/sdk-common'
import { ProtocolPluginsRecord } from '../../../src/plugins/ProtocolPluginsRecord'

describe('ProtocolPluginsRecord', () => {
  it('does not register UniswapV3 (issue #11 item 8: deregistered until independently verified safe)', () => {
    expect(ProtocolPluginsRecord[ProtocolName.UniswapV3]).toBeUndefined()
  })

  it('still registers the other known-safe protocols', () => {
    expect(ProtocolPluginsRecord[ProtocolName.AaveV3]).toBeDefined()
    expect(ProtocolPluginsRecord[ProtocolName.Yearn]).toBeDefined()
    expect(ProtocolPluginsRecord[ProtocolName.Lido]).toBeDefined()
    expect(ProtocolPluginsRecord[ProtocolName.Maker]).toBeDefined()
    expect(ProtocolPluginsRecord[ProtocolName.CompoundV3]).toBeDefined()
    expect(ProtocolPluginsRecord[ProtocolName.Convex]).toBeDefined()
  })
})
