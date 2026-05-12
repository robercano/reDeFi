import { SerializationService } from '../../services/SerializationService'
import { SimulationType } from '../enums/SimulationType'
import { ISimulation, ISimulationData, __signature__ } from '../interfaces/ISimulation'
import { Steps } from '../interfaces/Steps'
import { IBalanceChange } from '../interfaces/IBalanceChange'
import { IGasEstimation } from '../interfaces/IGasEstimation'

/**
 * Type for the parameters of Simulation
 */
export type SimulationParams = Omit<ISimulationData, 'type'>

/**
 * Simulation
 * @see ISimulation
 */
export abstract class Simulation implements ISimulation {
  /** SIGNATURE */
  readonly [__signature__] = __signature__

  /** ATTRIBUTES */
  abstract readonly type: SimulationType
  readonly steps: Steps[]
  readonly balanceChanges: IBalanceChange[]
  readonly gasEstimations: IGasEstimation[]

  /** SEALED CONSTRUCTOR */
  protected constructor(params: SimulationParams) {
    this.steps = params.steps as Steps[]
    this.balanceChanges = params.balanceChanges as IBalanceChange[]
    this.gasEstimations = params.gasEstimations as IGasEstimation[]
  }
}

SerializationService.registerClass(Simulation, { identifier: 'Simulation' })
