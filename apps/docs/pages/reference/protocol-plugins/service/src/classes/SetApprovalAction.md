[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / SetApprovalAction

# Class: SetApprovalAction

## Extends

- `BaseAction`\<*typeof* [`Config`](#config)\>

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

#### Overrides

`BaseAction.config`

## Methods

### \_encodeCall()

> `protected` **\_encodeCall**(`params`): `ActionCall`

Encodes the call to the action

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `arguments`: readonly \[\{ `amount`: `bigint`; `asset`: `` `0x${string}` ``; `delegate`: `` `0x${string}` ``; `sumAmounts`: `boolean`; \}\]; `mapping?`: `InputSlotsMapping`; \} |
| `params.arguments` | readonly \[\{ `amount`: `bigint`; `asset`: `` `0x${string}` ``; `delegate`: `` `0x${string}` ``; `sumAmounts`: `boolean`; \}\] |
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
| `params` | \{ `approvalAmount`: [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md); `delegate`: [`IAddress`](../../../../client/src/interfaces/IAddress.md); `sumAmounts`: `boolean`; \} |
| `params.approvalAmount` | [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md) |
| `params.delegate?` | [`IAddress`](../../../../client/src/interfaces/IAddress.md) |
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
