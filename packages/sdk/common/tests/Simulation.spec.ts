import { describe, expect, it } from 'vitest'
import { ImportSimulation } from '../src/simulation/implementation/ImportSimulation'
import { RefinanceSimulation } from '../src/simulation/implementation/RefinanceSimulation'
import { SimulationType } from '../src/simulation/enums/SimulationType'
import { IExternalLendingPosition } from '../src/orders/importing/interfaces/IExternalLendingPosition'
import { ILendingPosition } from '../src/lending-protocols/interfaces/ILendingPosition'
import { Steps } from '../src/simulation/interfaces/Steps'
import { SimulatedSwapData } from '../src/swap/implementation/SimulatedSwapData'

describe('Simulation', () => {
  const mockExternalPosition: IExternalLendingPosition = {} as never
  const mockLendingPosition: ILendingPosition = {} as never
  const mockSteps: Steps[] = []
  const mockSwaps: SimulatedSwapData[] = []

  it('should create an ImportSimulation instance', () => {
    const sim = ImportSimulation.createFrom({
      sourcePosition: mockExternalPosition,
      targetPosition: mockLendingPosition,
      steps: mockSteps
    })

    expect(sim.type).toBe(SimulationType.ImportPosition)
    expect(sim.sourcePosition).toBe(mockExternalPosition)
    expect(sim.targetPosition).toBe(mockLendingPosition)
    expect(sim.steps).toBe(mockSteps)
  })

  it('should create a RefinanceSimulation instance', () => {
    const sim = RefinanceSimulation.createFrom({
      sourcePosition: mockLendingPosition,
      targetPosition: mockLendingPosition,
      swaps: mockSwaps,
      steps: mockSteps
    })

    expect(sim.type).toBe(SimulationType.Refinance)
    expect(sim.sourcePosition).toBe(mockLendingPosition)
    expect(sim.targetPosition).toBe(mockLendingPosition)
    expect(sim.swaps).toBe(mockSwaps)
    expect(sim.steps).toBe(mockSteps)
  })
})
