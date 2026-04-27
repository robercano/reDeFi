[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / IRiskRatio

# Interface: IRiskRatio

## Name

IRiskRatio

## Description

Interface for the implementors of the risk ratio

## Extends

- [`IRiskRatioData`](../type-aliases/IRiskRatioData.md).[`IPrintable`](IPrintable.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

***

### type

> `readonly` **type**: [`RiskRatioType`](../enumerations/RiskRatioType.md)

The type of the risk ratio

#### Overrides

`IRiskRatioData.type`

***

### value

> `readonly` **value**: `number` \| [`IPercentage`](IPercentage.md)

The risk ratio value, a percentage for LTV and Collateralization Ratio, a number for Multiple

#### Overrides

`IRiskRatioData.value`

## Methods

### toCollateralizationRatio()

> **toCollateralizationRatio**(): [`IPercentage`](IPercentage.md)

Gets the LTV value as a collateralization ratio

#### Returns

[`IPercentage`](IPercentage.md)

***

### toLTV()

> **toLTV**(): [`IPercentage`](IPercentage.md)

Gets the LTV value

#### Returns

[`IPercentage`](IPercentage.md)

***

### toMultiple()

> **toMultiple**(): `number`

Gets the LTV value as a multiply factor

#### Returns

`number`

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

[`IPrintable`](IPrintable.md).[`toString`](IPrintable.md#tostring)
