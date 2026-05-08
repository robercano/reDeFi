[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / AaveV3DepositAction

# Class: AaveV3DepositAction

## Extends

- `BaseAction`\<*typeof* [`Config`](#config)\>

## Constructors

### Constructor

> **new AaveV3DepositAction**(): `AaveV3DepositAction`

#### Returns

`AaveV3DepositAction`

#### Inherited from

`BaseAction<typeof AaveV3DepositAction.Config>.constructor`

## Properties

### Config

> `readonly` `static` **Config**: `object`

#### name

> `readonly` **name**: `"AaveV3Deposit"` = `'AaveV3Deposit'`

#### parametersAbi

> `readonly` **parametersAbi**: readonly \[`"(address asset, uint256 amount, bool sumAmounts, bool setAsCollateral)"`\]

#### storageInputs

> `readonly` **storageInputs**: readonly \[`"asset"`, `"amountToDeposit"`\]

#### storageOutputs

> `readonly` **storageOutputs**: readonly \[`"depositedAmount"`\]

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
| `name` | `"AaveV3Deposit"` | `'AaveV3Deposit'` |
| `parametersAbi` | readonly \[`"(address asset, uint256 amount, bool sumAmounts, bool setAsCollateral)"`\] | - |
| `storageInputs` | readonly \[`"asset"`, `"amountToDeposit"`\] | - |
| `storageOutputs` | readonly \[`"depositedAmount"`\] | - |
| `version` | `0` | `0` |

#### Overrides

`BaseAction.config`

## Methods

### \_encodeCall()

> `protected` **\_encodeCall**(`params`): `ActionCall`

Encodes the call to the action

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | \{ `arguments`: readonly \[\{ `amount`: `bigint`; `asset`: `` `0x${string}` ``; `setAsCollateral`: `boolean`; `sumAmounts`: `boolean`; \}\]; `mapping?`: `InputSlotsMapping`; \} | - |
| `params.arguments` | readonly \[\{ `amount`: `bigint`; `asset`: `` `0x${string}` ``; `setAsCollateral`: `boolean`; `sumAmounts`: `boolean`; \}\] | The parameters to encode |
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
| `params` | \{ `depositAmount`: [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md); `setAsCollateral`: `boolean`; `sumAmounts`: `boolean`; \} |
| `params.depositAmount` | [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md) |
| `params.setAsCollateral?` | `boolean` |
| `params.sumAmounts?` | `boolean` |
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
