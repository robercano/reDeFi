import { describe, expect, it } from 'vitest'
import { chainIdToGraphChain } from '../src/common/utils/chainIdToGraphChain'
import { ChainIds } from '../src/common/implementation/ChainIds'

describe('chainIdToGraphChain', () => {
  it('should return correct graph chain for supported chain id', () => {
    expect(chainIdToGraphChain(ChainIds.Mainnet)).toBe('mainnet')
    expect(chainIdToGraphChain(ChainIds.Base)).toBe('base')
  })

  it('should throw error for unsupported chain id', () => {
    expect(() => chainIdToGraphChain(99999)).toThrow('chainIdToGraphChain: Unsupported chain ID: 99999')
  })
})
