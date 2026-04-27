[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / RefinanceSimulationSchema

# Variable: RefinanceSimulationSchema

> `const` **RefinanceSimulationSchema**: `z.ZodObject`\<\{ `sourcePosition`: `z.ZodType`\<[`ILendingPosition`](../interfaces/ILendingPosition.md), `z.ZodTypeDef`, [`ILendingPosition`](../interfaces/ILendingPosition.md)\>; `steps`: `z.ZodArray`\<`z.ZodType`\<[`Steps`](../namespaces/steps/type-aliases/Steps.md), `z.ZodTypeDef`, [`Steps`](../namespaces/steps/type-aliases/Steps.md)\>, `"many"`\>; `swaps`: `z.ZodArray`\<`z.ZodType`\<[`SimulatedSwapData`](../type-aliases/SimulatedSwapData.md), `z.ZodTypeDef`, [`SimulatedSwapData`](../type-aliases/SimulatedSwapData.md)\>, `"many"`\>; `targetPosition`: `z.ZodType`\<[`ILendingPosition`](../interfaces/ILendingPosition.md), `z.ZodTypeDef`, [`ILendingPosition`](../interfaces/ILendingPosition.md)\>; `type`: `z.ZodLiteral`\<[`Refinance`](../enumerations/SimulationType.md#refinance)\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `sourcePosition`: [`ILendingPosition`](../interfaces/ILendingPosition.md); `steps`: [`Steps`](../namespaces/steps/type-aliases/Steps.md)[]; `swaps`: [`SimulatedSwapData`](../type-aliases/SimulatedSwapData.md)[]; `targetPosition`: [`ILendingPosition`](../interfaces/ILendingPosition.md); `type`: [`Refinance`](../enumerations/SimulationType.md#refinance); \}, \{ `sourcePosition`: [`ILendingPosition`](../interfaces/ILendingPosition.md); `steps`: [`Steps`](../namespaces/steps/type-aliases/Steps.md)[]; `swaps`: [`SimulatedSwapData`](../type-aliases/SimulatedSwapData.md)[]; `targetPosition`: [`ILendingPosition`](../interfaces/ILendingPosition.md); `type`: [`Refinance`](../enumerations/SimulationType.md#refinance); \}\>

## Description

Zod schema for IRefinanceSimulation
