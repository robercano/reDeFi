[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / ExternalLendingPositionIdDataSchema

# Variable: ExternalLendingPositionIdDataSchema

> `const` **ExternalLendingPositionIdDataSchema**: `ZodObject`\<\{ `address`: `ZodType`\<[`IAddress`](../interfaces/IAddress.md), `ZodTypeDef`, [`IAddress`](../interfaces/IAddress.md)\>; `externalType`: `ZodNativeEnum`\<*typeof* [`ExternalLendingPositionType`](../../../client/src/enumerations/ExternalLendingPositionType.md)\>; `id`: `ZodString`; `protocolId`: `ZodType`\<[`ILendingPositionId`](../interfaces/ILendingPositionId.md), `ZodTypeDef`, [`ILendingPositionId`](../interfaces/ILendingPositionId.md)\>; `type`: `ZodLiteral`\<`Lending`\>; \}, `"strip"`, `ZodTypeAny`, \{ `address`: [`IAddress`](../interfaces/IAddress.md); `externalType`: [`ExternalLendingPositionType`](../../../client/src/enumerations/ExternalLendingPositionType.md); `id`: `string`; `protocolId`: [`ILendingPositionId`](../interfaces/ILendingPositionId.md); `type`: `Lending`; \}, \{ `address`: [`IAddress`](../interfaces/IAddress.md); `externalType`: [`ExternalLendingPositionType`](../../../client/src/enumerations/ExternalLendingPositionType.md); `id`: `string`; `protocolId`: [`ILendingPositionId`](../interfaces/ILendingPositionId.md); `type`: `Lending`; \}\>

## Description

Zod schema for IExternalPositionId
