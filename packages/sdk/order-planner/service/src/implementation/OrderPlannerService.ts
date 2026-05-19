import {
  BuildOrderParams,
  IOrderPlanner,
  IOrderPlannerService,
  OrderPlannerClass,
} from '@thesolidchain/order-planner-common'
import { Maybe, Order, SDKError, SDKErrorType, SimulationType } from '@thesolidchain/sdk-common'
import { assert } from 'console'
import { SwapOrderPlanner } from '../planners/SwapOrderPlanner'

/**
 * OrderPlannerService
 * Concrete implementation of IOrderPlannerService. Acts as a registry and router
 * for specific order planner classes based on the type of simulation requested.
 * By delegating to the appropriate IOrderPlanner, it generates the correct on-chain Order.
 */
export class OrderPlannerService implements IOrderPlannerService {
  /** Map of order planners per simulation type, used to resolve which planner will generate the order */
  readonly _orderPlanners: Map<SimulationType, IOrderPlanner> = new Map()

  /**
   * Initializes the OrderPlannerService.
   * Planners for specific simulation types (e.g. Withdraw, Deposit) should be registered here
   * or injected so that they can be used during `buildOrder` execution.
   */
  constructor() {
    this._registerOrderPlanner(SwapOrderPlanner)
  }

  /**
   * Generates a fully formed `Order` by routing the request to the matching `IOrderPlanner`
   * based on the simulation type.
   *
   * @param params.user - The user requesting the order
   * @param params.positionsManager - The manager to access current positions
   * @param params.simulation - The target simulation outlining the desired outcome
   * @param params.addressBookManager - The manager to resolve contract addresses
   * @param params.swapManager - The manager to compute swap paths if needed
   * @param params.protocolsRegistry - The registry to locate active protocol plugins
   * @param params.contractsProvider - The provider for direct contract interactions
   * @returns A promise resolving to the final Order, or undefined if it cannot be built.
   * @throws {SDKError} If no registered planner is found for the given simulation type.
   */
  async buildOrder(params: BuildOrderParams): Promise<Maybe<Order>> {
    const orderPlanner = this._orderPlanners.get(params.simulation.type)
    if (!orderPlanner) {
      throw SDKError.createFrom({
        type: SDKErrorType.OrderPlannerError,
        reason: `Order Planner for simulation not found`,
        message: `No registered Order Planner was found for simulation type ${params.simulation.type}`,
      })
    }

    return orderPlanner.buildOrder({
      user: params.user,
      positionsManager: params.positionsManager,
      simulation: params.simulation,
      addressBookManager: params.addressBookManager,
      swapManager: params.swapManager,
      protocolsRegistry: params.protocolsRegistry,
      contractsProvider: params.contractsProvider,
    })
  }

  /** PRIVATE */

  /**
   * Registers an order planner class as the handler for a specific simulation types
   *
   * @param params.orderPlannerClass Order planner class to register
   */
  private _registerOrderPlanner(orderPlannerClass: OrderPlannerClass): void {
    const orderPlanner = new orderPlannerClass()

    const acceptedSimulations = orderPlanner.getAcceptedSimulations()
    for (const simulationType of acceptedSimulations) {
      assert(
        !this._orderPlanners.has(simulationType),
        `Order planner for simulation type ${simulationType} already registered`,
      )

      this._orderPlanners.set(simulationType, orderPlanner)
    }
  }
}
