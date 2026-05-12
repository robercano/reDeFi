[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / IHolding

# Interface: IHolding

IHolding
Represents a generic holding like a token balance in a wallet.

## Extends

- [`IHoldingData`](../type-aliases/IHoldingData.md).[`IPrintable`](../../../common/src/interfaces/IPrintable.md)

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

toString
Returns a string representation of the object

#### Returns

`string`

string

The string representation should have enough info to debug the object

#### Inherited from

[`IPrintable`](../../../common/src/interfaces/IPrintable.md).[`toString`](../../../common/src/interfaces/IPrintable.md#tostring)
