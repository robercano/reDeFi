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

- [`ExternalLendingPositionId`](ExternalLendingPositionId.md)
- [`AaveV3LendingPositionId`](../../../protocol-plugins/service/src/classes/AaveV3LendingPositionId.md)
- [`SparkLendingPositionId`](../../../protocol-plugins/service/src/classes/SparkLendingPositionId.md)
- [`MakerLendingPositionId`](../../../protocol-plugins/service/src/classes/MakerLendingPositionId.md)
- [`MorphoLendingPositionId`](../../../protocol-plugins/service/src/classes/MorphoLendingPositionId.md)

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

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

#### Inherited from

[`PositionId`](PositionId.md).[`[___signature__]`](PositionId.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

#### Inherited from

`PositionId.[___signature__]`

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
