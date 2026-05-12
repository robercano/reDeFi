import { z } from 'zod'
import { SimulationType } from '../enums/SimulationType'
import { Steps } from './Steps'
import { IBalanceChange, BalanceChangeDataSchema } from './IBalanceChange'
import { IGasEstimation, GasEstimationDataSchema } from './IGasEstimation'

/**
 * Unique signature to provide branded types to the interface
 */
export const __signature__: unique symbol = Symbol()

/**
 * @interface ISimulation
 * Generic simulation interface, defines the simulation type for all simulations
 */
export interface ISimulation {
  /** Signature used to differentiate it from similar interfaces */
  readonly [__signature__]: symbol
  /** The type of the simulation */
  readonly type: SimulationType
  /** The sequence of steps to execute the simulation */
  readonly steps: Steps[]
  /** Balance changes resulting from the simulation */
  readonly balanceChanges: IBalanceChange[]
  /** Gas estimations for the simulation steps */
  readonly gasEstimations: IGasEstimation[]
}

/**
 * Zod schema for ISimulation
 */
export const SimulationSchema = z.object({
  type: z.nativeEnum(SimulationType),
  steps: z.array(z.any()), // Steps are complex, we'll avoid deep validation for now or use z.any()
  balanceChanges: z.array(BalanceChangeDataSchema),
  gasEstimations: z.array(GasEstimationDataSchema),
})

/**
 * Type for the data part of the IToken interface
 */
export type ISimulationData = Readonly<z.infer<typeof SimulationSchema>>

/**
 * Type guard for ISimulation
 * @param maybeSimulationData
 * @returns true if the object is an IToken
 */
export function isSimulation(maybeSimulationData: unknown): maybeSimulationData is ISimulation {
  return SimulationSchema.safeParse(maybeSimulationData).success
}
