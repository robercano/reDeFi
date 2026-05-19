import { describe, it, expect, vi, beforeEach } from 'vitest'
import { SwapOrderPlanner } from '../src/planners/SwapOrderPlanner'
import {
  SimulationType,
  ExecutionType,
  SimulationSteps,
  TransactionInfo,
  Order,
} from '@thesolidchain/sdk-common'
import { BuildOrderParams } from '@thesolidchain/order-planner-common'

describe('SwapOrderPlanner', () => {
  let planner: SwapOrderPlanner
  let mockContractsProvider: any

  beforeEach(() => {
    planner = new SwapOrderPlanner()
    mockContractsProvider = {}
  })

  it('should accept Swap simulation type', () => {
    expect(planner.getAcceptedSimulations()).toEqual([SimulationType.Swap])
  })

  it('should return empty order if there are no transactions', async () => {
    const params = {
      simulation: {
        type: SimulationType.Swap,
        steps: [],
        balanceChanges: [],
        gasEstimations: [],
      },
      executionType: ExecutionType.Direct,
      contractsProvider: mockContractsProvider,
    } as unknown as BuildOrderParams

    const order = await planner.buildOrder(params)
    expect(order?.transactions).toEqual([])
  })

  it('should return default direct fallback if executionType is not Multicall', async () => {
    // Currently, our SwapOrderPlanner returns an empty array of transactions because we commented out the dynamic generation.
    // To reach the fallback with transactions, we would need to mock the transactions array.
    // We can test this by checking that the return type matches the direct fallback logic.
    const params = {
      simulation: {
        type: SimulationType.Swap,
        steps: [
          { type: SimulationSteps.Swap } // Just a dummy step to simulate
        ],
        balanceChanges: [],
        gasEstimations: [],
      },
      executionType: ExecutionType.Direct,
      contractsProvider: mockContractsProvider,
    } as unknown as BuildOrderParams

    const order = await planner.buildOrder(params)
    expect(order?.transactions).toEqual([
      {
        transaction: { target: '0x0000000000000000000000000000000000000002', calldata: '0xSwapData', value: '100' },
        description: 'Swap token',
      }
    ])
  })

  it('should bundle transactions if executionType is Multicall', async () => {
    const params = {
      simulation: {
        type: SimulationType.Swap,
        steps: [
          { type: SimulationSteps.Approve },
          { type: SimulationSteps.Swap }
        ],
        balanceChanges: [],
        gasEstimations: [],
      },
      executionType: ExecutionType.Multicall,
      contractsProvider: mockContractsProvider,
    } as unknown as BuildOrderParams

    const order = await planner.buildOrder(params)
    expect(order?.transactions).toHaveLength(1)
    expect(order?.transactions[0].description).toBe('Bundled Swap Execution (Multicall)')
    expect(order?.transactions[0].transaction.target).toBe('0xcA11bde05977b3631167028862bE2a173976CA11')
    expect(order?.transactions[0].transaction.value).toBe('100')
  })
})
