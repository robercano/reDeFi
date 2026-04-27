[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / isTokenData

# Function: isTokenData()

> **isTokenData**(`maybeTokenData`): maybeTokenData is Readonly\<\{ address: \{ type: AddressType; value: \`0x$\{string\}\` \}; chainInfo: \{ chainId: 1 \| 10 \| 146 \| 999 \| 8453 \| 42161; name: string \}; decimals: number; logoURI?: string \| null; name: string; symbol: string \}\>

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `maybeTokenData` | `unknown` | - |

## Returns

maybeTokenData is Readonly\<\{ address: \{ type: AddressType; value: \`0x$\{string\}\` \}; chainInfo: \{ chainId: 1 \| 10 \| 146 \| 999 \| 8453 \| 42161; name: string \}; decimals: number; logoURI?: string \| null; name: string; symbol: string \}\>

true if the object is an ITokenData

## Description

Type guard for ITokenData
