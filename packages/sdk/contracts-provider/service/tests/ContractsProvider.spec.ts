import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ContractsProvider } from '../src/implementation/ContractsProvider'
import { ContractsProviderFactory } from '../src/implementation/ContractsProviderFactory'
import { ContractsFactory } from '../src/factory/ContractsFactory'
import { IConfigurationProvider } from '@thesolidchain/configuration-provider-common'
import { IBlockchainManager } from '@thesolidchain/blockchain-client-common'
import { IAddress, IChainInfo } from '@thesolidchain/sdk-common'

vi.mock('../src/factory/ContractsFactory', () => ({
  ContractsFactory: {
    getERC20: vi.fn(),
    getERC4626: vi.fn(),
  },
}))

describe('ContractsProvider', () => {
  let mockConfigProvider: import('vitest').Mocked<IConfigurationProvider>
  let mockBlockchainManager: import('vitest').Mocked<IBlockchainManager>
  let contractsProvider: ContractsProvider

  const mockChainInfo = { chainId: 1 } as unknown as IChainInfo
  const mockAddress = { value: '0x123' } as unknown as IAddress
  const mockBlockchainClient = { request: vi.fn() } as unknown as import('@thesolidchain/blockchain-client-common').IBlockchainClient

  beforeEach(() => {
    mockConfigProvider = {
      get: vi.fn(),
    } as unknown as import('vitest').Mocked<IConfigurationProvider>

    mockBlockchainManager = {
      getBlockchainClient: vi.fn().mockReturnValue(mockBlockchainClient),
    } as unknown as import('vitest').Mocked<IBlockchainManager>

    contractsProvider = ContractsProviderFactory.newContractsProvider({
      configProvider: mockConfigProvider,
      blockchainClientProvider: mockBlockchainManager,
    })
  })

  it('should get ERC20 contract through ContractsFactory', async () => {
    const mockERC20Contract = { symbol: 'USDC' }
    vi.mocked(ContractsFactory.getERC20).mockReturnValue(mockERC20Contract as unknown as ReturnType<typeof ContractsFactory.getERC20>)

    const contract = await contractsProvider.getErc20Contract({
      chainInfo: mockChainInfo,
      address: mockAddress,
    })

    expect(contract).toEqual(mockERC20Contract)
    expect(mockBlockchainManager.getBlockchainClient).toHaveBeenCalledWith({
      chainInfo: mockChainInfo,
    })
    expect(ContractsFactory.getERC20).toHaveBeenCalledWith({
      blockchainClient: mockBlockchainClient,
      chainInfo: mockChainInfo,
      address: mockAddress,
    })
  })

  it('should get ERC4626 contract through ContractsFactory', async () => {
    const mockERC4626Contract = { asset: '0xabc' }
    vi.mocked(ContractsFactory.getERC4626).mockReturnValue(mockERC4626Contract as unknown as ReturnType<typeof ContractsFactory.getERC4626>)

    const contract = await contractsProvider.getErc4626Contract({
      chainInfo: mockChainInfo,
      address: mockAddress,
    })

    expect(contract).toEqual(mockERC4626Contract)
    expect(mockBlockchainManager.getBlockchainClient).toHaveBeenCalledWith({
      chainInfo: mockChainInfo,
    })
    expect(ContractsFactory.getERC4626).toHaveBeenCalledWith({
      blockchainClient: mockBlockchainClient,
      chainInfo: mockChainInfo,
      address: mockAddress,
    })
  })
})
