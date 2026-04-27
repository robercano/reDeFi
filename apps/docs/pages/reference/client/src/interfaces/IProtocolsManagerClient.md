[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / IProtocolsManagerClient

# Interface: IProtocolsManagerClient

IProtocolsManagerClient

## Description

Interface of the ProtocolsManager for the SDK Client. Allows to retrieve information for a Protocol

## See

IProtocolsManager

## Methods

### getLendingPool()

> **getLendingPool**(`params`): `Promise`\<[`Maybe`](../type-aliases/Maybe.md)\<[`ILendingPool`](ILendingPool.md)\>\>

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | \{ `poolId`: [`ILendingPoolIdData`](../type-aliases/ILendingPoolIdData.md); \} | The pool id data |
| `params.poolId` | [`ILendingPoolIdData`](../type-aliases/ILendingPoolIdData.md) | - |

#### Returns

`Promise`\<[`Maybe`](../type-aliases/Maybe.md)\<[`ILendingPool`](ILendingPool.md)\>\>

The lending pool

#### Method

getLendingPool

#### Description

Get the lending pool from the protocol

***

### getLendingPoolInfo()

> **getLendingPoolInfo**(`params`): `Promise`\<[`Maybe`](../type-aliases/Maybe.md)\<[`ILendingPoolInfo`](ILendingPoolInfo.md)\>\>

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | \{ `poolId`: [`ILendingPoolIdData`](../type-aliases/ILendingPoolIdData.md); \} | The pool id data |
| `params.poolId` | [`ILendingPoolIdData`](../type-aliases/ILendingPoolIdData.md) | - |

#### Returns

`Promise`\<[`Maybe`](../type-aliases/Maybe.md)\<[`ILendingPoolInfo`](ILendingPoolInfo.md)\>\>

The lending pool info

#### Method

getLendingPoolInfo

#### Description

Get the lending pool info from the protocol
