[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / SparkLendingPool

# Class: SparkLendingPool

SparkLendingPool

## See

ISparkLendingPool

## Extends

- [`LendingPool`](../../../../client/src/classes/LendingPool.md)

## Implements

- [`ISparkLendingPool`](../interfaces/ISparkLendingPool.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

[`ISparkLendingPool`](../interfaces/ISparkLendingPool.md).[`[___signature__]`](../interfaces/ISparkLendingPool.md#___signature__-2)

#### Inherited from

[`LendingPool`](../../../../client/src/classes/LendingPool.md).[`[___signature__]`](../../../../client/src/classes/LendingPool.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

`ISparkLendingPool.[___signature__]`

#### Inherited from

`LendingPool.[___signature__]`

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

`ISparkLendingPool.[___signature__]`

#### Inherited from

`LendingPool.[___signature__]`

***

### collateralToken

> `readonly` **collateralToken**: [`IToken`](../../../../client/src/interfaces/IToken.md)

Collateral token used to collateralized the pool

#### Implementation of

[`ISparkLendingPool`](../interfaces/ISparkLendingPool.md).[`collateralToken`](../interfaces/ISparkLendingPool.md#collateraltoken)

#### Inherited from

[`LendingPool`](../../../../client/src/classes/LendingPool.md).[`collateralToken`](../../../../client/src/classes/LendingPool.md#collateraltoken)

***

### debtToken

> `readonly` **debtToken**: [`IToken`](../../../../client/src/interfaces/IToken.md)

Debt token, which can be borrowed from the pool

#### Implementation of

[`ISparkLendingPool`](../interfaces/ISparkLendingPool.md).[`debtToken`](../interfaces/ISparkLendingPool.md#debttoken)

#### Inherited from

[`LendingPool`](../../../../client/src/classes/LendingPool.md).[`debtToken`](../../../../client/src/classes/LendingPool.md#debttoken)

***

### id

> `readonly` **id**: [`SparkLendingPoolId`](../../../../client/src/classes/SparkLendingPoolId.md)

ATTRIBUTES

#### Implementation of

[`ISparkLendingPool`](../interfaces/ISparkLendingPool.md).[`id`](../interfaces/ISparkLendingPool.md#id)

#### Overrides

[`LendingPool`](../../../../client/src/classes/LendingPool.md).[`id`](../../../../client/src/classes/LendingPool.md#id)

***

### type

> `readonly` **type**: [`Lending`](../../../../client/src/enumerations/PoolType.md#lending) = `PoolType.Lending`

ATTRIBUTES

#### Implementation of

[`ISparkLendingPool`](../interfaces/ISparkLendingPool.md).[`type`](../interfaces/ISparkLendingPool.md#type)

#### Inherited from

[`LendingPool`](../../../../client/src/classes/LendingPool.md).[`type`](../../../../client/src/classes/LendingPool.md#type)

## Methods

### toString()

> **toString**(): `string`

#### Returns

`string`

#### See

IPrintable.toString

#### Implementation of

[`ISparkLendingPool`](../interfaces/ISparkLendingPool.md).[`toString`](../interfaces/ISparkLendingPool.md#tostring)

#### Inherited from

[`LendingPool`](../../../../client/src/classes/LendingPool.md).[`toString`](../../../../client/src/classes/LendingPool.md#tostring)

***

### createFrom()

> `static` **createFrom**(`params`): `SparkLendingPool`

FACTORY

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`SparkLendingPoolParameters`](../type-aliases/SparkLendingPoolParameters.md) |

#### Returns

`SparkLendingPool`
