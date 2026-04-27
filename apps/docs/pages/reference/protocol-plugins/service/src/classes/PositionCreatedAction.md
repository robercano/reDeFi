[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / PositionCreatedAction

# Class: PositionCreatedAction

## Extends

- [`AaveV3LendingPoolId`](../../../../client/src/variables/AaveV3LendingPoolId.md)\<*typeof* [`Config`](#config)\>

## Constructors

### Constructor

> **new PositionCreatedAction**(): `PositionCreatedAction`

#### Returns

`PositionCreatedAction`

#### Inherited from

`BaseAction<typeof PositionCreatedAction.Config>.constructor`

## Properties

### Config

> `static` **Config**: `object`

#### name

> `readonly` **name**: `"PositionCreated"` = `'PositionCreated'`

#### parametersAbi

> `readonly` **parametersAbi**: readonly \[`"(string protocol, string positionType, address collateralToken, address debtToken)"`\]

#### storageInputs

> `readonly` **storageInputs**: readonly \[\] = `[]`

#### storageOutputs

> `readonly` **storageOutputs**: readonly \[\] = `[]`

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
| `name` | `"PositionCreated"` | `'PositionCreated'` |
| `parametersAbi` | readonly \[`"(string protocol, string positionType, address collateralToken, address debtToken)"`\] | - |
| `storageInputs` | readonly \[\] | `[]` |
| `storageOutputs` | readonly \[\] | `[]` |
| `version` | `0` | `0` |

## Methods

### encodeCall()

> **encodeCall**(`params`, `paramsMapping?`): `ActionCall`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `position`: [`ILendingPosition`](../../../../client/src/interfaces/ILendingPosition.md); \} |
| `params.position` | [`ILendingPosition`](../../../../client/src/interfaces/ILendingPosition.md) |
| `paramsMapping?` | `any` |

#### Returns

`ActionCall`
