import { describe, expect, it } from 'vitest'
import {
  isValueReference,
  getValueFromReference,
} from '../src/simulation/interfaces/ValueReference'

describe('ValueReference', () => {
  it('should correctly identify a ValueReference', () => {
    expect(isValueReference({ estimatedValue: 10, path: ['a', 'b'] })).toBe(true)
    expect(isValueReference({ estimatedValue: 10 })).toBe(false)
    expect(isValueReference(null)).toBe(false)
    expect(isValueReference(10)).toBe(false)
  })

  it('should correctly get value from reference', () => {
    expect(getValueFromReference({ estimatedValue: 10, path: ['a', 'b'] })).toBe(10)
    expect(getValueFromReference(20)).toBe(20)
  })
})
