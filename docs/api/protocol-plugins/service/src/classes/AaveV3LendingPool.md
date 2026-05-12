[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / AaveV3LendingPool

# Class: AaveV3LendingPool

AaveV3LendingPool

## See

IAaveV3LendingPoolData

## Extends

- [`LendingPool`](../../../../client/src/classes/LendingPool.md)

## Implements

- [`IAaveV3LendingPool`](../interfaces/IAaveV3LendingPool.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

[`IAaveV3LendingPool`](../interfaces/IAaveV3LendingPool.md).[`[___signature__]`](../interfaces/IAaveV3LendingPool.md#___signature__-2)

#### Inherited from

[`LendingPool`](../../../../client/src/classes/LendingPool.md).[`[___signature__]`](../../../../client/src/classes/LendingPool.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

#### Implementation of

`IAaveV3LendingPool.[___signature__]`

#### Inherited from

`LendingPool.[___signature__]`

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

#### Implementation of

`IAaveV3LendingPool.[___signature__]`

#### Inherited from

`LendingPool.[___signature__]`

***

### collateralToken

> `readonly` **collateralToken**: [`IToken`](../../../../client/src/interfaces/IToken.md)

Collateral token used to collateralized the pool

#### Implementation of

[`IAaveV3LendingPool`](../interfaces/IAaveV3LendingPool.md).[`collateralToken`](../interfaces/IAaveV3LendingPool.md#collateraltoken)

#### Inherited from

[`LendingPool`](../../../../client/src/classes/LendingPool.md).[`collateralToken`](../../../../client/src/classes/LendingPool.md#collateraltoken)

***

### debtToken

> `readonly` **debtToken**: [`IToken`](../../../../client/src/interfaces/IToken.md)

Debt token, which can be borrowed from the pool

#### Implementation of

[`IAaveV3LendingPool`](../interfaces/IAaveV3LendingPool.md).[`debtToken`](../interfaces/IAaveV3LendingPool.md#debttoken)

#### Inherited from

[`LendingPool`](../../../../client/src/classes/LendingPool.md).[`debtToken`](../../../../client/src/classes/LendingPool.md#debttoken)

***

### id

> `readonly` **id**: [`AaveV3LendingPoolId`](AaveV3LendingPoolId.md)

ATTRIBUTES

#### Implementation of

[`IAaveV3LendingPool`](../interfaces/IAaveV3LendingPool.md).[`id`](../interfaces/IAaveV3LendingPool.md#id)

#### Overrides

[`LendingPool`](../../../../client/src/classes/LendingPool.md).[`id`](../../../../client/src/classes/LendingPool.md#id)

***

### type

> `readonly` **type**: `Lending` = `PoolType.Lending`

ATTRIBUTES

#### Implementation of

[`IAaveV3LendingPool`](../interfaces/IAaveV3LendingPool.md).[`type`](../interfaces/IAaveV3LendingPool.md#type)

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

[`IAaveV3LendingPool`](../interfaces/IAaveV3LendingPool.md).[`toString`](../interfaces/IAaveV3LendingPool.md#tostring)

#### Inherited from

[`LendingPool`](../../../../client/src/classes/LendingPool.md).[`toString`](../../../../client/src/classes/LendingPool.md#tostring)

***

### createFrom()

> `static` **createFrom**(`params`): `AaveV3LendingPool`

FACTORY

#### Parameters

##### params

[`AaveV3LendingPoolParameters`](../type-aliases/AaveV3LendingPoolParameters.md)

#### Returns

`AaveV3LendingPool`
