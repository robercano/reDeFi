[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / PullTokenActionBuilder

# Class: PullTokenActionBuilder

## Extends

- `BaseActionBuilder`\<[`PullTokenStep`](../../../../client/src/namespaces/steps/type-aliases/PullTokenStep.md)\>

## Constructors

### Constructor

> **new PullTokenActionBuilder**(): `PullTokenActionBuilder`

#### Returns

`PullTokenActionBuilder`

#### Inherited from

`BaseActionBuilder<steps.PullTokenStep>.constructor`

## Properties

### actions

> `readonly` **actions**: `ActionBuilderUsedAction`[]

#### See

IActionBuilder.actions

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
| `params` | `ActionBuilderParams`\<[`PullTokenStep`](../../../../client/src/namespaces/steps/type-aliases/PullTokenStep.md)\> |

#### Returns

`Promise`\<`void`\>

#### See

IActionBuilder.build

#### Overrides

`BaseActionBuilder.build`
