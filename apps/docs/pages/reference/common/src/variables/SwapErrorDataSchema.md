[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / SwapErrorDataSchema

# Variable: SwapErrorDataSchema

> `const` **SwapErrorDataSchema**: `ZodObject`\<\{ `apiQuery`: `ZodString`; `message`: `ZodString`; `reason`: `ZodString`; `statusCode`: `ZodNumber`; `subtype`: `ZodNativeEnum`\<*typeof* [`SwapErrorType`](../../../client/src/enumerations/SwapErrorType.md)\>; `type`: `ZodLiteral`\<`SwapError`\>; \}, `"strip"`, `ZodTypeAny`, \{ `apiQuery`: `string`; `message`: `string`; `reason`: `string`; `statusCode`: `number`; `subtype`: [`SwapErrorType`](../../../client/src/enumerations/SwapErrorType.md); `type`: `SwapError`; \}, \{ `apiQuery`: `string`; `message`: `string`; `reason`: `string`; `statusCode`: `number`; `subtype`: [`SwapErrorType`](../../../client/src/enumerations/SwapErrorType.md); `type`: `SwapError`; \}\>

## Description

Zod schema for ISwapError
