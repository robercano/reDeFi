import { describe, it, expect, vi, beforeEach } from 'vitest'
import { OneInchOracleProvider } from '../src/implementation/oneinch/OneInchOracleProvider'
import {
  ChainInfo,
  ChainIds,
  Address,
  Token,
  FiatCurrency,
  OracleProviderType,
} from '@thesolidchain/sdk-common'

const mockConfigProvider = {
  getConfigurationItem: vi.fn((params) => {
    switch (params.name) {
      case 'ONE_INCH_API_SPOT_URL':
        return 'https://api.1inch.dev'
      case 'ONE_INCH_API_SPOT_VERSION':
        return 'v1.1'
      case 'ONE_INCH_API_SPOT_KEY':
        return 'TEST_KEY'
      case 'ONE_INCH_API_SPOT_AUTH_HEADER':
        return 'Authorization'
      case 'ONE_INCH_API_SPOT_CHAIN_IDS':
        return '1,137'
      default:
        return null
    }
  }),
}

import fetch from 'node-fetch'

vi.mock('node-fetch', () => {
  return {
    default: vi.fn(),
  }
})

const fetchMock = fetch as unknown as ReturnType<typeof vi.fn>

describe('OneInchOracleProvider', () => {
  let provider: OneInchOracleProvider
  const chainInfo = ChainInfo.createFrom({ chainId: ChainIds.Mainnet, name: 'Mainnet' })
  const addressBase = Address.createFromEthereum({
    value: '0x1111111111111111111111111111111111111111',
  })
  const tokenBase = Token.createFrom({
    address: addressBase,
    chainInfo,
    symbol: 'ABC',
    name: 'ABC',
    decimals: 18,
  })

  const addressQuote = Address.createFromEthereum({
    value: '0x2222222222222222222222222222222222222222',
  })
  const tokenQuote = Token.createFrom({
    address: addressQuote,
    chainInfo,
    symbol: 'DEF',
    name: 'DEF',
    decimals: 18,
  })

  beforeEach(() => {
    provider = new OneInchOracleProvider({
      configProvider:
        mockConfigProvider as unknown as import('@thesolidchain/configuration-provider-common').IConfigurationProvider,
    })
    fetchMock.mockReset()
  })

  it('should initialize and return supported chain ids', () => {
    expect(provider.getSupportedChainIds()).toEqual([1])
  })

  it('should get spot price token vs fiat', async () => {
    fetchMock.mockResolvedValue({
      ok: true,
      json: async () => ({ [addressBase.value.toLowerCase()]: '1500.5' }),
    })

    const res = await provider.getSpotPrice({
      baseToken: tokenBase,
      denomination: FiatCurrency.USD,
    })
    expect(res.provider).toBe(OracleProviderType.OneInch)
    expect(res.price.value).toBe('1500.5')
  })

  it('should get spot price token vs token', async () => {
    fetchMock.mockResolvedValue({
      ok: true,
      json: async () => ({
        [addressBase.value.toLowerCase()]: '3000',
        [addressQuote.value.toLowerCase()]: '1500',
      }),
    })

    const res = await provider.getSpotPrice({ baseToken: tokenBase, denomination: tokenQuote })
    expect(res.price.value).toBe('2')
  })

  it('should get spot prices', async () => {
    fetchMock.mockResolvedValue({
      ok: true,
      json: async () => ({
        [addressBase.value.toLowerCase()]: '3000',
        [addressQuote.value.toLowerCase()]: '1500',
      }),
    })

    const res = await provider.getSpotPrices({
      baseTokens: [tokenBase, tokenQuote],
      chainInfo,
      quoteCurrency: FiatCurrency.USD,
    })
    expect(res.priceByAddress[addressBase.value.toLowerCase()].value).toBe('3000')
    expect(res.priceByAddress[addressQuote.value.toLowerCase()].value).toBe('1500')
  })
})
