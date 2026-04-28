import { ChainId, type ITokenAmount } from '@thesolidchain/sdk-common'
import { IAddress, IChainInfo, IToken } from '@thesolidchain/sdk-common'
import { TokensProviderType } from '@thesolidchain/sdk-common'
import { IManagerProvider } from '@thesolidchain/api-server-common'

/**
 * ITokensProvider
 * Interface for providers of token information
 */
export interface ITokensProvider extends IManagerProvider<TokensProviderType> {
  /**
   * type
   * The type of the tokens provider, used to identify the provider
   */
  type: TokensProviderType

  /**
   * getSupportedChainIds
   * Retrieves the list of supported chain IDs
   * @returns The list of supported chain IDs
   */
  getSupportedChainIds(): ChainId[]

  /**
   * getTokenBySymbol
   * Retrieves a token by its symbol
   *
   * @param params.chainInfo The chain information of the token to retrieve
   * @param params.symbol The symbol of the token to retrieve
   *
   * @returns The token with the given symbol
   */
  getTokenBySymbol(params: { chainInfo: IChainInfo; symbol: string }): Promise<IToken>

  /**
   * getTokenByAddress
   * Retrieves a token by its address
   *
   * @param params.chainInfo The chain information of the token to retrieve
   * @param params.address The address of the token to retrieve
   *
   * @returns The token with the given address
   */
  getTokenByAddress(params: { chainInfo: IChainInfo; address: IAddress }): Promise<IToken>

  /**
   * getTokenByName
   * Retrieves a token by its name
   *
   * @param params.chainInfo The chain information of the token to retrieve
   * @param params.name The name of the token to retrieve
   *
   * @returns The token with the given name
   */
  getTokenByName(params: { chainInfo: IChainInfo; name: string }): Promise<IToken>

  /**
   * getTokenBalanceBySymbol
   * Retrieves the token balance for a given wallet address and token symbol
   *
   * @param params.chainInfo The chain information of the token to retrieve
   * @param params.symbol The symbol of the token to retrieve the balance for
   * @param params.walletAddress The wallet address to retrieve the token balance for
   *
   * @returns The token balance as a string
   */
  getTokenBalanceBySymbol(params: {
    chainInfo: IChainInfo
    symbol: string
    walletAddress: IAddress
  }): Promise<ITokenAmount>

  /**
   * getTokenBalanceByAddress
   * Retrieves the token balance for a given wallet address and token address
   *
   * @param params.chainInfo The chain information of the token to retrieve
   * @param params.address The address of the token to retrieve the balance for
   * @param params.walletAddress The wallet address to retrieve the token balance for
   *
   * @returns The token balance as a string
   */
  getTokenBalanceByAddress(params: {
    chainInfo: IChainInfo
    address: IAddress
    walletAddress: IAddress
  }): Promise<ITokenAmount>

  /**
   * getTokenTotalSupply
   * Retrieves the total supply for a given token
   *
   * @param params.token The token to retrieve the total supply for
   *
   * @returns The total supply of the token as an ITokenAmount
   */
  getTokenTotalSupply(params: { token: IToken }): Promise<ITokenAmount>
}
