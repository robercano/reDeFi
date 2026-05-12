[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / Cache

# Function: Cache()

> **Cache**(`profile`): (`targetOrMethod`, `propertyKeyOrContext`, `descriptor?`) => `any`

Method decorator to automatically cache the result of the method based on a VolatilityProfile.
The class using this decorator MUST have a `cacheOrchestrator` property.

## Parameters

### profile

[`VolatilityProfile`](../../../common/src/enumerations/VolatilityProfile.md)

The data volatility profile to govern caching rules.

## Returns

(`targetOrMethod`, `propertyKeyOrContext`, `descriptor?`) => `any`
