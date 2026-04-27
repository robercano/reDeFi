[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / RiskRatioDataSchema

# Variable: RiskRatioDataSchema

> `const` **RiskRatioDataSchema**: `ZodObject`\<\{ `type`: `ZodNativeEnum`\<*typeof* [`RiskRatioType`](../enumerations/RiskRatioType.md)\>; `value`: `ZodUnion`\<\[`ZodObject`\<\{ `value`: `ZodNumber`; \}, `"strip"`, `ZodTypeAny`, \{ `value`: `number`; \}, \{ `value`: `number`; \}\>, `ZodNumber`\]\>; \}, `"strip"`, `ZodTypeAny`, \{ `type`: [`RiskRatioType`](../enumerations/RiskRatioType.md); `value`: `number` \| \{ `value`: `number`; \}; \}, \{ `type`: [`RiskRatioType`](../enumerations/RiskRatioType.md); `value`: `number` \| \{ `value`: `number`; \}; \}\>

## Description

Zod schema for IRiskRatioData
