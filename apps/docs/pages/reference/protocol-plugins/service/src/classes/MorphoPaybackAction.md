[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / MorphoPaybackAction

# Class: MorphoPaybackAction

## Extends

- `BaseAction`\<*typeof* [`Config`](#config)\>

## Constructors

### Constructor

> **new MorphoPaybackAction**(): `MorphoPaybackAction`

#### Returns

`MorphoPaybackAction`

#### Inherited from

`BaseAction<typeof MorphoPaybackAction.Config>.constructor`

## Properties

### Config

> `readonly` `static` **Config**: `object`

#### name

> `readonly` **name**: `"MorphoBluePayback"` = `'MorphoBluePayback'`

#### parametersAbi

> `readonly` **parametersAbi**: readonly \[`"(MarketParams marketParams, uint256 amount, address onBehalf, bool paybackAll)"`, `"struct MarketParams { address loanToken; address collateralToken; address oracle; address irm; uint256 lltv; }"`\]

#### storageInputs

> `readonly` **storageInputs**: readonly \[`"amount"`\]

#### storageOutputs

> `readonly` **storageOutputs**: readonly \[`"paybackedAmount"`\]

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
| `name` | `"MorphoBluePayback"` | `'MorphoBluePayback'` |
| `parametersAbi` | readonly \[`"(MarketParams marketParams, uint256 amount, address onBehalf, bool paybackAll)"`, `"struct MarketParams { address loanToken; address collateralToken; address oracle; address irm; uint256 lltv; }"`\] | - |
| `storageInputs` | readonly \[`"amount"`\] | - |
| `storageOutputs` | readonly \[`"paybackedAmount"`\] | - |
| `version` | `2` | `2` |

#### Overrides

`BaseAction.config`

## Methods

### \_encodeCall()

> `protected` **\_encodeCall**(`params`): `ActionCall`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | \{ `arguments`: readonly \[\{ `amount`: `bigint`; `marketParams`: \{ `collateralToken`: `` `0x${string}` ``; `irm`: `` `0x${string}` ``; `lltv`: `bigint`; `loanToken`: `` `0x${string}` ``; `oracle`: `` `0x${string}` ``; \}; `onBehalf`: `` `0x${string}` ``; `paybackAll`: `boolean`; \}\]; `mapping?`: `InputSlotsMapping`; \} | The parameters to encode |
| `params.arguments` | readonly \[\{ `amount`: `bigint`; `marketParams`: \{ `collateralToken`: `` `0x${string}` ``; `irm`: `` `0x${string}` ``; `lltv`: `bigint`; `loanToken`: `` `0x${string}` ``; `oracle`: `` `0x${string}` ``; \}; `onBehalf`: `` `0x${string}` ``; `paybackAll`: `boolean`; \}\] | - |
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
| `params` | \{ `amount`: [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md); `morphoLendingPool`: [`IMorphoLendingPool`](../interfaces/IMorphoLendingPool.md); `onBehalf`: [`IAddress`](../../../../client/src/interfaces/IAddress.md); `paybackAll`: `boolean`; \} |
| `params.amount` | [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md) |
| `params.morphoLendingPool?` | [`IMorphoLendingPool`](../interfaces/IMorphoLendingPool.md) |
| `params.onBehalf?` | [`IAddress`](../../../../client/src/interfaces/IAddress.md) |
| `params.paybackAll?` | `boolean` |
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
