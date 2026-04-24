import { ManagerWithFallbackProvidersBase } from '@thesolidchain/api-server-common'
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
  /** CONSTRUCTOR */
  constructor(params: { providers: ITokensProvider[] }) {
    super(params)
  }

  /** PUBLIC METHODS */

  /** @see ITokensManager.getTokenBySymbol */
  async getTokenBySymbol(
    params: Parameters<ITokensManager['getTokenBySymbol']>[0],
  ): ReturnType<ITokensManager['getTokenBySymbol']> {
    return this._executeWithFallback({
      chainInfo: params.chainInfo,
      action: async (provider) => provider.getTokenBySymbol(params),
    })
  }

  /** @see ITokensManager.getTokenByAddress */
  async getTokenByAddress(
    params: Parameters<ITokensManager['getTokenByAddress']>[0],
  ): ReturnType<ITokensManager['getTokenByAddress']> {
    return this._executeWithFallback({
      chainInfo: params.chainInfo,
      action: async (provider) => provider.getTokenByAddress(params),
    })
  }

  /** @see ITokensManager.getTokenByName */
  async getTokenByName(
    params: Parameters<ITokensManager['getTokenByName']>[0],
  ): ReturnType<ITokensManager['getTokenByName']> {
    return this._executeWithFallback({
      chainInfo: params.chainInfo,
      action: async (provider) => provider.getTokenByName(params),
    })
  }

  async getTokenBalanceBySymbol(
    params: Parameters<ITokensManager['getTokenBalanceBySymbol']>[0],
  ): ReturnType<ITokensManager['getTokenBalanceBySymbol']> {
    return this._executeWithFallback({
      chainInfo: params.chainInfo,
      action: async (provider) => provider.getTokenBalanceBySymbol(params),
    })
  }

  async getTokenBalanceByAddress(
    params: Parameters<ITokensManager['getTokenBalanceByAddress']>[0],
  ): ReturnType<ITokensManager['getTokenBalanceByAddress']> {
    return this._executeWithFallback({
      chainInfo: params.chainInfo,
      action: async (provider) => provider.getTokenBalanceByAddress(params),
    })
  }

  /** @see ITokensManager.getTokenTotalSupply */
  async getTokenTotalSupply(
    params: Parameters<ITokensManager['getTokenTotalSupply']>[0],
  ): ReturnType<ITokensManager['getTokenTotalSupply']> {
    return this._executeWithFallback({
      chainInfo: params.token.chainInfo,
      action: async (provider) => provider.getTokenTotalSupply(params),
    })
  }
}
