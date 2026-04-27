[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / MorphoBorrowAction

# Class: MorphoBorrowAction

## Extends

- `BaseAction`\<*typeof* [`Config`](#config)\>

## Constructors

### Constructor

> **new MorphoBorrowAction**(): `MorphoBorrowAction`

#### Returns

`MorphoBorrowAction`

#### Inherited from

`BaseAction<typeof MorphoBorrowAction.Config>.constructor`

## Properties

### Config

> `readonly` `static` **Config**: `object`

#### name

> `readonly` **name**: `"MorphoBlueBorrow"` = `'MorphoBlueBorrow'`

#### parametersAbi

> `readonly` **parametersAbi**: readonly \[`"(MarketParams marketParams, uint256 amount)"`, `"struct MarketParams { address loanToken; address collateralToken; address oracle; address irm; uint256 lltv; }"`\]

#### storageInputs

> `readonly` **storageInputs**: readonly \[\] = `[]`

#### storageOutputs

> `readonly` **storageOutputs**: readonly \[`"borrowedAmount"`\]

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
| `name` | `"MorphoBlueBorrow"` | `'MorphoBlueBorrow'` |
| `parametersAbi` | readonly \[`"(MarketParams marketParams, uint256 amount)"`, `"struct MarketParams { address loanToken; address collateralToken; address oracle; address irm; uint256 lltv; }"`\] | - |
| `storageInputs` | readonly \[\] | `[]` |
| `storageOutputs` | readonly \[`"borrowedAmount"`\] | - |
| `version` | `0` | `0` |

#### Overrides

`BaseAction.config`

## Methods

### \_encodeCall()

> `protected` **\_encodeCall**(`params`): `ActionCall`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | \{ `arguments`: readonly \[\{ `amount`: `bigint`; `marketParams`: \{ `collateralToken`: `` `0x${string}` ``; `irm`: `` `0x${string}` ``; `lltv`: `bigint`; `loanToken`: `` `0x${string}` ``; `oracle`: `` `0x${string}` ``; \}; \}\]; `mapping?`: `InputSlotsMapping`; \} | The parameters to encode |
| `params.arguments` | readonly \[\{ `amount`: `bigint`; `marketParams`: \{ `collateralToken`: `` `0x${string}` ``; `irm`: `` `0x${string}` ``; `lltv`: `bigint`; `loanToken`: `` `0x${string}` ``; `oracle`: `` `0x${string}` ``; \}; \}\] | - |
| `params.mapping?` | `InputSlotsMapping` | - |

#### Returns

`ActionCall`

The encoded call to the action

#### Description

Encodes the call to the action

#### Inherited from

`BaseAction._encodeCall`

***

### encodeCall()

> **encodeCall**(`params`, `paramsMapping?`): `ActionCall`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `amount`: [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md); `morphoLendingPool`: [`IMorphoLendingPool`](../interfaces/IMorphoLendingPool.md); \} |
| `params.amount` | [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md) |
| `params.morphoLendingPool?` | [`IMorphoLendingPool`](../interfaces/IMorphoLendingPool.md) |
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
