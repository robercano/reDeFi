[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / Token

# Class: Token

Token

## See

IToken

## Extended by

- [`Vault`](Vault.md)

## Implements

- [`IToken`](../interfaces/IToken.md)

## Constructors

### Constructor

> `protected` **new Token**(`params`): `Token`

SEALED CONSTRUCTOR

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`TokenParameters`](../type-aliases/TokenParameters.md) |

#### Returns

`Token`

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

[`IToken`](../interfaces/IToken.md).[`[___signature__]`](../interfaces/IToken.md#___signature__)

***

### address

> `readonly` **address**: [`IAddress`](../interfaces/IAddress.md)

Token address

#### Implementation of

[`IToken`](../interfaces/IToken.md).[`address`](../interfaces/IToken.md#address)

***

### chainInfo

> `readonly` **chainInfo**: [`IChainInfo`](../interfaces/IChainInfo.md)

Chain where the token is deployed

#### Implementation of

[`IToken`](../interfaces/IToken.md).[`chainInfo`](../interfaces/IToken.md#chaininfo)

***

### decimals

> `readonly` **decimals**: `number`

Number of decimals for the token

#### Implementation of

[`IToken`](../interfaces/IToken.md).[`decimals`](../interfaces/IToken.md#decimals)

***

### logoURI?

> `readonly` `optional` **logoURI?**: `string` \| `null`

URI of the token logo

#### Implementation of

[`IToken`](../interfaces/IToken.md).[`logoURI`](../interfaces/IToken.md#logouri)

***

### name

> `readonly` **name**: `string`

Full token name

#### Implementation of

[`IToken`](../interfaces/IToken.md).[`name`](../interfaces/IToken.md#name)

***

### symbol

> `readonly` **symbol**: `string`

ATTRIBUTES

#### Implementation of

[`IToken`](../interfaces/IToken.md).[`symbol`](../interfaces/IToken.md#symbol)

## Methods

### equals()

> **equals**(`token`): `boolean`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `token` | `Token` |

#### Returns

`boolean`

#### See

IToken.equals

#### Implementation of

[`IToken`](../interfaces/IToken.md).[`equals`](../interfaces/IToken.md#equals)

***

### toString()

> **toString**(): `string`

#### Returns

`string`

#### See

IPrintable.toString

#### Implementation of

[`IToken`](../interfaces/IToken.md).[`toString`](../interfaces/IToken.md#tostring)

***

### createFrom()

> `static` **createFrom**(`params`): `Token`

FACTORY

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`TokenParameters`](../type-aliases/TokenParameters.md) |

#### Returns

`Token`
