import { describe, it, expect, vi, beforeEach } from 'vitest'
import { DatabaseTokensProvider } from '../src/implementation/database/DatabaseTokensProvider'
import {
  Address,
  AddressType,
  ChainIds,
  NATIVE_CURRENCY_ADDRESS_LOWERCASE,
} from '@thesolidchain/sdk-common'

const mockSend = vi.fn()
vi.mock('@aws-sdk/client-dynamodb', () => ({
  DynamoDBClient: vi.fn().mockImplementation(() => ({})),
}))
vi.mock('@aws-sdk/lib-dynamodb', () => ({
  DynamoDBDocumentClient: {
    from: vi.fn().mockReturnValue({
      send: (...args: unknown[]) => mockSend(...args),
    }),
  },
  GetCommand: vi.fn().mockImplementation((args: unknown) => args),
  QueryCommand: vi.fn().mockImplementation((args: unknown) => args),
}))

describe('DatabaseTokensProvider', () => {
  let provider: DatabaseTokensProvider
  let configProvider: import('@thesolidchain/configuration-provider-common').IConfigurationProvider
  let blockchainClientProvider: import('@thesolidchain/blockchain-client-common').IBlockchainClientProvider
  let contractsProvider: import('@thesolidchain/contracts-provider-common').IContractsProvider
  const chainInfo = { chainId: ChainIds.Mainnet, name: 'Ethereum' } as unknown as import('@thesolidchain/sdk-common').IChainInfo

  beforeEach(() => {
    vi.clearAllMocks()
    configProvider = {
      getConfigurationItem: vi.fn().mockReturnValue('test-table'),
    } as unknown as import('@thesolidchain/configuration-provider-common').IConfigurationProvider
    blockchainClientProvider = {
      getBlockchainClient: vi.fn().mockReturnValue({
        getBalance: vi.fn().mockResolvedValue(1000n),
      }),
    } as unknown as import('@thesolidchain/blockchain-client-common').IBlockchainClientProvider
    contractsProvider = {
      getErc20Contract: vi.fn().mockReturnValue({
        balanceOf: vi.fn().mockResolvedValue(2000n),
        totalSupply: vi.fn().mockResolvedValue(3000n),
      }),
    } as unknown as import('@thesolidchain/contracts-provider-common').IContractsProvider

    provider = new DatabaseTokensProvider({
      configProvider,
      blockchainClientProvider,
      contractsProvider,
    })
  })

  it('should initialize and return supported chain ids', () => {
    const chainIds = provider.getSupportedChainIds()
    expect(chainIds.length).toBeGreaterThanOrEqual(1)
    expect(chainIds).toContain(1)
  })

  it('getTokenBySymbol should return a token', async () => {
    mockSend.mockResolvedValueOnce({
      Items: [
        {
          address: '0x1111111111111111111111111111111111111111',
          decimals: 18,
          name: 'Token',
          symbol: 'TKN',
        },
      ],
    })
    const token = await provider.getTokenBySymbol({ chainInfo, symbol: 'TKN' })
    expect(token.symbol).toBe('TKN')
  })

  it('getTokenBySymbol should throw if no items', async () => {
    mockSend.mockResolvedValueOnce({ Items: [] })
    await expect(provider.getTokenBySymbol({ chainInfo, symbol: 'TKN' })).rejects.toThrow()
  })

  it('getTokenByAddress should return a token', async () => {
    mockSend.mockResolvedValueOnce({
      Item: {
        address: '0x1111111111111111111111111111111111111111',
        decimals: 18,
        name: 'Token',
        symbol: 'TKN',
      },
    })
    const token = await provider.getTokenByAddress({
      chainInfo,
      address: Address.createFrom({
        value: '0x1111111111111111111111111111111111111111',
        type: AddressType.Ethereum,
      }),
    })
    expect(token.symbol).toBe('TKN')
  })

  it('getTokenByAddress should throw if no item', async () => {
    mockSend.mockResolvedValueOnce({})
    await expect(
      provider.getTokenByAddress({
        chainInfo,
        address: Address.createFrom({
          value: '0x1111111111111111111111111111111111111111',
          type: AddressType.Ethereum,
        }),
      }),
    ).rejects.toThrow()
  })

  it('getTokenByName should throw', async () => {
    await expect(provider.getTokenByName({ chainInfo, name: 'Token' })).rejects.toThrow()
  })

  it('getTokenBalanceBySymbol should return balance', async () => {
    mockSend.mockResolvedValueOnce({
      Items: [
        {
          address: '0x1111111111111111111111111111111111111111',
          decimals: 18,
          name: 'Token',
          symbol: 'TKN',
        },
      ],
    })
    const bal = await provider.getTokenBalanceBySymbol({
      chainInfo,
      symbol: 'TKN',
      walletAddress: Address.createFrom({
        value: '0x2222222222222222222222222222222222222222',
        type: AddressType.Ethereum,
      }),
    })
    expect(bal.toSolidityValue().toString()).toBe('2000')
  })

  it('getTokenBalanceByAddress should return balance for native currency', async () => {
    mockSend.mockResolvedValueOnce({
      Item: {
        address: NATIVE_CURRENCY_ADDRESS_LOWERCASE,
        decimals: 18,
        name: 'ETH',
        symbol: 'ETH',
      },
    })
    const bal = await provider.getTokenBalanceByAddress({
      chainInfo,
      address: Address.createFrom({
        value: NATIVE_CURRENCY_ADDRESS_LOWERCASE,
        type: AddressType.Ethereum,
      }),
      walletAddress: Address.createFrom({
        value: '0x2222222222222222222222222222222222222222',
        type: AddressType.Ethereum,
      }),
    })
    expect(bal.toSolidityValue().toString()).toBe('1000')
  })

  it('getTokenTotalSupply should throw for native currency', async () => {
    mockSend.mockResolvedValueOnce({
      Item: {
        address: NATIVE_CURRENCY_ADDRESS_LOWERCASE,
        decimals: 18,
        name: 'ETH',
        symbol: 'ETH',
      },
    })
    const token = await provider.getTokenByAddress({
      chainInfo,
      address: Address.createFrom({
        value: NATIVE_CURRENCY_ADDRESS_LOWERCASE,
        type: AddressType.Ethereum,
      }),
    })
    await expect(provider.getTokenTotalSupply({ token })).rejects.toThrow()
  })

  it('getTokenTotalSupply should return supply for ERC20', async () => {
    mockSend.mockResolvedValueOnce({
      Item: {
        address: '0x1111111111111111111111111111111111111111',
        decimals: 18,
        name: 'Token',
        symbol: 'TKN',
      },
    })
    const token = await provider.getTokenByAddress({
      chainInfo,
      address: Address.createFrom({
        value: '0x1111111111111111111111111111111111111111',
        type: AddressType.Ethereum,
      }),
    })
    const supply = await provider.getTokenTotalSupply({ token })
    expect(supply.toSolidityValue().toString()).toBe('3000')
  })
})
