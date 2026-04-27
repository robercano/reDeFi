[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / SwapAction

# Class: SwapAction

## Extends

- [`AaveV3LendingPoolId`](../../../../client/src/variables/AaveV3LendingPoolId.md)\<*typeof* [`Config`](#config)\>

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

## Methods

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
| `paramsMapping?` | `any` |

#### Returns

`ActionCall`
