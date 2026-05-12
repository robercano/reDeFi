[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / AaveV3LendingPosition

# Class: AaveV3LendingPosition

AaveV3Position

## See

IAaveV3LendingPosition

## Extends

- [`LendingPosition`](../../../../client/src/classes/LendingPosition.md)

## Implements

- [`IAaveV3LendingPosition`](../interfaces/IAaveV3LendingPosition.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

[`IAaveV3LendingPosition`](../interfaces/IAaveV3LendingPosition.md).[`[___signature__]`](../interfaces/IAaveV3LendingPosition.md#___signature__-2)

#### Inherited from

[`LendingPosition`](../../../../client/src/classes/LendingPosition.md).[`[___signature__]`](../../../../client/src/classes/LendingPosition.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

#### Implementation of

`IAaveV3LendingPosition.[___signature__]`

#### Inherited from

`LendingPosition.[___signature__]`

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

#### Implementation of

`IAaveV3LendingPosition.[___signature__]`

#### Inherited from

`LendingPosition.[___signature__]`

***

### collateralAmount

> `readonly` **collateralAmount**: [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md)

Amount of collateral deposited in the pool

#### Implementation of

[`IAaveV3LendingPosition`](../interfaces/IAaveV3LendingPosition.md).[`collateralAmount`](../interfaces/IAaveV3LendingPosition.md#collateralamount)

#### Inherited from

[`LendingPosition`](../../../../client/src/classes/LendingPosition.md).[`collateralAmount`](../../../../client/src/classes/LendingPosition.md#collateralamount)

***

### debtAmount

> `readonly` **debtAmount**: [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md)

Amount of debt borrowed from the pool

#### Implementation of

[`IAaveV3LendingPosition`](../interfaces/IAaveV3LendingPosition.md).[`debtAmount`](../interfaces/IAaveV3LendingPosition.md#debtamount)

#### Inherited from

[`LendingPosition`](../../../../client/src/classes/LendingPosition.md).[`debtAmount`](../../../../client/src/classes/LendingPosition.md#debtamount)

***

### id

> `readonly` **id**: [`IAaveV3LendingPositionId`](../interfaces/IAaveV3LendingPositionId.md)

The id of the position

#### Implementation of

[`IAaveV3LendingPosition`](../interfaces/IAaveV3LendingPosition.md).[`id`](../interfaces/IAaveV3LendingPosition.md#id)

#### Overrides

[`LendingPosition`](../../../../client/src/classes/LendingPosition.md).[`id`](../../../../client/src/classes/LendingPosition.md#id)

***

### pool

> `readonly` **pool**: [`IAaveV3LendingPool`](../interfaces/IAaveV3LendingPool.md)

ATTRIBUTES

#### Implementation of

[`IAaveV3LendingPosition`](../interfaces/IAaveV3LendingPosition.md).[`pool`](../interfaces/IAaveV3LendingPosition.md#pool)

#### Overrides

[`LendingPosition`](../../../../client/src/classes/LendingPosition.md).[`pool`](../../../../client/src/classes/LendingPosition.md#pool)

***

### subtype

> `readonly` **subtype**: [`LendingPositionType`](../../../../common/src/enumerations/LendingPositionType.md)

ATTRIBUTES

#### Implementation of

[`IAaveV3LendingPosition`](../interfaces/IAaveV3LendingPosition.md).[`subtype`](../interfaces/IAaveV3LendingPosition.md#subtype)

#### Inherited from

[`LendingPosition`](../../../../client/src/classes/LendingPosition.md).[`subtype`](../../../../client/src/classes/LendingPosition.md#subtype)

***

### type

> `readonly` **type**: `Lending` = `PositionType.Lending`

ATTRIBUTES

#### Implementation of

[`IAaveV3LendingPosition`](../interfaces/IAaveV3LendingPosition.md).[`type`](../interfaces/IAaveV3LendingPosition.md#type)

#### Inherited from

[`LendingPosition`](../../../../client/src/classes/LendingPosition.md).[`type`](../../../../client/src/classes/LendingPosition.md#type)

## Methods

### createFrom()

> `static` **createFrom**(`params`): `AaveV3LendingPosition`

FACTORY

#### Parameters

##### params

[`AaveV3LendingPositionParameters`](../type-aliases/AaveV3LendingPositionParameters.md)

#### Returns

`AaveV3LendingPosition`
