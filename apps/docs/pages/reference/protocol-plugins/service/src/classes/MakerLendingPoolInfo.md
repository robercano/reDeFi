[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / MakerLendingPoolInfo

# Class: MakerLendingPoolInfo

MakerLendingPoolInfo

## See

IMakerLendingPoolInfoData

## Extends

- [`LendingPoolInfo`](../../../../client/src/classes/LendingPoolInfo.md)

## Implements

- [`IMakerLendingPoolInfoData`](../type-aliases/IMakerLendingPoolInfoData.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Inherited from

[`LendingPoolInfo`](../../../../client/src/classes/LendingPoolInfo.md).[`[___signature__]`](../../../../client/src/classes/LendingPoolInfo.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

#### Inherited from

`LendingPoolInfo.[___signature__]`

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

#### Inherited from

`LendingPoolInfo.[___signature__]`

***

### collateral

> `readonly` **collateral**: [`ICollateralInfo`](../../../../client/src/interfaces/ICollateralInfo.md)

The collateral information of the pool

#### Implementation of

`IMakerLendingPoolInfoData.collateral`

#### Inherited from

[`LendingPoolInfo`](../../../../client/src/classes/LendingPoolInfo.md).[`collateral`](../../../../client/src/classes/LendingPoolInfo.md#collateral)

***

### debt

> `readonly` **debt**: [`IDebtInfo`](../../../../client/src/interfaces/IDebtInfo.md)

The debt information of the pool

#### Implementation of

`IMakerLendingPoolInfoData.debt`

#### Inherited from

[`LendingPoolInfo`](../../../../client/src/classes/LendingPoolInfo.md).[`debt`](../../../../client/src/classes/LendingPoolInfo.md#debt)

***

### id

> `readonly` **id**: [`IMakerLendingPoolId`](../interfaces/IMakerLendingPoolId.md)

ATTRIBUTES

#### Implementation of

`IMakerLendingPoolInfoData.id`

#### Overrides

[`LendingPoolInfo`](../../../../client/src/classes/LendingPoolInfo.md).[`id`](../../../../client/src/classes/LendingPoolInfo.md#id)

***

### type

> `readonly` **type**: [`Lending`](../../../../client/src/enumerations/PoolType.md#lending) = `PoolType.Lending`

ATTRIBUTES

#### Implementation of

`IMakerLendingPoolInfoData.type`

#### Inherited from

[`LendingPoolInfo`](../../../../client/src/classes/LendingPoolInfo.md).[`type`](../../../../client/src/classes/LendingPoolInfo.md#type)

## Methods

### toString()

> **toString**(): `string`

#### Returns

`string`

#### See

IPrintable.toString

#### Inherited from

[`LendingPoolInfo`](../../../../client/src/classes/LendingPoolInfo.md).[`toString`](../../../../client/src/classes/LendingPoolInfo.md#tostring)

***

### createFrom()

> `static` **createFrom**(`params`): `MakerLendingPoolInfo`

FACTORY

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`MakerLendingPoolInfoParameters`](../type-aliases/MakerLendingPoolInfoParameters.md) |

#### Returns

`MakerLendingPoolInfo`
