import { describe, it, expect, vi } from 'vitest'
import { GenericContractWrapper } from '../src/implementation/contracts/GenericContract'
import { ContractsFactory } from '../src/factory/ContractsFactory'
import { IBlockchainClient } from '@thesolidchain/blockchain-client-common'
import { IAddress, IChainInfo } from '@thesolidchain/sdk-common'
import { ContractAbi } from '@thesolidchain/abi-provider-common'

// Mock viem's getContract before importing the wrapper
vi.mock('viem', () => ({
  getContract: vi.fn().mockReturnValue({}),
  encodeFunctionData: vi.fn().mockReturnValue('0xencoded'),
}))

vi.mock('../src/factory/ContractsFactory', () => ({
  ContractsFactory: {
    getERC20: vi.fn().mockReturnValue({ type: 'ERC20' }),
    getERC4626: vi.fn().mockReturnValue({ type: 'ERC4626' }),
  },
}))

describe('GenericContractWrapper', () => {
  const mockClient = {} as IBlockchainClient
  const mockChainInfo = {} as IChainInfo
  const mockAddress = { value: '0x123' } as unknown as IAddress
  const mockAbi = [{ type: 'function', name: 'test' }] as unknown as ContractAbi

  it('should create and store state correctly', async () => {
    const wrapper = await GenericContractWrapper.create({
      blockchainClient: mockClient,
      chainInfo: mockChainInfo,
      address: mockAddress,
      abi: mockAbi,
    })

    expect(wrapper.blockchainClient).toBe(mockClient)
    expect(wrapper.chainInfo).toBe(mockChainInfo)
    expect(wrapper.address).toBe(mockAddress)
    expect(wrapper.getAbi()).toBe(mockAbi)
    expect(wrapper.contract).toBeDefined()
  })

  it('should cast to ERC20', async () => {
    const wrapper = await GenericContractWrapper.create({
      blockchainClient: mockClient,
      chainInfo: mockChainInfo,
      address: mockAddress,
      abi: mockAbi,
    })

    const erc20 = wrapper.asErc20()
    expect(erc20).toEqual({ type: 'ERC20' })
    expect(ContractsFactory.getERC20).toHaveBeenCalledWith({
      blockchainClient: mockClient,
      chainInfo: mockChainInfo,
      address: mockAddress,
    })
  })

  it('should cast to ERC4626', async () => {
    const wrapper = await GenericContractWrapper.create({
      blockchainClient: mockClient,
      chainInfo: mockChainInfo,
      address: mockAddress,
      abi: mockAbi,
    })

    const erc4626 = wrapper.asErc4626()
    expect(erc4626).toEqual({ type: 'ERC4626' })
    expect(ContractsFactory.getERC4626).toHaveBeenCalledWith({
      blockchainClient: mockClient,
      chainInfo: mockChainInfo,
      address: mockAddress,
      abi: mockAbi,
    })
  })

  it('should construct transaction info successfully', async () => {
    const wrapper = await GenericContractWrapper.create({
      blockchainClient: mockClient,
      chainInfo: mockChainInfo,
      address: mockAddress,
      abi: mockAbi,
    })

    // Access the protected _createTransaction method for testing
    const tx = await (
      wrapper as unknown as {
        _createTransaction: (opts: {
          functionName: string
          args: unknown[]
          description: string
          value: bigint
        }) => Promise<{
          transaction: { target: IAddress; calldata: string; value: string }
          description: string
        }>
      }
    )._createTransaction({
      functionName: 'test',
      args: [],
      description: 'Test call',
      value: 100n,
    })

    expect(tx.transaction.target).toBe(mockAddress)
    expect(tx.transaction.calldata).toBe('0xencoded')
    expect(tx.transaction.value).toBe('100')
    expect(tx.description).toBe('Test call')
  })
})
