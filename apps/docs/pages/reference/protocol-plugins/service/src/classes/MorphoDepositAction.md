[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / MorphoDepositAction

# Class: MorphoDepositAction

## Extends

- `BaseAction`\<*typeof* [`Config`](#config)\>

## Constructors

### Constructor

> **new MorphoDepositAction**(): `MorphoDepositAction`

#### Returns

`MorphoDepositAction`

#### Inherited from

`BaseAction<typeof MorphoDepositAction.Config>.constructor`

## Properties

### Config

> `readonly` `static` **Config**: `object`

#### name

> `readonly` **name**: `"MorphoBlueDeposit"` = `'MorphoBlueDeposit'`

#### parametersAbi

> `readonly` **parametersAbi**: readonly \[`"(MarketParams marketParams, uint256 amount, bool sumAmounts)"`, `"struct MarketParams { address loanToken; address collateralToken; address oracle; address irm; uint256 lltv; }"`\]

#### storageInputs

> `readonly` **storageInputs**: readonly \[`"marketParams"`, `"amount"`, `"sumAmounts"`\]

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
| `name` | `"MorphoBlueDeposit"` | `'MorphoBlueDeposit'` |
| `parametersAbi` | readonly \[`"(MarketParams marketParams, uint256 amount, bool sumAmounts)"`, `"struct MarketParams { address loanToken; address collateralToken; address oracle; address irm; uint256 lltv; }"`\] | - |
| `storageInputs` | readonly \[`"marketParams"`, `"amount"`, `"sumAmounts"`\] | - |
| `storageOutputs` | readonly \[`"depositedAmount"`\] | - |
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
| `params` | \{ `arguments`: readonly \[\{ `amount`: `bigint`; `marketParams`: \{ `collateralToken`: `` `0x${string}` ``; `irm`: `` `0x${string}` ``; `lltv`: `bigint`; `loanToken`: `` `0x${string}` ``; `oracle`: `` `0x${string}` ``; \}; `sumAmounts`: `boolean`; \}\]; `mapping?`: `InputSlotsMapping`; \} |
| `params.arguments` | readonly \[\{ `amount`: `bigint`; `marketParams`: \{ `collateralToken`: `` `0x${string}` ``; `irm`: `` `0x${string}` ``; `lltv`: `bigint`; `loanToken`: `` `0x${string}` ``; `oracle`: `` `0x${string}` ``; \}; `sumAmounts`: `boolean`; \}\] |
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
| `params` | \{ `amount`: [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md); `morphoLendingPool`: [`IMorphoLendingPool`](../interfaces/IMorphoLendingPool.md); `sumAmounts`: `boolean`; \} |
| `params.amount` | [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md) |
| `params.morphoLendingPool?` | [`IMorphoLendingPool`](../interfaces/IMorphoLendingPool.md) |
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
