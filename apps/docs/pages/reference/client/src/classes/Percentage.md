[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / Percentage

# Class: Percentage

Percentage

## See

IPercentage

## Implements

- [`IPercentage`](../interfaces/IPercentage.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

[`IPercentage`](../interfaces/IPercentage.md).[`[___signature__]`](../interfaces/IPercentage.md#___signature__)

***

### value

> `readonly` **value**: `number`

ATTRIBUTES

#### Implementation of

[`IPercentage`](../interfaces/IPercentage.md).[`value`](../interfaces/IPercentage.md#value)

***

### Percent100

> `static` **Percent100**: `Percentage`

The percentage of 100% with the given `PERCENTAGE_DECIMALS`

***

### PERCENTAGE\_DECIMALS

> `static` **PERCENTAGE\_DECIMALS**: `number` = `6`

The number of decimals used to represent the percentage in Solidity

***

### PERCENTAGE\_FACTOR

> `static` **PERCENTAGE\_FACTOR**: `number`

The factor used to scale the percentage

## Methods

### add()

> **add**(`percentage`): [`IPercentage`](../interfaces/IPercentage.md)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `percentage` | [`IPercentage`](../interfaces/IPercentage.md) |

#### Returns

[`IPercentage`](../interfaces/IPercentage.md)

#### See

IPercentage.add

#### Implementation of

[`IPercentage`](../interfaces/IPercentage.md).[`add`](../interfaces/IPercentage.md#add)

***

### divide()

> **divide**(`divisor`): [`IPercentage`](../interfaces/IPercentage.md)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `divisor` | `string` \| `number` \| [`IPercentage`](../interfaces/IPercentage.md) |

#### Returns

[`IPercentage`](../interfaces/IPercentage.md)

#### See

IPercentage.divide

#### Implementation of

[`IPercentage`](../interfaces/IPercentage.md).[`divide`](../interfaces/IPercentage.md#divide)

***

### multiply()

> **multiply**(`multiplier`): [`IPercentage`](../interfaces/IPercentage.md)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `multiplier` | `string` \| `number` \| [`IPercentage`](../interfaces/IPercentage.md) |

#### Returns

[`IPercentage`](../interfaces/IPercentage.md)

#### See

IPercentage.multiply

#### Implementation of

[`IPercentage`](../interfaces/IPercentage.md).[`multiply`](../interfaces/IPercentage.md#multiply)

***

### subtract()

> **subtract**(`percentage`): [`IPercentage`](../interfaces/IPercentage.md)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `percentage` | [`IPercentage`](../interfaces/IPercentage.md) |

#### Returns

[`IPercentage`](../interfaces/IPercentage.md)

#### See

IPercentage.subtract

#### Implementation of

[`IPercentage`](../interfaces/IPercentage.md).[`subtract`](../interfaces/IPercentage.md#subtract)

***

### toBigNumber()

> **toBigNumber**(): `BigNumber`

#### Returns

`BigNumber`

#### See

IValueConverter.toBigNumber

#### Implementation of

[`IPercentage`](../interfaces/IPercentage.md).[`toBigNumber`](../interfaces/IPercentage.md#tobignumber)

***

### toComplement()

> **toComplement**(): [`IPercentage`](../interfaces/IPercentage.md)

#### Returns

[`IPercentage`](../interfaces/IPercentage.md)

#### See

IPercentage.toComplement

#### Implementation of

[`IPercentage`](../interfaces/IPercentage.md).[`toComplement`](../interfaces/IPercentage.md#tocomplement)

***

### toProportion()

> **toProportion**(): `number`

#### Returns

`number`

#### See

IPercentage.toProportion

#### Implementation of

[`IPercentage`](../interfaces/IPercentage.md).[`toProportion`](../interfaces/IPercentage.md#toproportion)

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

[`IPercentage`](../interfaces/IPercentage.md).[`toSolidityValue`](../interfaces/IPercentage.md#tosolidityvalue)

***

### toString()

> **toString**(): `string`

#### Returns

`string`

#### See

IPrintable.toString

#### Implementation of

[`IPercentage`](../interfaces/IPercentage.md).[`toString`](../interfaces/IPercentage.md#tostring)

***

### createFrom()

> `static` **createFrom**(`params`): `Percentage`

FACTORY

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`PercentageParameters`](../type-aliases/PercentageParameters.md) |

#### Returns

`Percentage`

***

### createFromSolidityValue()

> `static` **createFromSolidityValue**(`params`): `Percentage`

Creates a Percentage instance from a Solidity value with PERCENTAGE_DECIMALS decimals

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | \{ `value`: `bigint`; \} | - |
| `params.value` | `bigint` | The Solidity value |

#### Returns

`Percentage`

The Percentage instance
