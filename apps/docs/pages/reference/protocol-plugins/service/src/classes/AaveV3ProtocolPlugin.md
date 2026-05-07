[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / AaveV3ProtocolPlugin

# Class: AaveV3ProtocolPlugin

AaveV3ProtocolPlugin
Aave V3 protocol plugin

## See

BaseProtocolPlugin

## Extends

- `AAVEv3LikeBaseProtocolPlugin`\<`AaveV3ContractNames`, `AaveV3AbiMapType`\>

## Constructors

### Constructor

> **new AaveV3ProtocolPlugin**(): `AaveV3ProtocolPlugin`

#### Returns

`AaveV3ProtocolPlugin`

#### Inherited from

`AAVEv3LikeBaseProtocolPlugin< AaveV3ContractNames, AaveV3AbiMapType >.constructor`

## Properties

### lending

> `readonly` **lending**: `AaveV3ProtocolPlugin`

Feature modules

#### Inherited from

`AAVEv3LikeBaseProtocolPlugin.lending`

***

### protocolName

> `readonly` **protocolName**: [`AaveV3`](../../../../client/src/enumerations/ProtocolName.md#aavev3) = `ProtocolName.AaveV3`

#### Overrides

`AAVEv3LikeBaseProtocolPlugin.protocolName`

***

### stake?

> `readonly` `optional` **stake?**: `IStakeProtocolFeatures`

Staking features (optional). 
Defined if the protocol supports staking operations.

#### Inherited from

`AAVEv3LikeBaseProtocolPlugin.stake`

***

### supportedChains

> `readonly` **supportedChains**: [`ChainInfo`](../../../../client/src/classes/ChainInfo.md)[]

List of supported chains for the protocol

#### Overrides

`AAVEv3LikeBaseProtocolPlugin.supportedChains`

***

### yield?

> `readonly` `optional` **yield?**: `IYieldProtocolFeatures`

Yield features (optional). 
Defined if the protocol supports yield operations.

#### Inherited from

`AAVEv3LikeBaseProtocolPlugin.yield`

## Accessors

### context

#### Get Signature

> **get** `protected` **context**(): `IProtocolPluginContext`

##### Returns

`IProtocolPluginContext`

#### Inherited from

`AAVEv3LikeBaseProtocolPlugin.context`

***

### contractsAbiProvider

#### Get Signature

> **get** **contractsAbiProvider**(): `ChainContractsProvider`\<`ContractNames`, `ContractsAbiMap`\>

##### Returns

`ChainContractsProvider`\<`ContractNames`, `ContractsAbiMap`\>

#### Inherited from

`AAVEv3LikeBaseProtocolPlugin.contractsAbiProvider`

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

`AAVEv3LikeBaseProtocolPlugin._checkChainIdSupported`

***

### \_getAssetFromToken()

> `protected` **\_getAssetFromToken**(`token`, `emode`): `Promise`\<[`WithEmode`](../type-aliases/WithEmode.md)\<[`WithReservesData`](../type-aliases/WithReservesData.md)\<[`WithReservesConfig`](../type-aliases/WithReservesConfig.md)\<[`WithReservesCaps`](../type-aliases/WithReservesCaps.md)\<[`WithPrice`](../type-aliases/WithPrice.md)\<\{ `token`: [`Token`](../../../../client/src/classes/Token.md); \}\>\>\>\>\>\>

Fetches the asset from the assets list for the given token and emode.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `token` | [`IToken`](../../../../client/src/interfaces/IToken.md) | The token to fetch the asset for. |
| `emode` | `number` | The emode to fetch the asset for. |

#### Returns

`Promise`\<[`WithEmode`](../type-aliases/WithEmode.md)\<[`WithReservesData`](../type-aliases/WithReservesData.md)\<[`WithReservesConfig`](../type-aliases/WithReservesConfig.md)\<[`WithReservesCaps`](../type-aliases/WithReservesCaps.md)\<[`WithPrice`](../type-aliases/WithPrice.md)\<\{ `token`: [`Token`](../../../../client/src/classes/Token.md); \}\>\>\>\>\>\>

The asset for the given token and emode.

#### Inherited from

`AAVEv3LikeBaseProtocolPlugin._getAssetFromToken`

***

### \_getAssetsList()

> `protected` **\_getAssetsList**(`params`): `Promise`\<[`WithEmode`](../type-aliases/WithEmode.md)\<[`WithReservesData`](../type-aliases/WithReservesData.md)\<[`WithReservesConfig`](../type-aliases/WithReservesConfig.md)\<[`WithReservesCaps`](../type-aliases/WithReservesCaps.md)\<[`WithPrice`](../type-aliases/WithPrice.md)\<\{ `token`: [`Token`](../../../../client/src/classes/Token.md); \}\>\>\>\>\>[]\>

Fetches the assets list for the protocol.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `chainInfo`: [`IChainInfo`](../../../../client/src/interfaces/IChainInfo.md); \} |
| `params.chainInfo` | [`IChainInfo`](../../../../client/src/interfaces/IChainInfo.md) |

#### Returns

`Promise`\<[`WithEmode`](../type-aliases/WithEmode.md)\<[`WithReservesData`](../type-aliases/WithReservesData.md)\<[`WithReservesConfig`](../type-aliases/WithReservesConfig.md)\<[`WithReservesCaps`](../type-aliases/WithReservesCaps.md)\<[`WithPrice`](../type-aliases/WithPrice.md)\<\{ `token`: [`Token`](../../../../client/src/classes/Token.md); \}\>\>\>\>\>[]\>

The assets list for the protocol.

This function must exist as the return type of the data builder is inferred from the return
type of this function.

#### Inherited from

`AAVEv3LikeBaseProtocolPlugin._getAssetsList`

***

### \_getCollateralInfo()

> `protected` **\_getCollateralInfo**(`params`): `Promise`\<[`Maybe`](../../../../client/src/type-aliases/Maybe.md)\<[`ICollateralInfo`](../../../../client/src/interfaces/ICollateralInfo.md)\>\>

Fetches the collateral info for the given token.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | \{ `emode`: `number`; `poolBaseCurrencyToken`: [`Denomination`](../../../../client/src/type-aliases/Denomination.md); `token`: [`IToken`](../../../../client/src/interfaces/IToken.md); \} | - |
| `params.emode` | `number` | The emode to fetch the collateral info for. |
| `params.poolBaseCurrencyToken` | [`Denomination`](../../../../client/src/type-aliases/Denomination.md) | The base currency token for the pool. |
| `params.token` | [`IToken`](../../../../client/src/interfaces/IToken.md) | The token to fetch the collateral info for. |

#### Returns

`Promise`\<[`Maybe`](../../../../client/src/type-aliases/Maybe.md)\<[`ICollateralInfo`](../../../../client/src/interfaces/ICollateralInfo.md)\>\>

The collateral info for the given token.

#### Inherited from

`AAVEv3LikeBaseProtocolPlugin._getCollateralInfo`

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

`AAVEv3LikeBaseProtocolPlugin._getContractAddress`

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

### \_getDebtInfo()

> `protected` **\_getDebtInfo**(`token`, `emode`, `poolBaseCurrencyToken`): `Promise`\<[`Maybe`](../../../../client/src/type-aliases/Maybe.md)\<[`DebtInfo`](../../../../client/src/classes/DebtInfo.md)\>\>

Fetches the debt info for the given token.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `token` | [`IToken`](../../../../client/src/interfaces/IToken.md) | The token to fetch the debt info for. |
| `emode` | `number` | The emode to fetch the debt info for. |
| `poolBaseCurrencyToken` | [`Denomination`](../../../../client/src/type-aliases/Denomination.md) | The base currency token for the pool. |

#### Returns

`Promise`\<[`Maybe`](../../../../client/src/type-aliases/Maybe.md)\<[`DebtInfo`](../../../../client/src/classes/DebtInfo.md)\>\>

The debt info for the given token.

#### Inherited from

`AAVEv3LikeBaseProtocolPlugin._getDebtInfo`

***

### \_getLendingPoolImpl()

> **\_getLendingPoolImpl**(`aaveV3PoolId`): `Promise`\<[`AaveV3LendingPool`](AaveV3LendingPool.md)\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `aaveV3PoolId` | [`IAaveV3LendingPoolId`](../../../../client/src/interfaces/IAaveV3LendingPoolId.md) |

#### Returns

`Promise`\<[`AaveV3LendingPool`](AaveV3LendingPool.md)\>

#### See

BaseProtocolPlugin._getLendingPoolImpl

#### Overrides

`AAVEv3LikeBaseProtocolPlugin._getLendingPoolImpl`

***

### \_getLendingPoolInfoImpl()

> **\_getLendingPoolInfoImpl**(`aaveV3PoolId`): `Promise`\<`AaveV3LendingPoolInfo`\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `aaveV3PoolId` | [`IAaveV3LendingPoolId`](../../../../client/src/interfaces/IAaveV3LendingPoolId.md) |

#### Returns

`Promise`\<`AaveV3LendingPoolInfo`\>

#### See

BaseProtocolPlugin._getLendingPoolInfoImpl

#### Overrides

`AAVEv3LikeBaseProtocolPlugin._getLendingPoolInfoImpl`

***

### \_inititalizeAssetsListIfNeeded()

> `protected` **\_inititalizeAssetsListIfNeeded**(`params`): `Promise`\<`void`\>

Initializes the assets list if it hasn't been initialized yet.

To be called before fetching data from the assets list, typically from `getLendingPool` and similar
methods.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `chainInfo`: [`IChainInfo`](../../../../client/src/interfaces/IChainInfo.md); \} |
| `params.chainInfo` | [`IChainInfo`](../../../../client/src/interfaces/IChainInfo.md) |

#### Returns

`Promise`\<`void`\>

#### Inherited from

`AAVEv3LikeBaseProtocolPlugin._inititalizeAssetsListIfNeeded`

***

### \_validateLendingPoolId()

> `protected` **\_validateLendingPoolId**(`candidate`): `asserts candidate is Readonly<{ collateralToken: IToken; debtToken: IToken; emodeType: EmodeType; protocol: IAaveV3Protocol; type: Lending }>`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `candidate` | [`ILendingPoolIdData`](../../../../client/src/type-aliases/ILendingPoolIdData.md) |

#### Returns

`asserts candidate is Readonly<{ collateralToken: IToken; debtToken: IToken; emodeType: EmodeType; protocol: IAaveV3Protocol; type: Lending }>`

#### See

BaseProtocolPlugin._validateLendingPoolId

#### Overrides

`AAVEv3LikeBaseProtocolPlugin._validateLendingPoolId`

***

### \_validateLendingPositionId()

> `protected` **\_validateLendingPositionId**(`candidate`): `asserts candidate is Readonly<{ id: string; poolId: IAaveV3LendingPoolId; type: Lending; walletAddress: IAddress }>`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `candidate` | [`IPositionIdData`](../../../../client/src/type-aliases/IPositionIdData.md) |

#### Returns

`asserts candidate is Readonly<{ id: string; poolId: IAaveV3LendingPoolId; type: Lending; walletAddress: IAddress }>`

#### See

BaseProtocolPlugin.validateLendingPoolId

#### Overrides

`AAVEv3LikeBaseProtocolPlugin._validateLendingPositionId`

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

`AAVEv3LikeBaseProtocolPlugin.getImportPositionTransaction`

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

`AAVEv3LikeBaseProtocolPlugin.getLendingPool`

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

`AAVEv3LikeBaseProtocolPlugin.getLendingPoolInfo`

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

`AAVEv3LikeBaseProtocolPlugin.getLendingPosition`

***

### initialize()

> **initialize**(`params`): `void`

CONSTRUCTOR

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `context`: `IProtocolPluginContext`; \} |
| `params.context` | `IProtocolPluginContext` |

#### Returns

`void`

#### Overrides

`AAVEv3LikeBaseProtocolPlugin.initialize`
