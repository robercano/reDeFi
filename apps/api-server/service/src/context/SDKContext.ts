import { IAbiProvider } from '@thesolidchain/abi-provider-common'
import { AbiProviderFactory } from '@thesolidchain/abi-provider-service'
import { IAddressBookManager } from '@thesolidchain/address-book-common'
import { AddressBookManagerFactory } from '@thesolidchain/address-book-service'
import type { IAllowanceManager } from '@thesolidchain/allowance-manager-common'
import { AllowanceManagerFactory } from '@thesolidchain/allowance-manager-service'
import { BlockchainClientProvider } from '@thesolidchain/blockchain-client-provider'
import { ConfigurationProvider } from '@thesolidchain/configuration-provider'
import { IConfigurationProvider } from '@thesolidchain/configuration-provider-common'
import { IContractsProvider } from '@thesolidchain/contracts-provider-common'
import { ContractsProviderFactory } from '@thesolidchain/contracts-provider-service'
import { IOracleManager } from '@thesolidchain/oracle-common'
import { OracleManagerFactory } from '@thesolidchain/oracle-service'
import { IOrderPlannerService } from '@thesolidchain/order-planner-common'
import { OrderPlannerService } from '@thesolidchain/order-planner-service'
import { IProtocolManager } from '@thesolidchain/protocol-manager-common'
import { ProtocolManager } from '@thesolidchain/protocol-manager-service'
import { IProtocolPluginsRegistry } from '@thesolidchain/protocol-plugins-common'
import { ISwapManager } from '@thesolidchain/swap-common'
import { CowSwapProvider, SwapManagerFactory } from '@thesolidchain/swap-service'
import { ITokensManager } from '@thesolidchain/tokens-common'
import { TokensManagerFactory } from '@thesolidchain/tokens-service'

import { LoggingService } from '@thesolidchain/sdk-common'
import { CreateAWSLambdaContextOptions } from '@trpc/server/adapters/aws-lambda'
import type { APIGatewayProxyEventV2 } from 'aws-lambda'
import { createProtocolsPluginsRegistry } from './CreateProtocolPluginsRegistry'

export type SDKContextOptions = CreateAWSLambdaContextOptions<APIGatewayProxyEventV2>

export type SDKAppContext = {
  callUrl: string
  callKey: string
  addressBookManager: IAddressBookManager
  configProvider: IConfigurationProvider
  blockchainClientProvider: BlockchainClientProvider
  abiProvider: IAbiProvider
  contractsProvider: IContractsProvider
  tokensManager: ITokensManager
  swapManager: ISwapManager
  oracleManager: IOracleManager
  protocolsRegistry: IProtocolPluginsRegistry
  protocolManager: IProtocolManager
  orderPlannerService: IOrderPlannerService
  allowanceManager: IAllowanceManager
  intentSwapsManager: CowSwapProvider
}

const quickHashCode = (str: string): string => {
  let hash = 0
  for (let i = 0, len = str.length; i < len; i++) {
    const chr = str.charCodeAt(i)
    hash = (hash << 5) - hash + chr
    hash |= 0 // Convert to 32bit integer
  }
  return String(Math.abs(hash))
}

// context for each request
export const createSDKContext = async (opts: SDKContextOptions): Promise<SDKAppContext> => {
  LoggingService.log('Request headers', opts.event.headers)

  const configProvider = new ConfigurationProvider()

  const blockchainClientProvider = new BlockchainClientProvider({ configProvider })
  const abiProvider = AbiProviderFactory.newAbiProvider({ configProvider })
  const contractsProvider = ContractsProviderFactory.newContractsProvider({
    configProvider,
    blockchainClientProvider,
  })
  const tokensManager = TokensManagerFactory.newTokensManager({
    configProvider,
    blockchainClientProvider,
    contractsProvider,
  })
  const addressBookManager = AddressBookManagerFactory.newAddressBookManager({ configProvider })
  const orderPlannerService = new OrderPlannerService()
  const swapManager = SwapManagerFactory.newSwapManager({ configProvider })
  const oracleManager = OracleManagerFactory.newOracleManager({ configProvider })
  const protocolsRegistry = createProtocolsPluginsRegistry({
    configProvider,
    blockchainClientProvider: blockchainClientProvider,
    tokensManager,
    oracleManager,
    swapManager,
    addressBookManager,
  })

  const protocolManager = ProtocolManager.createWith({ pluginsRegistry: protocolsRegistry })
  const allowanceManager = AllowanceManagerFactory.newAllowanceManager({
    configProvider,
    contractsProvider,
  })
  const intentSwapsManager = new CowSwapProvider({
    configProvider,
    allowanceManager,
    tokensManager,
  })

  return {
    callUrl: `${opts.event.rawPath}?${opts.event.rawQueryString}`,
    callKey: quickHashCode(`${opts.event.rawPath}${opts.event.rawQueryString}`),
    configProvider,
    blockchainClientProvider,
    abiProvider,
    contractsProvider,
    addressBookManager,
    tokensManager,
    swapManager,
    oracleManager,
    protocolsRegistry,
    protocolManager,
    orderPlannerService,
    allowanceManager,
    intentSwapsManager,
  }
}
