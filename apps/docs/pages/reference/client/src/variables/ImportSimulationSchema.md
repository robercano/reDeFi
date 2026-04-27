[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / ImportSimulationSchema

# Variable: ImportSimulationSchema

> `const` **ImportSimulationSchema**: `z.ZodObject`\<\{ `sourcePosition`: `z.ZodType`\<[`IExternalLendingPosition`](../interfaces/IExternalLendingPosition.md), `z.ZodTypeDef`, [`IExternalLendingPosition`](../interfaces/IExternalLendingPosition.md)\>; `steps`: `z.ZodArray`\<`z.ZodType`\<[`Steps`](../namespaces/steps/type-aliases/Steps.md), `z.ZodTypeDef`, [`Steps`](../namespaces/steps/type-aliases/Steps.md)\>, `"many"`\>; `targetPosition`: `z.ZodType`\<[`ILendingPosition`](../interfaces/ILendingPosition.md), `z.ZodTypeDef`, [`ILendingPosition`](../interfaces/ILendingPosition.md)\>; `type`: `z.ZodLiteral`\<[`ImportPosition`](../enumerations/SimulationType.md#importposition)\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `sourcePosition`: [`IExternalLendingPosition`](../interfaces/IExternalLendingPosition.md); `steps`: [`Steps`](../namespaces/steps/type-aliases/Steps.md)[]; `targetPosition`: [`ILendingPosition`](../interfaces/ILendingPosition.md); `type`: [`ImportPosition`](../enumerations/SimulationType.md#importposition); \}, \{ `sourcePosition`: [`IExternalLendingPosition`](../interfaces/IExternalLendingPosition.md); `steps`: [`Steps`](../namespaces/steps/type-aliases/Steps.md)[]; `targetPosition`: [`ILendingPosition`](../interfaces/ILendingPosition.md); `type`: [`ImportPosition`](../enumerations/SimulationType.md#importposition); \}\>

## Description

Zod schema for IImportSimulation
