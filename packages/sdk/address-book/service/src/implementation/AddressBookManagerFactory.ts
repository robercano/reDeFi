import { IAddressBookManager } from '@thesolidchain/address-book-common'
import { type IConfigurationProvider } from '@thesolidchain/configuration-provider-common'
import { Deployments } from '@thesolidchain/contracts-core'
import { DeploymentIndex } from '@thesolidchain/deployment-utils'
import { AddressBookManager } from './AddressBookManager'

/**
 * @name AddressBookManagerFactory
 * @description Factory class for the AddressBookManager. Takes care of generating the manager config and creates an instance
 */
export class AddressBookManagerFactory {
  /**
   * @method newAddressBookManager
   * @param configProvider The configuration provider used to get environment variables
   * @returns A new instance of the AddressBookManager
   */
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  public static newAddressBookManager(params: {
    configProvider: IConfigurationProvider
  }): IAddressBookManager {
    return new AddressBookManager({
      deployments: Deployments as DeploymentIndex,
      deploymentTag: 'standard',
    })
  }
}
