import { 
  LoggingService, SerializationService,
  Token, TokenAmount, ChainInfo, Address, FiatCurrencyAmount, Percentage, PoolId, PositionId, Price, Protocol, RiskRatio, SDKError, Vault, Wallet,
  BalanceChange, GasEstimation, LendingSimulation, YieldSimulation,
  Holding, UserPortfolio, User
} from '@thesolidchain/sdk-common'
import type { SDKAppRouter } from '@thesolidchain/api-server'

// Ensure DTO classes are not tree-shaken by Webpack so their SerializationService.registerClass side effects run
const _ensureRegistered = [
  Token, TokenAmount, ChainInfo, Address, FiatCurrencyAmount, Percentage, PoolId, PositionId, Price, Protocol, RiskRatio, SDKError, Vault, Wallet,
  BalanceChange, GasEstimation, LendingSimulation, YieldSimulation,
  Holding, UserPortfolio, User
]

import { createTRPCClient, httpBatchLink, loggerLink } from '@trpc/client'

export type RPCMainClientType = ReturnType<typeof createTRPCClient<SDKAppRouter>>

export function createMainRPCClient(params: {
  apiURL: string
  clientId?: string
  logging?: boolean
  apiKey?: string
}): RPCMainClientType {
  return createTRPCClient<SDKAppRouter>({
    links: [
      loggerLink({
        enabled: () => !!params.logging,
        logger(opts) {
          const apiUrlBase = new URL(`${params.apiURL}/${opts.path}`)
          const input = SerializationService.stringify(opts.input)
          apiUrlBase.searchParams.set('input', input)
          LoggingService.log(`SDK call (${opts.path}):`, apiUrlBase.toString())
        },
      }),
      httpBatchLink({
        url: params.apiURL,
        transformer: SerializationService.getTransformer(),
        maxURLLength: 5000,
        fetch: (url, opts) => fetch(url, { ...opts, credentials: 'omit' }),
        headers() {
          return {
            ...(params.clientId && { 'Client-Id': params.clientId }),
            ...(params.apiKey && { 'x-api-key': params.apiKey }),
          }
        },
      }),
    ],
  })
}
