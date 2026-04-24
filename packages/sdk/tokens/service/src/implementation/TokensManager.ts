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
  async getTokenBySymbol(
    params: Parameters<ITokensManager['getTokenBySymbol']>[0],
  ): ReturnType<ITokensManager['getTokenBySymbol']> {
    const providers = this._getProvidersForChain(params.chainInfo)
    let lastError: unknown

    for (const provider of providers) {
      try {
        return await provider.getTokenBySymbol(params)
      } catch (error) {
        lastError = error
      }
    }
    throw lastError || new Error(`Failed to get token by symbol: ${params.symbol}`)
  }

  /** @see ITokensManager.getTokenByAddress */
  async getTokenByAddress(
    params: Parameters<ITokensManager['getTokenByAddress']>[0],
  ): ReturnType<ITokensManager['getTokenByAddress']> {
    const providers = this._getProvidersForChain(params.chainInfo)
    let lastError: unknown

    for (const provider of providers) {
      try {
        return await provider.getTokenByAddress(params)
      } catch (error) {
        lastError = error
      }
    }
    throw lastError || new Error(`Failed to get token by address: ${params.address.value}`)
  }

  /** @see ITokensManager.getTokenByName */
  async getTokenByName(
    params: Parameters<ITokensManager['getTokenByName']>[0],
  ): ReturnType<ITokensManager['getTokenByName']> {
    const providers = this._getProvidersForChain(params.chainInfo)
    let lastError: unknown

    for (const provider of providers) {
      try {
        return await provider.getTokenByName(params)
      } catch (error) {
        lastError = error
      }
    }
    throw lastError || new Error(`Failed to get token by name: ${params.name}`)
  }

  async getTokenBalanceBySymbol(
    params: Parameters<ITokensManager['getTokenBalanceBySymbol']>[0],
  ): ReturnType<ITokensManager['getTokenBalanceBySymbol']> {
    const providers = this._getProvidersForChain(params.chainInfo)
    let lastError: unknown

    for (const provider of providers) {
      try {
        return await provider.getTokenBalanceBySymbol(params)
      } catch (error) {
        lastError = error
      }
    }
    throw lastError || new Error(`Failed to get token balance by symbol: ${params.symbol}`)
  }

  async getTokenBalanceByAddress(
    params: Parameters<ITokensManager['getTokenBalanceByAddress']>[0],
  ): ReturnType<ITokensManager['getTokenBalanceByAddress']> {
    const providers = this._getProvidersForChain(params.chainInfo)
    let lastError: unknown

    for (const provider of providers) {
      try {
        return await provider.getTokenBalanceByAddress(params)
      } catch (error) {
        lastError = error
      }
    }
    throw lastError || new Error(`Failed to get token balance by address: ${params.address.value}`)
  }

  /** @see ITokensManager.getTokenTotalSupply */
  async getTokenTotalSupply(
    params: Parameters<ITokensManager['getTokenTotalSupply']>[0],
  ): ReturnType<ITokensManager['getTokenTotalSupply']> {
    const providers = this._getProvidersForChain(params.token.chainInfo)
    let lastError: unknown

    for (const provider of providers) {
      try {
        return await provider.getTokenTotalSupply(params)
      } catch (error) {
        lastError = error
      }
    }
    throw lastError || new Error(`Failed to get token total supply for: ${params.token.symbol}`)
  }

  private _getProvidersForChain(chainInfo: Parameters<ITokensManager['getTokenBySymbol']>[0]['chainInfo']) {
    // @ts-ignore: Accessing protected property from base class
    const providers = this._providersByChainId.get(chainInfo.chainId) || []
    if (providers.length === 0) {
      throw new Error(`No provider found for chainId: ${chainInfo.chainId}`)
    }
    return providers
  }
}
