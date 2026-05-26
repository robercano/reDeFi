import type { ISDKManager } from '@thesolidchain/sdk-client'

export const checkOrderHandler = (sdk: ISDKManager) => {
  return async (
    params: Parameters<ISDKManager['intentSwaps']['checkOrder']>[0],
  ): ReturnType<ISDKManager['intentSwaps']['checkOrder']> => {
    return sdk.intentSwaps.checkOrder(params)
  }
}
