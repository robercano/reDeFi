import { describe, it, expect } from 'vitest'
import {
  addressSchema,
  optionalPoolIdSchema,
  poolIdSchema,
  addressesSchema,
  bigIntSchema,
  chainIdSchema,
  chainIdsSchema,
  protocolIdsSchema,
  protocolIdSchema,
  urlOptionalSchema,
  ltvSchema,
  percentageSchema,
  numberSchema,
} from '../src/validators'
import { ChainId, ProtocolId } from '../src/domain-types'
import { SUPPORTED_CHAIN_IDS } from '../src/constants'

describe('validators', () => {
  it('addressSchema', () => {
    expect(addressSchema.parse('0x0000000000000000000000000000000000000001')).toBe('0x0000000000000000000000000000000000000001')
    expect(() => addressSchema.parse('invalid')).toThrow()
  })

  it('optionalPoolIdSchema', () => {
    expect(optionalPoolIdSchema.parse(undefined)).toBeUndefined()
    expect(optionalPoolIdSchema.parse('0x1234567890123456789012345678901234567890123456789012345678901234')).toBe('0x1234567890123456789012345678901234567890123456789012345678901234')
    expect(() => optionalPoolIdSchema.parse('invalid')).toThrow()
  })

  it('poolIdSchema', () => {
    expect(poolIdSchema.parse('0x1234567890123456789012345678901234567890123456789012345678901234')).toBe('0x1234567890123456789012345678901234567890123456789012345678901234')
    expect(() => poolIdSchema.parse('invalid')).toThrow()
  })

  it('addressesSchema', () => {
    expect(addressesSchema.parse('0x0000000000000000000000000000000000000001,0x0000000000000000000000000000000000000002')).toEqual([
      '0x0000000000000000000000000000000000000001',
      '0x0000000000000000000000000000000000000002',
    ])
    expect(() => addressesSchema.parse('invalid,0x0000000000000000000000000000000000000002')).toThrow()
  })

  it('bigIntSchema', () => {
    expect(bigIntSchema.parse('123')).toBe(123n)
    expect(bigIntSchema.parse(123n)).toBe(123n)
    expect(() => bigIntSchema.parse('123.45')).toThrow()
    expect(() => bigIntSchema.parse('invalid')).toThrow()
  })

  it('chainIdSchema', () => {
    expect(chainIdSchema.parse(1)).toBe(ChainId.MAINNET)
    expect(chainIdSchema.parse('1')).toBe(ChainId.MAINNET)
    expect(() => chainIdSchema.parse(999999)).toThrow()
  })

  it('chainIdsSchema', () => {
    // Need to use valid chain IDs that are supported
    const supported = SUPPORTED_CHAIN_IDS[0]
    expect(chainIdsSchema.parse(String(supported))).toEqual([supported])
    expect(() => chainIdsSchema.parse('999999')).toThrow()
  })

  it('protocolIdsSchema', () => {
    expect(protocolIdsSchema.parse('aave3,spark')).toEqual([ProtocolId.AAVE3, ProtocolId.SPARK])
    expect(() => protocolIdsSchema.parse('InvalidProtocol')).toThrow()
  })

  it('protocolIdSchema', () => {
    expect(protocolIdSchema.parse('aave3')).toBe(ProtocolId.AAVE3)
    expect(protocolIdSchema.parse(ProtocolId.AAVE3)).toBe(ProtocolId.AAVE3)
    expect(() => protocolIdSchema.parse('InvalidProtocol')).toThrow()
  })

  it('urlOptionalSchema', () => {
    expect(urlOptionalSchema.parse('http://example.com')).toBe('http://example.com')
    expect(urlOptionalSchema.parse(undefined)).toBeUndefined()
    expect(() => urlOptionalSchema.parse('not-a-url')).toThrow()
  })

  it('ltvSchema', () => {
    expect(ltvSchema.parse('5000')).toBe(5000n)
    expect(() => ltvSchema.parse('10001')).toThrow()
    expect(() => ltvSchema.parse('-1')).toThrow()
  })

  it('percentageSchema', () => {
    expect(percentageSchema.parse('5000')).toBe(5000n)
    expect(percentageSchema.parse('10000')).toBe(10000n)
    expect(() => percentageSchema.parse('10001')).toThrow()
    expect(() => percentageSchema.parse('-1')).toThrow()
  })

  it('numberSchema', () => {
    expect(numberSchema.parse('123')).toBe(123)
    expect(numberSchema.parse(123)).toBe(123)
    expect(() => numberSchema.parse('123.45')).toThrow()
    expect(() => numberSchema.parse('invalid')).toThrow()
  })
})
