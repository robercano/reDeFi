[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / SparkLendingPoolId

# Class: SparkLendingPoolId

SparkLendingPoolId

## See

ISparkLendingPoolIdData

## Extends

- [`LendingPoolId`](../../../../client/src/classes/LendingPoolId.md)

## Implements

- [`ISparkLendingPoolId`](../interfaces/ISparkLendingPoolId.md)
- [`IPrintable`](../../../../client/src/interfaces/IPrintable.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

[`ISparkLendingPoolId`](../interfaces/ISparkLendingPoolId.md).[`[___signature__]`](../interfaces/ISparkLendingPoolId.md#___signature__-2)

#### Inherited from

[`LendingPoolId`](../../../../client/src/classes/LendingPoolId.md).[`[___signature__]`](../../../../client/src/classes/LendingPoolId.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

#### Implementation of

`ISparkLendingPoolId.[___signature__]`

#### Inherited from

`LendingPoolId.[___signature__]`

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

#### Implementation of

`ISparkLendingPoolId.[___signature__]`

#### Inherited from

`LendingPoolId.[___signature__]`

***

### collateralToken

> `readonly` **collateralToken**: [`IToken`](../../../../client/src/interfaces/IToken.md)

The token used to collateralize the position

#### Implementation of

[`ISparkLendingPoolId`](../interfaces/ISparkLendingPoolId.md).[`collateralToken`](../interfaces/ISparkLendingPoolId.md#collateraltoken)

***

### debtToken

> `readonly` **debtToken**: [`IToken`](../../../../client/src/interfaces/IToken.md)

The token used to borrow funds

#### Implementation of

[`ISparkLendingPoolId`](../interfaces/ISparkLendingPoolId.md).[`debtToken`](../interfaces/ISparkLendingPoolId.md#debttoken)

***

### emodeType

> `readonly` **emodeType**: [`EmodeType`](../enumerations/EmodeType.md)

The efficiency mode of the pool

#### Implementation of

[`ISparkLendingPoolId`](../interfaces/ISparkLendingPoolId.md).[`emodeType`](../interfaces/ISparkLendingPoolId.md#emodetype)

***

### protocol

> `readonly` **protocol**: [`ISparkProtocol`](../interfaces/ISparkProtocol.md)

ATTRIBUTES

#### Implementation of

[`ISparkLendingPoolId`](../interfaces/ISparkLendingPoolId.md).[`protocol`](../interfaces/ISparkLendingPoolId.md#protocol)

#### Overrides

[`LendingPoolId`](../../../../client/src/classes/LendingPoolId.md).[`protocol`](../../../../client/src/classes/LendingPoolId.md#protocol)

***

### type

> `readonly` **type**: [`Lending`](../../../../client/src/enumerations/PoolType.md#lending) = `PoolType.Lending`

ATTRIBUTES

#### Implementation of

[`ISparkLendingPoolId`](../interfaces/ISparkLendingPoolId.md).[`type`](../interfaces/ISparkLendingPoolId.md#type)

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

> `static` **createFrom**(`params`): `SparkLendingPoolId`

FACTORY

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`SparkLendingPoolIdParameters`](../type-aliases/SparkLendingPoolIdParameters.md) |

#### Returns

`SparkLendingPoolId`
