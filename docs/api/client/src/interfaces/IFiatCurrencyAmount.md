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

- [`IFiatCurrencyAmountData`](../type-aliases/IFiatCurrencyAmountData.md).`IValueConverter`.[`IPrintable`](../../../common/src/interfaces/IPrintable.md)

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

> `readonly` **fiat**: [`FiatCurrency`](../../../common/src/enumerations/FiatCurrency.md)

Fiat currency for the amount

#### Overrides

`IFiatCurrencyAmountData.fiat`

## Methods

### add()

> **add**(`fiatToAdd`): `IFiatCurrencyAmount`

add

#### Parameters

##### fiatToAdd

`IFiatCurrencyAmount`

FiatCurrencyAmount to add

#### Returns

`IFiatCurrencyAmount`

The resulting FiatCurrencyAmount

***

### divide()

> **divide**\<`InputParams`, `ReturnType`\>(`divisor`): `ReturnType`

divide

#### Type Parameters

##### InputParams

`InputParams` *extends* [`FiatCurrencyAmountMulDivParamType`](../type-aliases/FiatCurrencyAmountMulDivParamType.md)

##### ReturnType

`ReturnType` = [`FiatCurrencyAmountMulDivReturnType`](../type-aliases/FiatCurrencyAmountMulDivReturnType.md)\<`InputParams`\>

#### Parameters

##### divisor

`InputParams`

A percentage, price string amount or number to divide

#### Returns

`ReturnType`

The resulting FiatCurrencyAmount

***

### multiply()

> **multiply**\<`InputParams`, `ReturnType`\>(`multiplier`): `ReturnType`

multiply

#### Type Parameters

##### InputParams

`InputParams` *extends* [`FiatCurrencyAmountMulDivParamType`](../type-aliases/FiatCurrencyAmountMulDivParamType.md)

##### ReturnType

`ReturnType` = [`FiatCurrencyAmountMulDivReturnType`](../type-aliases/FiatCurrencyAmountMulDivReturnType.md)\<`InputParams`\>

#### Parameters

##### multiplier

`InputParams`

A percentage, string amount or number to multiply

#### Returns

`ReturnType`

The resulting FiatCurrencyAmount

***

### subtract()

> **subtract**(`fiatToSubtract`): `IFiatCurrencyAmount`

subtract

#### Parameters

##### fiatToSubtract

`IFiatCurrencyAmount`

FiatCurrencyAmount to subtract

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
         of BigNumber to a Solidity value must be done manually.
         Use `toSolidityValue` to convert the value to a Solidity value instead.

#### Inherited from

`IValueConverter.toBigNumber`

***

### toSolidityValue()

> **toSolidityValue**(`params?`): `bigint`

Converts the instance into a Solidity value

#### Parameters

##### params?

###### decimals

`number`

The number of decimals used to represent the value in Solidity

#### Returns

`bigint`

The value as a TypeScript bigint that can be passed to a Solidity contract

#### Remarks

The value is expected to be scaled by 10^decimals, thus yielding a Solidity uint256
         value with the correct fixed point decimals.
         The data type implementing this interface should provide a default value for decimals
         when possible to aid in the conversion

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

[`IPrintable`](../../../common/src/interfaces/IPrintable.md).[`toString`](../../../common/src/interfaces/IPrintable.md#tostring)
