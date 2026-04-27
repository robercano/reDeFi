[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / SparkLendingPoolId

# Class: SparkLendingPoolId

SparkLendingPoolId

## See

ISparkLendingPoolIdData

## Extends

- [`LendingPoolId`](LendingPoolId.md)

## Implements

- [`ISparkLendingPoolId`](../interfaces/ISparkLendingPoolId.md)
- [`IPrintable`](../interfaces/IPrintable.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

[`ISparkLendingPoolId`](../interfaces/ISparkLendingPoolId.md).[`[___signature__]`](../interfaces/ISparkLendingPoolId.md#___signature__-2)

#### Inherited from

[`LendingPoolId`](LendingPoolId.md).[`[___signature__]`](LendingPoolId.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

`ISparkLendingPoolId.[___signature__]`

#### Inherited from

`LendingPoolId.[___signature__]`

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

`ISparkLendingPoolId.[___signature__]`

#### Inherited from

`LendingPoolId.[___signature__]`

***

### collateralToken

> `readonly` **collateralToken**: [`IToken`](../interfaces/IToken.md)

The token used to collateralize the position

#### Implementation of

[`ISparkLendingPoolId`](../interfaces/ISparkLendingPoolId.md).[`collateralToken`](../interfaces/ISparkLendingPoolId.md#collateraltoken)

***

### debtToken

> `readonly` **debtToken**: [`IToken`](../interfaces/IToken.md)

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

[`LendingPoolId`](LendingPoolId.md).[`protocol`](LendingPoolId.md#protocol)

***

### type

> `readonly` **type**: [`Lending`](../enumerations/PoolType.md#lending) = `PoolType.Lending`

ATTRIBUTES

#### Implementation of

[`ISparkLendingPoolId`](../interfaces/ISparkLendingPoolId.md).[`type`](../interfaces/ISparkLendingPoolId.md#type)

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

> `static` **createFrom**(`params`): `SparkLendingPoolId`

FACTORY

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`SparkLendingPoolIdParameters`](../../../protocol-plugins/service/src/type-aliases/SparkLendingPoolIdParameters.md) |

#### Returns

`SparkLendingPoolId`
