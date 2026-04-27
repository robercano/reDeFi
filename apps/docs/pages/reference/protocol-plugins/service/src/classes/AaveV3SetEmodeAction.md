[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / AaveV3SetEmodeAction

# Class: AaveV3SetEmodeAction

## Extends

- [`AaveV3LendingPoolId`](../../../../client/src/variables/AaveV3LendingPoolId.md)\<*typeof* [`Config`](#config)\>

## Constructors

### Constructor

> **new AaveV3SetEmodeAction**(): `AaveV3SetEmodeAction`

#### Returns

`AaveV3SetEmodeAction`

#### Inherited from

`BaseAction<typeof AaveV3SetEmodeAction.Config>.constructor`

## Properties

### Config

> `readonly` `static` **Config**: `object`

#### name

> `readonly` **name**: `"AaveV3SetEMode"` = `'AaveV3SetEMode'`

#### parametersAbi

> `readonly` **parametersAbi**: readonly \[`"(uint8 categoryId)"`\]

#### storageInputs

> `readonly` **storageInputs**: readonly \[\] = `[]`

#### storageOutputs

> `readonly` **storageOutputs**: readonly \[`"emodeCategory"`\]

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
| `name` | `"AaveV3SetEMode"` | `'AaveV3SetEMode'` |
| `parametersAbi` | readonly \[`"(uint8 categoryId)"`\] | - |
| `storageInputs` | readonly \[\] | `[]` |
| `storageOutputs` | readonly \[`"emodeCategory"`\] | - |
| `version` | `0` | `0` |

## Methods

### encodeCall()

> **encodeCall**(`params`, `paramsMapping?`): `ActionCall`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `emode`: [`EmodeType`](../enumerations/EmodeType.md); \} |
| `params.emode` | [`EmodeType`](../enumerations/EmodeType.md) |
| `paramsMapping?` | `any` |

#### Returns

`ActionCall`
