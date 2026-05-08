[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / LendingPosition

# Abstract Class: LendingPosition

LendingPosition

## See

ILendingPosition

## Extends

- [`Position`](Position.md)

## Extended by

- [`AaveV3LendingPosition`](AaveV3LendingPosition.md)
- [`ExternalLendingPosition`](ExternalLendingPosition.md)

## Implements

- [`ILendingPosition`](../interfaces/ILendingPosition.md)

## Constructors

### Constructor

> `protected` **new LendingPosition**(`params`): `LendingPosition`

SEALED CONSTRUCTOR

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`LendingPositionParameters`](../type-aliases/LendingPositionParameters.md) |

#### Returns

`LendingPosition`

#### Overrides

[`Position`](Position.md).[`constructor`](Position.md#constructor)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

[`ILendingPosition`](../interfaces/ILendingPosition.md).[`[___signature__]`](../interfaces/ILendingPosition.md#___signature__-1)

#### Inherited from

[`Position`](Position.md).[`[___signature__]`](Position.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

`ILendingPosition.[___signature__]`

#### Inherited from

[`Position`](Position.md).[`[___signature__]`](Position.md#___signature__)

***

### collateralAmount

> `readonly` **collateralAmount**: [`ITokenAmount`](../interfaces/ITokenAmount.md)

Amount of collateral deposited in the pool

#### Implementation of

[`ILendingPosition`](../interfaces/ILendingPosition.md).[`collateralAmount`](../interfaces/ILendingPosition.md#collateralamount)

***

### debtAmount

> `readonly` **debtAmount**: [`ITokenAmount`](../interfaces/ITokenAmount.md)

Amount of debt borrowed from the pool

#### Implementation of

[`ILendingPosition`](../interfaces/ILendingPosition.md).[`debtAmount`](../interfaces/ILendingPosition.md#debtamount)

***

### id

> `readonly` **id**: [`ILendingPositionId`](../interfaces/ILendingPositionId.md)

Unique identifier for the position inside the Lending protocol

#### Implementation of

[`ILendingPosition`](../interfaces/ILendingPosition.md).[`id`](../interfaces/ILendingPosition.md#id)

#### Overrides

[`Position`](Position.md).[`id`](Position.md#id)

***

### pool

> `abstract` `readonly` **pool**: [`ILendingPool`](../interfaces/ILendingPool.md)

Pool where the position is

#### Implementation of

[`ILendingPosition`](../interfaces/ILendingPosition.md).[`pool`](../interfaces/ILendingPosition.md#pool)

#### Overrides

[`Position`](Position.md).[`pool`](Position.md#pool)

***

### subtype

> `readonly` **subtype**: [`LendingPositionType`](../enumerations/LendingPositionType.md)

ATTRIBUTES

#### Implementation of

[`ILendingPosition`](../interfaces/ILendingPosition.md).[`subtype`](../interfaces/ILendingPosition.md#subtype)

***

### type

> `readonly` **type**: [`Lending`](../enumerations/PositionType.md#lending) = `PositionType.Lending`

ATTRIBUTES

#### Implementation of

[`ILendingPosition`](../interfaces/ILendingPosition.md).[`type`](../interfaces/ILendingPosition.md#type)

#### Overrides

[`Position`](Position.md).[`type`](Position.md#type)
