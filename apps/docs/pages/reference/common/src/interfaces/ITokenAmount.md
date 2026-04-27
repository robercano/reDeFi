[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / ITokenAmount

# Interface: ITokenAmount

## Name

ITokenAmount

## Description

Interface for the implementors of the token amount

This interface is used to add all the methods that the interface supports

## Extends

- [`ITokenAmountData`](../type-aliases/ITokenAmountData.md).`IValueConverter`.[`IPrintable`](../../../client/src/interfaces/IPrintable.md)

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

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tokenToAdd` | `ITokenAmount` | TokenAmount to add |

#### Returns

`ITokenAmount`

The resulting TokenAmount

#### Name

add

***

### divide()

> **divide**\<`InputParams`, `ReturnType`\>(`divisor`): `ReturnType`

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `InputParams` *extends* [`TokenAmountMulDivParamType`](../type-aliases/TokenAmountMulDivParamType.md) | - |
| `ReturnType` | [`TokenAmountMulDivReturnType`](../type-aliases/TokenAmountMulDivReturnType.md)\<`InputParams`\> |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `divisor` | `InputParams` | A percentage, price, string amount or number to divide |

#### Returns

`ReturnType`

The resulting TokenAmount

#### Name

divide

***

### isEqualTo()

> **isEqualTo**(`tokenAmount`): `boolean`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tokenAmount` | `ITokenAmount` | TokenAmount to compare |

#### Returns

`boolean`

true if the amount is equal to the provided TokenAmount

#### Name

isEqualTo

#### Description

Checks if the amount is equal to the provided TokenAmount

***

### isGreaterOrEqualThan()

> **isGreaterOrEqualThan**(`tokenAmount`): `boolean`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tokenAmount` | `ITokenAmount` | TokenAmount to compare |

#### Returns

`boolean`

true if the amount is greater or equal than the provided TokenAmount

#### Name

isGreaterOrEqualThan

#### Description

Checks if the amount is greater or equal than the provided TokenAmount

***

### isGreaterThan()

> **isGreaterThan**(`tokenAmount`): `boolean`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tokenAmount` | `ITokenAmount` | TokenAmount to compare |

#### Returns

`boolean`

true if the amount is greater than the provided TokenAmount

#### Name

isGreaterThan

#### Description

Checks if the amount is greater than the provided TokenAmount

***

### isLessOrEqualThan()

> **isLessOrEqualThan**(`tokenAmount`): `boolean`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tokenAmount` | `ITokenAmount` | TokenAmount to compare |

#### Returns

`boolean`

true if the amount is less or equal than the provided TokenAmount

#### Name

isLessOrEqualThan

#### Description

Checks if the amount is less or equal than the provided TokenAmount

***

### isLessThan()

> **isLessThan**(`tokenAmount`): `boolean`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tokenAmount` | `ITokenAmount` | TokenAmount to compare |

#### Returns

`boolean`

true if the amount is less than the provided TokenAmount

#### Name

isLessThan

#### Description

Checks if the amount is less than the provided TokenAmount

***

### isZero()

> **isZero**(): `boolean`

#### Returns

`boolean`

true if the amount is zero or false otherwise

#### Name

isZero

#### Description

Checks if the amount is zero

***

### multiply()

> **multiply**\<`InputParams`, `ReturnType`\>(`multiplier`): `ReturnType`

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `InputParams` *extends* [`TokenAmountMulDivParamType`](../type-aliases/TokenAmountMulDivParamType.md) | - |
| `ReturnType` | [`TokenAmountMulDivReturnType`](../type-aliases/TokenAmountMulDivReturnType.md)\<`InputParams`\> |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `multiplier` | `InputParams` | A percentage, price, string amount or number to multiply |

#### Returns

`ReturnType`

The resulting TokenAmount

#### Name

multiply

***

### subtract()

> **subtract**(`tokenToSubstract`): `ITokenAmount`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tokenToSubstract` | `ITokenAmount` | TokenAmount to subtract |

#### Returns

`ITokenAmount`

The resulting TokenAmount

#### Name

subtract

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

string

The string representation should have enough info to debug the object

#### Name

toString

#### Description

Returns a string representation of the object

#### Inherited from

[`IPrintable`](../../../client/src/interfaces/IPrintable.md).[`toString`](../../../client/src/interfaces/IPrintable.md#tostring)
