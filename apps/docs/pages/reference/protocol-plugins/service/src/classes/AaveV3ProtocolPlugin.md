[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / AaveV3ProtocolPlugin

# Class: AaveV3ProtocolPlugin

AaveV3ProtocolPlugin
Aave V3 protocol plugin

## See

BaseProtocolPlugin

## Extends

- [`BaseLendingProtocolPlugin`](BaseLendingProtocolPlugin.md)

## Constructors

### Constructor

> **new AaveV3ProtocolPlugin**(): `AaveV3ProtocolPlugin`

#### Returns

`AaveV3ProtocolPlugin`

#### Inherited from

[`BaseLendingProtocolPlugin`](BaseLendingProtocolPlugin.md).[`constructor`](BaseLendingProtocolPlugin.md#constructor)

## Properties

### lending

> `readonly` **lending**: `AaveV3ProtocolPlugin`

Feature modules

#### Inherited from

[`BaseLendingProtocolPlugin`](BaseLendingProtocolPlugin.md).[`lending`](BaseLendingProtocolPlugin.md#lending)

***

### protocolName

> `readonly` **protocolName**: [`AaveV3`](../../../../client/src/enumerations/ProtocolName.md#aavev3) = `ProtocolName.AaveV3`

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

### \_getContractDef()

> `protected` **\_getContractDef**(`params`): `Promise`\<`ContractInfo`\>

PRIVATE

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `chainInfo`: [`IChainInfo`](../../../../client/src/interfaces/IChainInfo.md); `contractName`: `AaveV3ContractNames`; \} |
| `params.chainInfo` | [`IChainInfo`](../../../../client/src/interfaces/IChainInfo.md) |
| `params.contractName` | `AaveV3ContractNames` |

#### Returns

`Promise`\<`ContractInfo`\>

***

### \_getLendingPoolImpl()

> **\_getLendingPoolImpl**(`aaveV3PoolId`): `Promise`\<[`AaveV3LendingPool`](AaveV3LendingPool.md)\>

LENDING POOLS

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `aaveV3PoolId` | [`IAaveV3LendingPoolId`](../../../../client/src/interfaces/IAaveV3LendingPoolId.md) |

#### Returns

`Promise`\<[`AaveV3LendingPool`](AaveV3LendingPool.md)\>

#### Overrides

[`BaseLendingProtocolPlugin`](BaseLendingProtocolPlugin.md).[`_getLendingPoolImpl`](BaseLendingProtocolPlugin.md#_getlendingpoolimpl)

***

### \_getLendingPoolInfoImpl()

> **\_getLendingPoolInfoImpl**(`aaveV3PoolId`): `Promise`\<`AaveV3LendingPoolInfo`\>

getLendingPoolInfoImpl
Gets the lending pool info for the given pool ID

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `aaveV3PoolId` | [`IAaveV3LendingPoolId`](../../../../client/src/interfaces/IAaveV3LendingPoolId.md) |

#### Returns

`Promise`\<`AaveV3LendingPoolInfo`\>

The lending pool info for the specific protocol

#### Remarks

This method should be implemented by the protocol plugin as the external one is just a wrapper to
validate the input and call this one

#### Overrides

[`BaseLendingProtocolPlugin`](BaseLendingProtocolPlugin.md).[`_getLendingPoolInfoImpl`](BaseLendingProtocolPlugin.md#_getlendingpoolinfoimpl)

***

### \_validateLendingPoolId()

> `protected` **\_validateLendingPoolId**(`candidate`): `asserts candidate is Readonly<{ collateralToken: IToken; debtToken: IToken; emodeType: EmodeType; protocol: IAaveV3Protocol; type: Lending }>`

VALIDATORS

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `candidate` | [`ILendingPoolIdData`](../../../../client/src/type-aliases/ILendingPoolIdData.md) |

#### Returns

`asserts candidate is Readonly<{ collateralToken: IToken; debtToken: IToken; emodeType: EmodeType; protocol: IAaveV3Protocol; type: Lending }>`

#### Overrides

[`BaseLendingProtocolPlugin`](BaseLendingProtocolPlugin.md).[`_validateLendingPoolId`](BaseLendingProtocolPlugin.md#_validatelendingpoolid)

***

### \_validateLendingPositionId()

> `protected` **\_validateLendingPositionId**(`candidate`): `asserts candidate is Readonly<{ id: string; poolId: IAaveV3LendingPoolId; type: Lending; walletAddress: IAddress }>`

_validatePositionId
Validates that the candidate is a valid position ID for the specific protocol

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `candidate` | [`IPositionIdData`](../../../../client/src/type-aliases/IPositionIdData.md) |

#### Returns

`asserts candidate is Readonly<{ id: string; poolId: IAaveV3LendingPoolId; type: Lending; walletAddress: IAddress }>`

asserts that the candidate is a valid position ID for the specific protocol

#### Overrides

[`BaseLendingProtocolPlugin`](BaseLendingProtocolPlugin.md).[`_validateLendingPositionId`](BaseLendingProtocolPlugin.md#_validatelendingpositionid)

***

### getImportPositionTransaction()

> **getImportPositionTransaction**(`params`): `Promise`\<[`Maybe`](../../../../client/src/type-aliases/Maybe.md)\<[`TransactionInfo`](../../../../client/src/interfaces/TransactionInfo.md)\>\>

IMPORT TRANSACTIONS

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `externalPosition`: [`IExternalLendingPosition`](../../../../client/src/interfaces/IExternalLendingPosition.md); `positionsManager`: [`IPositionsManager`](../../../../client/src/interfaces/IPositionsManager.md); `user`: [`IUser`](../../../../client/src/interfaces/IUser.md); \} |
| `params.externalPosition` | [`IExternalLendingPosition`](../../../../client/src/interfaces/IExternalLendingPosition.md) |
| `params.positionsManager` | [`IPositionsManager`](../../../../client/src/interfaces/IPositionsManager.md) |
| `params.user` | [`IUser`](../../../../client/src/interfaces/IUser.md) |

#### Returns

`Promise`\<[`Maybe`](../../../../client/src/type-aliases/Maybe.md)\<[`TransactionInfo`](../../../../client/src/interfaces/TransactionInfo.md)\>\>

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

POSITIONS

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `positionId` | [`ILendingPositionId`](../../../../client/src/interfaces/ILendingPositionId.md) |

#### Returns

`Promise`\<[`ILendingPosition`](../../../../client/src/interfaces/ILendingPosition.md)\>

#### Overrides

[`BaseLendingProtocolPlugin`](BaseLendingProtocolPlugin.md).[`getLendingPosition`](BaseLendingProtocolPlugin.md#getlendingposition)

***

### getSupplyTransaction()

> **getSupplyTransaction**(`params`): `Promise`\<[`TransactionInfo`](../../../../client/src/interfaces/TransactionInfo.md)\>

SUPPLY TRANSACTION

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `amount`: [`TokenAmount`](../../../../client/src/classes/TokenAmount.md); `poolId`: [`ILendingPoolIdData`](../../../../client/src/type-aliases/ILendingPoolIdData.md); `user`: [`IUser`](../../../../client/src/interfaces/IUser.md); \} |
| `params.amount` | [`TokenAmount`](../../../../client/src/classes/TokenAmount.md) |
| `params.poolId` | [`ILendingPoolIdData`](../../../../client/src/type-aliases/ILendingPoolIdData.md) |
| `params.user` | [`IUser`](../../../../client/src/interfaces/IUser.md) |

#### Returns

`Promise`\<[`TransactionInfo`](../../../../client/src/interfaces/TransactionInfo.md)\>

#### Overrides

[`BaseLendingProtocolPlugin`](BaseLendingProtocolPlugin.md).[`getSupplyTransaction`](BaseLendingProtocolPlugin.md#getsupplytransaction)

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
