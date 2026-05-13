import { IAddressBookManager } from '@thesolidchain/address-book-common'
import { IConfigurationProvider } from '@thesolidchain/configuration-provider-common'
import { ChainFamilyMap, AddressType } from '@thesolidchain/sdk-common'
import { AddressBookManagerFactory } from '../src'

import assert from 'assert'

describe('TokensManagerFactory', () => {
  let addressBookManager: IAddressBookManager

  const chainInfo = ChainFamilyMap.Ethereum.Mainnet

  beforeEach(() => {
    addressBookManager = AddressBookManagerFactory.newAddressBookManager({
      configProvider: {} as IConfigurationProvider,
    })
  })

  it('should return undefined when requesting a core contract since deployments are empty', async () => {
    const operationExecutorAddress = await addressBookManager.getAddressByName({
      chainInfo,
      name: 'OperationExecutor',
    })

    expect(operationExecutorAddress).toBeUndefined()
  })

  it('should return undefined when requesting a dependency contract since deployments are empty', async () => {
    const morphoBlueAddress = await addressBookManager.getAddressByName({
      chainInfo,
      name: 'MorphoBlue',
    })

    expect(morphoBlueAddress).toBeUndefined()
  })

  it('should return undefined if the name does not exist', async () => {
    const madeUpAddress = await addressBookManager.getAddressByName({
      chainInfo,
      name: 'ReallyMadeUpNameYeah',
    })

    expect(madeUpAddress).toBeUndefined()
  })
})
