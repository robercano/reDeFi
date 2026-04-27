[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / RefinanceSimulationSchema

# Variable: RefinanceSimulationSchema

> `const` **RefinanceSimulationSchema**: `ZodObject`\<\{ `sourcePosition`: `ZodType`\<[`ILendingPosition`](../interfaces/ILendingPosition.md), `ZodTypeDef`, [`ILendingPosition`](../interfaces/ILendingPosition.md)\>; `steps`: `ZodArray`\<`ZodType`\<[`Steps`](../namespaces/steps/type-aliases/Steps.md), `ZodTypeDef`, [`Steps`](../namespaces/steps/type-aliases/Steps.md)\>, `"many"`\>; `swaps`: `ZodArray`\<`ZodType`\<[`SimulatedSwapData`](../type-aliases/SimulatedSwapData.md), `ZodTypeDef`, [`SimulatedSwapData`](../type-aliases/SimulatedSwapData.md)\>, `"many"`\>; `targetPosition`: `ZodType`\<[`ILendingPosition`](../interfaces/ILendingPosition.md), `ZodTypeDef`, [`ILendingPosition`](../interfaces/ILendingPosition.md)\>; `type`: `ZodLiteral`\<[`Refinance`](../enumerations/SimulationType.md#refinance)\>; \}, `"strip"`, `ZodTypeAny`, \{ `sourcePosition`: [`ILendingPosition`](../interfaces/ILendingPosition.md); `steps`: [`Steps`](../namespaces/steps/type-aliases/Steps.md)[]; `swaps`: [`SimulatedSwapData`](../type-aliases/SimulatedSwapData.md)[]; `targetPosition`: [`ILendingPosition`](../interfaces/ILendingPosition.md); `type`: [`Refinance`](../enumerations/SimulationType.md#refinance); \}, \{ `sourcePosition`: [`ILendingPosition`](../interfaces/ILendingPosition.md); `steps`: [`Steps`](../namespaces/steps/type-aliases/Steps.md)[]; `swaps`: [`SimulatedSwapData`](../type-aliases/SimulatedSwapData.md)[]; `targetPosition`: [`ILendingPosition`](../interfaces/ILendingPosition.md); `type`: [`Refinance`](../enumerations/SimulationType.md#refinance); \}\>

## Description

Zod schema for IRefinanceSimulation
