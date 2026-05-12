[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / YieldSimulation

# Class: YieldSimulation

Simulation

## See

ISimulation

## Extends

- [`Simulation`](Simulation.md)

## Constructors

### Constructor

> **new YieldSimulation**(`params`): `YieldSimulation`

#### Parameters

##### params

[`YieldSimulationParams`](../type-aliases/YieldSimulationParams.md)

#### Returns

`YieldSimulation`

#### Overrides

`Simulation.constructor`

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Inherited from

[`LendingSimulation`](LendingSimulation.md).[`[___signature__]`](LendingSimulation.md#___signature__)

***

### balanceChanges

> `readonly` **balanceChanges**: [`IBalanceChange`](../interfaces/IBalanceChange.md)[]

Balance changes resulting from the simulation

#### Overrides

[`Simulation`](Simulation.md).[`balanceChanges`](Simulation.md#balancechanges)

***

### gasEstimations

> `readonly` **gasEstimations**: [`IGasEstimation`](../interfaces/IGasEstimation.md)[]

Gas estimations for the simulation steps

#### Overrides

[`Simulation`](Simulation.md).[`gasEstimations`](Simulation.md#gasestimations)

***

### steps

> `readonly` **steps**: [`Steps`](../namespaces/steps/type-aliases/Steps.md)[]

The sequence of steps to execute the simulation

#### Overrides

[`Simulation`](Simulation.md).[`steps`](Simulation.md#steps)

***

### type

> `readonly` **type**: [`Yield`](../enumerations/SimulationType.md#yield) = `SimulationType.Yield`

ATTRIBUTES

#### Overrides

[`Simulation`](Simulation.md).[`type`](Simulation.md#type)
