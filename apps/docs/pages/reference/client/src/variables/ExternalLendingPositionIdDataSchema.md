[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / ExternalLendingPositionIdDataSchema

# Variable: ExternalLendingPositionIdDataSchema

> `const` **ExternalLendingPositionIdDataSchema**: `ZodObject`\<\{ `address`: `ZodType`\<[`IAddress`](../interfaces/IAddress.md), `ZodTypeDef`, [`IAddress`](../interfaces/IAddress.md)\>; `externalType`: `ZodNativeEnum`\<*typeof* [`ExternalLendingPositionType`](../enumerations/ExternalLendingPositionType.md)\>; `id`: `ZodString`; `protocolId`: `ZodType`\<[`ILendingPositionId`](../interfaces/ILendingPositionId.md), `ZodTypeDef`, [`ILendingPositionId`](../interfaces/ILendingPositionId.md)\>; `type`: `ZodLiteral`\<[`Lending`](../enumerations/PositionType.md#lending)\>; \}, `"strip"`, `ZodTypeAny`, \{ `address`: [`IAddress`](../interfaces/IAddress.md); `externalType`: [`ExternalLendingPositionType`](../enumerations/ExternalLendingPositionType.md); `id`: `string`; `protocolId`: [`ILendingPositionId`](../interfaces/ILendingPositionId.md); `type`: [`Lending`](../enumerations/PositionType.md#lending); \}, \{ `address`: [`IAddress`](../interfaces/IAddress.md); `externalType`: [`ExternalLendingPositionType`](../enumerations/ExternalLendingPositionType.md); `id`: `string`; `protocolId`: [`ILendingPositionId`](../interfaces/ILendingPositionId.md); `type`: [`Lending`](../enumerations/PositionType.md#lending); \}\>

## Description

Zod schema for IExternalPositionId
