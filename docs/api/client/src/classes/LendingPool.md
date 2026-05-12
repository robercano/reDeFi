[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / LendingPool

# Abstract Class: LendingPool

LendingPool

## See

ILendingPool

The class is abstract to force each protocol to implement it's own version of the LendingPool by
customizing the PoolId

## Extends

- `Pool`

## Extended by

- [`AaveV3LendingPool`](../../../protocol-plugins/service/src/classes/AaveV3LendingPool.md)

## Implements

- [`ILendingPool`](../interfaces/ILendingPool.md)
- [`IPrintable`](../../../common/src/interfaces/IPrintable.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

#### Implementation of

[`ILendingPool`](../interfaces/ILendingPool.md).[`[___signature__]`](../interfaces/ILendingPool.md#___signature__-1)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

#### Implementation of

`ILendingPool.[___signature__]`

#### Inherited from

`Pool.[___signature__]`

***

### collateralToken

> `readonly` **collateralToken**: [`IToken`](../interfaces/IToken.md)

Collateral token used to collateralized the pool

#### Implementation of

[`ILendingPool`](../interfaces/ILendingPool.md).[`collateralToken`](../interfaces/ILendingPool.md#collateraltoken)

***

### debtToken

> `readonly` **debtToken**: [`IToken`](../interfaces/IToken.md)

Debt token, which can be borrowed from the pool

#### Implementation of

[`ILendingPool`](../interfaces/ILendingPool.md).[`debtToken`](../interfaces/ILendingPool.md#debttoken)

***

### id

> `abstract` `readonly` **id**: [`ILendingPoolId`](../interfaces/ILendingPoolId.md)

ATTRIBUTES

#### Implementation of

[`ILendingPool`](../interfaces/ILendingPool.md).[`id`](../interfaces/ILendingPool.md#id)

#### Overrides

`Pool.id`

***

### type

> `readonly` **type**: `Lending` = `PoolType.Lending`

ATTRIBUTES

#### Implementation of

[`ILendingPool`](../interfaces/ILendingPool.md).[`type`](../interfaces/ILendingPool.md#type)

#### Overrides

`Pool.type`

## Methods

### toString()

> **toString**(): `string`

#### Returns

`string`

#### See

IPrintable.toString

#### Implementation of

[`IPrintable`](../../../common/src/interfaces/IPrintable.md).[`toString`](../../../common/src/interfaces/IPrintable.md#tostring)

#### Overrides

`Pool.toString`
