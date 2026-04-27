[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / OrdersManagerClient

# Class: OrdersManagerClient

## See

IOrdersManagerClient

## Implements

- [`IOrdersManagerClient`](../interfaces/IOrdersManagerClient.md)

## Constructors

### Constructor

> **new OrdersManagerClient**(`params`): `OrdersManagerClient`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `rpcClient`: `any`; \} |
| `params.rpcClient` | `any` |

#### Returns

`OrdersManagerClient`

## Methods

### buildOrder()

> **buildOrder**(`params`): `Promise`\<[`Maybe`](../type-aliases/Maybe.md)\<[`Order`](../interfaces/Order.md)\>\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | `IBuildOrderInputs` |

#### Returns

`Promise`\<[`Maybe`](../type-aliases/Maybe.md)\<[`Order`](../interfaces/Order.md)\>\>

#### See

IOrdersManagerClient.buildOrder

#### Implementation of

[`IOrdersManagerClient`](../interfaces/IOrdersManagerClient.md).[`buildOrder`](../interfaces/IOrdersManagerClient.md#buildorder)
