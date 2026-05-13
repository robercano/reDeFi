import { describe, it, expect, vi } from 'vitest'
import { ContractsFactory, OpenZeppelinVersion } from '../src/factory/ContractsFactory'
import { IBlockchainClient } from '@thesolidchain/blockchain-client-common'
import { IAddress, IChainInfo } from '@thesolidchain/sdk-common'

vi.mock('../src/generated/V4_9_6/ERC20V4_9_6', () => ({ ERC20V4_9_6: class { version = '4.9.6'; type = 'ERC20' } }))
vi.mock('../src/generated/V4_9_6/ERC4626V4_9_6', () => ({ ERC4626V4_9_6: class { version = '4.9.6'; type = 'ERC4626' } }))
vi.mock('../src/generated/V4_9_6/ERC1155V4_9_6', () => ({ ERC1155V4_9_6: class { version = '4.9.6'; type = 'ERC1155' } }))
vi.mock('../src/generated/V4_9_6/ERC721V4_9_6', () => ({ ERC721V4_9_6: class { version = '4.9.6'; type = 'ERC721' } }))

vi.mock('../src/generated/V5_6_1/ERC20V5_6_1', () => ({ ERC20V5_6_1: class { version = '5.6.1'; type = 'ERC20' } }))
vi.mock('../src/generated/V5_6_1/ERC4626V5_6_1', () => ({ ERC4626V5_6_1: class { version = '5.6.1'; type = 'ERC4626' } }))
vi.mock('../src/generated/V5_6_1/ERC1155V5_6_1', () => ({ ERC1155V5_6_1: class { version = '5.6.1'; type = 'ERC1155' } }))
vi.mock('../src/generated/V5_6_1/ERC721V5_6_1', () => ({ ERC721V5_6_1: class { version = '5.6.1'; type = 'ERC721' } }))

describe('ContractsFactory', () => {
  const mockClient = {} as IBlockchainClient
  const mockChainInfo = {} as IChainInfo
  const mockAddress = { value: '0x1' } as unknown as IAddress

  const baseParams = {
    blockchainClient: mockClient,
    chainInfo: mockChainInfo,
    address: mockAddress,
  }

  it('should instantiate V4_9_6 and default versions for ERC20', () => {
    const v4 = ContractsFactory.getERC20({ ...baseParams, version: OpenZeppelinVersion.V4_9_6 }) as unknown as { version: string, type: string }
    const v5 = ContractsFactory.getERC20({ ...baseParams }) as unknown as { version: string, type: string }

    expect(v4.version).toBe('4.9.6')
    expect(v4.type).toBe('ERC20')
    expect(v5.version).toBe('5.6.1')
    expect(v5.type).toBe('ERC20')
  })

  it('should instantiate V4_9_6 and default versions for ERC4626', () => {
    const v4 = ContractsFactory.getERC4626({ ...baseParams, version: OpenZeppelinVersion.V4_9_6 }) as unknown as { version: string, type: string }
    const v5 = ContractsFactory.getERC4626({ ...baseParams }) as unknown as { version: string, type: string }

    expect(v4.version).toBe('4.9.6')
    expect(v4.type).toBe('ERC4626')
    expect(v5.version).toBe('5.6.1')
    expect(v5.type).toBe('ERC4626')
  })

  it('should instantiate V4_9_6 and default versions for ERC1155', () => {
    const v4 = ContractsFactory.getERC1155({ ...baseParams, version: OpenZeppelinVersion.V4_9_6 }) as unknown as { version: string, type: string }
    const v5 = ContractsFactory.getERC1155({ ...baseParams }) as unknown as { version: string, type: string }

    expect(v4.version).toBe('4.9.6')
    expect(v4.type).toBe('ERC1155')
    expect(v5.version).toBe('5.6.1')
    expect(v5.type).toBe('ERC1155')
  })

  it('should instantiate V4_9_6 and default versions for ERC721', () => {
    const v4 = ContractsFactory.getERC721({ ...baseParams, version: OpenZeppelinVersion.V4_9_6 }) as unknown as { version: string, type: string }
    const v5 = ContractsFactory.getERC721({ ...baseParams }) as unknown as { version: string, type: string }

    expect(v4.version).toBe('4.9.6')
    expect(v4.type).toBe('ERC721')
    expect(v5.version).toBe('5.6.1')
    expect(v5.type).toBe('ERC721')
  })
})
