[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / ILendingPositionId

# Interface: ILendingPositionId

## Name

ILendingPositionId

## Description

Represents a position ID for a lending position

## Extends

- [`IPositionId`](IPositionId.md)

## Extended by

- [`IExternalLendingPositionId`](IExternalLendingPositionId.md)
- [`IAaveV3LendingPositionId`](../../../protocol-plugins/service/src/interfaces/IAaveV3LendingPositionId.md)
- [`ISparkLendingPositionId`](../../../protocol-plugins/service/src/interfaces/ISparkLendingPositionId.md)
- [`IMakerLendingPositionId`](../../../protocol-plugins/service/src/interfaces/IMakerLendingPositionId.md)
- [`IMorphoLendingPositionId`](../../../protocol-plugins/service/src/interfaces/IMorphoLendingPositionId.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

#### Inherited from

[`IPositionId`](IPositionId.md).[`[___signature__]`](IPositionId.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

#### Inherited from

`IPositionId.[___signature__]`

***

### id

> `readonly` **id**: `string`

#### Inherited from

[`IPositionId`](IPositionId.md).[`id`](IPositionId.md#id)

***

### type

> `readonly` **type**: [`Lending`](../enumerations/PositionType.md#lending)

Type of the position

#### Overrides

[`IPositionId`](IPositionId.md).[`type`](IPositionId.md#type)
