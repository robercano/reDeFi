[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / ExternalLendingPositionIdDataSchema

# Variable: ExternalLendingPositionIdDataSchema

> `const` **ExternalLendingPositionIdDataSchema**: `z.ZodObject`\<\{ `address`: `z.ZodType`\<[`IAddress`](../interfaces/IAddress.md), `z.ZodTypeDef`, [`IAddress`](../interfaces/IAddress.md)\>; `externalType`: `z.ZodNativeEnum`\<*typeof* [`ExternalLendingPositionType`](../enumerations/ExternalLendingPositionType.md)\>; `id`: `z.ZodString`; `protocolId`: `z.ZodType`\<[`ILendingPositionId`](../interfaces/ILendingPositionId.md), `z.ZodTypeDef`, [`ILendingPositionId`](../interfaces/ILendingPositionId.md)\>; `type`: `z.ZodLiteral`\<[`Lending`](../enumerations/PositionType.md#lending)\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `address`: [`IAddress`](../interfaces/IAddress.md); `externalType`: [`ExternalLendingPositionType`](../enumerations/ExternalLendingPositionType.md); `id`: `string`; `protocolId`: [`ILendingPositionId`](../interfaces/ILendingPositionId.md); `type`: [`Lending`](../enumerations/PositionType.md#lending); \}, \{ `address`: [`IAddress`](../interfaces/IAddress.md); `externalType`: [`ExternalLendingPositionType`](../enumerations/ExternalLendingPositionType.md); `id`: `string`; `protocolId`: [`ILendingPositionId`](../interfaces/ILendingPositionId.md); `type`: [`Lending`](../enumerations/PositionType.md#lending); \}\>

## Description

Zod schema for IExternalPositionId
