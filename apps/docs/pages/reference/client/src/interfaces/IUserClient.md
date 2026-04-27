[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / IUserClient

# Interface: IUserClient

IUserClient

## Description

Represents a user and allows to access their positions and to create new orders

## Dev

This interface must be used to get positions for a user that will be used to create orders. To retrieve
     positions for portfolio please

## See

PortfolioManager

## Properties

### user

> **user**: [`IUser`](IUser.md)

## Methods

### getPortfolio()

> **getPortfolio**(): `Promise`\<[`IUserPortfolio`](IUserPortfolio.md)\>

#### Returns

`Promise`\<[`IUserPortfolio`](IUserPortfolio.md)\>

The user portfolio

#### Method

getPortfolio

#### Description

Retrieves the full user portfolio (wallet holdings and positions)

***

### getPosition()

> **getPosition**(`params`): `Promise`\<[`Maybe`](../type-aliases/Maybe.md)\<[`Position`](../classes/Position.md)\>\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `id`: [`PositionId`](../classes/PositionId.md); \} |
| `params.id` | [`PositionId`](../classes/PositionId.md) |

#### Returns

`Promise`\<[`Maybe`](../type-aliases/Maybe.md)\<[`Position`](../classes/Position.md)\>\>

#### Method

getPosition

#### Description

Retrieves a position of the user by its ID

***

### getPositionsByIds()

> **getPositionsByIds**(`params`): `Promise`\<[`Position`](../classes/Position.md)[]\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `positionIds`: [`PositionId`](../classes/PositionId.md)[]; \} |
| `params.positionIds` | [`PositionId`](../classes/PositionId.md)[] |

#### Returns

`Promise`\<[`Position`](../classes/Position.md)[]\>

#### Method

getPositionsByIds

#### Description

Retrieves the list of positions of the user for the given IDs

***

### getPositionsByProtocol()

> **getPositionsByProtocol**(`params`): `Promise`\<[`Position`](../classes/Position.md)[]\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `protocol`: [`IProtocol`](IProtocol.md); \} |
| `params.protocol` | [`IProtocol`](IProtocol.md) |

#### Returns

`Promise`\<[`Position`](../classes/Position.md)[]\>

#### Method

getPositionsByProtocol

#### Description

Retrieves the list of positions of the user for a given protocol

***

### newOrder()

> **newOrder**(`params`): `Promise`\<[`Maybe`](../type-aliases/Maybe.md)\<[`Order`](Order.md)\>\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `simulation`: [`ISimulation`](ISimulation.md); \} |
| `params.simulation` | [`ISimulation`](ISimulation.md) |

#### Returns

`Promise`\<[`Maybe`](../type-aliases/Maybe.md)\<[`Order`](Order.md)\>\>

The new order created for the user

#### Method

newOrder

#### Description

Creates a new order for the user based on the given simulation
