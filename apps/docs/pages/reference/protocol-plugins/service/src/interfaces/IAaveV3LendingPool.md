[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / IAaveV3LendingPool

# Interface: IAaveV3LendingPool

IAaveV3LendingPool

## Description

Represents a lending pool in the Aave V3 protocol

## Extends

- [`ILendingPool`](../../../../client/src/interfaces/ILendingPool.md).[`IAaveV3LendingPoolData`](../type-aliases/IAaveV3LendingPoolData.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature used to differentiate it from similar interfaces

#### Inherited from

[`ILendingPool`](../../../../client/src/interfaces/ILendingPool.md).[`[___signature__]`](../../../../client/src/interfaces/ILendingPool.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

#### Inherited from

`ILendingPool.[___signature__]`

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

#### Inherited from

`ILendingPool.[___signature__]`

***

### collateralToken

> `readonly` **collateralToken**: [`IToken`](../../../../client/src/interfaces/IToken.md)

Collateral token used to collateralized the pool

#### Inherited from

[`ILendingPool`](../../../../client/src/interfaces/ILendingPool.md).[`collateralToken`](../../../../client/src/interfaces/ILendingPool.md#collateraltoken)

***

### debtToken

> `readonly` **debtToken**: [`IToken`](../../../../client/src/interfaces/IToken.md)

Debt token, which can be borrowed from the pool

#### Inherited from

[`ILendingPool`](../../../../client/src/interfaces/ILendingPool.md).[`debtToken`](../../../../client/src/interfaces/ILendingPool.md#debttoken)

***

### id

> `readonly` **id**: [`IAaveV3LendingPoolId`](IAaveV3LendingPoolId.md)

The lending pool's ID

#### Overrides

[`ILendingPool`](../../../../client/src/interfaces/ILendingPool.md).[`id`](../../../../client/src/interfaces/ILendingPool.md#id)

***

### type

> `readonly` **type**: [`Lending`](../../../../client/src/enumerations/PoolType.md#lending)

Type of the pool

#### Inherited from

[`ILendingPool`](../../../../client/src/interfaces/ILendingPool.md).[`type`](../../../../client/src/interfaces/ILendingPool.md#type)

## Methods

### toString()

> **toString**(): `string`

#### Returns

`string`

string

The string representation should have enough info to debug the object

#### Name

toString

#### Description

Returns a string representation of the object

#### Inherited from

[`ILendingPool`](../../../../client/src/interfaces/ILendingPool.md).[`toString`](../../../../client/src/interfaces/ILendingPool.md#tostring)
