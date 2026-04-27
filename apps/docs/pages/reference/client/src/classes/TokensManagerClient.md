[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / TokensManagerClient

# Class: TokensManagerClient

## Name

TokensManagerClient

## Description

Implementation of the ITokensManager interface for the SDK Client

## Extends

- `IRPCClient`

## Implements

- [`ITokensManagerClient`](../interfaces/ITokensManagerClient.md)

## Constructors

### Constructor

> **new TokensManagerClient**(`params`): `TokensManagerClient`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `chainInfo`: [`ChainInfo`](ChainInfo.md); `rpcClient`: `any`; \} |
| `params.chainInfo` | [`ChainInfo`](ChainInfo.md) |
| `params.rpcClient` | `any` |

#### Returns

`TokensManagerClient`

#### Overrides

`IRPCClient.constructor`

## Accessors

### rpcClient

#### Get Signature

> **get** `protected` **rpcClient**(): `any`

##### Returns

`any`

#### Inherited from

`IRPCClient.rpcClient`

## Methods

### getTokenByAddress()

> **getTokenByAddress**(`params`): `Promise`\<[`IToken`](../interfaces/IToken.md)\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `address`: [`Address`](Address.md); \} |
| `params.address` | [`Address`](Address.md) |

#### Returns

`Promise`\<[`IToken`](../interfaces/IToken.md)\>

#### See

ITokensManagerClient.getTokenByAddress

#### Implementation of

[`ITokensManagerClient`](../interfaces/ITokensManagerClient.md).[`getTokenByAddress`](../interfaces/ITokensManagerClient.md#gettokenbyaddress)

***

### getTokenByName()

> **getTokenByName**(`_params`): `Promise`\<[`IToken`](../interfaces/IToken.md)\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `_params` | \{ `name`: `string`; \} |
| `_params.name` | `string` |

#### Returns

`Promise`\<[`IToken`](../interfaces/IToken.md)\>

#### See

ITokensManagerClient.getTokenByName

#### Implementation of

[`ITokensManagerClient`](../interfaces/ITokensManagerClient.md).[`getTokenByName`](../interfaces/ITokensManagerClient.md#gettokenbyname)

***

### getTokenBySymbol()

> **getTokenBySymbol**(`params`): `Promise`\<[`IToken`](../interfaces/IToken.md)\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `symbol`: `string`; \} |
| `params.symbol` | `string` |

#### Returns

`Promise`\<[`IToken`](../interfaces/IToken.md)\>

#### See

ITokensManagerClient.getTokenBySymbol

#### Implementation of

[`ITokensManagerClient`](../interfaces/ITokensManagerClient.md).[`getTokenBySymbol`](../interfaces/ITokensManagerClient.md#gettokenbysymbol)

***

### getTokenTotalSupply()

> **getTokenTotalSupply**(`params`): `Promise`\<[`ITokenAmount`](../interfaces/ITokenAmount.md)\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `token`: [`IToken`](../interfaces/IToken.md); \} |
| `params.token` | [`IToken`](../interfaces/IToken.md) |

#### Returns

`Promise`\<[`ITokenAmount`](../interfaces/ITokenAmount.md)\>

#### See

ITokensManagerClient.getTokenTotalSupply

#### Implementation of

[`ITokensManagerClient`](../interfaces/ITokensManagerClient.md).[`getTokenTotalSupply`](../interfaces/ITokensManagerClient.md#gettokentotalsupply)
