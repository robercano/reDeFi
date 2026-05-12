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

> `readonly` **protocolName**: `AaveV3` = `ProtocolName.AaveV3`

Name of the protocol that the plugin is implementing

#### Overrides

[`BaseLendingProtocolPlugin`](BaseLendingProtocolPlugin.md).[`protocolName`](BaseLendingProtocolPlugin.md#protocolname)

***

### stake?

> `readonly` `optional` **stake?**: `IStakeProtocolFeatures`

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

#### Inherited from

[`BaseLendingProtocolPlugin`](BaseLendingProtocolPlugin.md).[`yield`](BaseLendingProtocolPlugin.md#yield)

## Methods

### \_getLendingPoolImpl()

> **\_getLendingPoolImpl**(`aaveV3PoolId`): `Promise`\<[`AaveV3LendingPool`](AaveV3LendingPool.md)\>

LENDING POOLS

#### Parameters

##### aaveV3PoolId

[`IAaveV3LendingPoolId`](../interfaces/IAaveV3LendingPoolId.md)

#### Returns

`Promise`\<[`AaveV3LendingPool`](AaveV3LendingPool.md)\>

#### Overrides

`BaseLendingProtocolPlugin._getLendingPoolImpl`

***

### \_getLendingPoolInfoImpl()

> **\_getLendingPoolInfoImpl**(`aaveV3PoolId`): `Promise`\<`AaveV3LendingPoolInfo`\>

getLendingPoolInfoImpl
Gets the lending pool info for the given pool ID

#### Parameters

##### aaveV3PoolId

[`IAaveV3LendingPoolId`](../interfaces/IAaveV3LendingPoolId.md)

#### Returns

`Promise`\<`AaveV3LendingPoolInfo`\>

The lending pool info for the specific protocol

#### Remarks

This method should be implemented by the protocol plugin as the external one is just a wrapper to
validate the input and call this one

#### Overrides

`BaseLendingProtocolPlugin._getLendingPoolInfoImpl`

***

### getLendingPool()

> **getLendingPool**(`poolId`): `Promise`\<[`ILendingPool`](../../../../client/src/interfaces/ILendingPool.md)\>

#### Parameters

##### poolId

[`ILendingPoolIdData`](../../../../client/src/type-aliases/ILendingPoolIdData.md)

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

##### poolId

[`ILendingPoolIdData`](../../../../client/src/type-aliases/ILendingPoolIdData.md)

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

##### positionId

[`ILendingPositionId`](../../../../client/src/interfaces/ILendingPositionId.md)

#### Returns

`Promise`\<[`ILendingPosition`](../../../../client/src/interfaces/ILendingPosition.md)\>

#### Overrides

[`BaseLendingProtocolPlugin`](BaseLendingProtocolPlugin.md).[`getLendingPosition`](BaseLendingProtocolPlugin.md#getlendingposition)

***

### getSupplyTransaction()

> **getSupplyTransaction**(`params`): `Promise`\<[`TransactionInfo`](../../../../common/src/interfaces/TransactionInfo.md)\>

SUPPLY TRANSACTION

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

#### Overrides

[`BaseLendingProtocolPlugin`](BaseLendingProtocolPlugin.md).[`getSupplyTransaction`](BaseLendingProtocolPlugin.md#getsupplytransaction)

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

#### Overrides

[`BaseLendingProtocolPlugin`](BaseLendingProtocolPlugin.md).[`initialize`](BaseLendingProtocolPlugin.md#initialize)
