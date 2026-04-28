[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / SparkSetEmodeAction

# Class: SparkSetEmodeAction

## Extends

- `BaseAction`\<*typeof* [`Config`](#config)\>

## Constructors

### Constructor

> **new SparkSetEmodeAction**(): `SparkSetEmodeAction`

#### Returns

`SparkSetEmodeAction`

#### Inherited from

`BaseAction<typeof SparkSetEmodeAction.Config>.constructor`

## Properties

### Config

> `readonly` `static` **Config**: `object`

#### name

> `readonly` **name**: `"SparkSetEMode"` = `'SparkSetEMode'`

#### parametersAbi

> `readonly` **parametersAbi**: readonly \[`"(uint8 categoryId)"`\]

#### storageInputs

> `readonly` **storageInputs**: readonly \[\] = `[]`

#### storageOutputs

> `readonly` **storageOutputs**: readonly \[`"emodeCategory"`\]

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
| `name` | `"SparkSetEMode"` | `'SparkSetEMode'` |
| `parametersAbi` | readonly \[`"(uint8 categoryId)"`\] | - |
| `storageInputs` | readonly \[\] | `[]` |
| `storageOutputs` | readonly \[`"emodeCategory"`\] | - |
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
| `params` | \{ `arguments`: readonly \[\{ `categoryId`: `number`; \}\]; `mapping?`: `InputSlotsMapping`; \} |
| `params.arguments` | readonly \[\{ `categoryId`: `number`; \}\] |
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
| `params` | \{ `emode`: [`EmodeType`](../../../../client/src/enumerations/EmodeType.md); \} |
| `params.emode` | [`EmodeType`](../../../../client/src/enumerations/EmodeType.md) |
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
