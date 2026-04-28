[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / IExternalLendingPosition

# Interface: IExternalLendingPosition

IExternalLendingPosition
Lending position existing in another service

## Extends

- [`ILendingPosition`](ILendingPosition.md).[`IPrintable`](IPrintable.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature used to differentiate it from similar interfaces

#### Inherited from

[`ILendingPosition`](ILendingPosition.md).[`[___signature__]`](ILendingPosition.md#___signature__)

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

> `readonly` **collateralAmount**: [`ITokenAmount`](ITokenAmount.md)

Amount of collateral deposited in the pool

#### Inherited from

[`ILendingPosition`](ILendingPosition.md).[`collateralAmount`](ILendingPosition.md#collateralamount)

***

### debtAmount

> `readonly` **debtAmount**: [`ITokenAmount`](ITokenAmount.md)

Amount of debt borrowed from the pool

#### Inherited from

[`ILendingPosition`](ILendingPosition.md).[`debtAmount`](ILendingPosition.md#debtamount)

***

### id

> `readonly` **id**: [`IExternalLendingPositionId`](IExternalLendingPositionId.md)

External position ID

#### Overrides

[`ILendingPosition`](ILendingPosition.md).[`id`](ILendingPosition.md#id)

***

### pool

> `readonly` **pool**: [`ILendingPool`](ILendingPool.md)

Pool where the position is

#### Inherited from

[`ILendingPosition`](ILendingPosition.md).[`pool`](ILendingPosition.md#pool)

***

### subtype

> `readonly` **subtype**: [`LendingPositionType`](../enumerations/LendingPositionType.md)

Subtype of the position in the Lending protocol

#### Inherited from

[`ILendingPosition`](ILendingPosition.md).[`subtype`](ILendingPosition.md#subtype)

***

### type

> `readonly` **type**: [`Lending`](../enumerations/PositionType.md#lending)

Type of the position

#### Inherited from

[`ILendingPosition`](ILendingPosition.md).[`type`](ILendingPosition.md#type)

## Methods

### toString()

> **toString**(): `string`

toString
Returns a string representation of the object

#### Returns

`string`

string

The string representation should have enough info to debug the object

#### Inherited from

[`IPrintable`](IPrintable.md).[`toString`](IPrintable.md#tostring)
