[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / SkippedStepActionBuilder

# Class: SkippedStepActionBuilder

## Extends

- `BaseActionBuilder`\<[`SkippedStep`](../../../../client/src/namespaces/steps/type-aliases/SkippedStep.md)\>

## Constructors

### Constructor

> **new SkippedStepActionBuilder**(): `SkippedStepActionBuilder`

#### Returns

`SkippedStepActionBuilder`

#### Inherited from

`BaseActionBuilder<steps.SkippedStep>.constructor`

## Properties

### actions

> `readonly` **actions**: `ActionBuilderUsedAction`[] = `[]`

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
| `params` | \{ `actionBuilderParams`: `ActionBuilderParams`\<[`SkippedStep`](../../../../client/src/namespaces/steps/type-aliases/SkippedStep.md)\>; `protocolName`: [`ProtocolName`](../../../../client/src/enumerations/ProtocolName.md); \} |
| `params.actionBuilderParams` | `ActionBuilderParams`\<[`SkippedStep`](../../../../client/src/namespaces/steps/type-aliases/SkippedStep.md)\> |
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
| `params` | `ActionBuilderParams`\<[`SkippedStep`](../../../../client/src/namespaces/steps/type-aliases/SkippedStep.md)\> |

#### Returns

`Promise`\<`void`\>

#### See

IActionBuilder.build

#### Overrides

`BaseActionBuilder.build`
