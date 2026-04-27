[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / SDKError

# Class: SDKError

SDKError

## See

ISDKError

## Extends

- `Error`

## Extended by

- [`SwapError`](SwapError.md)

## Implements

- [`ISDKError`](../interfaces/ISDKError.md)

## Constructors

### Constructor

> `protected` **new SDKError**(`params`): `SDKError`

CONSTRUCTOR

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`SDKErrorParameters`](../type-aliases/SDKErrorParameters.md) |

#### Returns

`SDKError`

#### Overrides

`Error.constructor`

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

[`ISDKError`](../interfaces/ISDKError.md).[`[___signature__]`](../interfaces/ISDKError.md#___signature__)

***

### cause?

> `optional` **cause?**: `unknown`

#### Inherited from

`Error.cause`

***

### message

> `readonly` **message**: `string`

Free form debug message, used to debug the issue through the console

#### Implementation of

[`ISDKError`](../interfaces/ISDKError.md).[`message`](../interfaces/ISDKError.md#message)

#### Overrides

`Error.message`

***

### name

> **name**: `string`

#### Inherited from

`Error.name`

***

### reason

> `readonly` **reason**: `string`

Free form reason message, used to provide a short description of the problem

#### Implementation of

[`ISDKError`](../interfaces/ISDKError.md).[`reason`](../interfaces/ISDKError.md#reason)

***

### stack?

> `optional` **stack?**: `string`

#### Inherited from

`Error.stack`

***

### type

> `readonly` **type**: [`SDKErrorType`](../enumerations/SDKErrorType.md)

ATTRIBUTES

#### Implementation of

[`ISDKError`](../interfaces/ISDKError.md).[`type`](../interfaces/ISDKError.md#type)

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

`Error.prepareStackTrace`

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

#### Inherited from

`Error.stackTraceLimit`

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

`Error.captureStackTrace`

***

### createFrom()

> `static` **createFrom**(`params`): [`ISDKError`](../interfaces/ISDKError.md)

FACTORY

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`SDKErrorParameters`](../type-aliases/SDKErrorParameters.md) |

#### Returns

[`ISDKError`](../interfaces/ISDKError.md)
