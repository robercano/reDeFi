[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / FlashloanActionBuilder

# Class: FlashloanActionBuilder

## Extends

- `BaseActionBuilder`\<`steps.FlashloanStep`\>

## Constructors

### Constructor

> **new FlashloanActionBuilder**(): `FlashloanActionBuilder`

#### Returns

`FlashloanActionBuilder`

#### Inherited from

`BaseActionBuilder<steps.FlashloanStep>.constructor`

## Properties

### actions

> `readonly` **actions**: `ActionBuilderUsedAction`[]

Special case for the declared actions: the flashloan action is indicated here although
it is not used in the builder. This is due to the Flashloan inverstion problem in which
the flashloan action is used when the RepayFlashloan step is built, but for the
strategy definition we need to have the action registered at this moment

#### Overrides

`BaseActionBuilder.actions`

## Methods

### build()

> **build**(`params`): `Promise`\<`void`\>

#### Parameters

##### params

`ActionBuilderParams`\<`FlashloanStep`\>

#### Returns

`Promise`\<`void`\>

#### See

IActionBuilder.build

#### Overrides

`BaseActionBuilder.build`
