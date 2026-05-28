import {
  Address,
  ChainIds,
  TokenAmount,
  SimulationType,
  ExecutionType,
  Token,
  IChainInfo,
  SimulationSteps,
  IYieldPoolId,
  IYieldPositionId,
} from '@thesolidchain/sdk-common'
import assert from 'assert'
import { YieldSimulatorManager } from '../../simulator/service/src/YieldSimulatorManager'
import { YieldOrderPlanner } from '../../order-planner/service/src/planners/YieldOrderPlanner'

vi.setConfig({ testTimeout: 300000 })

/**
 * @group e2e
 */
describe('Simulator -> OrderPlanner Yield Execution', () => {
  const signerAddressValue = '0x70997970C51812dc3A010C7d01b50e0d17dc79C8'

  it('should generate and execute a Yield Deposit Order', async () => {
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
      protocol: { name: 'lido' },
      address: '0x1234567890123456789012345678901234567890',
    } as unknown as IYieldPoolId

    const mockTransactionInfo = {
      transaction: {
        target: '0x1234567890123456789012345678901234567890',
        calldata: '0xdeadbeef',
        value: '0',
      },
      description: 'Lido Deposit',
    }

    const mockPlugin = {
      yield: {
        getYieldPoolInfo: vi.fn().mockResolvedValue({}),
        getDepositTransaction: vi.fn().mockResolvedValue(mockTransactionInfo),
      },
    }

    const mockProtocolManager = {
      yield: mockPlugin.yield,
    } as never

    // 1. Simulate the Deposit
    const yieldSimulator = new YieldSimulatorManager(mockProtocolManager, {} as never)
    const simulation = await yieldSimulator.simulateDeposit({
      poolId: mockPoolId,
      amount,
    })

    assert.strictEqual(simulation.steps[0].type, SimulationSteps.DepositYield)

    // 2. Generate the Order Planner Order
    const yieldPlanner = new YieldOrderPlanner()
    const order = await yieldPlanner.buildOrder({
      user: userAddress,
      simulation,
      executionType: ExecutionType.Direct,
      protocolsRegistry: {
        getPlugin: vi.fn().mockReturnValue(mockPlugin),
      } as never,
    } as never)

    assert(order, 'Order should be successfully built')
    assert.strictEqual(order.transactions.length, 1, 'Should have exactly 1 transaction')
    assert.strictEqual(
      order.transactions[0].transaction.target,
      '0x1234567890123456789012345678901234567890',
    )
    assert.strictEqual(order.transactions[0].transaction.calldata, '0xdeadbeef')
    assert.strictEqual(order.transactions[0].description, 'Lido Deposit')

    console.log('Successfully verified Yield Deposit simulation and order planning!')
  })

  it('should generate and execute a Yield Withdraw Order', async () => {
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
      poolId: { protocol: { name: 'lido' }, address: '0x1234567890123456789012345678901234567890' },
      userAddress,
    } as unknown as IYieldPositionId

    const mockTransactionInfo = {
      transaction: {
        target: '0x1234567890123456789012345678901234567890',
        calldata: '0xbeefdead',
        value: '0',
      },
      description: 'Lido Withdraw',
    }

    const mockPlugin = {
      yield: {
        getYieldPosition: vi.fn().mockResolvedValue({}),
        getWithdrawTransaction: vi.fn().mockResolvedValue(mockTransactionInfo),
      },
    }

    const mockProtocolManager = {
      yield: mockPlugin.yield,
    } as never

    // 1. Simulate the Withdraw
    const yieldSimulator = new YieldSimulatorManager(mockProtocolManager, {} as never)
    const simulation = await yieldSimulator.simulateWithdraw({
      positionId: mockPositionId,
      amount,
    })

    assert.strictEqual(simulation.steps[0].type, SimulationSteps.WithdrawYield)

    // 2. Generate the Order Planner Order
    const yieldPlanner = new YieldOrderPlanner()
    const order = await yieldPlanner.buildOrder({
      user: userAddress,
      simulation,
      executionType: ExecutionType.Direct,
      protocolsRegistry: {
        getPlugin: vi.fn().mockReturnValue(mockPlugin),
      } as never,
    } as never)

    assert(order, 'Order should be successfully built')
    assert.strictEqual(order.transactions.length, 1, 'Should have exactly 1 transaction')
    assert.strictEqual(
      order.transactions[0].transaction.target,
      '0x1234567890123456789012345678901234567890',
    )
    assert.strictEqual(order.transactions[0].transaction.calldata, '0xbeefdead')
    assert.strictEqual(order.transactions[0].description, 'Lido Withdraw')

    console.log('Successfully verified Yield Withdraw simulation and order planning!')
  })
})
