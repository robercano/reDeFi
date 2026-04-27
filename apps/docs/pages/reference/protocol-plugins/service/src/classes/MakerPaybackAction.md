[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / MakerPaybackAction

# Class: MakerPaybackAction

## Extends

- [`AaveV3LendingPoolId`](../../../../client/src/variables/AaveV3LendingPoolId.md)\<*typeof* [`Config`](#config)\>

## Constructors

### Constructor

> **new MakerPaybackAction**(): `MakerPaybackAction`

#### Returns

`MakerPaybackAction`

#### Inherited from

`BaseAction<typeof MakerPaybackAction.Config>.constructor`

## Properties

### Config

> `readonly` `static` **Config**: `object`

#### name

> `readonly` **name**: `"MakerPayback"` = `'MakerPayback'`

#### parametersAbi

> `readonly` **parametersAbi**: readonly \[`"(uint256 vaultId, address userAddress, uint256 amount, bool paybackAll)"`\]

#### storageInputs

> `readonly` **storageInputs**: readonly \[`"vaultId"`\]

#### storageOutputs

> `readonly` **storageOutputs**: readonly \[`"amountPaidBack"`\]

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
| `name` | `"MakerPayback"` | `'MakerPayback'` |
| `parametersAbi` | readonly \[`"(uint256 vaultId, address userAddress, uint256 amount, bool paybackAll)"`\] | - |
| `storageInputs` | readonly \[`"vaultId"`\] | - |
| `storageOutputs` | readonly \[`"amountPaidBack"`\] | - |
| `version` | `0` | `0` |

## Methods

### encodeCall()

> **encodeCall**(`params`, `paramsMapping?`): `ActionCall`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `amount`: [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md); `paybackAll`: `boolean`; `position`: [`IPosition`](../../../../client/src/interfaces/IPosition.md); `positionsManager`: [`IPositionsManager`](../../../../client/src/interfaces/IPositionsManager.md); \} |
| `params.amount` | [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md) |
| `params.paybackAll?` | `boolean` |
| `params.position?` | [`IPosition`](../../../../client/src/interfaces/IPosition.md) |
| `params.positionsManager?` | [`IPositionsManager`](../../../../client/src/interfaces/IPositionsManager.md) |
| `paramsMapping?` | `any` |

#### Returns

`ActionCall`
