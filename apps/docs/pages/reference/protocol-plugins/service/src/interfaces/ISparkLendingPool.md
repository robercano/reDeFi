[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / ISparkLendingPool

# Interface: ISparkLendingPool

ISparkLendingPool
Represents a lending pool in the Spark protocol

Currently empty as there are no specifics for this protocol

Typescript forces the interface to re-declare any properties that have different BUT compatible types.
This may be fixed eventually, there is a discussion on the topic here: https://github.com/microsoft/TypeScript/issues/16936

## Extends

- [`ISparkLendingPoolData`](../type-aliases/ISparkLendingPoolData.md).[`ILendingPool`](../../../../client/src/interfaces/ILendingPool.md)

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

`ISparkLendingPoolData.collateralToken`

***

### debtToken

> `readonly` **debtToken**: [`IToken`](../../../../client/src/interfaces/IToken.md)

Debt token, which can be borrowed from the pool

#### Inherited from

`ISparkLendingPoolData.debtToken`

***

### id

> `readonly` **id**: [`ISparkLendingPoolId`](../../../../client/src/interfaces/ISparkLendingPoolId.md)

The id of the lending pool

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

toString
Returns a string representation of the object

#### Returns

`string`

string

The string representation should have enough info to debug the object

#### Inherited from

[`ILendingPool`](../../../../client/src/interfaces/ILendingPool.md).[`toString`](../../../../client/src/interfaces/ILendingPool.md#tostring)
