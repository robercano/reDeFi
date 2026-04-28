[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / ISparkLendingPosition

# Interface: ISparkLendingPosition

ISparkPosition
Represents a position in the Spark protocol

Currently empty as there are no specifics for this protocol

Typescript forces the interface to re-declare any properties that have different BUT compatible types.
This may be fixed eventually, there is a discussion on the topic here: https://github.com/microsoft/TypeScript/issues/16936

## Extends

- [`ILendingPosition`](../../../../client/src/interfaces/ILendingPosition.md).[`ISparkLendingPositionData`](../type-aliases/ISparkLendingPositionData.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature used to differentiate it from similar interfaces

#### Inherited from

[`ILendingPosition`](../../../../client/src/interfaces/ILendingPosition.md).[`[___signature__]`](../../../../client/src/interfaces/ILendingPosition.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

#### Inherited from

`ILendingPosition.[___signature__]`

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

#### Inherited from

`ILendingPosition.[___signature__]`

***

### collateralAmount

> `readonly` **collateralAmount**: [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md)

Amount of collateral deposited in the pool

#### Inherited from

[`ILendingPosition`](../../../../client/src/interfaces/ILendingPosition.md).[`collateralAmount`](../../../../client/src/interfaces/ILendingPosition.md#collateralamount)

***

### debtAmount

> `readonly` **debtAmount**: [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md)

Amount of debt borrowed from the pool

#### Inherited from

[`ILendingPosition`](../../../../client/src/interfaces/ILendingPosition.md).[`debtAmount`](../../../../client/src/interfaces/ILendingPosition.md#debtamount)

***

### id

> `readonly` **id**: [`ISparkLendingPositionId`](ISparkLendingPositionId.md)

Specific ID of the position for Spark

#### Overrides

[`ILendingPosition`](../../../../client/src/interfaces/ILendingPosition.md).[`id`](../../../../client/src/interfaces/ILendingPosition.md#id)

***

### pool

> `readonly` **pool**: [`ISparkLendingPool`](ISparkLendingPool.md)

Pool where the position is

#### Overrides

[`ILendingPosition`](../../../../client/src/interfaces/ILendingPosition.md).[`pool`](../../../../client/src/interfaces/ILendingPosition.md#pool)

***

### subtype

> `readonly` **subtype**: [`LendingPositionType`](../../../../client/src/enumerations/LendingPositionType.md)

Subtype of the position in the Lending protocol

#### Overrides

[`ILendingPosition`](../../../../client/src/interfaces/ILendingPosition.md).[`subtype`](../../../../client/src/interfaces/ILendingPosition.md#subtype)

***

### type

> `readonly` **type**: [`Lending`](../../../../client/src/enumerations/PositionType.md#lending)

Type of the position

#### Inherited from

[`ILendingPosition`](../../../../client/src/interfaces/ILendingPosition.md).[`type`](../../../../client/src/interfaces/ILendingPosition.md#type)
