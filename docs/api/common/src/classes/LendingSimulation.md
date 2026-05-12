[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / LendingSimulation

# Class: LendingSimulation

Simulation

## See

ISimulation

## Extends

- [`Simulation`](Simulation.md)

## Constructors

### Constructor

> **new LendingSimulation**(`params`): `LendingSimulation`

#### Parameters

##### params

[`LendingSimulationParams`](../type-aliases/LendingSimulationParams.md)

#### Returns

`LendingSimulation`

#### Overrides

`Simulation.constructor`

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Inherited from

[`Simulation`](Simulation.md).[`[___signature__]`](Simulation.md#___signature__)

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

> `readonly` **type**: [`Lend`](../enumerations/SimulationType.md#lend) = `SimulationType.Lend`

ATTRIBUTES

#### Overrides

[`Simulation`](Simulation.md).[`type`](Simulation.md#type)
