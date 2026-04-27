[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / IRefinanceSimulation

# Interface: IRefinanceSimulation

IRefinanceSimulation

## Description

Simulation result of a refinance operation

## Extends

- [`ISimulation`](ISimulation.md)

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature used to differentiate it from similar interfaces

#### Inherited from

[`ISimulation`](ISimulation.md).[`[___signature__]`](ISimulation.md#___signature__)

***

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature used to differentiate it from similar interfaces

#### Inherited from

`ISimulation.[___signature__]`

***

### sourcePosition

> `readonly` **sourcePosition**: [`ILendingPosition`](ILendingPosition.md)

Original position that will be refinanced

***

### steps

> `readonly` **steps**: `Steps`[]

Steps needed to perform the refinance

***

### swaps

> `readonly` **swaps**: [`SimulatedSwapData`](../type-aliases/SimulatedSwapData.md)[]

The details of any swaps required as part of the simulation

***

### targetPosition

> `readonly` **targetPosition**: [`ILendingPosition`](ILendingPosition.md)

Simulated target position

***

### type

> `readonly` **type**: `Refinance`

The type of the simulation

#### Overrides

[`ISimulation`](ISimulation.md).[`type`](ISimulation.md#type)
