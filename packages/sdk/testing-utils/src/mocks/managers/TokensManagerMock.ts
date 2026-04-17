import type { IBlockchainClientProvider } from '@thesolidchain/blockchain-client-common'
import type { IConfigurationProvider } from '@thesolidchain/configuration-provider-common'
import { TokensManager, StaticTokensProvider } from '@thesolidchain/tokens-service'

export class TokensManagerMock extends TokensManager {
  constructor() {
    super({
      providers: [
        new StaticTokensProvider({
          configProvider: {} as IConfigurationProvider,
          blockchainClientProvider: {} as IBlockchainClientProvider,
        }),
      ],
    })
  }
}
