[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / MorphoPaybackAction

# Class: MorphoPaybackAction

## Extends

- [`AaveV3LendingPoolId`](../../../../client/src/variables/AaveV3LendingPoolId.md)\<*typeof* [`Config`](#config)\>

## Constructors

### Constructor

> **new MorphoPaybackAction**(): `MorphoPaybackAction`

#### Returns

`MorphoPaybackAction`

#### Inherited from

`BaseAction<typeof MorphoPaybackAction.Config>.constructor`

## Properties

### Config

> `readonly` `static` **Config**: `object`

#### name

> `readonly` **name**: `"MorphoBluePayback"` = `'MorphoBluePayback'`

#### parametersAbi

> `readonly` **parametersAbi**: readonly \[`"(MarketParams marketParams, uint256 amount, address onBehalf, bool paybackAll)"`, `"struct MarketParams { address loanToken; address collateralToken; address oracle; address irm; uint256 lltv; }"`\]

#### storageInputs

> `readonly` **storageInputs**: readonly \[`"amount"`\]

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
| `name` | `"MorphoBluePayback"` | `'MorphoBluePayback'` |
| `parametersAbi` | readonly \[`"(MarketParams marketParams, uint256 amount, address onBehalf, bool paybackAll)"`, `"struct MarketParams { address loanToken; address collateralToken; address oracle; address irm; uint256 lltv; }"`\] | - |
| `storageInputs` | readonly \[`"amount"`\] | - |
| `storageOutputs` | readonly \[`"paybackedAmount"`\] | - |
| `version` | `2` | `2` |

## Methods

### encodeCall()

> **encodeCall**(`params`, `paramsMapping?`): `ActionCall`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `amount`: [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md); `morphoLendingPool`: [`IMorphoLendingPool`](../interfaces/IMorphoLendingPool.md); `onBehalf`: [`IAddress`](../../../../client/src/interfaces/IAddress.md); `paybackAll`: `boolean`; \} |
| `params.amount` | [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md) |
| `params.morphoLendingPool?` | [`IMorphoLendingPool`](../interfaces/IMorphoLendingPool.md) |
| `params.onBehalf?` | [`IAddress`](../../../../client/src/interfaces/IAddress.md) |
| `params.paybackAll?` | `boolean` |
| `paramsMapping?` | `any` |

#### Returns

`ActionCall`
