[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / isSwapError

# Function: isSwapError()

> **isSwapError**(`maybeSwapErrorData`): `maybeSwapErrorData is Readonly<{ apiQuery: string; message: string; reason: string; statusCode: number; subtype: SwapErrorType; type: SwapError }>`

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `maybeSwapErrorData` | `unknown` | - |

## Returns

`maybeSwapErrorData is Readonly<{ apiQuery: string; message: string; reason: string; statusCode: number; subtype: SwapErrorType; type: SwapError }>`

true if the object is an ISwapError

## Description

Type guard for ISwapError
