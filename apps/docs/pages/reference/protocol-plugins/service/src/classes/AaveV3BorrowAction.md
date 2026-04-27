[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / AaveV3BorrowAction

# Class: AaveV3BorrowAction

## Extends

- [`AaveV3LendingPoolId`](../../../../client/src/variables/AaveV3LendingPoolId.md)\<*typeof* [`Config`](#config)\>

## Constructors

### Constructor

> **new AaveV3BorrowAction**(): `AaveV3BorrowAction`

#### Returns

`AaveV3BorrowAction`

#### Inherited from

`BaseAction<typeof AaveV3BorrowAction.Config>.constructor`

## Properties

### Config

> `readonly` `static` **Config**: `object`

#### name

> `readonly` **name**: `"AaveV3Borrow"` = `'AaveV3Borrow'`

#### parametersAbi

> `readonly` **parametersAbi**: readonly \[`"(address asset, uint256 amount, address to)"`\]

#### storageInputs

> `readonly` **storageInputs**: readonly \[\] = `[]`

#### storageOutputs

> `readonly` **storageOutputs**: readonly \[`"borrowedAmount"`\]

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
| `name` | `"AaveV3Borrow"` | `'AaveV3Borrow'` |
| `parametersAbi` | readonly \[`"(address asset, uint256 amount, address to)"`\] | - |
| `storageInputs` | readonly \[\] | `[]` |
| `storageOutputs` | readonly \[`"borrowedAmount"`\] | - |
| `version` | `4` | `4` |

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
