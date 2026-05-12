import { ManagerWithFallbackProvidersBase, ICacheService } from '@thesolidchain/api-server-common'
import {
  TokensProviderType,
  Cache,
  VolatilityProfile,
  DataOrchestrator,
} from '@thesolidchain/sdk-common'
import { ITokensManager, ITokensProvider } from '@thesolidchain/tokens-common'

/**
 * TokensManager
 * Implementation of the ITokensManager interface. It allows to retrieve information for a Token
 */
export class TokensManager
  extends ManagerWithFallbackProvidersBase<TokensProviderType, ITokensProvider>
  implements ITokensManager
{
  constructor(params: {
    providers: ITokensProvider[]
    cacheService?: ICacheService
    cacheTTLSeconds?: number
    cacheOrchestrator?: DataOrchestrator
  }) {
    super(params)
  }

  /** PUBLIC METHODS */

  /**
   * getTokenBySymbol
   * Retrieves a token by its symbol.
   * @param params.params Parameters including the token symbol and chain information.
   * @returns The token information.
   */
  @Cache(VolatilityProfile.STATIC)
  async getTokenBySymbol(
    params: Parameters<ITokensManager['getTokenBySymbol']>[0],
  ): ReturnType<ITokensManager['getTokenBySymbol']> {
    return this._executeWithFallback({
      chainInfo: params.chainInfo,
      action: async (provider) => provider.getTokenBySymbol(params),
    })
  }

  /**
   * getTokenByAddress
   * Retrieves a token by its contract address.
   * @param params.params Parameters including the token address and chain information.
   * @returns The token information.
   */
  @Cache(VolatilityProfile.STATIC)
  async getTokenByAddress(
    params: Parameters<ITokensManager['getTokenByAddress']>[0],
  ): ReturnType<ITokensManager['getTokenByAddress']> {
    return this._executeWithFallback({
      chainInfo: params.chainInfo,
      action: async (provider) => provider.getTokenByAddress(params),
    })
  }

  /**
   * getTokenByName
   * Retrieves a token by its full name.
   * @param params.params Parameters including the token name and chain information.
   * @returns The token information.
   */
  @Cache(VolatilityProfile.STATIC)
  async getTokenByName(
    params: Parameters<ITokensManager['getTokenByName']>[0],
  ): ReturnType<ITokensManager['getTokenByName']> {
    return this._executeWithFallback({
      chainInfo: params.chainInfo,
      action: async (provider) => provider.getTokenByName(params),
    })
  }

  /**
   * getTokenBalanceBySymbol
   * Retrieves the balance of a token for a specific address using the token's symbol.
   * @param params.params Parameters including the wallet address, token symbol, and chain information.
   * @returns The token balance.
   */
  @Cache(VolatilityProfile.BLOCK_BOUND)
  async getTokenBalanceBySymbol(
    params: Parameters<ITokensManager['getTokenBalanceBySymbol']>[0],
  ): ReturnType<ITokensManager['getTokenBalanceBySymbol']> {
    return this._executeWithFallback({
      chainInfo: params.chainInfo,
      action: async (provider) => provider.getTokenBalanceBySymbol(params),
    })
  }

  /**
   * getTokenBalanceByAddress
   * Retrieves the balance of a token for a specific address using the token's contract address.
   * @param params.params Parameters including the wallet address, token address, and chain information.
   * @returns The token balance.
   */
  @Cache(VolatilityProfile.BLOCK_BOUND)
  async getTokenBalanceByAddress(
    params: Parameters<ITokensManager['getTokenBalanceByAddress']>[0],
  ): ReturnType<ITokensManager['getTokenBalanceByAddress']> {
    return this._executeWithFallback({
      chainInfo: params.chainInfo,
      action: async (provider) => provider.getTokenBalanceByAddress(params),
    })
  }

  /**
   * getTokenTotalSupply
   * Retrieves the total supply of a specific token.
   * @param params.params Parameters including the token information.
   * @returns The total supply of the token.
   */
  @Cache(VolatilityProfile.BLOCK_BOUND)
  async getTokenTotalSupply(
    params: Parameters<ITokensManager['getTokenTotalSupply']>[0],
  ): ReturnType<ITokensManager['getTokenTotalSupply']> {
    return this._executeWithFallback({
      chainInfo: params.token.chainInfo,
      action: async (provider) => provider.getTokenTotalSupply(params),
    })
  }
}
