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

- [`AaveV3ProtocolPlugin`](AaveV3ProtocolPlugin.md)

## Implements

- [`AaveV3LendingPoolId`](../../../../client/src/variables/AaveV3LendingPoolId.md)

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

> `abstract` `readonly` **protocolName**: [`ProtocolName`](../../../../common/src/enumerations/ProtocolName.md)

Name of the protocol that the plugin is implementing

#### Inherited from

`BaseProtocolPlugin.protocolName`

***

### stake?

> `readonly` `optional` **stake?**: `IStakeProtocolFeatures`

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

#### Inherited from

`BaseProtocolPlugin.yield`

## Methods

### getLendingPool()

> **getLendingPool**(`poolId`): `Promise`\<[`ILendingPool`](../../../../client/src/interfaces/ILendingPool.md)\>

#### Parameters

##### poolId

[`ILendingPoolIdData`](../../../../client/src/type-aliases/ILendingPoolIdData.md)

#### Returns

`Promise`\<[`ILendingPool`](../../../../client/src/interfaces/ILendingPool.md)\>

#### See

ILendingProtocolFeatures.getLendingPool

***

### getLendingPoolInfo()

> **getLendingPoolInfo**(`poolId`): `Promise`\<[`ILendingPoolInfo`](../../../../client/src/interfaces/ILendingPoolInfo.md)\>

#### Parameters

##### poolId

[`ILendingPoolIdData`](../../../../client/src/type-aliases/ILendingPoolIdData.md)

#### Returns

`Promise`\<[`ILendingPoolInfo`](../../../../client/src/interfaces/ILendingPoolInfo.md)\>

#### See

ILendingProtocolFeatures.getLendingPoolInfo

***

### getLendingPosition()

> `abstract` **getLendingPosition**(`positionId`): `Promise`\<[`ILendingPosition`](../../../../client/src/interfaces/ILendingPosition.md)\>

#### Parameters

##### positionId

[`ILendingPositionIdData`](../../../../client/src/type-aliases/ILendingPositionIdData.md)

#### Returns

`Promise`\<[`ILendingPosition`](../../../../client/src/interfaces/ILendingPosition.md)\>

#### See

ILendingProtocolFeatures.getLendingPosition

***

### getSupplyTransaction()

> `abstract` **getSupplyTransaction**(`params`): `Promise`\<[`TransactionInfo`](../../../../common/src/interfaces/TransactionInfo.md)\>

#### Parameters

##### params

###### amount

[`TokenAmount`](../../../../client/src/classes/TokenAmount.md)

###### poolId

[`ILendingPoolIdData`](../../../../client/src/type-aliases/ILendingPoolIdData.md)

###### user

[`IUser`](../../../../client/src/interfaces/IUser.md)

#### Returns

`Promise`\<[`TransactionInfo`](../../../../common/src/interfaces/TransactionInfo.md)\>

#### See

ILendingProtocolFeatures.getSupplyTransaction

***

### initialize()

> **initialize**(`params`): `void`

#### Parameters

##### params

###### context

`IProtocolPluginContext`

#### Returns

`void`

#### See

IProtocolPlugin.initialize

#### Inherited from

`BaseProtocolPlugin.initialize`
