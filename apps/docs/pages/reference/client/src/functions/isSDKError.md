[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / isSDKError

# Function: isSDKError()

> **isSDKError**(`maybeErrorData`): `maybeErrorData is Readonly<{ message: string; reason: string; type: SDKErrorType }>`

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `maybeErrorData` | `unknown` | - |

## Returns

`maybeErrorData is Readonly<{ message: string; reason: string; type: SDKErrorType }>`

true if the object is an ISDKError

## Description

Type guard for ISDKError
