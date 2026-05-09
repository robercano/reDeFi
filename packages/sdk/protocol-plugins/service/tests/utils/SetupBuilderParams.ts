import { IAddressBookManager } from '@thesolidchain/address-book-common'
import { IProtocolPluginsRegistry } from '@thesolidchain/protocol-plugins-common'
import { Address, ChainInfo, Wallet } from '@thesolidchain/sdk-common'
import { IPositionsManager } from '@thesolidchain/sdk-common'
import { IUser, User } from '@thesolidchain/sdk-common'
import {
  AddressBookManagerMock,
  StepBuilderContextMock,
  SwapManagerMock,
} from '@thesolidchain/testing-utils'
import {
  createEmptyBuildersProtocolPluginsRegistry,
  createEmptyProtocolPluginsRegistry,
  createNoCheckpointProtocolPluginsRegistry,
  createProtocolPluginsRegistry,
} from './ProtocolsPluginRegistryMock'

export type SetupBuilderReturnType = {
  context: StepBuilderContextMock
  user: IUser
  positionsManager: IPositionsManager
  swapManager: SwapManagerMock
  addressBookManager: IAddressBookManager
  protocolsRegistry: IProtocolPluginsRegistry
  emptyProtocolsRegistry: IProtocolPluginsRegistry
  emptyBuildersProtocolRegistry: IProtocolPluginsRegistry
  noCheckpointProtocolsRegistry: IProtocolPluginsRegistry
}

export function setupBuilderParams(params: { chainInfo: ChainInfo }): SetupBuilderReturnType {
  const protocolsRegistry = createProtocolPluginsRegistry()
  const emptyProtocolsRegistry = createEmptyProtocolPluginsRegistry()
  const noCheckpointProtocolsRegistry = createNoCheckpointProtocolPluginsRegistry()
  const emptyBuildersProtocolRegistry = createEmptyBuildersProtocolPluginsRegistry()

  return {
    context: new StepBuilderContextMock(),
    user: User.createFrom({
      chainInfo: params.chainInfo,
      wallet: Wallet.createFrom({
        address: Address.createFromEthereum({
          value: '0xbA2aE424d960c26247Dd6c32edC70B295c744C43',
        }),
      }),
    }),
    positionsManager: {
      address: Address.ZeroAddressEthereum,
    },
    swapManager: new SwapManagerMock(),
    addressBookManager: new AddressBookManagerMock(),
    protocolsRegistry: protocolsRegistry,
    emptyProtocolsRegistry: emptyProtocolsRegistry,
    noCheckpointProtocolsRegistry: noCheckpointProtocolsRegistry,
    emptyBuildersProtocolRegistry: emptyBuildersProtocolRegistry,
  }
}
