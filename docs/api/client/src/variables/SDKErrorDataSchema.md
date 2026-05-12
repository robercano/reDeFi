[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / SDKErrorDataSchema

# Variable: SDKErrorDataSchema

> `const` **SDKErrorDataSchema**: `z.ZodObject`\<\{ `message`: `z.ZodString`; `reason`: `z.ZodString`; `type`: `z.ZodNativeEnum`\<*typeof* [`SDKErrorType`](../../../common/src/enumerations/SDKErrorType.md)\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `message`: `string`; `reason`: `string`; `type`: [`SDKErrorType`](../../../common/src/enumerations/SDKErrorType.md); \}, \{ `message`: `string`; `reason`: `string`; `type`: [`SDKErrorType`](../../../common/src/enumerations/SDKErrorType.md); \}\>

Zod schema for ISDKError
