[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / SparkProtocolPlugin

# Class: SparkProtocolPlugin

SparkProtocolPlugin

## Description

Protocol plugin for the Spark protocol

## See

BaseProtocolPlugin

## Extends

- `AAVEv3LikeBaseProtocolPlugin`\<`SparkContractNames`, `SparkAbiMapType`\>

## Constructors

### Constructor

> **new SparkProtocolPlugin**(): `SparkProtocolPlugin`

#### Returns

`SparkProtocolPlugin`

#### Inherited from

`AAVEv3LikeBaseProtocolPlugin< SparkContractNames, SparkAbiMapType >.constructor`

## Properties

### protocolName

> `readonly` **protocolName**: [`Spark`](../../../../client/src/enumerations/ProtocolName.md#spark) = `ProtocolName.Spark`

#### Overrides

`AAVEv3LikeBaseProtocolPlugin.protocolName`

***

### stepBuilders

> `readonly` **stepBuilders**: `Partial`\<`ActionBuildersMap`\> = `SparkStepBuilders`

Map of action builders for the protocol

#### Overrides

`AAVEv3LikeBaseProtocolPlugin.stepBuilders`

***

### supportedChains

> `readonly` **supportedChains**: [`ChainInfo`](../../../../client/src/classes/ChainInfo.md)[]

List of supported chains for the protocol

#### Overrides

`AAVEv3LikeBaseProtocolPlugin.supportedChains`

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

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `emode`: `number`; `poolBaseCurrencyToken`: [`Denomination`](../../../../client/src/type-aliases/Denomination.md); `token`: [`IToken`](../../../../client/src/interfaces/IToken.md); \} |
| `params.emode` | `number` |
| `params.poolBaseCurrencyToken` | [`Denomination`](../../../../client/src/type-aliases/Denomination.md) |
| `params.token` | [`IToken`](../../../../client/src/interfaces/IToken.md) |

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

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `chainInfo`: [`IChainInfo`](../../../../client/src/interfaces/IChainInfo.md); `contractName`: `string`; \} |
| `params.chainInfo` | [`IChainInfo`](../../../../client/src/interfaces/IChainInfo.md) |
| `params.contractName` | `string` |

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
| `params` | \{ `chainInfo`: [`IChainInfo`](../../../../client/src/interfaces/IChainInfo.md); `contractName`: `SparkContractNames`; \} |
| `params.chainInfo` | [`IChainInfo`](../../../../client/src/interfaces/IChainInfo.md) |
| `params.contractName` | `SparkContractNames` |

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

> `protected` **\_getLendingPoolImpl**(`poolId`): `Promise`\<[`SparkLendingPool`](SparkLendingPool.md)\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `poolId` | [`ISparkLendingPoolIdData`](../type-aliases/ISparkLendingPoolIdData.md) |

#### Returns

`Promise`\<[`SparkLendingPool`](SparkLendingPool.md)\>

#### See

BaseProtocolPlugin._getLendingPoolImpl

#### Overrides

`AAVEv3LikeBaseProtocolPlugin._getLendingPoolImpl`

***

### \_getLendingPoolInfoImpl()

> `protected` **\_getLendingPoolInfoImpl**(`sparkPoolId`): `Promise`\<[`SparkLendingPoolInfo`](SparkLendingPoolInfo.md)\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sparkPoolId` | [`ISparkLendingPoolId`](../../../../client/src/interfaces/ISparkLendingPoolId.md) |

#### Returns

`Promise`\<[`SparkLendingPoolInfo`](SparkLendingPoolInfo.md)\>

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

> `protected` **\_validateLendingPoolId**(`candidate`): `asserts candidate is Readonly<{ collateralToken: IToken; debtToken: IToken; emodeType: EmodeType; protocol: ISparkProtocol; type: Lending }>`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `candidate` | [`ILendingPoolIdData`](../../../../client/src/type-aliases/ILendingPoolIdData.md) |

#### Returns

`asserts candidate is Readonly<{ collateralToken: IToken; debtToken: IToken; emodeType: EmodeType; protocol: ISparkProtocol; type: Lending }>`

#### See

BaseProtocolPlugin._validateLendingPoolId

#### Overrides

`AAVEv3LikeBaseProtocolPlugin._validateLendingPoolId`

***

### \_validateLendingPositionId()

> `protected` **\_validateLendingPositionId**(`candidate`): `asserts candidate is Readonly<{ id: string; type: Lending }>`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `candidate` | [`IPositionIdData`](../../../../client/src/type-aliases/IPositionIdData.md) |

#### Returns

`asserts candidate is Readonly<{ id: string; type: Lending }>`

#### See

BaseProtocolPlugin._validatePositionId

#### Overrides

`AAVEv3LikeBaseProtocolPlugin._validateLendingPositionId`

***

### getActionBuilder()

> **getActionBuilder**\<`StepType`, `Step`\>(`stepType`): [`Maybe`](../../../../client/src/type-aliases/Maybe.md)\<`IActionBuilder`\<`Step`\>\>

#### Type Parameters

| Type Parameter |
| ------ |
| `StepType` *extends* [`SimulationSteps`](../../../../client/src/enumerations/SimulationSteps.md) |
| `Step` *extends* `object` & [`FlashloanStep`](../../../../client/src/namespaces/steps/type-aliases/FlashloanStep.md) \| `object` & [`PullTokenStep`](../../../../client/src/namespaces/steps/type-aliases/PullTokenStep.md) \| `object` & [`DepositBorrowStep`](../../../../client/src/namespaces/steps/type-aliases/DepositBorrowStep.md) \| `object` & [`PaybackWithdrawStep`](../../../../client/src/namespaces/steps/type-aliases/PaybackWithdrawStep.md) \| `object` & [`SwapStep`](../../../../client/src/namespaces/steps/type-aliases/SwapStep.md) \| `object` & [`ReturnFundsStep`](../../../../client/src/namespaces/steps/type-aliases/ReturnFundsStep.md) \| `object` & [`RepayFlashloanStep`](../../../../client/src/namespaces/steps/type-aliases/RepayFlashloanStep.md) \| `object` & [`NewPositionEventStep`](../../../../client/src/namespaces/steps/type-aliases/NewPositionEventStep.md) \| `object` & [`ImportStep`](../../../../client/src/namespaces/steps/type-aliases/ImportStep.md) \| `object` & [`OpenPosition`](../../../../client/src/namespaces/steps/type-aliases/OpenPosition.md) \| `object` & [`SkippedStep`](../../../../client/src/namespaces/steps/type-aliases/SkippedStep.md) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `stepType` | `StepType` |

#### Returns

[`Maybe`](../../../../client/src/type-aliases/Maybe.md)\<`IActionBuilder`\<`Step`\>\>

#### See

IProtocolPlugin.getActionBuilder

#### Inherited from

`AAVEv3LikeBaseProtocolPlugin.getActionBuilder`

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

IProtocolPlugin.getLendingPool

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

IProtocolPlugin.getLendingPoolInfo

#### Inherited from

`AAVEv3LikeBaseProtocolPlugin.getLendingPoolInfo`

***

### getLendingPosition()

> **getLendingPosition**(`positionId`): `Promise`\<[`ILendingPosition`](../../../../client/src/interfaces/ILendingPosition.md)\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `positionId` | [`IAaveV3LendingPositionIdData`](../type-aliases/IAaveV3LendingPositionIdData.md) |

#### Returns

`Promise`\<[`ILendingPosition`](../../../../client/src/interfaces/ILendingPosition.md)\>

#### See

BaseProtocolPlugin.getPosition

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
