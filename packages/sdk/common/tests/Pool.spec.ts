import { describe, expect, it } from 'vitest'
import { Pool, PoolParameters } from '../src/common/implementation/Pool'
import { PoolId, PoolIdParameters } from '../src/common/implementation/PoolId'
import { PoolType } from '../src/common/enums/PoolType'
import { Protocol, ProtocolParameters } from '../src/common/implementation/Protocol'
import { ProtocolName } from '../src/common/enums/ProtocolName'
import { getChainInfoByChainId } from '../src/common/implementation/ChainFamilies'

class MockProtocol extends Protocol {
  readonly name = ProtocolName.AaveV3
  public constructor(params: ProtocolParameters) {
    super(params)
  }
}

class MockPoolId extends PoolId {
  readonly type = PoolType.Lending
  readonly protocol = new MockProtocol({ chainInfo: getChainInfoByChainId(1) })
  public constructor(params: PoolIdParameters) {
    super(params)
  }
}

class MockPool extends Pool {
  readonly type = PoolType.Lending
  readonly id = new MockPoolId({})
  public constructor(params: PoolParameters) {
    super(params)
  }
}

describe('Pool', () => {
  it('should create a Pool instance and return toString correctly', () => {
    const pool = new MockPool({})

    expect(pool.type).toBe(PoolType.Lending)
    expect(pool.id.type).toBe(PoolType.Lending)
    expect(pool.toString()).toContain('Pool: Lending')
    expect(pool.id.toString()).toContain('Pool ID:')
  })
})
