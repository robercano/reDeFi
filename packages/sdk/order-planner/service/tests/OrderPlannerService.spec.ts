import { describe, it, expect, vi, beforeEach } from 'vitest'
import { OrderPlannerService } from '../src/implementation/OrderPlannerService'
import { BuildOrderParams, IOrderPlanner } from '@thesolidchain/order-planner-common'
import { SDKError, SimulationType } from '@thesolidchain/sdk-common'

describe('OrderPlannerService', () => {
  let service: OrderPlannerService

  beforeEach(() => {
    service = new OrderPlannerService()
  })

  it('should throw an error if no planner is registered for the simulation type', async () => {
    const mockParams = {
      simulation: { type: SimulationType.Transfer },
    } as unknown as BuildOrderParams

    await expect(service.buildOrder(mockParams)).rejects.toThrowError(SDKError as any)
  })

  it('should route the buildOrder request to the correct registered planner', async () => {
    const mockOrder = { id: 'order-123' }
    const mockPlanner: IOrderPlanner = {
      buildOrder: vi.fn().mockResolvedValue(mockOrder),
    } as unknown as IOrderPlanner

    // Force register a mock planner
    ;(service as any)._orderPlanners.set(SimulationType.Yield, mockPlanner)

    const mockParams = {
      simulation: { type: SimulationType.Yield },
      user: { wallet: { address: '0xabc' } },
    } as unknown as BuildOrderParams

    const result = await service.buildOrder(mockParams)

    expect(result).toBe(mockOrder)
    expect(mockPlanner.buildOrder).toHaveBeenCalledTimes(1)
    expect(mockPlanner.buildOrder).toHaveBeenCalledWith({
      user: mockParams.user,
      positionsManager: mockParams.positionsManager,
      simulation: mockParams.simulation,
      addressBookManager: mockParams.addressBookManager,
      swapManager: mockParams.swapManager,
      protocolsRegistry: mockParams.protocolsRegistry,
      contractsProvider: mockParams.contractsProvider,
    })
  })

  it('should successfully register an order planner via _registerOrderPlanner', () => {
    const mockPlannerInstance = {
      getAcceptedSimulations: vi.fn().mockReturnValue([SimulationType.Yield]),
    }

    // Create a mock class that instantiates our mock instance
    class MockPlannerClass {
      constructor() {
        return mockPlannerInstance
      }
    }

    ;(service as any)._registerOrderPlanner(MockPlannerClass)

    expect(service._orderPlanners.has(SimulationType.Yield)).toBe(true)
    expect(service._orderPlanners.get(SimulationType.Yield)).toBe(mockPlannerInstance)
  })
})
