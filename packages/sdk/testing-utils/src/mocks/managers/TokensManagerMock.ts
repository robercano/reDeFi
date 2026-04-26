import type { IBlockchainClientProvider } from '@thesolidchain/blockchain-client-common'
import type { IConfigurationProvider } from '@thesolidchain/configuration-provider-common'
import { IContractsProvider } from '@thesolidchain/contracts-provider-common'
import { DatabaseTokensProvider, TokensManager } from '@thesolidchain/tokens-service'
import { IChainInfo, IAddress, IToken, Token, Address } from '@thesolidchain/sdk-common'

export class TokensManagerMock extends TokensManager {
  constructor() {
    super({
      providers: [
        new DatabaseTokensProvider({
          configProvider: {
            getConfigurationItem: () => 'mock-table-name',
          } as unknown as IConfigurationProvider,
          blockchainClientProvider: {} as IBlockchainClientProvider,
          contractsProvider: {} as IContractsProvider,
        }),
      ],
    })
  }

  override async getTokenBySymbol(params: { chainInfo: IChainInfo; symbol: string }): Promise<IToken> {
    return Token.createFrom({
      chainInfo: params.chainInfo,
      address: Address.createFromEthereum({ value: '0x0000000000000000000000000000000000000000' }),
      symbol: params.symbol,
      name: params.symbol,
      decimals: 18,
    })
  }

  override async getTokenByAddress(params: { chainInfo: IChainInfo; address: IAddress }): Promise<IToken> {
    return Token.createFrom({
      chainInfo: params.chainInfo,
      address: params.address,
      symbol: 'MOCK',
      name: 'Mock Token',
      decimals: 18,
    })
  }
}
