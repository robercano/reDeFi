[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / ITokensManagerClient

# Interface: ITokensManagerClient

ITokensManagerClient
Interface for the TokensManager client implementation. Allows to retrieve information for
             a Token given its Chain, and its Address or symbol. The difference with the server side
             is that it stores the chain info internally and passes it as a parameter to the RPC calls

## See

ITokensManager

## Methods

### getTokenByAddress()

> **getTokenByAddress**(`params`): `Promise`\<[`IToken`](IToken.md)\>

getTokenByAddress
Retrieves a token by its address

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | \{ `address`: [`Address`](../classes/Address.md); \} | - |
| `params.address` | [`Address`](../classes/Address.md) | The address of the token to retrieve |

#### Returns

`Promise`\<[`IToken`](IToken.md)\>

The token with the given address

***

### getTokenByName()

> **getTokenByName**(`params`): `Promise`\<[`IToken`](IToken.md)\>

getTokenByName
Retrieves a token by its name

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | \{ `name`: `string`; \} | - |
| `params.name` | `string` | The name of the token to retrieve |

#### Returns

`Promise`\<[`IToken`](IToken.md)\>

The token with the given name

***

### getTokenBySymbol()

> **getTokenBySymbol**(`params`): `Promise`\<[`IToken`](IToken.md)\>

getTokenBySymbol
Retrieves a token by its symbol

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | \{ `symbol`: `string`; \} | - |
| `params.symbol` | `string` | The symbol of the token to retrieve |

#### Returns

`Promise`\<[`IToken`](IToken.md)\>

The token with the given symbol

***

### getTokenTotalSupply()

> **getTokenTotalSupply**(`params`): `Promise`\<[`ITokenAmount`](ITokenAmount.md)\>

getTokenTotalSupply
Retrieves the total supply for a given token

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | \{ `token`: [`IToken`](IToken.md); \} | - |
| `params.token` | [`IToken`](IToken.md) | The token whose supply should be retrieved |

#### Returns

`Promise`\<[`ITokenAmount`](ITokenAmount.md)\>

The token supply wrapped inside an ITokenAmount
