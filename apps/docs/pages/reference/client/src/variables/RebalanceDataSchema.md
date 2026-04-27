[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / RebalanceDataSchema

# Variable: RebalanceDataSchema

> `const` **RebalanceDataSchema**: `ZodObject`\<\{ `amount`: `ZodObject`\<\{ `amount`: `ZodString`; `token`: `ZodType`\<[`IToken`](../interfaces/IToken.md), `ZodTypeDef`, [`IToken`](../interfaces/IToken.md)\>; \}, `"strip"`, `ZodTypeAny`, \{ `amount`: `string`; `token`: [`IToken`](../interfaces/IToken.md); \}, \{ `amount`: `string`; `token`: [`IToken`](../interfaces/IToken.md); \}\>; `fromArk`: `ZodObject`\<\{ `type`: `ZodNativeEnum`\<*typeof* [`AddressType`](../enumerations/AddressType.md)\>; `value`: `ZodType`\<`` `0x${string}` ``, `ZodTypeDef`, `` `0x${string}` ``\>; \}, `"strip"`, `ZodTypeAny`, \{ `type`: [`AddressType`](../enumerations/AddressType.md); `value`: `` `0x${string}` ``; \}, \{ `type`: [`AddressType`](../enumerations/AddressType.md); `value`: `` `0x${string}` ``; \}\>; `toArk`: `ZodObject`\<\{ `type`: `ZodNativeEnum`\<*typeof* [`AddressType`](../enumerations/AddressType.md)\>; `value`: `ZodType`\<`` `0x${string}` ``, `ZodTypeDef`, `` `0x${string}` ``\>; \}, `"strip"`, `ZodTypeAny`, \{ `type`: [`AddressType`](../enumerations/AddressType.md); `value`: `` `0x${string}` ``; \}, \{ `type`: [`AddressType`](../enumerations/AddressType.md); `value`: `` `0x${string}` ``; \}\>; \}, `"strip"`, `ZodTypeAny`, \{ `amount`: \{ `amount`: `string`; `token`: [`IToken`](../interfaces/IToken.md); \}; `fromArk`: \{ `type`: [`AddressType`](../enumerations/AddressType.md); `value`: `` `0x${string}` ``; \}; `toArk`: \{ `type`: [`AddressType`](../enumerations/AddressType.md); `value`: `` `0x${string}` ``; \}; \}, \{ `amount`: \{ `amount`: `string`; `token`: [`IToken`](../interfaces/IToken.md); \}; `fromArk`: \{ `type`: [`AddressType`](../enumerations/AddressType.md); `value`: `` `0x${string}` ``; \}; `toArk`: \{ `type`: [`AddressType`](../enumerations/AddressType.md); `value`: `` `0x${string}` ``; \}; \}\>

## Description

Zod schema for IRebalanceData
