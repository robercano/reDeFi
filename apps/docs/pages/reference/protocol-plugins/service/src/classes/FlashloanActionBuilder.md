[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / FlashloanActionBuilder

# Class: FlashloanActionBuilder

## Extends

- `BaseActionBuilder`\<[`FlashloanStep`](../../../../client/src/namespaces/steps/type-aliases/FlashloanStep.md)\>

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

### \_delegateToProtocol()

> `protected` **\_delegateToProtocol**(`params`): `Promise`\<`void`\>

Delegates the building of the action to the specific builder in the corresponding protocol plugin

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `actionBuilderParams`: `ActionBuilderParams`\<`FilterStep`\<[`SimulationSteps`](../../../../client/src/enumerations/SimulationSteps.md), `StepType`\>\>; `protocolName`: [`ProtocolName`](../../../../client/src/enumerations/ProtocolName.md); \} |
| `params.actionBuilderParams` | `ActionBuilderParams`\<`FilterStep`\<[`SimulationSteps`](../../../../client/src/enumerations/SimulationSteps.md), `StepType`\>\> |
| `params.protocolName` | [`ProtocolName`](../../../../client/src/enumerations/ProtocolName.md) |

#### Returns

`Promise`\<`void`\>

#### Inherited from

`BaseActionBuilder._delegateToProtocol`

***

### \_getContractAddress()

> `protected` **\_getContractAddress**(`params`): `Promise`\<[`IAddress`](../../../../client/src/interfaces/IAddress.md)\>

Resolves the address of a contract by its name using the address book manager

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `addressBookManager`: `IAddressBookManager`; `chainInfo`: [`IChainInfo`](../../../../client/src/interfaces/IChainInfo.md); `contractName`: `string`; \} |
| `params.addressBookManager` | `IAddressBookManager` |
| `params.chainInfo` | [`IChainInfo`](../../../../client/src/interfaces/IChainInfo.md) |
| `params.contractName` | `string` |

#### Returns

`Promise`\<[`IAddress`](../../../../client/src/interfaces/IAddress.md)\>

The address of the contract

#### Inherited from

`BaseActionBuilder._getContractAddress`

***

### build()

> **build**(`params`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | `ActionBuilderParams`\<[`FlashloanStep`](../../../../client/src/namespaces/steps/type-aliases/FlashloanStep.md)\> |

#### Returns

`Promise`\<`void`\>

#### See

IActionBuilder.build

#### Overrides

`BaseActionBuilder.build`
