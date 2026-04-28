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

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `rpcClient`: `TRPCClient`; \} |
| `params.rpcClient` | `TRPCClient` |

#### Returns

`ProtocolsManagerClient`

#### Overrides

`IRPCClient.constructor`

## Accessors

### rpcClient

#### Get Signature

> **get** `protected` **rpcClient**(): `TRPCClient`

##### Returns

`TRPCClient`

#### Inherited from

`IRPCClient.rpcClient`

## Methods

### getLendingPool()

> **getLendingPool**(`params`): `Promise`\<[`Maybe`](../type-aliases/Maybe.md)\<[`ILendingPool`](../interfaces/ILendingPool.md)\>\>

getLendingPool
Get the lending pool from the protocol

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | \{ `poolId`: [`ILendingPoolIdData`](../type-aliases/ILendingPoolIdData.md); \} | The pool id data |
| `params.poolId` | [`ILendingPoolIdData`](../type-aliases/ILendingPoolIdData.md) | - |

#### Returns

`Promise`\<[`Maybe`](../type-aliases/Maybe.md)\<[`ILendingPool`](../interfaces/ILendingPool.md)\>\>

The lending pool

#### Implementation of

[`IProtocolsManagerClient`](../interfaces/IProtocolsManagerClient.md).[`getLendingPool`](../interfaces/IProtocolsManagerClient.md#getlendingpool)

***

### getLendingPoolInfo()

> **getLendingPoolInfo**(`params`): `Promise`\<[`Maybe`](../type-aliases/Maybe.md)\<[`ILendingPoolInfo`](../interfaces/ILendingPoolInfo.md)\>\>

getLendingPoolInfo
Get the lending pool info from the protocol

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | \{ `poolId`: [`ILendingPoolIdData`](../type-aliases/ILendingPoolIdData.md); \} | The pool id data |
| `params.poolId` | [`ILendingPoolIdData`](../type-aliases/ILendingPoolIdData.md) | - |

#### Returns

`Promise`\<[`Maybe`](../type-aliases/Maybe.md)\<[`ILendingPoolInfo`](../interfaces/ILendingPoolInfo.md)\>\>

The lending pool info

#### Implementation of

[`IProtocolsManagerClient`](../interfaces/IProtocolsManagerClient.md).[`getLendingPoolInfo`](../interfaces/IProtocolsManagerClient.md#getlendingpoolinfo)
