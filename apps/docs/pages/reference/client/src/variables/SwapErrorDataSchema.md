[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / SwapErrorDataSchema

# Variable: SwapErrorDataSchema

> `const` **SwapErrorDataSchema**: `ZodObject`\<\{ `apiQuery`: `ZodString`; `message`: `ZodString`; `reason`: `ZodString`; `statusCode`: `ZodNumber`; `subtype`: `ZodNativeEnum`\<*typeof* [`SwapErrorType`](../enumerations/SwapErrorType.md)\>; `type`: `ZodLiteral`\<[`SwapError`](../enumerations/SDKErrorType.md#swaperror)\>; \}, `"strip"`, `ZodTypeAny`, \{ `apiQuery`: `string`; `message`: `string`; `reason`: `string`; `statusCode`: `number`; `subtype`: [`SwapErrorType`](../enumerations/SwapErrorType.md); `type`: [`SwapError`](../enumerations/SDKErrorType.md#swaperror); \}, \{ `apiQuery`: `string`; `message`: `string`; `reason`: `string`; `statusCode`: `number`; `subtype`: [`SwapErrorType`](../enumerations/SwapErrorType.md); `type`: [`SwapError`](../enumerations/SDKErrorType.md#swaperror); \}\>

Zod schema for ISwapError
