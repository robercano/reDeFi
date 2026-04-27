[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / ReturnFundsAction

# Class: ReturnFundsAction

## Extends

- [`AaveV3LendingPoolId`](../../../../client/src/variables/AaveV3LendingPoolId.md)\<*typeof* [`Config`](#config)\>

## Constructors

### Constructor

> **new ReturnFundsAction**(): `ReturnFundsAction`

#### Returns

`ReturnFundsAction`

#### Inherited from

`BaseAction<typeof ReturnFundsAction.Config>.constructor`

## Properties

### Config

> `static` **Config**: `object`

#### name

> `readonly` **name**: `"ReturnFunds"` = `'ReturnFunds'`

#### parametersAbi

> `readonly` **parametersAbi**: readonly \[`"(address asset)"`\]

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
| `name` | `"ReturnFunds"` | `'ReturnFunds'` |
| `parametersAbi` | readonly \[`"(address asset)"`\] | - |
| `storageInputs` | readonly \[\] | `[]` |
| `storageOutputs` | readonly \[\] | `[]` |
| `version` | `3` | `3` |

## Methods

### encodeCall()

> **encodeCall**(`params`, `paramsMapping?`): `ActionCall`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `asset`: [`IToken`](../../../../client/src/interfaces/IToken.md); \} |
| `params.asset` | [`IToken`](../../../../client/src/interfaces/IToken.md) |
| `paramsMapping?` | `any` |

#### Returns

`ActionCall`
