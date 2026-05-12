import { describe, it, expect, vi, beforeEach } from 'vitest'
import { EventBus } from '../src/implementation/EventBus'
describe('EventBus', () => {
  let eventBus
  beforeEach(() => {
    eventBus = new EventBus()
  })
  it('should allow subscribing and receiving events', () => {
    const listener = vi.fn()
    eventBus.on('PositionUpdated', listener)
    const payload = { userAddress: '0x123' }
    eventBus.emit('PositionUpdated', payload)
    expect(listener).toHaveBeenCalledTimes(1)
    expect(listener).toHaveBeenCalledWith(payload)
  })
  it('should allow unsubscribing from events', () => {
    const listener = vi.fn()
    eventBus.on('PositionUpdated', listener)
    eventBus.off('PositionUpdated', listener)
    const payload = { userAddress: '0x123' }
    eventBus.emit('PositionUpdated', payload)
    expect(listener).not.toHaveBeenCalled()
  })
  it('should not throw if unsubscribing a non-existent listener', () => {
    const listener = vi.fn()
    expect(() => {
      eventBus.off('PositionUpdated', listener)
    }).not.toThrow()
  })
  it('should handle multiple listeners for the same event', () => {
    const listener1 = vi.fn()
    const listener2 = vi.fn()
    eventBus.on('PositionUpdated', listener1)
    eventBus.on('PositionUpdated', listener2)
    const payload = { userAddress: '0x123' }
    eventBus.emit('PositionUpdated', payload)
    expect(listener1).toHaveBeenCalledWith(payload)
    expect(listener2).toHaveBeenCalledWith(payload)
  })
  it('should catch and log errors in listeners without crashing', () => {
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    const badListener = vi.fn(() => {
      throw new Error('Listener failed')
    })
    const goodListener = vi.fn()
    eventBus.on('PositionUpdated', badListener)
    eventBus.on('PositionUpdated', goodListener)
    const payload = { userAddress: '0x123' }
    eventBus.emit('PositionUpdated', payload)
    expect(badListener).toHaveBeenCalled()
    expect(consoleErrorSpy).toHaveBeenCalled()
    expect(goodListener).toHaveBeenCalled()
    consoleErrorSpy.mockRestore()
  })
})
//# sourceMappingURL=EventBus.spec.js.map
