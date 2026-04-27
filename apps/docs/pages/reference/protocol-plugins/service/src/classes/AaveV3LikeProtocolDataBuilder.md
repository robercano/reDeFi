[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / AaveV3LikeProtocolDataBuilder

# Class: AaveV3LikeProtocolDataBuilder\<AssetListItemType, ContractNames, ContractsAbiMap\>

## Type Parameters

| Type Parameter |
| ------ |
| `AssetListItemType` |
| `ContractNames` *extends* `string` |
| `ContractsAbiMap` *extends* `GenericAbiMap`\<`ContractNames`\> |

## Constructors

### Constructor

> **new AaveV3LikeProtocolDataBuilder**\<`AssetListItemType`, `ContractNames`, `ContractsAbiMap`\>(`ctx`, `protocolName`, `chainInfo`, `chainContractsProvider`, `dataProviderContractName`, `oracleContractName`): `AaveV3LikeProtocolDataBuilder`\<`AssetListItemType`, `ContractNames`, `ContractsAbiMap`\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | `IProtocolPluginContext` |
| `protocolName` | [`AllowedProtocolNames`](../type-aliases/AllowedProtocolNames.md) |
| `chainInfo` | [`IChainInfo`](../../../../client/src/interfaces/IChainInfo.md) |
| `chainContractsProvider` | `ChainContractsProvider`\<`ContractNames`, `ContractsAbiMap`\> |
| `dataProviderContractName` | `ContractNames` |
| `oracleContractName` | `ContractNames` |

#### Returns

`AaveV3LikeProtocolDataBuilder`\<`AssetListItemType`, `ContractNames`, `ContractsAbiMap`\>

## Methods

### addEmodeCategories()

> **addEmodeCategories**(): `AaveV3LikeProtocolDataBuilder`\<[`WithEmode`](../type-aliases/WithEmode.md)\<`AssetListItemType`\>, `ContractNames`, `ContractsAbiMap`\>

#### Returns

`AaveV3LikeProtocolDataBuilder`\<[`WithEmode`](../type-aliases/WithEmode.md)\<`AssetListItemType`\>, `ContractNames`, `ContractsAbiMap`\>

***

### addPrices()

> **addPrices**(): `AaveV3LikeProtocolDataBuilder`\<[`WithPrice`](../type-aliases/WithPrice.md)\<`AssetListItemType`\>, `ContractNames`, `ContractsAbiMap`\>

#### Returns

`AaveV3LikeProtocolDataBuilder`\<[`WithPrice`](../type-aliases/WithPrice.md)\<`AssetListItemType`\>, `ContractNames`, `ContractsAbiMap`\>

***

### addReservesCaps()

> **addReservesCaps**(): `AaveV3LikeProtocolDataBuilder`\<[`WithReservesCaps`](../type-aliases/WithReservesCaps.md)\<`AssetListItemType`\>, `ContractNames`, `ContractsAbiMap`\>

#### Returns

`AaveV3LikeProtocolDataBuilder`\<[`WithReservesCaps`](../type-aliases/WithReservesCaps.md)\<`AssetListItemType`\>, `ContractNames`, `ContractsAbiMap`\>

***

### addReservesConfigData()

> **addReservesConfigData**(): `AaveV3LikeProtocolDataBuilder`\<[`WithReservesConfig`](../type-aliases/WithReservesConfig.md)\<`AssetListItemType`\>, `ContractNames`, `ContractsAbiMap`\>

#### Returns

`AaveV3LikeProtocolDataBuilder`\<[`WithReservesConfig`](../type-aliases/WithReservesConfig.md)\<`AssetListItemType`\>, `ContractNames`, `ContractsAbiMap`\>

***

### addReservesData()

> **addReservesData**(): `AaveV3LikeProtocolDataBuilder`\<[`WithReservesData`](../type-aliases/WithReservesData.md)\<`AssetListItemType`\>, `ContractNames`, `ContractsAbiMap`\>

#### Returns

`AaveV3LikeProtocolDataBuilder`\<[`WithReservesData`](../type-aliases/WithReservesData.md)\<`AssetListItemType`\>, `ContractNames`, `ContractsAbiMap`\>

***

### build()

> **build**(): `Promise`\<`AssetListItemType`[]\>

#### Returns

`Promise`\<`AssetListItemType`[]\>

***

### buildAll()

> **buildAll**(): `Promise`\<`AssetListItemType`[]\>

#### Returns

`Promise`\<`AssetListItemType`[]\>

***

### init()

> **init**(): `Promise`\<`AaveV3LikeProtocolDataBuilder`\<[`WithToken`](../type-aliases/WithToken.md)\<`AssetListItemType`\>, `ContractNames`, `ContractsAbiMap`\>\>

#### Returns

`Promise`\<`AaveV3LikeProtocolDataBuilder`\<[`WithToken`](../type-aliases/WithToken.md)\<`AssetListItemType`\>, `ContractNames`, `ContractsAbiMap`\>\>
