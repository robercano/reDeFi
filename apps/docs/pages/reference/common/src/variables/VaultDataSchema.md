[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / VaultDataSchema

# Variable: VaultDataSchema

> `const` **VaultDataSchema**: `ZodIntersection`\<`ZodObject`\<\{ `address`: `ZodObject`\<\{ `type`: `ZodNativeEnum`\<*typeof* [`AddressType`](../../../client/src/enumerations/AddressType.md)\>; `value`: `ZodType`\<`` `0x${string}` ``, `ZodTypeDef`, `` `0x${string}` ``\>; \}, `"strip"`, `ZodTypeAny`, \{ `type`: [`AddressType`](../../../client/src/enumerations/AddressType.md); `value`: `` `0x${string}` ``; \}, \{ `type`: [`AddressType`](../../../client/src/enumerations/AddressType.md); `value`: `` `0x${string}` ``; \}\>; `chainInfo`: `ZodObject`\<\{ `chainId`: `ZodUnion`\<\[`ZodUnion`\<\[`ZodLiteral`\<... \| ... \| ... \| ... \| ...\>, `ZodLiteral`\<... \| ... \| ... \| ... \| ...\>, ...ZodLiteral\<(...) \| (...) \| (...) \| (...) \| (...)\>\[\]\]\>, `ZodUnion`\<\[`ZodLiteral`\<... \| ... \| ... \| ... \| ...\>, `ZodLiteral`\<... \| ... \| ... \| ... \| ...\>, ...ZodLiteral\<(...) \| (...) \| (...) \| (...) \| (...)\>\[\]\]\>\]\>; `name`: `ZodString`; \}, `"strip"`, `ZodTypeAny`, \{ `chainId`: `1` \| `10` \| `146` \| `999` \| `8453` \| `42161`; `name`: `string`; \}, \{ `chainId`: `1` \| `10` \| `146` \| `999` \| `8453` \| `42161`; `name`: `string`; \}\>; `decimals`: `ZodNumber`; `logoURI`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `name`: `ZodString`; `symbol`: `ZodString`; \}, `"strip"`, `ZodTypeAny`, \{ `address`: \{ `type`: [`AddressType`](../../../client/src/enumerations/AddressType.md); `value`: `` `0x${string}` ``; \}; `chainInfo`: \{ `chainId`: `1` \| `10` \| `146` \| `999` \| `8453` \| `42161`; `name`: `string`; \}; `decimals`: `number`; `logoURI?`: `string` \| `null`; `name`: `string`; `symbol`: `string`; \}, \{ `address`: \{ `type`: [`AddressType`](../../../client/src/enumerations/AddressType.md); `value`: `` `0x${string}` ``; \}; `chainInfo`: \{ `chainId`: `1` \| `10` \| `146` \| `999` \| `8453` \| `42161`; `name`: `string`; \}; `decimals`: `number`; `logoURI?`: `string` \| `null`; `name`: `string`; `symbol`: `string`; \}\>, `ZodObject`\<\{ `asset`: `ZodType`\<[`IToken`](../interfaces/IToken.md), `ZodTypeDef`, [`IToken`](../interfaces/IToken.md)\>; \}, `"strip"`, `ZodTypeAny`, \{ `asset`: [`IToken`](../interfaces/IToken.md); \}, \{ `asset`: [`IToken`](../interfaces/IToken.md); \}\>\>

## Description

Zod schema for IVault
