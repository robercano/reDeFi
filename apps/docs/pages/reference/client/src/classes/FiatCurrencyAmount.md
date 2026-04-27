[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / FiatCurrencyAmount

# Class: FiatCurrencyAmount

FiatCurrencyAmount

## See

IFiatCurrencyAmount

## Implements

- [`IFiatCurrencyAmount`](../interfaces/IFiatCurrencyAmount.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

[`IFiatCurrencyAmount`](../interfaces/IFiatCurrencyAmount.md).[`[___signature__]`](../interfaces/IFiatCurrencyAmount.md#___signature__)

***

### amount

> `readonly` **amount**: `string`

The amount in floating point format

#### Implementation of

[`IFiatCurrencyAmount`](../interfaces/IFiatCurrencyAmount.md).[`amount`](../interfaces/IFiatCurrencyAmount.md#amount)

***

### fiat

> `readonly` **fiat**: [`FiatCurrency`](../enumerations/FiatCurrency.md)

Fiat currency for the amount

#### Implementation of

[`IFiatCurrencyAmount`](../interfaces/IFiatCurrencyAmount.md).[`fiat`](../interfaces/IFiatCurrencyAmount.md#fiat)

## Methods

### add()

> **add**(`fiatToAdd`): [`IFiatCurrencyAmount`](../interfaces/IFiatCurrencyAmount.md)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fiatToAdd` | `FiatCurrencyAmount` |

#### Returns

[`IFiatCurrencyAmount`](../interfaces/IFiatCurrencyAmount.md)

#### See

IFiatCurrencyAmount.add

#### Implementation of

[`IFiatCurrencyAmount`](../interfaces/IFiatCurrencyAmount.md).[`add`](../interfaces/IFiatCurrencyAmount.md#add)

***

### divide()

> **divide**\<`InputParams`, `ReturnType`\>(`divisor`): `ReturnType`

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `InputParams` *extends* [`FiatCurrencyAmountMulDivParamType`](../type-aliases/FiatCurrencyAmountMulDivParamType.md) | - |
| `ReturnType` | [`FiatCurrencyAmountMulDivReturnType`](../type-aliases/FiatCurrencyAmountMulDivReturnType.md)\<`InputParams`\> |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `divisor` | `InputParams` |

#### Returns

`ReturnType`

#### See

IFiatCurrencyAmount.divide

#### Implementation of

[`IFiatCurrencyAmount`](../interfaces/IFiatCurrencyAmount.md).[`divide`](../interfaces/IFiatCurrencyAmount.md#divide)

***

### multiply()

> **multiply**\<`InputParams`, `ReturnType`\>(`multiplier`): `ReturnType`

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `InputParams` *extends* [`FiatCurrencyAmountMulDivParamType`](../type-aliases/FiatCurrencyAmountMulDivParamType.md) | - |
| `ReturnType` | [`FiatCurrencyAmountMulDivReturnType`](../type-aliases/FiatCurrencyAmountMulDivReturnType.md)\<`InputParams`\> |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `multiplier` | `InputParams` |

#### Returns

`ReturnType`

#### See

IFiatCurrencyAmount.multiply

#### Implementation of

[`IFiatCurrencyAmount`](../interfaces/IFiatCurrencyAmount.md).[`multiply`](../interfaces/IFiatCurrencyAmount.md#multiply)

***

### subtract()

> **subtract**(`fiatToSubstract`): [`IFiatCurrencyAmount`](../interfaces/IFiatCurrencyAmount.md)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fiatToSubstract` | `FiatCurrencyAmount` |

#### Returns

[`IFiatCurrencyAmount`](../interfaces/IFiatCurrencyAmount.md)

#### See

IFiatCurrencyAmount.subtract

#### Implementation of

[`IFiatCurrencyAmount`](../interfaces/IFiatCurrencyAmount.md).[`subtract`](../interfaces/IFiatCurrencyAmount.md#subtract)

***

### toBigNumber()

> **toBigNumber**(): `BigNumber`

#### Returns

`BigNumber`

#### See

IValueConverter.toBigNumber

#### Implementation of

[`IFiatCurrencyAmount`](../interfaces/IFiatCurrencyAmount.md).[`toBigNumber`](../interfaces/IFiatCurrencyAmount.md#tobignumber)

***

### toSolidityValue()

> **toSolidityValue**(`params?`): `bigint`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params?` | \{ `decimals`: `number`; \} |
| `params.decimals?` | `number` |

#### Returns

`bigint`

#### See

IValueConverter.toBigNumber

#### Implementation of

[`IFiatCurrencyAmount`](../interfaces/IFiatCurrencyAmount.md).[`toSolidityValue`](../interfaces/IFiatCurrencyAmount.md#tosolidityvalue)

***

### toString()

> **toString**(): `string`

#### Returns

`string`

#### See

IPrintable.toString

#### Implementation of

[`IFiatCurrencyAmount`](../interfaces/IFiatCurrencyAmount.md).[`toString`](../interfaces/IFiatCurrencyAmount.md#tostring)

***

### createFrom()

> `static` **createFrom**(`params`): [`IFiatCurrencyAmount`](../interfaces/IFiatCurrencyAmount.md)

FACTORY

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`FiatCurrencyAmountParameters`](../type-aliases/FiatCurrencyAmountParameters.md) |

#### Returns

[`IFiatCurrencyAmount`](../interfaces/IFiatCurrencyAmount.md)
