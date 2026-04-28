[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / IAaveV3LendingPoolId

# Interface: IAaveV3LendingPoolId

IAaveV3LendingPoolId
Identifier of a lending pool on the Aave v3 protocol

Typescript forces the interface to re-declare any properties that have different BUT compatible types.
This may be fixed eventually, there is a discussion on the topic here: https://github.com/microsoft/TypeScript/issues/16936

## Extends

- [`ILendingPoolId`](ILendingPoolId.md).[`IAaveV3LendingPoolIdData`](../../../protocol-plugins/service/src/type-aliases/IAaveV3LendingPoolIdData.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Interface signature used to differentiate it from similar interfaces

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

The token used to collateralized the position

#### Overrides

`IAaveV3LendingPoolIdData.collateralToken`

***

### debtToken

> `readonly` **debtToken**: [`IToken`](IToken.md)

The token used to borrow funds

#### Overrides

`IAaveV3LendingPoolIdData.debtToken`

***

### emodeType

> `readonly` **emodeType**: [`EmodeType`](../enumerations/EmodeType.md)

The pool's efficiency mode

#### Overrides

`IAaveV3LendingPoolIdData.emodeType`

***

### protocol

> `readonly` **protocol**: [`IAaveV3Protocol`](IAaveV3Protocol.md)

Aave v3 protocol

#### Overrides

[`ILendingPoolId`](ILendingPoolId.md).[`protocol`](ILendingPoolId.md#protocol)

***

### type

> `readonly` **type**: [`Lending`](../enumerations/PoolType.md#lending)

Pool type

#### Inherited from

[`ILendingPoolId`](ILendingPoolId.md).[`type`](ILendingPoolId.md#type)
