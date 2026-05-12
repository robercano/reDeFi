[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / isSwapError

# Function: isSwapError()

> **isSwapError**(`maybeSwapErrorData`): `maybeSwapErrorData is Readonly<{ apiQuery?: string; message?: string; reason?: string; statusCode?: number; subtype?: SwapErrorType; type?: SwapError }>`

Type guard for ISwapError

## Parameters

### maybeSwapErrorData

`unknown`

## Returns

`maybeSwapErrorData is Readonly<{ apiQuery?: string; message?: string; reason?: string; statusCode?: number; subtype?: SwapErrorType; type?: SwapError }>`

true if the object is an ISwapError
