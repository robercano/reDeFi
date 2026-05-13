import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { Tenderly } from '../src/Tenderly'
import { IChainInfo } from '@thesolidchain/sdk-common'

describe('Tenderly', () => {
  let originalEnv: NodeJS.ProcessEnv

  beforeEach(() => {
    originalEnv = process.env
    process.env = {
      ...originalEnv,
      TENDERLY_USER: 'test_user',
      TENDERLY_PROJECT: 'test_project',
      TENDERLY_ACCESS_KEY: 'test_key',
    }

    global.fetch = vi.fn()
  })

  afterEach(() => {
    process.env = originalEnv
    vi.restoreAllMocks()
  })

  it('should throw if env vars are missing', () => {
    delete process.env.TENDERLY_USER
    expect(() => new Tenderly()).toThrow('Tenderly environment variables not set')
  })

  it('should instantiate and configure properties', () => {
    const tenderly = new Tenderly()
    expect(tenderly.tenderlyAccount).toBe('test_user')
    expect(tenderly.tenderlySlug).toBe('test_project')
    expect(tenderly.tenderlyAccessKey).toBe('test_key')
  })

  it('should createVnet successfully and test Vnet methods', async () => {
    const tenderly = new Tenderly()

    // Mock first fetch for createVnet
    vi.mocked(global.fetch).mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        id: 'vnet-id',
        slug: 'slug',
        display_name: 'test vnet',
        rpcs: [{ url: 'http://rpc.test', name: 'RPC' }],
      }),
    } as any)

    const vnet = await tenderly.createVnet({
      chainInfo: { chainId: 1 } as IChainInfo,
      atBlock: 12345,
    })

    expect(global.fetch).toHaveBeenCalled()
    expect(vnet.getName()).toBe('test vnet')
    expect(vnet.getRpc()).toBe('http://rpc.test')

    // test fork
    vi.mocked(global.fetch).mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        id: 'fork-id',
        slug: 'slug',
        display_name: 'test fork',
        rpcs: [{ url: 'http://rpc.fork', name: 'RPC' }],
      }),
    } as any)
    const forkedVnet = await vnet.fork()
    expect(forkedVnet.getName()).toBe('test fork')

    // test createSnapshot
    vi.mocked(global.fetch).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ result: '0xsnap1' }),
    } as any)
    const snapId = await vnet.createSnapshot()
    expect(snapId).toBe('0xsnap1')

    // test revertSnapshot
    vi.mocked(global.fetch).mockResolvedValueOnce({ ok: true } as any)
    await vnet.revertSnapshot('0xsnap1')

    // test setErc20Balance
    vi.mocked(global.fetch).mockResolvedValueOnce({ ok: true } as any)
    await vnet.setErc20Balance({
      amount: { token: { address: { value: '0xtoken' } }, toSolidityValue: () => 100n } as any,
      walletAddress: { value: '0xwallet' } as any,
    })

    // test setBalance
    vi.mocked(global.fetch).mockResolvedValueOnce({ ok: true } as any)
    await vnet.setBalance({
      amount: { toSolidityValue: () => 100n } as any,
      walletAddress: { value: '0xwallet' } as any,
    })

    // test delete
    vi.mocked(global.fetch).mockResolvedValueOnce({ ok: true } as any)
    await vnet.delete()

    // test calling method on deleted vnet
    expect(() => vnet.getName()).toThrowError(/Cannot call getName/)
  })

  it('should throw errors when fetch fails', async () => {
    const tenderly = new Tenderly()
    vi.mocked(global.fetch).mockResolvedValueOnce({
      ok: false,
      statusText: 'Bad Request',
    } as any)

    await expect(
      tenderly.createVnet({
        chainInfo: { chainId: 1 } as IChainInfo,
      })
    ).rejects.toThrow('Failed to create Tenderly fork: Bad Request')
  })
})
