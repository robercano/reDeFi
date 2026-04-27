[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / MorphoLendingPoolInfo

# Class: MorphoLendingPoolInfo

MorphoLendingPoolInfo

## See

IMorphoLendingPoolInfo

## Extends

- [`LendingPoolInfo`](../../../../client/src/classes/LendingPoolInfo.md)

## Implements

- [`IMorphoLendingPoolInfo`](../interfaces/IMorphoLendingPoolInfo.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

[`IMorphoLendingPoolInfo`](../interfaces/IMorphoLendingPoolInfo.md).[`[___signature__]`](../interfaces/IMorphoLendingPoolInfo.md#___signature__-2)

#### Inherited from

[`LendingPoolInfo`](../../../../client/src/classes/LendingPoolInfo.md).[`[___signature__]`](../../../../client/src/classes/LendingPoolInfo.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

`IMorphoLendingPoolInfo.[___signature__]`

#### Inherited from

`LendingPoolInfo.[___signature__]`

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

`IMorphoLendingPoolInfo.[___signature__]`

#### Inherited from

`LendingPoolInfo.[___signature__]`

***

### collateral

> `readonly` **collateral**: [`ICollateralInfo`](../../../../client/src/interfaces/ICollateralInfo.md)

The collateral information of the pool

#### Implementation of

[`IMorphoLendingPoolInfo`](../interfaces/IMorphoLendingPoolInfo.md).[`collateral`](../interfaces/IMorphoLendingPoolInfo.md#collateral)

#### Inherited from

[`LendingPoolInfo`](../../../../client/src/classes/LendingPoolInfo.md).[`collateral`](../../../../client/src/classes/LendingPoolInfo.md#collateral)

***

### debt

> `readonly` **debt**: [`IDebtInfo`](../../../../client/src/interfaces/IDebtInfo.md)

The debt information of the pool

#### Implementation of

[`IMorphoLendingPoolInfo`](../interfaces/IMorphoLendingPoolInfo.md).[`debt`](../interfaces/IMorphoLendingPoolInfo.md#debt)

#### Inherited from

[`LendingPoolInfo`](../../../../client/src/classes/LendingPoolInfo.md).[`debt`](../../../../client/src/classes/LendingPoolInfo.md#debt)

***

### id

> `readonly` **id**: [`IMorphoLendingPoolId`](../../../../client/src/interfaces/IMorphoLendingPoolId.md)

ATTRIBUTES

#### Implementation of

[`IMorphoLendingPoolInfo`](../interfaces/IMorphoLendingPoolInfo.md).[`id`](../interfaces/IMorphoLendingPoolInfo.md#id)

#### Overrides

[`LendingPoolInfo`](../../../../client/src/classes/LendingPoolInfo.md).[`id`](../../../../client/src/classes/LendingPoolInfo.md#id)

***

### type

> `readonly` **type**: [`Lending`](../../../../client/src/enumerations/PoolType.md#lending) = `PoolType.Lending`

ATTRIBUTES

#### Implementation of

[`IMorphoLendingPoolInfo`](../interfaces/IMorphoLendingPoolInfo.md).[`type`](../interfaces/IMorphoLendingPoolInfo.md#type)

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

> `static` **createFrom**(`params`): `MorphoLendingPoolInfo`

FACTORY

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`MorphoLendingPoolInfoParameters`](../type-aliases/MorphoLendingPoolInfoParameters.md) |

#### Returns

`MorphoLendingPoolInfo`
