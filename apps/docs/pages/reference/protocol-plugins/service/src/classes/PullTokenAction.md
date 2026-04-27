[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / PullTokenAction

# Class: PullTokenAction

## Extends

- [`AaveV3LendingPoolId`](../../../../client/src/variables/AaveV3LendingPoolId.md)\<*typeof* [`Config`](#config)\>

## Constructors

### Constructor

> **new PullTokenAction**(): `PullTokenAction`

#### Returns

`PullTokenAction`

#### Inherited from

`BaseAction<typeof PullTokenAction.Config>.constructor`

## Properties

### Config

> `readonly` `static` **Config**: `object`

#### name

> `readonly` **name**: `"PullToken"` = `'PullToken'`

#### parametersAbi

> `readonly` **parametersAbi**: readonly \[`"(address asset, address from, uint256 amount)"`\]

#### storageInputs

> `readonly` **storageInputs**: readonly \[\] = `[]`

#### storageOutputs

> `readonly` **storageOutputs**: readonly \[\] = `[]`

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
| `name` | `"PullToken"` | `'PullToken'` |
| `parametersAbi` | readonly \[`"(address asset, address from, uint256 amount)"`\] | - |
| `storageInputs` | readonly \[\] | `[]` |
| `storageOutputs` | readonly \[\] | `[]` |
| `version` | `3` | `3` |

## Methods

### encodeCall()

> **encodeCall**(`params`, `paramsMapping?`): `ActionCall`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `pullAmount`: [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md); `pullFrom`: [`IAddress`](../../../../client/src/interfaces/IAddress.md); \} |
| `params.pullAmount` | [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md) |
| `params.pullFrom?` | [`IAddress`](../../../../client/src/interfaces/IAddress.md) |
| `paramsMapping?` | `any` |

#### Returns

`ActionCall`
