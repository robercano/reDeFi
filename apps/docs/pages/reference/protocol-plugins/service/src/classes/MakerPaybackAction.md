[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / MakerPaybackAction

# Class: MakerPaybackAction

## Extends

- `BaseAction`\<*typeof* [`Config`](#config)\>

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

#### Overrides

`BaseAction.config`

## Methods

### \_encodeCall()

> `protected` **\_encodeCall**(`params`): `ActionCall`

Encodes the call to the action

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `arguments`: readonly \[\{ `amount`: `bigint`; `paybackAll`: `boolean`; `userAddress`: `` `0x${string}` ``; `vaultId`: `bigint`; \}\]; `mapping?`: `InputSlotsMapping`; \} |
| `params.arguments` | readonly \[\{ `amount`: `bigint`; `paybackAll`: `boolean`; `userAddress`: `` `0x${string}` ``; `vaultId`: `bigint`; \}\] |
| `params.mapping?` | `InputSlotsMapping` |

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
| `params` | \{ `amount`: [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md); `paybackAll`: `boolean`; `position`: [`IPosition`](../../../../client/src/interfaces/IPosition.md); `positionsManager`: [`IPositionsManager`](../../../../client/src/interfaces/IPositionsManager.md); \} |
| `params.amount` | [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md) |
| `params.paybackAll?` | `boolean` |
| `params.position?` | [`IPosition`](../../../../client/src/interfaces/IPosition.md) |
| `params.positionsManager?` | [`IPositionsManager`](../../../../client/src/interfaces/IPositionsManager.md) |
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
