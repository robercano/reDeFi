import {
  Address,
  ChainIds,
  TokenAmount,
  SimulationType,
  ExecutionType,
  Token,
  IChainInfo,
  SimulationSteps,
  ILendingPoolId,
  ILendingPositionId,
} from '@thesolidchain/sdk-common'
import assert from 'assert'
import { describe, it, vi } from 'vitest'
import { LendingSimulatorManager } from '../../simulator/service/src/LendingSimulatorManager'
import { LendingOrderPlanner } from '../../order-planner/service/src/planners/LendingOrderPlanner'

vi.setConfig({ testTimeout: 300000 })

/**
 * @group e2e
 */
describe('Simulator -> OrderPlanner Lending Execution', () => {
  const signerAddressValue = '0x70997970C51812dc3A010C7d01b50e0d17dc79C8'

  it('should generate and execute a Lending Supply/Borrow Order', async () => {
    const chainId = ChainIds.Base

    const userAddress = Address.createFromEthereum({ value: signerAddressValue })

    const token = Token.createFrom({
      chainInfo: { chainId } as IChainInfo,
      address: Address.createFromEthereum({ value: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913' }),
      decimals: 6,
      symbol: 'USDC',
      name: 'USD Coin',
    })

    const amount = TokenAmount.createFrom({
      amount: '100',
      token,
    })

    const mockPoolId = {
      protocol: { name: 'Aave V3' },
      address: '0x1234567890123456789012345678901234567890',
    } as unknown as ILendingPoolId

    const mockSupplyTx = {
      transaction: { target: '0x1234567890123456789012345678901234567890', calldata: '0xbeef', value: '0' },
      description: 'Aave Supply'
    }

    const mockPlugin = {
      lending: {
        getLendingPoolInfo: vi.fn().mockResolvedValue({}),
        getSupplyTransaction: vi.fn().mockResolvedValue(mockSupplyTx),
        getBorrowTransaction: vi.fn().mockResolvedValue(null),
      }
    }

    const mockProtocolManager = {
      lending: mockPlugin.lending
    } as any

    // 1. Simulate the Supply
    const lendingSimulator = new LendingSimulatorManager(mockProtocolManager, {} as any)
    const simulation = await lendingSimulator.simulateSupply({
      poolId: mockPoolId,
      amount,
    })

    assert.strictEqual(simulation.steps[0].type, SimulationSteps.DepositBorrow)

    // 2. Generate the Order Planner Order
    const lendingPlanner = new LendingOrderPlanner()
    const order = await lendingPlanner.buildOrder({
      user: userAddress,
      simulation,
      executionType: ExecutionType.Direct,
      protocolsRegistry: {
        getPlugin: vi.fn().mockReturnValue(mockPlugin)
      } as any,
    } as any)

    assert(order, 'Order should be successfully built')
    assert.strictEqual(order.transactions.length, 1, 'Should have exactly 1 transaction')
    assert.strictEqual(order.transactions[0].transaction.target, '0x1234567890123456789012345678901234567890')
    assert.strictEqual(order.transactions[0].transaction.calldata, '0xbeef')
    assert.strictEqual(order.transactions[0].description, 'Aave Supply')
    
    console.log('Successfully verified Lending Supply simulation and order planning!')
  })

  it('should generate and execute a Lending Repay/Withdraw Order', async () => {
    const chainId = ChainIds.Base

    const userAddress = Address.createFromEthereum({ value: signerAddressValue })

    const token = Token.createFrom({
      chainInfo: { chainId } as IChainInfo,
      address: Address.createFromEthereum({ value: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913' }),
      decimals: 6,
      symbol: 'USDC',
      name: 'USD Coin',
    })

    const amount = TokenAmount.createFrom({
      amount: '50',
      token,
    })

    const mockPositionId = {
      poolId: { protocol: { name: 'Aave V3' }, address: '0x1234567890123456789012345678901234567890' },
      userAddress,
    } as unknown as ILendingPositionId

    const mockPosition = {
      id: mockPositionId,
      pool: { id: mockPositionId.poolId }
    }

    const mockWithdrawTx = {
      transaction: { target: '0x1234567890123456789012345678901234567890', calldata: '0xdead', value: '0' },
      description: 'Aave Withdraw'
    }

    const mockPlugin = {
      lending: {
        getLendingPosition: vi.fn().mockResolvedValue(mockPosition),
        getWithdrawTransaction: vi.fn().mockResolvedValue(mockWithdrawTx),
        getRepayTransaction: vi.fn().mockResolvedValue(null),
      }
    }

    const mockProtocolManager = {
      lending: mockPlugin.lending
    } as any

    // 1. Simulate the Withdraw
    const lendingSimulator = new LendingSimulatorManager(mockProtocolManager, {} as any)
    const simulation = await lendingSimulator.simulateWithdraw({
      positionId: mockPositionId,
      amount,
    })

    assert.strictEqual(simulation.steps[0].type, SimulationSteps.PaybackWithdraw)

    // 2. Generate the Order Planner Order
    const lendingPlanner = new LendingOrderPlanner()
    const order = await lendingPlanner.buildOrder({
      user: userAddress,
      simulation,
      executionType: ExecutionType.Direct,
      protocolsRegistry: {
        getPlugin: vi.fn().mockReturnValue(mockPlugin)
      } as any,
    } as any)

    assert(order, 'Order should be successfully built')
    assert.strictEqual(order.transactions.length, 1, 'Should have exactly 1 transaction')
    assert.strictEqual(order.transactions[0].transaction.target, '0x1234567890123456789012345678901234567890')
    assert.strictEqual(order.transactions[0].transaction.calldata, '0xdead')
    assert.strictEqual(order.transactions[0].description, 'Aave Withdraw')
    
    console.log('Successfully verified Lending Withdraw simulation and order planning!')
  })
})
