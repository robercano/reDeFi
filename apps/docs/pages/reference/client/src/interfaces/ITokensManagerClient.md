[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / ITokensManagerClient

# Interface: ITokensManagerClient

## Name

ITokensManagerClient

## Description

Interface for the TokensManager client implementation. Allows to retrieve information for
             a Token given its Chain, and its Address or symbol. The difference with the server side
             is that it stores the chain info internally and passes it as a parameter to the RPC calls

## See

ITokensManager

## Methods

### getTokenByAddress()

> **getTokenByAddress**(`params`): `Promise`\<[`IToken`](IToken.md)\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `address`: [`Address`](../classes/Address.md); \} |
| `params.address` | [`Address`](../classes/Address.md) |

#### Returns

`Promise`\<[`IToken`](IToken.md)\>

The token with the given address

#### Method

getTokenByAddress

#### Description

Retrieves a token by its address

***

### getTokenByName()

> **getTokenByName**(`params`): `Promise`\<[`IToken`](IToken.md)\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `name`: `string`; \} |
| `params.name` | `string` |

#### Returns

`Promise`\<[`IToken`](IToken.md)\>

The token with the given name

#### Method

getTokenByName

#### Description

Retrieves a token by its name

***

### getTokenBySymbol()

> **getTokenBySymbol**(`params`): `Promise`\<[`IToken`](IToken.md)\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `symbol`: `string`; \} |
| `params.symbol` | `string` |

#### Returns

`Promise`\<[`IToken`](IToken.md)\>

The token with the given symbol

#### Method

getTokenBySymbol

#### Description

Retrieves a token by its symbol

***

### getTokenTotalSupply()

> **getTokenTotalSupply**(`params`): `Promise`\<[`ITokenAmount`](ITokenAmount.md)\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `token`: [`IToken`](IToken.md); \} |
| `params.token` | [`IToken`](IToken.md) |

#### Returns

`Promise`\<[`ITokenAmount`](ITokenAmount.md)\>

The token supply wrapped inside an ITokenAmount

#### Method

getTokenTotalSupply

#### Description

Retrieves the total supply for a given token
