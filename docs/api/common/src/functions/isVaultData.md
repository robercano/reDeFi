[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / isVaultData

# Function: isVaultData()

> **isVaultData**(`maybeVaultData`): maybeVaultData is Readonly\<\{ address?: \{ type?: AddressType; value?: \`0x$\{string\}\` \}; chainInfo?: \{ chainId?: 1 \| 10 \| 146 \| 999 \| 8453 \| 42161; name?: string \}; decimals?: number; logoURI?: string; name?: string; symbol?: string \} & \{ asset?: IToken \}\>

Type guard for IVaultData

## Parameters

### maybeVaultData

`unknown`

## Returns

maybeVaultData is Readonly\<\{ address?: \{ type?: AddressType; value?: \`0x$\{string\}\` \}; chainInfo?: \{ chainId?: 1 \| 10 \| 146 \| 999 \| 8453 \| 42161; name?: string \}; decimals?: number; logoURI?: string; name?: string; symbol?: string \} & \{ asset?: IToken \}\>

true if the object is an IVaultData
