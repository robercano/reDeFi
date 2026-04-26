import { DatabaseTokensProvider } from '../src/implementation/database/DatabaseTokensProvider'
import { Address, AddressType } from '@thesolidchain/sdk-common'
import { describe, it, expect, vi, beforeEach } from 'vitest'

const mockSend = vi.fn()

vi.mock('@aws-sdk/lib-dynamodb', () => {
  return {
    DynamoDBDocumentClient: {
      from: vi.fn(() => ({
        send: (...args: any[]) => mockSend(...args)
      }))
    },
    GetCommand: vi.fn().mockImplementation((input) => ({ input, type: 'GetCommand' })),
    QueryCommand: vi.fn().mockImplementation((input) => ({ input, type: 'QueryCommand' }))
  }
})

vi.mock('@aws-sdk/client-dynamodb', () => {
  return {
    DynamoDBClient: vi.fn()
  }
})

describe('DatabaseTokensProvider', () => {
  let provider: DatabaseTokensProvider
  let configProvider: any
  let blockchainClientProvider: any
  let contractsProvider: any

  beforeEach(() => {
    vi.clearAllMocks()

    configProvider = {
      getConfigurationItem: vi.fn().mockReturnValue('TokensTable')
    }
    blockchainClientProvider = {}
    contractsProvider = {}

    provider = new DatabaseTokensProvider({
      configProvider,
      blockchainClientProvider,
      contractsProvider
    })
  })

  it('should initialize correctly', () => {
    expect(provider).toBeDefined()
  })

  describe('getTokenBySymbol', () => {
    it('should query the database by symbol using GSI', async () => {
      const mockChainInfo = { chainId: 1 } as any
      mockSend.mockResolvedValue({
        Items: [
          { address: '0x1234567890123456789012345678901234567890', decimals: 18, name: 'Token', symbol: 'TKN' }
        ]
      })

      const token = await provider.getTokenBySymbol({ chainInfo: mockChainInfo, symbol: 'TKN' })

      expect(mockSend).toHaveBeenCalledTimes(1)
      const commandArgs = mockSend.mock.calls[0][0].input
      expect(commandArgs.TableName).toBe('TokensTable')
      expect(commandArgs.IndexName).toBe('symbolIndex')
      
      expect(token).toBeDefined()
      expect(token.symbol).toBe('TKN')
      expect(token.decimals).toBe(18)
    })

    it('should throw an error if token not found', async () => {
      const mockChainInfo = { chainId: 1 } as any
      mockSend.mockResolvedValue({ Items: [] })

      await expect(
        provider.getTokenBySymbol({ chainInfo: mockChainInfo, symbol: 'UNKNOWN' })
      ).rejects.toThrowError('No token data found for symbol: UNKNOWN on chain: 1')
    })
  })

  describe('getTokenByAddress', () => {
    it('should get the token from the database by address and chainId', async () => {
      const mockChainInfo = { chainId: 1 } as any
      mockSend.mockResolvedValue({
        Item: { address: '0x1234567890123456789012345678901234567890', decimals: 18, name: 'Token', symbol: 'TKN' }
      })

      const token = await provider.getTokenByAddress({
        chainInfo: mockChainInfo,
        address: Address.createFromEthereum({ value: '0x1234567890123456789012345678901234567890' })
      })

      expect(mockSend).toHaveBeenCalledTimes(1)
      const commandArgs = mockSend.mock.calls[0][0].input
      expect(commandArgs.TableName).toBe('TokensTable')
      expect(commandArgs.Key.id).toBe('1#0x1234567890123456789012345678901234567890')
      
      expect(token).toBeDefined()
      expect(token.symbol).toBe('TKN')
    })

    it('should throw an error if token not found', async () => {
      const mockChainInfo = { chainId: 1 } as any
      mockSend.mockResolvedValue({})

      await expect(
        provider.getTokenByAddress({
          chainInfo: mockChainInfo,
          address: Address.createFromEthereum({ value: '0x9999999999999999999999999999999999999999' })
        })
      ).rejects.toThrowError('No token data found for address: 0x9999999999999999999999999999999999999999 on chain: 1')
    })
  })
})
