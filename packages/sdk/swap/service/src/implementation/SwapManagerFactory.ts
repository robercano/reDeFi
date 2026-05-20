import { type IConfigurationProvider } from '@thesolidchain/configuration-provider-common'
import { SwapManager } from './SwapManager'
import { OneInchSwapProvider } from './oneinch/OneInchSwapProvider'
import { SepoliaSwapProvider } from './sepolia/SepoliaSwapProvider'

/**
 * @class SwapManagerFactory
 * Factory class to create a new SwapManager instance including all supported providers
 */
export class SwapManagerFactory {
  public static newSwapManager(params: { configProvider: IConfigurationProvider }): SwapManager {
    return new SwapManager({
      providers: [new OneInchSwapProvider(params), new SepoliaSwapProvider(params)],
    })
  }
}
