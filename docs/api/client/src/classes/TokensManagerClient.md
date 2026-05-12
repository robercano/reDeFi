[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / TokensManagerClient

# Class: TokensManagerClient

TokensManagerClient
Implementation of the ITokensManager interface for the SDK Client

## Extends

- `IRPCClient`

## Implements

- [`ITokensManagerClient`](../interfaces/ITokensManagerClient.md)

## Constructors

### Constructor

> **new TokensManagerClient**(`params`): `TokensManagerClient`

#### Parameters

##### params

###### chainInfo

[`ChainInfo`](ChainInfo.md)

###### rpcClient

`any`

#### Returns

`TokensManagerClient`

#### Overrides

`IRPCClient.constructor`

## Methods

### getTokenByAddress()

> **getTokenByAddress**(`params`): `Promise`\<[`IToken`](../interfaces/IToken.md)\>

#### Parameters

##### params

###### address

[`Address`](Address.md)

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

##### \_params

###### name

`string`

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

##### params

###### symbol

`string`

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

##### params

###### token

[`IToken`](../interfaces/IToken.md)

#### Returns

`Promise`\<[`ITokenAmount`](../interfaces/ITokenAmount.md)\>

#### See

ITokensManagerClient.getTokenTotalSupply

#### Implementation of

[`ITokensManagerClient`](../interfaces/ITokensManagerClient.md).[`getTokenTotalSupply`](../interfaces/ITokensManagerClient.md#gettokentotalsupply)
