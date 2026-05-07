import { describe, expect, it } from 'vitest'
import { LendingPool } from '../src/lending-protocols/implementation/LendingPool'
import { LendingPoolId } from '../src/lending-protocols/implementation/LendingPoolId'
import { LendingPoolInfo } from '../src/lending-protocols/implementation/LendingPoolInfo'
import { LendingPosition } from '../src/lending-protocols/implementation/LendingPosition'
import { LendingPositionId } from '../src/lending-protocols/implementation/LendingPositionId'
import { Address } from '../src/common/implementation/Address'
import { ProtocolName } from '../src/common/enums/ProtocolName'
import { PoolType } from '../src/common/enums/PoolType'
import { PositionType } from '../src/common/enums/PositionType'
import { LendingPositionType } from '../src/lending-protocols/types/LendingPositionType'
import { Token } from '../src/common/implementation/Token'
import { TokenAmount } from '../src/common/implementation/TokenAmount'
import { ChainInfo } from '../src/common/implementation/ChainInfo'

// Create proper mock objects
const mockProtocol = { name: ProtocolName.AaveV3, toString: () => 'AaveV3' } as unknown as ProtocolName
const chainInfo = ChainInfo.createFrom({ chainId: 1, name: 'Ethereum' })
const mockToken = Token.createFrom({ chainInfo, address: Address.createFromEthereum({ value: '0x1111111111111111111111111111111111111111' }), decimals: 18, symbol: 'COL', name: 'Collateral' })
const mockTokenAmount = TokenAmount.createFrom({ token: mockToken, amount: '1000' })
const mockId = {} as unknown as LendingPoolId

class MockLendingPoolId extends LendingPoolId {
  readonly protocol = mockProtocol as never
  public id: string
  constructor(params: Record<string, unknown>) { super(params as never); this.id = params.id as string }
  static create(params: Record<string, unknown>) { return new MockLendingPoolId(params) }
}

class MockLendingPool extends LendingPool {
  readonly protocol = mockProtocol as never
  readonly id = {} as never
  public collateralToken: Token
  public debtToken: Token
  constructor(params: Record<string, unknown>) { super(params as never); this.collateralToken = params.collateralToken as Token; this.debtToken = params.debtToken as Token }
  static create(params: Record<string, unknown>) { return new MockLendingPool(params) }
}

class MockLendingPoolInfo extends LendingPoolInfo {
  readonly protocol = mockProtocol as never
  readonly id = {} as never
  public pool: unknown
  constructor(params: Record<string, unknown>) { super(params as never); this.pool = params.pool }
  static create(params: Record<string, unknown>) { return new MockLendingPoolInfo(params) }
}

class MockLendingPositionId extends LendingPositionId {
  public id: string
  constructor(params: Record<string, unknown>) { super(params as never); this.id = params.id as string }
  static create(params: Record<string, unknown>) { return new MockLendingPositionId(params) }
  toString() { return 'MockLendingPositionId' }
}

class MockLendingPosition extends LendingPosition {
  readonly protocol = mockProtocol as never
  readonly pool = MockLendingPool.create({ collateralToken: mockToken, debtToken: mockToken })
  constructor(params: Record<string, unknown>) { super(params as never) }
  static create(params: Record<string, unknown>) { return new MockLendingPosition(params) }
}

describe('Lending Abstract Classes', () => {
  it('LendingPoolId', () => {
    const id = MockLendingPoolId.create({
      id: 'pool-1'
    })
    expect(id.type).toBe(PoolType.Lending)
    expect(id.protocol).toBe(mockProtocol)
    expect(id.id).toBe('pool-1')
    expect(id.toString()).toBe('Lending Pool ID: AaveV3')
  })

  it('LendingPool', () => {
    const pool = MockLendingPool.create({
      collateralToken: mockToken,
      debtToken: mockToken
    })
    expect(pool.type).toBe(PoolType.Lending)
    expect(pool.protocol).toBe(mockProtocol)
    expect(pool.collateralToken).toStrictEqual(mockToken)
    expect(pool.debtToken).toStrictEqual(mockToken)
  })

  it('LendingPoolInfo', () => {
    const info = MockLendingPoolInfo.create({
      pool: MockLendingPool.create({ collateralToken: mockToken, debtToken: mockToken }),
      collateralInfo: {} as never,
      debtInfo: {} as never
    })
    expect(info.pool).toBeDefined()
  })

  it('LendingPositionId', () => {
    const id = MockLendingPositionId.create({
      id: 'pos-1'
    })
    expect(id.type).toBe(PositionType.Lending)
    expect(id.id).toBe('pos-1')
  })

  it('LendingPosition', () => {
    const pos = MockLendingPosition.create({
      subtype: LendingPositionType.Multiply,
      id: mockId,
      debtAmount: mockTokenAmount,
      collateralAmount: mockTokenAmount
    })
    expect(pos.type).toBe(PositionType.Lending)
    expect(pos.subtype).toBe(LendingPositionType.Multiply)
    expect(pos.id).toBe(mockId)
    expect(pos.debtAmount).toBe(mockTokenAmount)
    expect(pos.collateralAmount).toBe(mockTokenAmount)
  })
})
