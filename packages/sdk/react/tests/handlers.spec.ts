import { describe, it, expect, vi } from 'vitest'
import { getChainInfoHandler } from '../src/handlers/getChainInfoHandler'
import { getWalletAddressHandler } from '../src/factories/getWalletAddressHandler'
import { getCurrentUserHandler } from '../src/handlers/getCurrentUserHandler'
import { getChainHandler } from '../src/handlers/getChainHandler'
import { getSpotPriceHandler } from '../src/handlers/getSpotPriceHandler'
import { getSpotPricesHandler } from '../src/handlers/getSpotPricesHandler'
import { getSwapQuoteHandler } from '../src/handlers/getSwapQuoteHandler'
import { getTokenBySymbolHandler } from '../src/handlers/getTokenBySymbolHandler'
import { getTokenTotalSupplyHandler } from '../src/handlers/getTokenTotalSupplyHandler'
import { getUserPortfolioHandler } from '../src/handlers/getUserPortfolioHandler'
import { getLendingPoolHandler } from '../src/handlers/getLendingPoolHandler'
import { getLendingPoolInfoHandler } from '../src/handlers/getLendingPoolInfoHandler'
import { buildOrderHandler } from '../src/handlers/buildOrderHandler'
import { cancelOrderHandler } from '../src/handlers/cancelOrderHandler'
import { checkOrderHandler } from '../src/handlers/checkOrderHandler'
import { getSellOrderQuoteHandler } from '../src/handlers/getSellOrderQuoteHandler'
import { sendOrderHandler } from '../src/handlers/sendOrderHandler'
import { getSwapDataHandler } from '../src/handlers/getSwapDataHandler'
import { ChainFamilyMap } from '@thesolidchain/sdk-common'

describe('SDK React | Unit | Handlers', () => {
  it('getChainInfoHandler should return a valid ChainInfo object when provided a chainId', () => {
    const chainInfoFn = getChainInfoHandler(1)
    const chainInfo = chainInfoFn()
    expect(chainInfo.chainId).toBe(1)
  })

  it('getChainInfoHandler should throw an error if chainId is missing', () => {
    const chainInfoFn = getChainInfoHandler(undefined)
    expect(() => chainInfoFn()).toThrow('ChainId is not defined')
  })

  it('getWalletAddressHandler should return an address when provided a string', () => {
    const walletAddressFn = getWalletAddressHandler('0x1234567890123456789012345678901234567890')
    const walletAddress = walletAddressFn()
    expect(walletAddress.value).toBe('0x1234567890123456789012345678901234567890')
  })

  it('getWalletAddressHandler should throw an error if address is missing', () => {
    const walletAddressFn = getWalletAddressHandler(undefined)
    expect(() => walletAddressFn()).toThrow('walletAddress is not defined')
  })

  it('getCurrentUserHandler should assemble a user object from chain and wallet handlers', () => {
    const chainInfoFn = vi.fn().mockReturnValue(ChainFamilyMap.Ethereum.Mainnet)
    const walletAddressFn = vi.fn().mockReturnValue({ value: '0x123' })

    const userFn = getCurrentUserHandler(chainInfoFn, walletAddressFn)
    const user = userFn()

    expect(user.chainInfo.chainId).toBe(1)
    expect(user.wallet.address.value).toBe('0x123')
  })

  it('SDK delegating handlers should properly call the underlying SDK client', async () => {
    const mockSdk = {
      chains: {
        getChainById: vi.fn().mockResolvedValue({
          tokens: {
            getTokenBySymbol: vi.fn().mockResolvedValue({}),
            getTokenTotalSupply: vi.fn().mockResolvedValue({}),
          },
        }),
      },
      protocols: {
        getLendingPool: vi.fn().mockResolvedValue({}),
        getLendingPoolInfo: vi.fn().mockResolvedValue({}),
      },
      tokens: {
        getTokenBySymbol: vi.fn().mockResolvedValue({}),
        getTokenTotalSupply: vi.fn().mockResolvedValue({}),
      },
      oracle: {
        getSpotPrice: vi.fn().mockResolvedValue({}),
        getSpotPrices: vi.fn().mockResolvedValue({}),
      },
      swaps: {
        getSwapQuoteExactInput: vi.fn().mockResolvedValue({}),
        getSwapDataExactInput: vi.fn().mockResolvedValue({}),
      },
      portfolio: {
        getUserPortfolio: vi.fn().mockResolvedValue({}),
      },
      orders: {
        buildOrder: vi.fn().mockResolvedValue({}),
      },
      intentSwaps: {
        cancelOrder: vi.fn().mockResolvedValue({}),
        checkOrder: vi.fn().mockResolvedValue({}),
        getSellOrderQuote: vi.fn().mockResolvedValue({}),
        sendOrder: vi.fn().mockResolvedValue({}),
      },
    } as unknown as Parameters<typeof getLendingPoolHandler>[0]

    const mockChainProvider = vi.fn().mockResolvedValue(mockSdk.chains.getChainById())

    await getLendingPoolHandler(mockSdk)(
      {} as unknown as Parameters<ReturnType<typeof getLendingPoolHandler>>[0],
    )
    expect(mockSdk.protocols.getLendingPool).toHaveBeenCalled()

    await getLendingPoolInfoHandler(mockSdk)(
      {} as unknown as Parameters<ReturnType<typeof getLendingPoolInfoHandler>>[0],
    )
    expect(mockSdk.protocols.getLendingPoolInfo).toHaveBeenCalled()

    await getSpotPriceHandler(mockSdk)(
      {} as unknown as Parameters<ReturnType<typeof getSpotPriceHandler>>[0],
    )
    expect(mockSdk.oracle.getSpotPrice).toHaveBeenCalled()

    await getSpotPricesHandler(mockSdk)(
      {} as unknown as Parameters<ReturnType<typeof getSpotPricesHandler>>[0],
    )
    expect(mockSdk.oracle.getSpotPrices).toHaveBeenCalled()

    await getSwapQuoteHandler(mockSdk)({
      fromToken: {
        chainInfo: { chainId: 1, familyName: 'Ethereum' },
        address: { value: '0x0000000000000000000000000000000000000123' },
        symbol: 'USDC',
        decimals: 6,
      },
      toToken: {
        chainInfo: { chainId: 1, familyName: 'Ethereum' },
        address: { value: '0x0000000000000000000000000000000000000456' },
        symbol: 'DAI',
        decimals: 18,
      },
      fromAmount: '100',
      slippage: 1,
    } as unknown as Parameters<ReturnType<typeof getSwapQuoteHandler>>[0])
    expect(mockSdk.swaps.getSwapQuoteExactInput).toHaveBeenCalled()

    await getUserPortfolioHandler(mockSdk)(
      {} as unknown as Parameters<ReturnType<typeof getUserPortfolioHandler>>[0],
    )
    expect(mockSdk.portfolio.getUserPortfolio).toHaveBeenCalled()

    await buildOrderHandler(mockSdk)(
      {} as unknown as Parameters<ReturnType<typeof buildOrderHandler>>[0],
    )
    expect(mockSdk.orders.buildOrder).toHaveBeenCalled()

    await getSwapDataHandler(mockSdk)({
      fromToken: { chainInfo: { chainId: 1, familyName: 'Ethereum' }, address: { value: '0x123' }, symbol: 'USDC', decimals: 6 },
      toToken: { chainInfo: { chainId: 1, familyName: 'Ethereum' }, address: { value: '0x456' }, symbol: 'DAI', decimals: 18 },
      fromAmount: '100',
      slippage: 1,
      receiver: { value: '0x789' }
    } as unknown as Parameters<ReturnType<typeof getSwapDataHandler>>[0])
    expect(mockSdk.swaps.getSwapDataExactInput).toHaveBeenCalled()

    await cancelOrderHandler(mockSdk)({} as unknown as Parameters<ReturnType<typeof cancelOrderHandler>>[0])
    expect(mockSdk.intentSwaps.cancelOrder).toHaveBeenCalled()

    await checkOrderHandler(mockSdk)({} as unknown as Parameters<ReturnType<typeof checkOrderHandler>>[0])
    expect(mockSdk.intentSwaps.checkOrder).toHaveBeenCalled()

    await getSellOrderQuoteHandler(mockSdk)({} as unknown as Parameters<ReturnType<typeof getSellOrderQuoteHandler>>[0])
    expect(mockSdk.intentSwaps.getSellOrderQuote).toHaveBeenCalled()

    await sendOrderHandler(mockSdk)({} as unknown as Parameters<ReturnType<typeof sendOrderHandler>>[0])
    expect(mockSdk.intentSwaps.sendOrder).toHaveBeenCalled()

    await getChainHandler(mockSdk)({ chainId: 1 })

    const chainTokenSpy = (await mockSdk.chains.getChainById()).tokens.getTokenBySymbol
    await getTokenBySymbolHandler(
      mockChainProvider as unknown as Parameters<typeof getTokenBySymbolHandler>[0],
    )({ chainId: 1, symbol: 'USDC' })
    expect(chainTokenSpy).toHaveBeenCalled()

    const chainTokenSupplySpy = (await mockSdk.chains.getChainById()).tokens.getTokenTotalSupply
    await getTokenTotalSupplyHandler(
      mockChainProvider as unknown as Parameters<typeof getTokenTotalSupplyHandler>[0],
    )({
      token: {
        chainInfo: { chainId: 1, familyName: 'Ethereum' },
        address: '0x0000000000000000000000000000000000000123',
        symbol: 'USDC',
        decimals: 6,
      } as unknown as Parameters<ReturnType<typeof getTokenTotalSupplyHandler>>[0]['token'],
    })
    expect(chainTokenSupplySpy).toHaveBeenCalled()
  })

  it('getChainHandler should throw if chain is undefined', async () => {
    const mockSdk = { chains: { getChainById: vi.fn().mockResolvedValue(undefined) } } as unknown as import('@thesolidchain/sdk-client').ISDKManager
    await expect(getChainHandler(mockSdk)({ chainId: 1 })).rejects.toThrow('Chain not found')
  })

  it('getTokenBySymbolHandler should throw if token is undefined or throws', async () => {
    const mockChainProvider = vi.fn().mockResolvedValue({ tokens: { getTokenBySymbol: vi.fn().mockResolvedValue(undefined) } }) as unknown as Parameters<typeof getTokenBySymbolHandler>[0]
    await expect(getTokenBySymbolHandler(mockChainProvider)({ chainId: 1, symbol: 'USDC' })).rejects.toThrow('SDK: Unsupport token: USDC')

    const mockChainProviderThrows = vi.fn().mockResolvedValue({ tokens: { getTokenBySymbol: vi.fn().mockRejectedValue(new Error('Network error')) } }) as unknown as Parameters<typeof getTokenBySymbolHandler>[0]
    await expect(getTokenBySymbolHandler(mockChainProviderThrows)({ chainId: 1, symbol: 'USDC' })).rejects.toThrow('Failed to get token: Network error')
  })

  it('getTokenTotalSupplyHandler should throw if total supply is undefined or throws', async () => {
    const mockChainProvider = vi.fn().mockResolvedValue({ tokens: { getTokenTotalSupply: vi.fn().mockResolvedValue(undefined) } }) as unknown as Parameters<typeof getTokenTotalSupplyHandler>[0]
    const dummyToken = { chainInfo: { chainId: 1 }, symbol: 'USDC' } as unknown as import('@thesolidchain/sdk-common').IToken
    await expect(getTokenTotalSupplyHandler(mockChainProvider)({ token: dummyToken })).rejects.toThrow('SDK: Failed to get total supply for token: USDC')

    const mockChainProviderThrows = vi.fn().mockResolvedValue({ tokens: { getTokenTotalSupply: vi.fn().mockRejectedValue(new Error('Network error')) } }) as unknown as Parameters<typeof getTokenTotalSupplyHandler>[0]
    await expect(getTokenTotalSupplyHandler(mockChainProviderThrows)({ token: dummyToken })).rejects.toThrow('Failed to get token total supply: Network error')
  })
})
