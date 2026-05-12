[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / IPercentage

# Interface: IPercentage

IPercentage
Percentage type that can be used for calculations with other types like TokenAmount or Price

## Extends

- [`IPercentageData`](../type-aliases/IPercentageData.md).`IValueConverter`.[`IPrintable`](IPrintable.md)

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

add

#### Parameters

##### percentage

`IPercentage`

Percentage to add

#### Returns

`IPercentage`

the result of the addition

***

### divide()

> **divide**(`divisor`): `IPercentage`

divide

#### Parameters

##### divisor

`string` \| `number` \| `IPercentage`

A percentage, string amount or number to divide

#### Returns

`IPercentage`

The resulting percentage

***

### multiply()

> **multiply**(`multiplier`): `IPercentage`

multiply

#### Parameters

##### multiplier

`string` \| `number` \| `IPercentage`

A percentage, string amount or number to multiply

#### Returns

`IPercentage`

The resulting percentage

***

### subtract()

> **subtract**(`percentage`): `IPercentage`

subtract

#### Parameters

##### percentage

[`IPercentageData`](../type-aliases/IPercentageData.md)

Percentage to subtract

#### Returns

`IPercentage`

the result of the subtraction

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

### toComplement()

> **toComplement**(): `IPercentage`

toComplement

#### Returns

`IPercentage`

The complement of the percentage

The complement is the difference between 100% and the percentage

***

### toProportion()

> **toProportion**(): `number`

toProportion

#### Returns

`number`

Returns the equivalent proportion of the percentage

The proportion is the percentage divided by 100, this is, a floating value between 0 and 1

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

[`IPrintable`](IPrintable.md).[`toString`](IPrintable.md#tostring)
