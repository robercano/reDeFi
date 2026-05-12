[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / RiskRatioDataSchema

# Variable: RiskRatioDataSchema

> `const` **RiskRatioDataSchema**: `z.ZodObject`\<\{ `type`: `z.ZodNativeEnum`\<*typeof* [`RiskRatioType`](../enumerations/RiskRatioType.md)\>; `value`: `z.ZodUnion`\<\[`z.ZodObject`\<\{ `value`: `z.ZodNumber`; \}, `"strip"`, `z.ZodTypeAny`, \{ `value`: `number`; \}, \{ `value`: `number`; \}\>, `z.ZodNumber`\]\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `type`: [`RiskRatioType`](../enumerations/RiskRatioType.md); `value`: `number` \| \{ `value`: `number`; \}; \}, \{ `type`: [`RiskRatioType`](../enumerations/RiskRatioType.md); `value`: `number` \| \{ `value`: `number`; \}; \}\>

Zod schema for IRiskRatioData
