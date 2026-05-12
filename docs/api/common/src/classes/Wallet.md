[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / Wallet

# Class: Wallet

**`Interface`**

Wallet

## See

IWalletData

## Implements

- [`IWallet`](../interfaces/IWallet.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

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

##### wallet

`Wallet`

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

##### params

[`WalletParameters`](../type-aliases/WalletParameters.md)

#### Returns

`Wallet`
