[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / createTimeoutSignal

# Function: createTimeoutSignal()

> **createTimeoutSignal**(`timeout?`): `AbortSignal`

Creates an AbortSignal with the standard timeout

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `timeout` | `number` | `FETCH_CONFIG.TIMEOUT` | Timeout in milliseconds (defaults to standard timeout) |

## Returns

`AbortSignal`

AbortSignal that will abort after the specified timeout
