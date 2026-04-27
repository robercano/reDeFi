[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / IMakerLendingPoolId

# Interface: IMakerLendingPoolId

## Name

IMakerLendingPoolId

## Description

Represents a lending pool's ID for the Maker protocol

It includes the ILK type which will determine which pool will be used

## Extends

- [`ILendingPoolId`](../../../../client/src/interfaces/ILendingPoolId.md).[`IMakerLendingPoolIdData`](../type-aliases/IMakerLendingPoolIdData.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

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

`IMakerLendingPoolIdData.collateralToken`

***

### debtToken

> `readonly` **debtToken**: [`IToken`](../../../../client/src/interfaces/IToken.md)

The token used to borrow funds

#### Overrides

`IMakerLendingPoolIdData.debtToken`

***

### ilkType

> `readonly` **ilkType**: [`ILKType`](../enumerations/ILKType.md)

The ILK type of the pool

#### Overrides

`IMakerLendingPoolIdData.ilkType`

***

### protocol

> `readonly` **protocol**: [`IMakerProtocol`](IMakerProtocol.md)

The Maker protocol

#### Overrides

[`ILendingPoolId`](../../../../client/src/interfaces/ILendingPoolId.md).[`protocol`](../../../../client/src/interfaces/ILendingPoolId.md#protocol)

***

### type

> `readonly` **type**: [`Lending`](../../../../client/src/enumerations/PoolType.md#lending)

Pool type

#### Inherited from

[`ILendingPoolId`](../../../../client/src/interfaces/ILendingPoolId.md).[`type`](../../../../client/src/interfaces/ILendingPoolId.md#type)
