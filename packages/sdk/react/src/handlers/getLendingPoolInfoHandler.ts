import { ISDKManager } from '@thesolidchain/sdk-client'
import { ILendingPoolIdData, ILendingPoolInfo, Maybe } from '@thesolidchain/sdk-common'

export const getLendingPoolInfoHandler =
  (sdk: ISDKManager) =>
  async (params: { poolId: ILendingPoolIdData }): Promise<Maybe<ILendingPoolInfo>> => {
    return sdk.protocols.getLendingPoolInfo(params)
  }
