[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / IImportSimulation

# Interface: IImportSimulation

IImportSimulation

## Description

Simulation result of an import operation

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

> `readonly` **sourcePosition**: [`IExternalLendingPosition`](IExternalLendingPosition.md)

Original position that will be refinanced

***

### steps

> `readonly` **steps**: `Steps`[]

Steps needed to perform the refinance

***

### targetPosition

> `readonly` **targetPosition**: [`ILendingPosition`](ILendingPosition.md)

Simulated target position

***

### type

> `readonly` **type**: `ImportPosition`

The type of the simulation

#### Overrides

[`ISimulation`](ISimulation.md).[`type`](ISimulation.md#type)
