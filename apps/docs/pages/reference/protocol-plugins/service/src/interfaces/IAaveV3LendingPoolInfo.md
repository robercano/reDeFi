[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / IAaveV3LendingPoolInfo

# Interface: IAaveV3LendingPoolInfo

IAaveV3LendingPoolInfo

## Description

Represents a lending pool info in the Aave V3 protocol

Typescript forces the interface to re-declare any properties that have different BUT compatible types.
This may be fixed eventually, there is a discussion on the topic here: https://github.com/microsoft/TypeScript/issues/16936

## Extends

- [`ILendingPoolInfo`](../../../../client/src/interfaces/ILendingPoolInfo.md).[`IAaveV3LendingPoolInfoData`](../type-aliases/IAaveV3LendingPoolInfoData.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature used to differentiate it from similar interfaces

#### Inherited from

[`ILendingPoolInfo`](../../../../client/src/interfaces/ILendingPoolInfo.md).[`[___signature__]`](../../../../client/src/interfaces/ILendingPoolInfo.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

#### Inherited from

`ILendingPoolInfo.[___signature__]`

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

#### Inherited from

`ILendingPoolInfo.[___signature__]`

***

### collateral

> `readonly` **collateral**: [`ICollateralInfo`](../../../../client/src/interfaces/ICollateralInfo.md)

The collateral information of the pool

#### Inherited from

[`ILendingPoolInfo`](../../../../client/src/interfaces/ILendingPoolInfo.md).[`collateral`](../../../../client/src/interfaces/ILendingPoolInfo.md#collateral)

***

### debt

> `readonly` **debt**: [`IDebtInfo`](../../../../client/src/interfaces/IDebtInfo.md)

The debt information of the pool

#### Inherited from

[`ILendingPoolInfo`](../../../../client/src/interfaces/ILendingPoolInfo.md).[`debt`](../../../../client/src/interfaces/ILendingPoolInfo.md#debt)

***

### id

> `readonly` **id**: [`IAaveV3LendingPoolId`](IAaveV3LendingPoolId.md)

The lending pool's ID

#### Overrides

[`ILendingPoolInfo`](../../../../client/src/interfaces/ILendingPoolInfo.md).[`id`](../../../../client/src/interfaces/ILendingPoolInfo.md#id)

***

### type

> `readonly` **type**: [`Lending`](../../../../client/src/enumerations/PoolType.md#lending)

Type of the pool

#### Inherited from

[`ILendingPoolInfo`](../../../../client/src/interfaces/ILendingPoolInfo.md).[`type`](../../../../client/src/interfaces/ILendingPoolInfo.md#type)
