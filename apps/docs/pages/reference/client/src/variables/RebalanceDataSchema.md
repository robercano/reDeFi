[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / RebalanceDataSchema

# Variable: RebalanceDataSchema

> `const` **RebalanceDataSchema**: `z.ZodObject`\<\{ `amount`: `z.ZodObject`\<\{ `amount`: `z.ZodString`; `token`: `z.ZodType`\<[`IToken`](../interfaces/IToken.md), `z.ZodTypeDef`, [`IToken`](../interfaces/IToken.md)\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `amount`: `string`; `token`: [`IToken`](../interfaces/IToken.md); \}, \{ `amount`: `string`; `token`: [`IToken`](../interfaces/IToken.md); \}\>; `fromArk`: `z.ZodObject`\<\{ `type`: `z.ZodNativeEnum`\<[`AddressType`](../enumerations/AddressType.md)\>; `value`: `z.ZodType`\<`` `0x${string}` ``, `z.ZodTypeDef`, `` `0x${string}` ``\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `type`: [`AddressType`](../enumerations/AddressType.md); `value`: `` `0x${string}` ``; \}, \{ `type`: [`AddressType`](../enumerations/AddressType.md); `value`: `` `0x${string}` ``; \}\>; `toArk`: `z.ZodObject`\<\{ `type`: `z.ZodNativeEnum`\<[`AddressType`](../enumerations/AddressType.md)\>; `value`: `z.ZodType`\<`` `0x${string}` ``, `z.ZodTypeDef`, `` `0x${string}` ``\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `type`: [`AddressType`](../enumerations/AddressType.md); `value`: `` `0x${string}` ``; \}, \{ `type`: [`AddressType`](../enumerations/AddressType.md); `value`: `` `0x${string}` ``; \}\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `amount`: \{ `amount`: `string`; `token`: [`IToken`](../interfaces/IToken.md); \}; `fromArk`: \{ `type`: [`AddressType`](../enumerations/AddressType.md); `value`: `` `0x${string}` ``; \}; `toArk`: \{ `type`: [`AddressType`](../enumerations/AddressType.md); `value`: `` `0x${string}` ``; \}; \}, \{ `amount`: \{ `amount`: `string`; `token`: [`IToken`](../interfaces/IToken.md); \}; `fromArk`: \{ `type`: [`AddressType`](../enumerations/AddressType.md); `value`: `` `0x${string}` ``; \}; `toArk`: \{ `type`: [`AddressType`](../enumerations/AddressType.md); `value`: `` `0x${string}` ``; \}; \}\>

## Description

Zod schema for IRebalanceData
