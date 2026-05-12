[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / ISimulation

# Interface: ISimulation

ISimulation
Generic simulation interface, defines the simulation type for all simulations

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature used to differentiate it from similar interfaces

***

### balanceChanges

> `readonly` **balanceChanges**: [`IBalanceChange`](IBalanceChange.md)[]

Balance changes resulting from the simulation

***

### gasEstimations

> `readonly` **gasEstimations**: [`IGasEstimation`](IGasEstimation.md)[]

Gas estimations for the simulation steps

***

### steps

> `readonly` **steps**: `Steps`[]

The sequence of steps to execute the simulation

***

### type

> `readonly` **type**: [`SimulationType`](../../../common/src/enumerations/SimulationType.md)

The type of the simulation
