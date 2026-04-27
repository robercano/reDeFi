[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / ExternalLendingPositionId

# Class: ExternalLendingPositionId

## Name

ExternalLendingPositionId

## See

IExternalLendingPositionId

## Extends

- [`LendingPositionId`](LendingPositionId.md)

## Implements

- [`IExternalLendingPositionId`](../interfaces/IExternalLendingPositionId.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

[`IExternalLendingPositionId`](../interfaces/IExternalLendingPositionId.md).[`[___signature__]`](../interfaces/IExternalLendingPositionId.md#___signature__-2)

#### Inherited from

[`LendingPositionId`](LendingPositionId.md).[`[___signature__]`](LendingPositionId.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

`IExternalLendingPositionId.[___signature__]`

#### Inherited from

`LendingPositionId.[___signature__]`

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

`IExternalLendingPositionId.[___signature__]`

#### Inherited from

`LendingPositionId.[___signature__]`

***

### address

> `readonly` **address**: [`IAddress`](../interfaces/IAddress.md)

Address of the owner of the position

#### Implementation of

[`IExternalLendingPositionId`](../interfaces/IExternalLendingPositionId.md).[`address`](../interfaces/IExternalLendingPositionId.md#address)

***

### externalType

> `readonly` **externalType**: [`ExternalLendingPositionType`](../../../client/src/enumerations/ExternalLendingPositionType.md)

ATTRIBUTES

#### Implementation of

[`IExternalLendingPositionId`](../interfaces/IExternalLendingPositionId.md).[`externalType`](../interfaces/IExternalLendingPositionId.md#externaltype)

***

### id

> `readonly` **id**: `string`

ATTRIBUTES

#### Implementation of

[`IExternalLendingPositionId`](../interfaces/IExternalLendingPositionId.md).[`id`](../interfaces/IExternalLendingPositionId.md#id)

#### Inherited from

[`LendingPositionId`](LendingPositionId.md).[`id`](LendingPositionId.md#id)

***

### protocolId

> `readonly` **protocolId**: [`ILendingPositionId`](../interfaces/ILendingPositionId.md)

ID of the lending protocol

#### Implementation of

[`IExternalLendingPositionId`](../interfaces/IExternalLendingPositionId.md).[`protocolId`](../interfaces/IExternalLendingPositionId.md#protocolid)

***

### type

> `readonly` **type**: `Lending` = `PositionType.Lending`

ATTRIBUTES

#### Implementation of

[`IExternalLendingPositionId`](../interfaces/IExternalLendingPositionId.md).[`type`](../interfaces/IExternalLendingPositionId.md#type)

#### Inherited from

[`LendingPositionId`](LendingPositionId.md).[`type`](LendingPositionId.md#type)

## Methods

### toString()

> **toString**(): `string`

#### Returns

`string`

#### See

IPrintable.toString

#### Implementation of

[`IExternalLendingPositionId`](../interfaces/IExternalLendingPositionId.md).[`toString`](../interfaces/IExternalLendingPositionId.md#tostring)

#### Overrides

[`LendingPositionId`](LendingPositionId.md).[`toString`](LendingPositionId.md#tostring)

***

### createFrom()

> `static` **createFrom**(`params`): `ExternalLendingPositionId`

FACTORY

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`ExternalLendingPositionIdParameters`](../type-aliases/ExternalLendingPositionIdParameters.md) |

#### Returns

`ExternalLendingPositionId`
