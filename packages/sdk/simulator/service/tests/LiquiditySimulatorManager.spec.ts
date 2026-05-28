/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, vi, beforeEach, Mocked } from 'vitest'
import { LiquiditySimulatorManager } from '../src/LiquiditySimulatorManager'
import { IProtocolManager, ILiquidityProtocolManagerFeatures } from '@thesolidchain/protocol-manager-common'
import { IBlockchainManager } from '@thesolidchain/blockchain-client-common'
import { SimulationSteps } from '@thesolidchain/sdk-common'

describe('LiquiditySimulatorManager', () => {
  let liquiditySimulatorManager: LiquiditySimulatorManager
  let mockProtocolManager: Mocked<IProtocolManager>
  let mockLiquidityProtocolManager: Mocked<ILiquidityProtocolManagerFeatures>
  let mockBlockchainManager: Mocked<IBlockchainManager>

  const mockToken = {
    address: { value: '0x1111111111111111111111111111111111111111' },
    decimals: 18,
    symbol: 'MOCK1',
    chainInfo: { chainId: 1, name: 'Mainnet' }
  } as any

  beforeEach(() => {
    mockLiquidityProtocolManager = {
      getLiquidityPoolInfo: vi.fn(),
      getLiquidityPosition: vi.fn(),
    } as unknown as Mocked<ILiquidityProtocolManagerFeatures>

    mockProtocolManager = {
      liquidity: mockLiquidityProtocolManager,
    } as unknown as Mocked<IProtocolManager>

    mockBlockchainManager = {} as unknown as Mocked<IBlockchainManager>

    liquiditySimulatorManager = new LiquiditySimulatorManager(mockProtocolManager, mockBlockchainManager)
  })

  it('should simulate provide liquidity', async () => {
    const amounts = [{ token: mockToken, amount: 100n } as any]
    const poolId = { poolAddress: '0xPool' } as any

    mockLiquidityProtocolManager.getLiquidityPoolInfo.mockResolvedValue({} as any)

    const simulation = await liquiditySimulatorManager.simulateProvide({ poolId, amounts })

    expect(simulation.steps).toHaveLength(1)
    expect(simulation.steps[0].type).toBe(SimulationSteps.ProvideLiquidity)
    expect(mockLiquidityProtocolManager.getLiquidityPoolInfo).toHaveBeenCalledWith(poolId)
  })

  it('should simulate remove liquidity', async () => {
    const amount = { token: mockToken, amount: 100n } as any
    const positionId = { positionId: '0xPos' } as any

    mockLiquidityProtocolManager.getLiquidityPosition.mockResolvedValue({} as any)

    const simulation = await liquiditySimulatorManager.simulateRemove({ positionId, amount })

    expect(simulation.steps).toHaveLength(1)
    expect(simulation.steps[0].type).toBe(SimulationSteps.RemoveLiquidity)
    expect(mockLiquidityProtocolManager.getLiquidityPosition).toHaveBeenCalledWith(positionId)
  })
})
