import type { Maybe, IAddress, IChainInfo } from '@thesolidchain/sdk-common'
import { IAddressBookManager, IKnownAddressesProvider } from '@thesolidchain/address-book-common'
import { DeploymentIndex } from '@thesolidchain/deployment-utils'
import { Address, AddressValue } from '@thesolidchain/sdk-common'

/**
 * AddressBookManager
 * @see IAddressBookManager
 */
export class AddressBookManager implements IAddressBookManager {
  readonly deployments: DeploymentIndex
  readonly deploymentsTag: string
  readonly knownAddressesProvider: IKnownAddressesProvider
  private _registeredAddresses: Record<number, Record<string, string>> = {}

  /** CONSTRUCTOR */
  constructor(params: {
    deployments: DeploymentIndex
    deploymentTag: string
    knownAddressesProvider: IKnownAddressesProvider
  }) {
    this.deployments = params.deployments
    this.deploymentsTag = params.deploymentTag
    this.knownAddressesProvider = params.knownAddressesProvider
  }


  /** PUBLIC METHODS */

  /** @see IAddressBookManager.registerAddresses */
  public registerAddresses(addresses: Record<number, Record<string, string>>): void {
    for (const [chainIdStr, newAddresses] of Object.entries(addresses)) {
      const chainId = parseInt(chainIdStr, 10)
      if (!this._registeredAddresses[chainId]) {
        this._registeredAddresses[chainId] = {}
      }
      Object.assign(this._registeredAddresses[chainId], newAddresses)
    }
  }

  /** @see IAddressBookManager.getAddressByName */
  async getAddressByName(params: {
    chainInfo: IChainInfo
    name: string
  }): Promise<Maybe<IAddress>> {
    const deploymentKey = this._getDeploymentKey(params.chainInfo)

    const deployment = this.deployments[deploymentKey]

    if (!deployment) {
      return undefined
    }

    const contractInfo = deployment.contracts[params.name] || deployment.dependencies[params.name]
    if (contractInfo) {
      return Address.createFromEthereum({
        value: contractInfo.address as AddressValue,
      })
    }

    const registeredAddress = this._registeredAddresses[params.chainInfo.chainId]?.[params.name]
    if (registeredAddress) {
      return Address.createFromEthereum({
        value: registeredAddress as AddressValue,
      })
    }

    return this.knownAddressesProvider.getAddress(params)

  }


  /** PRIVATE */

  /**
   * Generates the deployment key for the given chain
   * @param params.chainInfo Chain used to generate the tag
   * @returns The deployment key
   */
  private _getDeploymentKey(chainInfo: IChainInfo): string {
    return `${chainInfo.name}.${this.deploymentsTag}`
  }
}
