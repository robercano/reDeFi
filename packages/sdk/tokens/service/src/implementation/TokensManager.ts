import { ManagerWithFallbackProvidersBase, ICacheService } from '@thesolidchain/api-server-common'
import { TokensProviderType } from '@thesolidchain/sdk-common'
import { ITokensManager, ITokensProvider } from '@thesolidchain/tokens-common'

/**
 * @name TokensManager
 * @description Implementation of the ITokensManager interface. It allows to retrieve information for a Token
 */
export class TokensManager
  extends ManagerWithFallbackProvidersBase<TokensProviderType, ITokensProvider>
  implements ITokensManager
{
  constructor(params: {
    providers: ITokensProvider[]
    cacheService?: ICacheService
    cacheTTLSeconds?: number
  }) {
    super(params)
  }

  /** PUBLIC METHODS */

  /** @see ITokensManager.getTokenBySymbol */
  async getTokenBySymbol(
    params: Parameters<ITokensManager['getTokenBySymbol']>[0],
  ): ReturnType<ITokensManager['getTokenBySymbol']> {
    const cacheKey = this._buildCacheKey('getTokenBySymbol', [
      params.chainInfo.chainId,
      params.symbol,
    ])

    return this._executeWithCacheAndFallback({
      cacheKey,
      chainInfo: params.chainInfo,
      action: async (provider) => provider.getTokenBySymbol(params),
    })
  }

  /** @see ITokensManager.getTokenByAddress */
  async getTokenByAddress(
    params: Parameters<ITokensManager['getTokenByAddress']>[0],
  ): ReturnType<ITokensManager['getTokenByAddress']> {
    const cacheKey = this._buildCacheKey('getTokenByAddress', [
      params.chainInfo.chainId,
      params.address.value,
    ])

    return this._executeWithCacheAndFallback({
      cacheKey,
      chainInfo: params.chainInfo,
      action: async (provider) => provider.getTokenByAddress(params),
    })
  }

  /** @see ITokensManager.getTokenByName */
  async getTokenByName(
    params: Parameters<ITokensManager['getTokenByName']>[0],
  ): ReturnType<ITokensManager['getTokenByName']> {
    const cacheKey = this._buildCacheKey('getTokenByName', [
      params.chainInfo.chainId,
      params.name,
    ])

    return this._executeWithCacheAndFallback({
      cacheKey,
      chainInfo: params.chainInfo,
      action: async (provider) => provider.getTokenByName(params),
    })
  }

  async getTokenBalanceBySymbol(
    params: Parameters<ITokensManager['getTokenBalanceBySymbol']>[0],
  ): ReturnType<ITokensManager['getTokenBalanceBySymbol']> {
    const cacheKey = this._buildCacheKey('getTokenBalanceBySymbol', [
      params.chainInfo.chainId,
      params.walletAddress.value,
      params.symbol,
    ])

    return this._executeWithCacheAndFallback({
      cacheKey,
      chainInfo: params.chainInfo,
      action: async (provider) => provider.getTokenBalanceBySymbol(params),
    })
  }

  async getTokenBalanceByAddress(
    params: Parameters<ITokensManager['getTokenBalanceByAddress']>[0],
  ): ReturnType<ITokensManager['getTokenBalanceByAddress']> {
    const cacheKey = this._buildCacheKey('getTokenBalanceByAddress', [
      params.chainInfo.chainId,
      params.walletAddress.value,
      params.address.value,
    ])

    return this._executeWithCacheAndFallback({
      cacheKey,
      chainInfo: params.chainInfo,
      action: async (provider) => provider.getTokenBalanceByAddress(params),
    })
  }

  /** @see ITokensManager.getTokenTotalSupply */
  async getTokenTotalSupply(
    params: Parameters<ITokensManager['getTokenTotalSupply']>[0],
  ): ReturnType<ITokensManager['getTokenTotalSupply']> {
    const cacheKey = this._buildCacheKey('getTokenTotalSupply', [
      params.token.chainInfo.chainId,
      params.token.address.value,
    ])

    return this._executeWithCacheAndFallback({
      cacheKey,
      chainInfo: params.token.chainInfo,
      action: async (provider) => provider.getTokenTotalSupply(params),
    })
  }
}
