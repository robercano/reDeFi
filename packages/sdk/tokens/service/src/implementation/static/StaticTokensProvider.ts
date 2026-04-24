import { ManagerProviderBase } from '@thesolidchain/api-server-common'
import type { IBlockchainManager } from '@thesolidchain/blockchain-client-common'
import type { IContractsProvider } from '@thesolidchain/contracts-provider-common'
import { IConfigurationProvider } from '@thesolidchain/configuration-provider-common'
import {
  Address,
  AddressType,
  ChainId,
  IAddress,
  IChainInfo,
  IToken,
  Maybe,
  NATIVE_CURRENCY_ADDRESS_LOWERCASE,
  Token,
  TokenAmount,
  TokensProviderType,
} from '@thesolidchain/sdk-common'
import { ITokensProvider } from '@thesolidchain/tokens-common'
import assert from 'assert'
import { StaticTokensData } from './StaticTokensList'
import { TokenData } from './TokensData'
import { TokensMap } from './TokensMap'

/**
 * @name StaticTokensProvider
 * @description Implementation of the ITokensProvider interface for a static provider
 *
 * It contains a pre-built list of tokens per chain ID
 */
export class StaticTokensProvider
  extends ManagerProviderBase<TokensProviderType>
  implements ITokensProvider
{
  private _tokenByChainID: Map<ChainId, TokensMap>
  private readonly _blockchainClientProvider: IBlockchainManager
  private readonly _contractsProvider: IContractsProvider

  /** CONSTRUCTOR */

  /* eslint-disable @typescript-eslint/no-unused-vars */
  constructor(params: {
    configProvider: IConfigurationProvider
    blockchainClientProvider: IBlockchainManager
    contractsProvider: IContractsProvider
  }) {
    super({
      type: TokensProviderType.Static,
      ...params,
    })

    this._blockchainClientProvider = params.blockchainClientProvider
    this._contractsProvider = params.contractsProvider
    this._tokenByChainID = new Map()

    for (const tokenData of StaticTokensData.tokens) {
      this._addTokenData({ tokenData })
    }
  }

  /**
   * @method getSupportedChainIds
   * @description Retrieves the list of supported chain IDs
   * @returns The list of supported chain IDs
   */
  getSupportedChainIds: ITokensProvider['getSupportedChainIds'] = () => {
    return Array.from(this._tokenByChainID.keys())
  }

  /** @see ITokensProvider.getTokenBySymbol */
  getTokenBySymbol: ITokensProvider['getTokenBySymbol'] = async (params) => {
    const { chainInfo } = params

    const tokenMap = this._getTokenMap(params.chainInfo)
    if (!tokenMap) {
      throw new Error(`No token map found for chain: ${chainInfo}`)
    }

    const tokenData = tokenMap.getBySymbol(params.symbol)
    if (!tokenData) {
      throw new Error(`No token data found for symbol: ${params.symbol} on chain: ${chainInfo}`)
    }

    return this._createToken({ chainInfo, tokenData })
  }

  /** @see ITokensProvider.getTokenByAddress */
  getTokenByAddress: ITokensProvider['getTokenByAddress'] = async (params) => {
    const { chainInfo } = params

    const tokenMap = this._getTokenMap(params.chainInfo)
    if (!tokenMap) {
      throw new Error(`No token map found for chain: ${chainInfo}`)
    }

    const tokenData = tokenMap.getByAddress(params.address.value)
    if (!tokenData) {
      throw new Error(
        `No token data found for address: ${params.address.value} on chain: ${chainInfo}`,
      )
    }

    return this._createToken({ chainInfo, tokenData })
  }

  /** @see ITokensProvider.getTokenByName */
  getTokenByName: ITokensProvider['getTokenByName'] = async (params) => {
    const { chainInfo } = params

    console.log('Token name:', params.name)

    const tokenMap = this._getTokenMap(params.chainInfo)
    if (!tokenMap) {
      throw new Error(`No token map found for chain: ${chainInfo}`)
    }

    const tokenData = tokenMap.getByName(params.name)
    if (!tokenData) {
      throw new Error(`No token data found for name: ${params.name} on chain: ${chainInfo}`)
    }

    return this._createToken({ chainInfo, tokenData })
  }

  /** @see ITokensProvider.getTokenBalanceBySymbol */
  getTokenBalanceBySymbol: ITokensProvider['getTokenBalanceBySymbol'] = async (params) => {
    const token = await this.getTokenBySymbol({ chainInfo: params.chainInfo, symbol: params.symbol })

    const balance = await this._getTokenBalance({
      chainInfo: params.chainInfo,
      token,
      walletAddress: params.walletAddress,
    })

    return TokenAmount.createFromBaseUnit({ token, amount: balance.toString() })
  }

  /** @see ITokensProvider.getTokenBalanceByAddress */
  getTokenBalanceByAddress: ITokensProvider['getTokenBalanceByAddress'] = async (params) => {
    const token = await this.getTokenByAddress({ chainInfo: params.chainInfo, address: params.address })

    const balance = await this._getTokenBalance({
      chainInfo: params.chainInfo,
      token,
      walletAddress: params.walletAddress,
    })

    return TokenAmount.createFromBaseUnit({ token, amount: balance.toString() })
  }

  /** @see ITokensProvider.getTokenTotalSupply */
  getTokenTotalSupply: ITokensProvider['getTokenTotalSupply'] = async (params) => {
    const { token } = params

    const client = this._blockchainClientProvider.getBlockchainClient({
      chainInfo: token.chainInfo,
    })

    if (token.address.value.toLowerCase() === NATIVE_CURRENCY_ADDRESS_LOWERCASE) {
      throw new Error(`Total supply is not supported for native currency`)
    }

    let totalSupply: bigint | undefined = 0n
    try {
      const erc20 = await this._contractsProvider.getErc20Contract({
        chainInfo: token.chainInfo,
        address: token.address,
      })
      totalSupply = await erc20.totalSupply()
    } catch (error) {
      console.log('Error getting token total supply:', error)
    }

    return TokenAmount.createFromBaseUnit({ token, amount: (totalSupply ?? 0n).toString() })
  }

  private async _getTokenBalance(params: {
    chainInfo: IChainInfo
    token: IToken
    walletAddress: IAddress
  }): Promise<bigint> {
    const { chainInfo, token, walletAddress } = params

    const client = this._blockchainClientProvider.getBlockchainClient({ chainInfo })

    // check token address is native currency address
    if (token.address.value.toLowerCase() === NATIVE_CURRENCY_ADDRESS_LOWERCASE) {
      // check native currency balance
      return await client.getBalance({ address: walletAddress.value })
    }

    // check erc20 token balance using contracts provider
    const erc20 = await this._contractsProvider.getErc20Contract({
      chainInfo,
      address: token.address,
    })
    return await erc20.balanceOf(walletAddress.value)
  }

  /** PRIVATE METHODS */

  /**
   * @method _addTokenData
   * @description Adds a token data to the internal map indexed by the Chain ID
   * @param tokenData The token data to add
   */
  private _addTokenData(params: { tokenData: TokenData }) {
    const { tokenData } = params

    if (!this._tokenByChainID.has(tokenData.chainId)) {
      this._tokenByChainID.set(tokenData.chainId, new TokensMap({ chainID: tokenData.chainId }))
    }

    const tokensMap = this._tokenByChainID.get(tokenData.chainId)
    assert(tokensMap !== undefined, 'TokensMap should have been initialized')

    tokensMap.add({ tokenData })
  }

  /**
   * @method _getTokenMap
   * @description Retrieves the token map for a given chain ID
   * @param chainInfo The chain information from which to extract the Chain ID
   * @returns The token map for the given chain ID or undefined if it does not exist
   */
  private _getTokenMap(chainInfo: IChainInfo): Maybe<TokensMap> {
    return this._tokenByChainID.get(chainInfo.chainId)
  }

  /**
   * @method _createToken
   * @description Creates a Token instance from the given TokenData
   * @param chainInfo The chain information to create the Token from
   * @param tokenData The token data to create the Token from
   * @returns The created Token instance
   */
  private _createToken(params: { chainInfo: IChainInfo; tokenData: TokenData }): IToken {
    const { chainInfo, tokenData } = params

    return Token.createFrom({
      address: Address.createFrom({ value: tokenData.address, type: AddressType.Ethereum }),
      chainInfo: chainInfo,
      decimals: tokenData.decimals,
      name: tokenData.name,
      symbol: tokenData.symbol,
      logoURI: tokenData.logoURI,
    })
  }
}
