[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / PullTokenAction

# Class: PullTokenAction

## Extends

- `BaseAction`\<*typeof* [`Config`](#config)\>

## Constructors

### Constructor

> **new PullTokenAction**(): `PullTokenAction`

#### Returns

`PullTokenAction`

#### Inherited from

`BaseAction<typeof PullTokenAction.Config>.constructor`

## Properties

### Config

> `readonly` `static` **Config**: `object`

#### name

> `readonly` **name**: `"PullToken"` = `'PullToken'`

#### parametersAbi

> `readonly` **parametersAbi**: readonly \[`"(address asset, address from, uint256 amount)"`\]

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
| `name` | `"PullToken"` | `'PullToken'` |
| `parametersAbi` | readonly \[`"(address asset, address from, uint256 amount)"`\] | - |
| `storageInputs` | readonly \[\] | `[]` |
| `storageOutputs` | readonly \[\] | `[]` |
| `version` | `3` | `3` |

#### Overrides

`BaseAction.config`

## Methods

### \_encodeCall()

> `protected` **\_encodeCall**(`params`): `ActionCall`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | \{ `arguments`: readonly \[\{ `amount`: `bigint`; `asset`: `` `0x${string}` ``; `from`: `` `0x${string}` ``; \}\]; `mapping?`: `InputSlotsMapping`; \} | The parameters to encode |
| `params.arguments` | readonly \[\{ `amount`: `bigint`; `asset`: `` `0x${string}` ``; `from`: `` `0x${string}` ``; \}\] | - |
| `params.mapping?` | `InputSlotsMapping` | - |

#### Returns

`ActionCall`

The encoded call to the action

#### Description

Encodes the call to the action

#### Inherited from

`BaseAction._encodeCall`

***

### encodeCall()

> **encodeCall**(`params`, `paramsMapping?`): `ActionCall`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `pullAmount`: [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md); `pullFrom`: [`IAddress`](../../../../client/src/interfaces/IAddress.md); \} |
| `params.pullAmount` | [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md) |
| `params.pullFrom?` | [`IAddress`](../../../../client/src/interfaces/IAddress.md) |
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
