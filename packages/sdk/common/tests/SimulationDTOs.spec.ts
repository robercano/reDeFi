import { describe, it, expect } from 'vitest'
import { BalanceChange } from '../src/simulation/implementation/BalanceChange'
import { GasEstimation } from '../src/simulation/implementation/GasEstimation'
import { LendingSimulation } from '../src/simulation/implementation/LendingSimulation'
import { Simulation } from '../src/simulation/implementation/Simulation'
import { YieldSimulation } from '../src/simulation/implementation/YieldSimulation'
import { SimulationType } from '../src/simulation/enums/SimulationType'

describe('Simulation DTOs', () => {
  it('should construct BalanceChange', () => {
    const dto = new BalanceChange({
      token: {} as unknown as import('../src/common/interfaces/IToken').IToken,
      amount: {} as unknown as import('../src/common/interfaces/ITokenAmount').ITokenAmount,
      fiatValue: {} as unknown as import('../src/common/interfaces/IFiatCurrencyAmount').IFiatCurrencyAmount,
    })
    expect(dto.token).toBeDefined()
    expect(dto.amount).toBeDefined()
    expect(dto.fiatValue).toBeDefined()
  })

  it('should construct GasEstimation', () => {
    const dto = new GasEstimation({
      gasTokenAmount: {} as unknown as import('../src/common/interfaces/ITokenAmount').ITokenAmount,
      gasFiatValue: {} as unknown as import('../src/common/interfaces/IFiatCurrencyAmount').IFiatCurrencyAmount,
    })
    expect(dto.gasTokenAmount).toBeDefined()
    expect(dto.gasFiatValue).toBeDefined()
  })

  it('should construct LendingSimulation', () => {
    const dto = new LendingSimulation({
      steps: [],
      balanceChanges: [],
      gasEstimations: [],
    })
    expect(dto.type).toBe(SimulationType.Lend)
    expect(dto.steps).toBeDefined()
  })

  it('should construct YieldSimulation', () => {
    const dto = new YieldSimulation({
      steps: [],
      balanceChanges: [],
      gasEstimations: [],
    })
    expect(dto.type).toBe(SimulationType.Yield)
  })

  it('should construct Simulation', () => {
    class TestSimulation extends Simulation {
      readonly type = SimulationType.Lend
      constructor() {
        super({
          steps: [],
          balanceChanges: [],
          gasEstimations: [],
        })
      }
    }
    const dto = new TestSimulation()
    expect(dto.type).toBe(SimulationType.Lend)
    expect(dto.steps).toBeDefined()
    expect(dto.balanceChanges).toBeDefined()
    expect(dto.gasEstimations).toBeDefined()
  })
})
// End of SimulationDTOs tests
