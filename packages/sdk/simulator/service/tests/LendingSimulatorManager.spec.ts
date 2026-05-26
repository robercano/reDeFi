import { describe, it, expect, vi } from 'vitest'
import { LendingSimulatorManager } from '../src/LendingSimulatorManager'
import { IProtocolManager } from '@thesolidchain/protocol-manager-common'
import { IBlockchainManager } from '@thesolidchain/blockchain-client-common'
import { ILendingPoolId, ITokenAmount, SimulationSteps } from '@thesolidchain/sdk-common'

describe('LendingSimulatorManager', () => {
  const mockGetLendingPoolInfo = vi.fn()

  const mockProtocolManager = {
    lending: {
      getLendingPoolInfo: mockGetLendingPoolInfo,
      getLendingPosition: vi.fn(),
    },
  } as unknown as IProtocolManager

  const mockBlockchainManager = {} as IBlockchainManager

  const manager = new LendingSimulatorManager(mockProtocolManager, mockBlockchainManager)

  const mockPoolId = 'pool-1' as unknown as ILendingPoolId
  const mockAmount = { amount: 100n, token: {} } as unknown as ITokenAmount

  it('should simulate supply correctly', async () => {
    mockGetLendingPoolInfo.mockResolvedValueOnce({})

    const simulation = await manager.simulateSupply({
      poolId: mockPoolId,
      amount: mockAmount,
    })

    expect(mockGetLendingPoolInfo).toHaveBeenCalledWith(mockPoolId)
    expect(simulation.steps).toHaveLength(1)
    expect(simulation.steps[0].type).toBe(SimulationSteps.DepositBorrow)
    // @ts-ignore
    expect(simulation.steps[0].inputs.depositAmount.value).toBe(mockAmount)
    // @ts-ignore
    expect(simulation.steps[0].inputs.borrowAmount.value).toBeUndefined()
    // @ts-ignore
    expect(simulation.steps[0].outputs.depositAmount).toBe(mockAmount)
  })

  it('should simulate borrow correctly', async () => {
    mockGetLendingPoolInfo.mockResolvedValueOnce({})

    const simulation = await manager.simulateBorrow({
      poolId: mockPoolId,
      amount: mockAmount,
    })

    expect(mockGetLendingPoolInfo).toHaveBeenCalledWith(mockPoolId)
    expect(simulation.steps).toHaveLength(1)
    expect(simulation.steps[0].type).toBe(SimulationSteps.DepositBorrow)
    // @ts-ignore
    expect(simulation.steps[0].inputs.depositAmount.value).toBeUndefined()
    // @ts-ignore
    expect(simulation.steps[0].inputs.borrowAmount.value).toBe(mockAmount)
    // @ts-ignore
    expect(simulation.steps[0].outputs.borrowAmount).toBe(mockAmount)
  })

  it('should simulate withdraw correctly', async () => {
    mockProtocolManager.lending.getLendingPosition = vi.fn().mockResolvedValueOnce({})

    const simulation = await manager.simulateWithdraw({
      positionId: mockPoolId as any,
      amount: mockAmount,
    })

    expect(mockProtocolManager.lending.getLendingPosition).toHaveBeenCalledWith(mockPoolId)
    expect(simulation.steps).toHaveLength(1)
    expect(simulation.steps[0].type).toBe(SimulationSteps.PaybackWithdraw)
    // @ts-ignore
    expect(simulation.steps[0].inputs.paybackAmount.value).toBeUndefined()
    // @ts-ignore
    expect(simulation.steps[0].inputs.withdrawAmount.value).toBe(mockAmount)
    // @ts-ignore
    expect(simulation.steps[0].outputs.withdrawAmount).toBe(mockAmount)
  })

  it('should simulate repay correctly', async () => {
    mockProtocolManager.lending.getLendingPosition = vi.fn().mockResolvedValueOnce({})

    const simulation = await manager.simulateRepay({
      positionId: mockPoolId as any,
      amount: mockAmount,
    })

    expect(mockProtocolManager.lending.getLendingPosition).toHaveBeenCalledWith(mockPoolId)
    expect(simulation.steps).toHaveLength(1)
    expect(simulation.steps[0].type).toBe(SimulationSteps.PaybackWithdraw)
    // @ts-ignore
    expect(simulation.steps[0].inputs.withdrawAmount.value).toBeUndefined()
    // @ts-ignore
    expect(simulation.steps[0].inputs.paybackAmount.value).toBe(mockAmount)
    // @ts-ignore
    expect(simulation.steps[0].outputs.paybackAmount).toBe(mockAmount)
  })
})
