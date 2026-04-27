[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / RiskRatio

# Class: RiskRatio

RiskRatio

## See

IRiskRatio

## Implements

- [`IRiskRatio`](../interfaces/IRiskRatio.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

[`IRiskRatio`](../interfaces/IRiskRatio.md).[`[___signature__]`](../interfaces/IRiskRatio.md#___signature__)

***

### type

> `readonly` **type**: [`RiskRatioType`](../enumerations/RiskRatioType.md)

ATTRIBUTES

#### Implementation of

[`IRiskRatio`](../interfaces/IRiskRatio.md).[`type`](../interfaces/IRiskRatio.md#type)

***

### value

> `readonly` **value**: `number` \| [`IPercentage`](../interfaces/IPercentage.md)

The risk ratio value, a percentage for LTV and Collateralization Ratio, a number for Multiple

#### Implementation of

[`IRiskRatio`](../interfaces/IRiskRatio.md).[`value`](../interfaces/IRiskRatio.md#value)

## Methods

### toCollateralizationRatio()

> **toCollateralizationRatio**(): [`IPercentage`](../interfaces/IPercentage.md)

#### Returns

[`IPercentage`](../interfaces/IPercentage.md)

#### See

IRiskRatio.toCollateralizationRatio

#### Implementation of

[`IRiskRatio`](../interfaces/IRiskRatio.md).[`toCollateralizationRatio`](../interfaces/IRiskRatio.md#tocollateralizationratio)

***

### toLTV()

> **toLTV**(): [`IPercentage`](../interfaces/IPercentage.md)

#### Returns

[`IPercentage`](../interfaces/IPercentage.md)

#### See

IRiskRatio.toLTV

#### Implementation of

[`IRiskRatio`](../interfaces/IRiskRatio.md).[`toLTV`](../interfaces/IRiskRatio.md#toltv)

***

### toMultiple()

> **toMultiple**(): `number`

#### Returns

`number`

#### See

IRiskRatio.toMultiple

#### Implementation of

[`IRiskRatio`](../interfaces/IRiskRatio.md).[`toMultiple`](../interfaces/IRiskRatio.md#tomultiple)

***

### toString()

> **toString**(): `string`

#### Returns

`string`

#### See

IPrintable.toString

#### Implementation of

[`IRiskRatio`](../interfaces/IRiskRatio.md).[`toString`](../interfaces/IRiskRatio.md#tostring)

***

### createFrom()

> `static` **createFrom**(`params`): `RiskRatio`

FACTORY

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`RiskRatioParameters`](../type-aliases/RiskRatioParameters.md) |

#### Returns

`RiskRatio`
