import {
  ILendingPoolId,
  ILendingPositionId,
  ISimulation,
  ITokenAmount,
} from '@thesolidchain/sdk-common'

/**
 * Interface representing the capabilities of the lending simulator manager.
 */
export interface ILendingSimulatorManager {
  /**
   * Simulates a supply action to a lending pool.
   * @param params - The parameters for the simulation.
   * @returns A promise that resolves to the simulation output.
   */
  simulateSupply(params: { poolId: ILendingPoolId; amount: ITokenAmount }): Promise<ISimulation>

  /**
   * Simulates a borrow action from a lending pool.
   * @param params - The parameters for the simulation.
   * @returns A promise that resolves to the simulation output.
   */
  simulateBorrow(params: { poolId: ILendingPoolId; amount: ITokenAmount }): Promise<ISimulation>

  /**
   * Simulates a withdraw action from an existing lending position.
   * @param params - The parameters for the simulation.
   * @returns A promise that resolves to the simulation output.
   */
  simulateWithdraw(params: {
    positionId: ILendingPositionId
    amount: ITokenAmount
  }): Promise<ISimulation>

  /**
   * Simulates a repay action to an existing debt position.
   * @param params - The parameters for the simulation.
   * @returns A promise that resolves to the simulation output.
   */
  simulateRepay(params: {
    positionId: ILendingPositionId
    amount: ITokenAmount
  }): Promise<ISimulation>
}
