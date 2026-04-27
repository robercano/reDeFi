[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / PoolInfoDataSchema

# Variable: PoolInfoDataSchema

> `const` **PoolInfoDataSchema**: `z.ZodObject`\<\{ `id`: `z.ZodObject`\<\{ `protocol`: `z.ZodType`\<[`IProtocol`](../interfaces/IProtocol.md), `z.ZodTypeDef`, [`IProtocol`](../interfaces/IProtocol.md)\>; `type`: `z.ZodNativeEnum`\<*typeof* [`PoolType`](../enumerations/PoolType.md)\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `protocol`: [`IProtocol`](../interfaces/IProtocol.md); `type`: [`PoolType`](../enumerations/PoolType.md); \}, \{ `protocol`: [`IProtocol`](../interfaces/IProtocol.md); `type`: [`PoolType`](../enumerations/PoolType.md); \}\>; `type`: `z.ZodNativeEnum`\<*typeof* [`PoolType`](../enumerations/PoolType.md)\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `id`: \{ `protocol`: [`IProtocol`](../interfaces/IProtocol.md); `type`: [`PoolType`](../enumerations/PoolType.md); \}; `type`: [`PoolType`](../enumerations/PoolType.md); \}, \{ `id`: \{ `protocol`: [`IProtocol`](../interfaces/IProtocol.md); `type`: [`PoolType`](../enumerations/PoolType.md); \}; `type`: [`PoolType`](../enumerations/PoolType.md); \}\>

## Description

Zod schema for IPoolInfo
