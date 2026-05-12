[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / isSDKError

# Function: isSDKError()

> **isSDKError**(`maybeErrorData`): `maybeErrorData is Readonly<{ message?: string; reason?: string; type?: SDKErrorType }>`

Type guard for ISDKError

## Parameters

### maybeErrorData

`unknown`

## Returns

`maybeErrorData is Readonly<{ message?: string; reason?: string; type?: SDKErrorType }>`

true if the object is an ISDKError
