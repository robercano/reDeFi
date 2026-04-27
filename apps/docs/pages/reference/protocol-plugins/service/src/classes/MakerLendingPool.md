[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / MakerLendingPool

# Class: MakerLendingPool

MakerLendingPool

## See

IMakerLendingPoolData

## Extends

- [`LendingPool`](../../../../client/src/classes/LendingPool.md)

## Implements

- [`IMakerLendingPool`](../interfaces/IMakerLendingPool.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

[`IMakerLendingPool`](../interfaces/IMakerLendingPool.md).[`[___signature__]`](../interfaces/IMakerLendingPool.md#___signature__-2)

#### Inherited from

[`LendingPool`](../../../../client/src/classes/LendingPool.md).[`[___signature__]`](../../../../client/src/classes/LendingPool.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

`IMakerLendingPool.[___signature__]`

#### Inherited from

`LendingPool.[___signature__]`

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

`IMakerLendingPool.[___signature__]`

#### Inherited from

`LendingPool.[___signature__]`

***

### collateralToken

> `readonly` **collateralToken**: [`IToken`](../../../../client/src/interfaces/IToken.md)

Collateral token used to collateralized the pool

#### Implementation of

[`IMakerLendingPool`](../interfaces/IMakerLendingPool.md).[`collateralToken`](../interfaces/IMakerLendingPool.md#collateraltoken)

#### Inherited from

[`LendingPool`](../../../../client/src/classes/LendingPool.md).[`collateralToken`](../../../../client/src/classes/LendingPool.md#collateraltoken)

***

### debtToken

> `readonly` **debtToken**: [`IToken`](../../../../client/src/interfaces/IToken.md)

Debt token, which can be borrowed from the pool

#### Implementation of

[`IMakerLendingPool`](../interfaces/IMakerLendingPool.md).[`debtToken`](../interfaces/IMakerLendingPool.md#debttoken)

#### Inherited from

[`LendingPool`](../../../../client/src/classes/LendingPool.md).[`debtToken`](../../../../client/src/classes/LendingPool.md#debttoken)

***

### id

> `readonly` **id**: [`MakerLendingPoolId`](../../../../client/src/classes/MakerLendingPoolId.md)

ATTRIBUTES

#### Implementation of

[`IMakerLendingPool`](../interfaces/IMakerLendingPool.md).[`id`](../interfaces/IMakerLendingPool.md#id)

#### Overrides

[`LendingPool`](../../../../client/src/classes/LendingPool.md).[`id`](../../../../client/src/classes/LendingPool.md#id)

***

### type

> `readonly` **type**: [`Lending`](../../../../client/src/enumerations/PoolType.md#lending) = `PoolType.Lending`

ATTRIBUTES

#### Implementation of

[`IMakerLendingPool`](../interfaces/IMakerLendingPool.md).[`type`](../interfaces/IMakerLendingPool.md#type)

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

[`IMakerLendingPool`](../interfaces/IMakerLendingPool.md).[`toString`](../interfaces/IMakerLendingPool.md#tostring)

#### Inherited from

[`LendingPool`](../../../../client/src/classes/LendingPool.md).[`toString`](../../../../client/src/classes/LendingPool.md#tostring)

***

### createFrom()

> `static` **createFrom**(`params`): `MakerLendingPool`

FACTORY

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`MakerLendingPoolParameters`](../type-aliases/MakerLendingPoolParameters.md) |

#### Returns

`MakerLendingPool`
