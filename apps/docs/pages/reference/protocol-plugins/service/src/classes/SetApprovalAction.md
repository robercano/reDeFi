[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / SetApprovalAction

# Class: SetApprovalAction

## Extends

- [`AaveV3LendingPoolId`](../../../../client/src/variables/AaveV3LendingPoolId.md)\<*typeof* [`Config`](#config)\>

## Constructors

### Constructor

> **new SetApprovalAction**(): `SetApprovalAction`

#### Returns

`SetApprovalAction`

#### Inherited from

`BaseAction<typeof SetApprovalAction.Config>.constructor`

## Properties

### Config

> `readonly` `static` **Config**: `object`

#### name

> `readonly` **name**: `"SetApproval"` = `'SetApproval'`

#### parametersAbi

> `readonly` **parametersAbi**: readonly \[`"(address asset, address delegate, uint256 amount, bool sumAmounts)"`\]

#### storageInputs

> `readonly` **storageInputs**: readonly \[`"asset"`, `"delegate"`, `"approvalAmount"`\]

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
| `name` | `"SetApproval"` | `'SetApproval'` |
| `parametersAbi` | readonly \[`"(address asset, address delegate, uint256 amount, bool sumAmounts)"`\] | - |
| `storageInputs` | readonly \[`"asset"`, `"delegate"`, `"approvalAmount"`\] | - |
| `storageOutputs` | readonly \[\] | `[]` |
| `version` | `3` | `3` |

## Methods

### encodeCall()

> **encodeCall**(`params`, `paramsMapping?`): `ActionCall`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `approvalAmount`: [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md); `delegate`: [`IAddress`](../../../../client/src/interfaces/IAddress.md); `sumAmounts`: `boolean`; \} |
| `params.approvalAmount` | [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md) |
| `params.delegate?` | [`IAddress`](../../../../client/src/interfaces/IAddress.md) |
| `params.sumAmounts?` | `boolean` |
| `paramsMapping?` | `any` |

#### Returns

`ActionCall`
