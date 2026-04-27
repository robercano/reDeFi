[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / UserClient

# Class: UserClient

UserClient

## See

IUserClient

## Extends

- `IRPCClient`

## Implements

- [`IUserClient`](../interfaces/IUserClient.md)

## Constructors

### Constructor

> **new UserClient**(`params`): `UserClient`

Constructor

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `chainInfo`: [`IChainInfo`](../interfaces/IChainInfo.md); `rpcClient`: `any`; `wallet`: [`IWallet`](../interfaces/IWallet.md); \} |
| `params.chainInfo` | [`IChainInfo`](../interfaces/IChainInfo.md) |
| `params.rpcClient` | `any` |
| `params.wallet` | [`IWallet`](../interfaces/IWallet.md) |

#### Returns

`UserClient`

#### Overrides

`IRPCClient.constructor`

## Properties

### user

> **user**: [`IUser`](../interfaces/IUser.md)

#### Implementation of

[`IUserClient`](../interfaces/IUserClient.md).[`user`](../interfaces/IUserClient.md#user)

## Accessors

### rpcClient

#### Get Signature

> **get** `protected` **rpcClient**(): `any`

##### Returns

`any`

#### Inherited from

`IRPCClient.rpcClient`

## Methods

### getPortfolio()

> **getPortfolio**(): `Promise`\<[`IUserPortfolio`](../interfaces/IUserPortfolio.md)\>

#### Returns

`Promise`\<[`IUserPortfolio`](../interfaces/IUserPortfolio.md)\>

The user portfolio

#### Method

getPortfolio

#### Description

Retrieves the full user portfolio (wallet holdings and positions)

#### Implementation of

[`IUserClient`](../interfaces/IUserClient.md).[`getPortfolio`](../interfaces/IUserClient.md#getportfolio)

***

### getPosition()

> **getPosition**(`params`): `Promise`\<[`Maybe`](../type-aliases/Maybe.md)\<[`Position`](Position.md)\>\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `id`: [`PositionId`](PositionId.md); \} |
| `params.id` | [`PositionId`](PositionId.md) |

#### Returns

`Promise`\<[`Maybe`](../type-aliases/Maybe.md)\<[`Position`](Position.md)\>\>

#### Method

getPosition

#### Description

Retrieves a position of the user by its ID

#### Implementation of

[`IUserClient`](../interfaces/IUserClient.md).[`getPosition`](../interfaces/IUserClient.md#getposition)

***

### getPositionsByIds()

> **getPositionsByIds**(`_params`): `Promise`\<[`Position`](Position.md)[]\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `_params` | \{ `positionIds`: [`PositionId`](PositionId.md)[]; \} |
| `_params.positionIds` | [`PositionId`](PositionId.md)[] |

#### Returns

`Promise`\<[`Position`](Position.md)[]\>

#### Method

getPositionsByIds

#### Description

Retrieves the list of positions of the user for the given IDs

#### Implementation of

[`IUserClient`](../interfaces/IUserClient.md).[`getPositionsByIds`](../interfaces/IUserClient.md#getpositionsbyids)

***

### getPositionsByProtocol()

> **getPositionsByProtocol**(`_params`): `Promise`\<[`Position`](Position.md)[]\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `_params` | \{ `protocol`: [`IProtocol`](../interfaces/IProtocol.md); \} |
| `_params.protocol` | [`IProtocol`](../interfaces/IProtocol.md) |

#### Returns

`Promise`\<[`Position`](Position.md)[]\>

#### Method

getPositionsByProtocol

#### Description

Retrieves the list of positions of the user for a given protocol

#### Implementation of

[`IUserClient`](../interfaces/IUserClient.md).[`getPositionsByProtocol`](../interfaces/IUserClient.md#getpositionsbyprotocol)

***

### newOrder()

> **newOrder**(`params`): `Promise`\<[`Maybe`](../type-aliases/Maybe.md)\<[`Order`](../interfaces/Order.md)\>\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `positionsManager?`: [`IPositionsManager`](../interfaces/IPositionsManager.md); `simulation`: [`ISimulation`](../interfaces/ISimulation.md); \} |
| `params.positionsManager?` | [`IPositionsManager`](../interfaces/IPositionsManager.md) |
| `params.simulation` | [`ISimulation`](../interfaces/ISimulation.md) |

#### Returns

`Promise`\<[`Maybe`](../type-aliases/Maybe.md)\<[`Order`](../interfaces/Order.md)\>\>

The new order created for the user

#### Method

newOrder

#### Description

Creates a new order for the user based on the given simulation

#### Implementation of

[`IUserClient`](../interfaces/IUserClient.md).[`newOrder`](../interfaces/IUserClient.md#neworder)
