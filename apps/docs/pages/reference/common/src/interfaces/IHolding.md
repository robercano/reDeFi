[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / IHolding

# Interface: IHolding

## Name

IHolding

## Description

Represents a generic holding like a token balance in a wallet.

## Extends

- [`IHoldingData`](../type-aliases/IHoldingData.md).[`IPrintable`](../../../client/src/interfaces/IPrintable.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

***

### amount

> `readonly` **amount**: [`ITokenAmount`](ITokenAmount.md)

#### Overrides

`IHoldingData.amount`

***

### fiatValue

> `readonly` **fiatValue**: [`IFiatCurrencyAmount`](IFiatCurrencyAmount.md)

#### Overrides

`IHoldingData.fiatValue`

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
