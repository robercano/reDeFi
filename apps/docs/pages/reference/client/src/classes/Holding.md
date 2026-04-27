[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / Holding

# Class: Holding

## Name

Holding

## See

IHolding

## Implements

- [`IHolding`](../interfaces/IHolding.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

#### Implementation of

[`IHolding`](../interfaces/IHolding.md).[`[___signature__]`](../interfaces/IHolding.md#___signature__)

***

### amount

> `readonly` **amount**: [`ITokenAmount`](../interfaces/ITokenAmount.md)

ATTRIBUTES

#### Implementation of

[`IHolding`](../interfaces/IHolding.md).[`amount`](../interfaces/IHolding.md#amount)

***

### fiatValue

> `readonly` **fiatValue**: [`IFiatCurrencyAmount`](../interfaces/IFiatCurrencyAmount.md)

#### Implementation of

[`IHolding`](../interfaces/IHolding.md).[`fiatValue`](../interfaces/IHolding.md#fiatvalue)

## Methods

### toString()

> **toString**(): `string`

toString

#### Returns

`string`

#### Implementation of

[`IHolding`](../interfaces/IHolding.md).[`toString`](../interfaces/IHolding.md#tostring)

***

### createFrom()

> `static` **createFrom**(`params`): `Holding`

FACTORY

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`HoldingParameters`](../type-aliases/HoldingParameters.md) |

#### Returns

`Holding`
