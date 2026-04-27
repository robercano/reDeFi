[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / IExternalLendingPositionId

# Interface: IExternalLendingPositionId

IExternalPositionId

## Description

Identifier for an external position to a lending protocol

## Extends

- [`IExternalLendingPositionIdData`](../type-aliases/IExternalLendingPositionIdData.md).[`ILendingPositionId`](ILendingPositionId.md).[`IPrintable`](../../../client/src/interfaces/IPrintable.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature used to differentiate it from similar interfaces

#### Inherited from

[`ILendingPositionId`](ILendingPositionId.md).[`[___signature__]`](ILendingPositionId.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

#### Inherited from

`ILendingPositionId.[___signature__]`

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

#### Inherited from

`ILendingPositionId.[___signature__]`

***

### address

> `readonly` **address**: [`IAddress`](IAddress.md)

Address of the owner of the position

#### Overrides

`IExternalLendingPositionIdData.address`

***

### externalType

> `readonly` **externalType**: [`ExternalLendingPositionType`](../../../client/src/enumerations/ExternalLendingPositionType.md)

Type of the position

#### Overrides

`IExternalLendingPositionIdData.externalType`

***

### id

> `readonly` **id**: `string`

#### Inherited from

[`ILendingPositionId`](ILendingPositionId.md).[`id`](ILendingPositionId.md#id)

***

### protocolId

> `readonly` **protocolId**: [`ILendingPositionId`](ILendingPositionId.md)

ID of the lending protocol

#### Overrides

`IExternalLendingPositionIdData.protocolId`

***

### type

> `readonly` **type**: `Lending`

Type of the position

#### Inherited from

[`ILendingPositionId`](ILendingPositionId.md).[`type`](ILendingPositionId.md#type)

## Methods

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
