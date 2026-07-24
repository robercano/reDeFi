import { describe, it, expect, vi, beforeEach } from 'vitest'
import { SwapOrderPlanner } from '../src/planners/SwapOrderPlanner'
import {
  SimulationType,
  ExecutionType,
  SimulationSteps,
  TransactionInfo,
  Order,
  Percentage,
  Address,
  multicall3Abi,
} from '@thesolidchain/sdk-common'
import { BuildOrderParams } from '@thesolidchain/order-planner-common'
import { decodeFunctionData } from 'viem'

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
          {
            type: SimulationSteps.Swap,
            outputs: {
              transaction: {
                target: { value: '0x0000000000000000000000000000000000000002' },
                calldata: '0xSwapData',
                value: '100',
              },
            },
          },
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
        transaction: {
          target: { value: '0x0000000000000000000000000000000000000002' },
          calldata: '0xSwapData',
          value: '100',
        },
        description: 'Swap token',
      },
    ])
  })

  it('should bundle only non-approval transactions if executionType is Multicall, keeping approval direct', async () => {
    const params = {
      user: {
        chainInfo: {
          chainId: 1,
          name: 'Ethereum',
        },
      },
      simulation: {
        type: SimulationType.Swap,
        steps: [
          {
            type: SimulationSteps.Approve,
            outputs: {
              transaction: {
                target: { value: '0x0000000000000000000000000000000000000001' },
                calldata: '0x0a0a0a0a',
                value: '0',
              },
            },
          },
          {
            type: SimulationSteps.Swap,
            outputs: {
              transaction: {
                target: { value: '0x0000000000000000000000000000000000000002' },
                calldata: '0x0b0b0b0b',
                value: '100',
              },
            },
          },
        ],
        balanceChanges: [],
        gasEstimations: [],
      },
      executionType: ExecutionType.Multicall,
      contractsProvider: mockContractsProvider,
      addressBookManager: {
        getAddressByName: async () =>
          Address.createFromEthereum({ value: '0xcA11bde05977b3631167028862bE2a173976CA11' }),
      } as any,
    } as unknown as BuildOrderParams

    const order = await planner.buildOrder(params)

    // Approval stays as its own direct transaction, followed by the bundled Multicall tx
    expect(order?.transactions).toHaveLength(2)
    expect(order?.transactions[0].description).toBe('Approve token')
    expect(order?.transactions[0].transaction.calldata).toBe('0x0a0a0a0a')

    const bundledTx = order?.transactions[1]
    expect(bundledTx?.description).toBe('Bundled Swap Execution (Multicall)')
    expect(bundledTx?.transaction.target.value).toBe('0xcA11bde05977b3631167028862bE2a173976CA11')
    // Only the non-approval (swap) transaction's value is bundled into the Multicall value
    expect(bundledTx?.transaction.value).toBe('100')

    // The approval calldata must not be part of the bundled aggregate3 calls, and
    // allowFailure must be false so failures are no longer masked.
    const decoded = decodeFunctionData({
      abi: multicall3Abi,
      data: bundledTx?.transaction.calldata as `0x${string}`,
    })
    const [calls] = decoded.args
    expect(calls).toHaveLength(1)
    expect(calls[0].callData).toBe('0x0b0b0b0b')
    expect(calls[0].allowFailure).toBe(false)
  })

  it('should return only the approval as a direct transaction if Multicall has no non-approval steps', async () => {
    const params = {
      user: {
        chainInfo: {
          chainId: 1,
          name: 'Ethereum',
        },
      },
      simulation: {
        type: SimulationType.Swap,
        steps: [
          {
            type: SimulationSteps.Approve,
            outputs: {
              transaction: {
                target: { value: '0x0000000000000000000000000000000000000001' },
                calldata: '0xApprove',
                value: '0',
              },
            },
          },
        ],
        balanceChanges: [],
        gasEstimations: [],
      },
      executionType: ExecutionType.Multicall,
      contractsProvider: mockContractsProvider,
      addressBookManager: {
        getAddressByName: vi.fn(),
      } as any,
    } as unknown as BuildOrderParams

    const order = await planner.buildOrder(params)
    expect(order?.transactions).toHaveLength(1)
    expect(order?.transactions[0].description).toBe('Approve token')
    expect(params.addressBookManager.getAddressByName).not.toHaveBeenCalled()
  })
})
