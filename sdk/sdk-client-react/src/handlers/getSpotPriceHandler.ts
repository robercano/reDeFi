import type { ISDKAdminManager, ISDKManager } from '@thesolidchain/sdk-client'
import { type Denomination, type IToken } from '@thesolidchain/sdk-common'

export const getSpotPriceHandler =
  (sdk: ISDKManager | ISDKAdminManager) =>
  async ({ baseToken, denomination }: { baseToken: IToken; denomination?: Denomination }) => {
    const position = await sdk.oracle.getSpotPrice({
      baseToken,
      denomination,
    })
    return position
  }
