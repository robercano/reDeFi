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

##### input

> **input**: `object`

###### input.deserialize

> **deserialize**: (`serializedData`) => `unknown`

###### Parameters

###### serializedData

`string`

###### Returns

`unknown`

###### input.serialize

> **serialize**: (`obj`) => `string`

###### Parameters

###### obj

`unknown`

###### Returns

`string`

##### output

> **output**: `object`

###### output.deserialize

> **deserialize**: (`serializedData`) => `unknown`

###### Parameters

###### serializedData

`string`

###### Returns

`unknown`

###### output.serialize

> **serialize**: (`obj`) => `string`

###### Parameters

###### obj

`unknown`

###### Returns

`string`

***

### parse()

> `static` **parse**\<`T`\>(`v`): `T`

#### Type Parameters

##### T

`T`

#### Parameters

##### v

`string`

#### Returns

`T`

***

### registerClass()

> `static` **registerClass**(`v`, `options?`): `void`

#### Parameters

##### v

`object`

##### options?

`string` \| `RegisterOptions`

#### Returns

`void`

***

### registerCustom()

> `static` **registerCustom**\<`I`, `O`\>(`transformer`, `name`): `void`

#### Type Parameters

##### I

`I`

##### O

`O` *extends* `JSONValue`

#### Parameters

##### transformer

`Omit`\<`CustomTransfomer`\<`I`, `O`\>, `"name"`\>

##### name

`string`

#### Returns

`void`

***

### stringify()

> `static` **stringify**(`v`): `string`

#### Parameters

##### v

`unknown`

#### Returns

`string`
