[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / AaveV3LendingPositionId

# Class: AaveV3LendingPositionId

AaveV3PositionId

## See

IAaveV3LendingPositionIdData

## Extends

- [`LendingPositionId`](../../../../client/src/classes/LendingPositionId.md)

## Implements

- [`IAaveV3LendingPositionId`](../interfaces/IAaveV3LendingPositionId.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

[`IAaveV3LendingPositionId`](../interfaces/IAaveV3LendingPositionId.md).[`[___signature__]`](../interfaces/IAaveV3LendingPositionId.md#___signature__-2)

#### Inherited from

[`LendingPositionId`](../../../../client/src/classes/LendingPositionId.md).[`[___signature__]`](../../../../client/src/classes/LendingPositionId.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

#### Implementation of

`IAaveV3LendingPositionId.[___signature__]`

#### Inherited from

`LendingPositionId.[___signature__]`

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

#### Implementation of

`IAaveV3LendingPositionId.[___signature__]`

#### Inherited from

`LendingPositionId.[___signature__]`

***

### id

> `readonly` **id**: `string`

ATTRIBUTES

#### Implementation of

[`IAaveV3LendingPositionId`](../interfaces/IAaveV3LendingPositionId.md).[`id`](../interfaces/IAaveV3LendingPositionId.md#id)

#### Inherited from

[`LendingPositionId`](../../../../client/src/classes/LendingPositionId.md).[`id`](../../../../client/src/classes/LendingPositionId.md#id)

***

### poolId

> `readonly` **poolId**: [`IAaveV3LendingPoolId`](../interfaces/IAaveV3LendingPoolId.md)

ATTRIBUTES

#### Implementation of

[`IAaveV3LendingPositionId`](../interfaces/IAaveV3LendingPositionId.md).[`poolId`](../interfaces/IAaveV3LendingPositionId.md#poolid)

***

### type

> `readonly` **type**: [`Lending`](../../../../client/src/enumerations/PositionType.md#lending) = `PositionType.Lending`

ATTRIBUTES

#### Implementation of

[`IAaveV3LendingPositionId`](../interfaces/IAaveV3LendingPositionId.md).[`type`](../interfaces/IAaveV3LendingPositionId.md#type)

#### Inherited from

[`LendingPositionId`](../../../../client/src/classes/LendingPositionId.md).[`type`](../../../../client/src/classes/LendingPositionId.md#type)

***

### walletAddress

> `readonly` **walletAddress**: [`IAddress`](../../../../client/src/interfaces/IAddress.md)

The wallet address of the position owner

#### Implementation of

[`IAaveV3LendingPositionId`](../interfaces/IAaveV3LendingPositionId.md).[`walletAddress`](../interfaces/IAaveV3LendingPositionId.md#walletaddress)

## Methods

### toString()

> **toString**(): `string`

#### Returns

`string`

#### See

IPrintable.toString

#### Inherited from

[`LendingPositionId`](../../../../client/src/classes/LendingPositionId.md).[`toString`](../../../../client/src/classes/LendingPositionId.md#tostring)

***

### createFrom()

> `static` **createFrom**(`params`): `AaveV3LendingPositionId`

FACTORY

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`AaveV3LendingPositionIdParameters`](../type-aliases/AaveV3LendingPositionIdParameters.md) |

#### Returns

`AaveV3LendingPositionId`
