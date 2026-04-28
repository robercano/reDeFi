import { useEffect } from 'react'
import { ISDKEventMap } from '@thesolidchain/events-common'
import { useSDK } from './useSDK'

/**
 * React hook to subscribe to SDK events via the EventBus
 * 
 * @param params.params parameters required for the SDK connection
 * @param params.eventName the name of the event to listen to
 * @param params.callback the function to call when the event is emitted
 */
export function useSDKEvent<K extends keyof ISDKEventMap>(
  params: Parameters<typeof useSDK>[0],
  eventName: K,
  callback: (payload: ISDKEventMap[K]) => void,
) {
  const { eventBus } = useSDK(params)

  useEffect(() => {
    // Register the callback
    eventBus.on(eventName, callback)

    // Unsubscribe when the component unmounts
    return () => {
      eventBus.off(eventName, callback)
    }
  }, [eventBus, eventName, callback])
}
