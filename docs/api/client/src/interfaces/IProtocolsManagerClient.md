[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / IProtocolsManagerClient

# Interface: IProtocolsManagerClient

IProtocolsManagerClient
Interface of the ProtocolsManager for the SDK Client. Allows to retrieve information for a Protocol

## See

IProtocolsManager

## Methods

### getLendingPool()

> **getLendingPool**(`params`): `Promise`\<[`ILendingPool`](ILendingPool.md)\>

getLendingPool
Get the lending pool from the protocol

#### Parameters

##### params

The pool id data

###### poolId

[`ILendingPoolIdData`](../type-aliases/ILendingPoolIdData.md)

#### Returns

`Promise`\<[`ILendingPool`](ILendingPool.md)\>

The lending pool

***

### getLendingPoolInfo()

> **getLendingPoolInfo**(`params`): `Promise`\<[`ILendingPoolInfo`](ILendingPoolInfo.md)\>

getLendingPoolInfo
Get the lending pool info from the protocol

#### Parameters

##### params

The pool id data

###### poolId

[`ILendingPoolIdData`](../type-aliases/ILendingPoolIdData.md)

#### Returns

`Promise`\<[`ILendingPoolInfo`](ILendingPoolInfo.md)\>

The lending pool info
