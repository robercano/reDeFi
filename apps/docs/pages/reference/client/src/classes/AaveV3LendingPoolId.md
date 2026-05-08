[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / AaveV3LendingPoolId

# Class: AaveV3LendingPoolId

AaveV3LendingPoolId

## See

IAaveV3LendingPoolId

## Extends

- [`LendingPoolId`](LendingPoolId.md)

## Implements

- [`IAaveV3LendingPoolId`](../interfaces/IAaveV3LendingPoolId.md)
- [`IPrintable`](../interfaces/IPrintable.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

[`IAaveV3LendingPoolId`](../interfaces/IAaveV3LendingPoolId.md).[`[___signature__]`](../interfaces/IAaveV3LendingPoolId.md#___signature__-2)

#### Inherited from

[`LendingPoolId`](LendingPoolId.md).[`[___signature__]`](LendingPoolId.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

`IAaveV3LendingPoolId.[___signature__]`

#### Inherited from

[`LendingPoolId`](LendingPoolId.md).[`[___signature__]`](LendingPoolId.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

`IAaveV3LendingPoolId.[___signature__]`

#### Inherited from

[`LendingPoolId`](LendingPoolId.md).[`[___signature__]`](LendingPoolId.md#___signature__-1)

***

### collateralToken

> `readonly` **collateralToken**: [`IToken`](../interfaces/IToken.md)

The token used to collateralized the position

#### Implementation of

[`IAaveV3LendingPoolId`](../interfaces/IAaveV3LendingPoolId.md).[`collateralToken`](../interfaces/IAaveV3LendingPoolId.md#collateraltoken)

***

### debtToken

> `readonly` **debtToken**: [`IToken`](../interfaces/IToken.md)

The token used to borrow funds

#### Implementation of

[`IAaveV3LendingPoolId`](../interfaces/IAaveV3LendingPoolId.md).[`debtToken`](../interfaces/IAaveV3LendingPoolId.md#debttoken)

***

### emodeType

> `readonly` **emodeType**: [`EmodeType`](../enumerations/EmodeType.md)

The pool's efficiency mode

#### Implementation of

[`IAaveV3LendingPoolId`](../interfaces/IAaveV3LendingPoolId.md).[`emodeType`](../interfaces/IAaveV3LendingPoolId.md#emodetype)

***

### protocol

> `readonly` **protocol**: [`IAaveV3Protocol`](../interfaces/IAaveV3Protocol.md)

ATTRIBUTES

#### Implementation of

[`IAaveV3LendingPoolId`](../interfaces/IAaveV3LendingPoolId.md).[`protocol`](../interfaces/IAaveV3LendingPoolId.md#protocol)

#### Overrides

[`LendingPoolId`](LendingPoolId.md).[`protocol`](LendingPoolId.md#protocol)

***

### type

> `readonly` **type**: [`Lending`](../enumerations/PoolType.md#lending) = `PoolType.Lending`

ATTRIBUTES

#### Implementation of

[`IAaveV3LendingPoolId`](../interfaces/IAaveV3LendingPoolId.md).[`type`](../interfaces/IAaveV3LendingPoolId.md#type)

#### Inherited from

[`LendingPoolId`](LendingPoolId.md).[`type`](LendingPoolId.md#type)

## Methods

### toString()

> **toString**(): `string`

#### Returns

`string`

#### See

IPrintable.toString

#### Implementation of

[`IPrintable`](../interfaces/IPrintable.md).[`toString`](../interfaces/IPrintable.md#tostring)

#### Overrides

[`LendingPoolId`](LendingPoolId.md).[`toString`](LendingPoolId.md#tostring)

***

### createFrom()

> `static` **createFrom**(`params`): `AaveV3LendingPoolId`

FACTORY

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`AaveV3LendingPoolIdParameters`](../../../protocol-plugins/service/src/type-aliases/AaveV3LendingPoolIdParameters.md) |

#### Returns

`AaveV3LendingPoolId`
