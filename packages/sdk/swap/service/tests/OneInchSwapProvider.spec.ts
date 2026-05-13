import { describe, it, expect, vi, beforeEach } from 'vitest'
import { OneInchSwapProvider } from '../src/implementation/oneinch/OneInchSwapProvider'
import { IConfigurationProvider } from '@thesolidchain/configuration-provider-common'
import {
  IPercentage,
  ChainIds,
  SwapProviderType,
  Token,
  ChainInfo,
  Address,
  TokenAmount,
} from '@thesolidchain/sdk-common'

vi.mock('node-fetch', () => ({
  default: vi.fn(),
}))

import fetch from 'node-fetch'
const mockFetch = vi.mocked(fetch)

describe('OneInchSwapProvider', () => {
  let configProvider: import('vitest').Mocked<IConfigurationProvider>

  beforeEach(() => {
    configProvider = {
      getConfigurationItem: vi.fn((params) => {
        if (params.name === 'ONE_INCH_API_URL') return 'https://api.1inch.dev'
        if (params.name === 'ONE_INCH_API_KEY') return 'test_key'
        if (params.name === 'ONE_INCH_API_VERSION') return 'v6.0'
        if (params.name === 'ONE_INCH_ALLOWED_SWAP_PROTOCOLS') return ''
        if (params.name === 'ONE_INCH_EXCLUDED_SWAP_PROTOCOLS') return ''
        if (params.name === 'ONE_INCH_SWAP_CHAIN_IDS') return '1'
        return null
      }),
    } as unknown as import('vitest').Mocked<IConfigurationProvider>

    mockFetch.mockReset()
  })

  it('should initialize correctly with valid config', () => {
    const provider = new OneInchSwapProvider({ configProvider })
    expect((provider as unknown as { type: string }).type).toBe(SwapProviderType.OneInch)
    expect(provider.getSupportedChainIds()).toEqual([ChainIds.Mainnet])
  })

  it('should format url and fetch swap data correctly', async () => {
    const provider = new OneInchSwapProvider({ configProvider })

    const chainInfo = ChainInfo.createFrom({ chainId: ChainIds.Mainnet, name: 'Mainnet' })
    const mockToken = Token.createFrom({
      address: Address.createFromEthereum({ value: '0x1111111111111111111111111111111111111111' }),
      chainInfo,
      symbol: 'ABC',
      name: 'ABC',
      decimals: 18,
    })
    const mockFromAmount = TokenAmount.createFrom({ token: mockToken, amount: '1000' })
    const mockToToken = Token.createFrom({
      address: Address.createFromEthereum({ value: '0x2222222222222222222222222222222222222222' }),
      chainInfo,
      symbol: 'DEF',
      name: 'DEF',
      decimals: 18,
    })
    const mockRecipient = Address.createFromEthereum({
      value: '0x3333333333333333333333333333333333333333',
    })
    const mockSlippage = { value: 1 } as unknown as IPercentage

    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => ({
        toTokenAmount: '900',
        tx: {
          data: '0xdata',
          to: '0x4444444444444444444444444444444444444444',
          value: '0',
          gasPrice: '10',
        },
      }),
    } as unknown as import('node-fetch').Response)

    const result = await provider.getSwapDataExactInput({
      fromAmount: mockFromAmount,
      toToken: mockToToken,
      recipient: mockRecipient,
      slippage: mockSlippage,
    })

    expect(result.calldata).toBe('0xdata')
    expect(mockFetch).toHaveBeenCalled()
  })

  it('should format url and fetch quote correctly', async () => {
    const provider = new OneInchSwapProvider({ configProvider })

    const chainInfo = ChainInfo.createFrom({ chainId: ChainIds.Mainnet, name: 'Mainnet' })
    const mockToken = Token.createFrom({
      address: Address.createFromEthereum({ value: '0x1111111111111111111111111111111111111111' }),
      chainInfo,
      symbol: 'ABC',
      name: 'ABC',
      decimals: 18,
    })
    const mockFromAmount = TokenAmount.createFrom({ token: mockToken, amount: '1000' })
    const mockToToken = Token.createFrom({
      address: Address.createFromEthereum({ value: '0x2222222222222222222222222222222222222222' }),
      chainInfo,
      symbol: 'DEF',
      name: 'DEF',
      decimals: 18,
    })

    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => ({
        toTokenAmount: '900',
        protocols: [],
        gas: 200000,
      }),
    } as unknown as import('node-fetch').Response)

    const result = await provider.getSwapQuoteExactInput({
      fromAmount: mockFromAmount,
      toToken: mockToToken,
    })

    expect(result.estimatedGas).toBe('200000')
    expect(mockFetch).toHaveBeenCalled()
  })

  it('should handle fetch errors in swap data', async () => {
    const provider = new OneInchSwapProvider({ configProvider })

    const chainInfo = ChainInfo.createFrom({ chainId: ChainIds.Mainnet, name: 'Mainnet' })
    const mockToken = Token.createFrom({
      address: Address.createFromEthereum({ value: '0x1111111111111111111111111111111111111111' }),
      chainInfo,
      symbol: 'ABC',
      name: 'ABC',
      decimals: 18,
    })
    const mockFromAmount = TokenAmount.createFrom({ token: mockToken, amount: '1000' })
    const mockToToken = Token.createFrom({
      address: Address.createFromEthereum({ value: '0x2222222222222222222222222222222222222222' }),
      chainInfo,
      symbol: 'DEF',
      name: 'DEF',
      decimals: 18,
    })
    const mockRecipient = Address.createFromEthereum({
      value: '0x3333333333333333333333333333333333333333',
    })
    const mockSlippage = { value: 1 } as unknown as IPercentage

    mockFetch.mockResolvedValue({
      ok: false,
      status: 400,
      json: async () => ({ description: 'insufficient liquidity' }),
    } as unknown as import('node-fetch').Response)

    await expect(
      provider.getSwapDataExactInput({
        fromAmount: mockFromAmount,
        toToken: mockToToken,
        recipient: mockRecipient,
        slippage: mockSlippage,
      }),
    ).rejects.toThrow(/Error performing 1inch swap data request/)
  })

  it('should throw error if config is missing', () => {
    configProvider.getConfigurationItem.mockReturnValue(null as unknown as string)
    expect(() => new OneInchSwapProvider({ configProvider })).toThrow()
  })
})
