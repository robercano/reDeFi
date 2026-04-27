[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / PositionsManagerDataSchema

# Variable: PositionsManagerDataSchema

> `const` **PositionsManagerDataSchema**: `z.ZodObject`\<\{ `address`: `z.ZodObject`\<\{ `type`: `z.ZodNativeEnum`\<[`AddressType`](../enumerations/AddressType.md)\>; `value`: `z.ZodType`\<`` `0x${string}` ``, `z.ZodTypeDef`, `` `0x${string}` ``\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `type`: [`AddressType`](../enumerations/AddressType.md); `value`: `` `0x${string}` ``; \}, \{ `type`: [`AddressType`](../enumerations/AddressType.md); `value`: `` `0x${string}` ``; \}\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `address`: \{ `type`: [`AddressType`](../enumerations/AddressType.md); `value`: `` `0x${string}` ``; \}; \}, \{ `address`: \{ `type`: [`AddressType`](../enumerations/AddressType.md); `value`: `` `0x${string}` ``; \}; \}\>

## Description

Zod schema for IPositionsManager
