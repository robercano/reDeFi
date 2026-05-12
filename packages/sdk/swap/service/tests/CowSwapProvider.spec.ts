import { describe, it, expect, vi, beforeEach } from 'vitest'
import { CowSwapProvider } from '../src/implementation/cowswap/CowSwapProvider'
import { IConfigurationProvider } from '@thesolidchain/configuration-provider-common'
import { IAllowanceManager } from '@thesolidchain/allowance-manager-common'
import { ITokensManager } from '@thesolidchain/tokens-common'
import {
  IntentSwapProviderType,
  ChainIds,
  Address,
  Token,
  ChainInfo,
  TokenAmount,
} from '@thesolidchain/sdk-common'

const mockGetQuote = vi.fn()
const mockSendOrder = vi.fn()
const mockSendSignedOrderCancellations = vi.fn()
const mockGetOrder = vi.fn()
const mockGetTrades = vi.fn()

vi.mock('@cowprotocol/cow-sdk', async (importOriginal) => {
  const actual = await importOriginal<any>()
  return {
    ...actual,
    OrderBookApi: vi.fn().mockImplementation(() => ({
      getQuote: mockGetQuote,
      sendOrder: mockSendOrder,
      sendSignedOrderCancellations: mockSendSignedOrderCancellations,
      getOrder: mockGetOrder,
      getTrades: mockGetTrades,
    })),
  }
})

describe('CowSwapProvider', () => {
  let configProvider: import('vitest').Mocked<IConfigurationProvider>
  let allowanceManager: import('vitest').Mocked<IAllowanceManager>
  let tokensManager: import('vitest').Mocked<ITokensManager>

  beforeEach(() => {
    configProvider = {
      getConfigurationItem: vi.fn(),
    } as any

    allowanceManager = {} as any
    tokensManager = {} as any

    mockGetQuote.mockReset()
    mockSendOrder.mockReset()
    mockSendSignedOrderCancellations.mockReset()
    mockGetOrder.mockReset()
    mockGetTrades.mockReset()
  })

  it('should initialize correctly', () => {
    const provider = new CowSwapProvider({ configProvider, allowanceManager, tokensManager })
    expect((provider as any).type).toBe(IntentSwapProviderType.CowSwap)
    expect(provider.getSupportedChainIds()).toContain(ChainIds.Mainnet)
  })

  it('should throw error when checking supported chain ID if invalid', () => {
    const provider = new CowSwapProvider({ configProvider, allowanceManager, tokensManager })
    expect(() => (provider as any)._assertSupportedChainId(9999)).toThrow(
      /not supported by CowSwapProvider/,
    )
  })

  it('should get sell order quote correctly', async () => {
    const provider = new CowSwapProvider({ configProvider, allowanceManager, tokensManager })
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
    const mockSender = Address.createFromEthereum({
      value: '0x3333333333333333333333333333333333333333',
    })

    mockGetQuote.mockResolvedValue({
      quote: {
        buyAmount: '900',
        validTo: 100000,
      },
    })

    const result = await provider.getSellOrderQuote({
      fromAmount: mockFromAmount,
      toToken: mockToToken,
      sender: mockSender,
    })

    expect(result.toAmount.amount).toBe('9e-16')
    expect(result.order.feeAmount).toBe('0')
    expect(mockGetQuote).toHaveBeenCalled()
  })

  it('should get sell order quote with limit price', async () => {
    const provider = new CowSwapProvider({ configProvider, allowanceManager, tokensManager })
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
    const mockSender = Address.createFromEthereum({
      value: '0x3333333333333333333333333333333333333333',
    })

    mockGetQuote.mockResolvedValue({
      quote: {
        buyAmount: '900',
        validTo: 100000,
      },
    })

    const limitPrice = { value: '0.8', multiply: vi.fn(), toString: () => '0.8' } as any
    const limitAmount = TokenAmount.createFrom({ token: mockToToken, amount: '800' })
    mockFromAmount.multiply = vi.fn().mockReturnValue(limitAmount)

    const result = await provider.getSellOrderQuote({
      fromAmount: mockFromAmount,
      toToken: mockToToken,
      sender: mockSender,
      limitPrice,
    })

    expect(result.toAmount.amount).toBe('800')
    expect(result.order.buyAmount).toBe('800000000000000000000')
  })

  it('should cancel order correctly', async () => {
    const provider = new CowSwapProvider({ configProvider, allowanceManager, tokensManager })

    mockSendSignedOrderCancellations.mockResolvedValue(1)

    const result = await provider.cancelOrder({
      chainId: ChainIds.Mainnet,
      orderId: '0xorderid',
      signingResult: {} as any,
    })

    expect(result.result).toBe('1 order(s) 0xorderid')
  })

  it('should cancel order on chain correctly', async () => {
    const provider = new CowSwapProvider({ configProvider, allowanceManager, tokensManager })

    const result = await provider.cancelOrderOnchain({
      chainId: ChainIds.Mainnet,
      orderId: '0xorderid',
    })

    expect(result.description).toContain('Cancel CowSwap order')
    expect(result.transaction.target.value).toBeDefined()
    expect(result.transaction.calldata).toBeDefined()
  })

  it('should check order correctly', async () => {
    const provider = new CowSwapProvider({ configProvider, allowanceManager, tokensManager })

    mockGetOrder.mockResolvedValue({ status: 'fulfilled' })
    mockGetTrades.mockResolvedValue([])

    const result = await provider.checkOrder({
      chainId: ChainIds.Mainnet,
      orderId: '0xorderid',
    })

    expect(result?.order.status).toBe('fulfilled')
  })

  it('should return null if order not found', async () => {
    const provider = new CowSwapProvider({ configProvider, allowanceManager, tokensManager })

    mockGetOrder.mockResolvedValue(null)
    mockGetTrades.mockResolvedValue([])

    const result = await provider.checkOrder({
      chainId: ChainIds.Mainnet,
      orderId: '0xorderid',
    })

    expect(result).toBeNull()
  })
})
