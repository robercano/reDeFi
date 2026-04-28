[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / IOrdersManagerClient

# Interface: IOrdersManagerClient

IOrdersManagerClient
Interface of the OrdersManager for the SDK Client. Allows to build orders to execute transactions.

## Methods

### buildOrder()

> **buildOrder**(`params`): `Promise`\<[`Maybe`](../type-aliases/Maybe.md)\<[`Order`](Order.md)\>\>

buildOrder
Build an order to be executed by the user

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | `IBuildOrderInputs` | The inputs required to build the order |

#### Returns

`Promise`\<[`Maybe`](../type-aliases/Maybe.md)\<[`Order`](Order.md)\>\>

The built order
