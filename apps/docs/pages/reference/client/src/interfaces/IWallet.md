[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / IWallet

# Interface: IWallet

IWallet
Interface for the implementors of the wallet

This is present in the system in case it is needed to add extra information to the
wallet type

## Extends

- [`IWalletData`](../type-aliases/IWalletData.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

***

### address

> `readonly` **address**: [`IAddress`](IAddress.md)

Address of the wallet, valid for the different chains

#### Overrides

`IWalletData.address`

## Methods

### equals()

> **equals**(`wallet`): `boolean`

equals
Checks if two wallets are equal

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `wallet` | `IWallet` | The wallet to compare |

#### Returns

`boolean`

true if the wallets are equal

Equality is determined by the address
