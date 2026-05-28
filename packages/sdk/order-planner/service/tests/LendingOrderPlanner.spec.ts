import { describe, it, expect, vi, beforeEach } from 'vitest'
import { LendingOrderPlanner } from '../src/planners/LendingOrderPlanner'
import {
  SimulationType,
  ExecutionType,
  SimulationSteps,
  TransactionInfo,
  Order,
  Address,
  TokenAmount,
  Token,
} from '@thesolidchain/sdk-common'
import { BuildOrderParams } from '@thesolidchain/order-planner-common'

describe('LendingOrderPlanner', () => {
  let planner: LendingOrderPlanner

  beforeEach(() => {
    planner = new LendingOrderPlanner()
  })

  it('should accept Lend simulation type', () => {
    expect(planner.getAcceptedSimulations()).toEqual([SimulationType.Lend])
  })

  it('should process DepositBorrow steps and query getSupplyTransaction and getBorrowTransaction', async () => {
    const mockUser = Address.createFromEthereum({
      value: '0x1111111111111111111111111111111111111111',
    })
    const mockAmount = TokenAmount.createFrom({
      amount: '10',
      token: Token.createFrom({
        decimals: 18,
        address: mockUser,
        chainInfo: {} as any,
        name: 'T',
        symbol: 'T',
      }),
    })
    const mockPoolId = { protocol: { name: 'Aave V3' } }

    const mockSupplyTx = {
      transaction: { target: '0xSupply', calldata: '0x', value: '0' },
      description: 'Supply',
    }
    const mockBorrowTx = {
      transaction: { target: '0xBorrow', calldata: '0x', value: '0' },
      description: 'Borrow',
    }

    const mockPlugin = {
      lending: {
        getSupplyTransaction: vi.fn().mockResolvedValue(mockSupplyTx),
        getBorrowTransaction: vi.fn().mockResolvedValue(mockBorrowTx),
      },
    }

    const params = {
      user: mockUser,
      simulation: {
        type: SimulationType.Lend,
        steps: [
          {
            type: SimulationSteps.DepositBorrow,
            inputs: {
              poolId: mockPoolId,
              depositAmount: mockAmount,
              borrowAmount: mockAmount,
            },
          },
        ],
        balanceChanges: [],
        gasEstimations: [],
      },
      executionType: ExecutionType.Direct,
      protocolsRegistry: {
        getPlugin: vi.fn().mockReturnValue(mockPlugin),
      },
    } as unknown as BuildOrderParams

    const order = await planner.buildOrder(params)

    expect(mockPlugin.lending.getSupplyTransaction).toHaveBeenCalled()
    expect(mockPlugin.lending.getBorrowTransaction).toHaveBeenCalled()
    expect(order?.transactions).toHaveLength(2)
    expect(order?.transactions[0]).toEqual(mockSupplyTx)
    expect(order?.transactions[1]).toEqual(mockBorrowTx)
  })

  it('should process PaybackWithdraw steps and query getRepayTransaction and getWithdrawTransaction', async () => {
    const mockUser = Address.createFromEthereum({
      value: '0x1111111111111111111111111111111111111111',
    })
    const mockAmount = TokenAmount.createFrom({
      amount: '10',
      token: Token.createFrom({
        decimals: 18,
        address: mockUser,
        chainInfo: {} as any,
        name: 'T',
        symbol: 'T',
      }),
    })
    const mockPositionId = { poolId: { protocol: { name: 'Aave V3' } } }

    const mockRepayTx = {
      transaction: { target: '0xRepay', calldata: '0x', value: '0' },
      description: 'Repay',
    }
    const mockWithdrawTx = {
      transaction: { target: '0xWithdraw', calldata: '0x', value: '0' },
      description: 'Withdraw',
    }

    const mockPlugin = {
      lending: {
        getRepayTransaction: vi.fn().mockResolvedValue(mockRepayTx),
        getWithdrawTransaction: vi.fn().mockResolvedValue(mockWithdrawTx),
      },
    }

    const params = {
      user: mockUser,
      simulation: {
        type: SimulationType.Lend,
        steps: [
          {
            type: SimulationSteps.PaybackWithdraw,
            inputs: {
              position: { pool: { id: mockPositionId.poolId } },
              paybackAmount: mockAmount,
              withdrawAmount: mockAmount,
            },
          },
        ],
        balanceChanges: [],
        gasEstimations: [],
      },
      executionType: ExecutionType.Direct,
      protocolsRegistry: {
        getPlugin: vi.fn().mockReturnValue(mockPlugin),
      },
    } as unknown as BuildOrderParams

    const order = await planner.buildOrder(params)

    expect(mockPlugin.lending.getRepayTransaction).toHaveBeenCalled()
    expect(mockPlugin.lending.getWithdrawTransaction).toHaveBeenCalled()
    expect(order?.transactions).toHaveLength(2)
    expect(order?.transactions[0]).toEqual(mockRepayTx)
    expect(order?.transactions[1]).toEqual(mockWithdrawTx)
  })

  it('should bundle transactions if executionType is Multicall', async () => {
    const mockUser = Address.createFromEthereum({
      value: '0x1111111111111111111111111111111111111111',
    })
    const mockAmount = TokenAmount.createFrom({
      amount: '10',
      token: Token.createFrom({
        decimals: 18,
        address: mockUser,
        chainInfo: {} as any,
        name: 'T',
        symbol: 'T',
      }),
    })
    const mockPositionId = { poolId: { protocol: { name: 'Aave V3' } } }

    const mockRepayTx = {
      transaction: {
        target: { value: '0x1111111111111111111111111111111111111111' },
        calldata: '0x',
        value: '0',
      },
      description: 'Repay',
    }

    const mockPlugin = {
      lending: {
        getRepayTransaction: vi.fn().mockResolvedValue(mockRepayTx),
        getWithdrawTransaction: vi.fn(),
      },
    }

    const params = {
      user: mockUser,
      simulation: {
        type: SimulationType.Lend,
        steps: [
          {
            type: SimulationSteps.PaybackWithdraw,
            inputs: {
              position: { pool: { id: mockPositionId.poolId } },
              paybackAmount: mockAmount,
            },
          },
        ],
      },
      executionType: ExecutionType.Multicall,
      protocolsRegistry: {
        getPlugin: vi.fn().mockReturnValue(mockPlugin),
      },
      addressBookManager: {
        getAddressByName: async () =>
          Address.createFromEthereum({ value: '0xcA11bde05977b3631167028862bE2a173976CA11' }),
      },
    } as unknown as BuildOrderParams

    const order = await planner.buildOrder(params)

    expect(order?.transactions).toHaveLength(1)
    expect(order?.transactions[0].description).toBe('Bundled Lend Execution (Multicall)')
  })
})
