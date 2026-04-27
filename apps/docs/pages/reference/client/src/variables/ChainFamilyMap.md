[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / ChainFamilyMap

# Variable: ChainFamilyMap

> `const` **ChainFamilyMap**: `object`

## Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-arbitrum"></a> `Arbitrum` | `Record`\<`"ArbitrumOne"`, [`ChainInfo`](../classes/ChainInfo.md)\> |
| <a id="property-base"></a> `Base` | `Record`\<`"Base"`, [`ChainInfo`](../classes/ChainInfo.md)\> |
| <a id="property-ethereum"></a> `Ethereum` | `Record`\<`"Mainnet"`, [`ChainInfo`](../classes/ChainInfo.md)\> |
| <a id="property-hyperliquid"></a> `Hyperliquid` | `Record`\<`"Hyperliquid"`, [`ChainInfo`](../classes/ChainInfo.md)\> |
| <a id="property-optimism"></a> `Optimism` | `Record`\<`"Optimism"`, [`ChainInfo`](../classes/ChainInfo.md)\> |
| <a id="property-sonic"></a> `Sonic` | `Record`\<`"Sonic"`, [`ChainInfo`](../classes/ChainInfo.md)\> |

## Description

A map of chain family names to chain families. It can be used to
             retrieve the ChainId of a chain family + chain combination
