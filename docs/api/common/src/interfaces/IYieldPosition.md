[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / IYieldPosition

# Interface: IYieldPosition

IYieldPosition
Represents a position in a Yield protocol

## Extends

- [`IPosition`](IPosition.md).[`IYieldPositionData`](../type-aliases/IYieldPositionData.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

#### Inherited from

[`IPosition`](IPosition.md).[`[___signature__]`](IPosition.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

#### Inherited from

`IPosition.[___signature__]`

***

### claimableRewards

> `readonly` **claimableRewards**: [`ITokenAmount`](ITokenAmount.md)[]

Any secondary claimable reward tokens accumulated

#### Overrides

`IYieldPositionData.claimableRewards`

***

### currentAmount

> `readonly` **currentAmount**: [`ITokenAmount`](ITokenAmount.md)

Current total value including rebases or value appreciation

#### Overrides

`IYieldPositionData.currentAmount`

***

### id

> `readonly` **id**: [`IYieldPositionId`](IYieldPositionId.md)

Unique identifier for the position

#### Overrides

[`IPosition`](IPosition.md).[`id`](IPosition.md#id)

***

### pool

> `readonly` **pool**: [`IPool`](IPool.md)

Pool where the position is opened

#### Inherited from

[`IPosition`](IPosition.md).[`pool`](IPosition.md#pool)

***

### poolId

> `readonly` **poolId**: [`IYieldPoolId`](IYieldPoolId.md)

Pool ID where the position is located

#### Overrides

`IYieldPositionData.poolId`

***

### principalAmount

> `readonly` **principalAmount**: [`ITokenAmount`](ITokenAmount.md)

Amount originally deposited or the principal basis

#### Overrides

`IYieldPositionData.principalAmount`

***

### type

> `readonly` **type**: [`Yield`](../enumerations/PositionType.md#yield)

Type of the position

#### Overrides

[`IPosition`](IPosition.md).[`type`](IPosition.md#type)
