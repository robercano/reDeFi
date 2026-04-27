[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / TokenAmount

# Class: TokenAmount

TokenAmount

## See

ITokenAmount

## Implements

- [`ITokenAmount`](../interfaces/ITokenAmount.md)

## Properties

### \_baseUnitFactor

> `protected` `readonly` **\_baseUnitFactor**: `BigNumber`

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

[`ITokenAmount`](../interfaces/ITokenAmount.md).[`[___signature__]`](../interfaces/ITokenAmount.md#___signature__)

***

### amount

> `readonly` **amount**: `string`

Amount in floating point format without taking into account the token decimals

#### Implementation of

[`ITokenAmount`](../interfaces/ITokenAmount.md).[`amount`](../interfaces/ITokenAmount.md#amount)

***

### token

> `readonly` **token**: [`IToken`](../interfaces/IToken.md)

ATTRIBUTES

#### Implementation of

[`ITokenAmount`](../interfaces/ITokenAmount.md).[`token`](../interfaces/ITokenAmount.md#token)

## Methods

### add()

> **add**(`tokenToAdd`): [`ITokenAmount`](../interfaces/ITokenAmount.md)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tokenToAdd` | [`ITokenAmount`](../interfaces/ITokenAmount.md) |

#### Returns

[`ITokenAmount`](../interfaces/ITokenAmount.md)

#### See

ITokenAmount.add

#### Implementation of

[`ITokenAmount`](../interfaces/ITokenAmount.md).[`add`](../interfaces/ITokenAmount.md#add)

***

### divide()

> **divide**\<`InputParams`, `ReturnType`\>(`divisor`): `ReturnType`

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `InputParams` *extends* [`TokenAmountMulDivParamType`](../type-aliases/TokenAmountMulDivParamType.md) | - |
| `ReturnType` | [`TokenAmountMulDivReturnType`](../type-aliases/TokenAmountMulDivReturnType.md)\<`InputParams`\> |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `divisor` | `InputParams` |

#### Returns

`ReturnType`

#### See

ITokenAmount.divide

#### Implementation of

[`ITokenAmount`](../interfaces/ITokenAmount.md).[`divide`](../interfaces/ITokenAmount.md#divide)

***

### isEqualTo()

> **isEqualTo**(`tokenAmount`): `boolean`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tokenAmount` | [`ITokenAmount`](../interfaces/ITokenAmount.md) |

#### Returns

`boolean`

#### See

ITokenAmount.isEqualTo

#### Implementation of

[`ITokenAmount`](../interfaces/ITokenAmount.md).[`isEqualTo`](../interfaces/ITokenAmount.md#isequalto)

***

### isGreaterOrEqualThan()

> **isGreaterOrEqualThan**(`tokenAmount`): `boolean`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tokenAmount` | [`ITokenAmount`](../interfaces/ITokenAmount.md) |

#### Returns

`boolean`

#### See

ITokenAmount.isGreaterOrEqualThan

#### Implementation of

[`ITokenAmount`](../interfaces/ITokenAmount.md).[`isGreaterOrEqualThan`](../interfaces/ITokenAmount.md#isgreaterorequalthan)

***

### isGreaterThan()

> **isGreaterThan**(`tokenAmount`): `boolean`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tokenAmount` | [`ITokenAmount`](../interfaces/ITokenAmount.md) |

#### Returns

`boolean`

#### See

ITokenAmount.isGreaterThan

#### Implementation of

[`ITokenAmount`](../interfaces/ITokenAmount.md).[`isGreaterThan`](../interfaces/ITokenAmount.md#isgreaterthan)

***

### isLessOrEqualThan()

> **isLessOrEqualThan**(`tokenAmount`): `boolean`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tokenAmount` | [`ITokenAmount`](../interfaces/ITokenAmount.md) |

#### Returns

`boolean`

#### See

ITokenAmount.isLessOrEqualThan

#### Implementation of

[`ITokenAmount`](../interfaces/ITokenAmount.md).[`isLessOrEqualThan`](../interfaces/ITokenAmount.md#islessorequalthan)

***

### isLessThan()

> **isLessThan**(`tokenAmount`): `boolean`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tokenAmount` | [`ITokenAmount`](../interfaces/ITokenAmount.md) |

#### Returns

`boolean`

#### See

ITokenAmount.isLessThan

#### Implementation of

[`ITokenAmount`](../interfaces/ITokenAmount.md).[`isLessThan`](../interfaces/ITokenAmount.md#islessthan)

***

### isZero()

> **isZero**(): `boolean`

#### Returns

`boolean`

#### See

ITokenAmount.isZero

#### Implementation of

[`ITokenAmount`](../interfaces/ITokenAmount.md).[`isZero`](../interfaces/ITokenAmount.md#iszero)

***

### multiply()

> **multiply**\<`InputParams`, `ReturnType`\>(`multiplier`): `ReturnType`

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `InputParams` *extends* [`TokenAmountMulDivParamType`](../type-aliases/TokenAmountMulDivParamType.md) | - |
| `ReturnType` | [`TokenAmountMulDivReturnType`](../type-aliases/TokenAmountMulDivReturnType.md)\<`InputParams`\> |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `multiplier` | `InputParams` |

#### Returns

`ReturnType`

#### See

ITokenAmount.multiply

#### Implementation of

[`ITokenAmount`](../interfaces/ITokenAmount.md).[`multiply`](../interfaces/ITokenAmount.md#multiply)

***

### subtract()

> **subtract**(`tokenToSubstract`): [`ITokenAmount`](../interfaces/ITokenAmount.md)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tokenToSubstract` | [`ITokenAmount`](../interfaces/ITokenAmount.md) |

#### Returns

[`ITokenAmount`](../interfaces/ITokenAmount.md)

#### See

ITokenAmount.subtract

#### Implementation of

[`ITokenAmount`](../interfaces/ITokenAmount.md).[`subtract`](../interfaces/ITokenAmount.md#subtract)

***

### toBigNumber()

> **toBigNumber**(): `BigNumber`

#### Returns

`BigNumber`

#### See

IValueConverter.toBigNumber

#### Implementation of

[`ITokenAmount`](../interfaces/ITokenAmount.md).[`toBigNumber`](../interfaces/ITokenAmount.md#tobignumber)

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

[`ITokenAmount`](../interfaces/ITokenAmount.md).[`toSolidityValue`](../interfaces/ITokenAmount.md#tosolidityvalue)

***

### toString()

> **toString**(): `string`

#### Returns

`string`

#### See

IPrintable.toString

#### Implementation of

[`ITokenAmount`](../interfaces/ITokenAmount.md).[`toString`](../interfaces/ITokenAmount.md#tostring)

***

### createFrom()

> `static` **createFrom**(`params`): [`ITokenAmount`](../interfaces/ITokenAmount.md)

FACTORY

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`TokenAmountParameters`](../type-aliases/TokenAmountParameters.md) |

#### Returns

[`ITokenAmount`](../interfaces/ITokenAmount.md)

***

### createFromBaseUnit()

> `static` **createFromBaseUnit**(`params`): [`ITokenAmount`](../interfaces/ITokenAmount.md)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | [`TokenAmountParameters`](../type-aliases/TokenAmountParameters.md) | Token amount data to create the instance |

#### Returns

[`ITokenAmount`](../interfaces/ITokenAmount.md)

The resulting TokenAmount

`amount` is the integer amount including all the decimals of the token

i.e.: amount in base unit (1eth = 1000000000000000000, 1btc = 100000000, etc...)

#### Name

createFromBaseUnit
