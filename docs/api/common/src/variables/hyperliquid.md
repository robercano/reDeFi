[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / hyperliquid

# Variable: hyperliquid

> `const` **hyperliquid**: `object`

## Type Declaration

### blockExplorers

> **blockExplorers**: `object`

Collection of block explorers

#### blockExplorers.default

> `readonly` **default**: `object`

#### blockExplorers.default.apiUrl

> `readonly` **apiUrl**: `"https://api.hyperevmscan.io/api"` = `'https://api.hyperevmscan.io/api'`

#### blockExplorers.default.name

> `readonly` **name**: `"HyperEVMScan"` = `'HyperEVMScan'`

#### blockExplorers.default.url

> `readonly` **url**: `"https://hyperevmscan.io"` = `'https://hyperevmscan.io'`

### blockTime?

> `optional` **blockTime?**: `number`

Block time in milliseconds.

### contracts

> **contracts**: `object`

Collection of contracts

#### contracts.multicall3

> `readonly` **multicall3**: `object`

#### contracts.multicall3.address

> `readonly` **address**: `"0xca11bde05977b3631167028862be2a173976ca11"` = `'0xca11bde05977b3631167028862be2a173976ca11'`

#### contracts.multicall3.blockCreated

> `readonly` **blockCreated**: `13051` = `13051`

### ~~custom?~~

> `optional` **custom?**: `Record`\<`string`, `unknown`\>

Custom chain data.

#### Deprecated

use `.extend` instead.

### ensTlds?

> `optional` **ensTlds?**: readonly `string`[]

Collection of ENS TLDs for the chain.

### experimental\_preconfirmationTime?

> `optional` **experimental\_preconfirmationTime?**: `number`

Preconfirmation time in milliseconds.

### extend

> **extend**: \<`extended`\>(`extended`) => `Assign`\<`Assign`\<`Chain`\<`undefined`\>, \{ `blockExplorers`: \{ `default`: \{ `apiUrl`: `"https://api.hyperevmscan.io/api"`; `name`: `"HyperEVMScan"`; `url`: `"https://hyperevmscan.io"`; \}; \}; `contracts`: \{ `multicall3`: \{ `address`: `"0xca11bde05977b3631167028862be2a173976ca11"`; `blockCreated`: `13051`; \}; \}; `id`: `999`; `name`: `"HyperEVM"`; `nativeCurrency`: \{ `decimals`: `18`; `name`: `"HYPE"`; `symbol`: `"HYPE"`; \}; `rpcUrls`: \{ `default`: \{ `http`: readonly \[`"https://rpc.hyperliquid.xyz/evm"`\]; \}; \}; \}\>, `extended`\>

#### Type Parameters

##### extended

`extended` *extends* `Record`\<`string`, `unknown`\>

#### Parameters

##### extended

`extended`

#### Returns

`Assign`\<`Assign`\<`Chain`\<`undefined`\>, \{ `blockExplorers`: \{ `default`: \{ `apiUrl`: `"https://api.hyperevmscan.io/api"`; `name`: `"HyperEVMScan"`; `url`: `"https://hyperevmscan.io"`; \}; \}; `contracts`: \{ `multicall3`: \{ `address`: `"0xca11bde05977b3631167028862be2a173976ca11"`; `blockCreated`: `13051`; \}; \}; `id`: `999`; `name`: `"HyperEVM"`; `nativeCurrency`: \{ `decimals`: `18`; `name`: `"HYPE"`; `symbol`: `"HYPE"`; \}; `rpcUrls`: \{ `default`: \{ `http`: readonly \[`"https://rpc.hyperliquid.xyz/evm"`\]; \}; \}; \}\>, `extended`\>

### extendSchema?

> `optional` **extendSchema?**: `Record`\<`string`, `unknown`\>

Extend schema.

### fees?

> `optional` **fees?**: `ChainFees`\<`undefined`\>

Modifies how fees are derived.

### formatters?

> `optional` **formatters?**: `undefined`

Modifies how data is formatted and typed (e.g. blocks and transactions)

### id

> **id**: `999`

ID in number form

### name

> **name**: `"HyperEVM"`

Human-readable name

### nativeCurrency

> **nativeCurrency**: `object`

Currency used by chain

#### nativeCurrency.decimals

> `readonly` **decimals**: `18` = `18`

#### nativeCurrency.name

> `readonly` **name**: `"HYPE"` = `'HYPE'`

#### nativeCurrency.symbol

> `readonly` **symbol**: `"HYPE"` = `'HYPE'`

### prepareTransactionRequest?

> `optional` **prepareTransactionRequest?**: `PrepareTransactionRequestFn` \| \[`PrepareTransactionRequestFn`, `object`\]

Function to prepare a transaction request. Runs before the transaction is filled.

### rpcUrls

> **rpcUrls**: `object`

Collection of RPC endpoints

#### rpcUrls.default

> `readonly` **default**: `object`

#### rpcUrls.default.http

> `readonly` **http**: readonly \[`"https://rpc.hyperliquid.xyz/evm"`\]

### serializers?

> `optional` **serializers?**: `ChainSerializers`\<`undefined`, `TransactionSerializable`\>

Modifies how data is serialized (e.g. transactions).

### sourceId?

> `optional` **sourceId?**: `number`

Source Chain ID (ie. the L1 chain)

### testnet?

> `optional` **testnet?**: `boolean`

Flag for test networks

### verifyHash?

> `optional` **verifyHash?**: `ChainVerifyHashFn`

Chain-specific signature verification.
