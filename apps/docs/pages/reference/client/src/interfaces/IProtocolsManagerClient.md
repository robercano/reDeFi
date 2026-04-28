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

> **getLendingPool**(`params`): `Promise`\<[`Maybe`](../type-aliases/Maybe.md)\<[`ILendingPool`](ILendingPool.md)\>\>

getLendingPool
Get the lending pool from the protocol

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | \{ `poolId`: [`ILendingPoolIdData`](../type-aliases/ILendingPoolIdData.md); \} | The pool id data |
| `params.poolId` | [`ILendingPoolIdData`](../type-aliases/ILendingPoolIdData.md) | - |

#### Returns

`Promise`\<[`Maybe`](../type-aliases/Maybe.md)\<[`ILendingPool`](ILendingPool.md)\>\>

The lending pool

***

### getLendingPoolInfo()

> **getLendingPoolInfo**(`params`): `Promise`\<[`Maybe`](../type-aliases/Maybe.md)\<[`ILendingPoolInfo`](ILendingPoolInfo.md)\>\>

getLendingPoolInfo
Get the lending pool info from the protocol

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | \{ `poolId`: [`ILendingPoolIdData`](../type-aliases/ILendingPoolIdData.md); \} | The pool id data |
| `params.poolId` | [`ILendingPoolIdData`](../type-aliases/ILendingPoolIdData.md) | - |

#### Returns

`Promise`\<[`Maybe`](../type-aliases/Maybe.md)\<[`ILendingPoolInfo`](ILendingPoolInfo.md)\>\>

The lending pool info
