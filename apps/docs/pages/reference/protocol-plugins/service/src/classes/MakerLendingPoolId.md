[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / MakerLendingPoolId

# Class: MakerLendingPoolId

MakerLendingPoolId

## See

IMakerLendingPoolIdData

## Extends

- [`LendingPoolId`](../../../../client/src/classes/LendingPoolId.md)

## Implements

- [`IMakerLendingPoolId`](../interfaces/IMakerLendingPoolId.md)
- [`IPrintable`](../../../../client/src/interfaces/IPrintable.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

[`IMakerLendingPoolId`](../interfaces/IMakerLendingPoolId.md).[`[___signature__]`](../interfaces/IMakerLendingPoolId.md#___signature__-2)

#### Inherited from

[`LendingPoolId`](../../../../client/src/classes/LendingPoolId.md).[`[___signature__]`](../../../../client/src/classes/LendingPoolId.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

#### Implementation of

`IMakerLendingPoolId.[___signature__]`

#### Inherited from

`LendingPoolId.[___signature__]`

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

#### Implementation of

`IMakerLendingPoolId.[___signature__]`

#### Inherited from

`LendingPoolId.[___signature__]`

***

### collateralToken

> `readonly` **collateralToken**: [`IToken`](../../../../client/src/interfaces/IToken.md)

The token used to collateralize the position

#### Implementation of

[`IMakerLendingPoolId`](../interfaces/IMakerLendingPoolId.md).[`collateralToken`](../interfaces/IMakerLendingPoolId.md#collateraltoken)

***

### debtToken

> `readonly` **debtToken**: [`IToken`](../../../../client/src/interfaces/IToken.md)

The token used to borrow funds

#### Implementation of

[`IMakerLendingPoolId`](../interfaces/IMakerLendingPoolId.md).[`debtToken`](../interfaces/IMakerLendingPoolId.md#debttoken)

***

### ilkType

> `readonly` **ilkType**: [`ILKType`](../enumerations/ILKType.md)

The ILK type of the pool

#### Implementation of

[`IMakerLendingPoolId`](../interfaces/IMakerLendingPoolId.md).[`ilkType`](../interfaces/IMakerLendingPoolId.md#ilktype)

***

### protocol

> `readonly` **protocol**: [`MakerProtocol`](MakerProtocol.md)

ATTRIBUTES

#### Implementation of

[`IMakerLendingPoolId`](../interfaces/IMakerLendingPoolId.md).[`protocol`](../interfaces/IMakerLendingPoolId.md#protocol)

#### Overrides

[`LendingPoolId`](../../../../client/src/classes/LendingPoolId.md).[`protocol`](../../../../client/src/classes/LendingPoolId.md#protocol)

***

### type

> `readonly` **type**: [`Lending`](../../../../client/src/enumerations/PoolType.md#lending) = `PoolType.Lending`

ATTRIBUTES

#### Implementation of

[`IMakerLendingPoolId`](../interfaces/IMakerLendingPoolId.md).[`type`](../interfaces/IMakerLendingPoolId.md#type)

#### Inherited from

[`LendingPoolId`](../../../../client/src/classes/LendingPoolId.md).[`type`](../../../../client/src/classes/LendingPoolId.md#type)

## Methods

### toString()

> **toString**(): `string`

#### Returns

`string`

#### See

IPrintable.toString

#### Implementation of

[`IPrintable`](../../../../client/src/interfaces/IPrintable.md).[`toString`](../../../../client/src/interfaces/IPrintable.md#tostring)

#### Overrides

[`LendingPoolId`](../../../../client/src/classes/LendingPoolId.md).[`toString`](../../../../client/src/classes/LendingPoolId.md#tostring)

***

### createFrom()

> `static` **createFrom**(`params`): `MakerLendingPoolId`

FACTORY

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`MakerLendingPoolIdParameters`](../type-aliases/MakerLendingPoolIdParameters.md) |

#### Returns

`MakerLendingPoolId`
