[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / Address

# Class: Address

Address

## See

IAddress

## Implements

- [`IAddress`](../interfaces/IAddress.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

[`IAddress`](../interfaces/IAddress.md).[`[___signature__]`](../interfaces/IAddress.md#___signature__)

***

### type

> `readonly` **type**: [`AddressType`](../enumerations/AddressType.md)

The type of the address

#### Implementation of

[`IAddress`](../interfaces/IAddress.md).[`type`](../interfaces/IAddress.md#type)

***

### value

> `readonly` **value**: `` `0x${string}` ``

ATTRIBUTES

#### Implementation of

[`IAddress`](../interfaces/IAddress.md).[`value`](../interfaces/IAddress.md#value)

***

### ZeroAddressEthereum

> `static` **ZeroAddressEthereum**: `Address`

CONSTANTS

## Methods

### equals()

> **equals**(`address`): `boolean`

PUBLIC METHODS

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `address` | `Address` |

#### Returns

`boolean`

#### Implementation of

[`IAddress`](../interfaces/IAddress.md).[`equals`](../interfaces/IAddress.md#equals)

***

### toBigNumber()

> **toBigNumber**(): `BigNumber`

#### Returns

`BigNumber`

#### See

IValueConverter.toBigNumber

***

### toSolidityValue()

> **toSolidityValue**(): `` `0x${string}` ``

#### Returns

`` `0x${string}` ``

#### See

IValueConverter.toBigNumber

#### Implementation of

[`IAddress`](../interfaces/IAddress.md).[`toSolidityValue`](../interfaces/IAddress.md#tosolidityvalue)

***

### toString()

> **toString**(): `string`

#### Returns

`string`

#### See

IPrintable.toString

#### Implementation of

[`IAddress`](../interfaces/IAddress.md).[`toString`](../interfaces/IAddress.md#tostring)

***

### createFrom()

> `static` **createFrom**(`params`): `Address`

FACTORY METHODS

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`AddressParameters`](../type-aliases/AddressParameters.md) |

#### Returns

`Address`

***

### createFromEthereum()

> `static` **createFromEthereum**(`params`): `Address`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `value`: `string`; \} |
| `params.value` | `string` |

#### Returns

`Address`

***

### getType()

> `static` **getType**(`address`): [`AddressType`](../enumerations/AddressType.md)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `address` | `string` |

#### Returns

[`AddressType`](../enumerations/AddressType.md)

***

### isValid()

> `static` **isValid**(`address`): `boolean`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `address` | `string` |

#### Returns

`boolean`
