[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / IUserClient

# Interface: IUserClient

IUserClient
Represents a user and allows to access their positions and to create new orders

dev: This interface must be used to get positions for a user that will be used to create orders. To retrieve
     positions for portfolio please

## See

PortfolioManager

## Properties

### user

> **user**: [`IUser`](IUser.md)

## Methods

### getPortfolio()

> **getPortfolio**(): `Promise`\<[`IUserPortfolio`](IUserPortfolio.md)\>

getPortfolio
Retrieves the full user portfolio (wallet holdings and positions)

#### Returns

`Promise`\<[`IUserPortfolio`](IUserPortfolio.md)\>

The user portfolio

***

### getPosition()

> **getPosition**(`params`): `Promise`\<[`Maybe`](../type-aliases/Maybe.md)\<[`Position`](../classes/Position.md)\>\>

getPosition
Retrieves a position of the user by its ID

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `id`: [`PositionId`](../classes/PositionId.md); \} |
| `params.id` | [`PositionId`](../classes/PositionId.md) |

#### Returns

`Promise`\<[`Maybe`](../type-aliases/Maybe.md)\<[`Position`](../classes/Position.md)\>\>

***

### getPositionsByIds()

> **getPositionsByIds**(`params`): `Promise`\<[`Position`](../classes/Position.md)[]\>

getPositionsByIds
Retrieves the list of positions of the user for the given IDs

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `positionIds`: [`PositionId`](../classes/PositionId.md)[]; \} |
| `params.positionIds` | [`PositionId`](../classes/PositionId.md)[] |

#### Returns

`Promise`\<[`Position`](../classes/Position.md)[]\>

***

### getPositionsByProtocol()

> **getPositionsByProtocol**(`params`): `Promise`\<[`Position`](../classes/Position.md)[]\>

getPositionsByProtocol
Retrieves the list of positions of the user for a given protocol

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `protocol`: [`IProtocol`](IProtocol.md); \} |
| `params.protocol` | [`IProtocol`](IProtocol.md) |

#### Returns

`Promise`\<[`Position`](../classes/Position.md)[]\>

***

### newOrder()

> **newOrder**(`params`): `Promise`\<[`Maybe`](../type-aliases/Maybe.md)\<[`Order`](Order.md)\>\>

newOrder
Creates a new order for the user based on the given simulation

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | \{ `simulation`: [`ISimulation`](ISimulation.md); \} | - |
| `params.simulation` | [`ISimulation`](ISimulation.md) | The simulation to create the order for |

#### Returns

`Promise`\<[`Maybe`](../type-aliases/Maybe.md)\<[`Order`](Order.md)\>\>

The new order created for the user
