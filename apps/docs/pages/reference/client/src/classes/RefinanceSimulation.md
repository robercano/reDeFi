[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / RefinanceSimulation

# Class: RefinanceSimulation

## Name

RefinanceSimulation

## See

IRefinanceSimulation

## Extends

- [`Simulation`](Simulation.md)

## Implements

- [`IRefinanceSimulation`](../interfaces/IRefinanceSimulation.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

#### Implementation of

[`IRefinanceSimulation`](../interfaces/IRefinanceSimulation.md).[`[___signature__]`](../interfaces/IRefinanceSimulation.md#___signature__-1)

#### Inherited from

[`Simulation`](Simulation.md).[`[___signature__]`](Simulation.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

#### Implementation of

`IRefinanceSimulation.[___signature__]`

#### Inherited from

`Simulation.[___signature__]`

***

### sourcePosition

> `readonly` **sourcePosition**: [`ILendingPosition`](../interfaces/ILendingPosition.md)

ATTRIBUTES

#### Implementation of

[`IRefinanceSimulation`](../interfaces/IRefinanceSimulation.md).[`sourcePosition`](../interfaces/IRefinanceSimulation.md#sourceposition)

***

### steps

> `readonly` **steps**: [`Steps`](../namespaces/steps/type-aliases/Steps.md)[]

Steps needed to perform the refinance

#### Implementation of

[`IRefinanceSimulation`](../interfaces/IRefinanceSimulation.md).[`steps`](../interfaces/IRefinanceSimulation.md#steps)

***

### swaps

> `readonly` **swaps**: [`SimulatedSwapData`](../type-aliases/SimulatedSwapData.md)[]

The details of any swaps required as part of the simulation

#### Implementation of

[`IRefinanceSimulation`](../interfaces/IRefinanceSimulation.md).[`swaps`](../interfaces/IRefinanceSimulation.md#swaps)

***

### targetPosition

> `readonly` **targetPosition**: [`ILendingPosition`](../interfaces/ILendingPosition.md)

Simulated target position

#### Implementation of

[`IRefinanceSimulation`](../interfaces/IRefinanceSimulation.md).[`targetPosition`](../interfaces/IRefinanceSimulation.md#targetposition)

***

### type

> `readonly` **type**: [`Refinance`](../enumerations/SimulationType.md#refinance) = `SimulationType.Refinance`

ATTRIBUTES

#### Implementation of

[`IRefinanceSimulation`](../interfaces/IRefinanceSimulation.md).[`type`](../interfaces/IRefinanceSimulation.md#type)

#### Overrides

[`Simulation`](Simulation.md).[`type`](Simulation.md#type)

## Methods

### createFrom()

> `static` **createFrom**(`params`): `RefinanceSimulation`

FACTORY

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`RefinanceSimulationParameters`](../type-aliases/RefinanceSimulationParameters.md) |

#### Returns

`RefinanceSimulation`
