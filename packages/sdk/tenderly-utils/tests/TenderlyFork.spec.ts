import { describe, it, expect, vi } from 'vitest'
import { TenderlyFork } from '../src/TenderlyFork'
import axios from 'axios'
import { IChainInfo } from '@thesolidchain/sdk-common'

vi.mock('axios', () => {
  return {
    default: {
      create: vi.fn().mockReturnValue({
        post: vi.fn().mockResolvedValue({
          data: {
            id: 'fork-id',
            rpcs: [{ name: 'Admin RPC', url: 'http://fork.rpc' }],
          },
        }),
        delete: vi.fn().mockResolvedValue({}),
        get: vi.fn().mockResolvedValue({
          data: { fork_transactions: [] },
        }),
      }),
    },
  }
})

vi.mock('ethers', () => ({
  JsonRpcProvider: vi.fn().mockImplementation(() => ({
    send: vi.fn().mockResolvedValue('0xsnapshot'),
  })),
  ethers: {
    toQuantity: vi.fn().mockReturnValue('0x123'),
  },
}))

vi.mock('@thesolidchain/testing-utils', () => ({
  TransactionUtils: vi.fn().mockImplementation(() => ({
    sendTransactionWithReceipt: vi.fn().mockResolvedValue({ status: 1 }),
  })),
}))

describe('TenderlyFork', () => {
  it('should create a fork successfully', async () => {
    const fork = await TenderlyFork.create({
      tenderlyApiUrl: 'http://api.test',
      tenderlyAccessKey: 'key',
      chainInfo: { chainId: 1 } as IChainInfo,
      atBlock: 'latest',
    })

    expect(fork.forkId).toBe('fork-id')
    expect(fork.forkUrl).toBe('http://fork.rpc')
    expect(axios.create).toHaveBeenCalled()
  })

  it('should dispose the fork', async () => {
    const fork = await TenderlyFork.create({
      tenderlyApiUrl: 'http://api.test',
      tenderlyAccessKey: 'key',
      chainInfo: { chainId: 1 } as IChainInfo,
      atBlock: 'latest',
    })

    await fork.dispose()
    expect(fork.apiRequestClient.delete).toHaveBeenCalledWith('http://api.test/vnets/fork-id')
  })

  it('should get transaction count', async () => {
    const fork = await TenderlyFork.create({
      tenderlyApiUrl: 'http://api.test',
      tenderlyAccessKey: 'key',
      chainInfo: { chainId: 1 } as IChainInfo,
      atBlock: 'latest',
    })

    const count = await fork.getTransactionCount()
    expect(count).toBe(0)
  })

  it('should snapshot the fork', async () => {
    const fork = await TenderlyFork.create({
      tenderlyApiUrl: 'http://api.test',
      tenderlyAccessKey: 'key',
      chainInfo: { chainId: 1 } as IChainInfo,
      atBlock: 'latest',
    })

    const snapshotId = await fork.snapshot()
    expect(snapshotId).toBe('0xsnapshot')
  })

  it('should sendTransaction', async () => {
    const fork = await TenderlyFork.create({
      tenderlyApiUrl: 'http://api.test',
      tenderlyAccessKey: 'key',
      chainInfo: { chainId: 1 } as IChainInfo,
      atBlock: 'latest',
    })

    const receipt = await fork.sendTransaction({
      walletPrivateKey: '0xabc',
      transaction: {
        to: { value: '0x123' },
        data: '0x',
      } as unknown as import('@thesolidchain/sdk-common').Transaction,
    })
    expect(receipt).toEqual({ status: 1 })
  })

  it('should setErc20Balance', async () => {
    const fork = await TenderlyFork.create({
      tenderlyApiUrl: 'http://api.test',
      tenderlyAccessKey: 'key',
      chainInfo: { chainId: 1 } as IChainInfo,
      atBlock: 'latest',
    })

    await fork.setErc20Balance({
      amount: {
        token: { address: { value: '0xtoken' } },
        toSolidityValue: () => 100n,
      } as unknown as import('@thesolidchain/sdk-common').ITokenAmount,
      walletAddress: {
        value: '0xwallet',
      } as unknown as import('@thesolidchain/sdk-common').IAddress,
    })
  })

  it('should setETHBalance and getETHBalance', async () => {
    const fork = await TenderlyFork.create({
      tenderlyApiUrl: 'http://api.test',
      tenderlyAccessKey: 'key',
      chainInfo: { chainId: 1 } as IChainInfo,
      atBlock: 'latest',
    })

    await fork.setETHBalance({
      amount: 100n,
      walletAddress: {
        value: '0xwallet',
      } as unknown as import('@thesolidchain/sdk-common').IAddress,
    })
    const bal = await fork.getETHBalance({
      walletAddress: {
        value: '0xwallet',
      } as unknown as import('@thesolidchain/sdk-common').IAddress,
      atBlock: 123,
    })
    expect(bal).toBe('0xsnapshot')
  })

  it('should revert the fork', async () => {
    const fork = await TenderlyFork.create({
      tenderlyApiUrl: 'http://api.test',
      tenderlyAccessKey: 'key',
      chainInfo: { chainId: 1 } as IChainInfo,
      atBlock: 'latest',
    })

    await fork.revert('0xsnap1')
  })

  it('should throw on fork creation failure', async () => {
    // Override the mock temporarily
    const mockPost = vi.fn().mockRejectedValue({
      response: { data: { error: 'Bad Request' } },
    })
    vi.mocked(axios.create).mockReturnValueOnce({
      post: mockPost,
    } as unknown as import('axios').AxiosInstance)

    await expect(
      TenderlyFork.create({
        tenderlyApiUrl: 'http://api.test',
        tenderlyAccessKey: 'key',
        chainInfo: { chainId: 1 } as IChainInfo,
        atBlock: 'latest',
      }),
    ).rejects.toThrow('Error creating fork: {"error":"Bad Request"}')
  })
})
