[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / SendTokenAction

# Class: SendTokenAction

## Extends

- [`AaveV3LendingPoolId`](../../../../client/src/variables/AaveV3LendingPoolId.md)\<*typeof* [`Config`](#config)\>

## Constructors

### Constructor

> **new SendTokenAction**(): `SendTokenAction`

#### Returns

`SendTokenAction`

#### Inherited from

`BaseAction<typeof SendTokenAction.Config>.constructor`

## Properties

### Config

> `readonly` `static` **Config**: `object`

#### name

> `readonly` **name**: `"SendToken"` = `'SendToken'`

#### parametersAbi

> `readonly` **parametersAbi**: readonly \[`"(address asset, address to, uint256 amount)"`\]

#### storageInputs

> `readonly` **storageInputs**: readonly \[`"asset"`, `"to"`, `"amount"`\]

#### storageOutputs

> `readonly` **storageOutputs**: readonly \[\] = `[]`

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
| `name` | `"SendToken"` | `'SendToken'` |
| `parametersAbi` | readonly \[`"(address asset, address to, uint256 amount)"`\] | - |
| `storageInputs` | readonly \[`"asset"`, `"to"`, `"amount"`\] | - |
| `storageOutputs` | readonly \[\] | `[]` |
| `version` | `4` | `4` |

## Methods

### encodeCall()

> **encodeCall**(`params`, `paramsMapping?`): `ActionCall`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `sendAmount`: [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md); `sendTo`: [`IAddress`](../../../../client/src/interfaces/IAddress.md); \} |
| `params.sendAmount` | [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md) |
| `params.sendTo?` | [`IAddress`](../../../../client/src/interfaces/IAddress.md) |
| `paramsMapping?` | `any` |

#### Returns

`ActionCall`
