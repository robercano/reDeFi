import { describe, expect, it } from 'vitest'
import { PoolInfo, PoolInfoParameters } from '../src/common/implementation/PoolInfo'
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

class MockPoolInfo extends PoolInfo {
  readonly type = PoolType.Lending
  readonly id = new MockPoolId({})
  public constructor(params: PoolInfoParameters) {
    super(params)
  }
}

describe('PoolInfo', () => {
  it('should create a PoolInfo instance and return toString correctly', () => {
    const poolInfo = new MockPoolInfo({})

    expect(poolInfo.type).toBe(PoolType.Lending)
    expect(poolInfo.toString()).toContain('Pool Info: Lending')
    expect(poolInfo.toString()).toContain(poolInfo.id.toString())
  })
})
