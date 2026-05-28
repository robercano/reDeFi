import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ActivityService } from '../src/implementation/ActivityService'
import { ActivityStatus, ActivityType, ChainIds, IActivityRecord } from '@thesolidchain/sdk-common'
import { ISDKManager } from '../src/interfaces/ISDKManager'

describe('ActivityService', () => {
  let sdkManagerMock: { intentSwaps: { checkOrder: ReturnType<typeof vi.fn> } }
  let activityService: ActivityService
  let localStorageMock: { getItem: ReturnType<typeof vi.fn>, setItem: ReturnType<typeof vi.fn>, removeItem: ReturnType<typeof vi.fn>, clear: ReturnType<typeof vi.fn> }

  beforeEach(() => {
    localStorageMock = {
      getItem: vi.fn(),
      setItem: vi.fn(),
      removeItem: vi.fn(),
      clear: vi.fn(),
    }
    vi.stubGlobal('window', { localStorage: localStorageMock })

    sdkManagerMock = {
      intentSwaps: {
        checkOrder: vi.fn(),
      },
    }
    activityService = new ActivityService(sdkManagerMock as unknown as ISDKManager)
  })

  afterEach(() => {
    vi.restoreAllMocks()
    vi.unstubAllGlobals()
  })

  it('should save a new activity record to localStorage', async () => {
    const record: IActivityRecord = {
      id: 'tx-1',
      type: ActivityType.TRANSACTION,
      status: ActivityStatus.PENDING,
      chainId: ChainIds.Mainnet,
      timestamp: Date.now(),
      walletAddress: '0x123',
    }

    localStorageMock.getItem.mockReturnValueOnce(null)

    await activityService.logActivity(record)

    expect(localStorageMock.getItem).toHaveBeenCalledWith('redefi_activity_history_0x123')
    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      'redefi_activity_history_0x123',
      JSON.stringify([record]),
    )
  })

  it('should update an existing activity record', async () => {
    const record: IActivityRecord = {
      id: 'tx-1',
      type: ActivityType.TRANSACTION,
      status: ActivityStatus.PENDING,
      chainId: ChainIds.Mainnet,
      timestamp: Date.now(),
      walletAddress: '0x123',
    }

    localStorageMock.getItem.mockReturnValueOnce(JSON.stringify([record]))

    const updatedRecord = { ...record, status: ActivityStatus.SUCCESS }
    await activityService.logActivity(updatedRecord)

    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      'redefi_activity_history_0x123',
      JSON.stringify([updatedRecord]),
    )
  })

  it('should prepend new records and keep a maximum of 100', async () => {
    const records = Array.from({ length: 100 }, (_, i) => ({
      id: `tx-${i}`,
      type: ActivityType.TRANSACTION,
      status: ActivityStatus.SUCCESS,
      chainId: ChainIds.Mainnet,
      timestamp: Date.now(),
      walletAddress: '0x123',
    }))

    localStorageMock.getItem.mockReturnValueOnce(JSON.stringify(records))

    const newRecord: IActivityRecord = {
      id: 'tx-101',
      type: ActivityType.TRANSACTION,
      status: ActivityStatus.PENDING,
      chainId: ChainIds.Mainnet,
      timestamp: Date.now(),
      walletAddress: '0x123',
    }

    await activityService.logActivity(newRecord)

    const setItemCall = localStorageMock.setItem.mock.calls[0]
    const savedArray = JSON.parse(setItemCall[1])

    expect(savedArray.length).toBe(100)
    expect(savedArray[0].id).toBe('tx-101')
    expect(savedArray[99].id).toBe('tx-98')
  })

  it('should retrieve history', async () => {
    const record: IActivityRecord = {
      id: 'tx-1',
      type: ActivityType.TRANSACTION,
      status: ActivityStatus.PENDING,
      chainId: ChainIds.Mainnet,
      timestamp: Date.now(),
      walletAddress: '0x123',
    }

    localStorageMock.getItem.mockReturnValueOnce(JSON.stringify([record]))

    const history = await activityService.getHistory({ walletAddress: '0x123' })
    expect(history).toEqual([record])
  })

  it('should sync intent status correctly if fulfilled', async () => {
    const record: IActivityRecord = {
      id: 'intent-1',
      type: ActivityType.INTENT,
      status: ActivityStatus.PENDING,
      chainId: ChainIds.Mainnet,
      timestamp: Date.now(),
      walletAddress: '0x123',
    }

    localStorageMock.getItem.mockReturnValue(JSON.stringify([record]))
    sdkManagerMock.intentSwaps.checkOrder.mockResolvedValueOnce({
      order: { status: 'fulfilled' },
    })

    await activityService.syncPending('0x123')

    expect(sdkManagerMock.intentSwaps.checkOrder).toHaveBeenCalledWith({
      orderId: 'intent-1',
      chainId: ChainIds.Mainnet,
    })
    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      'redefi_activity_history_0x123',
      JSON.stringify([{ ...record, status: ActivityStatus.SUCCESS }]),
    )
  })
})
