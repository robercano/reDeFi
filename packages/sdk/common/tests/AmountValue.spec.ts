import { describe, expect, it } from 'vitest'
import { isAmountValue } from '../src/common/types/AmountValue'

describe('AmountValue', () => {
  it('should correctly identify AmountValue', () => {
    expect(isAmountValue('1000')).toBe(true)
    expect(isAmountValue('-10')).toBe(true)
    expect(isAmountValue('0')).toBe(true)
    expect(isAmountValue('invalid')).toBe(false)
    expect(isAmountValue(100)).toBe(false)
    expect(isAmountValue(null)).toBe(false)
    expect(isAmountValue({})).toBe(false)
  })
})
