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
    expect(simulation.steps[0].input.depositAmount.value).toBe(mockAmount)
    expect(simulation.steps[0].input.borrowAmount.value).toBeUndefined()
    expect(simulation.steps[0].output.depositAmount).toBe(mockAmount)
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
    expect(simulation.steps[0].input.depositAmount.value).toBeUndefined()
    expect(simulation.steps[0].input.borrowAmount.value).toBe(mockAmount)
    expect(simulation.steps[0].output.borrowAmount).toBe(mockAmount)
  })
})
