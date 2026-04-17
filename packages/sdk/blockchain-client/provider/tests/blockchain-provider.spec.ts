import { IBlockchainClientProvider } from '@thesolidchain/blockchain-client-common'
import { IConfigurationProvider } from '@thesolidchain/configuration-provider-common'
import { ChainFamilyMap } from '@thesolidchain/sdk-common'
import { BlockchainClientProvider } from '../src/implementation/BlockchainClientProvider'

describe('Blockchain Provider', () => {
  let blockchainClientProvider: IBlockchainClientProvider

  beforeEach(() => {
    const configProvider = {
      getConfigurationItem: (params: { name: string }) => {
        if (params.name === 'SDK_RPC_GATEWAY') {
          return 'https://rpc-gateway-url.com'
        }

        return undefined
      },
    } as unknown as IConfigurationProvider

    blockchainClientProvider = new BlockchainClientProvider({ configProvider })
  })

  it('should return a provider for supported chains', async () => {
    const chainInfo = ChainFamilyMap.Base.Base
    const baseClient = blockchainClientProvider.getBlockchainClient({ chainInfo: chainInfo })

    expect(baseClient.chain?.id).toEqual(chainInfo.chainId)
  })

  it('should return a provider for custom chains', async () => {
    const chainInfo = ChainFamilyMap.Base.Base
    const baseClient = blockchainClientProvider.getBlockchainClient({
      rpcUrl: 'https://custom-rpc.com',
      chainInfo: chainInfo,
    })

    expect(baseClient.chain?.id).toEqual(chainInfo.chainId)
  })
})
