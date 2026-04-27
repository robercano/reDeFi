[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / ImportSimulationSchema

# Variable: ImportSimulationSchema

> `const` **ImportSimulationSchema**: `ZodObject`\<\{ `sourcePosition`: `ZodType`\<[`IExternalLendingPosition`](../interfaces/IExternalLendingPosition.md), `ZodTypeDef`, [`IExternalLendingPosition`](../interfaces/IExternalLendingPosition.md)\>; `steps`: `ZodArray`\<`ZodType`\<`Steps`, `ZodTypeDef`, `Steps`\>, `"many"`\>; `targetPosition`: `ZodType`\<[`ILendingPosition`](../interfaces/ILendingPosition.md), `ZodTypeDef`, [`ILendingPosition`](../interfaces/ILendingPosition.md)\>; `type`: `ZodLiteral`\<`ImportPosition`\>; \}, `"strip"`, `ZodTypeAny`, \{ `sourcePosition`: [`IExternalLendingPosition`](../interfaces/IExternalLendingPosition.md); `steps`: `Steps`[]; `targetPosition`: [`ILendingPosition`](../interfaces/ILendingPosition.md); `type`: `ImportPosition`; \}, \{ `sourcePosition`: [`IExternalLendingPosition`](../interfaces/IExternalLendingPosition.md); `steps`: `Steps`[]; `targetPosition`: [`ILendingPosition`](../interfaces/ILendingPosition.md); `type`: `ImportPosition`; \}\>

## Description

Zod schema for IImportSimulation
