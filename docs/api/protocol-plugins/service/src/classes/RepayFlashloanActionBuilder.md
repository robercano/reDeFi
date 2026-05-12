[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / RepayFlashloanActionBuilder

# Class: RepayFlashloanActionBuilder

## Extends

- `BaseActionBuilder`\<`steps.RepayFlashloanStep`\>

## Constructors

### Constructor

> **new RepayFlashloanActionBuilder**(): `RepayFlashloanActionBuilder`

#### Returns

`RepayFlashloanActionBuilder`

#### Inherited from

`BaseActionBuilder<steps.RepayFlashloanStep>.constructor`

## Properties

### actions

> `readonly` **actions**: `ActionBuilderUsedAction`[]

Special case for this action builder: the Flashloan action is not declared in the list of used
actions as it was already declared in the FlashloanActionBuilder. This is due to the Flashloan
inversion problem in which the flashloan action is used when the RepayFlashloan step is built,
but for the strategy definition we need to have the action registered at the Flashloan builder moment

#### Overrides

`BaseActionBuilder.actions`

## Methods

### build()

> **build**(`params`): `Promise`\<`void`\>

#### Parameters

##### params

`ActionBuilderParams`\<`RepayFlashloanStep`\>

#### Returns

`Promise`\<`void`\>

#### See

IActionBuilder.build

#### Overrides

`BaseActionBuilder.build`
