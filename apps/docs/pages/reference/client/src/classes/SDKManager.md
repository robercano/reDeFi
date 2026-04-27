[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / SDKManager

# Class: SDKManager

## See

ISDKManager

## Implements

- [`ISDKManager`](../interfaces/ISDKManager.md)

## Constructors

### Constructor

> **new SDKManager**(`params`): `SDKManager`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `rpcClient`: `TRPCClient`; \} |
| `params.rpcClient` | `TRPCClient` |

#### Returns

`SDKManager`

## Properties

### chains

> `readonly` **chains**: [`ChainsManagerClient`](ChainsManagerClient.md)

Chains Manager for interacting with the different chains supported in the SDK

#### Implementation of

[`ISDKManager`](../interfaces/ISDKManager.md).[`chains`](../interfaces/ISDKManager.md#chains)

***

### eventBus

> `readonly` **eventBus**: `IEventBus`

The global event bus for SDK events

#### Implementation of

[`ISDKManager`](../interfaces/ISDKManager.md).[`eventBus`](../interfaces/ISDKManager.md#eventbus)

***

### oracle

> `readonly` **oracle**: `OracleManagerClient`

Swap Manager for interacting with the swaps

#### Implementation of

[`ISDKManager`](../interfaces/ISDKManager.md).[`oracle`](../interfaces/ISDKManager.md#oracle)

***

### orders

> `readonly` **orders**: [`OrdersManagerClient`](OrdersManagerClient.md)

Orders Manager for building and handling execution orders

#### Implementation of

[`ISDKManager`](../interfaces/ISDKManager.md).[`orders`](../interfaces/ISDKManager.md#orders)

***

### portfolio

> `readonly` **portfolio**: [`PortfolioManager`](PortfolioManager.md)

Portfolio Manager for retrieving information about a user's portfolio

#### Implementation of

[`ISDKManager`](../interfaces/ISDKManager.md).[`portfolio`](../interfaces/ISDKManager.md#portfolio)

***

### protocols

> `readonly` **protocols**: [`ProtocolsManagerClient`](ProtocolsManagerClient.md)

Protocols Manager for interacting with protocols

#### Implementation of

[`ISDKManager`](../interfaces/ISDKManager.md).[`protocols`](../interfaces/ISDKManager.md#protocols)

***

### simulator

> `readonly` **simulator**: `SimulationManager`

Simulator for all the different operations supported in the SDK

#### Implementation of

[`ISDKManager`](../interfaces/ISDKManager.md).[`simulator`](../interfaces/ISDKManager.md#simulator)

***

### swaps

> `readonly` **swaps**: `SwapManagerClient`

Swap Manager for interacting with the swaps

#### Implementation of

[`ISDKManager`](../interfaces/ISDKManager.md).[`swaps`](../interfaces/ISDKManager.md#swaps)

***

### tokens

> `readonly` **tokens**: `TokensManagerClient2`

Tokens Manager for interacting with the different tokens supported in the SDK

#### Implementation of

[`ISDKManager`](../interfaces/ISDKManager.md).[`tokens`](../interfaces/ISDKManager.md#tokens)

***

### users

> `readonly` **users**: [`UsersManager`](UsersManager.md)

Users Manager for retrieving information about a user

#### Implementation of

[`ISDKManager`](../interfaces/ISDKManager.md).[`users`](../interfaces/ISDKManager.md#users)
