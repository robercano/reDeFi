[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / LendingPoolInfo

# Abstract Class: LendingPoolInfo

LendingPoolInfo

## See

ILendingPoolInfo

The class is abstract to force each protocol to implement it's own version of the LendingPoolInfo by
customizing the PoolId

## Extends

- `PoolInfo`

## Implements

- [`ILendingPoolInfo`](../interfaces/ILendingPoolInfo.md)
- [`IPrintable`](../../../common/src/interfaces/IPrintable.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

#### Implementation of

[`ILendingPoolInfo`](../interfaces/ILendingPoolInfo.md).[`[___signature__]`](../interfaces/ILendingPoolInfo.md#___signature__-1)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

#### Implementation of

`ILendingPoolInfo.[___signature__]`

#### Inherited from

`PoolInfo.[___signature__]`

***

### collateral

> `readonly` **collateral**: [`ICollateralInfo`](../interfaces/ICollateralInfo.md)

The collateral information of the pool

#### Implementation of

[`ILendingPoolInfo`](../interfaces/ILendingPoolInfo.md).[`collateral`](../interfaces/ILendingPoolInfo.md#collateral)

***

### debt

> `readonly` **debt**: [`IDebtInfo`](../interfaces/IDebtInfo.md)

The debt information of the pool

#### Implementation of

[`ILendingPoolInfo`](../interfaces/ILendingPoolInfo.md).[`debt`](../interfaces/ILendingPoolInfo.md#debt)

***

### id

> `abstract` `readonly` **id**: [`ILendingPoolId`](../interfaces/ILendingPoolId.md)

ATTRIBUTES

#### Implementation of

[`ILendingPoolInfo`](../interfaces/ILendingPoolInfo.md).[`id`](../interfaces/ILendingPoolInfo.md#id)

#### Overrides

`PoolInfo.id`

***

### type

> `readonly` **type**: `Lending` = `PoolType.Lending`

ATTRIBUTES

#### Implementation of

[`ILendingPoolInfo`](../interfaces/ILendingPoolInfo.md).[`type`](../interfaces/ILendingPoolInfo.md#type)

#### Overrides

`PoolInfo.type`

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

`PoolInfo.toString`
