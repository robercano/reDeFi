import { describe, expect, it } from 'vitest'
import { PositionsManager } from '../src/orders/common/implementation/PositionsManager'
import { isPositionsManager } from '../src/orders/common/interfaces/IPositionsManager'
import { Address } from '../src/common/implementation/Address'

describe('PositionsManager', () => {
  it('should instantiate and return toString correctly', () => {
    const manager = PositionsManager.createFrom({
      address: Address.createFromEthereum({ value: '0x1111111111111111111111111111111111111111' })
    })

    expect(manager.address.value).toBe('0x1111111111111111111111111111111111111111')
    expect(manager.toString()).toContain('PositionsManager')
  })

  it('should identify as PositionsManager correctly', () => {
    const manager = PositionsManager.createFrom({
      address: Address.createFromEthereum({ value: '0x1111111111111111111111111111111111111111' })
    })
    expect(isPositionsManager(manager)).toBe(true)
    expect(isPositionsManager({})).toBe(false)
    expect(isPositionsManager(null)).toBe(false)
  })
})
