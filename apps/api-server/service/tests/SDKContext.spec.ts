import { describe, it, expect, vi } from 'vitest'
import { createSDKContext } from '../src/context/SDKContext'

vi.mock('@thesolidchain/configuration-provider', () => ({
  ConfigurationProvider: vi.fn().mockImplementation(() => ({}))
}))
vi.mock('@thesolidchain/events-service', () => ({
  EventBus: vi.fn().mockImplementation(() => ({}))
}))
vi.mock('@thesolidchain/api-server-common', () => ({
  DynamoDBCacheService: vi.fn().mockImplementation(() => ({})),
  ManagerProviderBase: class {},
}))
vi.mock('@thesolidchain/blockchain-client-provider', () => ({
  BlockchainManagerFactory: { newBlockchainManager: vi.fn().mockReturnValue({}) }
}))
vi.mock('@thesolidchain/abi-provider-service', () => ({
  AbiProviderFactory: { newAbiProvider: vi.fn().mockReturnValue({}) }
}))
vi.mock('@thesolidchain/contracts-provider-service', () => ({
  ContractsProviderFactory: { newContractsProvider: vi.fn().mockReturnValue({}) }
}))
vi.mock('@thesolidchain/tokens-service', () => ({
  TokensManagerFactory: { newTokensManager: vi.fn().mockReturnValue({}) }
}))
vi.mock('@thesolidchain/address-book-service', () => ({
  AddressBookManagerFactory: { newAddressBookManager: vi.fn().mockReturnValue({}) }
}))
vi.mock('@thesolidchain/order-planner-service', () => ({
  OrderPlannerService: vi.fn().mockImplementation(() => ({}))
}))
vi.mock('@thesolidchain/swap-service', () => ({
  SwapManagerFactory: { newSwapManager: vi.fn().mockReturnValue({}) },
  CowSwapProvider: vi.fn().mockImplementation(() => ({}))
}))
vi.mock('@thesolidchain/oracle-service', () => ({
  OracleManagerFactory: { newOracleManager: vi.fn().mockReturnValue({}) }
}))
vi.mock('@thesolidchain/portfolio-service', () => ({
  PortfolioManagerFactory: { newPortfolioManager: vi.fn().mockReturnValue({}) }
}))
vi.mock('../src/context/CreateProtocolPluginsRegistry', () => ({
  createProtocolsPluginsRegistry: vi.fn().mockReturnValue({})
}))
vi.mock('@thesolidchain/protocol-manager-service', () => ({
  ProtocolManager: { createWith: vi.fn().mockReturnValue({}) }
}))
vi.mock('@thesolidchain/allowance-manager-service', () => ({
  AllowanceManagerFactory: { newAllowanceManager: vi.fn().mockReturnValue({}) }
}))
vi.mock('@thesolidchain/subscriptions-service', () => ({
  SubscriptionManagerFactory: { newSubscriptionManager: vi.fn().mockReturnValue({}) }
}))
vi.mock('@thesolidchain/sdk-common', () => ({
  LoggingService: { log: vi.fn(), debug: vi.fn() }
}))

describe('SDKContext', () => {
  it('should create SDK context', async () => {
    const opts = {
      event: {
        headers: {},
        rawPath: '/test',
        rawQueryString: 'a=1',
      }
    } as any

    const ctx = await createSDKContext(opts)
    expect(ctx.callUrl).toBe('/test?a=1')
    expect(ctx.callKey).toBeDefined()
    expect(ctx.cacheService).toBeDefined()
    expect(ctx.configProvider).toBeDefined()
    expect(ctx.blockchainClientProvider).toBeDefined()
    expect(ctx.abiProvider).toBeDefined()
    expect(ctx.contractsProvider).toBeDefined()
    expect(ctx.addressBookManager).toBeDefined()
    expect(ctx.tokensManager).toBeDefined()
    expect(ctx.swapManager).toBeDefined()
    expect(ctx.oracleManager).toBeDefined()
    expect(ctx.portfolioManager).toBeDefined()
    expect(ctx.protocolsRegistry).toBeDefined()
    expect(ctx.protocolManager).toBeDefined()
    expect(ctx.orderPlannerService).toBeDefined()
    expect(ctx.allowanceManager).toBeDefined()
    expect(ctx.intentSwapsManager).toBeDefined()
    expect(ctx.subscriptionManager).toBeDefined()
    expect(ctx.eventBus).toBeDefined()
  })
})
