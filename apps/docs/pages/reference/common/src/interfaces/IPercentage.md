[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / IPercentage

# Interface: IPercentage

## Name

IPercentage

## Description

Percentage type that can be used for calculations with other types like TokenAmount or Price

## Extends

- [`IPercentageData`](../type-aliases/IPercentageData.md).`IValueConverter`.[`IPrintable`](../../../client/src/interfaces/IPrintable.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

***

### value

> `readonly` **value**: `number`

The percentage in floating point format

#### Overrides

`IPercentageData.value`

## Methods

### add()

> **add**(`percentage`): `IPercentage`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `percentage` | `IPercentage` | Percentage to add |

#### Returns

`IPercentage`

the result of the addition

#### Name

add

***

### divide()

> **divide**(`divisor`): `IPercentage`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `divisor` | `string` \| `number` \| `IPercentage` | A percentage, string amount or number to divide |

#### Returns

`IPercentage`

The resulting percentage

#### Name

divide

***

### multiply()

> **multiply**(`multiplier`): `IPercentage`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `multiplier` | `string` \| `number` \| `IPercentage` | A percentage, string amount or number to multiply |

#### Returns

`IPercentage`

The resulting percentage

#### Name

multiply

***

### subtract()

> **subtract**(`percentage`): `IPercentage`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `percentage` | [`IPercentageData`](../type-aliases/IPercentageData.md) | Percentage to subtract |

#### Returns

`IPercentage`

the result of the subtraction

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

### toComplement()

> **toComplement**(): `IPercentage`

#### Returns

`IPercentage`

The complement of the percentage

The complement is the difference between 100% and the percentage

#### Name

toComplement

***

### toProportion()

> **toProportion**(): `number`

#### Returns

`number`

Returns the equivalent proportion of the percentage

The proportion is the percentage divided by 100, this is, a floating value between 0 and 1

#### Name

toProportion

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
