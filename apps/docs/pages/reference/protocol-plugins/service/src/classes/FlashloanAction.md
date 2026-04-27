[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / FlashloanAction

# Class: FlashloanAction

## Extends

- [`AaveV3LendingPoolId`](../../../../client/src/variables/AaveV3LendingPoolId.md)\<*typeof* [`Config`](#config)\>

## Constructors

### Constructor

> **new FlashloanAction**(): `FlashloanAction`

#### Returns

`FlashloanAction`

#### Inherited from

`BaseAction<typeof FlashloanAction.Config>.constructor`

## Properties

### Config

> `static` **Config**: `object`

#### name

> `readonly` **name**: `"TakeFlashloan"` = `'TakeFlashloan'`

#### parametersAbi

> `readonly` **parametersAbi**: readonly \[`"(uint256 amount, address asset, bool isProxyFlashloan, bool isDPMProxy, uint8 provider, (bytes32 targetHash, bytes callData, bool skipped)[] calls)"`\]

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
| `name` | `"TakeFlashloan"` | `'TakeFlashloan'` |
| `parametersAbi` | readonly \[`"(uint256 amount, address asset, bool isProxyFlashloan, bool isDPMProxy, uint8 provider, (bytes32 targetHash, bytes callData, bool skipped)[] calls)"`\] | - |
| `storageInputs` | readonly \[\] | `[]` |
| `storageOutputs` | readonly \[\] | `[]` |
| `version` | `3` | `3` |

## Methods

### encodeCall()

> **encodeCall**(`params`, `paramsMapping?`): `ActionCall`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `amount`: [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md); `calls`: `ActionCall`[]; `provider`: [`FlashloanProvider`](../../../../client/src/enumerations/FlashloanProvider.md); \} |
| `params.amount` | [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md) |
| `params.calls?` | `ActionCall`[] |
| `params.provider?` | [`FlashloanProvider`](../../../../client/src/enumerations/FlashloanProvider.md) |
| `paramsMapping?` | `any` |

#### Returns

`ActionCall`
