import type { Token, ChainId, AddressValue } from '@thesolidchain/sdk-common'

/**
 * ITokensManagerClient
 * Interface for the TokensManager client implementation. Allows to retrieve information for
 *              a Token given its Chain, and its Address or symbol. The difference with the server side
 *              is that it stores the chain info internally and passes it as a parameter to the RPC calls
 * @see ITokensManager
 */
export interface ITokensManagerClient2 {
  /**
   * getTokenBySymbol
   * Retrieves a token by its symbol
   *
   * @param params.symbol The symbol of the token to retrieve
   *
   * @returns The token with the given symbol
   */
  getTokenBySymbol(params: { symbol: string; chainId: ChainId }): Promise<Token>

  /**
   * getTokenByAddress
   * Retrieves a token by its address
   *
   * @param params.address The address of the token to retrieve
   *
   * @returns The token with the given address
   */
  getTokenByAddress(params: { addressValue: AddressValue; chainId: ChainId }): Promise<Token>
}
