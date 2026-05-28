/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, vi, beforeEach, Mocked } from 'vitest'
import { SwapSimulatorManager } from '../src/managers/SwapSimulatorManager'
import { ISwapManager } from '@thesolidchain/swap-common'
import { IAllowanceManager } from '@thesolidchain/allowance-manager-common'
import { ISwapSimulationParams, SimulationSteps, SimulationType } from '@thesolidchain/sdk-common'

describe('SwapSimulatorManager', () => {
  let swapSimulatorManager: SwapSimulatorManager
  let mockSwapManager: Mocked<ISwapManager>
  let mockAllowanceManager: Mocked<IAllowanceManager>

  const mockToken = {
    address: { value: '0x1111111111111111111111111111111111111111' },
    decimals: 18,
    symbol: 'MOCK1',
    chainInfo: { chainId: 1, name: 'Mainnet' }
  } as any

  const mockToken2 = {
    address: { value: '0x2222222222222222222222222222222222222222' },
    decimals: 18,
    symbol: 'MOCK2',
    chainInfo: { chainId: 1, name: 'Mainnet' }
  } as any

  const mockUser = { wallet: { address: '0xUserAddress' } } as any

  beforeEach(() => {
    mockSwapManager = {
      getSwapDataExactInput: vi.fn(),
    } as unknown as Mocked<ISwapManager>

    mockAllowanceManager = {
      getApproval: vi.fn(),
    } as unknown as Mocked<IAllowanceManager>

    swapSimulatorManager = new SwapSimulatorManager(mockSwapManager, mockAllowanceManager)
  })

  it('should simulate swap without approval step if allowance is sufficient', async () => {
    const sellAmount = { token: mockToken, amount: 100n } as any
    
    mockSwapManager.getSwapDataExactInput.mockResolvedValue({
      provider: '1inch',
      targetContract: '0xTargetContract',
      calldata: '0xCalldata',
      value: '0',
      toTokenAmount: { token: mockToken2, amount: 90n } as any,
    } as any)

    mockAllowanceManager.getApproval.mockResolvedValue(undefined)

    const params: ISwapSimulationParams = {
      sellToken: mockToken,
      buyToken: mockToken2,
      sellAmount,
      slippage: 0.01,
      user: mockUser,
    } as any

    const simulation = await swapSimulatorManager.simulateSwap(params)

    expect(simulation.type).toBe(SimulationType.Swap)
    expect(simulation.steps).toHaveLength(1)
    expect(simulation.steps[0].type).toBe(SimulationSteps.Swap)
    expect(mockAllowanceManager.getApproval).toHaveBeenCalledWith({
      chainInfo: mockToken.chainInfo,
      spender: '0xTargetContract',
      amount: sellAmount,
      owner: mockUser.wallet.address,
    })
  })

  it('should simulate swap with approval step if allowance is insufficient', async () => {
    const sellAmount = { token: mockToken, amount: 100n } as any
    
    mockSwapManager.getSwapDataExactInput.mockResolvedValue({
      provider: '1inch',
      targetContract: '0xTargetContract',
      calldata: '0xCalldata',
      value: '0',
      toTokenAmount: { token: mockToken2, amount: 90n } as any,
    } as any)

    mockAllowanceManager.getApproval.mockResolvedValue({
      metadata: {
        approvalAmount: sellAmount,
        approvalSpender: '0xTargetContract',
      },
      transaction: {
        to: '0xTargetContract',
        data: '0xApproveData',
        value: 0n,
      }
    } as any)

    const params: ISwapSimulationParams = {
      sellToken: mockToken,
      buyToken: mockToken2,
      sellAmount,
      slippage: 0.01,
      user: mockUser,
    } as any

    const simulation = await swapSimulatorManager.simulateSwap(params)

    expect(simulation.type).toBe(SimulationType.Swap)
    expect(simulation.steps).toHaveLength(2)
    expect(simulation.steps[0].type).toBe(SimulationSteps.Approve)
    expect(simulation.steps[1].type).toBe(SimulationSteps.Swap)
  })
})
