[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / Simulation

# Abstract Class: Simulation

Simulation

## See

ISimulation

## Extended by

- [`YieldSimulation`](YieldSimulation.md)
- [`LendingSimulation`](LendingSimulation.md)

## Implements

- [`ISimulation`](../interfaces/ISimulation.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

[`ISimulation`](../interfaces/ISimulation.md).[`[___signature__]`](../interfaces/ISimulation.md#___signature__)

***

### balanceChanges

> `readonly` **balanceChanges**: [`IBalanceChange`](../interfaces/IBalanceChange.md)[]

Balance changes resulting from the simulation

#### Implementation of

[`ISimulation`](../interfaces/ISimulation.md).[`balanceChanges`](../interfaces/ISimulation.md#balancechanges)

***

### gasEstimations

> `readonly` **gasEstimations**: [`IGasEstimation`](../interfaces/IGasEstimation.md)[]

Gas estimations for the simulation steps

#### Implementation of

[`ISimulation`](../interfaces/ISimulation.md).[`gasEstimations`](../interfaces/ISimulation.md#gasestimations)

***

### steps

> `readonly` **steps**: [`Steps`](../namespaces/steps/type-aliases/Steps.md)[]

The sequence of steps to execute the simulation

#### Implementation of

[`ISimulation`](../interfaces/ISimulation.md).[`steps`](../interfaces/ISimulation.md#steps)

***

### type

> `abstract` `readonly` **type**: [`SimulationType`](../enumerations/SimulationType.md)

ATTRIBUTES

#### Implementation of

[`ISimulation`](../interfaces/ISimulation.md).[`type`](../interfaces/ISimulation.md#type)
