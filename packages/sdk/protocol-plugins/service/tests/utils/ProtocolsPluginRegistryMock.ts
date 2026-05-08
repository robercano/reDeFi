import { IAddressBookManager } from '@thesolidchain/address-book-common'
import { IOracleManager } from '@thesolidchain/oracle-common'
import {
  IProtocolPluginContext,
  IProtocolPluginsRegistry,
} from '@thesolidchain/protocol-plugins-common'
import { ProtocolName } from '@thesolidchain/sdk-common'
import { ISwapManager } from '@thesolidchain/swap-common'
import { ITokensManager } from '@thesolidchain/tokens-common'
import { PublicClient } from 'viem'
import { ProtocolPluginsRegistry } from '../../src/implementation/ProtocolPluginsRegistry'
import { AaveV3ProtocolPlugin } from '../../src/plugins/aave-v3/implementation/AAVEv3ProtocolPlugin'
import {
  EmptyProtocolPluginMock,
  NoCheckpointProtocolPluginMock,
  ProtocolPluginMock,
} from './ProtocolPluginMock'

export function createProtocolPluginsRegistry(): IProtocolPluginsRegistry {
  const protocolPluginContext: IProtocolPluginContext = {
    addressBookManager: undefined as unknown as IAddressBookManager,
    provider: undefined as unknown as PublicClient,
    tokensManager: undefined as unknown as ITokensManager,
    oracleManager: undefined as unknown as IOracleManager,
    swapManager: undefined as unknown as ISwapManager,
  } as IProtocolPluginContext

  return new ProtocolPluginsRegistry({
    plugins: {
      [ProtocolName.Maker]: ProtocolPluginMock,
      [ProtocolName.AaveV3]: ProtocolPluginMock,
      [ProtocolName.Spark]: ProtocolPluginMock,
      [ProtocolName.MorphoBlue]: ProtocolPluginMock,
    },
    context: protocolPluginContext,
  })
}

export function createEmptyProtocolPluginsRegistry(): IProtocolPluginsRegistry {
  const protocolPluginContext: IProtocolPluginContext = {
    addressBookManager: undefined as unknown as IAddressBookManager,
    provider: undefined as unknown as PublicClient,
    tokensManager: undefined as unknown as ITokensManager,
    oracleManager: undefined as unknown as IOracleManager,
    swapManager: undefined as unknown as ISwapManager,
  } as IProtocolPluginContext

  return new ProtocolPluginsRegistry({
    plugins: {},
    context: protocolPluginContext,
  })
}

export function createEmptyBuildersProtocolPluginsRegistry(): IProtocolPluginsRegistry {
  const protocolPluginContext: IProtocolPluginContext = {
    addressBookManager: undefined as unknown as IAddressBookManager,
    provider: undefined as unknown as PublicClient,
    tokensManager: undefined as unknown as ITokensManager,
    oracleManager: undefined as unknown as IOracleManager,
    swapManager: undefined as unknown as ISwapManager,
  } as IProtocolPluginContext

  return new ProtocolPluginsRegistry({
    plugins: {
      [ProtocolName.AaveV3]: EmptyProtocolPluginMock,
    },
    context: protocolPluginContext,
  })
}

export function createNoCheckpointProtocolPluginsRegistry(): IProtocolPluginsRegistry {
  const protocolPluginContext: IProtocolPluginContext = {
    addressBookManager: undefined as unknown as IAddressBookManager,
    provider: undefined as unknown as PublicClient,
    tokensManager: undefined as unknown as ITokensManager,
    oracleManager: undefined as unknown as IOracleManager,
    swapManager: undefined as unknown as ISwapManager,
  } as IProtocolPluginContext

  return new ProtocolPluginsRegistry({
    plugins: {
      [ProtocolName.AaveV3]: NoCheckpointProtocolPluginMock,
    },
    context: protocolPluginContext,
  })
}

export function createRealProtocolsPluginsRegistry(): IProtocolPluginsRegistry {
  const protocolPluginContext: IProtocolPluginContext = {
    addressBookManager: undefined as unknown as IAddressBookManager,
    provider: undefined as unknown as PublicClient,
    tokensManager: undefined as unknown as ITokensManager,
    oracleManager: undefined as unknown as IOracleManager,
    swapManager: undefined as unknown as ISwapManager,
  } as IProtocolPluginContext

  return new ProtocolPluginsRegistry({
    plugins: {
      [ProtocolName.AaveV3]: AaveV3ProtocolPlugin,
    },
    context: protocolPluginContext,
  })
}
