import type { Address, IToken, ITokenAmount } from '@thesolidchain/sdk-common'

/**
 * @name ITokensManagerClient
 * @description Interface for the TokensManager client implementation. Allows to retrieve information for
 *              a Token given its Chain, and its Address or symbol. The difference with the server side
 *              is that it stores the chain info internally and passes it as a parameter to the RPC calls
 * @see ITokensManager
 */
export interface ITokensManagerClient {
  /**
   * @method getTokenBySymbol
   * @description Retrieves a token by its symbol
   *
   * @param symbol The symbol of the token to retrieve
   *
   * @returns The token with the given symbol
   */
  getTokenBySymbol(params: { symbol: string }): Promise<IToken>

  /**
   * @method getTokenByAddress
   * @description Retrieves a token by its address
   *
   * @param address The address of the token to retrieve
   *
   * @returns The token with the given address
   */
  getTokenByAddress(params: { address: Address }): Promise<IToken>

  /**
   * @method getTokenByName
   * @description Retrieves a token by its name
   *
   * @param name The name of the token to retrieve
   *
   * @returns The token with the given name
   */
  getTokenByName(params: { name: string }): Promise<IToken>

  /**
   * @method getTokenTotalSupply
   * @description Retrieves the total supply for a given token
   *
   * @param token The token whose supply should be retrieved
   *
   * @returns The token supply wrapped inside an ITokenAmount
   */
  getTokenTotalSupply(params: { token: IToken }): Promise<ITokenAmount>
}
