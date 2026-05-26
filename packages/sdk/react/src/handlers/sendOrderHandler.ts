import type { ISDKManager } from '@thesolidchain/sdk-client'

export const sendOrderHandler = (sdk: ISDKManager) => {
  return async (
    params: Parameters<ISDKManager['intentSwaps']['sendOrder']>[0],
  ): ReturnType<ISDKManager['intentSwaps']['sendOrder']> => {
    return sdk.intentSwaps.sendOrder(params)
  }
}
