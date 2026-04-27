[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / SparkBorrowAction

# Class: SparkBorrowAction

## Extends

- [`AaveV3LendingPoolId`](../../../../client/src/variables/AaveV3LendingPoolId.md)\<*typeof* [`Config`](#config)\>

## Constructors

### Constructor

> **new SparkBorrowAction**(): `SparkBorrowAction`

#### Returns

`SparkBorrowAction`

#### Inherited from

`BaseAction<typeof SparkBorrowAction.Config>.constructor`

## Properties

### Config

> `readonly` `static` **Config**: `object`

#### name

> `readonly` **name**: `"SparkBorrow"` = `'SparkBorrow'`

#### parametersAbi

> `readonly` **parametersAbi**: readonly \[`"(address asset, uint256 amount, address to)"`\]

#### storageInputs

> `readonly` **storageInputs**: readonly \[\] = `[]`

#### storageOutputs

> `readonly` **storageOutputs**: readonly \[`"borrowedAmount"`\]

#### version

> `readonly` **version**: `2` = `2`

## Accessors

### config

#### Get Signature

> **get** **config**(): `object`

##### Returns

`object`

| Name | Type | Default value |
| ------ | ------ | ------ |
| `name` | `"SparkBorrow"` | `'SparkBorrow'` |
| `parametersAbi` | readonly \[`"(address asset, uint256 amount, address to)"`\] | - |
| `storageInputs` | readonly \[\] | `[]` |
| `storageOutputs` | readonly \[`"borrowedAmount"`\] | - |
| `version` | `2` | `2` |

## Methods

### encodeCall()

> **encodeCall**(`params`, `paramsMapping?`): `ActionCall`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `borrowAmount`: [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md); `borrowTo`: [`IAddress`](../../../../client/src/interfaces/IAddress.md); \} |
| `params.borrowAmount` | [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md) |
| `params.borrowTo?` | [`IAddress`](../../../../client/src/interfaces/IAddress.md) |
| `paramsMapping?` | `any` |

#### Returns

`ActionCall`
