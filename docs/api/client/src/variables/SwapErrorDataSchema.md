[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / SwapErrorDataSchema

# Variable: SwapErrorDataSchema

> `const` **SwapErrorDataSchema**: `z.ZodObject`\<\{ `apiQuery`: `z.ZodString`; `message`: `z.ZodString`; `reason`: `z.ZodString`; `statusCode`: `z.ZodNumber`; `subtype`: `z.ZodNativeEnum`\<*typeof* [`SwapErrorType`](../../../common/src/enumerations/SwapErrorType.md)\>; `type`: `z.ZodLiteral`\<`SDKErrorType.SwapError`\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `apiQuery`: `string`; `message`: `string`; `reason`: `string`; `statusCode`: `number`; `subtype`: [`SwapErrorType`](../../../common/src/enumerations/SwapErrorType.md); `type`: `SDKErrorType.SwapError`; \}, \{ `apiQuery`: `string`; `message`: `string`; `reason`: `string`; `statusCode`: `number`; `subtype`: [`SwapErrorType`](../../../common/src/enumerations/SwapErrorType.md); `type`: `SDKErrorType.SwapError`; \}\>

Zod schema for ISwapError
