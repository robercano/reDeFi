[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / IMorphoLendingPool

# Interface: IMorphoLendingPool

IMorphoLendingPool

## Description

Represents a lending pool in the Morpho protocol

Typescript forces the interface to re-declare any properties that have different BUT compatible types.
This may be fixed eventually, there is a discussion on the topic here: https://github.com/microsoft/TypeScript/issues/16936

## Extends

- [`IMorphoLendingPoolData`](../type-aliases/IMorphoLendingPoolData.md).[`ILendingPool`](../../../../client/src/interfaces/ILendingPool.md)

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

`IMorphoLendingPoolData.collateralToken`

***

### debtToken

> `readonly` **debtToken**: [`IToken`](../../../../client/src/interfaces/IToken.md)

Debt token, which can be borrowed from the pool

#### Inherited from

`IMorphoLendingPoolData.debtToken`

***

### id

> `readonly` **id**: [`IMorphoLendingPoolId`](../../../../client/src/interfaces/IMorphoLendingPoolId.md)

The id of the lending pool

#### Overrides

[`ILendingPool`](../../../../client/src/interfaces/ILendingPool.md).[`id`](../../../../client/src/interfaces/ILendingPool.md#id)

***

### irm

> `readonly` **irm**: [`IAddress`](../../../../client/src/interfaces/IAddress.md)

The interest rate module used in the Morpho market

#### Overrides

`IMorphoLendingPoolData.irm`

***

### lltv

> `readonly` **lltv**: [`IRiskRatio`](../../../../client/src/interfaces/IRiskRatio.md)

The liquidation LTV for the Morpho market

#### Overrides

`IMorphoLendingPoolData.lltv`

***

### oracle

> `readonly` **oracle**: [`IAddress`](../../../../client/src/interfaces/IAddress.md)

The oracle used in the Morpho market

#### Overrides

`IMorphoLendingPoolData.oracle`

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
