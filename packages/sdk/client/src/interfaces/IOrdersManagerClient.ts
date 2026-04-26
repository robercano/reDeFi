import {
  Maybe,
  Order,
} from '@thesolidchain/sdk-common'
import { IBuildOrderInputs } from '@thesolidchain/order-planner-common'

/**
 * @interface IOrdersManagerClient
 * @description Interface of the OrdersManager for the SDK Client. Allows to build orders to execute transactions.
 */
export interface IOrdersManagerClient {
  /**
   * @method buildOrder
   * @description Build an order to be executed by the user
   * @param {IBuildOrderInputs} params The inputs required to build the order
   * @returns {Promise<Maybe<Order>>} The built order
   */
  buildOrder(params: IBuildOrderInputs): Promise<Maybe<Order>>
}
