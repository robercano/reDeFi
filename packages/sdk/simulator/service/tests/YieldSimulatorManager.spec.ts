/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, vi, beforeEach, Mocked } from 'vitest'
import { YieldSimulatorManager } from '../src/YieldSimulatorManager'
import { IProtocolManager, IYieldProtocolManagerFeatures } from '@thesolidchain/protocol-manager-common'
import { IBlockchainManager } from '@thesolidchain/blockchain-client-common'
import { SimulationSteps } from '@thesolidchain/sdk-common'

describe('YieldSimulatorManager', () => {
  let yieldSimulatorManager: YieldSimulatorManager
  let mockProtocolManager: Mocked<IProtocolManager>
  let mockYieldProtocolManager: Mocked<IYieldProtocolManagerFeatures>
  let mockBlockchainManager: Mocked<IBlockchainManager>

  const mockToken = {
    address: { value: '0x1111111111111111111111111111111111111111' },
    decimals: 18,
    symbol: 'MOCK1',
    chainInfo: { chainId: 1, name: 'Mainnet' }
  } as any

  beforeEach(() => {
    mockYieldProtocolManager = {
      getYieldPoolInfo: vi.fn(),
      getYieldPosition: vi.fn(),
    } as unknown as Mocked<IYieldProtocolManagerFeatures>

    mockProtocolManager = {
      yield: mockYieldProtocolManager,
    } as unknown as Mocked<IProtocolManager>

    mockBlockchainManager = {} as unknown as Mocked<IBlockchainManager>

    yieldSimulatorManager = new YieldSimulatorManager(mockProtocolManager, mockBlockchainManager)
  })

  it('should simulate deposit', async () => {
    const amount = { token: mockToken, amount: 100n } as any
    const poolId = { poolAddress: '0xPool' } as any

    mockYieldProtocolManager.getYieldPoolInfo.mockResolvedValue({} as any)

    const simulation = await yieldSimulatorManager.simulateDeposit({ poolId, amount })

    expect(simulation.steps).toHaveLength(1)
    expect(simulation.steps[0].type).toBe(SimulationSteps.DepositYield)
    expect(mockYieldProtocolManager.getYieldPoolInfo).toHaveBeenCalledWith(poolId)
  })

  it('should simulate withdraw', async () => {
    const amount = { token: mockToken, amount: 100n } as any
    const positionId = { positionId: '0xPos' } as any

    mockYieldProtocolManager.getYieldPosition.mockResolvedValue({} as any)

    const simulation = await yieldSimulatorManager.simulateWithdraw({ positionId, amount })

    expect(simulation.steps).toHaveLength(1)
    expect(simulation.steps[0].type).toBe(SimulationSteps.WithdrawYield)
    expect(mockYieldProtocolManager.getYieldPosition).toHaveBeenCalledWith(positionId)
  })
})
