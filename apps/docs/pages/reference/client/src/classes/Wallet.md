[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / Wallet

# Class: Wallet

**`Interface`**

Wallet

## See

IWalletData

## Implements

- [`IWallet`](../interfaces/IWallet.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

#### Implementation of

[`IWallet`](../interfaces/IWallet.md).[`[___signature__]`](../interfaces/IWallet.md#___signature__)

***

### address

> `readonly` **address**: [`IAddress`](../interfaces/IAddress.md)

ATTRIBUTES

#### Implementation of

[`IWallet`](../interfaces/IWallet.md).[`address`](../interfaces/IWallet.md#address)

## Methods

### equals()

> **equals**(`wallet`): `boolean`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `wallet` | `Wallet` |

#### Returns

`boolean`

#### See

IWallet.equals

#### Implementation of

[`IWallet`](../interfaces/IWallet.md).[`equals`](../interfaces/IWallet.md#equals)

***

### toString()

> **toString**(): `string`

#### Returns

`string`

#### See

IPrintable.toString

***

### createFrom()

> `static` **createFrom**(`params`): `Wallet`

FACTORY

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`WalletParameters`](../type-aliases/WalletParameters.md) |

#### Returns

`Wallet`
