[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / hyperliquid

# Variable: hyperliquid

> `const` **hyperliquid**: `object`

## Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-blockexplorers"></a> `blockExplorers` | `object` |
| `blockExplorers.default` | `object` |
| `blockExplorers.default.apiUrl` | `"https://api.hyperevmscan.io/api"` |
| `blockExplorers.default.name` | `"HyperEVMScan"` |
| `blockExplorers.default.url` | `"https://hyperevmscan.io"` |
| <a id="property-blocktime"></a> `blockTime?` | `number` |
| <a id="property-contracts"></a> `contracts` | `object` |
| `contracts.multicall3` | `object` |
| `contracts.multicall3.address` | `"0xca11bde05977b3631167028862be2a173976ca11"` |
| `contracts.multicall3.blockCreated` | `13051` |
| <a id="property-custom"></a> `custom?` | `Record`\<`string`, `unknown`\> |
| <a id="property-enstlds"></a> `ensTlds?` | readonly `string`[] |
| <a id="property-experimental_preconfirmationtime"></a> `experimental_preconfirmationTime?` | `number` |
| <a id="property-extendschema"></a> `extendSchema?` | `Record`\<`string`, `unknown`\> |
| <a id="property-fees"></a> `fees?` | `ChainFees` |
| <a id="property-formatters"></a> `formatters?` | `undefined` |
| <a id="property-id"></a> `id` | `999` |
| <a id="property-name"></a> `name` | `"HyperEVM"` |
| <a id="property-nativecurrency"></a> `nativeCurrency` | `object` |
| `nativeCurrency.decimals` | `18` |
| `nativeCurrency.name` | `"HYPE"` |
| `nativeCurrency.symbol` | `"HYPE"` |
| <a id="property-preparetransactionrequest"></a> `prepareTransactionRequest?` | ((`args`, `options`) => `Promise`\<`PrepareTransactionRequestParameters`\>) \| \[((`args`, `options`) => `Promise`\<`PrepareTransactionRequestParameters`\>) \| `undefined`, `object`\] |
| <a id="property-rpcurls"></a> `rpcUrls` | `object` |
| `rpcUrls.default` | `object` |
| `rpcUrls.default.http` | readonly \[`"https://rpc.hyperliquid.xyz/evm"`\] |
| <a id="property-serializers"></a> `serializers?` | `ChainSerializers` |
| <a id="property-sourceid"></a> `sourceId?` | `number` |
| <a id="property-testnet"></a> `testnet?` | `boolean` |
| <a id="property-verifyhash"></a> `verifyHash()?` | (`client`, `parameters`) => `Promise`\<`VerifyHashActionReturnType`\> |
