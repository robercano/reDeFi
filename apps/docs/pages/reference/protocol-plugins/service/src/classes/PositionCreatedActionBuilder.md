[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / PositionCreatedActionBuilder

# Class: PositionCreatedActionBuilder

## Extends

- `BaseActionBuilder`\<[`NewPositionEventStep`](../../../../client/src/namespaces/steps/type-aliases/NewPositionEventStep.md)\>

## Constructors

### Constructor

> **new PositionCreatedActionBuilder**(): `PositionCreatedActionBuilder`

#### Returns

`PositionCreatedActionBuilder`

#### Inherited from

`BaseActionBuilder<steps.NewPositionEventStep>.constructor`

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

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | \{ `actionBuilderParams`: `ActionBuilderParams`\<[`NewPositionEventStep`](../../../../client/src/namespaces/steps/type-aliases/NewPositionEventStep.md)\>; `protocolName`: [`ProtocolName`](../../../../client/src/enumerations/ProtocolName.md); \} | - |
| `params.actionBuilderParams` | `ActionBuilderParams`\<[`NewPositionEventStep`](../../../../client/src/namespaces/steps/type-aliases/NewPositionEventStep.md)\> | The parameters for the action builder |
| `params.protocolName` | [`ProtocolName`](../../../../client/src/enumerations/ProtocolName.md) | The name of the protocol to delegate the action to |

#### Returns

`Promise`\<`void`\>

#### Inherited from

`BaseActionBuilder._delegateToProtocol`

***

### \_getContractAddress()

> `protected` **\_getContractAddress**(`params`): `Promise`\<[`IAddress`](../../../../client/src/interfaces/IAddress.md)\>

Resolves the address of a contract by its name using the address book manager

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | \{ `addressBookManager`: `IAddressBookManager`; `chainInfo`: [`IChainInfo`](../../../../client/src/interfaces/IChainInfo.md); `contractName`: `string`; \} | - |
| `params.addressBookManager` | `IAddressBookManager` | The address book manager to use |
| `params.chainInfo` | [`IChainInfo`](../../../../client/src/interfaces/IChainInfo.md) | The chain where the contract is |
| `params.contractName` | `string` | The name of the contract |

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
| `params` | `ActionBuilderParams`\<[`NewPositionEventStep`](../../../../client/src/namespaces/steps/type-aliases/NewPositionEventStep.md)\> |

#### Returns

`Promise`\<`void`\>

#### See

IActionBuilder.build

#### Overrides

`BaseActionBuilder.build`
