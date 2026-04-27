[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / SparkLendingPoolInfo

# Class: SparkLendingPoolInfo

SparkLendingPoolInfo

## See

ISparkLendingPoolInfo

## Extends

- [`LendingPoolInfo`](../../../../client/src/classes/LendingPoolInfo.md)

## Implements

- [`ISparkLendingPoolInfo`](../interfaces/ISparkLendingPoolInfo.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

[`ISparkLendingPoolInfo`](../interfaces/ISparkLendingPoolInfo.md).[`[___signature__]`](../interfaces/ISparkLendingPoolInfo.md#___signature__-2)

#### Inherited from

[`LendingPoolInfo`](../../../../client/src/classes/LendingPoolInfo.md).[`[___signature__]`](../../../../client/src/classes/LendingPoolInfo.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

#### Implementation of

`ISparkLendingPoolInfo.[___signature__]`

#### Inherited from

`LendingPoolInfo.[___signature__]`

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

#### Implementation of

`ISparkLendingPoolInfo.[___signature__]`

#### Inherited from

`LendingPoolInfo.[___signature__]`

***

### collateral

> `readonly` **collateral**: [`ICollateralInfo`](../../../../client/src/interfaces/ICollateralInfo.md)

The collateral information of the pool

#### Implementation of

[`ISparkLendingPoolInfo`](../interfaces/ISparkLendingPoolInfo.md).[`collateral`](../interfaces/ISparkLendingPoolInfo.md#collateral)

#### Inherited from

[`LendingPoolInfo`](../../../../client/src/classes/LendingPoolInfo.md).[`collateral`](../../../../client/src/classes/LendingPoolInfo.md#collateral)

***

### debt

> `readonly` **debt**: [`IDebtInfo`](../../../../client/src/interfaces/IDebtInfo.md)

The debt information of the pool

#### Implementation of

[`ISparkLendingPoolInfo`](../interfaces/ISparkLendingPoolInfo.md).[`debt`](../interfaces/ISparkLendingPoolInfo.md#debt)

#### Inherited from

[`LendingPoolInfo`](../../../../client/src/classes/LendingPoolInfo.md).[`debt`](../../../../client/src/classes/LendingPoolInfo.md#debt)

***

### id

> `readonly` **id**: [`ISparkLendingPoolId`](../interfaces/ISparkLendingPoolId.md)

ATTRIBUTES

#### Implementation of

[`ISparkLendingPoolInfo`](../interfaces/ISparkLendingPoolInfo.md).[`id`](../interfaces/ISparkLendingPoolInfo.md#id)

#### Overrides

[`LendingPoolInfo`](../../../../client/src/classes/LendingPoolInfo.md).[`id`](../../../../client/src/classes/LendingPoolInfo.md#id)

***

### type

> `readonly` **type**: [`Lending`](../../../../client/src/enumerations/PoolType.md#lending) = `PoolType.Lending`

ATTRIBUTES

#### Implementation of

[`ISparkLendingPoolInfo`](../interfaces/ISparkLendingPoolInfo.md).[`type`](../interfaces/ISparkLendingPoolInfo.md#type)

#### Inherited from

[`LendingPoolInfo`](../../../../client/src/classes/LendingPoolInfo.md).[`type`](../../../../client/src/classes/LendingPoolInfo.md#type)

## Methods

### toString()

> **toString**(): `string`

#### Returns

`string`

#### See

IPrintable.toString

#### Inherited from

[`LendingPoolInfo`](../../../../client/src/classes/LendingPoolInfo.md).[`toString`](../../../../client/src/classes/LendingPoolInfo.md#tostring)

***

### createFrom()

> `static` **createFrom**(`params`): `SparkLendingPoolInfo`

FACTORY

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`SparkLendingPoolInfoParameters`](../type-aliases/SparkLendingPoolInfoParameters.md) |

#### Returns

`SparkLendingPoolInfo`
