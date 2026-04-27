[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / MorphoDepositAction

# Class: MorphoDepositAction

## Extends

- [`AaveV3LendingPoolId`](../../../../client/src/variables/AaveV3LendingPoolId.md)\<*typeof* [`Config`](#config)\>

## Constructors

### Constructor

> **new MorphoDepositAction**(): `MorphoDepositAction`

#### Returns

`MorphoDepositAction`

#### Inherited from

`BaseAction<typeof MorphoDepositAction.Config>.constructor`

## Properties

### Config

> `readonly` `static` **Config**: `object`

#### name

> `readonly` **name**: `"MorphoBlueDeposit"` = `'MorphoBlueDeposit'`

#### parametersAbi

> `readonly` **parametersAbi**: readonly \[`"(MarketParams marketParams, uint256 amount, bool sumAmounts)"`, `"struct MarketParams { address loanToken; address collateralToken; address oracle; address irm; uint256 lltv; }"`\]

#### storageInputs

> `readonly` **storageInputs**: readonly \[`"marketParams"`, `"amount"`, `"sumAmounts"`\]

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
| `name` | `"MorphoBlueDeposit"` | `'MorphoBlueDeposit'` |
| `parametersAbi` | readonly \[`"(MarketParams marketParams, uint256 amount, bool sumAmounts)"`, `"struct MarketParams { address loanToken; address collateralToken; address oracle; address irm; uint256 lltv; }"`\] | - |
| `storageInputs` | readonly \[`"marketParams"`, `"amount"`, `"sumAmounts"`\] | - |
| `storageOutputs` | readonly \[`"depositedAmount"`\] | - |
| `version` | `0` | `0` |

## Methods

### encodeCall()

> **encodeCall**(`params`, `paramsMapping?`): `ActionCall`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `amount`: [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md); `morphoLendingPool`: [`IMorphoLendingPool`](../interfaces/IMorphoLendingPool.md); `sumAmounts`: `boolean`; \} |
| `params.amount` | [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md) |
| `params.morphoLendingPool?` | [`IMorphoLendingPool`](../interfaces/IMorphoLendingPool.md) |
| `params.sumAmounts?` | `boolean` |
| `paramsMapping?` | `any` |

#### Returns

`ActionCall`
