import { IAbiProvider } from '@thesolidchain/abi-provider-common'
import { AbiProviderFactory } from '@thesolidchain/abi-provider-service'
import { IAddressBookManager } from '@thesolidchain/address-book-common'
import { AddressBookManagerFactory } from '@thesolidchain/address-book-service'
import type { IAllowanceManager } from '@thesolidchain/allowance-manager-common'
import { AllowanceManagerFactory } from '@thesolidchain/allowance-manager-service'
import { IConfigurationProvider } from '@thesolidchain/configuration-provider-common'
import { ConfigurationProvider } from '@thesolidchain/configuration-provider'
import { IContractsProvider } from '@thesolidchain/contracts-provider-common'
import { ContractsProviderFactory } from '@thesolidchain/contracts-provider-service'
import { IOracleManager } from '@thesolidchain/oracle-common'
import { BlockchainManagerFactory } from '@thesolidchain/blockchain-client-provider'
import { IBlockchainManager } from '@thesolidchain/blockchain-client-common'
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
import { IPortfolioManager } from '@thesolidchain/portfolio-common'
import { PortfolioManagerFactory } from '@thesolidchain/portfolio-service'
import { ISubscriptionManager } from '@thesolidchain/subscriptions-common'
import { SubscriptionManagerFactory } from '@thesolidchain/subscriptions-service'
import { IEventBus } from '@thesolidchain/events-common'
import { EventBus } from '@thesolidchain/events-service'
import { DynamoDBCacheService, ICacheService } from '@thesolidchain/api-server-common'

import { LoggingService } from '@thesolidchain/sdk-common'
import { CreateAWSLambdaContextOptions } from '@trpc/server/adapters/aws-lambda'
import type { APIGatewayProxyEventV2 } from 'aws-lambda'
import { createProtocolsPluginsRegistry } from './CreateProtocolPluginsRegistry'

export type SDKContextOptions = CreateAWSLambdaContextOptions<APIGatewayProxyEventV2>

export type SDKAppContext = {
  callUrl: string
  callKey: string
  cacheService: ICacheService
  addressBookManager: IAddressBookManager
  configProvider: IConfigurationProvider
  blockchainClientProvider: IBlockchainManager
  abiProvider: IAbiProvider
  contractsProvider: IContractsProvider
  tokensManager: ITokensManager
  swapManager: ISwapManager
  oracleManager: IOracleManager
  portfolioManager: IPortfolioManager
  protocolsRegistry: IProtocolPluginsRegistry
  protocolManager: IProtocolManager
  orderPlannerService: IOrderPlannerService
  allowanceManager: IAllowanceManager
  intentSwapsManager: CowSwapProvider
  subscriptionManager: ISubscriptionManager
  eventBus: IEventBus
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

  const cacheService = new DynamoDBCacheService({ configProvider })

  const blockchainClientProvider = BlockchainManagerFactory.newBlockchainManager({ configProvider })
  const abiProvider = AbiProviderFactory.newAbiProvider({ configProvider })
  const contractsProvider = ContractsProviderFactory.newContractsProvider({
    configProvider,
    blockchainClientProvider,
  })
  const tokensManager = TokensManagerFactory.newTokensManager({
    configProvider,
    blockchainClientProvider,
    contractsProvider,
    cacheService,
  })
  const addressBookManager = AddressBookManagerFactory.newAddressBookManager({ configProvider })
  const orderPlannerService = new OrderPlannerService()
  const swapManager = SwapManagerFactory.newSwapManager({ configProvider })
  const oracleManager = OracleManagerFactory.newOracleManager({ configProvider, cacheService })
  const portfolioManager = PortfolioManagerFactory.newPortfolioManager({
    tokensManager,
    oracleManager,
    cacheService,
  })
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

  const subscriptionManager = SubscriptionManagerFactory.newSubscriptionManager({
    configProvider,
    blockchainClientProvider,
  })

  const eventBus = new EventBus()

  return {
    callUrl: `${opts.event.rawPath}?${opts.event.rawQueryString}`,
    callKey: quickHashCode(`${opts.event.rawPath}${opts.event.rawQueryString}`),
    cacheService,
    configProvider,
    blockchainClientProvider,
    abiProvider,
    contractsProvider,
    addressBookManager,
    tokensManager,
    swapManager,
    oracleManager,
    portfolioManager,
    protocolsRegistry,
    protocolManager,
    orderPlannerService,
    allowanceManager,
    intentSwapsManager,
    subscriptionManager,
    eventBus,
  }
}
