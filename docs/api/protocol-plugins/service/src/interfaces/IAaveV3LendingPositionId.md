[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / IAaveV3LendingPositionId

# Interface: IAaveV3LendingPositionId

IAaveV3LendingPositionId
ID for a position on Aave V3 protocols

This interface is used to add all the methods that the interface supports

## Extends

- [`ILendingPositionId`](../../../../client/src/interfaces/ILendingPositionId.md).[`IAaveV3LendingPositionIdData`](../type-aliases/IAaveV3LendingPositionIdData.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature used to differentiate it from similar interfaces

#### Inherited from

[`ILendingPositionId`](../../../../client/src/interfaces/ILendingPositionId.md).[`[___signature__]`](../../../../client/src/interfaces/ILendingPositionId.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

#### Inherited from

`ILendingPositionId.[___signature__]`

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

#### Inherited from

`ILendingPositionId.[___signature__]`

***

### id

> `readonly` **id**: `string`

#### Inherited from

[`ILendingPositionId`](../../../../client/src/interfaces/ILendingPositionId.md).[`id`](../../../../client/src/interfaces/ILendingPositionId.md#id)

***

### poolId

> `readonly` **poolId**: [`IAaveV3LendingPoolId`](IAaveV3LendingPoolId.md)

The pool ID associated with this position

#### Overrides

`IAaveV3LendingPositionIdData.poolId`

***

### type

> `readonly` **type**: `Lending`

Type of the position

#### Inherited from

[`ILendingPositionId`](../../../../client/src/interfaces/ILendingPositionId.md).[`type`](../../../../client/src/interfaces/ILendingPositionId.md#type)

***

### walletAddress

> `readonly` **walletAddress**: [`IAddress`](../../../../client/src/interfaces/IAddress.md)

The wallet address of the position owner

#### Overrides

`IAaveV3LendingPositionIdData.walletAddress`
