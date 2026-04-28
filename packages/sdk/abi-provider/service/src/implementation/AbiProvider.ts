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
 * @implements IAbiProvider
 */
export class AbiProvider implements IAbiProvider {
  private _configProvider: IConfigurationProvider
  private _abis: ContractAbiRecord

  /** CONSTRUCTOR */
  constructor(params: { configProvider: IConfigurationProvider }) {
    this._configProvider = params.configProvider

    this._abis = this._getAbisConfiguration()
  }

  /** FUNCTIONS */
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
