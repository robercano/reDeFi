[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / ISDKError

# Interface: ISDKError

ISDKError
Represents a custom error of the SDK

## Extends

- [`ISDKErrorData`](../type-aliases/ISDKErrorData.md).[`IPrintable`](../../../common/src/interfaces/IPrintable.md)

## Extended by

- [`ISwapError`](ISwapError.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

***

### message

> `readonly` **message**: `string`

Free form debug message, used to debug the issue through the console

#### Overrides

`ISDKErrorData.message`

***

### reason

> `readonly` **reason**: `string`

Free form reason message, used to provide a short description of the problem

#### Overrides

`ISDKErrorData.reason`

***

### type

> `readonly` **type**: [`SDKErrorType`](../../../common/src/enumerations/SDKErrorType.md)

Error type main category

#### Overrides

`ISDKErrorData.type`

## Methods

### toString()

> **toString**(): `string`

toString
Returns a string representation of the object

#### Returns

`string`

string

The string representation should have enough info to debug the object

#### Inherited from

[`IPrintable`](../../../common/src/interfaces/IPrintable.md).[`toString`](../../../common/src/interfaces/IPrintable.md#tostring)
