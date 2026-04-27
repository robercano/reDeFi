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
| `params` | \{ `rpcClient`: `any`; \} |
| `params.rpcClient` | `any` |

#### Returns

`ProtocolsManagerClient`

#### Overrides

`IRPCClient.constructor`

## Accessors

### rpcClient

#### Get Signature

> **get** `protected` **rpcClient**(): `any`

##### Returns

`any`

#### Inherited from

`IRPCClient.rpcClient`

## Methods

### getLendingPool()

> **getLendingPool**(`params`): `Promise`\<[`Maybe`](../type-aliases/Maybe.md)\<[`ILendingPool`](../interfaces/ILendingPool.md)\>\>

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | \{ `poolId`: [`ILendingPoolIdData`](../type-aliases/ILendingPoolIdData.md); \} | The pool id data |
| `params.poolId` | [`ILendingPoolIdData`](../type-aliases/ILendingPoolIdData.md) | - |

#### Returns

`Promise`\<[`Maybe`](../type-aliases/Maybe.md)\<[`ILendingPool`](../interfaces/ILendingPool.md)\>\>

The lending pool

#### Method

getLendingPool

#### Description

Get the lending pool from the protocol

#### Implementation of

[`IProtocolsManagerClient`](../interfaces/IProtocolsManagerClient.md).[`getLendingPool`](../interfaces/IProtocolsManagerClient.md#getlendingpool)

***

### getLendingPoolInfo()

> **getLendingPoolInfo**(`params`): `Promise`\<[`Maybe`](../type-aliases/Maybe.md)\<[`ILendingPoolInfo`](../interfaces/ILendingPoolInfo.md)\>\>

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | \{ `poolId`: [`ILendingPoolIdData`](../type-aliases/ILendingPoolIdData.md); \} | The pool id data |
| `params.poolId` | [`ILendingPoolIdData`](../type-aliases/ILendingPoolIdData.md) | - |

#### Returns

`Promise`\<[`Maybe`](../type-aliases/Maybe.md)\<[`ILendingPoolInfo`](../interfaces/ILendingPoolInfo.md)\>\>

The lending pool info

#### Method

getLendingPoolInfo

#### Description

Get the lending pool info from the protocol

#### Implementation of

[`IProtocolsManagerClient`](../interfaces/IProtocolsManagerClient.md).[`getLendingPoolInfo`](../interfaces/IProtocolsManagerClient.md#getlendingpoolinfo)
