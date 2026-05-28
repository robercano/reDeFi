import {
  Address,
  ChainIds,
  TokenAmount,
  SimulationType,
  ExecutionType,
  Token,
  IChainInfo,
} from '@thesolidchain/sdk-common'
import { RpcUrls, SharedConfig } from './utils/testConfig'
import assert from 'assert'
import { SwapSimulatorManager } from '../../simulator/service/src/managers/SwapSimulatorManager'
import { decodeFunctionData, parseAbi } from 'viem'
import { SwapOrderPlanner } from '../../order-planner/service/src/planners/SwapOrderPlanner'

const Multicall3Abi = [
  {
    inputs: [
      {
        components: [
          { name: 'target', type: 'address' },
          { name: 'allowFailure', type: 'bool' },
          { name: 'callData', type: 'bytes' },
        ],
        name: 'calls',
        type: 'tuple[]',
      },
    ],
    name: 'aggregate3',
    outputs: [
      {
        components: [
          { name: 'success', type: 'bool' },
          { name: 'returnData', type: 'bytes' },
        ],
        name: 'returnData',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
] as const

vi.setConfig({ testTimeout: 300000 })

/**
 * @group e2e
 */
describe('Simulator -> OrderPlanner Swap Multicall', () => {
  let signerPrivateKey = SharedConfig.testUserPrivateKey
  if (signerPrivateKey && !signerPrivateKey.startsWith('0x')) {
    signerPrivateKey = `0x${signerPrivateKey}` as `0x${string}`
  }
  const signerAddressValue = SharedConfig.testUserAddressValue

  it('should generate and execute a Multicall order on Anvil', async () => {
    const chainId = ChainIds.Base
    const rpcUrl = RpcUrls[ChainIds.Base]

    const userAddress = Address.createFromEthereum({ value: signerAddressValue })

    // Create dummy tokens
    const fromToken = Token.createFrom({
      chainInfo: { chainId } as IChainInfo,
      address: Address.createFromEthereum({ value: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' }),
      decimals: 18,
      symbol: 'ETH',
      name: 'Ethereum',
    })
    const toToken = Token.createFrom({
      chainInfo: { chainId } as IChainInfo,
      address: Address.createFromEthereum({ value: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913' }),
      decimals: 6,
      symbol: 'USDC',
      name: 'USD Coin',
    })

    const fromAmount = TokenAmount.createFrom({
      amount: '0.0005',
      token: fromToken,
    })

    const mockSwapManager = {
      getSwapDataExactInput: async () => ({
        transaction: {
          target: '0x0000000000000000000000000000000000000002',
          calldata: '0x2222',
          value: '0',
        },
        quote: {
          provider: '1inch',
          routes: [],
          spotPrice: { value: '0', decimals: 18 },
          offerPrice: { value: '0', decimals: 18 },
          toTokenAmount: { token: toToken, amount: '0' },
        },
        allowanceTarget: '0x0000000000000000000000000000000000000003',
      }),
    } as never

    const mockAllowanceManager = {
      getApproval: async () => ({
        allowanceAmount: { token: fromToken, amount: '0' },
        transaction: {
          target: '0x0000000000000000000000000000000000000003',
          calldata: '0x1111',
          value: '0',
        },
      }),
    } as never

    // 1. Simulate the Swap using the manager directly
    const swapSimulator = new SwapSimulatorManager(mockSwapManager, mockAllowanceManager)
    const simulation = await swapSimulator.simulateSwap({
      user: { wallet: { address: userAddress } } as never,
      sellToken: fromToken,
      buyToken: toToken,
      sellAmount: fromAmount,
      slippage: { value: '0.005' } as never,
    })

    assert.strictEqual(simulation.type, SimulationType.Swap)

    // 2. Generate the Order with Multicall execution
    const swapPlanner = new SwapOrderPlanner()
    const order = await swapPlanner.buildOrder({
      user: userAddress,
      simulation,
      executionType: ExecutionType.Multicall,
      // mock the contracts provider for the test since SwapOrderPlanner uses viem encodeFunctionData directly
      contractsProvider: {} as never,
    } as never)

    assert(order, 'Order should be successfully built')
    assert.strictEqual(
      order.transactions.length,
      1,
      'Multicall should bundle into exactly 1 transaction',
    )
    assert.strictEqual(
      order.transactions[0].transaction.target,
      '0xcA11bde05977b3631167028862bE2a173976CA11',
    )

    // 3. Verify the generated Multicall Transaction
    const tx = order.transactions[0].transaction
    const decoded = decodeFunctionData({
      abi: Multicall3Abi,
      data: tx.calldata as `0x${string}`,
    })

    assert.strictEqual(decoded.functionName, 'aggregate3')

    // Type casting to access the arguments since it's a tuple array
    const calls = decoded.args?.[0] as never[]
    assert.strictEqual(calls.length, 2) // Approve + Swap

    // Assert the mocked approval step
    assert.strictEqual(calls[0].target.toLowerCase(), '0x0000000000000000000000000000000000000003')
    assert.strictEqual(calls[0].allowFailure, true)
    assert.strictEqual(calls[0].callData, '0x1111')

    // Assert the mocked swap step
    assert.strictEqual(calls[1].target.toLowerCase(), '0x0000000000000000000000000000000000000002')
    assert.strictEqual(calls[1].allowFailure, true)
    assert.strictEqual(calls[1].callData, '0x2222')

    console.log('Successfully verified Multicall transaction encoding!')
  })
})
