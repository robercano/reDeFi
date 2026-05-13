import { IBlockchainClientProvider } from '@thesolidchain/blockchain-client-common'
import { IConfigurationProvider } from '@thesolidchain/configuration-provider-common'
import { ChainFamilyMap } from '@thesolidchain/sdk-common'
import { BlockchainManagerFactory } from '../src/implementation/BlockchainManagerFactory'

describe('Blockchain Provider', () => {
  let blockchainClientProvider: IBlockchainClientProvider

  beforeEach(() => {
    const configProvider = {
      getConfigurationItem: (params: { name: string }) => {
        if (params.name === 'ALCHEMY_ENDPOINT_API_KEY') {
          return 'alchemy_test_key'
        }
        if (params.name === 'INFURA_ENDPOINT_API_KEY') {
          return 'infura_test_key'
        }
        return undefined
      },
    } as unknown as IConfigurationProvider

    blockchainClientProvider = BlockchainManagerFactory.newBlockchainManager({ configProvider })
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
