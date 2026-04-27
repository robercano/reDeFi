[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / ISDKManager

# Interface: ISDKManager

SDKManager is the main entry point for interacting with the SDK in the client side

It contains all the available services that can be used to interact with the SDK

## Properties

### chains

> `readonly` **chains**: [`IChainsManagerClient`](IChainsManagerClient.md)

Chains Manager for interacting with the different chains supported in the SDK

***

### oracle

> `readonly` **oracle**: `IOracleManagerClient`

Swap Manager for interacting with the swaps

***

### orders

> `readonly` **orders**: [`IOrdersManagerClient`](IOrdersManagerClient.md)

Orders Manager for building and handling execution orders

***

### portfolio

> `readonly` **portfolio**: [`IPortfolioManager`](IPortfolioManager.md)

Portfolio Manager for retrieving information about a user's portfolio

***

### protocols

> `readonly` **protocols**: [`IProtocolsManagerClient`](IProtocolsManagerClient.md)

Protocols Manager for interacting with protocols

***

### simulator

> `readonly` **simulator**: `ISimulationManager`

Simulator for all the different operations supported in the SDK

***

### swaps

> `readonly` **swaps**: `ISwapManagerClient`

Swap Manager for interacting with the swaps

***

### tokens

> `readonly` **tokens**: `ITokensManagerClient2`

Tokens Manager for interacting with the different tokens supported in the SDK

***

### users

> `readonly` **users**: [`IUsersManager`](IUsersManager.md)

Users Manager for retrieving information about a user
