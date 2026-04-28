import { describe, expect, it } from 'vitest'
import { isChainId, isLegacyChainId } from '../src/common/types/ChainId'
import { ChainIds, LegacyChainIds } from '../src/common/implementation/ChainIds'

describe('ChainId', () => {
  it('should correctly identify ChainId', () => {
    expect(isChainId(ChainIds.Mainnet)).toBe(true)
    expect(isChainId(ChainIds.Base)).toBe(true)
    expect(isChainId(999999999)).toBe(false)
    expect(isChainId('invalid')).toBe(false)
  })

  it('should correctly identify LegacyChainId', () => {
    expect(isLegacyChainId(LegacyChainIds.Mainnet)).toBe(true)
    expect(isLegacyChainId(999999999)).toBe(false)
  })
})
