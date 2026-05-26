import { describe, it, expect, vi } from 'vitest'
import { EventBus } from '../src/implementation/EventBus'
import { IChainInfo } from '@thesolidchain/sdk-common'

describe('EventBus', () => {
  const mockChainInfo = {
    chainId: 1,
    name: 'Ethereum',
  } as unknown as IChainInfo

  it('should allow listeners to subscribe and receive events', () => {
    const eventBus = new EventBus()
    const listener = vi.fn()

    eventBus.on('NewBlockMined', listener)

    const payload = { chainInfo: mockChainInfo, blockNumber: 100n }
    eventBus.emit('NewBlockMined', payload)

    expect(listener).toHaveBeenCalledTimes(1)
    expect(listener).toHaveBeenCalledWith(payload)
  })

  it('should allow multiple listeners for the same event', () => {
    const eventBus = new EventBus()
    const listenerA = vi.fn()
    const listenerB = vi.fn()

    eventBus.on('PositionUpdated', listenerA)
    eventBus.on('PositionUpdated', listenerB)

    const payload = { userAddress: '0x123' }
    eventBus.emit('PositionUpdated', payload)

    expect(listenerA).toHaveBeenCalledTimes(1)
    expect(listenerB).toHaveBeenCalledTimes(1)
  })

  it('should allow listeners to unsubscribe', () => {
    const eventBus = new EventBus()
    const listener = vi.fn()

    eventBus.on('PositionUpdated', listener)
    eventBus.off('PositionUpdated', listener)

    eventBus.emit('PositionUpdated', { userAddress: '0x123' })

    expect(listener).not.toHaveBeenCalled()
  })

  it('should not throw if unsubscribing a listener that was not subscribed', () => {
    const eventBus = new EventBus()
    const listener = vi.fn()

    expect(() => eventBus.off('PositionUpdated', listener)).not.toThrow()
  })

  it('should continue executing other listeners if one throws an error', () => {
    const eventBus = new EventBus()

    // Silence console.error for this test as the EventBus logs errors
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    const throwingListener = vi.fn(() => {
      throw new Error('Test error')
    })
    const successfulListener = vi.fn()

    eventBus.on('NewBlockMined', throwingListener)
    eventBus.on('NewBlockMined', successfulListener)

    eventBus.emit('NewBlockMined', { chainInfo: mockChainInfo, blockNumber: 100n })

    expect(throwingListener).toHaveBeenCalledTimes(1)
    expect(successfulListener).toHaveBeenCalledTimes(1)
    expect(consoleSpy).toHaveBeenCalled()

    consoleSpy.mockRestore()
  })
})
