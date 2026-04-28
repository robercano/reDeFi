import { describe, expect, it } from 'vitest'
import { getViemChain } from '../src/common/utils/getViemChain'

describe('getViemChain', () => {
  it('should return the correct chain for a given id', () => {
    expect(getViemChain(1).name).toBe('Ethereum')
    expect(getViemChain(8453).name).toBe('Base')
    expect(getViemChain(999).name).toBe('HyperEVM')
  })
})
