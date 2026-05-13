import { IEventBus, ISDKEventMap } from '@thesolidchain/events-common'

/**
 * EventBus
 * A lightweight, strongly-typed event bus implementation used across the reDeFi SDK
 * to facilitate pub/sub communication between decoupled services.
 * 
 * New developers: Use this class to emit or subscribe to SDK-wide events defined
 * in the ISDKEventMap interface without tightly coupling components.
 */
export class EventBus implements IEventBus {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private _listeners: Map<keyof ISDKEventMap, Set<(payload: any) => void>>

  constructor() {
    this._listeners = new Map()
  }

  /**
   * Subscribes a listener function to a specific event type.
   * 
   * @param event - The key of the event to listen for, as defined in `ISDKEventMap`.
   * @param listener - The callback function to execute when the event is emitted. 
   *                   It receives the strictly typed payload for that event.
   */
  public on<K extends keyof ISDKEventMap>(
    event: K,
    listener: (payload: ISDKEventMap[K]) => void,
  ): void {
    if (!this._listeners.has(event)) {
      this._listeners.set(event, new Set())
    }
    this._listeners.get(event)!.add(listener)
  }

  /**
   * Unsubscribes a specific listener function from an event type.
   * 
   * @param event - The key of the event to stop listening for.
   * @param listener - The exact callback function reference that was previously registered.
   */
  public off<K extends keyof ISDKEventMap>(
    event: K,
    listener: (payload: ISDKEventMap[K]) => void,
  ): void {
    const listenersForEvent = this._listeners.get(event)
    if (listenersForEvent) {
      listenersForEvent.delete(listener)
      if (listenersForEvent.size === 0) {
        this._listeners.delete(event)
      }
    }
  }

  /**
   * Emits an event, triggering all registered listeners synchronously.
   * Listeners are executed in an isolated try-catch block so that if one listener
   * throws an error, subsequent listeners will still execute.
   * 
   * @param event - The key of the event to emit.
   * @param payload - The data payload associated with the event, properly typed according to `ISDKEventMap`.
   */
  public emit<K extends keyof ISDKEventMap>(event: K, payload: ISDKEventMap[K]): void {
    const listenersForEvent = this._listeners.get(event)
    if (listenersForEvent) {
      // Create a shallow copy to prevent issues if listeners modify the Set during iteration
      const currentListeners = new Set(listenersForEvent)
      currentListeners.forEach((listener) => {
        try {
          listener(payload)
        } catch (error) {
          console.error(`Error executing listener for event ${event}:`, error)
        }
      })
    }
  }
}
