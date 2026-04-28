[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / AaveV3PaybackAction

# Class: AaveV3PaybackAction

## Extends

- `BaseAction`\<*typeof* [`Config`](#config)\>

## Constructors

### Constructor

> **new AaveV3PaybackAction**(): `AaveV3PaybackAction`

#### Returns

`AaveV3PaybackAction`

#### Inherited from

`BaseAction<typeof AaveV3PaybackAction.Config>.constructor`

## Properties

### Config

> `readonly` `static` **Config**: `object`

#### name

> `readonly` **name**: `"AaveV3Payback"` = `'AaveV3Payback'`

#### parametersAbi

> `readonly` **parametersAbi**: readonly \[`"(address asset, uint256 amount, bool paybackAll, address onBehalf)"`\]

#### storageInputs

> `readonly` **storageInputs**: readonly \[`"asset"`, `"amountToPayback"`\]

#### storageOutputs

> `readonly` **storageOutputs**: readonly \[`"paybackedAmount"`\]

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
| `name` | `"AaveV3Payback"` | `'AaveV3Payback'` |
| `parametersAbi` | readonly \[`"(address asset, uint256 amount, bool paybackAll, address onBehalf)"`\] | - |
| `storageInputs` | readonly \[`"asset"`, `"amountToPayback"`\] | - |
| `storageOutputs` | readonly \[`"paybackedAmount"`\] | - |
| `version` | `4` | `4` |

#### Overrides

`BaseAction.config`

## Methods

### \_encodeCall()

> `protected` **\_encodeCall**(`params`): `ActionCall`

Encodes the call to the action

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | \{ `arguments`: readonly \[\{ `amount`: `bigint`; `asset`: `` `0x${string}` ``; `onBehalf`: `` `0x${string}` ``; `paybackAll`: `boolean`; \}\]; `mapping?`: `InputSlotsMapping`; \} | - |
| `params.arguments` | readonly \[\{ `amount`: `bigint`; `asset`: `` `0x${string}` ``; `onBehalf`: `` `0x${string}` ``; `paybackAll`: `boolean`; \}\] | The parameters to encode |
| `params.mapping?` | `InputSlotsMapping` | The mapping of the parameters to the execution storage |

#### Returns

`ActionCall`

The encoded call to the action

#### Inherited from

`BaseAction._encodeCall`

***

### encodeCall()

> **encodeCall**(`params`, `paramsMapping?`): `ActionCall`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `onBehalf`: [`IAddress`](../../../../client/src/interfaces/IAddress.md); `paybackAll`: `boolean`; `paybackAmount`: [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md); \} |
| `params.onBehalf` | [`IAddress`](../../../../client/src/interfaces/IAddress.md) |
| `params.paybackAll?` | `boolean` |
| `params.paybackAmount?` | [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md) |
| `paramsMapping?` | `InputSlotsMapping` |

#### Returns

`ActionCall`

#### See

IAction.encodeCall

#### Overrides

`BaseAction.encodeCall`

***

### getActionHash()

> **getActionHash**(): `` `0x${string}` ``

#### Returns

`` `0x${string}` ``

#### See

IAction.getActionHash

#### Inherited from

`BaseAction.getActionHash`

***

### getVersionedName()

> **getVersionedName**(): `string`

#### Returns

`string`

#### See

IAction.getVersionedName

#### Inherited from

`BaseAction.getVersionedName`
