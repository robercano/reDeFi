[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / IFiatCurrencyAmount

# Interface: IFiatCurrencyAmount

IFiatCurrencyAmount
Represents an amount of a fiat currency

The amount is represented as a string in floating point format without taking into consideration
the number of decimals of the token. This data type can be used for calculations with other types
like Price or Percentage

## Extends

- [`IFiatCurrencyAmountData`](../type-aliases/IFiatCurrencyAmountData.md).`IValueConverter`.[`IPrintable`](IPrintable.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

***

### amount

> `readonly` **amount**: `string`

The amount in floating point format

#### Overrides

`IFiatCurrencyAmountData.amount`

***

### fiat

> `readonly` **fiat**: [`FiatCurrency`](../enumerations/FiatCurrency.md)

Fiat currency for the amount

#### Overrides

`IFiatCurrencyAmountData.fiat`

## Methods

### add()

> **add**(`fiatToAdd`): `IFiatCurrencyAmount`

add

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fiatToAdd` | `IFiatCurrencyAmount` | FiatCurrencyAmount to add |

#### Returns

`IFiatCurrencyAmount`

The resulting FiatCurrencyAmount

***

### divide()

> **divide**\<`InputParams`, `ReturnType`\>(`divisor`): `ReturnType`

divide

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `InputParams` *extends* [`FiatCurrencyAmountMulDivParamType`](../type-aliases/FiatCurrencyAmountMulDivParamType.md) | - |
| `ReturnType` | [`FiatCurrencyAmountMulDivReturnType`](../type-aliases/FiatCurrencyAmountMulDivReturnType.md)\<`InputParams`\> |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `divisor` | `InputParams` | A percentage, price string amount or number to divide |

#### Returns

`ReturnType`

The resulting FiatCurrencyAmount

***

### multiply()

> **multiply**\<`InputParams`, `ReturnType`\>(`multiplier`): `ReturnType`

multiply

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `InputParams` *extends* [`FiatCurrencyAmountMulDivParamType`](../type-aliases/FiatCurrencyAmountMulDivParamType.md) | - |
| `ReturnType` | [`FiatCurrencyAmountMulDivReturnType`](../type-aliases/FiatCurrencyAmountMulDivReturnType.md)\<`InputParams`\> |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `multiplier` | `InputParams` | A percentage, string amount or number to multiply |

#### Returns

`ReturnType`

The resulting FiatCurrencyAmount

***

### subtract()

> **subtract**(`fiatToSubtract`): `IFiatCurrencyAmount`

subtract

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fiatToSubtract` | `IFiatCurrencyAmount` |

#### Returns

`IFiatCurrencyAmount`

The resulting FiatCurrencyAmount

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

toString
Returns a string representation of the object

#### Returns

`string`

string

The string representation should have enough info to debug the object

#### Inherited from

[`IPrintable`](IPrintable.md).[`toString`](IPrintable.md#tostring)
