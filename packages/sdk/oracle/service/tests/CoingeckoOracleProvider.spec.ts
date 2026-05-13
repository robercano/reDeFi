import { describe, it, expect, vi, beforeEach } from 'vitest'
import { CoingeckoOracleProvider } from '../src/implementation/coingecko/CoingeckoOracleProvider'
import {
  ChainInfo,
  ChainIds,
  Address,
  Token,
  FiatCurrency,
  OracleProviderType,
  NATIVE_CURRENCY_ADDRESS_LOWERCASE,
} from '@thesolidchain/sdk-common'

const mockConfigProvider = {
  getConfigurationItem: vi.fn((params) => {
    switch (params.name) {
      case 'COINGECKO_API_URL':
        return 'https://api.coingecko.com/api/v3'
      case 'COINGECKO_API_VERSION':
        return 'v3'
      case 'COINGECKO_API_KEY':
        return 'TEST_KEY'
      case 'COINGECKO_API_AUTH_HEADER':
        return 'x-cg-pro-api-key'
      case 'COINGECKO_SUPPORTED_CHAIN_IDS':
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

describe('CoingeckoOracleProvider', () => {
  let provider: CoingeckoOracleProvider
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

  const nativeAddress = Address.createFromEthereum({ value: NATIVE_CURRENCY_ADDRESS_LOWERCASE })
  const nativeToken = Token.createFrom({
    address: nativeAddress,
    chainInfo,
    symbol: 'ETH',
    name: 'Ethereum',
    decimals: 18,
  })

  beforeEach(() => {
    provider = new CoingeckoOracleProvider({
      configProvider: mockConfigProvider as unknown as import('@thesolidchain/configuration-provider-common').IConfigurationProvider,
    })
    fetchMock.mockReset()
  })

  it('should initialize and return supported chain ids', () => {
    expect(provider.getSupportedChainIds()).toEqual([1])
  })

  it('should get spot price token vs fiat', async () => {
    fetchMock.mockResolvedValue({
      ok: true,
      json: async () => ({ [addressBase.value.toLowerCase()]: { usd: 1500.5 } }),
    })

    const res = await provider.getSpotPrice({
      baseToken: tokenBase,
      denomination: FiatCurrency.USD,
    })
    expect(res.provider).toBe(OracleProviderType.Coingecko)
    expect(res.price.value).toBe('1500.5')
  })

  it('should get spot price token vs token', async () => {
    fetchMock.mockResolvedValue({
      ok: true,
      json: async () => ({
        [addressBase.value.toLowerCase()]: { usd: 3000 },
        [addressQuote.value.toLowerCase()]: { usd: 1500 },
      }),
    })

    const res = await provider.getSpotPrice({ baseToken: tokenBase, denomination: tokenQuote })
    expect(res.price.value).toBe('2')
  })

  it('should get spot prices for multiple tokens', async () => {
    fetchMock.mockResolvedValue({
      ok: true,
      json: async () => ({
        [addressBase.value.toLowerCase()]: { usd: 3000 },
        [addressQuote.value.toLowerCase()]: { usd: 1500 },
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

  it('should handle native token correctly in getSpotPrice', async () => {
    fetchMock.mockResolvedValue({
      ok: true,
      json: async () => ({
        ethereum: { usd: 2500 },
      }),
    })

    const res = await provider.getSpotPrice({
      baseToken: nativeToken,
      denomination: FiatCurrency.USD,
    })
    expect(res.price.value).toBe('2500')
  })
})
