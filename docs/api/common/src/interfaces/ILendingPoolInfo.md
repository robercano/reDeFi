[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / ILendingPoolInfo

# Interface: ILendingPoolInfo

ILendingPoolInfo
Represents the extended information for a lending pool of a single pair collateral/debt

This extended information includes extra info for the collateral and debt like the liquidation threshold, liquidation penalty, total amount
borroed, etc...

The intention of this interface is to standardize the information that the protocol plugins should provide for the lending pools and it is
not intended to be specialized by the protocol plugins. The reason for this is that the plugins already have this information and the SDK
tries to abstract this information to provide a common interface for all the protocols on the client side.

## Extends

- [`IPoolInfo`](IPoolInfo.md).[`ILendingPoolInfoData`](../type-aliases/ILendingPoolInfoData.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

#### Inherited from

[`IPoolInfo`](IPoolInfo.md).[`[___signature__]`](IPoolInfo.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

#### Inherited from

`IPoolInfo.[___signature__]`

***

### collateral

> `readonly` **collateral**: [`ICollateralInfo`](ICollateralInfo.md)

The collateral information of the pool

#### Overrides

`ILendingPoolInfoData.collateral`

***

### debt

> `readonly` **debt**: [`IDebtInfo`](IDebtInfo.md)

The debt information of the pool

#### Overrides

`ILendingPoolInfoData.debt`

***

### id

> `readonly` **id**: [`ILendingPoolId`](ILendingPoolId.md)

Pool ID of the lending pool

#### Overrides

[`IPoolInfo`](IPoolInfo.md).[`id`](IPoolInfo.md#id)

***

### type

> `readonly` **type**: [`Lending`](../enumerations/PoolType.md#lending)

Type of the pool

#### Overrides

[`IPoolInfo`](IPoolInfo.md).[`type`](IPoolInfo.md#type)
