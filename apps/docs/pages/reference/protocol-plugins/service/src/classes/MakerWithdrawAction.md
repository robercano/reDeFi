[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / MakerWithdrawAction

# Class: MakerWithdrawAction

## Extends

- `BaseAction`\<*typeof* [`Config`](#config)\>

## Constructors

### Constructor

> **new MakerWithdrawAction**(): `MakerWithdrawAction`

#### Returns

`MakerWithdrawAction`

#### Inherited from

`BaseAction<typeof MakerWithdrawAction.Config>.constructor`

## Properties

### Config

> `readonly` `static` **Config**: `object`

#### name

> `readonly` **name**: `"MakerWithdraw"` = `'MakerWithdraw'`

#### parametersAbi

> `readonly` **parametersAbi**: readonly \[`"(uint256 vaultId, address userAddress, address joinAddr, uint256 amount)"`\]

#### storageInputs

> `readonly` **storageInputs**: readonly \[`"vaultId"`\]

#### storageOutputs

> `readonly` **storageOutputs**: readonly \[`"amountWithdrawn"`\]

#### version

> `readonly` **version**: `2` = `2`

## Accessors

### config

#### Get Signature

> **get** **config**(): `object`

##### Returns

`object`

| Name | Type | Default value |
| ------ | ------ | ------ |
| `name` | `"MakerWithdraw"` | `'MakerWithdraw'` |
| `parametersAbi` | readonly \[`"(uint256 vaultId, address userAddress, address joinAddr, uint256 amount)"`\] | - |
| `storageInputs` | readonly \[`"vaultId"`\] | - |
| `storageOutputs` | readonly \[`"amountWithdrawn"`\] | - |
| `version` | `2` | `2` |

#### Overrides

`BaseAction.config`

## Methods

### \_encodeCall()

> `protected` **\_encodeCall**(`params`): `ActionCall`

Encodes the call to the action

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | \{ `arguments`: readonly \[\{ `amount`: `bigint`; `joinAddr`: `` `0x${string}` ``; `userAddress`: `` `0x${string}` ``; `vaultId`: `bigint`; \}\]; `mapping?`: `InputSlotsMapping`; \} | - |
| `params.arguments` | readonly \[\{ `amount`: `bigint`; `joinAddr`: `` `0x${string}` ``; `userAddress`: `` `0x${string}` ``; `vaultId`: `bigint`; \}\] | The parameters to encode |
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
| `params` | \{ `amount`: [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md); `joinAddress`: [`IAddress`](../../../../client/src/interfaces/IAddress.md); `position`: [`IPosition`](../../../../client/src/interfaces/IPosition.md); `positionsManager`: [`IPositionsManager`](../../../../client/src/interfaces/IPositionsManager.md); \} |
| `params.amount` | [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md) |
| `params.joinAddress?` | [`IAddress`](../../../../client/src/interfaces/IAddress.md) |
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
