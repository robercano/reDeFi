[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / Price

# Class: Price

Price

## See

IPrice

## Implements

- [`IPrice`](../interfaces/IPrice.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

[`IPrice`](../interfaces/IPrice.md).[`[___signature__]`](../interfaces/IPrice.md#___signature__)

***

### base

> `readonly` **base**: [`Denomination`](../type-aliases/Denomination.md)

The token for the base of the price

#### Implementation of

[`IPrice`](../interfaces/IPrice.md).[`base`](../interfaces/IPrice.md#base)

***

### quote

> `readonly` **quote**: [`Denomination`](../type-aliases/Denomination.md)

The token for the quote of the price

#### Implementation of

[`IPrice`](../interfaces/IPrice.md).[`quote`](../interfaces/IPrice.md#quote)

***

### value

> `readonly` **value**: `string`

ATTRIBUTES

#### Implementation of

[`IPrice`](../interfaces/IPrice.md).[`value`](../interfaces/IPrice.md#value)

***

### PRICE\_DECIMALS

> `readonly` `static` **PRICE\_DECIMALS**: `18` = `18`

CONSTANTS

## Methods

### add()

> **add**(`otherPrice`): [`IPrice`](../interfaces/IPrice.md)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `otherPrice` | [`IPrice`](../interfaces/IPrice.md) |

#### Returns

[`IPrice`](../interfaces/IPrice.md)

#### See

IPrice.add

#### Implementation of

[`IPrice`](../interfaces/IPrice.md).[`add`](../interfaces/IPrice.md#add)

***

### divide()

> **divide**(`divider`): [`IPrice`](../interfaces/IPrice.md)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `divider` | `string` \| `number` \| [`IPrice`](../interfaces/IPrice.md) \| [`IPercentage`](../interfaces/IPercentage.md) |

#### Returns

[`IPrice`](../interfaces/IPrice.md)

#### See

IPrice.divide

#### Implementation of

[`IPrice`](../interfaces/IPrice.md).[`divide`](../interfaces/IPrice.md#divide)

***

### hasSameBase()

> **hasSameBase**(`otherPrice`): `boolean`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `otherPrice` | [`IPrice`](../interfaces/IPrice.md) |

#### Returns

`boolean`

#### See

IPrice.hasSameBase

#### Implementation of

[`IPrice`](../interfaces/IPrice.md).[`hasSameBase`](../interfaces/IPrice.md#hassamebase)

***

### hasSameDenominations()

> **hasSameDenominations**(`otherPrice`): `boolean`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `otherPrice` | [`IPrice`](../interfaces/IPrice.md) |

#### Returns

`boolean`

#### See

IPrice.hasSameDenominations

#### Implementation of

[`IPrice`](../interfaces/IPrice.md).[`hasSameDenominations`](../interfaces/IPrice.md#hassamedenominations)

***

### hasSameQuote()

> **hasSameQuote**(`otherPrice`): `boolean`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `otherPrice` | [`IPrice`](../interfaces/IPrice.md) |

#### Returns

`boolean`

#### See

IPrice.hasSameQuote

#### Implementation of

[`IPrice`](../interfaces/IPrice.md).[`hasSameQuote`](../interfaces/IPrice.md#hassamequote)

***

### invert()

> **invert**(): [`IPrice`](../interfaces/IPrice.md)

#### Returns

[`IPrice`](../interfaces/IPrice.md)

#### See

IPrice.invert

#### Implementation of

[`IPrice`](../interfaces/IPrice.md).[`invert`](../interfaces/IPrice.md#invert)

***

### isEqual()

> **isEqual**(`otherPrice`): `boolean`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `otherPrice` | [`IPrice`](../interfaces/IPrice.md) |

#### Returns

`boolean`

#### See

IPrice.isEqual

#### Implementation of

[`IPrice`](../interfaces/IPrice.md).[`isEqual`](../interfaces/IPrice.md#isequal)

***

### isGreaterThan()

> **isGreaterThan**(`otherPrice`): `boolean`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `otherPrice` | [`IPrice`](../interfaces/IPrice.md) |

#### Returns

`boolean`

#### See

IPrice.isGreaterThan

#### Implementation of

[`IPrice`](../interfaces/IPrice.md).[`isGreaterThan`](../interfaces/IPrice.md#isgreaterthan)

***

### isGreaterThanOrEqual()

> **isGreaterThanOrEqual**(`otherPrice`): `boolean`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `otherPrice` | [`IPrice`](../interfaces/IPrice.md) |

#### Returns

`boolean`

#### See

IPrice.isGreaterThanOrEqual

#### Implementation of

[`IPrice`](../interfaces/IPrice.md).[`isGreaterThanOrEqual`](../interfaces/IPrice.md#isgreaterthanorequal)

***

### isLessThan()

> **isLessThan**(`otherPrice`): `boolean`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `otherPrice` | [`IPrice`](../interfaces/IPrice.md) |

#### Returns

`boolean`

#### See

IPrice.isLessThan

#### Implementation of

[`IPrice`](../interfaces/IPrice.md).[`isLessThan`](../interfaces/IPrice.md#islessthan)

***

### isLessThanOrEqual()

> **isLessThanOrEqual**(`otherPrice`): `boolean`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `otherPrice` | [`IPrice`](../interfaces/IPrice.md) |

#### Returns

`boolean`

#### See

IPrice.isLessThanOrEqual

#### Implementation of

[`IPrice`](../interfaces/IPrice.md).[`isLessThanOrEqual`](../interfaces/IPrice.md#islessthanorequal)

***

### isZero()

> **isZero**(): `boolean`

#### Returns

`boolean`

#### See

IPrice.isZero

#### Implementation of

[`IPrice`](../interfaces/IPrice.md).[`isZero`](../interfaces/IPrice.md#iszero)

***

### multiply()

> **multiply**\<`InputParams`, `ReturnType`\>(`multiplier`): `ReturnType`

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `InputParams` *extends* [`PriceMulParamType`](../type-aliases/PriceMulParamType.md) | - |
| `ReturnType` | [`PriceMulReturnType`](../type-aliases/PriceMulReturnType.md)\<`InputParams`\> |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `multiplier` | `InputParams` |

#### Returns

`ReturnType`

#### See

IPrice.multiply

#### Implementation of

[`IPrice`](../interfaces/IPrice.md).[`multiply`](../interfaces/IPrice.md#multiply)

***

### subtract()

> **subtract**(`otherPrice`): [`IPrice`](../interfaces/IPrice.md)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `otherPrice` | [`IPrice`](../interfaces/IPrice.md) |

#### Returns

[`IPrice`](../interfaces/IPrice.md)

#### See

IPrice.subtract

#### Implementation of

[`IPrice`](../interfaces/IPrice.md).[`subtract`](../interfaces/IPrice.md#subtract)

***

### toBigNumber()

> **toBigNumber**(): `BigNumber`

#### Returns

`BigNumber`

#### See

IValueConverter.toBigNumber

#### Implementation of

[`IPrice`](../interfaces/IPrice.md).[`toBigNumber`](../interfaces/IPrice.md#tobignumber)

***

### toSolidityValue()

> **toSolidityValue**(`params?`): `bigint`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `decimals`: `number`; \} |
| `params.decimals` | `number` |

#### Returns

`bigint`

#### See

IValueConverter.toSolidityValue

#### Implementation of

[`IPrice`](../interfaces/IPrice.md).[`toSolidityValue`](../interfaces/IPrice.md#tosolidityvalue)

***

### toString()

> **toString**(): `string`

#### Returns

`string`

#### See

IPrice.toString

#### Implementation of

[`IPrice`](../interfaces/IPrice.md).[`toString`](../interfaces/IPrice.md#tostring)

***

### createFrom()

> `static` **createFrom**(`params`): [`IPrice`](../interfaces/IPrice.md)

FACTORY

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`PriceParameters`](../type-aliases/PriceParameters.md) |

#### Returns

[`IPrice`](../interfaces/IPrice.md)

***

### createFromAmountsRatio()

> `static` **createFromAmountsRatio**(`params`): [`IPrice`](../interfaces/IPrice.md)

Creates a price from the ratio of two token amounts

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | \{ `denominator`: [`ITokenAmount`](../interfaces/ITokenAmount.md); `numerator`: [`ITokenAmount`](../interfaces/ITokenAmount.md); \} | - |
| `params.denominator` | [`ITokenAmount`](../interfaces/ITokenAmount.md) | the token amount in the denominator |
| `params.numerator` | [`ITokenAmount`](../interfaces/ITokenAmount.md) | the token amount in the numerator |

#### Returns

[`IPrice`](../interfaces/IPrice.md)

the price calculated from the amounts ratio of numerator divided by denominator

#### Dev

The denominator becomes the base of the price and the numerator becomes the quote
