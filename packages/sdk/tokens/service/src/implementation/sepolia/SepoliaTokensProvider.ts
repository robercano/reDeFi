import { ManagerProviderBase } from '@thesolidchain/api-server-common'
import type { IBlockchainManager } from '@thesolidchain/blockchain-client-common'
import { IConfigurationProvider } from '@thesolidchain/configuration-provider-common'
import type { IContractsProvider } from '@thesolidchain/contracts-provider-common'
import {
  Address,
  AddressType,
  IAddress,
  IChainInfo,
  IToken,
  NATIVE_CURRENCY_ADDRESS_LOWERCASE,
  Token,
  TokenAmount,
  TokensProviderType,
  ChainIds,
  ChainId,
} from '@thesolidchain/sdk-common'
import { ITokensProvider } from '@thesolidchain/tokens-common'

const SEPOLIA_TOKENS_MOCK_DATA = [
  {
    address: '0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238',
    decimals: 6,
    name: 'USD Coin',
    symbol: 'USDC',
  },
  {
    address: '0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14',
    decimals: 18,
    name: 'Wrapped Ether',
    symbol: 'WETH',
  },
  {
    address: '0x27CEA6Eb8a21Aae05Eb29C91c5CA10592892F584',
    decimals: 6,
    name: 'Tether USD',
    symbol: 'USDT',
  },
  {
    address: '0xFF34B3d4Aee8ddCd6F9AFFFB6Fe49bD371b8a016',
    decimals: 18,
    name: 'Dai Stablecoin',
    symbol: 'DAI',
  },
]

export class SepoliaTokensProvider
  extends ManagerProviderBase<TokensProviderType>
  implements ITokensProvider
{
  private readonly _blockchainClientProvider: IBlockchainManager
  private readonly _contractsProvider: IContractsProvider

  private readonly _configProvider: IConfigurationProvider

  constructor(params: {
    configProvider: IConfigurationProvider
    blockchainClientProvider: IBlockchainManager
    contractsProvider: IContractsProvider
  }) {
    super({
      type: TokensProviderType.Static,
      ...params,
    })

    this._configProvider = params.configProvider
    this._blockchainClientProvider = params.blockchainClientProvider
    this._contractsProvider = params.contractsProvider
  }

  getSupportedChainIds: ITokensProvider['getSupportedChainIds'] = () => {
    return [ChainIds.Sepolia]
  }

  getTokenBySymbol: ITokensProvider['getTokenBySymbol'] = async (params) => {
    const { chainInfo, symbol } = params

    if (chainInfo.chainId !== ChainIds.Sepolia) {
      throw new Error(`SepoliaTokensProvider only supports Sepolia (Chain ID: ${ChainIds.Sepolia})`)
    }

    const tokenData = SEPOLIA_TOKENS_MOCK_DATA.find(
      (t) => t.symbol.toUpperCase() === symbol.toUpperCase(),
    )

    if (!tokenData) {
      throw new Error(`No token data found for symbol: ${symbol} on chain: ${chainInfo.chainId}`)
    }

    return this._createToken({ chainInfo, tokenData })
  }

  getTokenByAddress: ITokensProvider['getTokenByAddress'] = async (params) => {
    const { chainInfo, address } = params

    if (chainInfo.chainId !== ChainIds.Sepolia) {
      throw new Error(`SepoliaTokensProvider only supports Sepolia (Chain ID: ${ChainIds.Sepolia})`)
    }

    const addrLower = address.value.toLowerCase()
    const tokenData = SEPOLIA_TOKENS_MOCK_DATA.find((t) => t.address.toLowerCase() === addrLower)

    if (!tokenData) {
      throw new Error(
        `No token data found for address: ${address.value} on chain: ${chainInfo.chainId}`,
      )
    }

    return this._createToken({ chainInfo, tokenData })
  }

  getTokenByName: ITokensProvider['getTokenByName'] = async (params) => {
    const { chainInfo, name } = params

    if (chainInfo.chainId !== ChainIds.Sepolia) {
      throw new Error(`SepoliaTokensProvider only supports Sepolia (Chain ID: ${ChainIds.Sepolia})`)
    }

    const tokenData = SEPOLIA_TOKENS_MOCK_DATA.find(
      (t) => t.name.toLowerCase() === name.toLowerCase(),
    )

    if (!tokenData) {
      throw new Error(`No token data found for name: ${name} on chain: ${chainInfo.chainId}`)
    }

    return this._createToken({ chainInfo, tokenData })
  }

  getTokenBalanceBySymbol: ITokensProvider['getTokenBalanceBySymbol'] = async (params) => {
    const token = await this.getTokenBySymbol({
      chainInfo: params.chainInfo,
      symbol: params.symbol,
    })

    const balance = await this._getTokenBalance({
      chainInfo: params.chainInfo,
      token,
      walletAddress: params.walletAddress,
    })

    return TokenAmount.createFromBaseUnit({ token, amount: balance.toString() })
  }

  getTokenBalanceByAddress: ITokensProvider['getTokenBalanceByAddress'] = async (params) => {
    const token = await this.getTokenByAddress({
      chainInfo: params.chainInfo,
      address: params.address,
    })

    const balance = await this._getTokenBalance({
      chainInfo: params.chainInfo,
      token,
      walletAddress: params.walletAddress,
    })

    return TokenAmount.createFromBaseUnit({ token, amount: balance.toString() })
  }

  getTokenTotalSupply: ITokensProvider['getTokenTotalSupply'] = async (params) => {
    const { token } = params

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

    if (token.address.value.toLowerCase() === NATIVE_CURRENCY_ADDRESS_LOWERCASE) {
      return await client.getBalance({ address: walletAddress.value })
    }

    const erc20 = await this._contractsProvider.getErc20Contract({
      chainInfo,
      address: token.address,
    })
    return await erc20.balanceOf(walletAddress.value)
  }

  private _createToken(params: {
    chainInfo: IChainInfo
    tokenData: Record<string, unknown>
  }): IToken {
    const { chainInfo, tokenData } = params

    return Token.createFrom({
      address: Address.createFrom({
        value: tokenData.address as `0x${string}`,
        type: AddressType.Ethereum,
      }),
      chainInfo: chainInfo,
      decimals: tokenData.decimals as number,
      name: tokenData.name as string,
      symbol: tokenData.symbol as string,
      logoURI: tokenData.logoURI as string | undefined,
    })
  }
}
