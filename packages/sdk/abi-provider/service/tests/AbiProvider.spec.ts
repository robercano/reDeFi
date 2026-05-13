import { describe, it, expect, vi } from 'vitest'
import { AbiProvider } from '../src/implementation/AbiProvider'
import { AbiProviderFactory } from '../src/implementation/AbiProviderFactory'
import { IConfigurationProvider } from '@thesolidchain/configuration-provider-common'
import { AbiContractType } from '@thesolidchain/abi-provider-common'
import { erc20Abi, erc4626Abi } from 'viem'

describe('AbiProvider', () => {
  const mockConfigProvider = {} as IConfigurationProvider

  it('should instantiate using factory', () => {
    const provider = AbiProviderFactory.newAbiProvider({ configProvider: mockConfigProvider })
    expect(provider).toBeInstanceOf(AbiProvider)
  })

  it('should return ERC20 ABI', async () => {
    const provider = AbiProviderFactory.newAbiProvider({ configProvider: mockConfigProvider })
    const abi = await provider.getAbi({ type: AbiContractType.ERC20 })
    expect(abi).toBe(erc20Abi)
  })

  it('should return ERC4626 ABI', async () => {
    const provider = AbiProviderFactory.newAbiProvider({ configProvider: mockConfigProvider })
    const abi = await provider.getAbi({ type: AbiContractType.ERC4626 })
    expect(abi).toBe(erc4626Abi)
  })
})
