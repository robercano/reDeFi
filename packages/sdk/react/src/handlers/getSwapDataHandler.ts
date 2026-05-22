import type { ISDKManager } from '@thesolidchain/sdk-client'
import type { IAddress, IPercentage, IToken, ITokenAmount, SwapData, SwapProviderType } from '@thesolidchain/sdk-common'

/**
 * @name getSwapDataHandler
 * @description Creates a bound function to retrieve explicit swap execution data bypassing the simulator.
 *
 * @param sdk - The initialized SDK Client proxy.
 * @returns A function that fetches the swap calldata.
 */
export const getSwapDataHandler = (sdk: ISDKManager) => {
  return async (params: {
    fromAmount: ITokenAmount
    toToken: IToken
    recipient: IAddress
    slippage: IPercentage
    forceUseProvider?: SwapProviderType
  }): Promise<SwapData> => {
    return sdk.swaps.getSwapDataExactInput(params)
  }
}
