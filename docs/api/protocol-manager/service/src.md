[**redefi**](../../README.md)

***

[redefi](../../README.md) / protocol-manager/service/src

# protocol-manager/service/src

## Classes

### ProtocolManager

ProtocolManager
Component that offers access to the different protocol plugins for the endpoint service

#### See

IProtocolManager

It validates the input data coming from the SDK client and forwards the requests to the corresponding protocol plugin
Each plugin is in charge of further validation and processing of the request

#### Implements

- [`AaveV3LendingPoolId`](../../client/src.md#aavev3lendingpoolid)

#### Properties

##### lending

> `readonly` **lending**: [`ProtocolManager`](#protocolmanager)

Feature modules

##### stake

> `readonly` **stake**: `unknown` = `undefined`

##### yield

> `readonly` **yield**: [`ProtocolManager`](#protocolmanager)

#### Methods

##### getLendingPool()

> **getLendingPool**(`poolId`): `Promise`\<[`ILendingPool`](../../client/src.md#ilendingpool)\>

###### Parameters

###### poolId

[`ILendingPoolId`](../../client/src.md#ilendingpoolid-1)

###### Returns

`Promise`\<[`ILendingPool`](../../client/src.md#ilendingpool)\>

###### See

ILendingProtocolManagerFeatures.getLendingPool

##### getLendingPoolInfo()

> **getLendingPoolInfo**(`poolId`): `Promise`\<[`ILendingPoolInfo`](../../client/src.md#ilendingpoolinfo)\>

###### Parameters

###### poolId

[`ILendingPoolId`](../../client/src.md#ilendingpoolid-1)

###### Returns

`Promise`\<[`ILendingPoolInfo`](../../client/src.md#ilendingpoolinfo)\>

###### See

ILendingProtocolManagerFeatures.getLendingPoolInfo

##### getLendingPosition()

> **getLendingPosition**(`positionId`): `Promise`\<[`ILendingPosition`](../../client/src.md#ilendingposition)\>

###### Parameters

###### positionId

[`ILendingPositionId`](../../client/src.md#ilendingpositionid-1)

###### Returns

`Promise`\<[`ILendingPosition`](../../client/src.md#ilendingposition)\>

###### See

ILendingProtocolManagerFeatures.getLendingPosition

##### getYieldPoolInfo()

> **getYieldPoolInfo**(`poolId`): `Promise`\<[`IYieldPoolInfo`](../../client/src.md#iyieldpoolinfo)\>

###### Parameters

###### poolId

[`IYieldPoolId`](../../client/src.md#iyieldpoolid)

###### Returns

`Promise`\<[`IYieldPoolInfo`](../../client/src.md#iyieldpoolinfo)\>

###### See

IYieldProtocolManagerFeatures.getYieldPoolInfo

##### getYieldPosition()

> **getYieldPosition**(`positionId`): `Promise`\<[`IYieldPosition`](../../client/src.md#iyieldposition)\>

###### Parameters

###### positionId

[`IYieldPositionId`](../../client/src.md#iyieldpositionid-1)

###### Returns

`Promise`\<[`IYieldPosition`](../../client/src.md#iyieldposition)\>

###### See

IYieldProtocolManagerFeatures.getYieldPosition

##### createWith()

> `static` **createWith**(`params`): [`ProtocolManager`](#protocolmanager)

createWith

###### Parameters

###### params

###### pluginsRegistry

`IProtocolPluginsRegistry`

The registry of protocol plugins

###### Returns

[`ProtocolManager`](#protocolmanager)

A new instance of ProtocolManager
