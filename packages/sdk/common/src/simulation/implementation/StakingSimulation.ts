import { SerializationService } from '../../services/SerializationService'
import { SimulationType } from '../enums/SimulationType'
import { Simulation, SimulationParams } from './Simulation'
import { Steps } from '../interfaces/Steps'
import { IBalanceChange } from '../interfaces/IBalanceChange'
import { IGasEstimation } from '../interfaces/IGasEstimation'

export type StakingSimulationParams = SimulationParams & {
  steps: Steps[]
  balanceChanges: IBalanceChange[]
  gasEstimations: IGasEstimation[]
}

export class StakingSimulation extends Simulation {
  readonly type = SimulationType.Stake
  readonly steps: Steps[]
  readonly balanceChanges: IBalanceChange[]
  readonly gasEstimations: IGasEstimation[]

  constructor(params: StakingSimulationParams) {
    super(params)
    this.steps = params.steps
    this.balanceChanges = params.balanceChanges
    this.gasEstimations = params.gasEstimations
  }
}

SerializationService.registerClass(StakingSimulation, { identifier: 'StakingSimulation' })
