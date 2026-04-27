[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / ISparkLendingPoolId

# Interface: ISparkLendingPoolId

ISparkLendingPoolId

## Description

Identifier of a lending pool in the Spark protocol

Typescript forces the interface to re-declare any properties that have different BUT compatible types.
This may be fixed eventually, there is a discussion on the topic here: https://github.com/microsoft/TypeScript/issues/16936

## Extends

- [`ISparkLendingPoolIdData`](../../../protocol-plugins/service/src/type-aliases/ISparkLendingPoolIdData.md).[`ILendingPoolId`](ILendingPoolId.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature used to differentiate it from similar interfaces

#### Inherited from

[`ILendingPoolId`](ILendingPoolId.md).[`[___signature__]`](ILendingPoolId.md#___signature__)

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

> `readonly` **collateralToken**: [`IToken`](IToken.md)

The token used to collateralize the position

#### Overrides

`ISparkLendingPoolIdData.collateralToken`

***

### debtToken

> `readonly` **debtToken**: [`IToken`](IToken.md)

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

`ISparkLendingPoolIdData.protocol`

***

### type

> `readonly` **type**: [`Lending`](../enumerations/PoolType.md#lending)

Pool type

#### Inherited from

[`ILendingPoolId`](ILendingPoolId.md).[`type`](ILendingPoolId.md#type)
