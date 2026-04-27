[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / IPrice

# Interface: IPrice

## Name

IPrice

## Description

Represents a price for a token with certain denomation. The denomination can be a fiat currency
             or another token

The price is represented as a string in floating point format without taking into consideration
the number of decimals of the tokens. This data type can be used for calculations with other types
like TokenAmount or Percentage

Typically in exchanges the price is represented in the following format:

BASE/QUOTE

Base is the token that is being traded, and quote is the token that is received as part of the trade

In that format the slash in between the base and the quote is not a quotient or fraction,
and it is just used to separate the two tokens.

The mathematical representation of the price units is instead:

QUOTE/BASE

## Extends

- [`IPriceData`](../type-aliases/IPriceData.md).`IValueConverter`.[`IPrintable`](IPrintable.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

***

### base

> `readonly` **base**: [`Denomination`](../type-aliases/Denomination.md)

The token for the base of the price

#### Overrides

`IPriceData.base`

***

### quote

> `readonly` **quote**: [`Denomination`](../type-aliases/Denomination.md)

The token for the quote of the price

#### Overrides

`IPriceData.quote`

***

### value

> `readonly` **value**: `string`

The price value in floating point format without taking into account decimals

#### Overrides

`IPriceData.value`

## Methods

### add()

> **add**(`otherPrice`): `IPrice`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `otherPrice` | `IPrice` | The price to add |

#### Returns

`IPrice`

The resulting price

#### Name

add

#### Description

Adds the price to another price

#### Throws

If the prices have different base tokens or quote tokens

***

### divide()

> **divide**(`divider`): `IPrice`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `divider` | `string` \| `number` \| `IPrice` \| [`IPercentage`](IPercentage.md) | The numeric string, number or price to divide by |

#### Returns

`IPrice`

The resulting price

#### Name

divide

#### Description

Divides the price by another price or a constant

#### Throws

If the second price base is not the same as this price base
        or if the second price quote is not the same as this price quote

***

### hasSameBase()

> **hasSameBase**(`otherPrice`): `boolean`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `otherPrice` | `IPrice` | The price to compare against |

#### Returns

`boolean`

true if the prices have the same base token

#### Name

hasSameBase

#### Description

Checks if the price has the same base as another price

***

### hasSameDenominations()

> **hasSameDenominations**(`otherPrice`): `boolean`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `otherPrice` | `IPrice` | The price to compare against |

#### Returns

`boolean`

true if the prices have the same base and quote

#### Name

hasSameDenominations

#### Description

Checks if the price has the same base and quote as another price

***

### hasSameQuote()

> **hasSameQuote**(`otherPrice`): `boolean`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `otherPrice` | `IPrice` | The price to compare against |

#### Returns

`boolean`

true if the prices have the same quote

#### Name

hasSameQuote

#### Description

Checks if the price has the same quote as another price

***

### invert()

> **invert**(): `IPrice`

#### Returns

`IPrice`

The inverted price

#### Name

invert

#### Description

Inverts the price

***

### isEqual()

> **isEqual**(`otherPrice`): `boolean`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `otherPrice` | `IPrice` |

#### Returns

`boolean`

#### Name

isEqual

#### Description

Checks if the price is equal to another price

***

### isGreaterThan()

> **isGreaterThan**(`otherPrice`): `boolean`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `otherPrice` | `IPrice` |

#### Returns

`boolean`

#### Name

isGreaterThan

#### Description

Checks if the price is greater than another price

***

### isGreaterThanOrEqual()

> **isGreaterThanOrEqual**(`otherPrice`): `boolean`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `otherPrice` | `IPrice` |

#### Returns

`boolean`

#### Name

isGreaterThanOrEqual

#### Description

Checks if the price is greater than or equal to another price

***

### isLessThan()

> **isLessThan**(`otherPrice`): `boolean`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `otherPrice` | `IPrice` |

#### Returns

`boolean`

#### Name

isLessThan

#### Description

Checks if the price is less than another price

***

### isLessThanOrEqual()

> **isLessThanOrEqual**(`otherPrice`): `boolean`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `otherPrice` | `IPrice` |

#### Returns

`boolean`

#### Name

isLessThanOrEqual

#### Description

Checks if the price is less than or equal to another price

***

### isZero()

> **isZero**(): `boolean`

#### Returns

`boolean`

#### Name

isZero

#### Description

Checks if the price is zero

***

### multiply()

> **multiply**\<`InputParams`, `ReturnType`\>(`multiplier`): `ReturnType`

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `InputParams` *extends* [`PriceMulParamType`](../type-aliases/PriceMulParamType.md) | - |
| `ReturnType` | [`PriceMulReturnType`](../type-aliases/PriceMulReturnType.md)\<`InputParams`\> |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `multiplier` | `InputParams` | The numeric string, number, price, token amount or fiat currency amount to multiply by |

#### Returns

`ReturnType`

The resulting price, token amount or fiat currency amount

#### Name

multiply

#### Description

Multiplies the price by another price or a constant

#### Throws

When it is a price, if the second price quote is not the same as this price base or
        if the second price base is not the same as this price quote it will throw an error

***

### subtract()

> **subtract**(`otherPrice`): `IPrice`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `otherPrice` | `IPrice` | The price to subtract |

#### Returns

`IPrice`

The resulting price

#### Name

subtract

#### Description

Subtracts the price from another price

#### Throws

If the prices have different base tokens or quote tokens

***

### toBigNumber()

> **toBigNumber**(): `BigNumber`

Converts the instance into a BigNumber

#### Returns

`BigNumber`

The value as a BigNumber

#### Remarks

It returns a BigNumber without explicit decimals. This function is intended for low
         level operations not accounted for in the specific data type. The BigNumber does NOT
         carry any information on how many decimals the value has, meaning that the conversion
         of BigNumber to a Solidity value must be done manually

#### Inherited from

`IValueConverter.toBigNumber`

***

### toSolidityValue()

> **toSolidityValue**(`params?`): `bigint`

Converts the instance into a Solidity value

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params?` | \{ `decimals`: `number`; \} |
| `params.decimals?` | `number` |

#### Returns

`bigint`

The value as a TypeScript bigint that can be passed to a Solidity contract

#### Remarks

The value is expected to be scaled by 10^decimals, thus yielding a Solidity uint256
         value with the correct fixed point decimals

#### Inherited from

`IValueConverter.toSolidityValue`

***

### toString()

> **toString**(): `string`

#### Returns

`string`

#### Name

toString

#### Description

Converts the price to a string

#### Overrides

[`IPrintable`](IPrintable.md).[`toString`](IPrintable.md#tostring)
