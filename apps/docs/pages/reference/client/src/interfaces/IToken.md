[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / IToken

# Interface: IToken

IToken
Represents an token in a Chain, typically used to represent ERC-20 tokens

## Extends

- [`ITokenData`](../type-aliases/ITokenData.md).[`IPrintable`](IPrintable.md)

## Extended by

- [`IVault`](IVault.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

***

### address

> `readonly` **address**: [`IAddress`](IAddress.md)

Token address

#### Overrides

`ITokenData.address`

***

### chainInfo

> `readonly` **chainInfo**: [`IChainInfo`](IChainInfo.md)

Chain where the token is deployed

#### Overrides

`ITokenData.chainInfo`

***

### decimals

> `readonly` **decimals**: `number`

Number of decimals for the token

#### Overrides

`ITokenData.decimals`

***

### logoURI?

> `readonly` `optional` **logoURI?**: `string` \| `null`

URI of the token logo

#### Overrides

`ITokenData.logoURI`

***

### name

> `readonly` **name**: `string`

Full token name

#### Overrides

`ITokenData.name`

***

### symbol

> `readonly` **symbol**: `string`

Token symbol, usually a short representation of name and used in tickers

#### Overrides

`ITokenData.symbol`

## Methods

### equals()

> **equals**(`token`): `boolean`

equals
Checks if two tokens are equal

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `token` | `IToken` | The token to compare |

#### Returns

`boolean`

true if the tokens are equal

Equality is determined by the address and chain information

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

[`IPrintable`](IPrintable.md).[`toString`](IPrintable.md#tostring)
