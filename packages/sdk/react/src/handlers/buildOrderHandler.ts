import { ISDKManager } from '@thesolidchain/sdk-client'
import { IBuildOrderInputs } from '@thesolidchain/order-planner-common'
import { Order, Maybe } from '@thesolidchain/sdk-common'

export const buildOrderHandler =
  (sdk: ISDKManager) =>
  async (params: IBuildOrderInputs): Promise<Maybe<Order>> => {
    return sdk.orders.buildOrder(params)
  }
