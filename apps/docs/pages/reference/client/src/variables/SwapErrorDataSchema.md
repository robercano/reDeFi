[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / SwapErrorDataSchema

# Variable: SwapErrorDataSchema

> `const` **SwapErrorDataSchema**: `z.ZodObject`\<\{ `apiQuery`: `z.ZodString`; `message`: `z.ZodString`; `reason`: `z.ZodString`; `statusCode`: `z.ZodNumber`; `subtype`: `z.ZodNativeEnum`\<*typeof* [`SwapErrorType`](../enumerations/SwapErrorType.md)\>; `type`: `z.ZodLiteral`\<[`SwapError`](../enumerations/SDKErrorType.md#swaperror)\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `apiQuery`: `string`; `message`: `string`; `reason`: `string`; `statusCode`: `number`; `subtype`: [`SwapErrorType`](../enumerations/SwapErrorType.md); `type`: [`SwapError`](../enumerations/SDKErrorType.md#swaperror); \}, \{ `apiQuery`: `string`; `message`: `string`; `reason`: `string`; `statusCode`: `number`; `subtype`: [`SwapErrorType`](../enumerations/SwapErrorType.md); `type`: [`SwapError`](../enumerations/SDKErrorType.md#swaperror); \}\>

## Description

Zod schema for ISwapError
