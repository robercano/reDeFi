[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / DenominationDataSchema

# Variable: DenominationDataSchema

> `const` **DenominationDataSchema**: `z.ZodUnion`\<\[`z.ZodObject`\<\{ `address`: `z.ZodObject`\<\{ `type`: `z.ZodNativeEnum`\<[`AddressType`](../../../common/src/enumerations/AddressType.md)\>; `value`: `z.ZodType`\<`` `0x${string}` ``, `z.ZodTypeDef`, `` `0x${string}` ``\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `type`: [`AddressType`](../../../common/src/enumerations/AddressType.md); `value`: `` `0x${string}` ``; \}, \{ `type`: [`AddressType`](../../../common/src/enumerations/AddressType.md); `value`: `` `0x${string}` ``; \}\>; `chainInfo`: `z.ZodObject`\<\{ `chainId`: `z.ZodUnion`\<\[`z.ZodUnion`\<\[`z.ZodLiteral`\<...\>, `z.ZodLiteral`\<...\>, `...(...)`\]\>, `z.ZodUnion`\<\[`z.ZodLiteral`\<...\>, `z.ZodLiteral`\<...\>, `...(...)`\]\>\]\>; `name`: `z.ZodString`; \}, `"strip"`, `z.ZodTypeAny`, \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}, \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}\>; `decimals`: `z.ZodNumber`; `logoURI`: `z.ZodOptional`\<`z.ZodNullable`\<`z.ZodString`\>\>; `name`: `z.ZodString`; `symbol`: `z.ZodString`; \}, `"strip"`, `z.ZodTypeAny`, \{ `address`: \{ `type`: [`AddressType`](../../../common/src/enumerations/AddressType.md); `value`: `` `0x${string}` ``; \}; `chainInfo`: \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}; `decimals`: `number`; `logoURI?`: `string` \| `null`; `name`: `string`; `symbol`: `string`; \}, \{ `address`: \{ `type`: [`AddressType`](../../../common/src/enumerations/AddressType.md); `value`: `` `0x${string}` ``; \}; `chainInfo`: \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}; `decimals`: `number`; `logoURI?`: `string` \| `null`; `name`: `string`; `symbol`: `string`; \}\>, `z.ZodNativeEnum`\<*typeof* [`FiatCurrency`](../../../common/src/enumerations/FiatCurrency.md)\>\]\>

Zod schema for Denomination
