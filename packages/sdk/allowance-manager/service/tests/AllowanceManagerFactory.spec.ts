import { describe, it, expect } from 'vitest'
import { AllowanceManagerFactory } from '../src/implementation/AllowanceManagerFactory'
import { AllowanceManager } from '../src/implementation/AllowanceManager'
import { IConfigurationProvider } from '@thesolidchain/configuration-provider-common'
import { IContractsProvider } from '@thesolidchain/contracts-provider-common'

describe('AllowanceManagerFactory', () => {
  it('should instantiate an AllowanceManager', () => {
    const mockConfigProvider = {} as IConfigurationProvider
    const mockContractsProvider = {} as IContractsProvider

    const manager = AllowanceManagerFactory.newAllowanceManager({
      configProvider: mockConfigProvider,
      contractsProvider: mockContractsProvider,
    })

    expect(manager).toBeInstanceOf(AllowanceManager)
  })
})
