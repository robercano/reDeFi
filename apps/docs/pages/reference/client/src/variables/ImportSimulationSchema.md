[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / ImportSimulationSchema

# Variable: ImportSimulationSchema

> `const` **ImportSimulationSchema**: `ZodObject`\<\{ `sourcePosition`: `ZodType`\<[`IExternalLendingPosition`](../interfaces/IExternalLendingPosition.md), `ZodTypeDef`, [`IExternalLendingPosition`](../interfaces/IExternalLendingPosition.md)\>; `steps`: `ZodArray`\<`ZodType`\<[`Steps`](../namespaces/steps/type-aliases/Steps.md), `ZodTypeDef`, [`Steps`](../namespaces/steps/type-aliases/Steps.md)\>, `"many"`\>; `targetPosition`: `ZodType`\<[`ILendingPosition`](../interfaces/ILendingPosition.md), `ZodTypeDef`, [`ILendingPosition`](../interfaces/ILendingPosition.md)\>; `type`: `ZodLiteral`\<[`ImportPosition`](../enumerations/SimulationType.md#importposition)\>; \}, `"strip"`, `ZodTypeAny`, \{ `sourcePosition`: [`IExternalLendingPosition`](../interfaces/IExternalLendingPosition.md); `steps`: [`Steps`](../namespaces/steps/type-aliases/Steps.md)[]; `targetPosition`: [`ILendingPosition`](../interfaces/ILendingPosition.md); `type`: [`ImportPosition`](../enumerations/SimulationType.md#importposition); \}, \{ `sourcePosition`: [`IExternalLendingPosition`](../interfaces/IExternalLendingPosition.md); `steps`: [`Steps`](../namespaces/steps/type-aliases/Steps.md)[]; `targetPosition`: [`ILendingPosition`](../interfaces/ILendingPosition.md); `type`: [`ImportPosition`](../enumerations/SimulationType.md#importposition); \}\>

## Description

Zod schema for IImportSimulation
