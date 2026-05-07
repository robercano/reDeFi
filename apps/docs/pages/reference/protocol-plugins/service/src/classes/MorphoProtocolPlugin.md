[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / MorphoProtocolPlugin

# Class: MorphoProtocolPlugin

MorphoProtocolPlugin
Protocol plugin for the Morpho protocol

## See

BaseProtocolPlugin

## Extends

- [`BaseLendingProtocolPlugin`](BaseLendingProtocolPlugin.md)

## Constructors

### Constructor

> **new MorphoProtocolPlugin**(): `MorphoProtocolPlugin`

#### Returns

`MorphoProtocolPlugin`

#### Inherited from

[`BaseLendingProtocolPlugin`](BaseLendingProtocolPlugin.md).[`constructor`](BaseLendingProtocolPlugin.md#constructor)

## Properties

### lending

> `readonly` **lending**: `MorphoProtocolPlugin`

Feature modules

#### Inherited from

[`BaseLendingProtocolPlugin`](BaseLendingProtocolPlugin.md).[`lending`](BaseLendingProtocolPlugin.md#lending)

***

### protocolName

> `readonly` **protocolName**: [`MorphoBlue`](../../../../client/src/enumerations/ProtocolName.md#morphoblue) = `ProtocolName.MorphoBlue`

Name of the protocol that the plugin is implementing

#### Overrides

[`BaseLendingProtocolPlugin`](BaseLendingProtocolPlugin.md).[`protocolName`](BaseLendingProtocolPlugin.md#protocolname)

***

### stake?

> `readonly` `optional` **stake?**: `IStakeProtocolFeatures`

Staking features (optional). 
Defined if the protocol supports staking operations.

#### Inherited from

[`BaseLendingProtocolPlugin`](BaseLendingProtocolPlugin.md).[`stake`](BaseLendingProtocolPlugin.md#stake)

***

### supportedChains

> `readonly` **supportedChains**: [`ChainInfo`](../../../../client/src/classes/ChainInfo.md)[]

List of supported chains for the protocol

#### Overrides

[`BaseLendingProtocolPlugin`](BaseLendingProtocolPlugin.md).[`supportedChains`](BaseLendingProtocolPlugin.md#supportedchains)

***

### yield?

> `readonly` `optional` **yield?**: `IYieldProtocolFeatures`

Yield features (optional). 
Defined if the protocol supports yield operations.

#### Inherited from

[`BaseLendingProtocolPlugin`](BaseLendingProtocolPlugin.md).[`yield`](BaseLendingProtocolPlugin.md#yield)

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

[`BaseLendingProtocolPlugin`](BaseLendingProtocolPlugin.md).[`context`](BaseLendingProtocolPlugin.md#context)

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

[`BaseLendingProtocolPlugin`](BaseLendingProtocolPlugin.md).[`_checkChainIdSupported`](BaseLendingProtocolPlugin.md#_checkchainidsupported)

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

[`BaseLendingProtocolPlugin`](BaseLendingProtocolPlugin.md).[`_getContractAddress`](BaseLendingProtocolPlugin.md#_getcontractaddress)

***

### \_getLendingPoolImpl()

> `protected` **\_getLendingPoolImpl**(`morphoLendingPoolId`): `Promise`\<[`MorphoLendingPool`](MorphoLendingPool.md)\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `morphoLendingPoolId` | [`IMorphoLendingPoolId`](../../../../client/src/interfaces/IMorphoLendingPoolId.md) |

#### Returns

`Promise`\<[`MorphoLendingPool`](MorphoLendingPool.md)\>

#### See

BaseProtocolPlugin._getLendingPoolImpl

#### Overrides

[`BaseLendingProtocolPlugin`](BaseLendingProtocolPlugin.md).[`_getLendingPoolImpl`](BaseLendingProtocolPlugin.md#_getlendingpoolimpl)

***

### \_getLendingPoolInfoImpl()

> `protected` **\_getLendingPoolInfoImpl**(`morphoLendingPoolId`): `Promise`\<[`MorphoLendingPoolInfo`](MorphoLendingPoolInfo.md)\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `morphoLendingPoolId` | [`IMorphoLendingPoolId`](../../../../client/src/interfaces/IMorphoLendingPoolId.md) |

#### Returns

`Promise`\<[`MorphoLendingPoolInfo`](MorphoLendingPoolInfo.md)\>

#### See

BaseProtocolPlugin._getLendingPoolInfoImpl

#### Overrides

[`BaseLendingProtocolPlugin`](BaseLendingProtocolPlugin.md).[`_getLendingPoolInfoImpl`](BaseLendingProtocolPlugin.md#_getlendingpoolinfoimpl)

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

[`BaseLendingProtocolPlugin`](BaseLendingProtocolPlugin.md).[`_validateLendingPoolId`](BaseLendingProtocolPlugin.md#_validatelendingpoolid)

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

[`BaseLendingProtocolPlugin`](BaseLendingProtocolPlugin.md).[`_validateLendingPositionId`](BaseLendingProtocolPlugin.md#_validatelendingpositionid)

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

[`BaseLendingProtocolPlugin`](BaseLendingProtocolPlugin.md).[`getImportPositionTransaction`](BaseLendingProtocolPlugin.md#getimportpositiontransaction)

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

#### Inherited from

[`BaseLendingProtocolPlugin`](BaseLendingProtocolPlugin.md).[`getLendingPool`](BaseLendingProtocolPlugin.md#getlendingpool)

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

#### Inherited from

[`BaseLendingProtocolPlugin`](BaseLendingProtocolPlugin.md).[`getLendingPoolInfo`](BaseLendingProtocolPlugin.md#getlendingpoolinfo)

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

[`BaseLendingProtocolPlugin`](BaseLendingProtocolPlugin.md).[`getLendingPosition`](BaseLendingProtocolPlugin.md#getlendingposition)

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

[`BaseLendingProtocolPlugin`](BaseLendingProtocolPlugin.md).[`initialize`](BaseLendingProtocolPlugin.md#initialize)
