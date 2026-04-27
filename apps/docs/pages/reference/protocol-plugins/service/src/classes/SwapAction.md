[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / SwapAction

# Class: SwapAction

## Extends

- `BaseAction`\<*typeof* [`Config`](#config)\>

## Constructors

### Constructor

> **new SwapAction**(): `SwapAction`

#### Returns

`SwapAction`

#### Inherited from

`BaseAction<typeof SwapAction.Config>.constructor`

## Properties

### Config

> `readonly` `static` **Config**: `object`

#### name

> `readonly` **name**: `"SwapAction"` = `'SwapAction'`

#### parametersAbi

> `readonly` **parametersAbi**: readonly \[`"(address fromAsset, address toAsset, uint256 amount, uint256 receiveAtLeast, uint256 fee, bytes withData, bool collectFeeFromToken)"`\]

#### storageInputs

> `readonly` **storageInputs**: readonly \[\] = `[]`

#### storageOutputs

> `readonly` **storageOutputs**: readonly \[`"received"`\]

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
| `name` | `"SwapAction"` | `'SwapAction'` |
| `parametersAbi` | readonly \[`"(address fromAsset, address toAsset, uint256 amount, uint256 receiveAtLeast, uint256 fee, bytes withData, bool collectFeeFromToken)"`\] | - |
| `storageInputs` | readonly \[\] | `[]` |
| `storageOutputs` | readonly \[`"received"`\] | - |
| `version` | `3` | `3` |

#### Overrides

`BaseAction.config`

## Methods

### \_encodeCall()

> `protected` **\_encodeCall**(`params`): `ActionCall`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | \{ `arguments`: readonly \[\{ `amount`: `bigint`; `collectFeeFromToken`: `boolean`; `fee`: `bigint`; `fromAsset`: `` `0x${string}` ``; `receiveAtLeast`: `bigint`; `toAsset`: `` `0x${string}` ``; `withData`: `` `0x${string}` ``; \}\]; `mapping?`: `InputSlotsMapping`; \} | The parameters to encode |
| `params.arguments` | readonly \[\{ `amount`: `bigint`; `collectFeeFromToken`: `boolean`; `fee`: `bigint`; `fromAsset`: `` `0x${string}` ``; `receiveAtLeast`: `bigint`; `toAsset`: `` `0x${string}` ``; `withData`: `` `0x${string}` ``; \}\] | - |
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
| `params` | \{ `collectFeeInFromToken`: `boolean`; `fee`: [`IPercentage`](../../../../client/src/interfaces/IPercentage.md); `fromAmount`: [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md); `toMinimumAmount`: [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md); `withData`: `` `0x${string}` ``; \} |
| `params.collectFeeInFromToken` | `boolean` |
| `params.fee?` | [`IPercentage`](../../../../client/src/interfaces/IPercentage.md) |
| `params.fromAmount?` | [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md) |
| `params.toMinimumAmount?` | [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md) |
| `params.withData?` | `` `0x${string}` `` |
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
