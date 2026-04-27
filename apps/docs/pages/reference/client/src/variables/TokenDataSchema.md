[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / TokenDataSchema

# Variable: TokenDataSchema

> `const` **TokenDataSchema**: `z.ZodObject`\<\{ `address`: `z.ZodObject`\<\{ `type`: `z.ZodNativeEnum`\<[`AddressType`](../enumerations/AddressType.md)\>; `value`: `z.ZodType`\<`` `0x${string}` ``, `z.ZodTypeDef`, `` `0x${string}` ``\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `type`: [`AddressType`](../enumerations/AddressType.md); `value`: `` `0x${string}` ``; \}, \{ `type`: [`AddressType`](../enumerations/AddressType.md); `value`: `` `0x${string}` ``; \}\>; `chainInfo`: `z.ZodObject`\<\{ `chainId`: `z.ZodUnion`\<\[`z.ZodUnion`\<\[`z.ZodLiteral`\<`1` \| `8453` \| `42161` \| `146` \| `999`\>, `z.ZodLiteral`\<`1` \| `8453` \| `42161` \| `146` \| `999`\>, `...z.ZodLiteral<(...)>[]`\]\>, `z.ZodUnion`\<\[`z.ZodLiteral`\<`1` \| `8453` \| `42161` \| `146` \| `10`\>, `z.ZodLiteral`\<`1` \| `8453` \| `42161` \| `146` \| `10`\>, `...z.ZodLiteral<(...)>[]`\]\>\]\>; `name`: `z.ZodString`; \}, `"strip"`, `z.ZodTypeAny`, \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}, \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}\>; `decimals`: `z.ZodNumber`; `logoURI`: `z.ZodOptional`\<`z.ZodNullable`\<`z.ZodString`\>\>; `name`: `z.ZodString`; `symbol`: `z.ZodString`; \}, `"strip"`, `z.ZodTypeAny`, \{ `address`: \{ `type`: [`AddressType`](../enumerations/AddressType.md); `value`: `` `0x${string}` ``; \}; `chainInfo`: \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}; `decimals`: `number`; `logoURI?`: `string` \| `null`; `name`: `string`; `symbol`: `string`; \}, \{ `address`: \{ `type`: [`AddressType`](../enumerations/AddressType.md); `value`: `` `0x${string}` ``; \}; `chainInfo`: \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}; `decimals`: `number`; `logoURI?`: `string` \| `null`; `name`: `string`; `symbol`: `string`; \}\>

## Description

Zod schema for IToken
