[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / MakerProtocolPlugin

# Class: MakerProtocolPlugin

## Extends

- `BaseProtocolPlugin`

## Constructors

### Constructor

> **new MakerProtocolPlugin**(): `MakerProtocolPlugin`

#### Returns

`MakerProtocolPlugin`

#### Inherited from

`BaseProtocolPlugin.constructor`

## Properties

### CdpManagerContractName

> `readonly` **CdpManagerContractName**: `"CdpManager"` = `'CdpManager'`

***

### DssProxyActionsContractName

> `readonly` **DssProxyActionsContractName**: `"DssProxyActions"` = `'DssProxyActions'`

***

### protocolName

> `readonly` **protocolName**: [`Maker`](../../../../client/src/enumerations/ProtocolName.md#maker) = `ProtocolName.Maker`

Name of the protocol that the plugin is implementing

#### Overrides

`BaseProtocolPlugin.protocolName`

***

### stepBuilders

> `readonly` **stepBuilders**: `Partial`\<`ActionBuildersMap`\> = `MakerStepBuilders`

Map of action builders for the protocol

#### Overrides

`BaseProtocolPlugin.stepBuilders`

***

### supportedChains

> `readonly` **supportedChains**: [`ChainInfo`](../../../../client/src/classes/ChainInfo.md)[]

List of supported chains for the protocol

#### Overrides

`BaseProtocolPlugin.supportedChains`

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

> `protected` **\_getLendingPoolImpl**(`makerLendingPoolId`): `Promise`\<[`MakerLendingPool`](MakerLendingPool.md)\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `makerLendingPoolId` | [`IMakerLendingPoolId`](../../../../client/src/interfaces/IMakerLendingPoolId.md) |

#### Returns

`Promise`\<[`MakerLendingPool`](MakerLendingPool.md)\>

#### See

BaseProtocolPlugin._getLendingPoolImpl

#### Overrides

`BaseProtocolPlugin._getLendingPoolImpl`

***

### \_getLendingPoolInfoImpl()

> `protected` **\_getLendingPoolInfoImpl**(`makerLendingPoolId`): `Promise`\<[`MakerLendingPoolInfo`](MakerLendingPoolInfo.md)\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `makerLendingPoolId` | [`IMakerLendingPoolId`](../../../../client/src/interfaces/IMakerLendingPoolId.md) |

#### Returns

`Promise`\<[`MakerLendingPoolInfo`](MakerLendingPoolInfo.md)\>

#### See

BaseProtocolPlugin._getLendingPoolInfoImpl

#### Overrides

`BaseProtocolPlugin._getLendingPoolInfoImpl`

***

### \_validateLendingPoolId()

> `protected` **\_validateLendingPoolId**(`candidate`): `asserts candidate is MakerLendingPoolId`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `candidate` | [`ILendingPoolId`](../../../../client/src/interfaces/ILendingPoolId.md) |

#### Returns

`asserts candidate is MakerLendingPoolId`

#### See

BaseProtocolPlugin._validateLendingPoolId

#### Overrides

`BaseProtocolPlugin._validateLendingPoolId`

***

### \_validateLendingPositionId()

> `protected` **\_validateLendingPositionId**(`candidate`): `asserts candidate is MakerLendingPositionId`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `candidate` | [`IPositionId`](../../../../client/src/interfaces/IPositionId.md) |

#### Returns

`asserts candidate is MakerLendingPositionId`

#### See

BaseProtocolPlugin._validateLendingPositionId

#### Overrides

`BaseProtocolPlugin._validateLendingPositionId`

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
| `positionId` | [`ILendingPositionId`](../../../../client/src/interfaces/ILendingPositionId.md) |

#### Returns

`Promise`\<[`ILendingPosition`](../../../../client/src/interfaces/ILendingPosition.md)\>

#### See

BaseProtocolPlugin.getLendingPosition

#### Overrides

`BaseProtocolPlugin.getLendingPosition`

***

### initialize()

> **initialize**(`params`): `void`

INITIALIZATION

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `context`: `IProtocolPluginContext`; \} |
| `params.context` | `IProtocolPluginContext` |

#### Returns

`void`

#### Overrides

`BaseProtocolPlugin.initialize`
