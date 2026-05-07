import { IAddressBookManager } from '@thesolidchain/address-book-common'
import {
  ActionBuilderParams,
  ActionBuilderUsedAction,
  FilterStep,
  IActionBuilder,
} from '@thesolidchain/protocol-plugins-common'
import {
  IAddress,
  IChainInfo,
  ProtocolName,
  SimulationSteps,
  steps,
} from '@thesolidchain/sdk-common'
import { getContractAddress } from '../plugins/utils/GetContractAddress'

/**
 * Base class for all action builders
 *
 * It provides convenience functions like `_delegateToProtocol` and establishes
 * a common interface for all action builders
 *
 * The side effects of this class will be reflected in the IStepBuilderContext passed to it as a parameter
 */
export abstract class BaseActionBuilder<
  StepType extends steps.Steps,
> implements IActionBuilder<StepType> {
  /** @see IActionBuilder.actions */
  abstract readonly actions: ActionBuilderUsedAction[]

  /** @see IActionBuilder.build */
  public abstract build(
    params: ActionBuilderParams<FilterStep<SimulationSteps, StepType>>,
  ): Promise<void>

  /** PROTECTED */

  /**
   * Delegates the building of the action to the specific builder in the corresponding protocol plugin
   * @param params.protocolName The name of the protocol to delegate the action to
   * @param params.actionBuilderParams The parameters for the action builder
   */
  protected async _delegateToProtocol(params: {
    protocolName: ProtocolName
    actionBuilderParams: ActionBuilderParams<FilterStep<SimulationSteps, StepType>>
  }): Promise<void> {
    throw new Error('Not implemented: Builders are disabled in protocol plugins')
  }

  /**
   * Resolves the address of a contract by its name using the address book manager
   * @param params.addressBookManager The address book manager to use
   * @param params.chainInfo The chain where the contract is
   * @param params.contractName The name of the contract
   * @returns The address of the contract
   */
  protected async _getContractAddress(params: {
    addressBookManager: IAddressBookManager
    chainInfo: IChainInfo
    contractName: string
  }): Promise<IAddress> {
    return getContractAddress({
      addressBookManager: params.addressBookManager,
      chainInfo: params.chainInfo,
      contractName: params.contractName,
    })
  }
}
