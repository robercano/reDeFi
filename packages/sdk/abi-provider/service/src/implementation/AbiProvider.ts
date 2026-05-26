import {
  AbiContractType,
  ContractAbi,
  ContractAbiRecord,
  IAbiProvider,
} from '@thesolidchain/abi-provider-common'

import { IConfigurationProvider } from '@thesolidchain/configuration-provider-common'
import { erc20Abi, erc4626Abi } from 'viem'

/**
 * AbiProvider
 * A service that provides access to standard contract ABIs (e.g. ERC20, ERC4626).
 * This acts as the central registry for ABIs used across the SDK to encode and decode contract interactions.
 *
 * @implements IAbiProvider
 */
export class AbiProvider implements IAbiProvider {
  private _configProvider: IConfigurationProvider
  private _abis: ContractAbiRecord

  /**
   * Initializes the AbiProvider, loading the standard ABIs configuration.
   *
   * @param params.configProvider - Configuration provider to access SDK settings
   */
  constructor(params: { configProvider: IConfigurationProvider }) {
    this._configProvider = params.configProvider

    this._abis = this._getAbisConfiguration()
  }

  /**
   * Retrieves the ABI for a specific contract standard.
   *
   * @param params.type - The contract standard to fetch the ABI for (e.g. `AbiContractType.ERC20`)
   * @returns A promise resolving to the exact `ContractAbi`
   */
  async getAbi(params: { type: AbiContractType }): Promise<ContractAbi> {
    return this._abis[params.type]
  }

  /** PRIVATE */

  /**
   * _getAbisConfiguration
   * List of all the supported ABIs
   */
  private _getAbisConfiguration(): ContractAbiRecord {
    return {
      [AbiContractType.ERC20]: erc20Abi,
      [AbiContractType.ERC4626]: erc4626Abi,
    }
  }
}
