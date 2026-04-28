[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / SendTokenAction

# Class: SendTokenAction

## Extends

- `BaseAction`\<*typeof* [`Config`](#config)\>

## Constructors

### Constructor

> **new SendTokenAction**(): `SendTokenAction`

#### Returns

`SendTokenAction`

#### Inherited from

`BaseAction<typeof SendTokenAction.Config>.constructor`

## Properties

### Config

> `readonly` `static` **Config**: `object`

#### name

> `readonly` **name**: `"SendToken"` = `'SendToken'`

#### parametersAbi

> `readonly` **parametersAbi**: readonly \[`"(address asset, address to, uint256 amount)"`\]

#### storageInputs

> `readonly` **storageInputs**: readonly \[`"asset"`, `"to"`, `"amount"`\]

#### storageOutputs

> `readonly` **storageOutputs**: readonly \[\] = `[]`

#### version

> `readonly` **version**: `4` = `4`

## Accessors

### config

#### Get Signature

> **get** **config**(): `object`

##### Returns

`object`

| Name | Type | Default value |
| ------ | ------ | ------ |
| `name` | `"SendToken"` | `'SendToken'` |
| `parametersAbi` | readonly \[`"(address asset, address to, uint256 amount)"`\] | - |
| `storageInputs` | readonly \[`"asset"`, `"to"`, `"amount"`\] | - |
| `storageOutputs` | readonly \[\] | `[]` |
| `version` | `4` | `4` |

#### Overrides

`BaseAction.config`

## Methods

### \_encodeCall()

> `protected` **\_encodeCall**(`params`): `ActionCall`

Encodes the call to the action

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | \{ `arguments`: readonly \[\{ `amount`: `bigint`; `asset`: `` `0x${string}` ``; `to`: `` `0x${string}` ``; \}\]; `mapping?`: `InputSlotsMapping`; \} | - |
| `params.arguments` | readonly \[\{ `amount`: `bigint`; `asset`: `` `0x${string}` ``; `to`: `` `0x${string}` ``; \}\] | The parameters to encode |
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
| `params` | \{ `sendAmount`: [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md); `sendTo`: [`IAddress`](../../../../client/src/interfaces/IAddress.md); \} |
| `params.sendAmount` | [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md) |
| `params.sendTo?` | [`IAddress`](../../../../client/src/interfaces/IAddress.md) |
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
