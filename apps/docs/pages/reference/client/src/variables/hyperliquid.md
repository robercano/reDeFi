[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / hyperliquid

# Variable: hyperliquid

> `const` **hyperliquid**: `object`

## Type Declaration

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| <a id="property-blockexplorers"></a> `blockExplorers` | `object` | - | Collection of block explorers |
| `blockExplorers.default` | `object` | - | - |
| `blockExplorers.default.apiUrl` | `"https://api.hyperevmscan.io/api"` | `'https://api.hyperevmscan.io/api'` | - |
| `blockExplorers.default.name` | `"HyperEVMScan"` | `'HyperEVMScan'` | - |
| `blockExplorers.default.url` | `"https://hyperevmscan.io"` | `'https://hyperevmscan.io'` | - |
| <a id="property-blocktime"></a> `blockTime?` | `number` | - | Block time in milliseconds. |
| <a id="property-contracts"></a> `contracts` | `object` | - | Collection of contracts |
| `contracts.multicall3` | `object` | - | - |
| `contracts.multicall3.address` | `"0xca11bde05977b3631167028862be2a173976ca11"` | `'0xca11bde05977b3631167028862be2a173976ca11'` | - |
| `contracts.multicall3.blockCreated` | `13051` | `13051` | - |
| <a id="property-custom"></a> `custom?` | `Record`\<`string`, `unknown`\> | - | Custom chain data. **Deprecated** use `.extend` instead. |
| <a id="property-enstlds"></a> `ensTlds?` | readonly `string`[] | - | Collection of ENS TLDs for the chain. |
| <a id="property-experimental_preconfirmationtime"></a> `experimental_preconfirmationTime?` | `number` | - | Preconfirmation time in milliseconds. |
| <a id="property-extendschema"></a> `extendSchema?` | `Record`\<`string`, `unknown`\> | - | Extend schema. |
| <a id="property-fees"></a> `fees?` | `ChainFees`\<`undefined`\> | - | Modifies how fees are derived. |
| <a id="property-formatters"></a> `formatters?` | `undefined` | - | Modifies how data is formatted and typed (e.g. blocks and transactions) |
| <a id="property-id"></a> `id` | `999` | - | ID in number form |
| <a id="property-name"></a> `name` | `"HyperEVM"` | - | Human-readable name |
| <a id="property-nativecurrency"></a> `nativeCurrency` | `object` | - | Currency used by chain |
| `nativeCurrency.decimals` | `18` | `18` | - |
| `nativeCurrency.name` | `"HYPE"` | `'HYPE'` | - |
| `nativeCurrency.symbol` | `"HYPE"` | `'HYPE'` | - |
| <a id="property-preparetransactionrequest"></a> `prepareTransactionRequest?` | `PrepareTransactionRequestFn` \| \[`PrepareTransactionRequestFn`, `object`\] | - | Function to prepare a transaction request. Runs before the transaction is filled. |
| <a id="property-rpcurls"></a> `rpcUrls` | `object` | - | Collection of RPC endpoints |
| `rpcUrls.default` | `object` | - | - |
| `rpcUrls.default.http` | readonly \[`"https://rpc.hyperliquid.xyz/evm"`\] | - | - |
| <a id="property-serializers"></a> `serializers?` | `ChainSerializers`\<`undefined`, `TransactionSerializable`\> | - | Modifies how data is serialized (e.g. transactions). |
| <a id="property-sourceid"></a> `sourceId?` | `number` | - | Source Chain ID (ie. the L1 chain) |
| <a id="property-testnet"></a> `testnet?` | `boolean` | - | Flag for test networks |
| <a id="property-verifyhash"></a> `verifyHash?` | `ChainVerifyHashFn` | - | Chain-specific signature verification. |
