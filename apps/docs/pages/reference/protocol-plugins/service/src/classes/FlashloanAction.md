[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / FlashloanAction

# Class: FlashloanAction

## Extends

- `BaseAction`\<*typeof* [`Config`](#config)\>

## Constructors

### Constructor

> **new FlashloanAction**(): `FlashloanAction`

#### Returns

`FlashloanAction`

#### Inherited from

`BaseAction<typeof FlashloanAction.Config>.constructor`

## Properties

### Config

> `static` **Config**: `object`

#### name

> `readonly` **name**: `"TakeFlashloan"` = `'TakeFlashloan'`

#### parametersAbi

> `readonly` **parametersAbi**: readonly \[`"(uint256 amount, address asset, bool isProxyFlashloan, bool isDPMProxy, uint8 provider, (bytes32 targetHash, bytes callData, bool skipped)[] calls)"`\]

#### storageInputs

> `readonly` **storageInputs**: readonly \[\] = `[]`

#### storageOutputs

> `readonly` **storageOutputs**: readonly \[\] = `[]`

#### version

> `readonly` **version**: `3` = `3`

## Accessors

### config

#### Get Signature

> **get** **config**(): `object`

##### Returns

`object`

| Name | Type | Default value |
| ------ | ------ | ------ |
| `name` | `"TakeFlashloan"` | `'TakeFlashloan'` |
| `parametersAbi` | readonly \[`"(uint256 amount, address asset, bool isProxyFlashloan, bool isDPMProxy, uint8 provider, (bytes32 targetHash, bytes callData, bool skipped)[] calls)"`\] | - |
| `storageInputs` | readonly \[\] | `[]` |
| `storageOutputs` | readonly \[\] | `[]` |
| `version` | `3` | `3` |

#### Overrides

`BaseAction.config`

## Methods

### \_encodeCall()

> `protected` **\_encodeCall**(`params`): `ActionCall`

Encodes the call to the action

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | \{ `arguments`: readonly \[\{ `amount`: `bigint`; `asset`: `` `0x${string}` ``; `calls`: readonly `object`[]; `isDPMProxy`: `boolean`; `isProxyFlashloan`: `boolean`; `provider`: `number`; \}\]; `mapping?`: `InputSlotsMapping`; \} | - |
| `params.arguments` | readonly \[\{ `amount`: `bigint`; `asset`: `` `0x${string}` ``; `calls`: readonly `object`[]; `isDPMProxy`: `boolean`; `isProxyFlashloan`: `boolean`; `provider`: `number`; \}\] | The parameters to encode |
| `params.mapping?` | `InputSlotsMapping` | The mapping of the parameters to the execution storage |

#### Returns

`ActionCall`

The encoded call to the action

#### Inherited from

`BaseAction._encodeCall`

***

### encodeCall()

> **encodeCall**(`params`, `paramsMapping?`): `ActionCall`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `amount`: [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md); `calls`: `ActionCall`[]; `provider`: [`FlashloanProvider`](../../../../client/src/enumerations/FlashloanProvider.md); \} |
| `params.amount` | [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md) |
| `params.calls?` | `ActionCall`[] |
| `params.provider?` | [`FlashloanProvider`](../../../../client/src/enumerations/FlashloanProvider.md) |
| `paramsMapping?` | `InputSlotsMapping` |

#### Returns

`ActionCall`

#### See

IAction.encodeCall

#### Overrides

`BaseAction.encodeCall`

***

### getActionHash()

> **getActionHash**(): `` `0x${string}` ``

#### Returns

`` `0x${string}` ``

#### See

IAction.getActionHash

#### Inherited from

`BaseAction.getActionHash`

***

### getVersionedName()

> **getVersionedName**(): `string`

#### Returns

`string`

#### See

IAction.getVersionedName

#### Inherited from

`BaseAction.getVersionedName`
