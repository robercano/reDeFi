import { ISDKManager } from '@thesolidchain/sdk-client'
import { ILendingPoolIdData, ILendingPool, Maybe } from '@thesolidchain/sdk-common'

export const getLendingPoolHandler =
  (sdk: ISDKManager) =>
  async (params: { poolId: ILendingPoolIdData }): Promise<Maybe<ILendingPool>> => {
    return sdk.protocols.getLendingPool(params)
  }
