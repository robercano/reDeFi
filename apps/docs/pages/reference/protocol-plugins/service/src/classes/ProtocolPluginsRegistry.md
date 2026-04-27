[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / ProtocolPluginsRegistry

# Class: ProtocolPluginsRegistry

ProtocolPluginsRegistry

## Description

Registry of protocol plugins that can be used to interact with the protocols

## Implements

- [`AaveV3LendingPoolId`](../../../../client/src/variables/AaveV3LendingPoolId.md)

## Constructors

### Constructor

> **new ProtocolPluginsRegistry**(`params`): `ProtocolPluginsRegistry`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `context`: `IProtocolPluginContext`; `plugins`: [`ProtocolPluginsRecordType`](../type-aliases/ProtocolPluginsRecordType.md); \} |
| `params.context` | `IProtocolPluginContext` |
| `params.plugins` | [`ProtocolPluginsRecordType`](../type-aliases/ProtocolPluginsRecordType.md) |

#### Returns

`ProtocolPluginsRegistry`

## Properties

### context

> `readonly` **context**: `IProtocolPluginContext`

***

### plugins

> `readonly` **plugins**: [`ProtocolPluginsRecordType`](../type-aliases/ProtocolPluginsRecordType.md)

## Methods

### getPlugin()

> **getPlugin**(`params`): `any`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | \{ `protocolName`: [`ProtocolName`](../../../../client/src/enumerations/ProtocolName.md); \} | - |
| `params.protocolName` | [`ProtocolName`](../../../../client/src/enumerations/ProtocolName.md) | The name of the protocol to get the plugin for |

#### Returns

`any`

The plugin instance for the specified protocol

#### Name

getPlugin

#### Description

Returns a plugin instance for the specified protocol
