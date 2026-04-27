import { IEventBus, ISDKEventMap } from '@thesolidchain/events-common'

/**
 * @name EventBus
 * @description A lightweight, strongly-typed event bus implementation
 */
export class EventBus implements IEventBus {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private _listeners: Map<keyof ISDKEventMap, Set<(payload: any) => void>>

  constructor() {
    this._listeners = new Map()
  }

  public on<K extends keyof ISDKEventMap>(event: K, listener: (payload: ISDKEventMap[K]) => void): void {
    if (!this._listeners.has(event)) {
      this._listeners.set(event, new Set())
    }
    this._listeners.get(event)!.add(listener)
  }

  public off<K extends keyof ISDKEventMap>(event: K, listener: (payload: ISDKEventMap[K]) => void): void {
    const listenersForEvent = this._listeners.get(event)
    if (listenersForEvent) {
      listenersForEvent.delete(listener)
      if (listenersForEvent.size === 0) {
        this._listeners.delete(event)
      }
    }
  }

  public emit<K extends keyof ISDKEventMap>(event: K, payload: ISDKEventMap[K]): void {
    const listenersForEvent = this._listeners.get(event)
    if (listenersForEvent) {
      // Create a shallow copy to prevent issues if listeners modify the Set during iteration
      const currentListeners = new Set(listenersForEvent)
      currentListeners.forEach(listener => {
        try {
          listener(payload)
        } catch (error) {
          console.error(`Error executing listener for event ${event}:`, error)
        }
      })
    }
  }
}
