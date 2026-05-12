[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / IYieldPoolInfo

# Interface: IYieldPoolInfo

IYieldPoolInfo
Represents the extended information for a Yield pool

## Extends

- [`IPoolInfo`](IPoolInfo.md).[`IYieldPoolInfoData`](../type-aliases/IYieldPoolInfoData.md)

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

### currentApy

> `readonly` **currentApy**: [`IPercentage`](IPercentage.md)

The current APY of the pool

#### Overrides

`IYieldPoolInfoData.currentApy`

***

### id

> `readonly` **id**: [`IYieldPoolId`](IYieldPoolId.md)

Pool ID of the yield pool

#### Overrides

[`IPoolInfo`](IPoolInfo.md).[`id`](IPoolInfo.md#id)

***

### receiptToken

> `readonly` **receiptToken**: [`IToken`](IToken.md)

The receipt token that is minted/received

#### Overrides

`IYieldPoolInfoData.receiptToken`

***

### totalValueLocked

> `readonly` **totalValueLocked**: [`IFiatCurrencyAmount`](IFiatCurrencyAmount.md)

Total Value Locked in the pool

#### Overrides

`IYieldPoolInfoData.totalValueLocked`

***

### type

> `readonly` **type**: `Yield`

Type of the pool

#### Overrides

[`IPoolInfo`](IPoolInfo.md).[`type`](IPoolInfo.md#type)

***

### underlyingToken

> `readonly` **underlyingToken**: [`IToken`](IToken.md)

The underlying token that is deposited

#### Overrides

`IYieldPoolInfoData.underlyingToken`

***

### yieldType

> `readonly` **yieldType**: [`YieldType`](../../../common/src/enumerations/YieldType.md)

The yield type classification

#### Overrides

`IYieldPoolInfoData.yieldType`
