[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / ProtocolsManagerClient

# Class: ProtocolsManagerClient

ProtocolsManagerClient

## See

IProtocolsManagerClient

## Extends

- `IRPCClient`

## Implements

- [`IProtocolsManagerClient`](../interfaces/IProtocolsManagerClient.md)

## Constructors

### Constructor

> **new ProtocolsManagerClient**(`params`): `ProtocolsManagerClient`

#### Parameters

##### params

###### rpcClient

`any`

#### Returns

`ProtocolsManagerClient`

#### Overrides

`IRPCClient.constructor`

## Methods

### getLendingPool()

> **getLendingPool**(`params`): `Promise`\<[`ILendingPool`](../interfaces/ILendingPool.md)\>

getLendingPool
Get the lending pool from the protocol

#### Parameters

##### params

The pool id data

###### poolId

[`ILendingPoolIdData`](../type-aliases/ILendingPoolIdData.md)

#### Returns

`Promise`\<[`ILendingPool`](../interfaces/ILendingPool.md)\>

The lending pool

#### Implementation of

[`IProtocolsManagerClient`](../interfaces/IProtocolsManagerClient.md).[`getLendingPool`](../interfaces/IProtocolsManagerClient.md#getlendingpool)

***

### getLendingPoolInfo()

> **getLendingPoolInfo**(`params`): `Promise`\<[`ILendingPoolInfo`](../interfaces/ILendingPoolInfo.md)\>

getLendingPoolInfo
Get the lending pool info from the protocol

#### Parameters

##### params

The pool id data

###### poolId

[`ILendingPoolIdData`](../type-aliases/ILendingPoolIdData.md)

#### Returns

`Promise`\<[`ILendingPoolInfo`](../interfaces/ILendingPoolInfo.md)\>

The lending pool info

#### Implementation of

[`IProtocolsManagerClient`](../interfaces/IProtocolsManagerClient.md).[`getLendingPoolInfo`](../interfaces/IProtocolsManagerClient.md#getlendingpoolinfo)
