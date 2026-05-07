[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / BaseLendingProtocolPlugin

# Abstract Class: BaseLendingProtocolPlugin

BaseLendingProtocolPlugin
Base class for all lending protocol plugins

It provides the lending feature module implementation, setting `lending = this`

## Extends

- `BaseProtocolPlugin`

## Extended by

- [`MakerProtocolPlugin`](MakerProtocolPlugin.md)
- [`MorphoProtocolPlugin`](MorphoProtocolPlugin.md)

## Implements

- `ILendingProtocolFeatures`

## Constructors

### Constructor

> **new BaseLendingProtocolPlugin**(): `BaseLendingProtocolPlugin`

#### Returns

`BaseLendingProtocolPlugin`

#### Inherited from

`BaseProtocolPlugin.constructor`

## Properties

### lending

> `readonly` **lending**: `BaseLendingProtocolPlugin`

Feature modules

#### Overrides

`BaseProtocolPlugin.lending`

***

### protocolName

> `abstract` `readonly` **protocolName**: [`ProtocolName`](../../../../client/src/enumerations/ProtocolName.md)

Name of the protocol that the plugin is implementing

#### Inherited from

`BaseProtocolPlugin.protocolName`

***

### stake?

> `readonly` `optional` **stake?**: `IStakeProtocolFeatures`

Staking features (optional). 
Defined if the protocol supports staking operations.

#### Inherited from

`BaseProtocolPlugin.stake`

***

### supportedChains

> `abstract` `readonly` **supportedChains**: [`ChainInfo`](../../../../client/src/classes/ChainInfo.md)[]

List of supported chains for the protocol

#### Inherited from

`BaseProtocolPlugin.supportedChains`

***

### yield?

> `readonly` `optional` **yield?**: `IYieldProtocolFeatures`

Yield features (optional). 
Defined if the protocol supports yield operations.

#### Inherited from

`BaseProtocolPlugin.yield`

## Accessors

### context

#### Get Signature

> **get** `protected` **context**(): `IProtocolPluginContext`

##### Returns

`IProtocolPluginContext`

#### Inherited from

`BaseProtocolPlugin.context`

## Methods

### \_checkChainIdSupported()

> `protected` **\_checkChainIdSupported**(`chainId`): `void`

_checkChainIdSupported

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `chainId` | `number` |

#### Returns

`void`

asserts that the chain ID is supported

#### Inherited from

`BaseProtocolPlugin._checkChainIdSupported`

***

### \_getContractAddress()

> `protected` **\_getContractAddress**(`params`): `Promise`\<[`IAddress`](../../../../client/src/interfaces/IAddress.md)\>

Retrieves the contract address for a given chain

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | \{ `chainInfo`: [`IChainInfo`](../../../../client/src/interfaces/IChainInfo.md); `contractName`: `string`; \} | - |
| `params.chainInfo` | [`IChainInfo`](../../../../client/src/interfaces/IChainInfo.md) | The chain where the contract is deployed |
| `params.contractName` | `string` | THe name of the contract |

#### Returns

`Promise`\<[`IAddress`](../../../../client/src/interfaces/IAddress.md)\>

The address of the contract or throws if not found

#### Inherited from

`BaseProtocolPlugin._getContractAddress`

***

### \_getLendingPoolImpl()

> `abstract` `protected` **\_getLendingPoolImpl**(`poolId`): `Promise`\<[`ILendingPool`](../../../../client/src/interfaces/ILendingPool.md)\>

getLendingPoolImpl
Gets the lending pool for the given pool ID

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `poolId` | [`ILendingPoolIdData`](../../../../client/src/type-aliases/ILendingPoolIdData.md) |

#### Returns

`Promise`\<[`ILendingPool`](../../../../client/src/interfaces/ILendingPool.md)\>

The lending pool for the specific protocol

#### Remarks

This method should be implemented by the protocol plugin as the external one is just a wrapper to
validate the input and call this one

***

### \_getLendingPoolInfoImpl()

> `abstract` `protected` **\_getLendingPoolInfoImpl**(`poolId`): `Promise`\<[`ILendingPoolInfo`](../../../../client/src/interfaces/ILendingPoolInfo.md)\>

getLendingPoolInfoImpl
Gets the lending pool info for the given pool ID

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `poolId` | [`ILendingPoolIdData`](../../../../client/src/type-aliases/ILendingPoolIdData.md) |

#### Returns

`Promise`\<[`ILendingPoolInfo`](../../../../client/src/interfaces/ILendingPoolInfo.md)\>

The lending pool info for the specific protocol

#### Remarks

This method should be implemented by the protocol plugin as the external one is just a wrapper to
validate the input and call this one

***

### \_validateLendingPoolId()

> `abstract` `protected` **\_validateLendingPoolId**(`candidate`): `asserts candidate is Readonly<{ protocol: IProtocol; type: Lending }>`

_validateLendingPoolId
Validates that the candidate is a valid lending pool ID for the specific protocol

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `candidate` | [`ILendingPoolIdData`](../../../../client/src/type-aliases/ILendingPoolIdData.md) |

#### Returns

`asserts candidate is Readonly<{ protocol: IProtocol; type: Lending }>`

asserts that the candidate is a valid lending pool ID for the specific protocol

***

### \_validateLendingPositionId()

> `abstract` `protected` **\_validateLendingPositionId**(`candidate`): `asserts candidate is Readonly<{ id: string; type: PositionType }>`

_validatePositionId
Validates that the candidate is a valid position ID for the specific protocol

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `candidate` | [`IPositionIdData`](../../../../client/src/type-aliases/IPositionIdData.md) |

#### Returns

`asserts candidate is Readonly<{ id: string; type: PositionType }>`

asserts that the candidate is a valid position ID for the specific protocol

***

### getImportPositionTransaction()

> `abstract` **getImportPositionTransaction**(`params`): `Promise`\<[`Maybe`](../../../../client/src/type-aliases/Maybe.md)\<[`TransactionInfo`](../../../../client/src/interfaces/TransactionInfo.md)\>\>

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

ILendingProtocolFeatures.getImportPositionTransaction

#### Implementation of

`ILendingProtocolFeatures.getImportPositionTransaction`

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

ILendingProtocolFeatures.getLendingPool

#### Implementation of

`ILendingProtocolFeatures.getLendingPool`

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

ILendingProtocolFeatures.getLendingPoolInfo

#### Implementation of

`ILendingProtocolFeatures.getLendingPoolInfo`

***

### getLendingPosition()

> `abstract` **getLendingPosition**(`positionId`): `Promise`\<[`ILendingPosition`](../../../../client/src/interfaces/ILendingPosition.md)\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `positionId` | [`ILendingPositionIdData`](../../../../client/src/type-aliases/ILendingPositionIdData.md) |

#### Returns

`Promise`\<[`ILendingPosition`](../../../../client/src/interfaces/ILendingPosition.md)\>

#### See

ILendingProtocolFeatures.getLendingPosition

#### Implementation of

`ILendingProtocolFeatures.getLendingPosition`

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

#### Inherited from

`BaseProtocolPlugin.initialize`
