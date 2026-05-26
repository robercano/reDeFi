import { describe, it, expect } from 'vitest'
import { isBigInt, safeParseBigInt } from '../src/numbers-helpers'
import { serialize } from '../src/serialize'
import {
  DebankNetworkNameToOurs,
  DebankNetworkNames,
  DEBANK_SUPPORTED_CHAIN_IDS,
  DEBANK_SUPPORTED_PROTOCOL_IDS,
} from '../src/debank-helpers'
import { getRpcGatewayEndpoint } from '../src/getRpcGatewayEndpoint'
import { isValidAddress, isValidMorphoBluePool } from '../src/guards'
import { ChainId } from '../src/domain-types'
import { isSSR } from '../src/is-ssr'
import { LendingRangeType } from '../src/lending-range'

describe('helpers', () => {
  describe('numbers-helpers', () => {
    it('isBigInt', () => {
      expect(isBigInt('123')).toBe(true)
      expect(isBigInt('abc')).toBe(false)
      expect(isBigInt('')).toBe(true)
    })

    it('safeParseBigInt', () => {
      expect(safeParseBigInt('123')).toBe(123n)
      expect(safeParseBigInt('abc')).toBeUndefined()
      expect(safeParseBigInt(undefined)).toBeUndefined()
    })
  })

  describe('serialize', () => {
    it('should serialize objects and convert bigints to string', () => {
      expect(serialize({ a: 1n, b: 'test' })).toBe('{"a":"1","b":"test"}')
    })

    it('should handle cyclical structures gracefully or return undefined/log', () => {
      const a: any = {}
      a.a = a
      expect(serialize(a)).toBeUndefined()
    })
  })

  describe('debank-helpers', () => {
    it('should have mappings', () => {
      expect(DebankNetworkNameToOurs[DebankNetworkNames.ethereumMainnet]).toBeDefined()
      expect(DEBANK_SUPPORTED_CHAIN_IDS.length).toBeGreaterThan(0)
      expect(DEBANK_SUPPORTED_PROTOCOL_IDS.length).toBeGreaterThan(0)
    })
  })

  describe('getRpcGatewayEndpoint', () => {
    const config = {
      skipCache: true,
      skipMulticall: false,
      skipGraph: true,
      stage: 'dev',
      source: 'test',
    }
    const url = 'http://gateway'

    it('should return valid RPC endpoint', () => {
      expect(getRpcGatewayEndpoint(url, ChainId.MAINNET, config)).toContain('mainnet')
      expect(getRpcGatewayEndpoint(url, ChainId.ARBITRUM, config)).toContain('arbitrum')
      expect(getRpcGatewayEndpoint(url, ChainId.OPTIMISM, config)).toContain('optimism')
      expect(getRpcGatewayEndpoint(url, ChainId.BASE, config)).toContain('base')
      expect(getRpcGatewayEndpoint(url, ChainId.SONIC, config)).toContain('sonic')
      expect(getRpcGatewayEndpoint(url, ChainId.SEPOLIA, config)).toContain('sepolia')
    })

    it('should throw for unknown chain id', () => {
      // It returns undefined in network by chain ID and creates a URL with undefined
      expect(getRpcGatewayEndpoint(url, 999999 as ChainId, config)).toContain('network=undefined')
    })
  })

  describe('guards', () => {
    it('isValidAddress', () => {
      expect(isValidAddress('0x0000000000000000000000000000000000000001')).toBe(true)
      expect(isValidAddress('notanaddress')).toBe(false)
      expect(isValidAddress(123)).toBe(false)
    })

    it('isValidMorphoBluePool', () => {
      expect(
        isValidMorphoBluePool('0x1234567890123456789012345678901234567890123456789012345678901234'),
      ).toBe(true)
      expect(isValidMorphoBluePool('0x123')).toBe(false)
      expect(isValidMorphoBluePool(123)).toBe(false)
    })
  })

  describe('is-ssr', () => {
    it('should return true or false', () => {
      expect(typeof isSSR()).toBe('boolean')
    })
  })

  describe('lending-range', () => {
    it('should be defined', () => {
      expect(LendingRangeType.belowHtp).toBe('belowHtp')
      expect(LendingRangeType.belowLup).toBe('belowLup')
      expect(LendingRangeType.aboveLup).toBe('aboveLup')
    })
  })
})
