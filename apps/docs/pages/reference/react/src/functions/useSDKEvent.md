[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [react/src](../README.md) / useSDKEvent

# Function: useSDKEvent()

> **useSDKEvent**\<`K`\>(`params`, `eventName`, `callback`): `void`

React hook to subscribe to SDK events via the EventBus

## Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* keyof `ISDKEventMap` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | `UseSdk` | parameters required for the SDK connection |
| `eventName` | `K` | the name of the event to listen to |
| `callback` | (`payload`) => `void` | the function to call when the event is emitted |

## Returns

`void`
