[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / ISwapError

# Interface: ISwapError

## Name

ISwapError

## Description

Represents a custom error of the SDK for the Swap service

## Extends

- [`ISDKError`](ISDKError.md).[`ISwapErrorData`](../type-aliases/ISwapErrorData.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

#### Inherited from

[`ISDKError`](ISDKError.md).[`[___signature__]`](ISDKError.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

#### Inherited from

`ISDKError.[___signature__]`

***

### apiQuery

> `readonly` **apiQuery**: `string`

Full URL of the API query that generated the error

#### Overrides

`ISwapErrorData.apiQuery`

***

### message

> `readonly` **message**: `string`

Free form debug message, used to debug the issue through the console

#### Inherited from

[`ISDKError`](ISDKError.md).[`message`](ISDKError.md#message)

***

### reason

> `readonly` **reason**: `string`

Free form reason message, used to provide a short description of the problem

#### Inherited from

[`ISDKError`](ISDKError.md).[`reason`](ISDKError.md#reason)

***

### statusCode

> `readonly` **statusCode**: `number`

GET or POST status code

#### Overrides

`ISwapErrorData.statusCode`

***

### subtype

> `readonly` **subtype**: [`SwapErrorType`](../../../client/src/enumerations/SwapErrorType.md)

Specific error for the swap service

#### Overrides

`ISwapErrorData.subtype`

***

### type

> `readonly` **type**: `SwapError`

Error type main category

#### Overrides

[`ISDKError`](ISDKError.md).[`type`](ISDKError.md#type)

## Methods

### toString()

> **toString**(): `string`

#### Returns

`string`

string

The string representation should have enough info to debug the object

#### Name

toString

#### Description

Returns a string representation of the object

#### Inherited from

[`ISDKError`](ISDKError.md).[`toString`](ISDKError.md#tostring)
