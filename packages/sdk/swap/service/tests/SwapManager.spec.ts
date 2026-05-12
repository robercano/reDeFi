import { describe, it, expect, vi, beforeEach } from 'vitest'
import { SwapManager } from '../src/implementation/SwapManager'
import { ISwapProvider } from '@thesolidchain/swap-common'
import {
  ITokenAmount,
  IToken,
  IAddress,
  IPercentage,
  ChainIds,
  SwapProviderType,
} from '@thesolidchain/sdk-common'

describe('SwapManager', () => {
  let mockProvider: import('vitest').Mocked<ISwapProvider>
  let manager: SwapManager

  const mockToken: IToken = { chainInfo: { chainId: ChainIds.Mainnet } } as IToken
  const mockFromAmount: ITokenAmount = { token: mockToken } as ITokenAmount
  const mockToToken: IToken = {} as IToken
  const mockRecipient: IAddress = '0xRecipient' as IAddress
  const mockSlippage: IPercentage = 1 as IPercentage

  beforeEach(() => {
    mockProvider = {
      providerType: SwapProviderType.OneInch,
      getSupportedChainIds: vi.fn().mockReturnValue([ChainIds.Mainnet]),
      getSwapDataExactInput: vi.fn(),
      getSwapQuoteExactInput: vi.fn(),
    } as unknown as import('vitest').Mocked<ISwapProvider>

    manager = new SwapManager({ providers: [mockProvider] })
  })

  it('should route getSwapDataExactInput to the provider', async () => {
    const mockResult = { tx: {} } as any
    mockProvider.getSwapDataExactInput.mockResolvedValue(mockResult)

    const params = {
      fromAmount: mockFromAmount,
      toToken: mockToToken,
      recipient: mockRecipient,
      slippage: mockSlippage,
    }

    const result = await manager.getSwapDataExactInput(params)
    expect(result).toBe(mockResult)
    expect(mockProvider.getSwapDataExactInput).toHaveBeenCalledWith(params)
  })

  it('should route getSwapQuoteExactInput to the provider', async () => {
    const mockQuote = { amountOut: {} } as any
    mockProvider.getSwapQuoteExactInput.mockResolvedValue(mockQuote)

    const params = {
      fromAmount: mockFromAmount,
      toToken: mockToToken,
    }

    const result = await manager.getSwapQuoteExactInput(params)
    expect(result).toBe(mockQuote)
    expect(mockProvider.getSwapQuoteExactInput).toHaveBeenCalledWith(params)
  })
})
