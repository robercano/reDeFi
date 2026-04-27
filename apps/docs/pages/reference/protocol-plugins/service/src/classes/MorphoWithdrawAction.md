[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / MorphoWithdrawAction

# Class: MorphoWithdrawAction

## Extends

- [`AaveV3LendingPoolId`](../../../../client/src/variables/AaveV3LendingPoolId.md)\<*typeof* [`Config`](#config)\>

## Constructors

### Constructor

> **new MorphoWithdrawAction**(): `MorphoWithdrawAction`

#### Returns

`MorphoWithdrawAction`

#### Inherited from

`BaseAction<typeof MorphoWithdrawAction.Config>.constructor`

## Properties

### Config

> `readonly` `static` **Config**: `object`

#### name

> `readonly` **name**: `"MorphoBlueWithdraw"` = `'MorphoBlueWithdraw'`

#### parametersAbi

> `readonly` **parametersAbi**: readonly \[`"(MarketParams marketParams, uint256 amount, address to)"`, `"struct MarketParams { address loanToken; address collateralToken; address oracle; address irm; uint256 lltv; }"`\]

#### storageInputs

> `readonly` **storageInputs**: readonly \[`"marketParams"`, `"amount"`, `"to"`\]

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
| `name` | `"MorphoBlueWithdraw"` | `'MorphoBlueWithdraw'` |
| `parametersAbi` | readonly \[`"(MarketParams marketParams, uint256 amount, address to)"`, `"struct MarketParams { address loanToken; address collateralToken; address oracle; address irm; uint256 lltv; }"`\] | - |
| `storageInputs` | readonly \[`"marketParams"`, `"amount"`, `"to"`\] | - |
| `storageOutputs` | readonly \[`"withdrawnAmount"`\] | - |
| `version` | `0` | `0` |

## Methods

### encodeCall()

> **encodeCall**(`params`, `paramsMapping?`): `ActionCall`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `amount`: [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md); `morphoLendingPool`: [`IMorphoLendingPool`](../interfaces/IMorphoLendingPool.md); `to`: [`IAddress`](../../../../client/src/interfaces/IAddress.md); \} |
| `params.amount` | [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md) |
| `params.morphoLendingPool?` | [`IMorphoLendingPool`](../interfaces/IMorphoLendingPool.md) |
| `params.to?` | [`IAddress`](../../../../client/src/interfaces/IAddress.md) |
| `paramsMapping?` | `any` |

#### Returns

`ActionCall`
