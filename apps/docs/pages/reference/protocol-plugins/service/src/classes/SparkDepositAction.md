[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / SparkDepositAction

# Class: SparkDepositAction

## Extends

- [`AaveV3LendingPoolId`](../../../../client/src/variables/AaveV3LendingPoolId.md)\<*typeof* [`Config`](#config)\>

## Constructors

### Constructor

> **new SparkDepositAction**(): `SparkDepositAction`

#### Returns

`SparkDepositAction`

#### Inherited from

`BaseAction<typeof SparkDepositAction.Config>.constructor`

## Properties

### Config

> `readonly` `static` **Config**: `object`

#### name

> `readonly` **name**: `"SparkDeposit"` = `'SparkDeposit'`

#### parametersAbi

> `readonly` **parametersAbi**: readonly \[`"(address asset, uint256 amount, bool sumAmounts, bool setAsCollateral)"`\]

#### storageInputs

> `readonly` **storageInputs**: readonly \[`"asset"`, `"amountToDeposit"`\]

#### storageOutputs

> `readonly` **storageOutputs**: readonly \[`"depositedAmount"`\]

#### version

> `readonly` **version**: `0` = `0`

## Accessors

### config

#### Get Signature

> **get** **config**(): `object`

##### Returns

`object`

| Name | Type | Default value |
| ------ | ------ | ------ |
| `name` | `"SparkDeposit"` | `'SparkDeposit'` |
| `parametersAbi` | readonly \[`"(address asset, uint256 amount, bool sumAmounts, bool setAsCollateral)"`\] | - |
| `storageInputs` | readonly \[`"asset"`, `"amountToDeposit"`\] | - |
| `storageOutputs` | readonly \[`"depositedAmount"`\] | - |
| `version` | `0` | `0` |

## Methods

### encodeCall()

> **encodeCall**(`params`, `paramsMapping?`): `ActionCall`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `depositAmount`: [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md); `setAsCollateral`: `boolean`; `sumAmounts`: `boolean`; \} |
| `params.depositAmount` | [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md) |
| `params.setAsCollateral?` | `boolean` |
| `params.sumAmounts?` | `boolean` |
| `paramsMapping?` | `any` |

#### Returns

`ActionCall`
