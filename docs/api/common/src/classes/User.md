[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / User

# Class: User

User

## See

IUser

## Implements

- [`IUser`](../interfaces/IUser.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

[`IUser`](../interfaces/IUser.md).[`[___signature__]`](../interfaces/IUser.md#___signature__)

***

### chainInfo

> `readonly` **chainInfo**: [`IChainInfo`](../interfaces/IChainInfo.md)

The chain the user is connected to

#### Implementation of

[`IUser`](../interfaces/IUser.md).[`chainInfo`](../interfaces/IUser.md#chaininfo)

***

### wallet

> `readonly` **wallet**: [`IWallet`](../interfaces/IWallet.md)

ATTRIBUTES

#### Implementation of

[`IUser`](../interfaces/IUser.md).[`wallet`](../interfaces/IUser.md#wallet)

## Methods

### equals()

> **equals**(`token`): `boolean`

#### Parameters

##### token

[`IUser`](../interfaces/IUser.md)

#### Returns

`boolean`

#### See

IUser.equals

***

### toString()

> **toString**(): `string`

#### Returns

`string`

#### See

IPrintable.toString

#### Implementation of

[`IUser`](../interfaces/IUser.md).[`toString`](../interfaces/IUser.md#tostring)

***

### createFrom()

> `static` **createFrom**(`params`): `User`

FACTORY

#### Parameters

##### params

[`UserParameters`](../type-aliases/UserParameters.md)

#### Returns

`User`

***

### createFromEthereum()

> `static` **createFromEthereum**(`chainId`, `addressValue`): `User`

#### Parameters

##### chainId

`number`

##### addressValue

`` `0x${string}` ``

#### Returns

`User`
