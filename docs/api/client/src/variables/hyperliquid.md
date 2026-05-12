[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / hyperliquid

# Variable: hyperliquid

> `const` **hyperliquid**: `object`

## Type Declaration

### blockExplorers

> **blockExplorers**: `object`

#### blockExplorers.default

> `readonly` **default**: `object`

#### blockExplorers.default.apiUrl

> `readonly` **apiUrl**: `"https://api.hyperevmscan.io/api"`

#### blockExplorers.default.name

> `readonly` **name**: `"HyperEVMScan"`

#### blockExplorers.default.url

> `readonly` **url**: `"https://hyperevmscan.io"`

### blockTime?

> `optional` **blockTime?**: `number`

### contracts

> **contracts**: `object`

#### contracts.multicall3

> `readonly` **multicall3**: `object`

#### contracts.multicall3.address

> `readonly` **address**: `"0xca11bde05977b3631167028862be2a173976ca11"`

#### contracts.multicall3.blockCreated

> `readonly` **blockCreated**: `13051`

### custom?

> `optional` **custom?**: `Record`\<`string`, `unknown`\>

### ensTlds?

> `optional` **ensTlds?**: readonly `string`[]

### experimental\_preconfirmationTime?

> `optional` **experimental\_preconfirmationTime?**: `number`

### extendSchema?

> `optional` **extendSchema?**: `Record`\<`string`, `unknown`\>

### fees?

> `optional` **fees?**: `ChainFees`

### formatters?

> `optional` **formatters?**: `undefined`

### id

> **id**: `999`

### name

> **name**: `"HyperEVM"`

### nativeCurrency

> **nativeCurrency**: `object`

#### nativeCurrency.decimals

> `readonly` **decimals**: `18`

#### nativeCurrency.name

> `readonly` **name**: `"HYPE"`

#### nativeCurrency.symbol

> `readonly` **symbol**: `"HYPE"`

### prepareTransactionRequest?

> `optional` **prepareTransactionRequest?**: ((`args`, `options`) => `Promise`\<`PrepareTransactionRequestParameters`\>) \| \[((`args`, `options`) => `Promise`\<`PrepareTransactionRequestParameters`\>) \| `undefined`, `object`\]

### rpcUrls

> **rpcUrls**: `object`

#### rpcUrls.default

> `readonly` **default**: `object`

#### rpcUrls.default.http

> `readonly` **http**: readonly \[`"https://rpc.hyperliquid.xyz/evm"`\]

### serializers?

> `optional` **serializers?**: `ChainSerializers`

### sourceId?

> `optional` **sourceId?**: `number`

### testnet?

> `optional` **testnet?**: `boolean`

### verifyHash?

> `optional` **verifyHash?**: (`client`, `parameters`) => `Promise`\<`VerifyHashActionReturnType`\>

#### Parameters

##### client

`Client`

##### parameters

`VerifyHashActionParameters`

#### Returns

`Promise`\<`VerifyHashActionReturnType`\>
