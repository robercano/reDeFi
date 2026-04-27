[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / SparkPaybackAction

# Class: SparkPaybackAction

## Extends

- [`AaveV3LendingPoolId`](../../../../client/src/variables/AaveV3LendingPoolId.md)\<*typeof* [`Config`](#config)\>

## Constructors

### Constructor

> **new SparkPaybackAction**(): `SparkPaybackAction`

#### Returns

`SparkPaybackAction`

#### Inherited from

`BaseAction<typeof SparkPaybackAction.Config>.constructor`

## Properties

### Config

> `readonly` `static` **Config**: `object`

#### name

> `readonly` **name**: `"SparkPayback"` = `'SparkPayback'`

#### parametersAbi

> `readonly` **parametersAbi**: readonly \[`"(address asset, uint256 amount, bool paybackAll, address onBehalf)"`\]

#### storageInputs

> `readonly` **storageInputs**: readonly \[`"asset"`, `"amountToPayback"`\]

#### storageOutputs

> `readonly` **storageOutputs**: readonly \[`"paybackedAmount"`\]

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
| `name` | `"SparkPayback"` | `'SparkPayback'` |
| `parametersAbi` | readonly \[`"(address asset, uint256 amount, bool paybackAll, address onBehalf)"`\] | - |
| `storageInputs` | readonly \[`"asset"`, `"amountToPayback"`\] | - |
| `storageOutputs` | readonly \[`"paybackedAmount"`\] | - |
| `version` | `2` | `2` |

## Methods

### encodeCall()

> **encodeCall**(`params`, `paramsMapping?`): `ActionCall`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `onBehalf`: [`IAddress`](../../../../client/src/interfaces/IAddress.md); `paybackAll`: `boolean`; `paybackAmount`: [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md); \} |
| `params.onBehalf` | [`IAddress`](../../../../client/src/interfaces/IAddress.md) |
| `params.paybackAll?` | `boolean` |
| `params.paybackAmount?` | [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md) |
| `paramsMapping?` | `any` |

#### Returns

`ActionCall`
