[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / ITokenAmount

# Interface: ITokenAmount

ITokenAmount
Interface for the implementors of the token amount

This interface is used to add all the methods that the interface supports

## Extends

- [`ITokenAmountData`](../type-aliases/ITokenAmountData.md).`IValueConverter`.[`IPrintable`](../../../common/src/interfaces/IPrintable.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

***

### amount

> `readonly` **amount**: `string`

Amount in floating point format without taking into account the token decimals

#### Overrides

`ITokenAmountData.amount`

***

### token

> `readonly` **token**: [`IToken`](IToken.md)

Token this amount refers to

#### Overrides

`ITokenAmountData.token`

## Methods

### add()

> **add**(`tokenToAdd`): `ITokenAmount`

add

#### Parameters

##### tokenToAdd

`ITokenAmount`

TokenAmount to add

#### Returns

`ITokenAmount`

The resulting TokenAmount

***

### divide()

> **divide**\<`InputParams`, `ReturnType`\>(`divisor`): `ReturnType`

divide

#### Type Parameters

##### InputParams

`InputParams` *extends* [`TokenAmountMulDivParamType`](../type-aliases/TokenAmountMulDivParamType.md)

##### ReturnType

`ReturnType` = [`TokenAmountMulDivReturnType`](../type-aliases/TokenAmountMulDivReturnType.md)\<`InputParams`\>

#### Parameters

##### divisor

`InputParams`

A percentage, price, string amount or number to divide

#### Returns

`ReturnType`

The resulting TokenAmount

***

### isEqualTo()

> **isEqualTo**(`tokenAmount`): `boolean`

isEqualTo
Checks if the amount is equal to the provided TokenAmount

#### Parameters

##### tokenAmount

`ITokenAmount`

TokenAmount to compare

#### Returns

`boolean`

true if the amount is equal to the provided TokenAmount

***

### isGreaterOrEqualThan()

> **isGreaterOrEqualThan**(`tokenAmount`): `boolean`

isGreaterOrEqualThan
Checks if the amount is greater or equal than the provided TokenAmount

#### Parameters

##### tokenAmount

`ITokenAmount`

TokenAmount to compare

#### Returns

`boolean`

true if the amount is greater or equal than the provided TokenAmount

***

### isGreaterThan()

> **isGreaterThan**(`tokenAmount`): `boolean`

isGreaterThan
Checks if the amount is greater than the provided TokenAmount

#### Parameters

##### tokenAmount

`ITokenAmount`

TokenAmount to compare

#### Returns

`boolean`

true if the amount is greater than the provided TokenAmount

***

### isLessOrEqualThan()

> **isLessOrEqualThan**(`tokenAmount`): `boolean`

isLessOrEqualThan
Checks if the amount is less or equal than the provided TokenAmount

#### Parameters

##### tokenAmount

`ITokenAmount`

TokenAmount to compare

#### Returns

`boolean`

true if the amount is less or equal than the provided TokenAmount

***

### isLessThan()

> **isLessThan**(`tokenAmount`): `boolean`

isLessThan
Checks if the amount is less than the provided TokenAmount

#### Parameters

##### tokenAmount

`ITokenAmount`

TokenAmount to compare

#### Returns

`boolean`

true if the amount is less than the provided TokenAmount

***

### isZero()

> **isZero**(): `boolean`

isZero
Checks if the amount is zero

#### Returns

`boolean`

true if the amount is zero or false otherwise

***

### multiply()

> **multiply**\<`InputParams`, `ReturnType`\>(`multiplier`): `ReturnType`

multiply

#### Type Parameters

##### InputParams

`InputParams` *extends* [`TokenAmountMulDivParamType`](../type-aliases/TokenAmountMulDivParamType.md)

##### ReturnType

`ReturnType` = [`TokenAmountMulDivReturnType`](../type-aliases/TokenAmountMulDivReturnType.md)\<`InputParams`\>

#### Parameters

##### multiplier

`InputParams`

A percentage, price, string amount or number to multiply

#### Returns

`ReturnType`

The resulting TokenAmount

***

### subtract()

> **subtract**(`tokenToSubstract`): `ITokenAmount`

subtract

#### Parameters

##### tokenToSubstract

`ITokenAmount`

TokenAmount to subtract

#### Returns

`ITokenAmount`

The resulting TokenAmount

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
