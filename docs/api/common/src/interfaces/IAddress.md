[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / IAddress

# Interface: IAddress

IAddress
Represents an address with a certain format, specified by the type

Currently only Ethereum type is supported

## Extends

- [`IAddressData`](../type-aliases/IAddressData.md).[`IPrintable`](IPrintable.md).`ISolidityValue`\<[`AddressValue`](../type-aliases/AddressValue.md)\>

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

***

### type

> `readonly` **type**: [`AddressType`](../enumerations/AddressType.md)

The type of the address

#### Overrides

`IAddressData.type`

***

### value

> `readonly` **value**: `` `0x${string}` ``

The address value in the format specified by type

#### Overrides

`IAddressData.value`

## Methods

### equals()

> **equals**(`address`): `boolean`

equals
Checks if two addresses are equal

#### Parameters

##### address

`IAddress`

The address to compare

#### Returns

`boolean`

true if the addresses are equal

Equality is determined by the address value and type

***

### toSolidityValue()

> **toSolidityValue**(): `` `0x${string}` ``

Converts the instance into a Solidity value

#### Returns

`` `0x${string}` ``

#### Inherited from

`ISolidityValue.toSolidityValue`

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
