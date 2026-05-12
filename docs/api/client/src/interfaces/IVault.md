[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / IVault

# Interface: IVault

IVault
Represents an ERC4626 Vault, which is an ERC20 token itself and wrapped around an underlying asset token

## Extends

- [`IToken`](IToken.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

#### Inherited from

[`IToken`](IToken.md).[`[___signature__]`](IToken.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

#### Inherited from

`IToken.[___signature__]`

***

### address

> `readonly` **address**: [`IAddress`](IAddress.md)

Token address

#### Inherited from

[`IToken`](IToken.md).[`address`](IToken.md#address)

***

### asset

> `readonly` **asset**: [`IToken`](IToken.md)

The underlying ERC20 token asset of the vault

***

### chainInfo

> `readonly` **chainInfo**: [`IChainInfo`](IChainInfo.md)

Chain where the token is deployed

#### Inherited from

[`IToken`](IToken.md).[`chainInfo`](IToken.md#chaininfo)

***

### decimals

> `readonly` **decimals**: `number`

Number of decimals for the token

#### Inherited from

[`IToken`](IToken.md).[`decimals`](IToken.md#decimals)

***

### logoURI?

> `readonly` `optional` **logoURI?**: `string`

URI of the token logo

#### Inherited from

`IVault`.[`logoURI`](#logouri)

***

### name

> `readonly` **name**: `string`

Full token name

#### Inherited from

[`IToken`](IToken.md).[`name`](IToken.md#name)

***

### symbol

> `readonly` **symbol**: `string`

Token symbol, usually a short representation of name and used in tickers

#### Inherited from

[`IToken`](IToken.md).[`symbol`](IToken.md#symbol)

## Methods

### equals()

> **equals**(`token`): `boolean`

equals
Checks if two tokens are equal

#### Parameters

##### token

[`IToken`](IToken.md)

The token to compare

#### Returns

`boolean`

true if the tokens are equal

Equality is determined by the address and chain information

#### Inherited from

[`IToken`](IToken.md).[`equals`](IToken.md#equals)

***

### toString()

> **toString**(): `string`

toString
Returns a string representation of the object

#### Returns

`string`

string

The string representation should have enough info to debug the object

#### Inherited from

[`IToken`](IToken.md).[`toString`](IToken.md#tostring)
