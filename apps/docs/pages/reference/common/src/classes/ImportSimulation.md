[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / ImportSimulation

# Class: ImportSimulation

## Name

ImportSimulation

## See

IImportSimulation

## Extends

- [`Simulation`](Simulation.md)

## Implements

- [`IImportSimulation`](../interfaces/IImportSimulation.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

[`IImportSimulation`](../interfaces/IImportSimulation.md).[`[___signature__]`](../interfaces/IImportSimulation.md#___signature__-1)

#### Inherited from

[`Simulation`](Simulation.md).[`[___signature__]`](Simulation.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

`IImportSimulation.[___signature__]`

#### Inherited from

[`RefinanceSimulation`](RefinanceSimulation.md).[`[___signature__]`](RefinanceSimulation.md#___signature__-1)

***

### sourcePosition

> `readonly` **sourcePosition**: [`IExternalLendingPosition`](../interfaces/IExternalLendingPosition.md)

ATTRIBUTES

#### Implementation of

[`IImportSimulation`](../interfaces/IImportSimulation.md).[`sourcePosition`](../interfaces/IImportSimulation.md#sourceposition)

***

### steps

> `readonly` **steps**: `Steps`[]

Steps needed to perform the refinance

#### Implementation of

[`IImportSimulation`](../interfaces/IImportSimulation.md).[`steps`](../interfaces/IImportSimulation.md#steps)

***

### targetPosition

> `readonly` **targetPosition**: [`ILendingPosition`](../interfaces/ILendingPosition.md)

Simulated target position

#### Implementation of

[`IImportSimulation`](../interfaces/IImportSimulation.md).[`targetPosition`](../interfaces/IImportSimulation.md#targetposition)

***

### type

> `readonly` **type**: `ImportPosition` = `SimulationType.ImportPosition`

ATTRIBUTES

#### Implementation of

[`IImportSimulation`](../interfaces/IImportSimulation.md).[`type`](../interfaces/IImportSimulation.md#type)

#### Overrides

[`Simulation`](Simulation.md).[`type`](Simulation.md#type)

## Methods

### createFrom()

> `static` **createFrom**(`params`): `ImportSimulation`

FACTORY

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`ImportSimulationParameters`](../type-aliases/ImportSimulationParameters.md) |

#### Returns

`ImportSimulation`
