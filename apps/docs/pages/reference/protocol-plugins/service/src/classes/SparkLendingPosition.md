[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / SparkLendingPosition

# Class: SparkLendingPosition

SparkPosition

## See

ISparkLendingPosition

## Extends

- [`LendingPosition`](../../../../client/src/classes/LendingPosition.md)

## Implements

- [`ISparkLendingPosition`](../interfaces/ISparkLendingPosition.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

[`ISparkLendingPosition`](../interfaces/ISparkLendingPosition.md).[`[___signature__]`](../interfaces/ISparkLendingPosition.md#___signature__-2)

#### Inherited from

[`LendingPosition`](../../../../client/src/classes/LendingPosition.md).[`[___signature__]`](../../../../client/src/classes/LendingPosition.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

#### Implementation of

`ISparkLendingPosition.[___signature__]`

#### Inherited from

`LendingPosition.[___signature__]`

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

#### Implementation of

`ISparkLendingPosition.[___signature__]`

#### Inherited from

`LendingPosition.[___signature__]`

***

### collateralAmount

> `readonly` **collateralAmount**: [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md)

Amount of collateral deposited in the pool

#### Implementation of

[`ISparkLendingPosition`](../interfaces/ISparkLendingPosition.md).[`collateralAmount`](../interfaces/ISparkLendingPosition.md#collateralamount)

#### Inherited from

[`LendingPosition`](../../../../client/src/classes/LendingPosition.md).[`collateralAmount`](../../../../client/src/classes/LendingPosition.md#collateralamount)

***

### debtAmount

> `readonly` **debtAmount**: [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md)

Amount of debt borrowed from the pool

#### Implementation of

[`ISparkLendingPosition`](../interfaces/ISparkLendingPosition.md).[`debtAmount`](../interfaces/ISparkLendingPosition.md#debtamount)

#### Inherited from

[`LendingPosition`](../../../../client/src/classes/LendingPosition.md).[`debtAmount`](../../../../client/src/classes/LendingPosition.md#debtamount)

***

### id

> `readonly` **id**: [`ISparkLendingPositionId`](../interfaces/ISparkLendingPositionId.md)

ATTRIBUTES

#### Implementation of

[`ISparkLendingPosition`](../interfaces/ISparkLendingPosition.md).[`id`](../interfaces/ISparkLendingPosition.md#id)

#### Overrides

[`LendingPosition`](../../../../client/src/classes/LendingPosition.md).[`id`](../../../../client/src/classes/LendingPosition.md#id)

***

### pool

> `readonly` **pool**: [`ISparkLendingPool`](../interfaces/ISparkLendingPool.md)

Pool where the position is

#### Implementation of

[`ISparkLendingPosition`](../interfaces/ISparkLendingPosition.md).[`pool`](../interfaces/ISparkLendingPosition.md#pool)

#### Overrides

[`LendingPosition`](../../../../client/src/classes/LendingPosition.md).[`pool`](../../../../client/src/classes/LendingPosition.md#pool)

***

### subtype

> `readonly` **subtype**: [`LendingPositionType`](../../../../client/src/enumerations/LendingPositionType.md)

ATTRIBUTES

#### Implementation of

[`ISparkLendingPosition`](../interfaces/ISparkLendingPosition.md).[`subtype`](../interfaces/ISparkLendingPosition.md#subtype)

#### Inherited from

[`LendingPosition`](../../../../client/src/classes/LendingPosition.md).[`subtype`](../../../../client/src/classes/LendingPosition.md#subtype)

***

### type

> `readonly` **type**: [`Lending`](../../../../client/src/enumerations/PositionType.md#lending) = `PositionType.Lending`

ATTRIBUTES

#### Implementation of

[`ISparkLendingPosition`](../interfaces/ISparkLendingPosition.md).[`type`](../interfaces/ISparkLendingPosition.md#type)

#### Inherited from

[`LendingPosition`](../../../../client/src/classes/LendingPosition.md).[`type`](../../../../client/src/classes/LendingPosition.md#type)

## Methods

### createFrom()

> `static` **createFrom**(`params`): `SparkLendingPosition`

FACTORY

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`SparkLendingPositionParameters`](../type-aliases/SparkLendingPositionParameters.md) |

#### Returns

`SparkLendingPosition`
