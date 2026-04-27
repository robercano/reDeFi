[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / AaveV3WithdrawAction

# Class: AaveV3WithdrawAction

## Extends

- [`AaveV3LendingPoolId`](../../../../client/src/variables/AaveV3LendingPoolId.md)\<*typeof* [`Config`](#config)\>

## Constructors

### Constructor

> **new AaveV3WithdrawAction**(): `AaveV3WithdrawAction`

#### Returns

`AaveV3WithdrawAction`

#### Inherited from

`BaseAction<typeof AaveV3WithdrawAction.Config>.constructor`

## Properties

### Config

> `readonly` `static` **Config**: `object`

#### name

> `readonly` **name**: `"AaveV3Withdraw"` = `'AaveV3Withdraw'`

#### parametersAbi

> `readonly` **parametersAbi**: readonly \[`"(address asset, uint256 amount, address to)"`\]

#### storageInputs

> `readonly` **storageInputs**: readonly \[\] = `[]`

#### storageOutputs

> `readonly` **storageOutputs**: readonly \[`"withdrawnAmount"`\]

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
| `name` | `"AaveV3Withdraw"` | `'AaveV3Withdraw'` |
| `parametersAbi` | readonly \[`"(address asset, uint256 amount, address to)"`\] | - |
| `storageInputs` | readonly \[\] | `[]` |
| `storageOutputs` | readonly \[`"withdrawnAmount"`\] | - |
| `version` | `0` | `0` |

## Methods

### encodeCall()

> **encodeCall**(`params`, `paramsMapping?`): `ActionCall`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `withdrawAmount`: [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md); `withdrawTo`: [`IAddress`](../../../../client/src/interfaces/IAddress.md); \} |
| `params.withdrawAmount` | [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md) |
| `params.withdrawTo?` | [`IAddress`](../../../../client/src/interfaces/IAddress.md) |
| `paramsMapping?` | `any` |

#### Returns

`ActionCall`
