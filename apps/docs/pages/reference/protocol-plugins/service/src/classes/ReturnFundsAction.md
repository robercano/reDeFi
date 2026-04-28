[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / ReturnFundsAction

# Class: ReturnFundsAction

## Extends

- `BaseAction`\<*typeof* [`Config`](#config)\>

## Constructors

### Constructor

> **new ReturnFundsAction**(): `ReturnFundsAction`

#### Returns

`ReturnFundsAction`

#### Inherited from

`BaseAction<typeof ReturnFundsAction.Config>.constructor`

## Properties

### Config

> `static` **Config**: `object`

#### name

> `readonly` **name**: `"ReturnFunds"` = `'ReturnFunds'`

#### parametersAbi

> `readonly` **parametersAbi**: readonly \[`"(address asset)"`\]

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
| `name` | `"ReturnFunds"` | `'ReturnFunds'` |
| `parametersAbi` | readonly \[`"(address asset)"`\] | - |
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
| `params` | \{ `arguments`: readonly \[\{ `asset`: `` `0x${string}` ``; \}\]; `mapping?`: `InputSlotsMapping`; \} | - |
| `params.arguments` | readonly \[\{ `asset`: `` `0x${string}` ``; \}\] | The parameters to encode |
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
| `params` | \{ `asset`: [`IToken`](../../../../client/src/interfaces/IToken.md); \} |
| `params.asset` | [`IToken`](../../../../client/src/interfaces/IToken.md) |
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
