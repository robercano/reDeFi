import type { ISDKManager } from '@thesolidchain/sdk-client'

export const cancelOrderHandler = (sdk: ISDKManager) => {
  return async (
    params: Parameters<ISDKManager['intentSwaps']['cancelOrder']>[0],
  ): ReturnType<ISDKManager['intentSwaps']['cancelOrder']> => {
    return sdk.intentSwaps.cancelOrder(params)
  }
}
