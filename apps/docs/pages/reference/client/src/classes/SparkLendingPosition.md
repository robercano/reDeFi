[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / SparkLendingPosition

# Class: SparkLendingPosition

SparkPosition

## See

ISparkLendingPosition

## Extends

- [`LendingPosition`](LendingPosition.md)

## Implements

- [`ISparkLendingPosition`](../../../protocol-plugins/service/src/interfaces/ISparkLendingPosition.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

[`ISparkLendingPosition`](../../../protocol-plugins/service/src/interfaces/ISparkLendingPosition.md).[`[___signature__]`](../../../protocol-plugins/service/src/interfaces/ISparkLendingPosition.md#___signature__-2)

#### Inherited from

[`LendingPosition`](LendingPosition.md).[`[___signature__]`](LendingPosition.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

`ISparkLendingPosition.[___signature__]`

#### Inherited from

`LendingPosition.[___signature__]`

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

`ISparkLendingPosition.[___signature__]`

#### Inherited from

`LendingPosition.[___signature__]`

***

### collateralAmount

> `readonly` **collateralAmount**: [`ITokenAmount`](../interfaces/ITokenAmount.md)

Amount of collateral deposited in the pool

#### Implementation of

[`ISparkLendingPosition`](../../../protocol-plugins/service/src/interfaces/ISparkLendingPosition.md).[`collateralAmount`](../../../protocol-plugins/service/src/interfaces/ISparkLendingPosition.md#collateralamount)

#### Inherited from

[`LendingPosition`](LendingPosition.md).[`collateralAmount`](LendingPosition.md#collateralamount)

***

### debtAmount

> `readonly` **debtAmount**: [`ITokenAmount`](../interfaces/ITokenAmount.md)

Amount of debt borrowed from the pool

#### Implementation of

[`ISparkLendingPosition`](../../../protocol-plugins/service/src/interfaces/ISparkLendingPosition.md).[`debtAmount`](../../../protocol-plugins/service/src/interfaces/ISparkLendingPosition.md#debtamount)

#### Inherited from

[`LendingPosition`](LendingPosition.md).[`debtAmount`](LendingPosition.md#debtamount)

***

### id

> `readonly` **id**: [`ISparkLendingPositionId`](../../../protocol-plugins/service/src/interfaces/ISparkLendingPositionId.md)

ATTRIBUTES

#### Implementation of

[`ISparkLendingPosition`](../../../protocol-plugins/service/src/interfaces/ISparkLendingPosition.md).[`id`](../../../protocol-plugins/service/src/interfaces/ISparkLendingPosition.md#id)

#### Overrides

[`LendingPosition`](LendingPosition.md).[`id`](LendingPosition.md#id)

***

### pool

> `readonly` **pool**: [`ISparkLendingPool`](../../../protocol-plugins/service/src/interfaces/ISparkLendingPool.md)

Pool where the position is

#### Implementation of

[`ISparkLendingPosition`](../../../protocol-plugins/service/src/interfaces/ISparkLendingPosition.md).[`pool`](../../../protocol-plugins/service/src/interfaces/ISparkLendingPosition.md#pool)

#### Overrides

[`LendingPosition`](LendingPosition.md).[`pool`](LendingPosition.md#pool)

***

### subtype

> `readonly` **subtype**: [`LendingPositionType`](../enumerations/LendingPositionType.md)

ATTRIBUTES

#### Implementation of

[`ISparkLendingPosition`](../../../protocol-plugins/service/src/interfaces/ISparkLendingPosition.md).[`subtype`](../../../protocol-plugins/service/src/interfaces/ISparkLendingPosition.md#subtype)

#### Inherited from

[`LendingPosition`](LendingPosition.md).[`subtype`](LendingPosition.md#subtype)

***

### type

> `readonly` **type**: [`Lending`](../enumerations/PositionType.md#lending) = `PositionType.Lending`

ATTRIBUTES

#### Implementation of

[`ISparkLendingPosition`](../../../protocol-plugins/service/src/interfaces/ISparkLendingPosition.md).[`type`](../../../protocol-plugins/service/src/interfaces/ISparkLendingPosition.md#type)

#### Inherited from

[`LendingPosition`](LendingPosition.md).[`type`](LendingPosition.md#type)

## Methods

### createFrom()

> `static` **createFrom**(`params`): `SparkLendingPosition`

FACTORY

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`SparkLendingPositionParameters`](../../../protocol-plugins/service/src/type-aliases/SparkLendingPositionParameters.md) |

#### Returns

`SparkLendingPosition`
