import { describe, expect, it } from 'vitest'
import { isHexData } from '../src/common/types/HexData'

describe('HexData', () => {
  it('should correctly identify HexData', () => {
    expect(isHexData('0x1234')).toBe(true)
    expect(isHexData('0xabcDEF')).toBe(true)
    expect(isHexData('1234')).toBe(false)
    expect(isHexData('0xZZZZ')).toBe(false)
    expect(isHexData(123)).toBe(false)
    expect(isHexData(null)).toBe(false)
  })
})
