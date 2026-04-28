import { describe, expect, it } from 'vitest'
import { getChainInfoByChainId } from '../src/common/implementation/ChainFamilies'
import { Protocol, ProtocolParameters } from '../src/common/implementation/Protocol'
import { ProtocolName } from '../src/common/enums/ProtocolName'

class MockProtocol extends Protocol {
  readonly name = ProtocolName.AaveV3
  public constructor(params: ProtocolParameters) {
    super(params)
  }
}

class AnotherProtocol extends Protocol {
  readonly name = ProtocolName.MorphoBlue
  public constructor(params: ProtocolParameters) {
    super(params)
  }
}

describe('Protocol', () => {
  it('should create a Protocol instance', () => {
    const chainInfo = getChainInfoByChainId(1)
    const protocol = new MockProtocol({ chainInfo })
    
    expect(protocol.name).toBe(ProtocolName.AaveV3)
    expect(protocol.chainInfo).toBe(chainInfo)
  })

  it('should evaluate equality correctly', () => {
    const chainInfo = getChainInfoByChainId(1)
    const protocol1 = new MockProtocol({ chainInfo })
    const protocol2 = new MockProtocol({ chainInfo })
    const protocol3 = new AnotherProtocol({ chainInfo })
    
    const anotherChain = getChainInfoByChainId(42161)
    const protocol4 = new MockProtocol({ chainInfo: anotherChain })

    expect(protocol1.equals(protocol2)).toBe(true)
    expect(protocol1.equals(protocol3)).toBe(false)
    expect(protocol1.equals(protocol4)).toBe(false)
  })

  it('should format toString correctly', () => {
    const chainInfo = getChainInfoByChainId(1)
    const protocol = new MockProtocol({ chainInfo })
    expect(protocol.toString()).toContain('Protocol: ')
  })
})
