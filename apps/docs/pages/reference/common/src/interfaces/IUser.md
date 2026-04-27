[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / IUser

# Interface: IUser

Represents a user of the system connected with a wallet on a particular chain

## Extends

- [`IUserData`](../type-aliases/IUserData.md).[`IPrintable`](../../../client/src/interfaces/IPrintable.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

***

### chainInfo

> `readonly` **chainInfo**: [`IChainInfo`](IChainInfo.md)

The chain the user is connected to

#### Overrides

`IUserData.chainInfo`

***

### wallet

> `readonly` **wallet**: [`IWallet`](IWallet.md)

The wallet of the user

#### Overrides

`IUserData.wallet`

## Methods

### toString()

> **toString**(): `string`

#### Returns

`string`

string

The string representation should have enough info to debug the object

#### Name

toString

#### Description

Returns a string representation of the object

#### Inherited from

[`IPrintable`](../../../client/src/interfaces/IPrintable.md).[`toString`](../../../client/src/interfaces/IPrintable.md#tostring)
