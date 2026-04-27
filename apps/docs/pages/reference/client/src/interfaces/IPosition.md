[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / IPosition

# Interface: IPosition

## Name

IPosition

## Description

Represents a position in a pool/protocol

## Extends

- [`IPositionData`](../type-aliases/IPositionData.md)

## Extended by

- [`ILendingPosition`](ILendingPosition.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

***

### id

> `readonly` **id**: [`IPositionId`](IPositionId.md)

Unique identifier for the position

#### Overrides

`IPositionData.id`

***

### pool

> `readonly` **pool**: [`IPool`](IPool.md)

Pool where the position is opened

#### Overrides

`IPositionData.pool`

***

### type

> `readonly` **type**: [`PositionType`](../enumerations/PositionType.md)

Type of the position

#### Overrides

`IPositionData.type`
