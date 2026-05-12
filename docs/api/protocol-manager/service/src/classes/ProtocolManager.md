[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-manager/service/src](../README.md) / ProtocolManager

# Class: ProtocolManager

ProtocolManager
Component that offers access to the different protocol plugins for the endpoint service

## See

IProtocolManager

It validates the input data coming from the SDK client and forwards the requests to the corresponding protocol plugin
Each plugin is in charge of further validation and processing of the request

## Implements

- [`AaveV3LendingPoolId`](../../../../client/src/variables/AaveV3LendingPoolId.md)

## Properties

### lending

> `readonly` **lending**: `ProtocolManager`

Feature modules

***

### stake

> `readonly` **stake**: `unknown` = `undefined`

***

### yield

> `readonly` **yield**: `ProtocolManager`

## Methods

### getLendingPool()

> **getLendingPool**(`poolId`): `Promise`\<[`ILendingPool`](../../../../client/src/interfaces/ILendingPool.md)\>

#### Parameters

##### poolId

[`ILendingPoolId`](../../../../client/src/interfaces/ILendingPoolId.md)

#### Returns

`Promise`\<[`ILendingPool`](../../../../client/src/interfaces/ILendingPool.md)\>

#### See

ILendingProtocolManagerFeatures.getLendingPool

***

### getLendingPoolInfo()

> **getLendingPoolInfo**(`poolId`): `Promise`\<[`ILendingPoolInfo`](../../../../client/src/interfaces/ILendingPoolInfo.md)\>

#### Parameters

##### poolId

[`ILendingPoolId`](../../../../client/src/interfaces/ILendingPoolId.md)

#### Returns

`Promise`\<[`ILendingPoolInfo`](../../../../client/src/interfaces/ILendingPoolInfo.md)\>

#### See

ILendingProtocolManagerFeatures.getLendingPoolInfo

***

### getLendingPosition()

> **getLendingPosition**(`positionId`): `Promise`\<[`ILendingPosition`](../../../../client/src/interfaces/ILendingPosition.md)\>

#### Parameters

##### positionId

[`ILendingPositionId`](../../../../client/src/interfaces/ILendingPositionId.md)

#### Returns

`Promise`\<[`ILendingPosition`](../../../../client/src/interfaces/ILendingPosition.md)\>

#### See

ILendingProtocolManagerFeatures.getLendingPosition

***

### getYieldPoolInfo()

> **getYieldPoolInfo**(`poolId`): `Promise`\<[`IYieldPoolInfo`](../../../../client/src/interfaces/IYieldPoolInfo.md)\>

#### Parameters

##### poolId

[`IYieldPoolId`](../../../../client/src/interfaces/IYieldPoolId.md)

#### Returns

`Promise`\<[`IYieldPoolInfo`](../../../../client/src/interfaces/IYieldPoolInfo.md)\>

#### See

IYieldProtocolManagerFeatures.getYieldPoolInfo

***

### getYieldPosition()

> **getYieldPosition**(`positionId`): `Promise`\<[`IYieldPosition`](../../../../client/src/interfaces/IYieldPosition.md)\>

#### Parameters

##### positionId

[`IYieldPositionId`](../../../../client/src/interfaces/IYieldPositionId.md)

#### Returns

`Promise`\<[`IYieldPosition`](../../../../client/src/interfaces/IYieldPosition.md)\>

#### See

IYieldProtocolManagerFeatures.getYieldPosition

***

### createWith()

> `static` **createWith**(`params`): `ProtocolManager`

createWith

#### Parameters

##### params

###### pluginsRegistry

`IProtocolPluginsRegistry`

The registry of protocol plugins

#### Returns

`ProtocolManager`

A new instance of ProtocolManager
