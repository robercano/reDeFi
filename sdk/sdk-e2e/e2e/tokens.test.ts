import { ChainIds, type AddressValue, type ChainId } from '@summerfi/sdk-common'

import { createTestSdkInstance } from './utils/createTestSdkInstance'

jest.setTimeout(300000)

type TokenBySymbolScenario = {
  description: string
  chainId: ChainId
  symbol: string
  expectedAddress: string
  expectedDecimals: number
}

type TokenByAddressScenario = {
  description: string
  chainId: ChainId
  addressValue: AddressValue
  expectedSymbol: string
  expectedDecimals: number
}

/**
 * @group e2e
 */
describe('Tokens Tests', () => {
  const sdk = createTestSdkInstance()

  const symbolScenarios: TokenBySymbolScenario[] = [
    {
      description: 'fetch WETH on Mainnet by symbol',
      chainId: ChainIds.Mainnet,
      symbol: 'WETH',
      expectedAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
      expectedDecimals: 18,
    },
    {
      description: 'fetch USDC on Arbitrum by symbol',
      chainId: ChainIds.ArbitrumOne,
      symbol: 'USDC',
      expectedAddress: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
      expectedDecimals: 6,
    },
    {
      description: 'fetch DAI on Mainnet by symbol',
      chainId: ChainIds.Mainnet,
      symbol: 'DAI',
      expectedAddress: '0x6b175474e89094c44da98b954eedeac495271d0f',
      expectedDecimals: 18,
    },
    {
      description: 'fetch USDC on Base by symbol',
      chainId: ChainIds.Base,
      symbol: 'USDC',
      expectedAddress: '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913',
      expectedDecimals: 6,
    },
  ]

  const addressScenarios: TokenByAddressScenario[] = [
    {
      description: 'fetch WETH on Base by address',
      chainId: ChainIds.Base,
      addressValue: '0x4200000000000000000000000000000000000006' as AddressValue,
      expectedSymbol: 'WETH',
      expectedDecimals: 18,
    },
    {
      description: 'fetch USDC on Mainnet by address',
      chainId: ChainIds.Mainnet,
      addressValue: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48' as AddressValue,
      expectedSymbol: 'USDC',
      expectedDecimals: 6,
    },
    {
      description: 'fetch USDT on Mainnet by address',
      chainId: ChainIds.Mainnet,
      addressValue: '0xdac17f958d2ee523a2206206994597c13d831ec7' as AddressValue,
      expectedSymbol: 'USDT',
      expectedDecimals: 6,
    },
    {
      description: 'fetch WETH on Arbitrum by address',
      chainId: ChainIds.ArbitrumOne,
      addressValue: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1' as AddressValue,
      expectedSymbol: 'WETH',
      expectedDecimals: 18,
    },
  ]

  describe('getTokenBySymbol', () => {
    test.each(symbolScenarios)(
      'should $description',
      async ({ chainId, symbol, expectedAddress, expectedDecimals }) => {
        const token = await sdk.tokens.getTokenBySymbol({ chainId, symbol })

        expect(token).toBeDefined()
        expect(token.symbol.toUpperCase()).toBe(symbol.toUpperCase())
        expect(token.decimals).toBe(expectedDecimals)
        expect(token.chainInfo.chainId).toBe(chainId)
        expect(token.address.value.toLowerCase()).toBe(expectedAddress.toLowerCase())
      },
    )
  })

  describe('getTokenByAddress', () => {
    test.each(addressScenarios)(
      'should $description',
      async ({ chainId, addressValue, expectedSymbol, expectedDecimals }) => {
        const token = await sdk.tokens.getTokenByAddress({ chainId, addressValue })

        expect(token).toBeDefined()
        expect(token.symbol.toUpperCase()).toBe(expectedSymbol.toUpperCase())
        expect(token.decimals).toBe(expectedDecimals)
        expect(token.chainInfo.chainId).toBe(chainId)
        expect(token.address.value.toLowerCase()).toBe(addressValue.toLowerCase())
      },
    )
  })
})
