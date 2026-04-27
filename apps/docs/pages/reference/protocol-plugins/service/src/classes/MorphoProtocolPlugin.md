[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / MorphoProtocolPlugin

# Class: MorphoProtocolPlugin

MorphoProtocolPlugin

## Description

Protocol plugin for the Morpho protocol

## See

BaseProtocolPlugin

## Extends

- `BaseProtocolPlugin`

## Constructors

### Constructor

> **new MorphoProtocolPlugin**(): `MorphoProtocolPlugin`

#### Returns

`MorphoProtocolPlugin`

#### Inherited from

`BaseProtocolPlugin.constructor`

## Properties

### protocolName

> `readonly` **protocolName**: [`MorphoBlue`](../../../../client/src/enumerations/ProtocolName.md#morphoblue) = `ProtocolName.MorphoBlue`

Name of the protocol that the plugin is implementing

#### Overrides

`BaseProtocolPlugin.protocolName`

***

### stepBuilders

> `readonly` **stepBuilders**: `ActionBuildersMap` = `MorphoStepBuilders`

Map of action builders for the protocol

#### Overrides

`BaseProtocolPlugin.stepBuilders`

***

### supportedChains

> `readonly` **supportedChains**: [`ChainInfo`](../../../../client/src/classes/ChainInfo.md)[]

List of supported chains for the protocol

#### Overrides

`BaseProtocolPlugin.supportedChains`

***

### MorphoBlueContractName

> `readonly` `static` **MorphoBlueContractName**: `"MorphoBlue"` = `'MorphoBlue'`

## Accessors

### context

#### Get Signature

> **get** `protected` **context**(): `IProtocolPluginContext`

##### Returns

`IProtocolPluginContext`

#### Inherited from

`BaseProtocolPlugin.context`

## Methods

### \_getContractAddress()

> `protected` **\_getContractAddress**(`params`): `Promise`\<[`IAddress`](../../../../client/src/interfaces/IAddress.md)\>

Retrieves the contract address for a given chain

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `chainInfo`: [`IChainInfo`](../../../../client/src/interfaces/IChainInfo.md); `contractName`: `string`; \} |
| `params.chainInfo` | [`IChainInfo`](../../../../client/src/interfaces/IChainInfo.md) |
| `params.contractName` | `string` |

#### Returns

`Promise`\<[`IAddress`](../../../../client/src/interfaces/IAddress.md)\>

The address of the contract or throws if not found

#### Inherited from

`BaseProtocolPlugin._getContractAddress`

***

### \_getLendingPoolImpl()

> `protected` **\_getLendingPoolImpl**(`morphoLendingPoolId`): `Promise`\<[`MorphoLendingPool`](MorphoLendingPool.md)\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `morphoLendingPoolId` | [`IMorphoLendingPoolId`](../interfaces/IMorphoLendingPoolId.md) |

#### Returns

`Promise`\<[`MorphoLendingPool`](MorphoLendingPool.md)\>

#### See

BaseProtocolPlugin._getLendingPoolImpl

#### Overrides

`BaseProtocolPlugin._getLendingPoolImpl`

***

### \_getLendingPoolInfoImpl()

> `protected` **\_getLendingPoolInfoImpl**(`morphoLendingPoolId`): `Promise`\<[`MorphoLendingPoolInfo`](MorphoLendingPoolInfo.md)\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `morphoLendingPoolId` | [`IMorphoLendingPoolId`](../interfaces/IMorphoLendingPoolId.md) |

#### Returns

`Promise`\<[`MorphoLendingPoolInfo`](MorphoLendingPoolInfo.md)\>

#### See

BaseProtocolPlugin._getLendingPoolInfoImpl

#### Overrides

`BaseProtocolPlugin._getLendingPoolInfoImpl`

***

### \_validateLendingPoolId()

> `protected` **\_validateLendingPoolId**(`candidate`): `` asserts candidate is Readonly<{ marketId: `0x${string}`; protocol: IMorphoProtocol; type: Lending }> ``

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `candidate` | [`ILendingPoolIdData`](../../../../client/src/type-aliases/ILendingPoolIdData.md) |

#### Returns

`` asserts candidate is Readonly<{ marketId: `0x${string}`; protocol: IMorphoProtocol; type: Lending }> ``

#### See

BaseProtocolPlugin._validateLendingPoolId

#### Overrides

`BaseProtocolPlugin._validateLendingPoolId`

***

### \_validateLendingPositionId()

> `protected` **\_validateLendingPositionId**(`candidate`): `asserts candidate is Readonly<{ id: string; type: Lending }>`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `candidate` | [`ILendingPositionIdData`](../../../../client/src/type-aliases/ILendingPositionIdData.md) |

#### Returns

`asserts candidate is Readonly<{ id: string; type: Lending }>`

#### See

BaseProtocolPlugin._validateLendingPositionId

#### Overrides

`BaseProtocolPlugin._validateLendingPositionId`

***

### getActionBuilder()

> **getActionBuilder**\<`StepType`, `Step`\>(`stepType`): `any`

#### Type Parameters

| Type Parameter |
| ------ |
| `StepType` *extends* [`SimulationSteps`](../../../../client/src/enumerations/SimulationSteps.md) |
| `Step` *extends* `FilterStep`\<`StepType`, [`Steps`](../../../../client/src/namespaces/steps/type-aliases/Steps.md)\> |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `stepType` | `StepType` |

#### Returns

`any`

#### See

IProtocolPlugin.getActionBuilder

#### Inherited from

`BaseProtocolPlugin.getActionBuilder`

***

### getImportPositionTransaction()

> **getImportPositionTransaction**(`params`): `Promise`\<[`Maybe`](../../../../client/src/type-aliases/Maybe.md)\<[`TransactionInfo`](../../../../client/src/interfaces/TransactionInfo.md)\>\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `externalPosition`: [`IExternalLendingPosition`](../../../../client/src/interfaces/IExternalLendingPosition.md); `positionsManager`: [`IPositionsManager`](../../../../client/src/interfaces/IPositionsManager.md); `user`: [`IUser`](../../../../client/src/interfaces/IUser.md); \} |
| `params.externalPosition` | [`IExternalLendingPosition`](../../../../client/src/interfaces/IExternalLendingPosition.md) |
| `params.positionsManager` | [`IPositionsManager`](../../../../client/src/interfaces/IPositionsManager.md) |
| `params.user` | [`IUser`](../../../../client/src/interfaces/IUser.md) |

#### Returns

`Promise`\<[`Maybe`](../../../../client/src/type-aliases/Maybe.md)\<[`TransactionInfo`](../../../../client/src/interfaces/TransactionInfo.md)\>\>

#### See

BaseProtocolPlugin.getImportPositionTransaction

#### Overrides

`BaseProtocolPlugin.getImportPositionTransaction`

***

### getLendingPool()

> **getLendingPool**(`poolId`): `Promise`\<[`ILendingPool`](../../../../client/src/interfaces/ILendingPool.md)\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `poolId` | [`ILendingPoolIdData`](../../../../client/src/type-aliases/ILendingPoolIdData.md) |

#### Returns

`Promise`\<[`ILendingPool`](../../../../client/src/interfaces/ILendingPool.md)\>

#### See

IProtocolPlugin.getLendingPool

#### Inherited from

`BaseProtocolPlugin.getLendingPool`

***

### getLendingPoolInfo()

> **getLendingPoolInfo**(`poolId`): `Promise`\<[`ILendingPoolInfo`](../../../../client/src/interfaces/ILendingPoolInfo.md)\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `poolId` | [`ILendingPoolIdData`](../../../../client/src/type-aliases/ILendingPoolIdData.md) |

#### Returns

`Promise`\<[`ILendingPoolInfo`](../../../../client/src/interfaces/ILendingPoolInfo.md)\>

#### See

IProtocolPlugin.getLendingPoolInfo

#### Inherited from

`BaseProtocolPlugin.getLendingPoolInfo`

***

### getLendingPosition()

> **getLendingPosition**(`positionId`): `Promise`\<[`ILendingPosition`](../../../../client/src/interfaces/ILendingPosition.md)\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `positionId` | [`IMorphoLendingPositionIdData`](../type-aliases/IMorphoLendingPositionIdData.md) |

#### Returns

`Promise`\<[`ILendingPosition`](../../../../client/src/interfaces/ILendingPosition.md)\>

#### See

BaseProtocolPlugin.getLendingPosition

#### Overrides

`BaseProtocolPlugin.getLendingPosition`

***

### initialize()

> **initialize**(`params`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `context`: `IProtocolPluginContext`; \} |
| `params.context` | `IProtocolPluginContext` |

#### Returns

`void`

#### See

IProtocolPlugin.initialize

#### Overrides

`BaseProtocolPlugin.initialize`
