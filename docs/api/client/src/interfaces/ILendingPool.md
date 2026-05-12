[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / ILendingPool

# Interface: ILendingPool

ILendingPool
Represents a lending pool for a single pair collateral/debt

A lending pool is a pool where users can deposit collateral and borrow debt against that collateral.
Typically the user will pay interest on the debt, and the collateral will be locked until the debt is repaid.

This interface is an abstraction of a lending pool and the specialization for each protocol happens at the IPool
level through the PoolId

## Extends

- [`IPool`](IPool.md).[`ILendingPoolData`](../type-aliases/ILendingPoolData.md)

## Extended by

- [`IAaveV3LendingPool`](../../../protocol-plugins/service/src/interfaces/IAaveV3LendingPool.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

#### Inherited from

[`IPool`](IPool.md).[`[___signature__]`](IPool.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

#### Inherited from

`IPool.[___signature__]`

***

### collateralToken

> `readonly` **collateralToken**: [`IToken`](IToken.md)

Collateral token used to collateralized the pool

#### Overrides

`ILendingPoolData.collateralToken`

***

### debtToken

> `readonly` **debtToken**: [`IToken`](IToken.md)

Debt token, which can be borrowed from the pool

#### Overrides

`ILendingPoolData.debtToken`

***

### id

> `readonly` **id**: [`ILendingPoolId`](ILendingPoolId.md)

Pool ID of the lending pool

#### Overrides

[`IPool`](IPool.md).[`id`](IPool.md#id)

***

### type

> `readonly` **type**: `Lending`

Type of the pool

#### Overrides

[`IPool`](IPool.md).[`type`](IPool.md#type)

## Methods

### toString()

> **toString**(): `string`

toString
Returns a string representation of the object

#### Returns

`string`

string

The string representation should have enough info to debug the object

#### Inherited from

[`IPool`](IPool.md).[`toString`](IPool.md#tostring)
