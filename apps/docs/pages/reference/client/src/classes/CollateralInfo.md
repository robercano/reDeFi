[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / CollateralInfo

# Class: CollateralInfo

CollateralInfo

## See

ICollateralInfo

## Implements

- [`ICollateralInfo`](../interfaces/ICollateralInfo.md)

## Constructors

### Constructor

> `protected` **new CollateralInfo**(`params`): `CollateralInfo`

CONSTRUCTOR

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`CollateralInfoParameters`](../type-aliases/CollateralInfoParameters.md) |

#### Returns

`CollateralInfo`

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

#### Implementation of

[`ICollateralInfo`](../interfaces/ICollateralInfo.md).[`[___signature__]`](../interfaces/ICollateralInfo.md#___signature__)

***

### liquidationPenalty

> `readonly` **liquidationPenalty**: [`IPercentage`](../interfaces/IPercentage.md)

The penalty that is charged for liquidating a position

#### Implementation of

[`ICollateralInfo`](../interfaces/ICollateralInfo.md).[`liquidationPenalty`](../interfaces/ICollateralInfo.md#liquidationpenalty)

***

### liquidationThreshold

> `readonly` **liquidationThreshold**: [`IRiskRatio`](../interfaces/IRiskRatio.md)

The ratio between the collateral and the debt at which the position could be liquidated

#### Implementation of

[`ICollateralInfo`](../interfaces/ICollateralInfo.md).[`liquidationThreshold`](../interfaces/ICollateralInfo.md#liquidationthreshold)

***

### maxSupply

> `readonly` **maxSupply**: [`ITokenAmount`](../interfaces/ITokenAmount.md)

The maximum amount of the token that can be supplied

#### Implementation of

[`ICollateralInfo`](../interfaces/ICollateralInfo.md).[`maxSupply`](../interfaces/ICollateralInfo.md#maxsupply)

***

### price

> `readonly` **price**: [`IPrice`](../interfaces/IPrice.md)

The price of the token in the protocol's default denomination

#### Implementation of

[`ICollateralInfo`](../interfaces/ICollateralInfo.md).[`price`](../interfaces/ICollateralInfo.md#price)

***

### priceUSD

> `readonly` **priceUSD**: [`IPrice`](../interfaces/IPrice.md)

The price of the token in USD

#### Implementation of

[`ICollateralInfo`](../interfaces/ICollateralInfo.md).[`priceUSD`](../interfaces/ICollateralInfo.md#priceusd)

***

### token

> `readonly` **token**: [`IToken`](../interfaces/IToken.md)

ATTRIBUTES

#### Implementation of

[`ICollateralInfo`](../interfaces/ICollateralInfo.md).[`token`](../interfaces/ICollateralInfo.md#token)

***

### tokensLocked

> `readonly` **tokensLocked**: [`ITokenAmount`](../interfaces/ITokenAmount.md)

The amount of the token that is currently locked in the pool

#### Implementation of

[`ICollateralInfo`](../interfaces/ICollateralInfo.md).[`tokensLocked`](../interfaces/ICollateralInfo.md#tokenslocked)

## Methods

### createFrom()

> `static` **createFrom**(`params`): `CollateralInfo`

FACTORY METHODS

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`CollateralInfoParameters`](../type-aliases/CollateralInfoParameters.md) |

#### Returns

`CollateralInfo`
