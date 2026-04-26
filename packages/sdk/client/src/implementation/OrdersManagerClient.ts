import { Maybe, Order } from '@thesolidchain/sdk-common'
import { IBuildOrderInputs } from '@thesolidchain/order-planner-common'
import { IOrdersManagerClient } from '../interfaces/IOrdersManagerClient'
import { RPCMainClientType } from '../rpc/SDKMainClient'

/** @see IOrdersManagerClient */
export class OrdersManagerClient implements IOrdersManagerClient {
  public constructor(private readonly params: { rpcClient: RPCMainClientType }) {}

  /** @see IOrdersManagerClient.buildOrder */
  public async buildOrder(params: IBuildOrderInputs): Promise<Maybe<Order>> {
    return this.params.rpcClient.orders.buildOrder.mutate(params)
  }
}
