[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / AaveV3LendingPoolId

# Class: AaveV3LendingPoolId

AaveV3LendingPoolId

## See

IAaveV3LendingPoolId

## Extends

- [`LendingPoolId`](../../../../client/src/classes/LendingPoolId.md)

## Implements

- [`IAaveV3LendingPoolId`](../interfaces/IAaveV3LendingPoolId.md)
- [`IPrintable`](../../../../common/src/interfaces/IPrintable.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

[`IAaveV3LendingPoolId`](../interfaces/IAaveV3LendingPoolId.md).[`[___signature__]`](../interfaces/IAaveV3LendingPoolId.md#___signature__-2)

#### Inherited from

[`LendingPoolId`](../../../../client/src/classes/LendingPoolId.md).[`[___signature__]`](../../../../client/src/classes/LendingPoolId.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

#### Implementation of

`IAaveV3LendingPoolId.[___signature__]`

#### Inherited from

`LendingPoolId.[___signature__]`

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

#### Implementation of

`IAaveV3LendingPoolId.[___signature__]`

#### Inherited from

`LendingPoolId.[___signature__]`

***

### collateralToken

> `readonly` **collateralToken**: [`IToken`](../../../../client/src/interfaces/IToken.md)

The token used to collateralized the position

#### Implementation of

[`IAaveV3LendingPoolId`](../interfaces/IAaveV3LendingPoolId.md).[`collateralToken`](../interfaces/IAaveV3LendingPoolId.md#collateraltoken)

***

### debtToken

> `readonly` **debtToken**: [`IToken`](../../../../client/src/interfaces/IToken.md)

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

[`LendingPoolId`](../../../../client/src/classes/LendingPoolId.md).[`protocol`](../../../../client/src/classes/LendingPoolId.md#protocol)

***

### type

> `readonly` **type**: `Lending` = `PoolType.Lending`

ATTRIBUTES

#### Implementation of

[`IAaveV3LendingPoolId`](../interfaces/IAaveV3LendingPoolId.md).[`type`](../interfaces/IAaveV3LendingPoolId.md#type)

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

[`IPrintable`](../../../../common/src/interfaces/IPrintable.md).[`toString`](../../../../common/src/interfaces/IPrintable.md#tostring)

#### Overrides

[`LendingPoolId`](../../../../client/src/classes/LendingPoolId.md).[`toString`](../../../../client/src/classes/LendingPoolId.md#tostring)

***

### createFrom()

> `static` **createFrom**(`params`): `AaveV3LendingPoolId`

FACTORY

#### Parameters

##### params

[`AaveV3LendingPoolIdParameters`](../type-aliases/AaveV3LendingPoolIdParameters.md)

#### Returns

`AaveV3LendingPoolId`
