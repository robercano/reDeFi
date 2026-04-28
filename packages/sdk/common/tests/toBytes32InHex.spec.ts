import { describe, expect, it } from 'vitest'
import { toBytes32InHex } from '../src/common/utils/toBytes32InHex'
import { toHex } from 'viem'

describe('toBytes32InHex', () => {
  it('should convert string to 32 bytes hex', () => {
    expect(toBytes32InHex('AaveV3')).toBe(toHex('AaveV3', { size: 32 }))
  })

  it('should throw an error for empty string', () => {
    expect(() => toBytes32InHex('')).toThrow('Value is required to convert to bytes32')
  })
})
