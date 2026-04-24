import { IConfigurationProvider } from '@thesolidchain/configuration-provider-common'
import {
  Address,
  AddressType,
  ChainId,
  IAddress,
  IChainInfo,
  IToken,
  TokensProviderType,
  Token,
  TokenAmount,
} from '@thesolidchain/sdk-common'
import { ManagerProviderBase } from '@thesolidchain/api-server-common'
import { ITokensProvider } from '@thesolidchain/tokens-common'

export class MockTokensProvider
  extends ManagerProviderBase<TokensProviderType>
  implements ITokensProvider
{
  type: TokensProviderType = TokensProviderType.Static

  constructor() {
    super({
      type: TokensProviderType.Static,
      configProvider: undefined as unknown as IConfigurationProvider,
    })
  }

  getSupportedChainIds(): ChainId[] {
    return [1]
  }

  async getTokenBySymbol(params: { chainInfo: IChainInfo; symbol: string }): Promise<IToken> {
    return Token.createFrom({
      name: 'MockToken',
      symbol: params.symbol,
      address: Address.createFrom({
        value: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
        type: AddressType.Ethereum,
      }),
      chainInfo: params.chainInfo,
      decimals: 18,
    })
  }

  async getTokenByAddress(params: { chainInfo: IChainInfo; address: IAddress }): Promise<IToken> {
    return Token.createFrom({
      name: 'MockToken',
      symbol: 'MOCK',
      address: params.address,
      chainInfo: params.chainInfo,
      decimals: 18,
    })
  }

  async getTokenByName(params: { chainInfo: IChainInfo; name: string }): Promise<IToken> {
    return Token.createFrom({
      name: params.name,
      symbol: 'MOCK',
      address: Address.createFrom({
        value: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
        type: AddressType.Ethereum,
      }),
      chainInfo: params.chainInfo,
      decimals: 18,
    })
  }

  async getTokenBalanceBySymbol(params: {
    chainInfo: IChainInfo
    symbol: string
    walletAddress: IAddress
  }) {
    return TokenAmount.createFrom({
      token: await this.getTokenBySymbol({ chainInfo: params.chainInfo, symbol: params.symbol }),
      amount: '1000000000000000000',
    })
  }

  async getTokenBalanceByAddress(params: {
    chainInfo: IChainInfo
    address: IAddress
    walletAddress: IAddress
  }) {
    return TokenAmount.createFrom({
      token: await this.getTokenByAddress({ chainInfo: params.chainInfo, address: params.address }),
      amount: '1000000000000000000',
    })
  }

  async getTokenTotalSupply(params: { token: IToken }) {
    return TokenAmount.createFrom({
      token: params.token,
      amount: '1000000000000000000000000', // Mock 1 million tokens supply
    })
  }
}
