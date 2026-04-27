[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / SwapError

# Class: SwapError

SwapError

## See

ISwapError

## Extends

- [`SDKError`](SDKError.md)

## Implements

- [`ISwapError`](../interfaces/ISwapError.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

#### Implementation of

[`ISwapError`](../interfaces/ISwapError.md).[`[___signature__]`](../interfaces/ISwapError.md#___signature__-1)

#### Inherited from

[`SDKError`](SDKError.md).[`[___signature__]`](SDKError.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

#### Implementation of

`ISwapError.[___signature__]`

#### Inherited from

`SDKError.[___signature__]`

***

### apiQuery

> `readonly` **apiQuery**: `string`

Full URL of the API query that generated the error

#### Implementation of

[`ISwapError`](../interfaces/ISwapError.md).[`apiQuery`](../interfaces/ISwapError.md#apiquery)

***

### cause?

> `optional` **cause?**: `unknown`

#### Inherited from

[`SDKError`](SDKError.md).[`cause`](SDKError.md#cause)

***

### message

> `readonly` **message**: `string`

Free form debug message, used to debug the issue through the console

#### Implementation of

[`ISwapError`](../interfaces/ISwapError.md).[`message`](../interfaces/ISwapError.md#message)

#### Inherited from

[`SDKError`](SDKError.md).[`message`](SDKError.md#message)

***

### name

> **name**: `string`

#### Inherited from

[`SDKError`](SDKError.md).[`name`](SDKError.md#name)

***

### reason

> `readonly` **reason**: `string`

Free form reason message, used to provide a short description of the problem

#### Implementation of

[`ISwapError`](../interfaces/ISwapError.md).[`reason`](../interfaces/ISwapError.md#reason)

#### Inherited from

[`SDKError`](SDKError.md).[`reason`](SDKError.md#reason)

***

### stack?

> `optional` **stack?**: `string`

#### Inherited from

[`SDKError`](SDKError.md).[`stack`](SDKError.md#stack)

***

### statusCode

> `readonly` **statusCode**: `number`

GET or POST status code

#### Implementation of

[`ISwapError`](../interfaces/ISwapError.md).[`statusCode`](../interfaces/ISwapError.md#statuscode)

***

### subtype

> `readonly` **subtype**: [`SwapErrorType`](../enumerations/SwapErrorType.md)

Specific error for the swap service

#### Implementation of

[`ISwapError`](../interfaces/ISwapError.md).[`subtype`](../interfaces/ISwapError.md#subtype)

***

### type

> `readonly` **type**: [`SwapError`](../enumerations/SDKErrorType.md#swaperror)

ATTRIBUTES

#### Implementation of

[`ISwapError`](../interfaces/ISwapError.md).[`type`](../interfaces/ISwapError.md#type)

#### Overrides

[`SDKError`](SDKError.md).[`type`](SDKError.md#type)

***

### prepareStackTrace?

> `static` `optional` **prepareStackTrace?**: (`err`, `stackTraces`) => `any`

Optional override for formatting stack traces

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

#### Returns

`any`

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

[`SDKError`](SDKError.md).[`prepareStackTrace`](SDKError.md#preparestacktrace)

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

#### Inherited from

[`SDKError`](SDKError.md).[`stackTraceLimit`](SDKError.md#stacktracelimit)

## Methods

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

[`SDKError`](SDKError.md).[`captureStackTrace`](SDKError.md#capturestacktrace)

***

### createFrom()

> `static` **createFrom**(`params`): `SwapError`

FACTORY

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`SwapErrorParams`](../type-aliases/SwapErrorParams.md) |

#### Returns

`SwapError`

#### Overrides

[`SDKError`](SDKError.md).[`createFrom`](SDKError.md#createfrom)
