[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / ILendingPosition

# Interface: ILendingPosition

ILendingPosition
Represents a position in a Lending protocol

## Extends

- [`IPosition`](IPosition.md).[`ILendingPositionData`](../type-aliases/ILendingPositionData.md)

## Extended by

- [`IExternalLendingPosition`](IExternalLendingPosition.md)
- [`IAaveV3LendingPosition`](../../../protocol-plugins/service/src/interfaces/IAaveV3LendingPosition.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

#### Inherited from

[`IPosition`](IPosition.md).[`[___signature__]`](IPosition.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

#### Inherited from

`IPosition.[___signature__]`

***

### collateralAmount

> `readonly` **collateralAmount**: [`ITokenAmount`](ITokenAmount.md)

Amount of collateral deposited in the pool

#### Overrides

`ILendingPositionData.collateralAmount`

***

### debtAmount

> `readonly` **debtAmount**: [`ITokenAmount`](ITokenAmount.md)

Amount of debt borrowed from the pool

#### Overrides

`ILendingPositionData.debtAmount`

***

### id

> `readonly` **id**: [`ILendingPositionId`](ILendingPositionId.md)

Unique identifier for the position inside the Lending protocol

#### Overrides

[`IPosition`](IPosition.md).[`id`](IPosition.md#id)

***

### pool

> `readonly` **pool**: [`ILendingPool`](ILendingPool.md)

Pool where the position is

#### Overrides

[`IPosition`](IPosition.md).[`pool`](IPosition.md#pool)

***

### subtype

> `readonly` **subtype**: [`LendingPositionType`](../enumerations/LendingPositionType.md)

Subtype of the position in the Lending protocol

#### Overrides

`ILendingPositionData.subtype`

***

### type

> `readonly` **type**: [`Lending`](../enumerations/PositionType.md#lending)

Type of the position

#### Overrides

[`IPosition`](IPosition.md).[`type`](IPosition.md#type)
