import { ISDKEventMap } from './ISDKEventMap'

/**
 * IEventBus
 * A strongly-typed event bus for internal SDK messaging
 */
export interface IEventBus {
  /**
   * on
   * Subscribe to an event
   */
  on<K extends keyof ISDKEventMap>(event: K, listener: (payload: ISDKEventMap[K]) => void): void

  /**
   * off
   * Unsubscribe from an event
   */
  off<K extends keyof ISDKEventMap>(event: K, listener: (payload: ISDKEventMap[K]) => void): void

  /**
   * emit
   * Publish an event with its payload
   */
  emit<K extends keyof ISDKEventMap>(event: K, payload: ISDKEventMap[K]): void
}
