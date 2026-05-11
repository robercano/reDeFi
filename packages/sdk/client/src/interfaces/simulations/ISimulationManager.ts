

/**
 * Interface for the Simulation Manager
 *
 * The Simulation Manager is responsible for handling all the simulation related operations
 * and returning the results of the simulation that can be used to display the results to the user
 * and also to generate an order to execute the simulation
 */
export interface ISimulationManager {
  /** Finance related simulations, i.e.: Earn + Multriply + Borrow */
  readonly finance: undefined

  /** Armada Protocol simulations */
  readonly earn: undefined
}
