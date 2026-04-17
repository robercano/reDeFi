import { ManagerWithProvidersBase } from '@thesolidchain/api-server-common'
import { TokensProviderType } from '@thesolidchain/sdk-common'
import { ITokensManager, ITokensProvider } from '@thesolidchain/tokens-common'

/**
 * @name TokensManager
 * @description Implementation of the ITokensManager interface. It allows to retrieve information for a Token
 */
export class TokensManager
  extends ManagerWithProvidersBase<TokensProviderType, ITokensProvider>
  implements ITokensManager
{
  /** CONSTRUCTOR */
  constructor(params: { providers: ITokensProvider[] }) {
    super(params)
  }

  /** PUBLIC METHODS */

  /** @see ITokensManager.getTokenBySymbol */
  getTokenBySymbol(
    params: Parameters<ITokensManager['getTokenBySymbol']>[0],
  ): ReturnType<ITokensManager['getTokenBySymbol']> {
    const provider = this._getBestProvider({ chainInfo: params.chainInfo })
    return provider.getTokenBySymbol(params)
  }

  /** @see ITokensManager.getTokenByAddress */
  getTokenByAddress(
    params: Parameters<ITokensManager['getTokenByAddress']>[0],
  ): ReturnType<ITokensManager['getTokenByAddress']> {
    const provider = this._getBestProvider({ chainInfo: params.chainInfo })
    return provider.getTokenByAddress(params)
  }

  /** @see ITokensManager.getTokenByName */
  getTokenByName(
    params: Parameters<ITokensManager['getTokenByName']>[0],
  ): ReturnType<ITokensManager['getTokenByName']> {
    const provider = this._getBestProvider({ chainInfo: params.chainInfo })
    return provider.getTokenByName(params)
  }

  /** @see ITokensManager.getTokenBalanceBySymbol */
  async getTokenBalanceBySymbol(
    params: Parameters<ITokensManager['getTokenBalanceBySymbol']>[0],
  ): ReturnType<ITokensManager['getTokenBalanceBySymbol']> {
    const provider = this._getBestProvider({ chainInfo: params.chainInfo })
    return provider.getTokenBalanceBySymbol(params)
  }

  /** @see ITokensManager.getTokenBalanceByAddress */
  async getTokenBalanceByAddress(
    params: Parameters<ITokensManager['getTokenBalanceByAddress']>[0],
  ): ReturnType<ITokensManager['getTokenBalanceByAddress']> {
    const provider = this._getBestProvider({ chainInfo: params.chainInfo })
    return provider.getTokenBalanceByAddress(params)
  }

  /** @see ITokensManager.getTokenTotalSupply */
  async getTokenTotalSupply(
    params: Parameters<ITokensManager['getTokenTotalSupply']>[0],
  ): ReturnType<ITokensManager['getTokenTotalSupply']> {
    const provider = this._getBestProvider({ chainInfo: params.token.chainInfo })
    return provider.getTokenTotalSupply(params)
  }
}
