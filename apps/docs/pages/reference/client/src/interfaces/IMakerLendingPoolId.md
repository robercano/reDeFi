[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / IMakerLendingPoolId

# Interface: IMakerLendingPoolId

## Name

IMakerLendingPoolId

## Description

Represents a lending pool's ID for the Maker protocol

It includes the ILK type which will determine which pool will be used

## Extends

- [`ILendingPoolId`](ILendingPoolId.md).[`IMakerLendingPoolIdData`](../../../protocol-plugins/service/src/type-aliases/IMakerLendingPoolIdData.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

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

`IMakerLendingPoolIdData.collateralToken`

***

### debtToken

> `readonly` **debtToken**: [`IToken`](IToken.md)

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

[`ILendingPoolId`](ILendingPoolId.md).[`protocol`](ILendingPoolId.md#protocol)

***

### type

> `readonly` **type**: [`Lending`](../enumerations/PoolType.md#lending)

Pool type

#### Inherited from

[`ILendingPoolId`](ILendingPoolId.md).[`type`](ILendingPoolId.md#type)
