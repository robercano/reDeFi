[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / RefinanceSimulationSchema

# Variable: RefinanceSimulationSchema

> `const` **RefinanceSimulationSchema**: `ZodObject`\<\{ `sourcePosition`: `ZodType`\<[`ILendingPosition`](../interfaces/ILendingPosition.md), `ZodTypeDef`, [`ILendingPosition`](../interfaces/ILendingPosition.md)\>; `steps`: `ZodArray`\<`ZodType`\<`Steps`, `ZodTypeDef`, `Steps`\>, `"many"`\>; `swaps`: `ZodArray`\<`ZodType`\<[`SimulatedSwapData`](../type-aliases/SimulatedSwapData.md), `ZodTypeDef`, [`SimulatedSwapData`](../type-aliases/SimulatedSwapData.md)\>, `"many"`\>; `targetPosition`: `ZodType`\<[`ILendingPosition`](../interfaces/ILendingPosition.md), `ZodTypeDef`, [`ILendingPosition`](../interfaces/ILendingPosition.md)\>; `type`: `ZodLiteral`\<`Refinance`\>; \}, `"strip"`, `ZodTypeAny`, \{ `sourcePosition`: [`ILendingPosition`](../interfaces/ILendingPosition.md); `steps`: `Steps`[]; `swaps`: [`SimulatedSwapData`](../type-aliases/SimulatedSwapData.md)[]; `targetPosition`: [`ILendingPosition`](../interfaces/ILendingPosition.md); `type`: `Refinance`; \}, \{ `sourcePosition`: [`ILendingPosition`](../interfaces/ILendingPosition.md); `steps`: `Steps`[]; `swaps`: [`SimulatedSwapData`](../type-aliases/SimulatedSwapData.md)[]; `targetPosition`: [`ILendingPosition`](../interfaces/ILendingPosition.md); `type`: `Refinance`; \}\>

## Description

Zod schema for IRefinanceSimulation
