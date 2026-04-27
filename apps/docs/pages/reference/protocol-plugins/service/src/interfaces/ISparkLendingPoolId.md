[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / ISparkLendingPoolId

# Interface: ISparkLendingPoolId

ISparkLendingPoolId

## Description

Identifier of a lending pool in the Spark protocol

Typescript forces the interface to re-declare any properties that have different BUT compatible types.
This may be fixed eventually, there is a discussion on the topic here: https://github.com/microsoft/TypeScript/issues/16936

## Extends

- [`ISparkLendingPoolIdData`](../type-aliases/ISparkLendingPoolIdData.md).[`ILendingPoolId`](../../../../client/src/interfaces/ILendingPoolId.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature used to differentiate it from similar interfaces

#### Inherited from

[`ILendingPoolId`](../../../../client/src/interfaces/ILendingPoolId.md).[`[___signature__]`](../../../../client/src/interfaces/ILendingPoolId.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate it from other interfaces

#### Inherited from

`ILendingPoolId.[___signature__]`

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

#### Inherited from

`ILendingPoolId.[___signature__]`

***

### collateralToken

> `readonly` **collateralToken**: [`IToken`](../../../../client/src/interfaces/IToken.md)

The token used to collateralize the position

#### Overrides

`ISparkLendingPoolIdData.collateralToken`

***

### debtToken

> `readonly` **debtToken**: [`IToken`](../../../../client/src/interfaces/IToken.md)

The token used to borrow funds

#### Overrides

`ISparkLendingPoolIdData.debtToken`

***

### emodeType

> `readonly` **emodeType**: [`EmodeType`](../enumerations/EmodeType.md)

The efficiency mode of the pool

#### Overrides

`ISparkLendingPoolIdData.emodeType`

***

### protocol

> `readonly` **protocol**: [`ISparkProtocol`](ISparkProtocol.md)

The protocol to which the pool belongs

#### Overrides

[`ILendingPoolId`](../../../../client/src/interfaces/ILendingPoolId.md).[`protocol`](../../../../client/src/interfaces/ILendingPoolId.md#protocol)

***

### type

> `readonly` **type**: [`Lending`](../../../../client/src/enumerations/PoolType.md#lending)

Pool type

#### Inherited from

[`ILendingPoolId`](../../../../client/src/interfaces/ILendingPoolId.md).[`type`](../../../../client/src/interfaces/ILendingPoolId.md#type)
