[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / ProtocolPluginsRegistry

# Class: ProtocolPluginsRegistry

ProtocolPluginsRegistry

## Description

Registry of protocol plugins that can be used to interact with the protocols

## Implements

- `IProtocolPluginsRegistry`

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

> **getPlugin**(`params`): [`Maybe`](../../../../client/src/type-aliases/Maybe.md)\<`IProtocolPlugin`\>

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | \{ `protocolName`: [`ProtocolName`](../../../../client/src/enumerations/ProtocolName.md); \} | - |
| `params.protocolName` | [`ProtocolName`](../../../../client/src/enumerations/ProtocolName.md) | The name of the protocol to get the plugin for |

#### Returns

[`Maybe`](../../../../client/src/type-aliases/Maybe.md)\<`IProtocolPlugin`\>

The plugin instance for the specified protocol

#### Name

getPlugin

#### Description

Returns a plugin instance for the specified protocol

#### Implementation of

`IProtocolPluginsRegistry.getPlugin`
