[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / LendingPositionId

# Abstract Class: LendingPositionId

LendingPositionId

## See

ILendingPositionId

## Extends

- [`PositionId`](PositionId.md)

## Extended by

- [`AaveV3LendingPositionId`](AaveV3LendingPositionId.md)
- [`MakerLendingPositionId`](MakerLendingPositionId.md)
- [`MorphoLendingPositionId`](MorphoLendingPositionId.md)
- [`SparkLendingPositionId`](SparkLendingPositionId.md)
- [`ExternalLendingPositionId`](ExternalLendingPositionId.md)

## Implements

- [`ILendingPositionIdData`](../type-aliases/ILendingPositionIdData.md)

## Constructors

### Constructor

> `protected` **new LendingPositionId**(`params`): `LendingPositionId`

SEALED CONSTRUCTOR

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`LendingPositionIdParameters`](../type-aliases/LendingPositionIdParameters.md) |

#### Returns

`LendingPositionId`

#### Overrides

[`PositionId`](PositionId.md).[`constructor`](PositionId.md#constructor)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Inherited from

[`PositionId`](PositionId.md).[`[___signature__]`](PositionId.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Inherited from

`LendingPositionId`.[`[___signature__]`](#___signature__-1)

***

### id

> `readonly` **id**: `string`

ATTRIBUTES

#### Implementation of

`ILendingPositionIdData.id`

#### Inherited from

[`PositionId`](PositionId.md).[`id`](PositionId.md#id)

***

### type

> `readonly` **type**: [`Lending`](../enumerations/PositionType.md#lending) = `PositionType.Lending`

ATTRIBUTES

#### Implementation of

`ILendingPositionIdData.type`

#### Overrides

[`PositionId`](PositionId.md).[`type`](PositionId.md#type)

## Methods

### toString()

> **toString**(): `string`

#### Returns

`string`

#### See

IPrintable.toString

#### Overrides

[`PositionId`](PositionId.md).[`toString`](PositionId.md#tostring)
