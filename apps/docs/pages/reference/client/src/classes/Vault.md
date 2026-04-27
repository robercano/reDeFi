[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / Vault

# Class: Vault

## Name

Vault

## See

IVault

## Extends

- [`Token`](Token.md)

## Implements

- [`IVault`](../interfaces/IVault.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

[`IVault`](../interfaces/IVault.md).[`[___signature__]`](../interfaces/IVault.md#___signature__-1)

#### Inherited from

[`Token`](Token.md).[`[___signature__]`](Token.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

`IVault.[___signature__]`

#### Inherited from

`Token.[___signature__]`

***

### address

> `readonly` **address**: [`IAddress`](../interfaces/IAddress.md)

Token address

#### Implementation of

[`IVault`](../interfaces/IVault.md).[`address`](../interfaces/IVault.md#address)

#### Inherited from

[`Token`](Token.md).[`address`](Token.md#address)

***

### asset

> `readonly` **asset**: [`IToken`](../interfaces/IToken.md)

ATTRIBUTES

#### Implementation of

[`IVault`](../interfaces/IVault.md).[`asset`](../interfaces/IVault.md#asset)

***

### chainInfo

> `readonly` **chainInfo**: [`IChainInfo`](../interfaces/IChainInfo.md)

Chain where the token is deployed

#### Implementation of

[`IVault`](../interfaces/IVault.md).[`chainInfo`](../interfaces/IVault.md#chaininfo)

#### Inherited from

[`Token`](Token.md).[`chainInfo`](Token.md#chaininfo)

***

### decimals

> `readonly` **decimals**: `number`

Number of decimals for the token

#### Implementation of

[`IVault`](../interfaces/IVault.md).[`decimals`](../interfaces/IVault.md#decimals)

#### Inherited from

[`Token`](Token.md).[`decimals`](Token.md#decimals)

***

### logoURI?

> `readonly` `optional` **logoURI?**: `string` \| `null`

URI of the token logo

#### Implementation of

[`IVault`](../interfaces/IVault.md).[`logoURI`](../interfaces/IVault.md#logouri)

#### Inherited from

[`Token`](Token.md).[`logoURI`](Token.md#logouri)

***

### name

> `readonly` **name**: `string`

Full token name

#### Implementation of

[`IVault`](../interfaces/IVault.md).[`name`](../interfaces/IVault.md#name)

#### Inherited from

[`Token`](Token.md).[`name`](Token.md#name)

***

### symbol

> `readonly` **symbol**: `string`

ATTRIBUTES

#### Implementation of

[`IVault`](../interfaces/IVault.md).[`symbol`](../interfaces/IVault.md#symbol)

#### Inherited from

[`Token`](Token.md).[`symbol`](Token.md#symbol)

## Methods

### equals()

> **equals**(`token`): `boolean`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `token` | [`Token`](Token.md) |

#### Returns

`boolean`

#### See

IToken.equals

#### Implementation of

[`IVault`](../interfaces/IVault.md).[`equals`](../interfaces/IVault.md#equals)

#### Inherited from

[`Token`](Token.md).[`equals`](Token.md#equals)

***

### toString()

> **toString**(): `string`

#### Returns

`string`

#### See

IPrintable.toString

#### Implementation of

[`IVault`](../interfaces/IVault.md).[`toString`](../interfaces/IVault.md#tostring)

#### Inherited from

[`Token`](Token.md).[`toString`](Token.md#tostring)

***

### createFrom()

> `static` **createFrom**(`params`): `Vault`

FACTORY

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`VaultParameters`](../type-aliases/VaultParameters.md) |

#### Returns

`Vault`

#### Overrides

[`Token`](Token.md).[`createFrom`](Token.md#createfrom)
