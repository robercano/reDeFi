[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / AaveV3LendingPositionId

# Class: AaveV3LendingPositionId

AaveV3PositionId

## See

IAaveV3LendingPositionIdData

## Extends

- [`LendingPositionId`](LendingPositionId.md)

## Implements

- [`IAaveV3LendingPositionId`](../../../protocol-plugins/service/src/interfaces/IAaveV3LendingPositionId.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

[`IAaveV3LendingPositionId`](../../../protocol-plugins/service/src/interfaces/IAaveV3LendingPositionId.md).[`[___signature__]`](../../../protocol-plugins/service/src/interfaces/IAaveV3LendingPositionId.md#___signature__-2)

#### Inherited from

[`LendingPositionId`](LendingPositionId.md).[`[___signature__]`](LendingPositionId.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

`IAaveV3LendingPositionId.[___signature__]`

#### Inherited from

[`LendingPositionId`](LendingPositionId.md).[`[___signature__]`](LendingPositionId.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

`IAaveV3LendingPositionId.[___signature__]`

#### Inherited from

[`LendingPositionId`](LendingPositionId.md).[`[___signature__]`](LendingPositionId.md#___signature__-1)

***

### id

> `readonly` **id**: `string`

ATTRIBUTES

#### Implementation of

[`IAaveV3LendingPositionId`](../../../protocol-plugins/service/src/interfaces/IAaveV3LendingPositionId.md).[`id`](../../../protocol-plugins/service/src/interfaces/IAaveV3LendingPositionId.md#id)

#### Inherited from

[`LendingPositionId`](LendingPositionId.md).[`id`](LendingPositionId.md#id)

***

### poolId

> `readonly` **poolId**: [`IAaveV3LendingPoolId`](../interfaces/IAaveV3LendingPoolId.md)

ATTRIBUTES

#### Implementation of

[`IAaveV3LendingPositionId`](../../../protocol-plugins/service/src/interfaces/IAaveV3LendingPositionId.md).[`poolId`](../../../protocol-plugins/service/src/interfaces/IAaveV3LendingPositionId.md#poolid)

***

### type

> `readonly` **type**: [`Lending`](../enumerations/PositionType.md#lending) = `PositionType.Lending`

ATTRIBUTES

#### Implementation of

[`IAaveV3LendingPositionId`](../../../protocol-plugins/service/src/interfaces/IAaveV3LendingPositionId.md).[`type`](../../../protocol-plugins/service/src/interfaces/IAaveV3LendingPositionId.md#type)

#### Inherited from

[`LendingPositionId`](LendingPositionId.md).[`type`](LendingPositionId.md#type)

***

### walletAddress

> `readonly` **walletAddress**: [`IAddress`](../interfaces/IAddress.md)

The wallet address of the position owner

#### Implementation of

[`IAaveV3LendingPositionId`](../../../protocol-plugins/service/src/interfaces/IAaveV3LendingPositionId.md).[`walletAddress`](../../../protocol-plugins/service/src/interfaces/IAaveV3LendingPositionId.md#walletaddress)

## Methods

### toString()

> **toString**(): `string`

#### Returns

`string`

#### See

IPrintable.toString

#### Inherited from

[`LendingPositionId`](LendingPositionId.md).[`toString`](LendingPositionId.md#tostring)

***

### createFrom()

> `static` **createFrom**(`params`): `AaveV3LendingPositionId`

FACTORY

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`AaveV3LendingPositionIdParameters`](../../../protocol-plugins/service/src/type-aliases/AaveV3LendingPositionIdParameters.md) |

#### Returns

`AaveV3LendingPositionId`
