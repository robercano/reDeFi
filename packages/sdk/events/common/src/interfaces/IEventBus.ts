import { ISDKEventMap } from './ISDKEventMap'

/**
 * @name IEventBus
 * @description A strongly-typed event bus for internal SDK messaging
 */
export interface IEventBus {
  /**
   * @name on
   * @description Subscribe to an event
   */
  on<K extends keyof ISDKEventMap>(event: K, listener: (payload: ISDKEventMap[K]) => void): void

  /**
   * @name off
   * @description Unsubscribe from an event
   */
  off<K extends keyof ISDKEventMap>(event: K, listener: (payload: ISDKEventMap[K]) => void): void

  /**
   * @name emit
   * @description Publish an event with its payload
   */
  emit<K extends keyof ISDKEventMap>(event: K, payload: ISDKEventMap[K]): void
}
