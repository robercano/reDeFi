[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / SerializationService

# Class: SerializationService

## Constructors

### Constructor

> **new SerializationService**(): `SerializationService`

#### Returns

`SerializationService`

## Methods

### getTransformer()

> `static` **getTransformer**(): `object`

#### Returns

`object`

| Name | Type |
| ------ | ------ |
| `input` | `object` |
| `input.deserialize()` | (`serializedData`) => `unknown` |
| `input.serialize()` | (`obj`) => `string` |
| `output` | `object` |
| `output.deserialize()` | (`serializedData`) => `unknown` |
| `output.serialize()` | (`obj`) => `string` |

***

### parse()

> `static` **parse**\<`T`\>(`v`): `T`

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `string` |

#### Returns

`T`

***

### registerClass()

> `static` **registerClass**(`v`, `options?`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `object` |
| `options?` | `string` \| `RegisterOptions` |

#### Returns

`void`

***

### registerCustom()

> `static` **registerCustom**\<`I`, `O`\>(`transformer`, `name`): `void`

#### Type Parameters

| Type Parameter |
| ------ |
| `I` |
| `O` *extends* `JSONValue` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `transformer` | `Omit`\<`CustomTransfomer`\<`I`, `O`\>, `"name"`\> |
| `name` | `string` |

#### Returns

`void`

***

### stringify()

> `static` **stringify**(`v`): `string`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `unknown` |

#### Returns

`string`
