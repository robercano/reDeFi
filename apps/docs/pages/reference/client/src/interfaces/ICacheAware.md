[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / ICacheAware

# Interface: ICacheAware

Interface that classes must implement to use the

## Cache

decorator.

## Properties

### cacheOrchestrator?

> `optional` **cacheOrchestrator?**: [`DataOrchestrator`](../classes/DataOrchestrator.md)

#### Description

The DataOrchestrator instance responsible for executing layered caching logic.
             Must be provided for the

#### Cache

decorator to function properly.
