[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / MorphoLendingPool

# Class: MorphoLendingPool

MorphoLendingPool

## See

IMorphoLendingPool

## Extends

- [`LendingPool`](../../../../client/src/classes/LendingPool.md)

## Implements

- [`IMorphoLendingPool`](../interfaces/IMorphoLendingPool.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

[`IMorphoLendingPool`](../interfaces/IMorphoLendingPool.md).[`[___signature__]`](../interfaces/IMorphoLendingPool.md#___signature__-2)

#### Inherited from

[`LendingPool`](../../../../client/src/classes/LendingPool.md).[`[___signature__]`](../../../../client/src/classes/LendingPool.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

`IMorphoLendingPool.[___signature__]`

#### Inherited from

`LendingPool.[___signature__]`

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

`IMorphoLendingPool.[___signature__]`

#### Inherited from

`LendingPool.[___signature__]`

***

### collateralToken

> `readonly` **collateralToken**: [`IToken`](../../../../client/src/interfaces/IToken.md)

Collateral token used to collateralized the pool

#### Implementation of

[`IMorphoLendingPool`](../interfaces/IMorphoLendingPool.md).[`collateralToken`](../interfaces/IMorphoLendingPool.md#collateraltoken)

#### Inherited from

[`LendingPool`](../../../../client/src/classes/LendingPool.md).[`collateralToken`](../../../../client/src/classes/LendingPool.md#collateraltoken)

***

### debtToken

> `readonly` **debtToken**: [`IToken`](../../../../client/src/interfaces/IToken.md)

Debt token, which can be borrowed from the pool

#### Implementation of

[`IMorphoLendingPool`](../interfaces/IMorphoLendingPool.md).[`debtToken`](../interfaces/IMorphoLendingPool.md#debttoken)

#### Inherited from

[`LendingPool`](../../../../client/src/classes/LendingPool.md).[`debtToken`](../../../../client/src/classes/LendingPool.md#debttoken)

***

### id

> `readonly` **id**: [`IMorphoLendingPoolId`](../../../../client/src/interfaces/IMorphoLendingPoolId.md)

ATTRIBUTES

#### Implementation of

[`IMorphoLendingPool`](../interfaces/IMorphoLendingPool.md).[`id`](../interfaces/IMorphoLendingPool.md#id)

#### Overrides

[`LendingPool`](../../../../client/src/classes/LendingPool.md).[`id`](../../../../client/src/classes/LendingPool.md#id)

***

### irm

> `readonly` **irm**: [`IAddress`](../../../../client/src/interfaces/IAddress.md)

The interest rate module used in the Morpho market

#### Implementation of

[`IMorphoLendingPool`](../interfaces/IMorphoLendingPool.md).[`irm`](../interfaces/IMorphoLendingPool.md#irm)

***

### lltv

> `readonly` **lltv**: [`IRiskRatio`](../../../../client/src/interfaces/IRiskRatio.md)

The liquidation LTV for the Morpho market

#### Implementation of

[`IMorphoLendingPool`](../interfaces/IMorphoLendingPool.md).[`lltv`](../interfaces/IMorphoLendingPool.md#lltv)

***

### oracle

> `readonly` **oracle**: [`IAddress`](../../../../client/src/interfaces/IAddress.md)

The oracle used in the Morpho market

#### Implementation of

[`IMorphoLendingPool`](../interfaces/IMorphoLendingPool.md).[`oracle`](../interfaces/IMorphoLendingPool.md#oracle)

***

### type

> `readonly` **type**: [`Lending`](../../../../client/src/enumerations/PoolType.md#lending) = `PoolType.Lending`

ATTRIBUTES

#### Implementation of

[`IMorphoLendingPool`](../interfaces/IMorphoLendingPool.md).[`type`](../interfaces/IMorphoLendingPool.md#type)

#### Inherited from

[`LendingPool`](../../../../client/src/classes/LendingPool.md).[`type`](../../../../client/src/classes/LendingPool.md#type)

## Methods

### toString()

> **toString**(): `string`

#### Returns

`string`

#### See

IPrintable.toString

#### Implementation of

[`IMorphoLendingPool`](../interfaces/IMorphoLendingPool.md).[`toString`](../interfaces/IMorphoLendingPool.md#tostring)

#### Inherited from

[`LendingPool`](../../../../client/src/classes/LendingPool.md).[`toString`](../../../../client/src/classes/LendingPool.md#tostring)

***

### createFrom()

> `static` **createFrom**(`params`): `MorphoLendingPool`

FACTORY

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`MorphoLendingPoolParameters`](../type-aliases/MorphoLendingPoolParameters.md) |

#### Returns

`MorphoLendingPool`
