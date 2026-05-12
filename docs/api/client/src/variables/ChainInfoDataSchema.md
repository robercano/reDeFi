[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / ChainInfoDataSchema

# Variable: ChainInfoDataSchema

> `const` **ChainInfoDataSchema**: `z.ZodObject`\<\{ `chainId`: `z.ZodUnion`\<\[`z.ZodUnion`\<\[`z.ZodLiteral`\<`1` \| `8453` \| `42161` \| `146` \| `999`\>, `z.ZodLiteral`\<`1` \| `8453` \| `42161` \| `146` \| `999`\>, ...z.ZodLiteral\<1 \| 8453 \| 42161 \| 146 \| 999\>\[\]\]\>, `z.ZodUnion`\<\[`z.ZodLiteral`\<`1` \| `8453` \| `42161` \| `146` \| `10`\>, `z.ZodLiteral`\<`1` \| `8453` \| `42161` \| `146` \| `10`\>, ...z.ZodLiteral\<1 \| 8453 \| 42161 \| 146 \| 10\>\[\]\]\>\]\>; `name`: `z.ZodString`; \}, `"strip"`, `z.ZodTypeAny`, \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}, \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}\>

Zod schema for IChainInfo
