[**redefi**](../README.md)

***

[redefi](../README.md) / client/src

# client/src

## Enumerations

### CacheLayer

Defines the available caching layers in the SDK.

#### Enumeration Members

##### L1\_MEMORY

> **L1\_MEMORY**: `"memory"`

##### L2\_INDEXED\_DB

> **L2\_INDEXED\_DB**: `"indexed_db"`

##### L3\_AWS\_API

> **L3\_AWS\_API**: `"aws_backend"`

##### L4\_SUBGRAPH

> **L4\_SUBGRAPH**: `"subgraph"`

##### L5\_RPC

> **L5\_RPC**: `"rpc"`

***

### ChainFamilyName

#### Enumeration Members

##### Arbitrum

> **Arbitrum**: `"Arbitrum"`

##### Base

> **Base**: `"Base"`

##### Ethereum

> **Ethereum**: `"Ethereum"`

##### Hyperliquid

> **Hyperliquid**: `"Hyperliquid"`

##### Optimism

> **Optimism**: `"Optimism"`

##### Sonic

> **Sonic**: `"Sonic"`

***

### IntentSwapProviderType

IntentSwapProviderType
Represents the different intent swap providers

#### Enumeration Members

##### CowSwap

> **CowSwap**: `"CowSwap"`

***

### RiskRatioType

RiskRatioType
Enum for the different types of risk ratios supported

#### Enumeration Members

##### CollateralizationRatio

> **CollateralizationRatio**: `"CollateralizationRatio"`

Inverse of LTV (Value-to-Loan) ratio in percentage

##### LTV

> **LTV**: `"LTV"`

Loan-to-Value ratio in percentage

##### Multiple

> **Multiple**: `"Multiple"`

Multiply factor

***

### TransactionType

TransactionType
Enum of all the transaction types that can be performed.

#### Enumeration Members

##### Approve

> **Approve**: `"Approve"`

##### Bridge

> **Bridge**: `"Bridge"`

##### Claim

> **Claim**: `"Claim"`

##### Delegate

> **Delegate**: `"Delegate"`

##### Deposit

> **Deposit**: `"Deposit"`

##### Erc20Transfer

> **Erc20Transfer**: `"Erc20Transfer"`

##### MerklClaim

> **MerklClaim**: `"MerklClaim"`

##### Migration

> **Migration**: `"Migration"`

##### Send

> **Send**: `"Send"`

##### Stake

> **Stake**: `"Stake"`

##### ToggleAQasMerklRewardsOperator

> **ToggleAQasMerklRewardsOperator**: `"ToggleAQasMerklRewardsOperator"`

##### Unstake

> **Unstake**: `"Unstake"`

##### VaultSwitch

> **VaultSwitch**: `"VaultSwitch"`

##### Withdraw

> **Withdraw**: `"Withdraw"`

## Classes

### Address

Address

#### See

IAddress

#### Implements

- [`IAddress`](#iaddress)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

###### Implementation of

[`IAddress`](#iaddress).[`[___signature__]`](#___signature__-38)

##### type

> `readonly` **type**: [`AddressType`](../common/src/README.md#addresstype)

The type of the address

###### Implementation of

[`IAddress`](#iaddress).[`type`](#type-15)

##### value

> `readonly` **value**: `` `0x${string}` ``

ATTRIBUTES

###### Implementation of

[`IAddress`](#iaddress).[`value`](#value-4)

##### ZeroAddressEthereum

> `static` **ZeroAddressEthereum**: [`Address`](#address)

CONSTANTS

#### Methods

##### equals()

> **equals**(`address`): `boolean`

PUBLIC METHODS

###### Parameters

###### address

[`Address`](#address)

###### Returns

`boolean`

###### Implementation of

[`IAddress`](#iaddress).[`equals`](#equals-7)

##### toBigNumber()

> **toBigNumber**(): `BigNumber`

###### Returns

`BigNumber`

###### See

IValueConverter.toBigNumber

##### toSolidityValue()

> **toSolidityValue**(): `` `0x${string}` ``

###### Returns

`` `0x${string}` ``

###### See

IValueConverter.toBigNumber

###### Implementation of

[`IAddress`](#iaddress).[`toSolidityValue`](#tosolidityvalue-5)

##### toString()

> **toString**(): `string`

###### Returns

`string`

###### See

IPrintable.toString

###### Implementation of

[`IAddress`](#iaddress).[`toString`](#tostring-22)

##### createFrom()

> `static` **createFrom**(`params`): [`Address`](#address)

FACTORY METHODS

###### Parameters

###### params

[`AddressParameters`](#addressparameters)

###### Returns

[`Address`](#address)

##### createFromEthereum()

> `static` **createFromEthereum**(`params`): [`Address`](#address)

###### Parameters

###### params

###### value

`string`

###### Returns

[`Address`](#address)

##### getType()

> `static` **getType**(`address`): [`AddressType`](../common/src/README.md#addresstype)

###### Parameters

###### address

`string`

###### Returns

[`AddressType`](../common/src/README.md#addresstype)

##### isValid()

> `static` **isValid**(`address`): `boolean`

###### Parameters

###### address

`string`

###### Returns

`boolean`

***

### BalanceChange

#### Implements

- [`IBalanceChange`](#ibalancechange)

#### Constructors

##### Constructor

> **new BalanceChange**(`params`): [`BalanceChange`](#balancechange)

###### Parameters

###### params

[`IBalanceChangeData`](#ibalancechangedata)

###### Returns

[`BalanceChange`](#balancechange)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

###### Implementation of

[`IBalanceChange`](#ibalancechange).[`[___signature__]`](#___signature__-39)

##### amount

> `readonly` **amount**: [`ITokenAmount`](#itokenamount)

###### Implementation of

[`IBalanceChange`](#ibalancechange).[`amount`](#amount-4)

##### fiatValue

> `readonly` **fiatValue**: [`IFiatCurrencyAmount`](#ifiatcurrencyamount)

###### Implementation of

[`IBalanceChange`](#ibalancechange).[`fiatValue`](#fiatvalue-2)

##### token

> `readonly` **token**: [`IToken`](#itoken)

###### Implementation of

[`IBalanceChange`](#ibalancechange).[`token`](#token-5)

***

### Chain

Chain
Implementation of the IChain interface for the SDK Client

#### Implements

- [`IChain`](#ichain)

#### Constructors

##### Constructor

> **new Chain**(`params`): [`Chain`](#chain)

###### Parameters

###### params

###### chainInfo

[`ChainInfo`](#chaininfo-1)

###### protocolsManager

[`ProtocolsManagerClient`](#protocolsmanagerclient)

###### tokensManager

[`TokensManagerClient`](#tokensmanagerclient)

###### Returns

[`Chain`](#chain)

#### Properties

##### chainInfo

> `readonly` **chainInfo**: [`IChainInfo`](#ichaininfo)

The information of the chain

###### Implementation of

[`IChain`](#ichain).[`chainInfo`](#chaininfo-6)

##### protocols

> `readonly` **protocols**: [`IProtocolsManagerClient`](#iprotocolsmanagerclient)

The protocols manager client for the chain, allows to retrieve protocols on the chain

###### Implementation of

[`IChain`](#ichain).[`protocols`](#protocols-3)

##### tokens

> `readonly` **tokens**: [`ITokensManagerClient`](#itokensmanagerclient)

The tokens manager client for the chain, allows to retrieve tokens on the chain

###### Implementation of

[`IChain`](#ichain).[`tokens`](#tokens-3)

#### Methods

##### toString()

> **toString**(): `string`

Returns a string representation of an object.

###### Returns

`string`

***

### ChainInfo

ChainInfo

#### See

IChainInfo

#### Implements

- [`IChainInfo`](#ichaininfo)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

###### Implementation of

[`IChainInfo`](#ichaininfo).[`[___signature__]`](#___signature__-40)

##### chainId

> `readonly` **chainId**: [`ChainId`](#chainid-2)

ATTRIBUTES

###### Implementation of

[`IChainInfo`](#ichaininfo).[`chainId`](#chainid-1)

##### name

> `readonly` **name**: `string`

The name of the network

###### Implementation of

[`IChainInfo`](#ichaininfo).[`name`](#name-7)

#### Methods

##### equals()

> **equals**(`chainInfo`): `boolean`

equals
Checks if two chain infos are equal

###### Parameters

###### chainInfo

[`ChainInfo`](#chaininfo-1)

The chain info to compare

###### Returns

`boolean`

true if the chain infos are equal

Equality is determined by the chain ID

###### Implementation of

[`IChainInfo`](#ichaininfo).[`equals`](#equals-8)

##### toString()

> **toString**(): `string`

toString
Returns a string representation of the object

###### Returns

`string`

string

The string representation should have enough info to debug the object

###### Implementation of

[`IChainInfo`](#ichaininfo).[`toString`](#tostring-23)

##### createFrom()

> `static` **createFrom**(`params`): [`ChainInfo`](#chaininfo-1)

FACTORY METHODS

###### Parameters

###### params

[`ChainInfoParameters`](#chaininfoparameters)

###### Returns

[`ChainInfo`](#chaininfo-1)

***

### ChainsManagerClient

ChainsManagerClient
Implementation of the IChainsManager interface for the SDK Client

#### Extends

- `IRPCClient`

#### Implements

- [`IChainsManagerClient`](#ichainsmanagerclient)

#### Constructors

##### Constructor

> **new ChainsManagerClient**(`params`): [`ChainsManagerClient`](#chainsmanagerclient)

###### Parameters

###### params

###### rpcClient

`any`

###### Returns

[`ChainsManagerClient`](#chainsmanagerclient)

###### Overrides

`IRPCClient.constructor`

#### Methods

##### getChain()

> **getChain**(`params`): `Promise`\<[`Chain`](#chain)\>

getChain
Retrieves a chain by its chain info

###### Parameters

###### params

###### chainInfo

[`IChainInfoData`](#ichaininfodata)

The info associated with the chain to retrieve

###### Returns

`Promise`\<[`Chain`](#chain)\>

The chain for the given chain info

###### Implementation of

[`IChainsManagerClient`](#ichainsmanagerclient).[`getChain`](#getchain-1)

##### getChainById()

> **getChainById**(`params`): `Promise`\<[`Chain`](#chain)\>

getChainById
Retrieves a network by its chain ID

###### Parameters

###### params

###### chainId

`number`

The chain ID of the network to retrieve

###### Returns

`Promise`\<[`Chain`](#chain)\>

The network with the given chain ID

###### Implementation of

[`IChainsManagerClient`](#ichainsmanagerclient).[`getChainById`](#getchainbyid-1)

##### getSupportedChains()

> **getSupportedChains**(): `Promise`\<[`ChainInfo`](#chaininfo-1)[]\>

getSupportedChains
Retrieves the list of supported chains

###### Returns

`Promise`\<[`ChainInfo`](#chaininfo-1)[]\>

The list of supported chains

###### Implementation of

[`IChainsManagerClient`](#ichainsmanagerclient).[`getSupportedChains`](#getsupportedchains-1)

***

### CollateralInfo

CollateralInfo

#### See

ICollateralInfo

#### Implements

- [`ICollateralInfo`](#icollateralinfo)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

###### Implementation of

[`ICollateralInfo`](#icollateralinfo).[`[___signature__]`](#___signature__-41)

##### liquidationPenalty

> `readonly` **liquidationPenalty**: [`IPercentage`](#ipercentage)

The penalty that is charged for liquidating a position

###### Implementation of

[`ICollateralInfo`](#icollateralinfo).[`liquidationPenalty`](#liquidationpenalty-1)

##### liquidationThreshold

> `readonly` **liquidationThreshold**: [`IRiskRatio`](#iriskratio)

The ratio between the collateral and the debt at which the position could be liquidated

###### Implementation of

[`ICollateralInfo`](#icollateralinfo).[`liquidationThreshold`](#liquidationthreshold-1)

##### maxSupply

> `readonly` **maxSupply**: [`ITokenAmount`](#itokenamount)

The maximum amount of the token that can be supplied

###### Implementation of

[`ICollateralInfo`](#icollateralinfo).[`maxSupply`](#maxsupply-1)

##### price

> `readonly` **price**: [`IPrice`](#iprice)

The price of the token in the protocol's default denomination

###### Implementation of

[`ICollateralInfo`](#icollateralinfo).[`price`](#price-3)

##### priceUSD

> `readonly` **priceUSD**: [`IPrice`](#iprice)

The price of the token in USD

###### Implementation of

[`ICollateralInfo`](#icollateralinfo).[`priceUSD`](#priceusd-2)

##### token

> `readonly` **token**: [`IToken`](#itoken)

ATTRIBUTES

###### Implementation of

[`ICollateralInfo`](#icollateralinfo).[`token`](#token-6)

##### tokensLocked

> `readonly` **tokensLocked**: [`ITokenAmount`](#itokenamount)

The amount of the token that is currently locked in the pool

###### Implementation of

[`ICollateralInfo`](#icollateralinfo).[`tokensLocked`](#tokenslocked-1)

#### Methods

##### createFrom()

> `static` **createFrom**(`params`): [`CollateralInfo`](#collateralinfo)

FACTORY METHODS

###### Parameters

###### params

[`CollateralInfoParameters`](#collateralinfoparameters)

###### Returns

[`CollateralInfo`](#collateralinfo)

***

### DataOrchestrator

Orchestrates the layered caching strategy.

#### Constructors

##### Constructor

> **new DataOrchestrator**(`config`, `activeLayers`): [`DataOrchestrator`](#dataorchestrator)

###### Parameters

###### config

[`GlobalCacheConfig`](#globalcacheconfig)

###### activeLayers

[`ICacheLayer`](#icachelayer)[]

###### Returns

[`DataOrchestrator`](#dataorchestrator)

#### Methods

##### execute()

> **execute**\<`T`\>(`profile`, `cacheKey`, `fetcher`, `overrideLayers?`): `Promise`\<`T`\>

Fetches data using the layered caching strategy.

###### Type Parameters

###### T

`T`

###### Parameters

###### profile

[`VolatilityProfile`](../common/src/README.md#volatilityprofile)

The volatility profile of the data.

###### cacheKey

`string`

A globally unique string identifying the call.

###### fetcher

() => `Promise`\<`T`\>

The fallback function to execute on a cache miss.

###### overrideLayers?

[`CacheLayer`](#cachelayer)[]

Optional layers to override the global policy.

###### Returns

`Promise`\<`T`\>

The resolved data.

##### notifyNewBlock()

> **notifyNewBlock**(`blockNumber`): `Promise`\<`void`\>

Broadcasts a new block event to all active cache layers.

###### Parameters

###### blockNumber

`bigint`

###### Returns

`Promise`\<`void`\>

***

### DebtInfo

DebtInfo

#### See

IDebtInfo

For now this class can be re-used among all the protocols and there is no need for specialization

#### Implements

- [`IDebtInfo`](#idebtinfo)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

###### Implementation of

[`IDebtInfo`](#idebtinfo).[`[___signature__]`](#___signature__-42)

##### debtAvailable

> `readonly` **debtAvailable**: [`ITokenAmount`](#itokenamount)

The amount of the token that can still be borrowed

###### Implementation of

[`IDebtInfo`](#idebtinfo).[`debtAvailable`](#debtavailable-1)

##### debtCeiling

> `readonly` **debtCeiling**: [`ITokenAmount`](#itokenamount)

The maximum amount of the token that can be borrowed

###### Implementation of

[`IDebtInfo`](#idebtinfo).[`debtCeiling`](#debtceiling-1)

##### dustLimit

> `readonly` **dustLimit**: [`ITokenAmount`](#itokenamount)

The minimum amount of the token that can be borrowed

###### Implementation of

[`IDebtInfo`](#idebtinfo).[`dustLimit`](#dustlimit-1)

##### interestRate

> `readonly` **interestRate**: [`IPercentage`](#ipercentage)

The interest rate of the debt. TODO: which units??

###### Implementation of

[`IDebtInfo`](#idebtinfo).[`interestRate`](#interestrate-1)

##### originationFee

> `readonly` **originationFee**: [`IPercentage`](#ipercentage)

The fee that is charged for creating a new debt

###### Implementation of

[`IDebtInfo`](#idebtinfo).[`originationFee`](#originationfee-1)

##### price

> `readonly` **price**: [`IPrice`](#iprice)

The price of the token in the protocol's default denomination

###### Implementation of

[`IDebtInfo`](#idebtinfo).[`price`](#price-4)

##### priceUSD

> `readonly` **priceUSD**: [`IPrice`](#iprice)

The price of the token in USD

###### Implementation of

[`IDebtInfo`](#idebtinfo).[`priceUSD`](#priceusd-3)

##### token

> `readonly` **token**: [`IToken`](#itoken)

ATTRIBUTES

###### Implementation of

[`IDebtInfo`](#idebtinfo).[`token`](#token-7)

##### totalBorrowed

> `readonly` **totalBorrowed**: [`ITokenAmount`](#itokenamount)

The total amount of the token borrowed

###### Implementation of

[`IDebtInfo`](#idebtinfo).[`totalBorrowed`](#totalborrowed-1)

#### Methods

##### createFrom()

> `static` **createFrom**(`params`): [`DebtInfo`](#debtinfo)

FACTORY METHODS

###### Parameters

###### params

[`DebtInfoParameters`](#debtinfoparameters)

###### Returns

[`DebtInfo`](#debtinfo)

***

### FiatCurrencyAmount

FiatCurrencyAmount

#### See

IFiatCurrencyAmount

#### Implements

- [`IFiatCurrencyAmount`](#ifiatcurrencyamount)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

###### Implementation of

[`IFiatCurrencyAmount`](#ifiatcurrencyamount).[`[___signature__]`](#___signature__-43)

##### amount

> `readonly` **amount**: `string`

The amount in floating point format

###### Implementation of

[`IFiatCurrencyAmount`](#ifiatcurrencyamount).[`amount`](#amount-5)

##### fiat

> `readonly` **fiat**: [`FiatCurrency`](../common/src/README.md#fiatcurrency)

Fiat currency for the amount

###### Implementation of

[`IFiatCurrencyAmount`](#ifiatcurrencyamount).[`fiat`](#fiat-1)

#### Methods

##### add()

> **add**(`fiatToAdd`): [`IFiatCurrencyAmount`](#ifiatcurrencyamount)

###### Parameters

###### fiatToAdd

[`FiatCurrencyAmount`](#fiatcurrencyamount)

###### Returns

[`IFiatCurrencyAmount`](#ifiatcurrencyamount)

###### See

IFiatCurrencyAmount.add

###### Implementation of

[`IFiatCurrencyAmount`](#ifiatcurrencyamount).[`add`](#add-4)

##### divide()

> **divide**\<`InputParams`, `ReturnType`\>(`divisor`): `ReturnType`

###### Type Parameters

###### InputParams

`InputParams` *extends* [`FiatCurrencyAmountMulDivParamType`](#fiatcurrencyamountmuldivparamtype)

###### ReturnType

`ReturnType` = [`FiatCurrencyAmountMulDivReturnType`](#fiatcurrencyamountmuldivreturntype)\<`InputParams`\>

###### Parameters

###### divisor

`InputParams`

###### Returns

`ReturnType`

###### See

IFiatCurrencyAmount.divide

###### Implementation of

[`IFiatCurrencyAmount`](#ifiatcurrencyamount).[`divide`](#divide-4)

##### multiply()

> **multiply**\<`InputParams`, `ReturnType`\>(`multiplier`): `ReturnType`

###### Type Parameters

###### InputParams

`InputParams` *extends* [`FiatCurrencyAmountMulDivParamType`](#fiatcurrencyamountmuldivparamtype)

###### ReturnType

`ReturnType` = [`FiatCurrencyAmountMulDivReturnType`](#fiatcurrencyamountmuldivreturntype)\<`InputParams`\>

###### Parameters

###### multiplier

`InputParams`

###### Returns

`ReturnType`

###### See

IFiatCurrencyAmount.multiply

###### Implementation of

[`IFiatCurrencyAmount`](#ifiatcurrencyamount).[`multiply`](#multiply-4)

##### subtract()

> **subtract**(`fiatToSubstract`): [`IFiatCurrencyAmount`](#ifiatcurrencyamount)

###### Parameters

###### fiatToSubstract

[`FiatCurrencyAmount`](#fiatcurrencyamount)

###### Returns

[`IFiatCurrencyAmount`](#ifiatcurrencyamount)

###### See

IFiatCurrencyAmount.subtract

###### Implementation of

[`IFiatCurrencyAmount`](#ifiatcurrencyamount).[`subtract`](#subtract-4)

##### toBigNumber()

> **toBigNumber**(): `BigNumber`

###### Returns

`BigNumber`

###### See

IValueConverter.toBigNumber

###### Implementation of

[`IFiatCurrencyAmount`](#ifiatcurrencyamount).[`toBigNumber`](#tobignumber-5)

##### toSolidityValue()

> **toSolidityValue**(`params?`): `bigint`

###### Parameters

###### params?

###### decimals

`number`

###### Returns

`bigint`

###### See

IValueConverter.toBigNumber

###### Implementation of

[`IFiatCurrencyAmount`](#ifiatcurrencyamount).[`toSolidityValue`](#tosolidityvalue-6)

##### toString()

> **toString**(): `string`

###### Returns

`string`

###### See

IPrintable.toString

###### Implementation of

[`IFiatCurrencyAmount`](#ifiatcurrencyamount).[`toString`](#tostring-24)

##### createFrom()

> `static` **createFrom**(`params`): [`IFiatCurrencyAmount`](#ifiatcurrencyamount)

FACTORY

###### Parameters

###### params

[`FiatCurrencyAmountParameters`](#fiatcurrencyamountparameters)

###### Returns

[`IFiatCurrencyAmount`](#ifiatcurrencyamount)

***

### GasEstimation

#### Implements

- [`IGasEstimation`](#igasestimation)

#### Constructors

##### Constructor

> **new GasEstimation**(`params`): [`GasEstimation`](#gasestimation)

###### Parameters

###### params

[`IGasEstimationData`](#igasestimationdata)

###### Returns

[`GasEstimation`](#gasestimation)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

###### Implementation of

[`IGasEstimation`](#igasestimation).[`[___signature__]`](#___signature__-44)

##### gasFiatValue

> `readonly` **gasFiatValue**: [`IFiatCurrencyAmount`](#ifiatcurrencyamount)

###### Implementation of

[`IGasEstimation`](#igasestimation).[`gasFiatValue`](#gasfiatvalue-1)

##### gasTokenAmount

> `readonly` **gasTokenAmount**: [`ITokenAmount`](#itokenamount)

###### Implementation of

[`IGasEstimation`](#igasestimation).[`gasTokenAmount`](#gastokenamount-1)

***

### Holding

Holding

#### See

IHolding

#### Implements

- [`IHolding`](#iholding)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

###### Implementation of

[`IHolding`](#iholding).[`[___signature__]`](#___signature__-45)

##### amount

> `readonly` **amount**: [`ITokenAmount`](#itokenamount)

ATTRIBUTES

###### Implementation of

[`IHolding`](#iholding).[`amount`](#amount-6)

##### fiatValue

> `readonly` **fiatValue**: [`IFiatCurrencyAmount`](#ifiatcurrencyamount)

###### Implementation of

[`IHolding`](#iholding).[`fiatValue`](#fiatvalue-3)

#### Methods

##### toString()

> **toString**(): `string`

toString

###### Returns

`string`

###### Implementation of

[`IHolding`](#iholding).[`toString`](#tostring-25)

##### createFrom()

> `static` **createFrom**(`params`): [`Holding`](#holding)

FACTORY

###### Parameters

###### params

[`HoldingParameters`](#holdingparameters)

###### Returns

[`Holding`](#holding)

***

### `abstract` LendingPool

LendingPool

#### See

ILendingPool

The class is abstract to force each protocol to implement it's own version of the LendingPool by
customizing the PoolId

#### Extends

- `Pool`

#### Extended by

- [`AaveV3LendingPool`](../protocol-plugins/service/src.md#aavev3lendingpool)

#### Implements

- [`ILendingPool`](#ilendingpool)
- [`IPrintable`](../common/src/README.md#iprintable)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

###### Implementation of

[`ILendingPool`](#ilendingpool).[`[___signature__]`](#___signature__-47)

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

###### Implementation of

`ILendingPool.[___signature__]`

###### Inherited from

`Pool.[___signature__]`

##### collateralToken

> `readonly` **collateralToken**: [`IToken`](#itoken)

Collateral token used to collateralized the pool

###### Implementation of

[`ILendingPool`](#ilendingpool).[`collateralToken`](#collateraltoken-1)

##### debtToken

> `readonly` **debtToken**: [`IToken`](#itoken)

Debt token, which can be borrowed from the pool

###### Implementation of

[`ILendingPool`](#ilendingpool).[`debtToken`](#debttoken-1)

##### id

> `abstract` `readonly` **id**: [`ILendingPoolId`](#ilendingpoolid-1)

ATTRIBUTES

###### Implementation of

[`ILendingPool`](#ilendingpool).[`id`](#id-8)

###### Overrides

`Pool.id`

##### type

> `readonly` **type**: `Lending` = `PoolType.Lending`

ATTRIBUTES

###### Implementation of

[`ILendingPool`](#ilendingpool).[`type`](#type-16)

###### Overrides

`Pool.type`

#### Methods

##### toString()

> **toString**(): `string`

###### Returns

`string`

###### See

IPrintable.toString

###### Implementation of

[`IPrintable`](../common/src/README.md#iprintable).[`toString`](../common/src/README.md#tostring-29)

###### Overrides

`Pool.toString`

***

### `abstract` LendingPoolId

LendingPoolId

#### See

ILendingPoolId

#### Extends

- [`PoolId`](#abstract-poolid)

#### Extended by

- [`AaveV3LendingPoolId`](../protocol-plugins/service/src.md#aavev3lendingpoolid-1)

#### Implements

- [`ILendingPoolId`](#ilendingpoolid-1)
- [`IPrintable`](../common/src/README.md#iprintable)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

###### Implementation of

[`ILendingPoolId`](#ilendingpoolid-1).[`[___signature__]`](#___signature__-49)

###### Inherited from

[`PoolId`](#abstract-poolid).[`[___signature__]`](#___signature__-20)

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

###### Implementation of

`ILendingPoolId.[___signature__]`

###### Inherited from

`PoolId.[___signature__]`

##### protocol

> `abstract` `readonly` **protocol**: [`IProtocol`](#iprotocol)

Protocol where the pool is

###### Implementation of

[`ILendingPoolId`](#ilendingpoolid-1).[`protocol`](#protocol-2)

###### Inherited from

[`PoolId`](#abstract-poolid).[`protocol`](#protocol-1)

##### type

> `readonly` **type**: `Lending` = `PoolType.Lending`

ATTRIBUTES

###### Implementation of

[`ILendingPoolId`](#ilendingpoolid-1).[`type`](#type-17)

###### Overrides

[`PoolId`](#abstract-poolid).[`type`](#type-7)

#### Methods

##### toString()

> **toString**(): `string`

###### Returns

`string`

###### See

IPrintable.toString

###### Implementation of

[`IPrintable`](../common/src/README.md#iprintable).[`toString`](../common/src/README.md#tostring-29)

###### Overrides

[`PoolId`](#abstract-poolid).[`toString`](#tostring-10)

***

### `abstract` LendingPoolInfo

LendingPoolInfo

#### See

ILendingPoolInfo

The class is abstract to force each protocol to implement it's own version of the LendingPoolInfo by
customizing the PoolId

#### Extends

- `PoolInfo`

#### Implements

- [`ILendingPoolInfo`](#ilendingpoolinfo)
- [`IPrintable`](../common/src/README.md#iprintable)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

###### Implementation of

[`ILendingPoolInfo`](#ilendingpoolinfo).[`[___signature__]`](#___signature__-51)

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

###### Implementation of

`ILendingPoolInfo.[___signature__]`

###### Inherited from

`PoolInfo.[___signature__]`

##### collateral

> `readonly` **collateral**: [`ICollateralInfo`](#icollateralinfo)

The collateral information of the pool

###### Implementation of

[`ILendingPoolInfo`](#ilendingpoolinfo).[`collateral`](#collateral-1)

##### debt

> `readonly` **debt**: [`IDebtInfo`](#idebtinfo)

The debt information of the pool

###### Implementation of

[`ILendingPoolInfo`](#ilendingpoolinfo).[`debt`](#debt-1)

##### id

> `abstract` `readonly` **id**: [`ILendingPoolId`](#ilendingpoolid-1)

ATTRIBUTES

###### Implementation of

[`ILendingPoolInfo`](#ilendingpoolinfo).[`id`](#id-9)

###### Overrides

`PoolInfo.id`

##### type

> `readonly` **type**: `Lending` = `PoolType.Lending`

ATTRIBUTES

###### Implementation of

[`ILendingPoolInfo`](#ilendingpoolinfo).[`type`](#type-18)

###### Overrides

`PoolInfo.type`

#### Methods

##### toString()

> **toString**(): `string`

###### Returns

`string`

###### See

IPrintable.toString

###### Implementation of

[`IPrintable`](../common/src/README.md#iprintable).[`toString`](../common/src/README.md#tostring-29)

###### Overrides

`PoolInfo.toString`

***

### `abstract` LendingPosition

LendingPosition

#### See

ILendingPosition

#### Extends

- [`Position`](#abstract-position)

#### Extended by

- [`AaveV3LendingPosition`](../protocol-plugins/service/src.md#aavev3lendingposition)

#### Implements

- [`ILendingPosition`](#ilendingposition)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

###### Implementation of

[`ILendingPosition`](#ilendingposition).[`[___signature__]`](#___signature__-53)

###### Inherited from

[`Position`](#abstract-position).[`[___signature__]`](#___signature__-21)

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

###### Implementation of

`ILendingPosition.[___signature__]`

###### Inherited from

`Position.[___signature__]`

##### collateralAmount

> `readonly` **collateralAmount**: [`ITokenAmount`](#itokenamount)

Amount of collateral deposited in the pool

###### Implementation of

[`ILendingPosition`](#ilendingposition).[`collateralAmount`](#collateralamount-1)

##### debtAmount

> `readonly` **debtAmount**: [`ITokenAmount`](#itokenamount)

Amount of debt borrowed from the pool

###### Implementation of

[`ILendingPosition`](#ilendingposition).[`debtAmount`](#debtamount-1)

##### id

> `readonly` **id**: [`ILendingPositionId`](#ilendingpositionid-1)

Unique identifier for the position inside the Lending protocol

###### Implementation of

[`ILendingPosition`](#ilendingposition).[`id`](#id-10)

###### Overrides

[`Position`](#abstract-position).[`id`](#id-4)

##### pool

> `abstract` `readonly` **pool**: [`ILendingPool`](#ilendingpool)

Pool where the position is

###### Implementation of

[`ILendingPosition`](#ilendingposition).[`pool`](#pool-2)

###### Overrides

[`Position`](#abstract-position).[`pool`](#pool-1)

##### subtype

> `readonly` **subtype**: [`LendingPositionType`](../common/src/README.md#lendingpositiontype)

ATTRIBUTES

###### Implementation of

[`ILendingPosition`](#ilendingposition).[`subtype`](#subtype-2)

##### type

> `readonly` **type**: `Lending` = `PositionType.Lending`

ATTRIBUTES

###### Implementation of

[`ILendingPosition`](#ilendingposition).[`type`](#type-19)

###### Overrides

[`Position`](#abstract-position).[`type`](#type-8)

***

### `abstract` LendingPositionId

LendingPositionId

#### See

ILendingPositionId

#### Extends

- [`PositionId`](#abstract-positionid)

#### Extended by

- [`AaveV3LendingPositionId`](../protocol-plugins/service/src.md#aavev3lendingpositionid-1)

#### Implements

- [`ILendingPositionIdData`](#ilendingpositioniddata)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

###### Inherited from

[`PositionId`](#abstract-positionid).[`[___signature__]`](#___signature__-22)

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

###### Inherited from

`PositionId.[___signature__]`

##### id

> `readonly` **id**: `string`

ATTRIBUTES

###### Implementation of

`ILendingPositionIdData.id`

###### Inherited from

[`PositionId`](#abstract-positionid).[`id`](#id-5)

##### type

> `readonly` **type**: `Lending` = `PositionType.Lending`

ATTRIBUTES

###### Implementation of

`ILendingPositionIdData.type`

###### Overrides

[`PositionId`](#abstract-positionid).[`type`](#type-9)

#### Methods

##### toString()

> **toString**(): `string`

###### Returns

`string`

###### See

IPrintable.toString

###### Overrides

[`PositionId`](#abstract-positionid).[`toString`](#tostring-11)

***

### LendingSimulation

Simulation

#### See

ISimulation

#### Extends

- [`Simulation`](#abstract-simulation)

#### Constructors

##### Constructor

> **new LendingSimulation**(`params`): [`LendingSimulation`](#lendingsimulation)

###### Parameters

###### params

[`LendingSimulationParams`](#lendingsimulationparams)

###### Returns

[`LendingSimulation`](#lendingsimulation)

###### Overrides

`Simulation.constructor`

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

###### Inherited from

[`Simulation`](#abstract-simulation).[`[___signature__]`](#___signature__-27)

##### balanceChanges

> `readonly` **balanceChanges**: [`IBalanceChange`](#ibalancechange)[]

Balance changes resulting from the simulation

###### Overrides

[`Simulation`](#abstract-simulation).[`balanceChanges`](#balancechanges-1)

##### gasEstimations

> `readonly` **gasEstimations**: [`IGasEstimation`](#igasestimation)[]

Gas estimations for the simulation steps

###### Overrides

[`Simulation`](#abstract-simulation).[`gasEstimations`](#gasestimations-1)

##### steps

> `readonly` **steps**: `Steps`[]

The sequence of steps to execute the simulation

###### Overrides

[`Simulation`](#abstract-simulation).[`steps`](#steps-1)

##### type

> `readonly` **type**: `Lend` = `SimulationType.Lend`

ATTRIBUTES

###### Overrides

[`Simulation`](#abstract-simulation).[`type`](#type-12)

***

### MemoryCacheLayer

L1: In-Memory Cache implementation.
Fast, temporary cache that survives only until page refresh.

#### Implements

- [`ICacheLayer`](#icachelayer)

#### Constructors

##### Constructor

> **new MemoryCacheLayer**(): [`MemoryCacheLayer`](#memorycachelayer)

###### Returns

[`MemoryCacheLayer`](#memorycachelayer)

#### Properties

##### layerType

> `readonly` **layerType**: [`L1_MEMORY`](#l1_memory) = `CacheLayer.L1_MEMORY`

The identifier for this layer.

###### Implementation of

[`ICacheLayer`](#icachelayer).[`layerType`](#layertype-1)

#### Methods

##### get()

> **get**\<`T`\>(`key`, `strategy`): `Promise`\<`T`\>

Retrieves a value from the cache.

###### Type Parameters

###### T

`T`

###### Parameters

###### key

`string`

The unique cache key.

###### strategy

[`InvalidationStrategy`](#invalidationstrategy)

The invalidation strategy to determine if the key is stale.

###### Returns

`Promise`\<`T`\>

The cached value, or null if missing/stale.

###### Implementation of

[`ICacheLayer`](#icachelayer).[`get`](#get-1)

##### invalidate()

> **invalidate**(`key`): `Promise`\<`void`\>

Manually invalidates a specific cache key.

###### Parameters

###### key

`string`

The unique cache key.

###### Returns

`Promise`\<`void`\>

###### Implementation of

[`ICacheLayer`](#icachelayer).[`invalidate`](#invalidate-1)

##### onNewBlock()

> **onNewBlock**(`_blockNumber`): `Promise`\<`void`\>

Global invalidation event (e.g., when a new block arrives).
Caches that respect BLOCK_BOUND TTLs should clear relevant data here.

###### Parameters

###### \_blockNumber

`bigint`

###### Returns

`Promise`\<`void`\>

###### Implementation of

[`ICacheLayer`](#icachelayer).[`onNewBlock`](#onnewblock-1)

##### set()

> **set**\<`T`\>(`key`, `value`, `strategy?`): `Promise`\<`void`\>

Sets a value in the cache.

###### Type Parameters

###### T

`T`

###### Parameters

###### key

`string`

The unique cache key.

###### value

`T`

The value to cache.

###### strategy?

[`InvalidationStrategy`](#invalidationstrategy)

Optional strategy to determine when to invalidate.

###### Returns

`Promise`\<`void`\>

###### Implementation of

[`ICacheLayer`](#icachelayer).[`set`](#set-1)

***

### OrdersManagerClient

#### See

IOrdersManagerClient

#### Implements

- [`IOrdersManagerClient`](#iordersmanagerclient)

#### Constructors

##### Constructor

> **new OrdersManagerClient**(`params`): [`OrdersManagerClient`](#ordersmanagerclient)

###### Parameters

###### params

###### rpcClient

`any`

###### Returns

[`OrdersManagerClient`](#ordersmanagerclient)

#### Methods

##### buildOrder()

> **buildOrder**(`params`): `Promise`\<[`Order`](#order)\>

###### Parameters

###### params

`IBuildOrderInputs`

###### Returns

`Promise`\<[`Order`](#order)\>

###### See

IOrdersManagerClient.buildOrder

###### Implementation of

[`IOrdersManagerClient`](#iordersmanagerclient).[`buildOrder`](#buildorder-1)

***

### Percentage

Percentage

#### See

IPercentage

#### Implements

- [`IPercentage`](#ipercentage)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

###### Implementation of

[`IPercentage`](#ipercentage).[`[___signature__]`](#___signature__-56)

##### value

> `readonly` **value**: `number`

ATTRIBUTES

###### Implementation of

[`IPercentage`](#ipercentage).[`value`](#value-5)

##### Percent100

> `static` **Percent100**: [`Percentage`](#percentage)

The percentage of 100% with the given `PERCENTAGE_DECIMALS`

##### PERCENTAGE\_DECIMALS

> `static` **PERCENTAGE\_DECIMALS**: `number`

The number of decimals used to represent the percentage in Solidity

##### PERCENTAGE\_FACTOR

> `static` **PERCENTAGE\_FACTOR**: `number`

The factor used to scale the percentage

#### Methods

##### add()

> **add**(`percentage`): [`IPercentage`](#ipercentage)

###### Parameters

###### percentage

[`IPercentage`](#ipercentage)

###### Returns

[`IPercentage`](#ipercentage)

###### See

IPercentage.add

###### Implementation of

[`IPercentage`](#ipercentage).[`add`](#add-5)

##### divide()

> **divide**(`divisor`): [`IPercentage`](#ipercentage)

###### Parameters

###### divisor

`string` \| `number` \| [`IPercentage`](#ipercentage)

###### Returns

[`IPercentage`](#ipercentage)

###### See

IPercentage.divide

###### Implementation of

[`IPercentage`](#ipercentage).[`divide`](#divide-5)

##### multiply()

> **multiply**(`multiplier`): [`IPercentage`](#ipercentage)

###### Parameters

###### multiplier

`string` \| `number` \| [`IPercentage`](#ipercentage)

###### Returns

[`IPercentage`](#ipercentage)

###### See

IPercentage.multiply

###### Implementation of

[`IPercentage`](#ipercentage).[`multiply`](#multiply-5)

##### subtract()

> **subtract**(`percentage`): [`IPercentage`](#ipercentage)

###### Parameters

###### percentage

[`IPercentage`](#ipercentage)

###### Returns

[`IPercentage`](#ipercentage)

###### See

IPercentage.subtract

###### Implementation of

[`IPercentage`](#ipercentage).[`subtract`](#subtract-5)

##### toBigNumber()

> **toBigNumber**(): `BigNumber`

###### Returns

`BigNumber`

###### See

IValueConverter.toBigNumber

###### Implementation of

[`IPercentage`](#ipercentage).[`toBigNumber`](#tobignumber-6)

##### toComplement()

> **toComplement**(): [`IPercentage`](#ipercentage)

###### Returns

[`IPercentage`](#ipercentage)

###### See

IPercentage.toComplement

###### Implementation of

[`IPercentage`](#ipercentage).[`toComplement`](#tocomplement-1)

##### toProportion()

> **toProportion**(): `number`

###### Returns

`number`

###### See

IPercentage.toProportion

###### Implementation of

[`IPercentage`](#ipercentage).[`toProportion`](#toproportion-1)

##### toSolidityValue()

> **toSolidityValue**(`params?`): `bigint`

###### Parameters

###### params?

###### decimals

`number`

###### Returns

`bigint`

###### See

IValueConverter.toSolidityValue

###### Implementation of

[`IPercentage`](#ipercentage).[`toSolidityValue`](#tosolidityvalue-7)

##### toString()

> **toString**(): `string`

###### Returns

`string`

###### See

IPrintable.toString

###### Implementation of

[`IPercentage`](#ipercentage).[`toString`](#tostring-27)

##### createFrom()

> `static` **createFrom**(`params`): [`Percentage`](#percentage)

FACTORY

###### Parameters

###### params

[`PercentageParameters`](#percentageparameters)

###### Returns

[`Percentage`](#percentage)

##### createFromSolidityValue()

> `static` **createFromSolidityValue**(`params`): [`Percentage`](#percentage)

Creates a Percentage instance from a Solidity value with PERCENTAGE_DECIMALS decimals

###### Parameters

###### params

###### value

`bigint`

The Solidity value

###### Returns

[`Percentage`](#percentage)

The Percentage instance

***

### `abstract` PoolId

PoolId

#### See

IPoolIdData

#### Extended by

- [`LendingPoolId`](#abstract-lendingpoolid)

#### Implements

- [`IPoolId`](#ipoolid-1)
- [`IPrintable`](../common/src/README.md#iprintable)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

###### Implementation of

[`IPoolId`](#ipoolid-1).[`[___signature__]`](#___signature__-58)

##### protocol

> `abstract` `readonly` **protocol**: [`IProtocol`](#iprotocol)

Protocol where the pool is

###### Implementation of

[`IPoolId`](#ipoolid-1).[`protocol`](#protocol-3)

##### type

> `abstract` `readonly` **type**: [`PoolType`](../common/src/README.md#pooltype)

ATTRIBUTES

###### Implementation of

[`IPoolId`](#ipoolid-1).[`type`](#type-22)

#### Methods

##### toString()

> **toString**(): `string`

###### Returns

`string`

###### See

IPrintable.toString

###### Implementation of

[`IPrintable`](../common/src/README.md#iprintable).[`toString`](../common/src/README.md#tostring-29)

***

### PortfolioManager

IPortfolioManager
Allows to retrieve a wallet's positions by their wallet and network. This is meant to be used in isolation
             without having to retrieve a User or a Network

#### Extends

- `IRPCClient`

#### Implements

- [`IPortfolioManager`](#iportfoliomanager)

#### Constructors

##### Constructor

> **new PortfolioManager**(`params`): [`PortfolioManager`](#portfoliomanager)

###### Parameters

###### params

###### rpcClient

`any`

###### Returns

[`PortfolioManager`](#portfoliomanager)

###### Overrides

`IRPCClient.constructor`

#### Methods

##### getPositions()

> **getPositions**(`_params`): `Promise`\<[`Position`](#abstract-position)[]\>

getPositions
Retrieves all positions of the given wallet for the given networks. The positions can be filtered by
             their IDs

###### Parameters

###### \_params

###### networks

[`ChainInfo`](#chaininfo-1)[]

###### wallet

[`Wallet`](#wallet-1)

###### Returns

`Promise`\<[`Position`](#abstract-position)[]\>

The list of positions for the given wallet and networks

###### Implementation of

[`IPortfolioManager`](#iportfoliomanager).[`getPositions`](#getpositions-1)

##### getUserPortfolio()

> **getUserPortfolio**(`params`): `Promise`\<[`IUserPortfolio`](#iuserportfolio)\>

getUserPortfolio
Retrieves all holdings and positions for the user resolving their Fiat balances

###### Parameters

###### params

###### user

[`IUser`](#iuser)

The user to retrieve the portfolio for

###### Returns

`Promise`\<[`IUserPortfolio`](#iuserportfolio)\>

###### Implementation of

[`IPortfolioManager`](#iportfoliomanager).[`getUserPortfolio`](#getuserportfolio-1)

##### getWalletHoldings()

> **getWalletHoldings**(`params`): `Promise`\<[`IHolding`](#iholding)[]\>

getWalletHoldings
Fetches standard ERC20 wallet holdings

###### Parameters

###### params

###### user

[`IUser`](#iuser)

The user to retrieve the holdings for

###### Returns

`Promise`\<[`IHolding`](#iholding)[]\>

###### Implementation of

[`IPortfolioManager`](#iportfoliomanager).[`getWalletHoldings`](#getwalletholdings-1)

***

### `abstract` Position

Position

#### See

IPosition

#### Extended by

- [`LendingPosition`](#abstract-lendingposition)

#### Implements

- [`IPosition`](#iposition)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

###### Implementation of

[`IPosition`](#iposition).[`[___signature__]`](#___signature__-60)

##### id

> `abstract` `readonly` **id**: [`IPositionId`](#ipositionid-1)

Unique identifier for the position

###### Implementation of

[`IPosition`](#iposition).[`id`](#id-14)

##### pool

> `abstract` `readonly` **pool**: [`IPool`](#ipool)

Pool where the position is opened

###### Implementation of

[`IPosition`](#iposition).[`pool`](#pool-3)

##### type

> `abstract` `readonly` **type**: [`PositionType`](../common/src/README.md#positiontype)

ATTRIBUTES

###### Implementation of

[`IPosition`](#iposition).[`type`](#type-24)

***

### `abstract` PositionId

PositionId

#### See

IPositionIdData

#### Extended by

- [`LendingPositionId`](#abstract-lendingpositionid)

#### Implements

- [`IPositionId`](#ipositionid-1)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

###### Implementation of

[`IPositionId`](#ipositionid-1).[`[___signature__]`](#___signature__-61)

##### id

> `readonly` **id**: `string`

ATTRIBUTES

###### Implementation of

[`IPositionId`](#ipositionid-1).[`id`](#id-15)

##### type

> `abstract` `readonly` **type**: [`PositionType`](../common/src/README.md#positiontype)

Type of the position

###### Implementation of

[`IPositionId`](#ipositionid-1).[`type`](#type-25)

#### Methods

##### toString()

> **toString**(): `string`

###### Returns

`string`

###### See

IPrintable.toString

***

### PositionsManager

PositionsManager

#### See

IPositionsManager

#### Implements

- [`IPositionsManager`](#ipositionsmanager)
- [`IPrintable`](../common/src/README.md#iprintable)

#### Properties

##### address

> **address**: [`IAddress`](#iaddress)

Address of the Positions Manager

###### Implementation of

[`IPositionsManager`](#ipositionsmanager).[`address`](#address-5)

#### Methods

##### toString()

> **toString**(): `string`

Returns a string representation of an object.

###### Returns

`string`

###### Implementation of

[`IPrintable`](../common/src/README.md#iprintable).[`toString`](../common/src/README.md#tostring-29)

##### createFrom()

> `static` **createFrom**(`params`): [`PositionsManager`](#positionsmanager)

Factory method

###### Parameters

###### params

[`IPositionsManagerData`](#ipositionsmanagerdata)

###### Returns

[`PositionsManager`](#positionsmanager)

***

### PositionUtils

#### Constructors

##### Constructor

> **new PositionUtils**(): [`PositionUtils`](#positionutils)

###### Returns

[`PositionUtils`](#positionutils)

#### Methods

##### getLiquidationPriceInDebtTokens()

> `static` **getLiquidationPriceInDebtTokens**(`__namedParameters`): `string`

This code calculates the value of one collateral token expressed in debt tokens at which the loan-to-value (LTV) ratio will be at liquidationThreshold

###### Parameters

###### \_\_namedParameters

###### debtPriceInUsd

`string`

###### liquidationThreshold

[`Percentage`](#percentage)

###### position

[`ILendingPosition`](#ilendingposition)

###### Returns

`string`

##### getLTV()

> `static` **getLTV**(`__namedParameters`): [`IPercentage`](#ipercentage)

###### Parameters

###### \_\_namedParameters

###### collateralPriceInUsd

`string`

###### collateralTokenAmount

[`ITokenAmount`](#itokenamount)

###### debtPriceInUsd

`string`

###### debtTokenAmount

[`ITokenAmount`](#itokenamount)

###### Returns

[`IPercentage`](#ipercentage)

***

### Price

Price

#### See

IPrice

#### Implements

- [`IPrice`](#iprice)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

###### Implementation of

[`IPrice`](#iprice).[`[___signature__]`](#___signature__-62)

##### base

> `readonly` **base**: [`Denomination`](#denomination)

The token for the base of the price

###### Implementation of

[`IPrice`](#iprice).[`base`](#base-2)

##### quote

> `readonly` **quote**: [`Denomination`](#denomination)

The token for the quote of the price

###### Implementation of

[`IPrice`](#iprice).[`quote`](#quote-1)

##### value

> `readonly` **value**: `string`

ATTRIBUTES

###### Implementation of

[`IPrice`](#iprice).[`value`](#value-6)

##### PRICE\_DECIMALS

> `readonly` `static` **PRICE\_DECIMALS**: `18` = `18`

CONSTANTS

#### Methods

##### add()

> **add**(`otherPrice`): [`IPrice`](#iprice)

###### Parameters

###### otherPrice

[`IPrice`](#iprice)

###### Returns

[`IPrice`](#iprice)

###### See

IPrice.add

###### Implementation of

[`IPrice`](#iprice).[`add`](#add-6)

##### divide()

> **divide**(`divider`): [`IPrice`](#iprice)

###### Parameters

###### divider

`string` \| `number` \| [`IPercentage`](#ipercentage) \| [`IPrice`](#iprice)

###### Returns

[`IPrice`](#iprice)

###### See

IPrice.divide

###### Implementation of

[`IPrice`](#iprice).[`divide`](#divide-6)

##### hasSameBase()

> **hasSameBase**(`otherPrice`): `boolean`

###### Parameters

###### otherPrice

[`IPrice`](#iprice)

###### Returns

`boolean`

###### See

IPrice.hasSameBase

###### Implementation of

[`IPrice`](#iprice).[`hasSameBase`](#hassamebase-1)

##### hasSameDenominations()

> **hasSameDenominations**(`otherPrice`): `boolean`

###### Parameters

###### otherPrice

[`IPrice`](#iprice)

###### Returns

`boolean`

###### See

IPrice.hasSameDenominations

###### Implementation of

[`IPrice`](#iprice).[`hasSameDenominations`](#hassamedenominations-1)

##### hasSameQuote()

> **hasSameQuote**(`otherPrice`): `boolean`

###### Parameters

###### otherPrice

[`IPrice`](#iprice)

###### Returns

`boolean`

###### See

IPrice.hasSameQuote

###### Implementation of

[`IPrice`](#iprice).[`hasSameQuote`](#hassamequote-1)

##### invert()

> **invert**(): [`IPrice`](#iprice)

###### Returns

[`IPrice`](#iprice)

###### See

IPrice.invert

###### Implementation of

[`IPrice`](#iprice).[`invert`](#invert-1)

##### isEqual()

> **isEqual**(`otherPrice`): `boolean`

###### Parameters

###### otherPrice

[`IPrice`](#iprice)

###### Returns

`boolean`

###### See

IPrice.isEqual

###### Implementation of

[`IPrice`](#iprice).[`isEqual`](#isequal-1)

##### isGreaterThan()

> **isGreaterThan**(`otherPrice`): `boolean`

###### Parameters

###### otherPrice

[`IPrice`](#iprice)

###### Returns

`boolean`

###### See

IPrice.isGreaterThan

###### Implementation of

[`IPrice`](#iprice).[`isGreaterThan`](#isgreaterthan-2)

##### isGreaterThanOrEqual()

> **isGreaterThanOrEqual**(`otherPrice`): `boolean`

###### Parameters

###### otherPrice

[`IPrice`](#iprice)

###### Returns

`boolean`

###### See

IPrice.isGreaterThanOrEqual

###### Implementation of

[`IPrice`](#iprice).[`isGreaterThanOrEqual`](#isgreaterthanorequal-1)

##### isLessThan()

> **isLessThan**(`otherPrice`): `boolean`

###### Parameters

###### otherPrice

[`IPrice`](#iprice)

###### Returns

`boolean`

###### See

IPrice.isLessThan

###### Implementation of

[`IPrice`](#iprice).[`isLessThan`](#islessthan-2)

##### isLessThanOrEqual()

> **isLessThanOrEqual**(`otherPrice`): `boolean`

###### Parameters

###### otherPrice

[`IPrice`](#iprice)

###### Returns

`boolean`

###### See

IPrice.isLessThanOrEqual

###### Implementation of

[`IPrice`](#iprice).[`isLessThanOrEqual`](#islessthanorequal-1)

##### isZero()

> **isZero**(): `boolean`

###### Returns

`boolean`

###### See

IPrice.isZero

###### Implementation of

[`IPrice`](#iprice).[`isZero`](#iszero-2)

##### multiply()

> **multiply**\<`InputParams`, `ReturnType`\>(`multiplier`): `ReturnType`

###### Type Parameters

###### InputParams

`InputParams` *extends* [`PriceMulParamType`](#pricemulparamtype)

###### ReturnType

`ReturnType` = [`PriceMulReturnType`](#pricemulreturntype)\<`InputParams`\>

###### Parameters

###### multiplier

`InputParams`

###### Returns

`ReturnType`

###### See

IPrice.multiply

###### Implementation of

[`IPrice`](#iprice).[`multiply`](#multiply-6)

##### subtract()

> **subtract**(`otherPrice`): [`IPrice`](#iprice)

###### Parameters

###### otherPrice

[`IPrice`](#iprice)

###### Returns

[`IPrice`](#iprice)

###### See

IPrice.subtract

###### Implementation of

[`IPrice`](#iprice).[`subtract`](#subtract-6)

##### toBigNumber()

> **toBigNumber**(): `BigNumber`

###### Returns

`BigNumber`

###### See

IValueConverter.toBigNumber

###### Implementation of

[`IPrice`](#iprice).[`toBigNumber`](#tobignumber-7)

##### toSolidityValue()

> **toSolidityValue**(`params?`): `bigint`

###### Parameters

###### params?

###### decimals

`number`

###### Returns

`bigint`

###### See

IValueConverter.toSolidityValue

###### Implementation of

[`IPrice`](#iprice).[`toSolidityValue`](#tosolidityvalue-8)

##### toString()

> **toString**(): `string`

###### Returns

`string`

###### See

IPrice.toString

###### Implementation of

[`IPrice`](#iprice).[`toString`](#tostring-29)

##### createFrom()

> `static` **createFrom**(`params`): [`IPrice`](#iprice)

FACTORY

###### Parameters

###### params

[`PriceParameters`](#priceparameters)

###### Returns

[`IPrice`](#iprice)

##### createFromAmountsRatio()

> `static` **createFromAmountsRatio**(`params`): [`IPrice`](#iprice)

Creates a price from the ratio of two token amounts

###### Parameters

###### params

###### denominator

[`ITokenAmount`](#itokenamount)

the token amount in the denominator

###### numerator

[`ITokenAmount`](#itokenamount)

the token amount in the numerator

###### Returns

[`IPrice`](#iprice)

the price calculated from the amounts ratio of numerator divided by denominator

dev: The denominator becomes the base of the price and the numerator becomes the quote

***

### `abstract` Protocol

Protocol

#### See

IProtocol

#### Extended by

- [`AaveV3Protocol`](../protocol-plugins/service/src.md#aavev3protocol)

#### Implements

- [`IProtocol`](#iprotocol)
- [`IPrintable`](../common/src/README.md#iprintable)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

###### Implementation of

[`IProtocol`](#iprotocol).[`[___signature__]`](#___signature__-63)

##### chainInfo

> `readonly` **chainInfo**: [`IChainInfo`](#ichaininfo)

The chain information

###### Implementation of

[`IProtocol`](#iprotocol).[`chainInfo`](#chaininfo-7)

##### name

> `abstract` `readonly` **name**: [`ProtocolName`](../common/src/README.md#protocolname)

ATTRIBUTES

###### Implementation of

[`IProtocol`](#iprotocol).[`name`](#name-8)

#### Methods

##### equals()

> **equals**(`protocol`): `boolean`

###### Parameters

###### protocol

[`Protocol`](#abstract-protocol)

###### Returns

`boolean`

###### See

IProtocol.equals

###### Implementation of

[`IProtocol`](#iprotocol).[`equals`](#equals-9)

##### toString()

> **toString**(): `string`

###### Returns

`string`

###### See

IPrintable.toString

###### Implementation of

[`IPrintable`](../common/src/README.md#iprintable).[`toString`](../common/src/README.md#tostring-29)

***

### ProtocolsManagerClient

ProtocolsManagerClient

#### See

IProtocolsManagerClient

#### Extends

- `IRPCClient`

#### Implements

- [`IProtocolsManagerClient`](#iprotocolsmanagerclient)

#### Constructors

##### Constructor

> **new ProtocolsManagerClient**(`params`): [`ProtocolsManagerClient`](#protocolsmanagerclient)

###### Parameters

###### params

###### rpcClient

`any`

###### Returns

[`ProtocolsManagerClient`](#protocolsmanagerclient)

###### Overrides

`IRPCClient.constructor`

#### Methods

##### getLendingPool()

> **getLendingPool**(`params`): `Promise`\<[`ILendingPool`](#ilendingpool)\>

getLendingPool
Get the lending pool from the protocol

###### Parameters

###### params

The pool id data

###### poolId

[`ILendingPoolIdData`](#ilendingpooliddata)

###### Returns

`Promise`\<[`ILendingPool`](#ilendingpool)\>

The lending pool

###### Implementation of

[`IProtocolsManagerClient`](#iprotocolsmanagerclient).[`getLendingPool`](#getlendingpool-1)

##### getLendingPoolInfo()

> **getLendingPoolInfo**(`params`): `Promise`\<[`ILendingPoolInfo`](#ilendingpoolinfo)\>

getLendingPoolInfo
Get the lending pool info from the protocol

###### Parameters

###### params

The pool id data

###### poolId

[`ILendingPoolIdData`](#ilendingpooliddata)

###### Returns

`Promise`\<[`ILendingPoolInfo`](#ilendingpoolinfo)\>

The lending pool info

###### Implementation of

[`IProtocolsManagerClient`](#iprotocolsmanagerclient).[`getLendingPoolInfo`](#getlendingpoolinfo-1)

***

### RiskRatio

RiskRatio

#### See

IRiskRatio

#### Implements

- [`IRiskRatio`](#iriskratio)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

###### Implementation of

[`IRiskRatio`](#iriskratio).[`[___signature__]`](#___signature__-64)

##### type

> `readonly` **type**: [`RiskRatioType`](#riskratiotype)

ATTRIBUTES

###### Implementation of

[`IRiskRatio`](#iriskratio).[`type`](#type-26)

##### value

> `readonly` **value**: `number` \| [`IPercentage`](#ipercentage)

The risk ratio value, a percentage for LTV and Collateralization Ratio, a number for Multiple

###### Implementation of

[`IRiskRatio`](#iriskratio).[`value`](#value-7)

#### Methods

##### toCollateralizationRatio()

> **toCollateralizationRatio**(): [`IPercentage`](#ipercentage)

###### Returns

[`IPercentage`](#ipercentage)

###### See

IRiskRatio.toCollateralizationRatio

###### Implementation of

[`IRiskRatio`](#iriskratio).[`toCollateralizationRatio`](#tocollateralizationratio-1)

##### toLTV()

> **toLTV**(): [`IPercentage`](#ipercentage)

###### Returns

[`IPercentage`](#ipercentage)

###### See

IRiskRatio.toLTV

###### Implementation of

[`IRiskRatio`](#iriskratio).[`toLTV`](#toltv-1)

##### toMultiple()

> **toMultiple**(): `number`

###### Returns

`number`

###### See

IRiskRatio.toMultiple

###### Implementation of

[`IRiskRatio`](#iriskratio).[`toMultiple`](#tomultiple-1)

##### toString()

> **toString**(): `string`

###### Returns

`string`

###### See

IPrintable.toString

###### Implementation of

[`IRiskRatio`](#iriskratio).[`toString`](#tostring-30)

##### createFrom()

> `static` **createFrom**(`params`): [`RiskRatio`](#riskratio)

FACTORY

###### Parameters

###### params

[`RiskRatioParameters`](#riskratioparameters)

###### Returns

[`RiskRatio`](#riskratio)

***

### SDKError

SDKError

#### See

ISDKError

#### Extends

- `Error`

#### Extended by

- [`SwapError`](#swaperror)

#### Implements

- [`ISDKError`](#isdkerror)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

###### Implementation of

[`ISDKError`](#isdkerror).[`[___signature__]`](#___signature__-65)

##### message

> `readonly` **message**: `string`

Free form debug message, used to debug the issue through the console

###### Implementation of

[`ISDKError`](#isdkerror).[`message`](#message-2)

###### Overrides

`Error.message`

##### name

> **name**: `string`

###### Inherited from

`Error.name`

##### reason

> `readonly` **reason**: `string`

Free form reason message, used to provide a short description of the problem

###### Implementation of

[`ISDKError`](#isdkerror).[`reason`](#reason-2)

##### stack?

> `optional` **stack?**: `string`

###### Inherited from

`Error.stack`

##### type

> `readonly` **type**: [`SDKErrorType`](../common/src/README.md#sdkerrortype)

ATTRIBUTES

###### Implementation of

[`ISDKError`](#isdkerror).[`type`](#type-27)

##### stackTraceLimit

> `static` **stackTraceLimit**: `number`

The `Error.stackTraceLimit` property specifies the number of stack frames
collected by a stack trace (whether generated by `new Error().stack` or
`Error.captureStackTrace(obj)`).

The default value is `10` but may be set to any valid JavaScript number. Changes
will affect any stack trace captured _after_ the value has been changed.

If set to a non-number value, or set to a negative number, stack traces will
not capture any frames.

###### Inherited from

`Error.stackTraceLimit`

#### Methods

##### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Creates a `.stack` property on `targetObject`, which when accessed returns
a string representing the location in the code at which
`Error.captureStackTrace()` was called.

```js
const myObject = {};
Error.captureStackTrace(myObject);
myObject.stack;  // Similar to `new Error().stack`
```

The first line of the trace will be prefixed with
`${myObject.name}: ${myObject.message}`.

The optional `constructorOpt` argument accepts a function. If given, all frames
above `constructorOpt`, including `constructorOpt`, will be omitted from the
generated stack trace.

The `constructorOpt` argument is useful for hiding implementation
details of error generation from the user. For instance:

```js
function a() {
  b();
}

function b() {
  c();
}

function c() {
  // Create an error without stack trace to avoid calculating the stack trace twice.
  const { stackTraceLimit } = Error;
  Error.stackTraceLimit = 0;
  const error = new Error();
  Error.stackTraceLimit = stackTraceLimit;

  // Capture the stack trace above function b
  Error.captureStackTrace(error, b); // Neither function c, nor b is included in the stack trace
  throw error;
}

a();
```

###### Parameters

###### targetObject

`object`

###### constructorOpt?

`Function`

###### Returns

`void`

###### Inherited from

`Error.captureStackTrace`

##### createFrom()

> `static` **createFrom**(`params`): [`ISDKError`](#isdkerror)

FACTORY

###### Parameters

###### params

[`SDKErrorParameters`](#sdkerrorparameters)

###### Returns

[`ISDKError`](#isdkerror)

##### prepareStackTrace()

> `static` **prepareStackTrace**(`err`, `stackTraces`): `any`

###### Parameters

###### err

`Error`

###### stackTraces

`CallSite`[]

###### Returns

`any`

###### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

###### Inherited from

`Error.prepareStackTrace`

***

### SDKManager

#### See

ISDKManager

#### Implements

- [`ISDKManager`](#isdkmanager)

#### Constructors

##### Constructor

> **new SDKManager**(`params`): [`SDKManager`](#sdkmanager)

###### Parameters

###### params

###### rpcClient

`any`

###### Returns

[`SDKManager`](#sdkmanager)

#### Properties

##### chains

> `readonly` **chains**: [`ChainsManagerClient`](#chainsmanagerclient)

Chains Manager for interacting with the different chains supported in the SDK

###### Implementation of

[`ISDKManager`](#isdkmanager).[`chains`](#chains-2)

##### eventBus

> `readonly` **eventBus**: `IEventBus`

The global event bus for SDK events

###### Implementation of

[`ISDKManager`](#isdkmanager).[`eventBus`](#eventbus-2)

##### oracle

> `readonly` **oracle**: `OracleManagerClient`

Swap Manager for interacting with the swaps

###### Implementation of

[`ISDKManager`](#isdkmanager).[`oracle`](#oracle-2)

##### orders

> `readonly` **orders**: [`OrdersManagerClient`](#ordersmanagerclient)

Orders Manager for building and handling execution orders

###### Implementation of

[`ISDKManager`](#isdkmanager).[`orders`](#orders-2)

##### portfolio

> `readonly` **portfolio**: [`PortfolioManager`](#portfoliomanager)

Portfolio Manager for retrieving information about a user's portfolio

###### Implementation of

[`ISDKManager`](#isdkmanager).[`portfolio`](#portfolio-2)

##### protocols

> `readonly` **protocols**: [`ProtocolsManagerClient`](#protocolsmanagerclient)

Protocols Manager for interacting with protocols

###### Implementation of

[`ISDKManager`](#isdkmanager).[`protocols`](#protocols-4)

##### simulator

> `readonly` **simulator**: `SimulationManager`

Simulator for all the different operations supported in the SDK

###### Implementation of

[`ISDKManager`](#isdkmanager).[`simulator`](#simulator-2)

##### swaps

> `readonly` **swaps**: `SwapManagerClient`

Swap Manager for interacting with the swaps

###### Implementation of

[`ISDKManager`](#isdkmanager).[`swaps`](#swaps-2)

##### tokens

> `readonly` **tokens**: `TokensManagerClient2`

Tokens Manager for interacting with the different tokens supported in the SDK

###### Implementation of

[`ISDKManager`](#isdkmanager).[`tokens`](#tokens-4)

##### users

> `readonly` **users**: [`UsersManager`](#usersmanager)

Users Manager for retrieving information about a user

###### Implementation of

[`ISDKManager`](#isdkmanager).[`users`](#users-2)

***

### SDKManagerWithSigner

#### See

ISDKManager

#### Implements

- [`ISDKManager`](#isdkmanager)

#### Constructors

##### Constructor

> **new SDKManagerWithSigner**(`params`): [`SDKManagerWithSigner`](#sdkmanagerwithsigner)

###### Parameters

###### params

###### rpcClient

`any`

###### signer

`Signer`

###### Returns

[`SDKManagerWithSigner`](#sdkmanagerwithsigner)

#### Properties

##### chains

> `readonly` **chains**: [`ChainsManagerClient`](#chainsmanagerclient)

Chains Manager for interacting with the different chains supported in the SDK

###### Implementation of

[`ISDKManager`](#isdkmanager).[`chains`](#chains-2)

##### eventBus

> `readonly` **eventBus**: `IEventBus`

The global event bus for SDK events

###### Implementation of

[`ISDKManager`](#isdkmanager).[`eventBus`](#eventbus-2)

##### intentSwaps

> `readonly` **intentSwaps**: `IntentSwapClient`

##### oracle

> `readonly` **oracle**: `OracleManagerClient`

Swap Manager for interacting with the swaps

###### Implementation of

[`ISDKManager`](#isdkmanager).[`oracle`](#oracle-2)

##### orders

> `readonly` **orders**: [`OrdersManagerClient`](#ordersmanagerclient)

Orders Manager for building and handling execution orders

###### Implementation of

[`ISDKManager`](#isdkmanager).[`orders`](#orders-2)

##### portfolio

> `readonly` **portfolio**: [`PortfolioManager`](#portfoliomanager)

Portfolio Manager for retrieving information about a user's portfolio

###### Implementation of

[`ISDKManager`](#isdkmanager).[`portfolio`](#portfolio-2)

##### protocols

> `readonly` **protocols**: [`ProtocolsManagerClient`](#protocolsmanagerclient)

Protocols Manager for interacting with protocols

###### Implementation of

[`ISDKManager`](#isdkmanager).[`protocols`](#protocols-4)

##### simulator

> `readonly` **simulator**: `SimulationManager`

Simulator for all the different operations supported in the SDK

###### Implementation of

[`ISDKManager`](#isdkmanager).[`simulator`](#simulator-2)

##### swaps

> `readonly` **swaps**: `SwapManagerClient`

Swap Manager for interacting with the swaps

###### Implementation of

[`ISDKManager`](#isdkmanager).[`swaps`](#swaps-2)

##### tokens

> `readonly` **tokens**: `TokensManagerClient2`

Tokens Manager for interacting with the different tokens supported in the SDK

###### Implementation of

[`ISDKManager`](#isdkmanager).[`tokens`](#tokens-4)

##### users

> `readonly` **users**: [`UsersManager`](#usersmanager)

Users Manager for retrieving information about a user

###### Implementation of

[`ISDKManager`](#isdkmanager).[`users`](#users-2)

***

### SerializationService

#### Constructors

##### Constructor

> **new SerializationService**(): [`SerializationService`](#serializationservice)

###### Returns

[`SerializationService`](#serializationservice)

#### Methods

##### getTransformer()

> `static` **getTransformer**(): `object`

###### Returns

`object`

###### input

> **input**: `object`

###### input.deserialize

> **deserialize**: (`serializedData`) => `unknown`

###### Parameters

###### serializedData

`string`

###### Returns

`unknown`

###### input.serialize

> **serialize**: (`obj`) => `string`

###### Parameters

###### obj

`unknown`

###### Returns

`string`

###### output

> **output**: `object`

###### output.deserialize

> **deserialize**: (`serializedData`) => `unknown`

###### Parameters

###### serializedData

`string`

###### Returns

`unknown`

###### output.serialize

> **serialize**: (`obj`) => `string`

###### Parameters

###### obj

`unknown`

###### Returns

`string`

##### parse()

> `static` **parse**\<`T`\>(`v`): `T`

###### Type Parameters

###### T

`T`

###### Parameters

###### v

`string`

###### Returns

`T`

##### registerClass()

> `static` **registerClass**(`v`, `options?`): `void`

###### Parameters

###### v

`object`

###### options?

`string` \| `RegisterOptions`

###### Returns

`void`

##### registerCustom()

> `static` **registerCustom**\<`I`, `O`\>(`transformer`, `name`): `void`

###### Type Parameters

###### I

`I`

###### O

`O` *extends* `JSONValue`

###### Parameters

###### transformer

`Omit`\<`CustomTransfomer`\<`I`, `O`\>, `"name"`\>

###### name

`string`

###### Returns

`void`

##### stringify()

> `static` **stringify**(`v`): `string`

###### Parameters

###### v

`unknown`

###### Returns

`string`

***

### `abstract` Simulation

Simulation

#### See

ISimulation

#### Extended by

- [`YieldSimulation`](#yieldsimulation)
- [`LendingSimulation`](#lendingsimulation)

#### Implements

- [`ISimulation`](#isimulation)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

###### Implementation of

[`ISimulation`](#isimulation).[`[___signature__]`](#___signature__-66)

##### balanceChanges

> `readonly` **balanceChanges**: [`IBalanceChange`](#ibalancechange)[]

Balance changes resulting from the simulation

###### Implementation of

[`ISimulation`](#isimulation).[`balanceChanges`](#balancechanges-3)

##### gasEstimations

> `readonly` **gasEstimations**: [`IGasEstimation`](#igasestimation)[]

Gas estimations for the simulation steps

###### Implementation of

[`ISimulation`](#isimulation).[`gasEstimations`](#gasestimations-3)

##### steps

> `readonly` **steps**: `Steps`[]

The sequence of steps to execute the simulation

###### Implementation of

[`ISimulation`](#isimulation).[`steps`](#steps-3)

##### type

> `abstract` `readonly` **type**: [`SimulationType`](../common/src/README.md#simulationtype)

ATTRIBUTES

###### Implementation of

[`ISimulation`](#isimulation).[`type`](#type-28)

***

### SwapError

SwapError

#### See

ISwapError

#### Extends

- [`SDKError`](#sdkerror)

#### Implements

- [`ISwapError`](#iswaperror)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

###### Implementation of

[`ISwapError`](#iswaperror).[`[___signature__]`](#___signature__-68)

###### Inherited from

[`SDKError`](#sdkerror).[`[___signature__]`](#___signature__-26)

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

###### Implementation of

`ISwapError.[___signature__]`

###### Inherited from

`SDKError.[___signature__]`

##### apiQuery

> `readonly` **apiQuery**: `string`

Full URL of the API query that generated the error

###### Implementation of

[`ISwapError`](#iswaperror).[`apiQuery`](#apiquery-1)

##### message

> `readonly` **message**: `string`

Free form debug message, used to debug the issue through the console

###### Implementation of

[`ISwapError`](#iswaperror).[`message`](#message-3)

###### Inherited from

[`SDKError`](#sdkerror).[`message`](#message)

##### name

> **name**: `string`

###### Inherited from

[`SDKError`](#sdkerror).[`name`](#name-2)

##### reason

> `readonly` **reason**: `string`

Free form reason message, used to provide a short description of the problem

###### Implementation of

[`ISwapError`](#iswaperror).[`reason`](#reason-3)

###### Inherited from

[`SDKError`](#sdkerror).[`reason`](#reason)

##### stack?

> `optional` **stack?**: `string`

###### Inherited from

[`SDKError`](#sdkerror).[`stack`](#stack)

##### statusCode

> `readonly` **statusCode**: `number`

GET or POST status code

###### Implementation of

[`ISwapError`](#iswaperror).[`statusCode`](#statuscode-1)

##### subtype

> `readonly` **subtype**: [`SwapErrorType`](../common/src/README.md#swaperrortype)

Specific error for the swap service

###### Implementation of

[`ISwapError`](#iswaperror).[`subtype`](#subtype-3)

##### type

> `readonly` **type**: `SwapError`

ATTRIBUTES

###### Implementation of

[`ISwapError`](#iswaperror).[`type`](#type-29)

###### Overrides

[`SDKError`](#sdkerror).[`type`](#type-11)

##### stackTraceLimit

> `static` **stackTraceLimit**: `number`

The `Error.stackTraceLimit` property specifies the number of stack frames
collected by a stack trace (whether generated by `new Error().stack` or
`Error.captureStackTrace(obj)`).

The default value is `10` but may be set to any valid JavaScript number. Changes
will affect any stack trace captured _after_ the value has been changed.

If set to a non-number value, or set to a negative number, stack traces will
not capture any frames.

###### Inherited from

[`SDKError`](#sdkerror).[`stackTraceLimit`](#stacktracelimit)

#### Methods

##### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Creates a `.stack` property on `targetObject`, which when accessed returns
a string representing the location in the code at which
`Error.captureStackTrace()` was called.

```js
const myObject = {};
Error.captureStackTrace(myObject);
myObject.stack;  // Similar to `new Error().stack`
```

The first line of the trace will be prefixed with
`${myObject.name}: ${myObject.message}`.

The optional `constructorOpt` argument accepts a function. If given, all frames
above `constructorOpt`, including `constructorOpt`, will be omitted from the
generated stack trace.

The `constructorOpt` argument is useful for hiding implementation
details of error generation from the user. For instance:

```js
function a() {
  b();
}

function b() {
  c();
}

function c() {
  // Create an error without stack trace to avoid calculating the stack trace twice.
  const { stackTraceLimit } = Error;
  Error.stackTraceLimit = 0;
  const error = new Error();
  Error.stackTraceLimit = stackTraceLimit;

  // Capture the stack trace above function b
  Error.captureStackTrace(error, b); // Neither function c, nor b is included in the stack trace
  throw error;
}

a();
```

###### Parameters

###### targetObject

`object`

###### constructorOpt?

`Function`

###### Returns

`void`

###### Inherited from

[`SDKError`](#sdkerror).[`captureStackTrace`](#capturestacktrace)

##### createFrom()

> `static` **createFrom**(`params`): [`SwapError`](#swaperror)

FACTORY

###### Parameters

###### params

[`SwapErrorParams`](#swaperrorparams)

###### Returns

[`SwapError`](#swaperror)

###### Overrides

[`SDKError`](#sdkerror).[`createFrom`](#createfrom-10)

##### prepareStackTrace()

> `static` **prepareStackTrace**(`err`, `stackTraces`): `any`

###### Parameters

###### err

`Error`

###### stackTraces

`CallSite`[]

###### Returns

`any`

###### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

###### Inherited from

[`SDKError`](#sdkerror).[`prepareStackTrace`](#preparestacktrace)

***

### Token

Token

#### See

IToken

#### Extended by

- [`Vault`](#vault)

#### Implements

- [`IToken`](#itoken)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

###### Implementation of

[`IToken`](#itoken).[`[___signature__]`](#___signature__-69)

##### address

> `readonly` **address**: [`IAddress`](#iaddress)

Token address

###### Implementation of

[`IToken`](#itoken).[`address`](#address-6)

##### chainInfo

> `readonly` **chainInfo**: [`IChainInfo`](#ichaininfo)

Chain where the token is deployed

###### Implementation of

[`IToken`](#itoken).[`chainInfo`](#chaininfo-8)

##### decimals

> `readonly` **decimals**: `number`

Number of decimals for the token

###### Implementation of

[`IToken`](#itoken).[`decimals`](#decimals-2)

##### logoURI?

> `readonly` `optional` **logoURI?**: `string`

URI of the token logo

###### Implementation of

[`IToken`](#itoken).[`logoURI`](#logouri-2)

##### name

> `readonly` **name**: `string`

Full token name

###### Implementation of

[`IToken`](#itoken).[`name`](#name-9)

##### symbol

> `readonly` **symbol**: `string`

ATTRIBUTES

###### Implementation of

[`IToken`](#itoken).[`symbol`](#symbol-2)

#### Methods

##### equals()

> **equals**(`token`): `boolean`

###### Parameters

###### token

[`Token`](#token-3)

###### Returns

`boolean`

###### See

IToken.equals

###### Implementation of

[`IToken`](#itoken).[`equals`](#equals-10)

##### toString()

> **toString**(): `string`

###### Returns

`string`

###### See

IPrintable.toString

###### Implementation of

[`IToken`](#itoken).[`toString`](#tostring-33)

##### createFrom()

> `static` **createFrom**(`params`): [`Token`](#token-3)

FACTORY

###### Parameters

###### params

[`TokenParameters`](#tokenparameters)

###### Returns

[`Token`](#token-3)

***

### TokenAmount

TokenAmount

#### See

ITokenAmount

#### Implements

- [`ITokenAmount`](#itokenamount)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

###### Implementation of

[`ITokenAmount`](#itokenamount).[`[___signature__]`](#___signature__-70)

##### amount

> `readonly` **amount**: `string`

Amount in floating point format without taking into account the token decimals

###### Implementation of

[`ITokenAmount`](#itokenamount).[`amount`](#amount-8)

##### token

> `readonly` **token**: [`IToken`](#itoken)

ATTRIBUTES

###### Implementation of

[`ITokenAmount`](#itokenamount).[`token`](#token-8)

#### Methods

##### add()

> **add**(`tokenToAdd`): [`ITokenAmount`](#itokenamount)

###### Parameters

###### tokenToAdd

[`ITokenAmount`](#itokenamount)

###### Returns

[`ITokenAmount`](#itokenamount)

###### See

ITokenAmount.add

###### Implementation of

[`ITokenAmount`](#itokenamount).[`add`](#add-7)

##### divide()

> **divide**\<`InputParams`, `ReturnType`\>(`divisor`): `ReturnType`

###### Type Parameters

###### InputParams

`InputParams` *extends* [`TokenAmountMulDivParamType`](#tokenamountmuldivparamtype)

###### ReturnType

`ReturnType` = [`TokenAmountMulDivReturnType`](#tokenamountmuldivreturntype)\<`InputParams`\>

###### Parameters

###### divisor

`InputParams`

###### Returns

`ReturnType`

###### See

ITokenAmount.divide

###### Implementation of

[`ITokenAmount`](#itokenamount).[`divide`](#divide-7)

##### isEqualTo()

> **isEqualTo**(`tokenAmount`): `boolean`

###### Parameters

###### tokenAmount

[`ITokenAmount`](#itokenamount)

###### Returns

`boolean`

###### See

ITokenAmount.isEqualTo

###### Implementation of

[`ITokenAmount`](#itokenamount).[`isEqualTo`](#isequalto-1)

##### isGreaterOrEqualThan()

> **isGreaterOrEqualThan**(`tokenAmount`): `boolean`

###### Parameters

###### tokenAmount

[`ITokenAmount`](#itokenamount)

###### Returns

`boolean`

###### See

ITokenAmount.isGreaterOrEqualThan

###### Implementation of

[`ITokenAmount`](#itokenamount).[`isGreaterOrEqualThan`](#isgreaterorequalthan-1)

##### isGreaterThan()

> **isGreaterThan**(`tokenAmount`): `boolean`

###### Parameters

###### tokenAmount

[`ITokenAmount`](#itokenamount)

###### Returns

`boolean`

###### See

ITokenAmount.isGreaterThan

###### Implementation of

[`ITokenAmount`](#itokenamount).[`isGreaterThan`](#isgreaterthan-3)

##### isLessOrEqualThan()

> **isLessOrEqualThan**(`tokenAmount`): `boolean`

###### Parameters

###### tokenAmount

[`ITokenAmount`](#itokenamount)

###### Returns

`boolean`

###### See

ITokenAmount.isLessOrEqualThan

###### Implementation of

[`ITokenAmount`](#itokenamount).[`isLessOrEqualThan`](#islessorequalthan-1)

##### isLessThan()

> **isLessThan**(`tokenAmount`): `boolean`

###### Parameters

###### tokenAmount

[`ITokenAmount`](#itokenamount)

###### Returns

`boolean`

###### See

ITokenAmount.isLessThan

###### Implementation of

[`ITokenAmount`](#itokenamount).[`isLessThan`](#islessthan-3)

##### isZero()

> **isZero**(): `boolean`

###### Returns

`boolean`

###### See

ITokenAmount.isZero

###### Implementation of

[`ITokenAmount`](#itokenamount).[`isZero`](#iszero-3)

##### multiply()

> **multiply**\<`InputParams`, `ReturnType`\>(`multiplier`): `ReturnType`

###### Type Parameters

###### InputParams

`InputParams` *extends* [`TokenAmountMulDivParamType`](#tokenamountmuldivparamtype)

###### ReturnType

`ReturnType` = [`TokenAmountMulDivReturnType`](#tokenamountmuldivreturntype)\<`InputParams`\>

###### Parameters

###### multiplier

`InputParams`

###### Returns

`ReturnType`

###### See

ITokenAmount.multiply

###### Implementation of

[`ITokenAmount`](#itokenamount).[`multiply`](#multiply-7)

##### subtract()

> **subtract**(`tokenToSubstract`): [`ITokenAmount`](#itokenamount)

###### Parameters

###### tokenToSubstract

[`ITokenAmount`](#itokenamount)

###### Returns

[`ITokenAmount`](#itokenamount)

###### See

ITokenAmount.subtract

###### Implementation of

[`ITokenAmount`](#itokenamount).[`subtract`](#subtract-7)

##### toBigNumber()

> **toBigNumber**(): `BigNumber`

###### Returns

`BigNumber`

###### See

IValueConverter.toBigNumber

###### Implementation of

[`ITokenAmount`](#itokenamount).[`toBigNumber`](#tobignumber-8)

##### toSolidityValue()

> **toSolidityValue**(`params?`): `bigint`

###### Parameters

###### params?

###### decimals

`number`

###### Returns

`bigint`

###### See

IValueConverter.toSolidityValue

###### Implementation of

[`ITokenAmount`](#itokenamount).[`toSolidityValue`](#tosolidityvalue-9)

##### toString()

> **toString**(): `string`

###### Returns

`string`

###### See

IPrintable.toString

###### Implementation of

[`ITokenAmount`](#itokenamount).[`toString`](#tostring-34)

##### createFrom()

> `static` **createFrom**(`params`): [`ITokenAmount`](#itokenamount)

FACTORY

###### Parameters

###### params

[`TokenAmountParameters`](#tokenamountparameters)

###### Returns

[`ITokenAmount`](#itokenamount)

##### createFromBaseUnit()

> `static` **createFromBaseUnit**(`params`): [`ITokenAmount`](#itokenamount)

createFromBaseUnit

###### Parameters

###### params

[`TokenAmountParameters`](#tokenamountparameters)

Token amount data to create the instance

###### Returns

[`ITokenAmount`](#itokenamount)

The resulting TokenAmount

`amount` is the integer amount including all the decimals of the token

i.e.: amount in base unit (1eth = 1000000000000000000, 1btc = 100000000, etc...)

***

### TokensManagerClient

TokensManagerClient
Implementation of the ITokensManager interface for the SDK Client

#### Extends

- `IRPCClient`

#### Implements

- [`ITokensManagerClient`](#itokensmanagerclient)

#### Constructors

##### Constructor

> **new TokensManagerClient**(`params`): [`TokensManagerClient`](#tokensmanagerclient)

###### Parameters

###### params

###### chainInfo

[`ChainInfo`](#chaininfo-1)

###### rpcClient

`any`

###### Returns

[`TokensManagerClient`](#tokensmanagerclient)

###### Overrides

`IRPCClient.constructor`

#### Methods

##### getTokenByAddress()

> **getTokenByAddress**(`params`): `Promise`\<[`IToken`](#itoken)\>

###### Parameters

###### params

###### address

[`Address`](#address)

###### Returns

`Promise`\<[`IToken`](#itoken)\>

###### See

ITokensManagerClient.getTokenByAddress

###### Implementation of

[`ITokensManagerClient`](#itokensmanagerclient).[`getTokenByAddress`](#gettokenbyaddress-1)

##### getTokenByName()

> **getTokenByName**(`_params`): `Promise`\<[`IToken`](#itoken)\>

###### Parameters

###### \_params

###### name

`string`

###### Returns

`Promise`\<[`IToken`](#itoken)\>

###### See

ITokensManagerClient.getTokenByName

###### Implementation of

[`ITokensManagerClient`](#itokensmanagerclient).[`getTokenByName`](#gettokenbyname-1)

##### getTokenBySymbol()

> **getTokenBySymbol**(`params`): `Promise`\<[`IToken`](#itoken)\>

###### Parameters

###### params

###### symbol

`string`

###### Returns

`Promise`\<[`IToken`](#itoken)\>

###### See

ITokensManagerClient.getTokenBySymbol

###### Implementation of

[`ITokensManagerClient`](#itokensmanagerclient).[`getTokenBySymbol`](#gettokenbysymbol-1)

##### getTokenTotalSupply()

> **getTokenTotalSupply**(`params`): `Promise`\<[`ITokenAmount`](#itokenamount)\>

###### Parameters

###### params

###### token

[`IToken`](#itoken)

###### Returns

`Promise`\<[`ITokenAmount`](#itokenamount)\>

###### See

ITokensManagerClient.getTokenTotalSupply

###### Implementation of

[`ITokensManagerClient`](#itokensmanagerclient).[`getTokenTotalSupply`](#gettokentotalsupply-1)

***

### User

User

#### See

IUser

#### Implements

- [`IUser`](#iuser)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

###### Implementation of

[`IUser`](#iuser).[`[___signature__]`](#___signature__-71)

##### chainInfo

> `readonly` **chainInfo**: [`IChainInfo`](#ichaininfo)

The chain the user is connected to

###### Implementation of

[`IUser`](#iuser).[`chainInfo`](#chaininfo-9)

##### wallet

> `readonly` **wallet**: [`IWallet`](#iwallet)

ATTRIBUTES

###### Implementation of

[`IUser`](#iuser).[`wallet`](#wallet-2)

#### Methods

##### equals()

> **equals**(`token`): `boolean`

###### Parameters

###### token

[`IUser`](#iuser)

###### Returns

`boolean`

###### See

IUser.equals

##### toString()

> **toString**(): `string`

###### Returns

`string`

###### See

IPrintable.toString

###### Implementation of

[`IUser`](#iuser).[`toString`](#tostring-35)

##### createFrom()

> `static` **createFrom**(`params`): [`User`](#user)

FACTORY

###### Parameters

###### params

[`UserParameters`](#userparameters)

###### Returns

[`User`](#user)

##### createFromEthereum()

> `static` **createFromEthereum**(`chainId`, `addressValue`): [`User`](#user)

###### Parameters

###### chainId

`number`

###### addressValue

`` `0x${string}` ``

###### Returns

[`User`](#user)

***

### UserClient

UserClient

#### See

IUserClient

#### Extends

- `IRPCClient`

#### Implements

- [`IUserClient`](#iuserclient)

#### Constructors

##### Constructor

> **new UserClient**(`params`): [`UserClient`](#userclient)

Constructor

###### Parameters

###### params

###### chainInfo

[`IChainInfo`](#ichaininfo)

###### rpcClient

`any`

###### wallet

[`IWallet`](#iwallet)

###### Returns

[`UserClient`](#userclient)

###### Overrides

`IRPCClient.constructor`

#### Properties

##### user

> **user**: [`IUser`](#iuser)

###### Implementation of

[`IUserClient`](#iuserclient).[`user`](#user-3)

#### Methods

##### getPortfolio()

> **getPortfolio**(): `Promise`\<[`IUserPortfolio`](#iuserportfolio)\>

getPortfolio
Retrieves the full user portfolio (wallet holdings and positions)

###### Returns

`Promise`\<[`IUserPortfolio`](#iuserportfolio)\>

The user portfolio

###### Implementation of

[`IUserClient`](#iuserclient).[`getPortfolio`](#getportfolio-1)

##### getPosition()

> **getPosition**(`params`): `Promise`\<[`Position`](#abstract-position)\>

getPosition
Retrieves a position of the user by its ID

###### Parameters

###### params

###### id

[`PositionId`](#abstract-positionid)

###### Returns

`Promise`\<[`Position`](#abstract-position)\>

###### Implementation of

[`IUserClient`](#iuserclient).[`getPosition`](#getposition-1)

##### getPositionsByIds()

> **getPositionsByIds**(`_params`): `Promise`\<[`Position`](#abstract-position)[]\>

getPositionsByIds
Retrieves the list of positions of the user for the given IDs

###### Parameters

###### \_params

###### positionIds

[`PositionId`](#abstract-positionid)[]

###### Returns

`Promise`\<[`Position`](#abstract-position)[]\>

###### Implementation of

[`IUserClient`](#iuserclient).[`getPositionsByIds`](#getpositionsbyids-1)

##### getPositionsByProtocol()

> **getPositionsByProtocol**(`_params`): `Promise`\<[`Position`](#abstract-position)[]\>

getPositionsByProtocol
Retrieves the list of positions of the user for a given protocol

###### Parameters

###### \_params

###### protocol

[`IProtocol`](#iprotocol)

###### Returns

`Promise`\<[`Position`](#abstract-position)[]\>

###### Implementation of

[`IUserClient`](#iuserclient).[`getPositionsByProtocol`](#getpositionsbyprotocol-1)

##### newOrder()

> **newOrder**(`params`): `Promise`\<[`Order`](#order)\>

newOrder
Creates a new order for the user based on the given simulation

###### Parameters

###### params

###### positionsManager?

[`IPositionsManager`](#ipositionsmanager)

###### simulation

[`ISimulation`](#isimulation)

The simulation to create the order for

###### Returns

`Promise`\<[`Order`](#order)\>

The new order created for the user

###### Implementation of

[`IUserClient`](#iuserclient).[`newOrder`](#neworder-1)

***

### UserPortfolio

UserPortfolio

#### See

IUserPortfolio

#### Implements

- [`IUserPortfolio`](#iuserportfolio)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

###### Implementation of

[`IUserPortfolio`](#iuserportfolio).[`[___signature__]`](#___signature__-72)

##### totalFiatValue

> `readonly` **totalFiatValue**: [`IFiatCurrencyAmount`](#ifiatcurrencyamount)

###### Implementation of

[`IUserPortfolio`](#iuserportfolio).[`totalFiatValue`](#totalfiatvalue-1)

##### user

> `readonly` **user**: [`IUser`](#iuser)

ATTRIBUTES

###### Implementation of

[`IUserPortfolio`](#iuserportfolio).[`user`](#user-4)

##### walletHoldings

> `readonly` **walletHoldings**: [`IHolding`](#iholding)[]

###### Implementation of

[`IUserPortfolio`](#iuserportfolio).[`walletHoldings`](#walletholdings-1)

#### Methods

##### toString()

> **toString**(): `string`

toString

###### Returns

`string`

###### Implementation of

[`IUserPortfolio`](#iuserportfolio).[`toString`](#tostring-36)

##### createFrom()

> `static` **createFrom**(`params`): [`UserPortfolio`](#userportfolio)

FACTORY

###### Parameters

###### params

[`UserPortfolioParameters`](#userportfolioparameters)

###### Returns

[`UserPortfolio`](#userportfolio)

***

### UsersManager

IUsersManager
Allows to retrieve a user by their wallet and network

#### Extends

- `IRPCClient`

#### Implements

- [`IUsersManager`](#iusersmanager)

#### Constructors

##### Constructor

> **new UsersManager**(`params`): [`UsersManager`](#usersmanager)

###### Parameters

###### params

###### rpcClient

`any`

###### Returns

[`UsersManager`](#usersmanager)

###### Overrides

`IRPCClient.constructor`

#### Methods

##### getUserClient()

> **getUserClient**(`params`): `Promise`\<[`UserClient`](#userclient)\>

getUserClient
Retrieves a user by their wallet and network

###### Parameters

###### params

###### chainInfo

[`ChainInfo`](#chaininfo-1)

The chain to retrieve the user for

###### walletAddress

[`Address`](#address)

The wallet to retrieve the user for

###### Returns

`Promise`\<[`UserClient`](#userclient)\>

The user for the given wallet and network

###### Implementation of

[`IUsersManager`](#iusersmanager).[`getUserClient`](#getuserclient-1)

***

### Vault

Vault

#### See

IVault

#### Extends

- [`Token`](#token-3)

#### Implements

- [`IVault`](#ivault)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

###### Implementation of

[`IVault`](#ivault).[`[___signature__]`](#___signature__-74)

###### Inherited from

[`Token`](#token-3).[`[___signature__]`](#___signature__-30)

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

###### Implementation of

`IVault.[___signature__]`

###### Inherited from

`Token.[___signature__]`

##### address

> `readonly` **address**: [`IAddress`](#iaddress)

Token address

###### Implementation of

[`IVault`](#ivault).[`address`](#address-7)

###### Inherited from

[`Token`](#token-3).[`address`](#address-2)

##### asset

> `readonly` **asset**: [`IToken`](#itoken)

ATTRIBUTES

###### Implementation of

[`IVault`](#ivault).[`asset`](#asset-2)

##### chainInfo

> `readonly` **chainInfo**: [`IChainInfo`](#ichaininfo)

Chain where the token is deployed

###### Implementation of

[`IVault`](#ivault).[`chainInfo`](#chaininfo-10)

###### Inherited from

[`Token`](#token-3).[`chainInfo`](#chaininfo-3)

##### decimals

> `readonly` **decimals**: `number`

Number of decimals for the token

###### Implementation of

[`IVault`](#ivault).[`decimals`](#decimals-3)

###### Inherited from

[`Token`](#token-3).[`decimals`](#decimals)

##### logoURI?

> `readonly` `optional` **logoURI?**: `string`

URI of the token logo

###### Implementation of

[`IVault`](#ivault).[`logoURI`](#logouri-3)

###### Inherited from

[`Token`](#token-3).[`logoURI`](#logouri)

##### name

> `readonly` **name**: `string`

Full token name

###### Implementation of

[`IVault`](#ivault).[`name`](#name-10)

###### Inherited from

[`Token`](#token-3).[`name`](#name-4)

##### symbol

> `readonly` **symbol**: `string`

ATTRIBUTES

###### Implementation of

[`IVault`](#ivault).[`symbol`](#symbol-3)

###### Inherited from

[`Token`](#token-3).[`symbol`](#symbol)

#### Methods

##### equals()

> **equals**(`token`): `boolean`

###### Parameters

###### token

[`Token`](#token-3)

###### Returns

`boolean`

###### See

IToken.equals

###### Implementation of

[`IVault`](#ivault).[`equals`](#equals-11)

###### Inherited from

[`Token`](#token-3).[`equals`](#equals-3)

##### toString()

> **toString**(): `string`

###### Returns

`string`

###### See

IPrintable.toString

###### Implementation of

[`IVault`](#ivault).[`toString`](#tostring-37)

###### Inherited from

[`Token`](#token-3).[`toString`](#tostring-16)

##### createFrom()

> `static` **createFrom**(`params`): [`Vault`](#vault)

FACTORY

###### Parameters

###### params

[`VaultParameters`](#vaultparameters)

###### Returns

[`Vault`](#vault)

###### Overrides

[`Token`](#token-3).[`createFrom`](#createfrom-12)

***

### Wallet

**`Interface`**

Wallet

#### See

IWalletData

#### Implements

- [`IWallet`](#iwallet)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

###### Implementation of

[`IWallet`](#iwallet).[`[___signature__]`](#___signature__-75)

##### address

> `readonly` **address**: [`IAddress`](#iaddress)

ATTRIBUTES

###### Implementation of

[`IWallet`](#iwallet).[`address`](#address-8)

#### Methods

##### equals()

> **equals**(`wallet`): `boolean`

###### Parameters

###### wallet

[`Wallet`](#wallet-1)

###### Returns

`boolean`

###### See

IWallet.equals

###### Implementation of

[`IWallet`](#iwallet).[`equals`](#equals-12)

##### toString()

> **toString**(): `string`

###### Returns

`string`

###### See

IPrintable.toString

##### createFrom()

> `static` **createFrom**(`params`): [`Wallet`](#wallet-1)

FACTORY

###### Parameters

###### params

[`WalletParameters`](#walletparameters)

###### Returns

[`Wallet`](#wallet-1)

***

### YieldSimulation

Simulation

#### See

ISimulation

#### Extends

- [`Simulation`](#abstract-simulation)

#### Constructors

##### Constructor

> **new YieldSimulation**(`params`): [`YieldSimulation`](#yieldsimulation)

###### Parameters

###### params

[`YieldSimulationParams`](#yieldsimulationparams)

###### Returns

[`YieldSimulation`](#yieldsimulation)

###### Overrides

`Simulation.constructor`

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

###### Inherited from

[`Simulation`](#abstract-simulation).[`[___signature__]`](#___signature__-27)

##### balanceChanges

> `readonly` **balanceChanges**: [`IBalanceChange`](#ibalancechange)[]

Balance changes resulting from the simulation

###### Overrides

[`Simulation`](#abstract-simulation).[`balanceChanges`](#balancechanges-1)

##### gasEstimations

> `readonly` **gasEstimations**: [`IGasEstimation`](#igasestimation)[]

Gas estimations for the simulation steps

###### Overrides

[`Simulation`](#abstract-simulation).[`gasEstimations`](#gasestimations-1)

##### steps

> `readonly` **steps**: `Steps`[]

The sequence of steps to execute the simulation

###### Overrides

[`Simulation`](#abstract-simulation).[`steps`](#steps-1)

##### type

> `readonly` **type**: `Yield` = `SimulationType.Yield`

ATTRIBUTES

###### Overrides

[`Simulation`](#abstract-simulation).[`type`](#type-12)

## Interfaces

### AggregatedFleetRate

#### Properties

##### averageRate

> **averageRate**: `string`

##### date

> **date**: `string`

##### fleetAddress

> **fleetAddress**: `string`

##### id

> **id**: `string`

***

### CachePolicy

A specific policy defining how a volatility profile should be cached.

#### Properties

##### layers

> **layers**: [`CacheLayer`](#cachelayer)[]

##### ttl

> **ttl**: [`InvalidationStrategy`](#invalidationstrategy)

***

### FleetRate

#### Properties

##### fleetAddress

> **fleetAddress**: `string`

##### id

> **id**: `string`

##### rate

> **rate**: `string`

##### timestamp

> **timestamp**: `number`

***

### HistoricalFleetRates

#### Properties

##### dailyRates

> **dailyRates**: [`AggregatedFleetRate`](#aggregatedfleetrate)[]

##### hourlyRates

> **hourlyRates**: [`AggregatedFleetRate`](#aggregatedfleetrate)[]

##### latestRate

> **latestRate**: [`FleetRate`](#fleetrate)[]

##### weeklyRates

> **weeklyRates**: [`AggregatedFleetRate`](#aggregatedfleetrate)[]

***

### IAddress

IAddress
Represents an address with a certain format, specified by the type

Currently only Ethereum type is supported

#### Extends

- [`IAddressData`](#iaddressdata).[`IPrintable`](../common/src/README.md#iprintable).`ISolidityValue`\<[`AddressValue`](#addressvalue-1)\>

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

##### type

> `readonly` **type**: [`AddressType`](../common/src/README.md#addresstype)

The type of the address

###### Overrides

`IAddressData.type`

##### value

> `readonly` **value**: `` `0x${string}` ``

The address value in the format specified by type

###### Overrides

`IAddressData.value`

#### Methods

##### equals()

> **equals**(`address`): `boolean`

equals
Checks if two addresses are equal

###### Parameters

###### address

[`IAddress`](#iaddress)

The address to compare

###### Returns

`boolean`

true if the addresses are equal

Equality is determined by the address value and type

##### toSolidityValue()

> **toSolidityValue**(): `` `0x${string}` ``

Converts the instance into a Solidity value

###### Returns

`` `0x${string}` ``

###### Inherited from

`ISolidityValue.toSolidityValue`

##### toString()

> **toString**(): `string`

toString
Returns a string representation of the object

###### Returns

`string`

string

The string representation should have enough info to debug the object

###### Inherited from

[`IPrintable`](../common/src/README.md#iprintable).[`toString`](../common/src/README.md#tostring-29)

***

### IArkConfig

IArkConfig
Data structure for ark configuration

#### Properties

##### asset

> **asset**: [`IAddress`](#iaddress)

##### commander

> **commander**: [`IAddress`](#iaddress)

##### depositCap

> **depositCap**: `string`

##### details

> **details**: `string`

##### maxDepositPercentageOfTVL

> **maxDepositPercentageOfTVL**: [`IPercentage`](#ipercentage)

##### maxRebalanceInflow

> **maxRebalanceInflow**: `string`

##### maxRebalanceOutflow

> **maxRebalanceOutflow**: `string`

##### name

> **name**: `string`

##### raft

> **raft**: [`IAddress`](#iaddress)

##### requiresKeeperData

> **requiresKeeperData**: `boolean`

***

### IBalanceChange

#### Extends

- [`IBalanceChangeData`](#ibalancechangedata)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

##### amount

> `readonly` **amount**: [`ITokenAmount`](#itokenamount)

###### Overrides

`IBalanceChangeData.amount`

##### fiatValue

> `readonly` **fiatValue**: [`IFiatCurrencyAmount`](#ifiatcurrencyamount)

###### Overrides

`IBalanceChangeData.fiatValue`

##### token

> `readonly` **token**: [`IToken`](#itoken)

###### Overrides

`IBalanceChangeData.token`

***

### ICacheAware

Interface that classes must implement to use the Cache decorator.

#### Properties

##### cacheOrchestrator?

> `optional` **cacheOrchestrator?**: [`DataOrchestrator`](#dataorchestrator)

***

### ICacheLayer

Interface for all caching layers.

#### Properties

##### layerType

> `readonly` **layerType**: [`CacheLayer`](#cachelayer)

The identifier for this layer.

#### Methods

##### get()

> **get**\<`T`\>(`key`, `strategy`): `Promise`\<`T`\>

Retrieves a value from the cache.

###### Type Parameters

###### T

`T`

###### Parameters

###### key

`string`

The unique cache key.

###### strategy

[`InvalidationStrategy`](#invalidationstrategy)

The invalidation strategy to determine if the key is stale.

###### Returns

`Promise`\<`T`\>

The cached value, or null if missing/stale.

##### invalidate()

> **invalidate**(`key`): `Promise`\<`void`\>

Manually invalidates a specific cache key.

###### Parameters

###### key

`string`

The unique cache key.

###### Returns

`Promise`\<`void`\>

##### onNewBlock()

> **onNewBlock**(`blockNumber`): `Promise`\<`void`\>

Global invalidation event (e.g., when a new block arrives).
Caches that respect BLOCK_BOUND TTLs should clear relevant data here.

###### Parameters

###### blockNumber

`bigint`

###### Returns

`Promise`\<`void`\>

##### set()

> **set**\<`T`\>(`key`, `value`, `strategy?`): `Promise`\<`void`\>

Sets a value in the cache.

###### Type Parameters

###### T

`T`

###### Parameters

###### key

`string`

The unique cache key.

###### value

`T`

The value to cache.

###### strategy?

[`InvalidationStrategy`](#invalidationstrategy)

Optional strategy to determine when to invalidate.

###### Returns

`Promise`\<`void`\>

***

### IChain

IChain
Represents a blockchain network and allows to access the tokens and protocols of the chain

#### Properties

##### chainInfo

> **chainInfo**: [`IChainInfo`](#ichaininfo)

The information of the chain

##### protocols

> **protocols**: [`IProtocolsManagerClient`](#iprotocolsmanagerclient)

The protocols manager client for the chain, allows to retrieve protocols on the chain

##### tokens

> **tokens**: [`ITokensManagerClient`](#itokensmanagerclient)

The tokens manager client for the chain, allows to retrieve tokens on the chain

***

### IChainInfo

IChainInfo
Information used to identify a blockchain network

#### Extends

- [`IChainInfoData`](#ichaininfodata).[`IPrintable`](../common/src/README.md#iprintable)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

##### chainId

> `readonly` **chainId**: [`ChainId`](#chainid-2)

The chain ID of the network

###### Overrides

`IChainInfoData.chainId`

##### name

> `readonly` **name**: `string`

The name of the network

###### Overrides

`IChainInfoData.name`

#### Methods

##### equals()

> **equals**(`chainInfo`): `boolean`

equals
Checks if two chain infos are equal

###### Parameters

###### chainInfo

[`IChainInfoData`](#ichaininfodata)

The chain info to compare

###### Returns

`boolean`

true if the chain infos are equal

Equality is determined by the chain ID

##### toString()

> **toString**(): `string`

toString
Returns a string representation of the object

###### Returns

`string`

string

The string representation should have enough info to debug the object

###### Inherited from

[`IPrintable`](../common/src/README.md#iprintable).[`toString`](../common/src/README.md#tostring-29)

***

### IChainsManagerClient

IChainsManagerClient
Interface for the ChainsManager client implementation. Allows to retrieve information for
            a Chain given its ChainInfo. It also supports to lookup a chain by its name or chain ID

#### Methods

##### getChain()

> **getChain**(`params`): `Promise`\<[`Chain`](#chain)\>

getChain
Retrieves a chain by its chain info

###### Parameters

###### params

###### chainInfo

[`ChainInfo`](#chaininfo-1)

The info associated with the chain to retrieve

###### Returns

`Promise`\<[`Chain`](#chain)\>

The chain for the given chain info

##### getChainById()

> **getChainById**(`params`): `Promise`\<[`Chain`](#chain)\>

getChainById
Retrieves a network by its chain ID

###### Parameters

###### params

###### chainId

`number`

The chain ID of the network to retrieve

###### Returns

`Promise`\<[`Chain`](#chain)\>

The network with the given chain ID

##### getSupportedChains()

> **getSupportedChains**(): `Promise`\<[`ChainInfo`](#chaininfo-1)[]\>

getSupportedChains
Retrieves the list of supported chains

###### Returns

`Promise`\<[`ChainInfo`](#chaininfo-1)[]\>

The list of supported chains

***

### ICollateralInfo

ICollateralInfo
Contains extended information about a collateral token of a lending pool

#### Extends

- [`ICollateralInfoData`](#icollateralinfodata)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

##### liquidationPenalty

> `readonly` **liquidationPenalty**: [`IPercentage`](#ipercentage)

The penalty that is charged for liquidating a position

###### Overrides

`ICollateralInfoData.liquidationPenalty`

##### liquidationThreshold

> `readonly` **liquidationThreshold**: [`IRiskRatio`](#iriskratio)

The ratio between the collateral and the debt at which the position could be liquidated

###### Overrides

`ICollateralInfoData.liquidationThreshold`

##### maxSupply

> `readonly` **maxSupply**: [`ITokenAmount`](#itokenamount)

The maximum amount of the token that can be supplied

###### Overrides

`ICollateralInfoData.maxSupply`

##### price

> `readonly` **price**: [`IPrice`](#iprice)

The price of the token in the protocol's default denomination

###### Overrides

`ICollateralInfoData.price`

##### priceUSD

> `readonly` **priceUSD**: [`IPrice`](#iprice)

The price of the token in USD

###### Overrides

`ICollateralInfoData.priceUSD`

##### token

> `readonly` **token**: [`IToken`](#itoken)

The token that represents the collateral

###### Overrides

`ICollateralInfoData.token`

##### tokensLocked

> `readonly` **tokensLocked**: [`ITokenAmount`](#itokenamount)

The amount of the token that is currently locked in the pool

###### Overrides

`ICollateralInfoData.tokensLocked`

***

### IDebtInfo

IDebtInfo
Contains information about a debt token of a lending pool

Initially this is used for single pair lending pools, but it can be re-used in multi-token
lending pools

#### Extends

- [`IDebtInfoData`](#idebtinfodata)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

##### debtAvailable

> `readonly` **debtAvailable**: [`ITokenAmount`](#itokenamount)

The amount of the token that can still be borrowed

###### Overrides

`IDebtInfoData.debtAvailable`

##### debtCeiling

> `readonly` **debtCeiling**: [`ITokenAmount`](#itokenamount)

The maximum amount of the token that can be borrowed

###### Overrides

`IDebtInfoData.debtCeiling`

##### dustLimit

> `readonly` **dustLimit**: [`ITokenAmount`](#itokenamount)

The minimum amount of the token that can be borrowed

###### Overrides

`IDebtInfoData.dustLimit`

##### interestRate

> `readonly` **interestRate**: [`IPercentage`](#ipercentage)

The interest rate of the debt. TODO: which units??

###### Overrides

`IDebtInfoData.interestRate`

##### originationFee

> `readonly` **originationFee**: [`IPercentage`](#ipercentage)

The fee that is charged for creating a new debt

###### Overrides

`IDebtInfoData.originationFee`

##### price

> `readonly` **price**: [`IPrice`](#iprice)

The price of the token in the protocol's default denomination

###### Overrides

`IDebtInfoData.price`

##### priceUSD

> `readonly` **priceUSD**: [`IPrice`](#iprice)

The price of the token in USD

###### Overrides

`IDebtInfoData.priceUSD`

##### token

> `readonly` **token**: [`IToken`](#itoken)

The token that represents the debt

###### Overrides

`IDebtInfoData.token`

##### totalBorrowed

> `readonly` **totalBorrowed**: [`ITokenAmount`](#itokenamount)

The total amount of the token borrowed

###### Overrides

`IDebtInfoData.totalBorrowed`

***

### IFeeRevenueConfig

IFeeRevenueConfig
Configuration for fee revenue settings

#### Properties

##### vaultFeeAmount

> **vaultFeeAmount**: [`IPercentage`](#ipercentage)

vaultFeeAmount
The percentage amount of vault fees

##### vaultFeeReceiverAddress

> **vaultFeeReceiverAddress**: `` `0x${string}` ``

vaultFeeReceiverAddress
The address that receives vault fees

***

### IFiatCurrencyAmount

IFiatCurrencyAmount
Represents an amount of a fiat currency

The amount is represented as a string in floating point format without taking into consideration
the number of decimals of the token. This data type can be used for calculations with other types
like Price or Percentage

#### Extends

- [`IFiatCurrencyAmountData`](#ifiatcurrencyamountdata).`IValueConverter`.[`IPrintable`](../common/src/README.md#iprintable)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

##### amount

> `readonly` **amount**: `string`

The amount in floating point format

###### Overrides

`IFiatCurrencyAmountData.amount`

##### fiat

> `readonly` **fiat**: [`FiatCurrency`](../common/src/README.md#fiatcurrency)

Fiat currency for the amount

###### Overrides

`IFiatCurrencyAmountData.fiat`

#### Methods

##### add()

> **add**(`fiatToAdd`): [`IFiatCurrencyAmount`](#ifiatcurrencyamount)

add

###### Parameters

###### fiatToAdd

[`IFiatCurrencyAmount`](#ifiatcurrencyamount)

FiatCurrencyAmount to add

###### Returns

[`IFiatCurrencyAmount`](#ifiatcurrencyamount)

The resulting FiatCurrencyAmount

##### divide()

> **divide**\<`InputParams`, `ReturnType`\>(`divisor`): `ReturnType`

divide

###### Type Parameters

###### InputParams

`InputParams` *extends* [`FiatCurrencyAmountMulDivParamType`](#fiatcurrencyamountmuldivparamtype)

###### ReturnType

`ReturnType` = [`FiatCurrencyAmountMulDivReturnType`](#fiatcurrencyamountmuldivreturntype)\<`InputParams`\>

###### Parameters

###### divisor

`InputParams`

A percentage, price string amount or number to divide

###### Returns

`ReturnType`

The resulting FiatCurrencyAmount

##### multiply()

> **multiply**\<`InputParams`, `ReturnType`\>(`multiplier`): `ReturnType`

multiply

###### Type Parameters

###### InputParams

`InputParams` *extends* [`FiatCurrencyAmountMulDivParamType`](#fiatcurrencyamountmuldivparamtype)

###### ReturnType

`ReturnType` = [`FiatCurrencyAmountMulDivReturnType`](#fiatcurrencyamountmuldivreturntype)\<`InputParams`\>

###### Parameters

###### multiplier

`InputParams`

A percentage, string amount or number to multiply

###### Returns

`ReturnType`

The resulting FiatCurrencyAmount

##### subtract()

> **subtract**(`fiatToSubtract`): [`IFiatCurrencyAmount`](#ifiatcurrencyamount)

subtract

###### Parameters

###### fiatToSubtract

[`IFiatCurrencyAmount`](#ifiatcurrencyamount)

FiatCurrencyAmount to subtract

###### Returns

[`IFiatCurrencyAmount`](#ifiatcurrencyamount)

The resulting FiatCurrencyAmount

##### toBigNumber()

> **toBigNumber**(): `BigNumber`

Converts the instance into a BigNumber

###### Returns

`BigNumber`

The value as a BigNumber

###### Remarks

It returns a BigNumber without explicit decimals. This function is intended for low
         level operations not accounted for in the specific data type. The BigNumber does NOT
         carry any information on how many decimals the value has, meaning that the conversion
         of BigNumber to a Solidity value must be done manually.
         Use `toSolidityValue` to convert the value to a Solidity value instead.

###### Inherited from

`IValueConverter.toBigNumber`

##### toSolidityValue()

> **toSolidityValue**(`params?`): `bigint`

Converts the instance into a Solidity value

###### Parameters

###### params?

###### decimals

`number`

The number of decimals used to represent the value in Solidity

###### Returns

`bigint`

The value as a TypeScript bigint that can be passed to a Solidity contract

###### Remarks

The value is expected to be scaled by 10^decimals, thus yielding a Solidity uint256
         value with the correct fixed point decimals.
         The data type implementing this interface should provide a default value for decimals
         when possible to aid in the conversion

###### Inherited from

`IValueConverter.toSolidityValue`

##### toString()

> **toString**(): `string`

toString
Returns a string representation of the object

###### Returns

`string`

string

The string representation should have enough info to debug the object

###### Inherited from

[`IPrintable`](../common/src/README.md#iprintable).[`toString`](../common/src/README.md#tostring-29)

***

### IFleetConfig

IFleetConfig
Data structure for rebalancing assets, used by Keepers of a fleet

#### Properties

##### bufferArk

> `readonly` **bufferArk**: [`IAddress`](#iaddress)

The address of the buffer Ark associated with this Fleet

##### depositCap

> `readonly` **depositCap**: [`ITokenAmount`](#itokenamount)

The maximum total value of assets that can be deposited into the fleet

##### maxRebalanceOperations

> `readonly` **maxRebalanceOperations**: `string`

The maximum number of rebalance operations that can be performed in a single rebalance transaction

##### minimumBufferBalance

> `readonly` **minimumBufferBalance**: [`ITokenAmount`](#itokenamount)

The minimum balance that should be maintained in the buffer Ark

##### stakingRewardsManager

> `readonly` **stakingRewardsManager**: [`IAddress`](#iaddress)

The address of the staking rewards manager contract

***

### IGasEstimation

#### Extends

- [`IGasEstimationData`](#igasestimationdata)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

##### gasFiatValue

> `readonly` **gasFiatValue**: [`IFiatCurrencyAmount`](#ifiatcurrencyamount)

###### Overrides

`IGasEstimationData.gasFiatValue`

##### gasTokenAmount

> `readonly` **gasTokenAmount**: [`ITokenAmount`](#itokenamount)

###### Overrides

`IGasEstimationData.gasTokenAmount`

***

### IHolding

IHolding
Represents a generic holding like a token balance in a wallet.

#### Extends

- [`IHoldingData`](#iholdingdata).[`IPrintable`](../common/src/README.md#iprintable)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

##### amount

> `readonly` **amount**: [`ITokenAmount`](#itokenamount)

###### Overrides

`IHoldingData.amount`

##### fiatValue

> `readonly` **fiatValue**: [`IFiatCurrencyAmount`](#ifiatcurrencyamount)

###### Overrides

`IHoldingData.fiatValue`

#### Methods

##### toString()

> **toString**(): `string`

toString
Returns a string representation of the object

###### Returns

`string`

string

The string representation should have enough info to debug the object

###### Inherited from

[`IPrintable`](../common/src/README.md#iprintable).[`toString`](../common/src/README.md#tostring-29)

***

### ILendingPool

ILendingPool
Represents a lending pool for a single pair collateral/debt

A lending pool is a pool where users can deposit collateral and borrow debt against that collateral.
Typically the user will pay interest on the debt, and the collateral will be locked until the debt is repaid.

This interface is an abstraction of a lending pool and the specialization for each protocol happens at the IPool
level through the PoolId

#### Extends

- [`IPool`](#ipool).[`ILendingPoolData`](#ilendingpooldata)

#### Extended by

- [`IAaveV3LendingPool`](../protocol-plugins/service/src.md#iaavev3lendingpool)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

###### Inherited from

[`IPool`](#ipool).[`[___signature__]`](#___signature__-57)

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

###### Inherited from

`IPool.[___signature__]`

##### collateralToken

> `readonly` **collateralToken**: [`IToken`](#itoken)

Collateral token used to collateralized the pool

###### Overrides

`ILendingPoolData.collateralToken`

##### debtToken

> `readonly` **debtToken**: [`IToken`](#itoken)

Debt token, which can be borrowed from the pool

###### Overrides

`ILendingPoolData.debtToken`

##### id

> `readonly` **id**: [`ILendingPoolId`](#ilendingpoolid-1)

Pool ID of the lending pool

###### Overrides

[`IPool`](#ipool).[`id`](#id-12)

##### type

> `readonly` **type**: `Lending`

Type of the pool

###### Overrides

[`IPool`](#ipool).[`type`](#type-21)

#### Methods

##### toString()

> **toString**(): `string`

toString
Returns a string representation of the object

###### Returns

`string`

string

The string representation should have enough info to debug the object

###### Inherited from

[`IPool`](#ipool).[`toString`](#tostring-28)

***

### ILendingPoolId

ILendingPoolId
Identifies a generic lending pool. This will be specialized for each protocol

This is meant to be used for single pair collateral/debt lending pools. For multi-collateral pools,
a different interface should be used

Note: Typescript forces the interface to re-declare any properties that have different BUT compatible types.
This may be fixed eventually, there is a discussion on the topic here: https://github.com/microsoft/TypeScript/issues/16936

#### Extends

- [`IPoolId`](#ipoolid-1).[`ILendingPoolIdData`](#ilendingpooliddata)

#### Extended by

- [`IAaveV3LendingPoolId`](../protocol-plugins/service/src.md#iaavev3lendingpoolid-1)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate it from other interfaces

###### Inherited from

[`IPoolId`](#ipoolid-1).[`[___signature__]`](#___signature__-58)

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

###### Inherited from

`IPoolId.[___signature__]`

##### protocol

> `readonly` **protocol**: [`IProtocol`](#iprotocol)

Protocol where the pool is

###### Overrides

[`IPoolId`](#ipoolid-1).[`protocol`](#protocol-3)

##### type

> `readonly` **type**: `Lending`

Pool type

###### Overrides

[`IPoolId`](#ipoolid-1).[`type`](#type-22)

***

### ILendingPoolInfo

ILendingPoolInfo
Represents the extended information for a lending pool of a single pair collateral/debt

This extended information includes extra info for the collateral and debt like the liquidation threshold, liquidation penalty, total amount
borroed, etc...

The intention of this interface is to standardize the information that the protocol plugins should provide for the lending pools and it is
not intended to be specialized by the protocol plugins. The reason for this is that the plugins already have this information and the SDK
tries to abstract this information to provide a common interface for all the protocols on the client side.

#### Extends

- [`IPoolInfo`](#ipoolinfo).[`ILendingPoolInfoData`](#ilendingpoolinfodata)

#### Extended by

- [`IAaveV3LendingPoolInfo`](../protocol-plugins/service/src.md#iaavev3lendingpoolinfo)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

###### Inherited from

[`IPoolInfo`](#ipoolinfo).[`[___signature__]`](#___signature__-59)

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

###### Inherited from

`IPoolInfo.[___signature__]`

##### collateral

> `readonly` **collateral**: [`ICollateralInfo`](#icollateralinfo)

The collateral information of the pool

###### Overrides

`ILendingPoolInfoData.collateral`

##### debt

> `readonly` **debt**: [`IDebtInfo`](#idebtinfo)

The debt information of the pool

###### Overrides

`ILendingPoolInfoData.debt`

##### id

> `readonly` **id**: [`ILendingPoolId`](#ilendingpoolid-1)

Pool ID of the lending pool

###### Overrides

[`IPoolInfo`](#ipoolinfo).[`id`](#id-13)

##### type

> `readonly` **type**: `Lending`

Type of the pool

###### Overrides

[`IPoolInfo`](#ipoolinfo).[`type`](#type-23)

***

### ILendingPosition

ILendingPosition
Represents a position in a Lending protocol

#### Extends

- [`IPosition`](#iposition).[`ILendingPositionData`](#ilendingpositiondata)

#### Extended by

- [`IAaveV3LendingPosition`](../protocol-plugins/service/src.md#iaavev3lendingposition)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

###### Inherited from

[`IPosition`](#iposition).[`[___signature__]`](#___signature__-60)

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

###### Inherited from

`IPosition.[___signature__]`

##### collateralAmount

> `readonly` **collateralAmount**: [`ITokenAmount`](#itokenamount)

Amount of collateral deposited in the pool

###### Overrides

`ILendingPositionData.collateralAmount`

##### debtAmount

> `readonly` **debtAmount**: [`ITokenAmount`](#itokenamount)

Amount of debt borrowed from the pool

###### Overrides

`ILendingPositionData.debtAmount`

##### id

> `readonly` **id**: [`ILendingPositionId`](#ilendingpositionid-1)

Unique identifier for the position inside the Lending protocol

###### Overrides

[`IPosition`](#iposition).[`id`](#id-14)

##### pool

> `readonly` **pool**: [`ILendingPool`](#ilendingpool)

Pool where the position is

###### Overrides

[`IPosition`](#iposition).[`pool`](#pool-3)

##### subtype

> `readonly` **subtype**: [`LendingPositionType`](../common/src/README.md#lendingpositiontype)

Subtype of the position in the Lending protocol

###### Overrides

`ILendingPositionData.subtype`

##### type

> `readonly` **type**: `Lending`

Type of the position

###### Overrides

[`IPosition`](#iposition).[`type`](#type-24)

***

### ILendingPositionId

ILendingPositionId
Represents a position ID for a lending position

#### Extends

- [`IPositionId`](#ipositionid-1)

#### Extended by

- [`IAaveV3LendingPositionId`](../protocol-plugins/service/src.md#iaavev3lendingpositionid-1)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

###### Inherited from

[`IPositionId`](#ipositionid-1).[`[___signature__]`](#___signature__-61)

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

###### Inherited from

`IPositionId.[___signature__]`

##### id

> `readonly` **id**: `string`

###### Inherited from

[`IPositionId`](#ipositionid-1).[`id`](#id-15)

##### type

> `readonly` **type**: `Lending`

Type of the position

###### Overrides

[`IPositionId`](#ipositionid-1).[`type`](#type-25)

***

### IOrdersManagerClient

IOrdersManagerClient
Interface of the OrdersManager for the SDK Client. Allows to build orders to execute transactions.

#### Methods

##### buildOrder()

> **buildOrder**(`params`): `Promise`\<[`Order`](#order)\>

buildOrder
Build an order to be executed by the user

###### Parameters

###### params

`IBuildOrderInputs`

The inputs required to build the order

###### Returns

`Promise`\<[`Order`](#order)\>

The built order

***

### IPercentage

IPercentage
Percentage type that can be used for calculations with other types like TokenAmount or Price

#### Extends

- [`IPercentageData`](#ipercentagedata).`IValueConverter`.[`IPrintable`](../common/src/README.md#iprintable)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

##### value

> `readonly` **value**: `number`

The percentage in floating point format

###### Overrides

`IPercentageData.value`

#### Methods

##### add()

> **add**(`percentage`): [`IPercentage`](#ipercentage)

add

###### Parameters

###### percentage

[`IPercentage`](#ipercentage)

Percentage to add

###### Returns

[`IPercentage`](#ipercentage)

the result of the addition

##### divide()

> **divide**(`divisor`): [`IPercentage`](#ipercentage)

divide

###### Parameters

###### divisor

`string` \| `number` \| [`IPercentage`](#ipercentage)

A percentage, string amount or number to divide

###### Returns

[`IPercentage`](#ipercentage)

The resulting percentage

##### multiply()

> **multiply**(`multiplier`): [`IPercentage`](#ipercentage)

multiply

###### Parameters

###### multiplier

`string` \| `number` \| [`IPercentage`](#ipercentage)

A percentage, string amount or number to multiply

###### Returns

[`IPercentage`](#ipercentage)

The resulting percentage

##### subtract()

> **subtract**(`percentage`): [`IPercentage`](#ipercentage)

subtract

###### Parameters

###### percentage

[`IPercentageData`](#ipercentagedata)

Percentage to subtract

###### Returns

[`IPercentage`](#ipercentage)

the result of the subtraction

##### toBigNumber()

> **toBigNumber**(): `BigNumber`

Converts the instance into a BigNumber

###### Returns

`BigNumber`

The value as a BigNumber

###### Remarks

It returns a BigNumber without explicit decimals. This function is intended for low
         level operations not accounted for in the specific data type. The BigNumber does NOT
         carry any information on how many decimals the value has, meaning that the conversion
         of BigNumber to a Solidity value must be done manually.
         Use `toSolidityValue` to convert the value to a Solidity value instead.

###### Inherited from

`IValueConverter.toBigNumber`

##### toComplement()

> **toComplement**(): [`IPercentage`](#ipercentage)

toComplement

###### Returns

[`IPercentage`](#ipercentage)

The complement of the percentage

The complement is the difference between 100% and the percentage

##### toProportion()

> **toProportion**(): `number`

toProportion

###### Returns

`number`

Returns the equivalent proportion of the percentage

The proportion is the percentage divided by 100, this is, a floating value between 0 and 1

##### toSolidityValue()

> **toSolidityValue**(`params?`): `bigint`

Converts the instance into a Solidity value

###### Parameters

###### params?

###### decimals

`number`

The number of decimals used to represent the value in Solidity

###### Returns

`bigint`

The value as a TypeScript bigint that can be passed to a Solidity contract

###### Remarks

The value is expected to be scaled by 10^decimals, thus yielding a Solidity uint256
         value with the correct fixed point decimals.
         The data type implementing this interface should provide a default value for decimals
         when possible to aid in the conversion

###### Inherited from

`IValueConverter.toSolidityValue`

##### toString()

> **toString**(): `string`

toString
Returns a string representation of the object

###### Returns

`string`

string

The string representation should have enough info to debug the object

###### Inherited from

[`IPrintable`](../common/src/README.md#iprintable).[`toString`](../common/src/README.md#tostring-29)

***

### IPool

IPool
Represents a generic protocol pool. Contains information about the pool's ID,
             which is specific to each protocol, and the pool's type

It is meant to be specialized for each type of pool

#### Extends

- [`IPrintable`](../common/src/README.md#iprintable).[`IPoolData`](#ipooldata)

#### Extended by

- [`ILendingPool`](#ilendingpool)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

##### id

> `readonly` **id**: [`IPoolId`](#ipoolid-1)

Unique identifier for the pool, to be specialized for each protocol

###### Overrides

`IPoolData.id`

##### type

> `readonly` **type**: [`PoolType`](../common/src/README.md#pooltype)

Type of the pool

###### Overrides

`IPoolData.type`

#### Methods

##### toString()

> **toString**(): `string`

toString
Returns a string representation of the object

###### Returns

`string`

string

The string representation should have enough info to debug the object

###### Inherited from

[`IPrintable`](../common/src/README.md#iprintable).[`toString`](../common/src/README.md#tostring-29)

***

### IPoolId

IPoolId
Represents a pool's ID. This will be specialized for each protocol

It is a way to retrieve a pool from the protocol and it should include all the necessary information
to uniquely identify a pool

#### Extends

- [`IPoolIdData`](#ipooliddata)

#### Extended by

- [`IYieldPoolId`](#iyieldpoolid)
- [`ILendingPoolId`](#ilendingpoolid-1)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

##### protocol

> `readonly` **protocol**: [`IProtocol`](#iprotocol)

Protocol where the pool is

###### Overrides

`IPoolIdData.protocol`

##### type

> `readonly` **type**: [`PoolType`](../common/src/README.md#pooltype)

Pool type

###### Overrides

`IPoolIdData.type`

***

### IPoolInfo

IPool
Represents the extended information of a pool. It should contain extra info that is common for any type of pool

It is meant to be specialized for each type of pool, like a lending pool, a staking pool, etc...

#### Extends

- [`IPoolInfoData`](#ipoolinfodata)

#### Extended by

- [`IYieldPoolInfo`](#iyieldpoolinfo)
- [`ILendingPoolInfo`](#ilendingpoolinfo)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

##### id

> `readonly` **id**: [`IPoolId`](#ipoolid-1)

Unique identifier for the pool, to be specialized for each protocol

###### Overrides

`IPoolInfoData.id`

##### type

> `readonly` **type**: [`PoolType`](../common/src/README.md#pooltype)

Type of the pool

###### Overrides

`IPoolInfoData.type`

***

### IPortfolioManager

IPortfolioManager
Allows to retrieve a wallet's positions by their wallet and network. This is meant to be used in isolation
             without having to retrieve a User or a Network

#### Methods

##### getPositions()

> **getPositions**(`params`): `Promise`\<[`Position`](#abstract-position)[]\>

getPositions
Retrieves all positions of the given wallet for the given networks. The positions can be filtered by
             their IDs

###### Parameters

###### params

###### networks

[`ChainInfo`](#chaininfo-1)[]

The list of networks to retrieve the positions for

###### wallet

[`Wallet`](#wallet-1)

The wallet to retrieve the positions for

###### Returns

`Promise`\<[`Position`](#abstract-position)[]\>

The list of positions for the given wallet and networks

##### getUserPortfolio()

> **getUserPortfolio**(`params`): `Promise`\<[`IUserPortfolio`](#iuserportfolio)\>

getUserPortfolio
Retrieves all holdings and positions for the user resolving their Fiat balances

###### Parameters

###### params

###### user

[`IUser`](#iuser)

The user to retrieve the portfolio for

###### Returns

`Promise`\<[`IUserPortfolio`](#iuserportfolio)\>

##### getWalletHoldings()

> **getWalletHoldings**(`params`): `Promise`\<[`IHolding`](#iholding)[]\>

getWalletHoldings
Fetches standard ERC20 wallet holdings

###### Parameters

###### params

###### user

[`IUser`](#iuser)

The user to retrieve the holdings for

###### Returns

`Promise`\<[`IHolding`](#iholding)[]\>

***

### IPosition

IPosition
Represents a position in a pool/protocol

#### Extends

- [`IPositionData`](#ipositiondata)

#### Extended by

- [`IYieldPosition`](#iyieldposition)
- [`ILendingPosition`](#ilendingposition)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

##### id

> `readonly` **id**: [`IPositionId`](#ipositionid-1)

Unique identifier for the position

###### Overrides

`IPositionData.id`

##### pool

> `readonly` **pool**: [`IPool`](#ipool)

Pool where the position is opened

###### Overrides

`IPositionData.pool`

##### type

> `readonly` **type**: [`PositionType`](../common/src/README.md#positiontype)

Type of the position

###### Overrides

`IPositionData.type`

***

### IPositionId

IPositionId
Represents a unique identifier for a position in the system

#### Extends

- [`IPositionIdData`](#ipositioniddata)

#### Extended by

- [`IYieldPositionId`](#iyieldpositionid-1)
- [`ILendingPositionId`](#ilendingpositionid-1)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

##### id

> `readonly` **id**: `string`

###### Overrides

`IPositionIdData.id`

##### type

> `readonly` **type**: [`PositionType`](../common/src/README.md#positiontype)

Type of the position

###### Overrides

`IPositionIdData.type`

***

### IPositionsManager

IPositionsManager
Interface for the positions manager (DPM)

The Positions Manager is the proxy used to interact with the protocol system. It is used as Smart Account for the user.

#### Extends

- [`IPositionsManagerData`](#ipositionsmanagerdata)

#### Properties

##### address

> `readonly` **address**: [`IAddress`](#iaddress)

Address of the Positions Manager

###### Overrides

`IPositionsManagerData.address`

***

### IPrice

IPrice
Represents a price for a token with certain denomation. The denomination can be a fiat currency
             or another token

The price is represented as a string in floating point format without taking into consideration
the number of decimals of the tokens. This data type can be used for calculations with other types
like TokenAmount or Percentage

Typically in exchanges the price is represented in the following format:

BASE/QUOTE

Base is the token that is being traded, and quote is the token that is received as part of the trade

In that format the slash in between the base and the quote is not a quotient or fraction,
and it is just used to separate the two tokens.

The mathematical representation of the price units is instead:

QUOTE/BASE

#### Extends

- [`IPriceData`](#ipricedata).`IValueConverter`.[`IPrintable`](../common/src/README.md#iprintable)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

##### base

> `readonly` **base**: [`Denomination`](#denomination)

The token for the base of the price

###### Overrides

`IPriceData.base`

##### quote

> `readonly` **quote**: [`Denomination`](#denomination)

The token for the quote of the price

###### Overrides

`IPriceData.quote`

##### value

> `readonly` **value**: `string`

The price value in floating point format without taking into account decimals

###### Overrides

`IPriceData.value`

#### Methods

##### add()

> **add**(`otherPrice`): [`IPrice`](#iprice)

add
Adds the price to another price

###### Parameters

###### otherPrice

[`IPrice`](#iprice)

The price to add

###### Returns

[`IPrice`](#iprice)

The resulting price

###### Throws

If the prices have different base tokens or quote tokens

##### divide()

> **divide**(`divider`): [`IPrice`](#iprice)

divide
Divides the price by another price or a constant

###### Parameters

###### divider

`string` \| `number` \| [`IPercentage`](#ipercentage) \| [`IPrice`](#iprice)

The numeric string, number or price to divide by

###### Returns

[`IPrice`](#iprice)

The resulting price

###### Throws

If the second price base is not the same as this price base
        or if the second price quote is not the same as this price quote

##### hasSameBase()

> **hasSameBase**(`otherPrice`): `boolean`

hasSameBase
Checks if the price has the same base as another price

###### Parameters

###### otherPrice

[`IPrice`](#iprice)

The price to compare against

###### Returns

`boolean`

true if the prices have the same base token

##### hasSameDenominations()

> **hasSameDenominations**(`otherPrice`): `boolean`

hasSameDenominations
Checks if the price has the same base and quote as another price

###### Parameters

###### otherPrice

[`IPrice`](#iprice)

The price to compare against

###### Returns

`boolean`

true if the prices have the same base and quote

##### hasSameQuote()

> **hasSameQuote**(`otherPrice`): `boolean`

hasSameQuote
Checks if the price has the same quote as another price

###### Parameters

###### otherPrice

[`IPrice`](#iprice)

The price to compare against

###### Returns

`boolean`

true if the prices have the same quote

##### invert()

> **invert**(): [`IPrice`](#iprice)

invert
Inverts the price

###### Returns

[`IPrice`](#iprice)

The inverted price

##### isEqual()

> **isEqual**(`otherPrice`): `boolean`

isEqual
Checks if the price is equal to another price

###### Parameters

###### otherPrice

[`IPrice`](#iprice)

###### Returns

`boolean`

##### isGreaterThan()

> **isGreaterThan**(`otherPrice`): `boolean`

isGreaterThan
Checks if the price is greater than another price

###### Parameters

###### otherPrice

[`IPrice`](#iprice)

###### Returns

`boolean`

##### isGreaterThanOrEqual()

> **isGreaterThanOrEqual**(`otherPrice`): `boolean`

isGreaterThanOrEqual
Checks if the price is greater than or equal to another price

###### Parameters

###### otherPrice

[`IPrice`](#iprice)

###### Returns

`boolean`

##### isLessThan()

> **isLessThan**(`otherPrice`): `boolean`

isLessThan
Checks if the price is less than another price

###### Parameters

###### otherPrice

[`IPrice`](#iprice)

###### Returns

`boolean`

##### isLessThanOrEqual()

> **isLessThanOrEqual**(`otherPrice`): `boolean`

isLessThanOrEqual
Checks if the price is less than or equal to another price

###### Parameters

###### otherPrice

[`IPrice`](#iprice)

###### Returns

`boolean`

##### isZero()

> **isZero**(): `boolean`

isZero
Checks if the price is zero

###### Returns

`boolean`

##### multiply()

> **multiply**\<`InputParams`, `ReturnType`\>(`multiplier`): `ReturnType`

multiply
Multiplies the price by another price or a constant

###### Type Parameters

###### InputParams

`InputParams` *extends* [`PriceMulParamType`](#pricemulparamtype)

###### ReturnType

`ReturnType` = [`PriceMulReturnType`](#pricemulreturntype)\<`InputParams`\>

###### Parameters

###### multiplier

`InputParams`

The numeric string, number, price, token amount or fiat currency amount to multiply by

###### Returns

`ReturnType`

The resulting price, token amount or fiat currency amount

###### Throws

When it is a price, if the second price quote is not the same as this price base or
        if the second price base is not the same as this price quote it will throw an error

##### subtract()

> **subtract**(`otherPrice`): [`IPrice`](#iprice)

subtract
Subtracts the price from another price

###### Parameters

###### otherPrice

[`IPrice`](#iprice)

The price to subtract

###### Returns

[`IPrice`](#iprice)

The resulting price

###### Throws

If the prices have different base tokens or quote tokens

##### toBigNumber()

> **toBigNumber**(): `BigNumber`

Converts the instance into a BigNumber

###### Returns

`BigNumber`

The value as a BigNumber

###### Remarks

It returns a BigNumber without explicit decimals. This function is intended for low
         level operations not accounted for in the specific data type. The BigNumber does NOT
         carry any information on how many decimals the value has, meaning that the conversion
         of BigNumber to a Solidity value must be done manually.
         Use `toSolidityValue` to convert the value to a Solidity value instead.

###### Inherited from

`IValueConverter.toBigNumber`

##### toSolidityValue()

> **toSolidityValue**(`params?`): `bigint`

Converts the instance into a Solidity value

###### Parameters

###### params?

###### decimals

`number`

The number of decimals used to represent the value in Solidity

###### Returns

`bigint`

The value as a TypeScript bigint that can be passed to a Solidity contract

###### Remarks

The value is expected to be scaled by 10^decimals, thus yielding a Solidity uint256
         value with the correct fixed point decimals.
         The data type implementing this interface should provide a default value for decimals
         when possible to aid in the conversion

###### Inherited from

`IValueConverter.toSolidityValue`

##### toString()

> **toString**(): `string`

toString
Converts the price to a string

###### Returns

`string`

###### Overrides

[`IPrintable`](../common/src/README.md#iprintable).[`toString`](../common/src/README.md#tostring-29)

***

### IProtocol

IProtocol
Information relative to a protocol

This interface is used to add all the methods that the interface supports

#### Extends

- [`IProtocolData`](#iprotocoldata)

#### Extended by

- [`IAaveV3Protocol`](../protocol-plugins/service/src.md#iaavev3protocol)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature used to differentiate it from similar interfaces

##### chainInfo

> `readonly` **chainInfo**: [`IChainInfo`](#ichaininfo)

The chain information

###### Overrides

`IProtocolData.chainInfo`

##### name

> `readonly` **name**: [`ProtocolName`](../common/src/README.md#protocolname)

The name of the protocol

###### Overrides

`IProtocolData.name`

#### Methods

##### equals()

> **equals**(`protocol`): `boolean`

Compare if the passed protocol is equal to the current protocol

###### Parameters

###### protocol

[`IProtocol`](#iprotocol)

The protocol to compare

###### Returns

`boolean`

true if the protocols are equal

Equality is determined by the name and chain information

***

### IProtocolsManagerClient

IProtocolsManagerClient
Interface of the ProtocolsManager for the SDK Client. Allows to retrieve information for a Protocol

#### See

IProtocolsManager

#### Methods

##### getLendingPool()

> **getLendingPool**(`params`): `Promise`\<[`ILendingPool`](#ilendingpool)\>

getLendingPool
Get the lending pool from the protocol

###### Parameters

###### params

The pool id data

###### poolId

[`ILendingPoolIdData`](#ilendingpooliddata)

###### Returns

`Promise`\<[`ILendingPool`](#ilendingpool)\>

The lending pool

##### getLendingPoolInfo()

> **getLendingPoolInfo**(`params`): `Promise`\<[`ILendingPoolInfo`](#ilendingpoolinfo)\>

getLendingPoolInfo
Get the lending pool info from the protocol

###### Parameters

###### params

The pool id data

###### poolId

[`ILendingPoolIdData`](#ilendingpooliddata)

###### Returns

`Promise`\<[`ILendingPoolInfo`](#ilendingpoolinfo)\>

The lending pool info

***

### IRebalanceData

IRebalanceData
Data structure for rebalancing assets, used by Keepers of a fleet

#### Properties

##### amount

> `readonly` **amount**: [`ITokenAmount`](#itokenamount)

Amount of tokens to be moved

##### boardData?

> `readonly` `optional` **boardData?**: `` `0x${string}` ``

Board data

##### disembarkData?

> `readonly` `optional` **disembarkData?**: `` `0x${string}` ``

Disembark data

##### fromArk

> `readonly` **fromArk**: [`IAddress`](#iaddress)

Ark where the tokens are taken from

##### toArk

> `readonly` **toArk**: [`IAddress`](#iaddress)

Ark where the tokens are moved to

***

### IRiskRatio

IRiskRatio
Interface for the implementors of the risk ratio

#### Extends

- [`IRiskRatioData`](#iriskratiodata).[`IPrintable`](../common/src/README.md#iprintable)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

##### type

> `readonly` **type**: [`RiskRatioType`](#riskratiotype)

The type of the risk ratio

###### Overrides

`IRiskRatioData.type`

##### value

> `readonly` **value**: `number` \| [`IPercentage`](#ipercentage)

The risk ratio value, a percentage for LTV and Collateralization Ratio, a number for Multiple

###### Overrides

`IRiskRatioData.value`

#### Methods

##### toCollateralizationRatio()

> **toCollateralizationRatio**(): [`IPercentage`](#ipercentage)

Gets the LTV value as a collateralization ratio

###### Returns

[`IPercentage`](#ipercentage)

##### toLTV()

> **toLTV**(): [`IPercentage`](#ipercentage)

Gets the LTV value

###### Returns

[`IPercentage`](#ipercentage)

##### toMultiple()

> **toMultiple**(): `number`

Gets the LTV value as a multiply factor

###### Returns

`number`

##### toString()

> **toString**(): `string`

toString
Returns a string representation of the object

###### Returns

`string`

string

The string representation should have enough info to debug the object

###### Inherited from

[`IPrintable`](../common/src/README.md#iprintable).[`toString`](../common/src/README.md#tostring-29)

***

### ISDKError

ISDKError
Represents a custom error of the SDK

#### Extends

- [`ISDKErrorData`](#isdkerrordata).[`IPrintable`](../common/src/README.md#iprintable)

#### Extended by

- [`ISwapError`](#iswaperror)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

##### message

> `readonly` **message**: `string`

Free form debug message, used to debug the issue through the console

###### Overrides

`ISDKErrorData.message`

##### reason

> `readonly` **reason**: `string`

Free form reason message, used to provide a short description of the problem

###### Overrides

`ISDKErrorData.reason`

##### type

> `readonly` **type**: [`SDKErrorType`](../common/src/README.md#sdkerrortype)

Error type main category

###### Overrides

`ISDKErrorData.type`

#### Methods

##### toString()

> **toString**(): `string`

toString
Returns a string representation of the object

###### Returns

`string`

string

The string representation should have enough info to debug the object

###### Inherited from

[`IPrintable`](../common/src/README.md#iprintable).[`toString`](../common/src/README.md#tostring-29)

***

### ISDKManager

Main entry point for interacting with the reDeFi SDK on the client side.

This interface exposes all the available managers and services to handle chains, tokens, portfolios, swaps, oracles, and protocols.

 ISDKManager

#### Properties

##### chains

> `readonly` **chains**: [`IChainsManagerClient`](#ichainsmanagerclient)

Chains Manager for interacting with the different chains supported in the SDK

##### eventBus

> `readonly` **eventBus**: `IEventBus`

The global event bus for SDK events

##### oracle

> `readonly` **oracle**: `IOracleManagerClient`

Swap Manager for interacting with the swaps

##### orders

> `readonly` **orders**: [`IOrdersManagerClient`](#iordersmanagerclient)

Orders Manager for building and handling execution orders

##### portfolio

> `readonly` **portfolio**: [`IPortfolioManager`](#iportfoliomanager)

Portfolio Manager for retrieving information about a user's portfolio

##### protocols

> `readonly` **protocols**: [`IProtocolsManagerClient`](#iprotocolsmanagerclient)

Protocols Manager for interacting with protocols

##### simulator

> `readonly` **simulator**: `ISimulationManager`

Simulator for all the different operations supported in the SDK

##### swaps

> `readonly` **swaps**: `ISwapManagerClient`

Swap Manager for interacting with the swaps

##### tokens

> `readonly` **tokens**: `ITokensManagerClient2`

Tokens Manager for interacting with the different tokens supported in the SDK

##### users

> `readonly` **users**: [`IUsersManager`](#iusersmanager)

Users Manager for retrieving information about a user

***

### ISimulation

ISimulation
Generic simulation interface, defines the simulation type for all simulations

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature used to differentiate it from similar interfaces

##### balanceChanges

> `readonly` **balanceChanges**: [`IBalanceChange`](#ibalancechange)[]

Balance changes resulting from the simulation

##### gasEstimations

> `readonly` **gasEstimations**: [`IGasEstimation`](#igasestimation)[]

Gas estimations for the simulation steps

##### steps

> `readonly` **steps**: `Steps`[]

The sequence of steps to execute the simulation

##### type

> `readonly` **type**: [`SimulationType`](../common/src/README.md#simulationtype)

The type of the simulation

***

### ISwapError

ISwapError
Represents a custom error of the SDK for the Swap service

#### Extends

- [`ISDKError`](#isdkerror).[`ISwapErrorData`](#iswaperrordata)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

###### Inherited from

[`ISDKError`](#isdkerror).[`[___signature__]`](#___signature__-65)

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

###### Inherited from

`ISDKError.[___signature__]`

##### apiQuery

> `readonly` **apiQuery**: `string`

Full URL of the API query that generated the error

###### Overrides

`ISwapErrorData.apiQuery`

##### message

> `readonly` **message**: `string`

Free form debug message, used to debug the issue through the console

###### Inherited from

[`ISDKError`](#isdkerror).[`message`](#message-2)

##### reason

> `readonly` **reason**: `string`

Free form reason message, used to provide a short description of the problem

###### Inherited from

[`ISDKError`](#isdkerror).[`reason`](#reason-2)

##### statusCode

> `readonly` **statusCode**: `number`

GET or POST status code

###### Overrides

`ISwapErrorData.statusCode`

##### subtype

> `readonly` **subtype**: [`SwapErrorType`](../common/src/README.md#swaperrortype)

Specific error for the swap service

###### Overrides

`ISwapErrorData.subtype`

##### type

> `readonly` **type**: `SwapError`

Error type main category

###### Overrides

[`ISDKError`](#isdkerror).[`type`](#type-27)

#### Methods

##### toString()

> **toString**(): `string`

toString
Returns a string representation of the object

###### Returns

`string`

string

The string representation should have enough info to debug the object

###### Inherited from

[`ISDKError`](#isdkerror).[`toString`](#tostring-31)

***

### IToken

IToken
Represents an token in a Chain, typically used to represent ERC-20 tokens

#### Extends

- [`ITokenData`](#itokendata).[`IPrintable`](../common/src/README.md#iprintable)

#### Extended by

- [`IVault`](#ivault)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

##### address

> `readonly` **address**: [`IAddress`](#iaddress)

Token address

###### Overrides

`ITokenData.address`

##### chainInfo

> `readonly` **chainInfo**: [`IChainInfo`](#ichaininfo)

Chain where the token is deployed

###### Overrides

`ITokenData.chainInfo`

##### decimals

> `readonly` **decimals**: `number`

Number of decimals for the token

###### Overrides

`ITokenData.decimals`

##### logoURI?

> `readonly` `optional` **logoURI?**: `string`

URI of the token logo

###### Overrides

`ITokenData.logoURI`

##### name

> `readonly` **name**: `string`

Full token name

###### Overrides

`ITokenData.name`

##### symbol

> `readonly` **symbol**: `string`

Token symbol, usually a short representation of name and used in tickers

###### Overrides

`ITokenData.symbol`

#### Methods

##### equals()

> **equals**(`token`): `boolean`

equals
Checks if two tokens are equal

###### Parameters

###### token

[`IToken`](#itoken)

The token to compare

###### Returns

`boolean`

true if the tokens are equal

Equality is determined by the address and chain information

##### toString()

> **toString**(): `string`

toString
Returns a string representation of the object

###### Returns

`string`

string

The string representation should have enough info to debug the object

###### Inherited from

[`IPrintable`](../common/src/README.md#iprintable).[`toString`](../common/src/README.md#tostring-29)

***

### ITokenAmount

ITokenAmount
Interface for the implementors of the token amount

This interface is used to add all the methods that the interface supports

#### Extends

- [`ITokenAmountData`](#itokenamountdata).`IValueConverter`.[`IPrintable`](../common/src/README.md#iprintable)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

##### amount

> `readonly` **amount**: `string`

Amount in floating point format without taking into account the token decimals

###### Overrides

`ITokenAmountData.amount`

##### token

> `readonly` **token**: [`IToken`](#itoken)

Token this amount refers to

###### Overrides

`ITokenAmountData.token`

#### Methods

##### add()

> **add**(`tokenToAdd`): [`ITokenAmount`](#itokenamount)

add

###### Parameters

###### tokenToAdd

[`ITokenAmount`](#itokenamount)

TokenAmount to add

###### Returns

[`ITokenAmount`](#itokenamount)

The resulting TokenAmount

##### divide()

> **divide**\<`InputParams`, `ReturnType`\>(`divisor`): `ReturnType`

divide

###### Type Parameters

###### InputParams

`InputParams` *extends* [`TokenAmountMulDivParamType`](#tokenamountmuldivparamtype)

###### ReturnType

`ReturnType` = [`TokenAmountMulDivReturnType`](#tokenamountmuldivreturntype)\<`InputParams`\>

###### Parameters

###### divisor

`InputParams`

A percentage, price, string amount or number to divide

###### Returns

`ReturnType`

The resulting TokenAmount

##### isEqualTo()

> **isEqualTo**(`tokenAmount`): `boolean`

isEqualTo
Checks if the amount is equal to the provided TokenAmount

###### Parameters

###### tokenAmount

[`ITokenAmount`](#itokenamount)

TokenAmount to compare

###### Returns

`boolean`

true if the amount is equal to the provided TokenAmount

##### isGreaterOrEqualThan()

> **isGreaterOrEqualThan**(`tokenAmount`): `boolean`

isGreaterOrEqualThan
Checks if the amount is greater or equal than the provided TokenAmount

###### Parameters

###### tokenAmount

[`ITokenAmount`](#itokenamount)

TokenAmount to compare

###### Returns

`boolean`

true if the amount is greater or equal than the provided TokenAmount

##### isGreaterThan()

> **isGreaterThan**(`tokenAmount`): `boolean`

isGreaterThan
Checks if the amount is greater than the provided TokenAmount

###### Parameters

###### tokenAmount

[`ITokenAmount`](#itokenamount)

TokenAmount to compare

###### Returns

`boolean`

true if the amount is greater than the provided TokenAmount

##### isLessOrEqualThan()

> **isLessOrEqualThan**(`tokenAmount`): `boolean`

isLessOrEqualThan
Checks if the amount is less or equal than the provided TokenAmount

###### Parameters

###### tokenAmount

[`ITokenAmount`](#itokenamount)

TokenAmount to compare

###### Returns

`boolean`

true if the amount is less or equal than the provided TokenAmount

##### isLessThan()

> **isLessThan**(`tokenAmount`): `boolean`

isLessThan
Checks if the amount is less than the provided TokenAmount

###### Parameters

###### tokenAmount

[`ITokenAmount`](#itokenamount)

TokenAmount to compare

###### Returns

`boolean`

true if the amount is less than the provided TokenAmount

##### isZero()

> **isZero**(): `boolean`

isZero
Checks if the amount is zero

###### Returns

`boolean`

true if the amount is zero or false otherwise

##### multiply()

> **multiply**\<`InputParams`, `ReturnType`\>(`multiplier`): `ReturnType`

multiply

###### Type Parameters

###### InputParams

`InputParams` *extends* [`TokenAmountMulDivParamType`](#tokenamountmuldivparamtype)

###### ReturnType

`ReturnType` = [`TokenAmountMulDivReturnType`](#tokenamountmuldivreturntype)\<`InputParams`\>

###### Parameters

###### multiplier

`InputParams`

A percentage, price, string amount or number to multiply

###### Returns

`ReturnType`

The resulting TokenAmount

##### subtract()

> **subtract**(`tokenToSubstract`): [`ITokenAmount`](#itokenamount)

subtract

###### Parameters

###### tokenToSubstract

[`ITokenAmount`](#itokenamount)

TokenAmount to subtract

###### Returns

[`ITokenAmount`](#itokenamount)

The resulting TokenAmount

##### toBigNumber()

> **toBigNumber**(): `BigNumber`

Converts the instance into a BigNumber

###### Returns

`BigNumber`

The value as a BigNumber

###### Remarks

It returns a BigNumber without explicit decimals. This function is intended for low
         level operations not accounted for in the specific data type. The BigNumber does NOT
         carry any information on how many decimals the value has, meaning that the conversion
         of BigNumber to a Solidity value must be done manually.
         Use `toSolidityValue` to convert the value to a Solidity value instead.

###### Inherited from

`IValueConverter.toBigNumber`

##### toSolidityValue()

> **toSolidityValue**(`params?`): `bigint`

Converts the instance into a Solidity value

###### Parameters

###### params?

###### decimals

`number`

The number of decimals used to represent the value in Solidity

###### Returns

`bigint`

The value as a TypeScript bigint that can be passed to a Solidity contract

###### Remarks

The value is expected to be scaled by 10^decimals, thus yielding a Solidity uint256
         value with the correct fixed point decimals.
         The data type implementing this interface should provide a default value for decimals
         when possible to aid in the conversion

###### Inherited from

`IValueConverter.toSolidityValue`

##### toString()

> **toString**(): `string`

toString
Returns a string representation of the object

###### Returns

`string`

string

The string representation should have enough info to debug the object

###### Inherited from

[`IPrintable`](../common/src/README.md#iprintable).[`toString`](../common/src/README.md#tostring-29)

***

### ITokensManagerClient

ITokensManagerClient
Interface for the TokensManager client implementation. Allows to retrieve information for
             a Token given its Chain, and its Address or symbol. The difference with the server side
             is that it stores the chain info internally and passes it as a parameter to the RPC calls

#### See

ITokensManager

#### Methods

##### getTokenByAddress()

> **getTokenByAddress**(`params`): `Promise`\<[`IToken`](#itoken)\>

getTokenByAddress
Retrieves a token by its address

###### Parameters

###### params

###### address

[`Address`](#address)

The address of the token to retrieve

###### Returns

`Promise`\<[`IToken`](#itoken)\>

The token with the given address

##### getTokenByName()

> **getTokenByName**(`params`): `Promise`\<[`IToken`](#itoken)\>

getTokenByName
Retrieves a token by its name

###### Parameters

###### params

###### name

`string`

The name of the token to retrieve

###### Returns

`Promise`\<[`IToken`](#itoken)\>

The token with the given name

##### getTokenBySymbol()

> **getTokenBySymbol**(`params`): `Promise`\<[`IToken`](#itoken)\>

getTokenBySymbol
Retrieves a token by its symbol

###### Parameters

###### params

###### symbol

`string`

The symbol of the token to retrieve

###### Returns

`Promise`\<[`IToken`](#itoken)\>

The token with the given symbol

##### getTokenTotalSupply()

> **getTokenTotalSupply**(`params`): `Promise`\<[`ITokenAmount`](#itokenamount)\>

getTokenTotalSupply
Retrieves the total supply for a given token

###### Parameters

###### params

###### token

[`IToken`](#itoken)

The token whose supply should be retrieved

###### Returns

`Promise`\<[`ITokenAmount`](#itokenamount)\>

The token supply wrapped inside an ITokenAmount

***

### IUser

Represents a user of the system connected with a wallet on a particular chain

#### Extends

- [`IUserData`](#iuserdata).[`IPrintable`](../common/src/README.md#iprintable)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

##### chainInfo

> `readonly` **chainInfo**: [`IChainInfo`](#ichaininfo)

The chain the user is connected to

###### Overrides

`IUserData.chainInfo`

##### wallet

> `readonly` **wallet**: [`IWallet`](#iwallet)

The wallet of the user

###### Overrides

`IUserData.wallet`

#### Methods

##### toString()

> **toString**(): `string`

toString
Returns a string representation of the object

###### Returns

`string`

string

The string representation should have enough info to debug the object

###### Inherited from

[`IPrintable`](../common/src/README.md#iprintable).[`toString`](../common/src/README.md#tostring-29)

***

### IUserClient

IUserClient
Represents a user and allows to access their positions and to create new orders

dev: This interface must be used to get positions for a user that will be used to create orders. To retrieve
     positions for portfolio please

#### See

PortfolioManager

#### Properties

##### user

> **user**: [`IUser`](#iuser)

#### Methods

##### getPortfolio()

> **getPortfolio**(): `Promise`\<[`IUserPortfolio`](#iuserportfolio)\>

getPortfolio
Retrieves the full user portfolio (wallet holdings and positions)

###### Returns

`Promise`\<[`IUserPortfolio`](#iuserportfolio)\>

The user portfolio

##### getPosition()

> **getPosition**(`params`): `Promise`\<[`Position`](#abstract-position)\>

getPosition
Retrieves a position of the user by its ID

###### Parameters

###### params

###### id

[`PositionId`](#abstract-positionid)

###### Returns

`Promise`\<[`Position`](#abstract-position)\>

##### getPositionsByIds()

> **getPositionsByIds**(`params`): `Promise`\<[`Position`](#abstract-position)[]\>

getPositionsByIds
Retrieves the list of positions of the user for the given IDs

###### Parameters

###### params

###### positionIds

[`PositionId`](#abstract-positionid)[]

###### Returns

`Promise`\<[`Position`](#abstract-position)[]\>

##### getPositionsByProtocol()

> **getPositionsByProtocol**(`params`): `Promise`\<[`Position`](#abstract-position)[]\>

getPositionsByProtocol
Retrieves the list of positions of the user for a given protocol

###### Parameters

###### params

###### protocol

[`IProtocol`](#iprotocol)

###### Returns

`Promise`\<[`Position`](#abstract-position)[]\>

##### newOrder()

> **newOrder**(`params`): `Promise`\<[`Order`](#order)\>

newOrder
Creates a new order for the user based on the given simulation

###### Parameters

###### params

###### simulation

[`ISimulation`](#isimulation)

The simulation to create the order for

###### Returns

`Promise`\<[`Order`](#order)\>

The new order created for the user

***

### IUserPortfolio

IUserPortfolio
Represents the portfolio holdings of a specific user.

#### Extends

- [`IUserPortfolioData`](#iuserportfoliodata).[`IPrintable`](../common/src/README.md#iprintable)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

##### totalFiatValue

> `readonly` **totalFiatValue**: [`IFiatCurrencyAmount`](#ifiatcurrencyamount)

###### Overrides

`IUserPortfolioData.totalFiatValue`

##### user

> `readonly` **user**: [`IUser`](#iuser)

###### Overrides

`IUserPortfolioData.user`

##### walletHoldings

> `readonly` **walletHoldings**: [`IHolding`](#iholding)[]

###### Overrides

`IUserPortfolioData.walletHoldings`

#### Methods

##### toString()

> **toString**(): `string`

toString
Returns a string representation of the object

###### Returns

`string`

string

The string representation should have enough info to debug the object

###### Inherited from

[`IPrintable`](../common/src/README.md#iprintable).[`toString`](../common/src/README.md#tostring-29)

***

### IUsersManager

IUsersManager
Allows to retrieve a user by their wallet and network

#### Methods

##### getUserClient()

> **getUserClient**(`params`): `Promise`\<[`IUserClient`](#iuserclient)\>

getUserClient
Retrieves a user by their wallet and network

###### Parameters

###### params

###### chainInfo

[`ChainInfo`](#chaininfo-1)

The chain to retrieve the user for

###### walletAddress

[`Address`](#address)

The wallet to retrieve the user for

###### Returns

`Promise`\<[`IUserClient`](#iuserclient)\>

The user for the given wallet and network

***

### IVault

IVault
Represents an ERC4626 Vault, which is an ERC20 token itself and wrapped around an underlying asset token

#### Extends

- [`IToken`](#itoken)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

###### Inherited from

[`IToken`](#itoken).[`[___signature__]`](#___signature__-69)

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

###### Inherited from

`IToken.[___signature__]`

##### address

> `readonly` **address**: [`IAddress`](#iaddress)

Token address

###### Inherited from

[`IToken`](#itoken).[`address`](#address-6)

##### asset

> `readonly` **asset**: [`IToken`](#itoken)

The underlying ERC20 token asset of the vault

##### chainInfo

> `readonly` **chainInfo**: [`IChainInfo`](#ichaininfo)

Chain where the token is deployed

###### Inherited from

[`IToken`](#itoken).[`chainInfo`](#chaininfo-8)

##### decimals

> `readonly` **decimals**: `number`

Number of decimals for the token

###### Inherited from

[`IToken`](#itoken).[`decimals`](#decimals-2)

##### logoURI?

> `readonly` `optional` **logoURI?**: `string`

URI of the token logo

###### Inherited from

[`IVault`](#ivault).[`logoURI`](#logouri-3)

##### name

> `readonly` **name**: `string`

Full token name

###### Inherited from

[`IToken`](#itoken).[`name`](#name-9)

##### symbol

> `readonly` **symbol**: `string`

Token symbol, usually a short representation of name and used in tickers

###### Inherited from

[`IToken`](#itoken).[`symbol`](#symbol-2)

#### Methods

##### equals()

> **equals**(`token`): `boolean`

equals
Checks if two tokens are equal

###### Parameters

###### token

[`IToken`](#itoken)

The token to compare

###### Returns

`boolean`

true if the tokens are equal

Equality is determined by the address and chain information

###### Inherited from

[`IToken`](#itoken).[`equals`](#equals-10)

##### toString()

> **toString**(): `string`

toString
Returns a string representation of the object

###### Returns

`string`

string

The string representation should have enough info to debug the object

###### Inherited from

[`IToken`](#itoken).[`toString`](#tostring-33)

***

### IWallet

IWallet
Interface for the implementors of the wallet

This is present in the system in case it is needed to add extra information to the
wallet type

#### Extends

- [`IWalletData`](#iwalletdata)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

##### address

> `readonly` **address**: [`IAddress`](#iaddress)

Address of the wallet, valid for the different chains

###### Overrides

`IWalletData.address`

#### Methods

##### equals()

> **equals**(`wallet`): `boolean`

equals
Checks if two wallets are equal

###### Parameters

###### wallet

[`IWallet`](#iwallet)

The wallet to compare

###### Returns

`boolean`

true if the wallets are equal

Equality is determined by the address

***

### IYieldPoolId

IYieldPoolId
Opaque type representing the unique identifier for a Yield pool.
Typically a combination of protocol name, and pool address.

#### Extends

- [`IPoolId`](#ipoolid-1).[`IYieldPoolIdData`](#iyieldpooliddata)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

###### Inherited from

[`IPoolId`](#ipoolid-1).[`[___signature__]`](#___signature__-58)

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

###### Inherited from

`IPoolId.[___signature__]`

##### protocol

> `readonly` **protocol**: [`IProtocol`](#iprotocol)

Protocol where the pool is

###### Inherited from

[`IPoolId`](#ipoolid-1).[`protocol`](#protocol-3)

##### type

> `readonly` **type**: `Yield`

Pool type

###### Overrides

[`IPoolId`](#ipoolid-1).[`type`](#type-22)

***

### IYieldPoolInfo

IYieldPoolInfo
Represents the extended information for a Yield pool

#### Extends

- [`IPoolInfo`](#ipoolinfo).[`IYieldPoolInfoData`](#iyieldpoolinfodata)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

###### Inherited from

[`IPoolInfo`](#ipoolinfo).[`[___signature__]`](#___signature__-59)

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

###### Inherited from

`IPoolInfo.[___signature__]`

##### currentApy

> `readonly` **currentApy**: [`IPercentage`](#ipercentage)

The current APY of the pool

###### Overrides

`IYieldPoolInfoData.currentApy`

##### id

> `readonly` **id**: [`IYieldPoolId`](#iyieldpoolid)

Pool ID of the yield pool

###### Overrides

[`IPoolInfo`](#ipoolinfo).[`id`](#id-13)

##### receiptToken

> `readonly` **receiptToken**: [`IToken`](#itoken)

The receipt token that is minted/received

###### Overrides

`IYieldPoolInfoData.receiptToken`

##### totalValueLocked

> `readonly` **totalValueLocked**: [`IFiatCurrencyAmount`](#ifiatcurrencyamount)

Total Value Locked in the pool

###### Overrides

`IYieldPoolInfoData.totalValueLocked`

##### type

> `readonly` **type**: `Yield`

Type of the pool

###### Overrides

[`IPoolInfo`](#ipoolinfo).[`type`](#type-23)

##### underlyingToken

> `readonly` **underlyingToken**: [`IToken`](#itoken)

The underlying token that is deposited

###### Overrides

`IYieldPoolInfoData.underlyingToken`

##### yieldType

> `readonly` **yieldType**: [`YieldType`](../common/src/README.md#yieldtype)

The yield type classification

###### Overrides

`IYieldPoolInfoData.yieldType`

***

### IYieldPosition

IYieldPosition
Represents a position in a Yield protocol

#### Extends

- [`IPosition`](#iposition).[`IYieldPositionData`](#iyieldpositiondata)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

###### Inherited from

[`IPosition`](#iposition).[`[___signature__]`](#___signature__-60)

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

###### Inherited from

`IPosition.[___signature__]`

##### claimableRewards

> `readonly` **claimableRewards**: [`ITokenAmount`](#itokenamount)[]

Any secondary claimable reward tokens accumulated

###### Overrides

`IYieldPositionData.claimableRewards`

##### currentAmount

> `readonly` **currentAmount**: [`ITokenAmount`](#itokenamount)

Current total value including rebases or value appreciation

###### Overrides

`IYieldPositionData.currentAmount`

##### id

> `readonly` **id**: [`IYieldPositionId`](#iyieldpositionid-1)

Unique identifier for the position

###### Overrides

[`IPosition`](#iposition).[`id`](#id-14)

##### pool

> `readonly` **pool**: [`IPool`](#ipool)

Pool where the position is opened

###### Inherited from

[`IPosition`](#iposition).[`pool`](#pool-3)

##### poolId

> `readonly` **poolId**: [`IYieldPoolId`](#iyieldpoolid)

Pool ID where the position is located

###### Overrides

`IYieldPositionData.poolId`

##### principalAmount

> `readonly` **principalAmount**: [`ITokenAmount`](#itokenamount)

Amount originally deposited or the principal basis

###### Overrides

`IYieldPositionData.principalAmount`

##### type

> `readonly` **type**: `Yield`

Type of the position

###### Overrides

[`IPosition`](#iposition).[`type`](#type-24)

***

### IYieldPositionId

IYieldPositionId
Unique identifier for a Yield position.

#### Extends

- [`IPositionId`](#ipositionid-1).[`IYieldPositionIdData`](#iyieldpositioniddata)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

###### Inherited from

[`IPositionId`](#ipositionid-1).[`[___signature__]`](#___signature__-61)

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

###### Inherited from

`IPositionId.[___signature__]`

##### id

> `readonly` **id**: `string`

###### Inherited from

[`IPositionId`](#ipositionid-1).[`id`](#id-15)

##### type

> `readonly` **type**: `Yield`

Type of the position

###### Overrides

[`IPositionId`](#ipositionid-1).[`type`](#type-25)

***

### Order

Order
Simulation of a position. Specialized into the different types of simulations needed

#### Properties

##### simulation

> **simulation**: [`ISimulation`](#isimulation)

Simulation

##### transactions

> **transactions**: [`TransactionInfo`](../common/src/README.md#transactioninfo)[]

Transaction info

***

### Transaction

Transaction
Low level transaction that can be sent to the blockchain

#### Properties

##### calldata

> **calldata**: `` `0x${string}` ``

##### target

> **target**: [`IAddress`](#iaddress)

##### value

> **value**: `string`

## Type Aliases

### AddressParameters

> **AddressParameters** = `Omit`\<[`IAddressData`](#iaddressdata), `""`\>

Type for the parameters of Address

***

### AddressValue

> **AddressValue** = `Address`

***

### AmountValue

> **AmountValue** = `string`

***

### ApproveTransactionInfo

> **ApproveTransactionInfo** = `TransactionInfo` & `object`

#### Type Declaration

##### metadata

> **metadata**: [`TransactionMetadataApproval`](#transactionmetadataapproval)

##### type

> **type**: [`Approve`](#approve)

***

### ArmadaMigratablePosition

> **ArmadaMigratablePosition** = `object`

#### Properties

##### id

> **id**: [`AddressValue`](#addressvalue-1)

##### migrationType

> **migrationType**: [`ArmadaMigrationType`](../common/src/README.md#armadamigrationtype)

##### positionTokenAmount

> **positionTokenAmount**: [`ITokenAmount`](#itokenamount)

##### underlyingTokenAmount

> **underlyingTokenAmount**: [`ITokenAmount`](#itokenamount)

##### usdValue

> **usdValue**: [`IFiatCurrencyAmount`](#ifiatcurrencyamount)

***

### BridgeTransactionInfo

> **BridgeTransactionInfo** = `TransactionInfo` & `object`

#### Type Declaration

##### metadata

> **metadata**: [`TransactionMetadataBridge`](#transactionmetadatabridge)

##### type

> **type**: [`Bridge`](#bridge)

***

### ChainFamilyInfo

> **ChainFamilyInfo** = `object`

#### Properties

##### chainInfo

> **chainInfo**: [`ChainInfo`](#chaininfo-1)

##### familyName

> **familyName**: [`ChainFamilyName`](#chainfamilyname)

***

### ChainFamilyInfoById

> **ChainFamilyInfoById** = `Record`\<`number`, [`ChainFamilyInfo`](#chainfamilyinfo)\>

***

### ChainId

> **ChainId** = *typeof* [`ChainIds`](#chainids)\[keyof *typeof* [`ChainIds`](#chainids)\]

chainId
Represents the chain ID of a blockchain network

***

### ChainInfoParameters

> **ChainInfoParameters** = `Omit`\<[`IChainInfoData`](#ichaininfodata), `""`\>

Type for the parameters of ChainInfo

***

### ClaimTransactionInfo

> **ClaimTransactionInfo** = `TransactionInfo` & `object`

#### Type Declaration

##### type

> **type**: [`Claim`](#claim)

***

### Class

> **Class** = `object`

***

### CollateralInfoParameters

> **CollateralInfoParameters** = `Omit`\<[`ICollateralInfoData`](#icollateralinfodata), `""`\>

Type for the parameters of CollateralInfo

***

### DebtInfoParameters

> **DebtInfoParameters** = `Omit`\<[`IDebtInfoData`](#idebtinfodata), `""`\>

Type for the parameters of DebtInfo

***

### DelegateTransactionInfo

> **DelegateTransactionInfo** = `TransactionInfo` & `object`

#### Type Declaration

##### type

> **type**: [`Delegate`](#delegate)

***

### Denomination

> **Denomination** = [`IToken`](#itoken) \| [`FiatCurrency`](../common/src/README.md#fiatcurrency)

Denomination
Type for the instances of denomination

***

### DenominationData

> **DenominationData** = [`ITokenData`](#itokendata) \| [`FiatCurrency`](../common/src/README.md#fiatcurrency)

DenominationData
Type for the denomination

A denomination can be a token or a fiat currency

***

### DepositTransactionInfo

> **DepositTransactionInfo** = `TransactionInfo` & `object`

#### Type Declaration

##### metadata

> **metadata**: [`TransactionMetadataDeposit`](#transactionmetadatadeposit)

##### type

> **type**: [`Deposit`](#deposit)

***

### Erc20TransferTransactionInfo

> **Erc20TransferTransactionInfo** = `TransactionInfo` & `object`

#### Type Declaration

##### metadata

> **metadata**: [`TransactionMetadataErc20Transfer`](#transactionmetadataerc20transfer)

##### type

> **type**: [`Erc20Transfer`](#erc20transfer)

***

### ~~ExtendedTransactionInfo~~

> **ExtendedTransactionInfo** = [`ApproveTransactionInfo`](#approvetransactioninfo) \| [`DepositTransactionInfo`](#deposittransactioninfo) \| [`WithdrawTransactionInfo`](#withdrawtransactioninfo)

#### Deprecated

DONT TOUCH THIS!!!

***

### FiatCurrencyAmountMulDivParamType

> **FiatCurrencyAmountMulDivParamType** = `string` \| `number` \| [`IPrice`](#iprice) \| [`IPercentage`](#ipercentage)

Return Type narrowing for multiply and divide methods, so the return type can be properly inferred

This helps callers to know what to expect from the result of the operation

***

### FiatCurrencyAmountMulDivReturnType

> **FiatCurrencyAmountMulDivReturnType**\<`T`\> = `T` *extends* [`IPrice`](#iprice) ? [`ITokenAmount`](#itokenamount) \| [`IFiatCurrencyAmount`](#ifiatcurrencyamount) : `T` *extends* [`IPercentage`](#ipercentage) \| `string` \| `number` ? [`ITokenAmount`](#itokenamount) : `never`

#### Type Parameters

##### T

`T`

***

### FiatCurrencyAmountParameters

> **FiatCurrencyAmountParameters** = `Omit`\<[`IFiatCurrencyAmountData`](#ifiatcurrencyamountdata), `""`\>

Type for the parameters of FiatCurrencyAmount

***

### GlobalCacheConfig

> **GlobalCacheConfig** = `Record`\<[`VolatilityProfile`](../common/src/README.md#volatilityprofile), [`CachePolicy`](#cachepolicy)\>

Global configuration map mapping volatility profiles to caching policies.

***

### GraphChain

> **GraphChain** = `"mainnet"` \| `"base"` \| `"arbitrum"` \| `"sonic"` \| `"hyperliquid"`

***

### HexData

> **HexData** = `` `0x${string}` ``

***

### HoldingParameters

> **HoldingParameters** = [`IHoldingData`](#iholdingdata)

Type for the parameters of Holding

***

### IAddressData

> **IAddressData** = `Readonly`\<`z.infer`\<*typeof* [`AddressDataSchema`](#addressdataschema)\>\>

Type for the data part of the IAddress interface

***

### IBalanceChangeData

> **IBalanceChangeData** = `Readonly`\<`z.infer`\<*typeof* [`BalanceChangeDataSchema`](#balancechangedataschema)\>\>

***

### IChainInfoData

> **IChainInfoData** = `Readonly`\<`z.infer`\<*typeof* [`ChainInfoDataSchema`](#chaininfodataschema)\>\>

Type for the data part of the IChainInfo interface

***

### ICollateralInfoData

> **ICollateralInfoData** = `Readonly`\<`z.infer`\<*typeof* [`CollateralInfoDataSchema`](#collateralinfodataschema)\>\>

Type for the data part of the ICollateralInfo interface

***

### IDebtInfoData

> **IDebtInfoData** = `Readonly`\<`z.infer`\<*typeof* [`DebtInfoDataSchema`](#debtinfodataschema)\>\>

Type for the data part of the IDebtInfo interface

***

### IFiatCurrencyAmountData

> **IFiatCurrencyAmountData** = `Readonly`\<`z.infer`\<*typeof* [`FiatCurrencyAmountDataSchema`](#fiatcurrencyamountdataschema)\>\>

Type for the data part of the IFiatCurrencyAmount interface

***

### IGasEstimationData

> **IGasEstimationData** = `Readonly`\<`z.infer`\<*typeof* [`GasEstimationDataSchema`](#gasestimationdataschema)\>\>

***

### IHoldingData

> **IHoldingData** = `Readonly`\<`z.infer`\<*typeof* [`HoldingDataSchema`](#holdingdataschema)\>\>

Type for the data part of IHolding

***

### ILendingPoolData

> **ILendingPoolData** = `Readonly`\<`z.infer`\<*typeof* [`LendingPoolDataSchema`](#lendingpooldataschema)\>\>

Type for the data part of the ILendingPool interface

***

### ILendingPoolIdData

> **ILendingPoolIdData** = `Readonly`\<`z.infer`\<*typeof* [`LendingPoolIdDataSchema`](#lendingpooliddataschema)\>\>

Type for the data part of the ILendingPoolId interface

***

### ILendingPoolInfoData

> **ILendingPoolInfoData** = `Readonly`\<`z.infer`\<*typeof* [`LendingPoolInfoDataSchema`](#lendingpoolinfodataschema)\>\>

Type for the data part of the ILendingPoolInfo interface

***

### ILendingPositionData

> **ILendingPositionData** = `Readonly`\<`z.infer`\<*typeof* [`LendingPositionDataSchema`](#lendingpositiondataschema)\>\>

Type for the data part of the ILendingPosition interface

***

### ILendingPositionIdData

> **ILendingPositionIdData** = `Readonly`\<`z.infer`\<*typeof* [`LendingPositionIdDataSchema`](#lendingpositioniddataschema)\>\>

Type for the data part of the ILendingPositionId interface

***

### ILendingPositionTypeData

> **ILendingPositionTypeData** = `Readonly`\<`z.infer`\<*typeof* [`LendingPositionTypeSchema`](#lendingpositiontypeschema)\>\>

Type for the data part of LendingPositionType

***

### IntentQuoteData

> **IntentQuoteData** = `object`

IntentQuoteData
Represents the requested quote data for a swap between two tokens

#### Properties

##### fromAmount

> **fromAmount**: [`ITokenAmount`](#itokenamount)

##### order

> **order**: `UnsignedOrder`

##### providerType

> **providerType**: [`IntentSwapProviderType`](#intentswapprovidertype)

##### toAmount

> **toAmount**: [`ITokenAmount`](#itokenamount)

##### validTo

> **validTo**: `number`

***

### InvalidationStrategy

> **InvalidationStrategy** = `"never"` \| `"new_block"` \| `number`

Defines the invalidation strategy (TTL).

***

### IPercentageData

> **IPercentageData** = `Readonly`\<`z.infer`\<*typeof* [`PercentageDataSchema`](#percentagedataschema)\>\>

Type for the data part of the IPercentage interface

***

### IPoolData

> **IPoolData** = `Readonly`\<`z.infer`\<*typeof* [`PoolDataSchema`](#pooldataschema)\>\>

Type for the data part of the IPool interface

***

### IPoolIdData

> **IPoolIdData** = `Readonly`\<`z.infer`\<*typeof* [`PoolIdDataSchema`](#pooliddataschema)\>\>

Type for the data part of the IPoolId interface

***

### IPoolInfoData

> **IPoolInfoData** = `Readonly`\<`z.infer`\<*typeof* [`PoolInfoDataSchema`](#poolinfodataschema)\>\>

Type for the data part of the IPoolInfo interface

***

### IPositionData

> **IPositionData** = `Readonly`\<`z.infer`\<*typeof* [`PositionDataSchema`](#positiondataschema)\>\>

Type for the data part of the IPosition interface

***

### IPositionIdData

> **IPositionIdData** = `Readonly`\<`z.infer`\<*typeof* [`PositionIdDataSchema`](#positioniddataschema)\>\>

Type for IPositionData interface

***

### IPositionsManagerData

> **IPositionsManagerData** = `Readonly`\<`z.infer`\<*typeof* [`PositionsManagerDataSchema`](#positionsmanagerdataschema)\>\>

Type for the data part of the IPositionsManager interface

***

### IPositionTypeData

> **IPositionTypeData** = `Readonly`\<`z.infer`\<*typeof* [`PositionTypeSchema`](#positiontypeschema)\>\>

Type for the data part of PositionType

***

### IPriceData

> **IPriceData** = `Readonly`\<`z.infer`\<*typeof* [`PriceDataSchema`](#pricedataschema)\>\>

Type definition for the IPrice data

***

### IProtocolData

> **IProtocolData** = `Readonly`\<`z.infer`\<*typeof* [`ProtocolDataSchema`](#protocoldataschema)\>\>

Type for the data part of the IProtocol interface

***

### IRebalanceDataData

> **IRebalanceDataData** = `Readonly`\<`z.infer`\<*typeof* [`RebalanceDataSchema`](#rebalancedataschema)\>\>

Type definition for the RebalanceData data

***

### IRiskRatioData

> **IRiskRatioData** = `Readonly`\<`z.infer`\<*typeof* [`RiskRatioDataSchema`](#riskratiodataschema)\>\>

Type for the data part of the IRiskRatio interface

***

### ISDKErrorData

> **ISDKErrorData** = `Readonly`\<`z.infer`\<*typeof* [`SDKErrorDataSchema`](#sdkerrordataschema)\>\>

Type for the data part of the ISDKError interface

***

### ISimulationData

> **ISimulationData** = `Readonly`\<`z.infer`\<*typeof* [`SimulationSchema`](#simulationschema)\>\>

Type for the data part of the IToken interface

***

### ISpotPriceInfo

> **ISpotPriceInfo** = `object`

ISpotPriceInfo
Gives the current market price for a specific asset

#### Properties

##### price

> **price**: [`IPrice`](#iprice)

The price of the asset

##### provider

> **provider**: [`OracleProviderType`](../common/src/README.md#oracleprovidertype)

The oracle provider type

##### token

> **token**: [`IToken`](#itoken)

The token for which the price is being requested. Also included in price, but added here for convenience

***

### ISwapErrorData

> **ISwapErrorData** = `Readonly`\<`z.infer`\<*typeof* [`SwapErrorDataSchema`](#swaperrordataschema)\>\>

Type for the data part of the IError interface

***

### ITokenAmountData

> **ITokenAmountData** = `Readonly`\<`z.infer`\<*typeof* [`TokenAmountDataSchema`](#tokenamountdataschema)\>\>

Type definition for the TokenAmount data

***

### ITokenData

> **ITokenData** = `Readonly`\<`z.infer`\<*typeof* [`TokenDataSchema`](#tokendataschema)\>\>

Type for the data part of the IToken interface

***

### IUserData

> **IUserData** = `Readonly`\<`z.infer`\<*typeof* [`UserDataSchema`](#userdataschema)\>\>

Type for the data part of the IUser interface

***

### IUserPortfolioData

> **IUserPortfolioData** = `Readonly`\<`z.infer`\<*typeof* [`UserPortfolioDataSchema`](#userportfoliodataschema)\>\>

Type for the data part of IUserPortfolio

***

### IVaultData

> **IVaultData** = `Readonly`\<`z.infer`\<*typeof* [`VaultDataSchema`](#vaultdataschema)\>\>

Type for the data part of the IVault interface

***

### IWalletData

> **IWalletData** = `Readonly`\<`z.infer`\<*typeof* [`WalletDataSchema`](#walletdataschema)\>\>

Type for the data part of the IWallet interface

***

### IYieldPoolIdData

> **IYieldPoolIdData** = `Readonly`\<`z.infer`\<*typeof* [`YieldPoolIdDataSchema`](#yieldpooliddataschema)\>\>

***

### IYieldPoolInfoData

> **IYieldPoolInfoData** = `Readonly`\<`z.infer`\<*typeof* [`YieldPoolInfoDataSchema`](#yieldpoolinfodataschema)\>\>

Type for the data part of the IYieldPoolInfo interface

***

### IYieldPositionData

> **IYieldPositionData** = `Readonly`\<`z.infer`\<*typeof* [`YieldPositionDataSchema`](#yieldpositiondataschema)\>\>

Type for the data part of the IYieldPosition interface

***

### IYieldPositionIdData

> **IYieldPositionIdData** = `Readonly`\<`z.infer`\<*typeof* [`YieldPositionIdDataSchema`](#yieldpositioniddataschema)\>\>

***

### IYieldTypeData

> **IYieldTypeData** = `Readonly`\<`z.infer`\<*typeof* [`YieldTypeSchema`](#yieldtypeschema)\>\>

Type for the data part of YieldType

***

### LegacyChainId

> **LegacyChainId** = *typeof* [`LegacyChainIds`](#legacychainids)\[keyof *typeof* [`LegacyChainIds`](#legacychainids)\]

***

### LendingPoolIdParameters

> **LendingPoolIdParameters** = `Omit`\<[`ILendingPoolIdData`](#ilendingpooliddata), `"type"`\>

Type for the parameters of LendingPoolId

***

### LendingPoolInfoParameters

> **LendingPoolInfoParameters** = `Omit`\<[`ILendingPoolInfoData`](#ilendingpoolinfodata), `"type"`\>

Type for the parameters of LendingPoolInfo

***

### LendingPoolParameters

> **LendingPoolParameters** = `Omit`\<[`ILendingPoolData`](#ilendingpooldata), `"type"`\>

Type for the parameters of LendingPool

***

### LendingPositionIdParameters

> **LendingPositionIdParameters** = `Omit`\<[`ILendingPositionIdData`](#ilendingpositioniddata), `"type"`\>

Type for the parameters of LendingPositionId

***

### LendingPositionParameters

> **LendingPositionParameters** = `Omit`\<[`ILendingPositionData`](#ilendingpositiondata), `"type"`\>

Type for the parameters of LendingPosition

***

### LendingSimulationParams

> **LendingSimulationParams** = `SimulationParams` & `object`

#### Type Declaration

##### balanceChanges

> **balanceChanges**: [`IBalanceChange`](#ibalancechange)[]

##### gasEstimations

> **gasEstimations**: [`IGasEstimation`](#igasestimation)[]

##### steps

> **steps**: `Steps`[]

***

### MerklClaimTransactionInfo

> **MerklClaimTransactionInfo** = `TransactionInfo` & `object`

#### Type Declaration

##### type

> **type**: [`MerklClaim`](#merklclaim)

***

### MigrationTransactionInfo

> **MigrationTransactionInfo** = `TransactionInfo` & `object`

#### Type Declaration

##### metadata

> **metadata**: [`TransactionMetadataMigration`](#transactionmetadatamigration)

##### type

> **type**: [`Migration`](#migration)

***

### PercentageParameters

> **PercentageParameters** = `Omit`\<[`IPercentageData`](#ipercentagedata), `""`\>

Type for the parameters of Percentage

***

### PoolIdParameters

> **PoolIdParameters** = `Omit`\<[`IPoolIdData`](#ipooliddata), `"type"` \| `"protocol"`\>

Type for the parameters of PoolId

***

### PoolInfoParameters

> **PoolInfoParameters** = `Omit`\<[`IPoolInfoData`](#ipoolinfodata), `"type"` \| `"id"`\>

Type for the parameters of PoolInfo

***

### PoolParameters

> **PoolParameters** = `Omit`\<[`IPoolData`](#ipooldata), `"type"` \| `"id"`\>

Type for the parameters of IPool

***

### PositionIdParameters

> **PositionIdParameters** = `Omit`\<[`IPositionIdData`](#ipositioniddata), `"type"`\>

Type for the parameters of Position

***

### PositionParameters

> **PositionParameters** = `Omit`\<[`IPositionData`](#ipositiondata), `"type"` \| `"id"`\>

Type for the parameters of Position

***

### PriceMulParamType

> **PriceMulParamType** = `string` \| `number` \| [`IPrice`](#iprice) \| [`ITokenAmount`](#itokenamount) \| [`IFiatCurrencyAmount`](#ifiatcurrencyamount) \| [`IPercentage`](#ipercentage)

Return Type narrowing for multiply and divide methods, so the return type can be properly inferred

This helps callers to know what to expect from the result of the operation

***

### PriceMulReturnType

> **PriceMulReturnType**\<`T`\> = `T` *extends* [`ITokenAmount`](#itokenamount) ? [`ITokenAmount`](#itokenamount) \| [`IFiatCurrencyAmount`](#ifiatcurrencyamount) : `T` *extends* [`IFiatCurrencyAmount`](#ifiatcurrencyamount) ? [`IFiatCurrencyAmount`](#ifiatcurrencyamount) \| [`ITokenAmount`](#itokenamount) : [`IPrice`](#iprice)

#### Type Parameters

##### T

`T`

***

### PriceParameters

> **PriceParameters** = `Omit`\<[`IPriceData`](#ipricedata), `""`\>

Type for the parameters of Price

***

### ProtocolParameters

> **ProtocolParameters** = `Omit`\<[`IProtocolData`](#iprotocoldata), `"name"`\>

Type for the parameters of Price

***

### QuoteData

> **QuoteData** = `object`

QuoteData
Gives information about a swap operation without providing
             the data needed to perform the swap

#### Properties

##### estimatedGas

> **estimatedGas**: `string`

##### fromTokenAmount

> **fromTokenAmount**: [`ITokenAmount`](#itokenamount)

##### provider

> **provider**: [`SwapProviderType`](../common/src/README.md#swapprovidertype)

##### routes

> **routes**: [`SwapRoute`](#swaproute)[]

##### toTokenAmount

> **toTokenAmount**: [`ITokenAmount`](#itokenamount)

***

### ReferenceableField

> **ReferenceableField**\<`T`\> = `T` \| [`ValueReference`](../common/src/README.md#valuereference)\<`T`\>

#### Type Parameters

##### T

`T`

***

### RiskRatioParameters

> **RiskRatioParameters** = `Omit`\<[`IRiskRatioData`](#iriskratiodata), `""`\>

Type for the parameters of RiskRatio

***

### RolesResponse

> **RolesResponse** = `object`

#### Properties

##### roles

> **roles**: [`Role`](../common/src/README.md#role)[]

***

### SDKErrorParameters

> **SDKErrorParameters** = `Omit`\<[`ISDKErrorData`](#isdkerrordata), `""`\>

Type for the parameters of SDKError

***

### SimulatedSwapData

> **SimulatedSwapData** = `Omit`\<[`QuoteData`](#quotedata), `"estimatedGas"` \| `"routes"`\> & `object`

Represents the data returned for each Swap in simulation.
It is derived from the `QuoteData` type with the `estimatedGas` and 'routes' fields omitted,
as gas estimation is not relevant for simulation purposes.

#### Type Declaration

##### offerPrice

> **offerPrice**: [`IPrice`](#iprice)

##### priceImpact

> **priceImpact**: [`IPercentage`](#ipercentage) \| `null`

##### slippage

> **slippage**: [`IPercentage`](#ipercentage)

##### spotPrice

> **spotPrice**: [`IPrice`](#iprice)

***

### SimulationStrategy

> **SimulationStrategy** = readonly [`StrategyStep`](../common/src/README.md#strategystep)[]

***

### SpotPricesInfo

> **SpotPricesInfo** = `object`

SpotPricesInfo
Gives the current market price for a specific list of assets

#### Properties

##### priceByAddress

> **priceByAddress**: `Record`\<`string`, [`IPrice`](#iprice)\>

Price by addresses

##### provider

> **provider**: [`OracleProviderType`](../common/src/README.md#oracleprovidertype)

The oracle provider type

***

### StakeTransactionInfo

> **StakeTransactionInfo** = `TransactionInfo` & `object`

#### Type Declaration

##### type

> **type**: [`Stake`](#stake)

***

### SwapData

> **SwapData** = `object`

SwapData
Represents the data needed to perform a swap between two tokens

#### Properties

##### calldata

> **calldata**: [`HexData`](#hexdata)

##### fromTokenAmount

> **fromTokenAmount**: [`ITokenAmount`](#itokenamount)

##### gasPrice

> **gasPrice**: `string`

##### provider

> **provider**: [`SwapProviderType`](../common/src/README.md#swapprovidertype)

##### targetContract

> **targetContract**: [`IAddress`](#iaddress)

##### toTokenAmount

> **toTokenAmount**: [`ITokenAmount`](#itokenamount)

##### value

> **value**: `string`

***

### SwapErrorParams

> **SwapErrorParams** = `Omit`\<[`ISwapErrorData`](#iswaperrordata), `""`\>

Type for the parameters of SwapError

***

### SwapRoute

> **SwapRoute** = `SwapHop`[]

***

### ToggleAQasMerklRewardsOperatorTransactionInfo

> **ToggleAQasMerklRewardsOperatorTransactionInfo** = `TransactionInfo` & `object`

#### Type Declaration

##### type

> **type**: [`ToggleAQasMerklRewardsOperator`](#toggleaqasmerklrewardsoperator)

***

### TokenAmountMulDivParamType

> **TokenAmountMulDivParamType** = `string` \| `number` \| [`IPrice`](#iprice) \| [`IPercentage`](#ipercentage)

Return Type narrowing for multiply and divide methods, so the return type can be properly inferred

This helps callers to know what to expect from the result of the operation

***

### TokenAmountMulDivReturnType

> **TokenAmountMulDivReturnType**\<`T`\> = `T` *extends* [`IPrice`](#iprice) ? [`ITokenAmount`](#itokenamount) \| [`IFiatCurrencyAmount`](#ifiatcurrencyamount) : `T` *extends* [`IPercentage`](#ipercentage) \| `string` \| `number` ? [`ITokenAmount`](#itokenamount) : `never`

#### Type Parameters

##### T

`T`

***

### TokenAmountParameters

> **TokenAmountParameters** = `Omit`\<[`ITokenAmountData`](#itokenamountdata), `""`\>

Type for the parameters of TokenAmount

***

### TokenParameters

> **TokenParameters** = `Omit`\<[`ITokenData`](#itokendata), `""`\>

Type for the parameters of Token

***

### TransactionMetadataApproval

> **TransactionMetadataApproval** = `object`

#### Properties

##### approvalAmount

> **approvalAmount**: [`ITokenAmount`](#itokenamount)

##### approvalSpender

> **approvalSpender**: [`IAddress`](#iaddress)

***

### TransactionMetadataBridge

> **TransactionMetadataBridge** = `object`

#### Properties

##### fromAmount

> **fromAmount**: [`ITokenAmount`](#itokenamount)

##### lzFee

> **lzFee**: [`ITokenAmount`](#itokenamount)

##### toAmount

> **toAmount**: [`ITokenAmount`](#itokenamount)

***

### TransactionMetadataDeposit

> **TransactionMetadataDeposit** = `object`

#### Properties

##### fromAmount

> **fromAmount**: [`ITokenAmount`](#itokenamount)

##### priceImpact?

> `optional` **priceImpact?**: [`TransactionPriceImpact`](#transactionpriceimpact)

##### slippage

> **slippage**: [`IPercentage`](#ipercentage)

##### toAmount?

> `optional` **toAmount?**: [`ITokenAmount`](#itokenamount)

***

### TransactionMetadataErc20Transfer

> **TransactionMetadataErc20Transfer** = `object`

#### Properties

##### amount

> **amount**: [`ITokenAmount`](#itokenamount)

##### recipient

> **recipient**: [`IAddress`](#iaddress)

##### token

> **token**: [`IAddress`](#iaddress)

***

### TransactionMetadataMigration

> **TransactionMetadataMigration** = `object`

#### Properties

##### priceImpactByPositionId

> **priceImpactByPositionId**: `Record`\<`string`, [`TransactionPriceImpact`](#transactionpriceimpact)\>

##### swapAmountByPositionId

> **swapAmountByPositionId**: `Record`\<`string`, [`ITokenAmount`](#itokenamount)\>

***

### TransactionMetadataWithdraw

> **TransactionMetadataWithdraw** = `object`

#### Properties

##### fromAmount

> **fromAmount**: [`ITokenAmount`](#itokenamount)

##### priceImpact?

> `optional` **priceImpact?**: [`TransactionPriceImpact`](#transactionpriceimpact)

##### slippage

> **slippage**: [`IPercentage`](#ipercentage)

##### toAmount?

> `optional` **toAmount?**: [`ITokenAmount`](#itokenamount)

***

### TransactionPriceImpact

> **TransactionPriceImpact** = `object`

#### Properties

##### impact

> **impact**: [`IPercentage`](#ipercentage) \| `null`

##### price

> **price**: [`IPrice`](#iprice) \| `null`

***

### UnstakeTransactionInfo

> **UnstakeTransactionInfo** = `TransactionInfo` & `object`

#### Type Declaration

##### type

> **type**: [`Unstake`](#unstake)

***

### UserParameters

> **UserParameters** = `Omit`\<[`IUserData`](#iuserdata), `""`\>

Type for the parameters of User

***

### UserPortfolioParameters

> **UserPortfolioParameters** = [`IUserPortfolioData`](#iuserportfoliodata)

Type for the parameters of UserPortfolio

***

### VaultParameters

> **VaultParameters** = `Omit`\<[`IVaultData`](#ivaultdata), `""`\>

Type for the parameters of Vault

***

### WalletParameters

> **WalletParameters** = `Omit`\<[`IWalletData`](#iwalletdata), `""`\>

Type for the parameters of Wallet

***

### WithdrawTransactionInfo

> **WithdrawTransactionInfo** = `TransactionInfo` & `object`

#### Type Declaration

##### metadata

> **metadata**: [`TransactionMetadataWithdraw`](#transactionmetadatawithdraw)

##### type

> **type**: [`Withdraw`](#withdraw)

***

### YieldSimulationParams

> **YieldSimulationParams** = `SimulationParams` & `object`

#### Type Declaration

##### balanceChanges

> **balanceChanges**: [`IBalanceChange`](#ibalancechange)[]

##### gasEstimations

> **gasEstimations**: [`IGasEstimation`](#igasestimation)[]

##### steps

> **steps**: `Steps`[]

## Variables

### \_\_schemaChecker

> `const` **\_\_schemaChecker**: [`FiatCurrency`](../common/src/README.md#fiatcurrency)

Checker to make sure that the schema is aligned with the interface

***

### \_\_YieldPoolIdSignature\_\_

> `const` **\_\_YieldPoolIdSignature\_\_**: unique `symbol`

Unique signature to provide branded types to the interface

***

### \_\_YieldPoolInfoSignature\_\_

> `const` **\_\_YieldPoolInfoSignature\_\_**: unique `symbol`

Unique signature to provide branded types to the interface

***

### \_\_YieldPositionIdSignature\_\_

> `const` **\_\_YieldPositionIdSignature\_\_**: unique `symbol`

Unique signature to provide branded types to the interface

***

### \_\_YieldPositionSignature\_\_

> `const` **\_\_YieldPositionSignature\_\_**: unique `symbol`

Unique signature to provide branded types to the interface

***

### AaveV3LendingPoolId

> **AaveV3LendingPoolId**: `any`

***

### AddressDataSchema

> `const` **AddressDataSchema**: `z.ZodObject`\<\{ `type`: `z.ZodNativeEnum`\<*typeof* [`AddressType`](../common/src/README.md#addresstype)\>; `value`: `z.ZodType`\<`` `0x${string}` ``, `z.ZodTypeDef`, `` `0x${string}` ``\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}, \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}\>

Zod schema for IAddress

***

### ArmadaMigrationTypeSchema

> `const` **ArmadaMigrationTypeSchema**: `z.ZodNativeEnum`\<*typeof* [`ArmadaMigrationType`](../common/src/README.md#armadamigrationtype)\>

Zod schema for ProtocolName

***

### BalanceChangeDataSchema

> `const` **BalanceChangeDataSchema**: `z.ZodObject`\<\{ `amount`: `z.ZodType`\<[`ITokenAmount`](#itokenamount), `z.ZodTypeDef`, [`ITokenAmount`](#itokenamount)\>; `fiatValue`: `z.ZodType`\<[`IFiatCurrencyAmount`](#ifiatcurrencyamount), `z.ZodTypeDef`, [`IFiatCurrencyAmount`](#ifiatcurrencyamount)\>; `token`: `z.ZodType`\<[`IToken`](#itoken), `z.ZodTypeDef`, [`IToken`](#itoken)\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `amount`: [`ITokenAmount`](#itokenamount); `fiatValue`: [`IFiatCurrencyAmount`](#ifiatcurrencyamount); `token`: [`IToken`](#itoken); \}, \{ `amount`: [`ITokenAmount`](#itokenamount); `fiatValue`: [`IFiatCurrencyAmount`](#ifiatcurrencyamount); `token`: [`IToken`](#itoken); \}\>

***

### ChainFamilyMap

> `const` **ChainFamilyMap**: `object`

#### Type Declaration

##### Arbitrum

> **Arbitrum**: `Record`\<`"ArbitrumOne"`, [`ChainInfo`](#chaininfo-1)\>

##### Base

> **Base**: `Record`\<`"Base"`, [`ChainInfo`](#chaininfo-1)\>

##### Ethereum

> **Ethereum**: `Record`\<`"Mainnet"`, [`ChainInfo`](#chaininfo-1)\>

##### Hyperliquid

> **Hyperliquid**: `Record`\<`"Hyperliquid"`, [`ChainInfo`](#chaininfo-1)\>

##### Optimism

> **Optimism**: `Record`\<`"Optimism"`, [`ChainInfo`](#chaininfo-1)\>

##### Sonic

> **Sonic**: `Record`\<`"Sonic"`, [`ChainInfo`](#chaininfo-1)\>

***

### ChainIds

> `const` **ChainIds**: `object`

#### Type Declaration

##### ArbitrumOne

> `readonly` **ArbitrumOne**: `42161`

##### Base

> `readonly` **Base**: `8453`

##### Hyperliquid

> `readonly` **Hyperliquid**: `999`

##### Mainnet

> `readonly` **Mainnet**: `1`

##### Sonic

> `readonly` **Sonic**: `146`

***

### ChainIdSchema

> `const` **ChainIdSchema**: `z.ZodUnion`\<\[`z.ZodLiteral`\<`1` \| `8453` \| `42161` \| `146` \| `999`\>, `z.ZodLiteral`\<`1` \| `8453` \| `42161` \| `146` \| `999`\>, ...z.ZodLiteral\<1 \| 8453 \| 42161 \| 146 \| 999\>\[\]\]\>

***

### chainIdToGraphChain

> `const` **chainIdToGraphChain**: (`chainId`) => [`GraphChain`](#graphchain)

#### Parameters

##### chainId

`number`

#### Returns

[`GraphChain`](#graphchain)

***

### ChainInfoDataSchema

> `const` **ChainInfoDataSchema**: `z.ZodObject`\<\{ `chainId`: `z.ZodUnion`\<\[`z.ZodUnion`\<\[`z.ZodLiteral`\<`1` \| `8453` \| `42161` \| `146` \| `999`\>, `z.ZodLiteral`\<`1` \| `8453` \| `42161` \| `146` \| `999`\>, ...z.ZodLiteral\<1 \| 8453 \| 42161 \| 146 \| 999\>\[\]\]\>, `z.ZodUnion`\<\[`z.ZodLiteral`\<`1` \| `8453` \| `42161` \| `146` \| `10`\>, `z.ZodLiteral`\<`1` \| `8453` \| `42161` \| `146` \| `10`\>, ...z.ZodLiteral\<1 \| 8453 \| 42161 \| 146 \| 10\>\[\]\]\>\]\>; `name`: `z.ZodString`; \}, `"strip"`, `z.ZodTypeAny`, \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}, \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}\>

Zod schema for IChainInfo

***

### CollateralInfoDataSchema

> `const` **CollateralInfoDataSchema**: `z.ZodObject`\<\{ `liquidationPenalty`: `z.ZodType`\<[`IPercentage`](#ipercentage), `z.ZodTypeDef`, [`IPercentage`](#ipercentage)\>; `liquidationThreshold`: `z.ZodType`\<[`IRiskRatio`](#iriskratio), `z.ZodTypeDef`, [`IRiskRatio`](#iriskratio)\>; `maxSupply`: `z.ZodType`\<[`ITokenAmount`](#itokenamount), `z.ZodTypeDef`, [`ITokenAmount`](#itokenamount)\>; `price`: `z.ZodType`\<[`IPrice`](#iprice), `z.ZodTypeDef`, [`IPrice`](#iprice)\>; `priceUSD`: `z.ZodType`\<[`IPrice`](#iprice), `z.ZodTypeDef`, [`IPrice`](#iprice)\>; `token`: `z.ZodType`\<[`IToken`](#itoken), `z.ZodTypeDef`, [`IToken`](#itoken)\>; `tokensLocked`: `z.ZodType`\<[`ITokenAmount`](#itokenamount), `z.ZodTypeDef`, [`ITokenAmount`](#itokenamount)\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `liquidationPenalty`: [`IPercentage`](#ipercentage); `liquidationThreshold`: [`IRiskRatio`](#iriskratio); `maxSupply`: [`ITokenAmount`](#itokenamount); `price`: [`IPrice`](#iprice); `priceUSD`: [`IPrice`](#iprice); `token`: [`IToken`](#itoken); `tokensLocked`: [`ITokenAmount`](#itokenamount); \}, \{ `liquidationPenalty`: [`IPercentage`](#ipercentage); `liquidationThreshold`: [`IRiskRatio`](#iriskratio); `maxSupply`: [`ITokenAmount`](#itokenamount); `price`: [`IPrice`](#iprice); `priceUSD`: [`IPrice`](#iprice); `token`: [`IToken`](#itoken); `tokensLocked`: [`ITokenAmount`](#itokenamount); \}\>

Zod schema for ICollateralInfo

***

### DebtInfoDataSchema

> `const` **DebtInfoDataSchema**: `z.ZodObject`\<\{ `debtAvailable`: `z.ZodType`\<[`ITokenAmount`](#itokenamount), `z.ZodTypeDef`, [`ITokenAmount`](#itokenamount)\>; `debtCeiling`: `z.ZodType`\<[`ITokenAmount`](#itokenamount), `z.ZodTypeDef`, [`ITokenAmount`](#itokenamount)\>; `dustLimit`: `z.ZodType`\<[`ITokenAmount`](#itokenamount), `z.ZodTypeDef`, [`ITokenAmount`](#itokenamount)\>; `interestRate`: `z.ZodType`\<[`IPercentage`](#ipercentage), `z.ZodTypeDef`, [`IPercentage`](#ipercentage)\>; `originationFee`: `z.ZodType`\<[`IPercentage`](#ipercentage), `z.ZodTypeDef`, [`IPercentage`](#ipercentage)\>; `price`: `z.ZodType`\<[`IPrice`](#iprice), `z.ZodTypeDef`, [`IPrice`](#iprice)\>; `priceUSD`: `z.ZodType`\<[`IPrice`](#iprice), `z.ZodTypeDef`, [`IPrice`](#iprice)\>; `token`: `z.ZodType`\<[`IToken`](#itoken), `z.ZodTypeDef`, [`IToken`](#itoken)\>; `totalBorrowed`: `z.ZodType`\<[`ITokenAmount`](#itokenamount), `z.ZodTypeDef`, [`ITokenAmount`](#itokenamount)\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `debtAvailable`: [`ITokenAmount`](#itokenamount); `debtCeiling`: [`ITokenAmount`](#itokenamount); `dustLimit`: [`ITokenAmount`](#itokenamount); `interestRate`: [`IPercentage`](#ipercentage); `originationFee`: [`IPercentage`](#ipercentage); `price`: [`IPrice`](#iprice); `priceUSD`: [`IPrice`](#iprice); `token`: [`IToken`](#itoken); `totalBorrowed`: [`ITokenAmount`](#itokenamount); \}, \{ `debtAvailable`: [`ITokenAmount`](#itokenamount); `debtCeiling`: [`ITokenAmount`](#itokenamount); `dustLimit`: [`ITokenAmount`](#itokenamount); `interestRate`: [`IPercentage`](#ipercentage); `originationFee`: [`IPercentage`](#ipercentage); `price`: [`IPrice`](#iprice); `priceUSD`: [`IPrice`](#iprice); `token`: [`IToken`](#itoken); `totalBorrowed`: [`ITokenAmount`](#itokenamount); \}\>

Zod schema for IDebtInfo

***

### DenominationDataSchema

> `const` **DenominationDataSchema**: `z.ZodUnion`\<\[`z.ZodObject`\<\{ `address`: `z.ZodObject`\<\{ `type`: `z.ZodNativeEnum`\<[`AddressType`](../common/src/README.md#addresstype)\>; `value`: `z.ZodType`\<`` `0x${string}` ``, `z.ZodTypeDef`, `` `0x${string}` ``\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}, \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}\>; `chainInfo`: `z.ZodObject`\<\{ `chainId`: `z.ZodUnion`\<\[`z.ZodUnion`\<\[`z.ZodLiteral`\<...\>, `z.ZodLiteral`\<...\>, `...(...)`\]\>, `z.ZodUnion`\<\[`z.ZodLiteral`\<...\>, `z.ZodLiteral`\<...\>, `...(...)`\]\>\]\>; `name`: `z.ZodString`; \}, `"strip"`, `z.ZodTypeAny`, \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}, \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}\>; `decimals`: `z.ZodNumber`; `logoURI`: `z.ZodOptional`\<`z.ZodNullable`\<`z.ZodString`\>\>; `name`: `z.ZodString`; `symbol`: `z.ZodString`; \}, `"strip"`, `z.ZodTypeAny`, \{ `address`: \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}; `chainInfo`: \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}; `decimals`: `number`; `logoURI?`: `string` \| `null`; `name`: `string`; `symbol`: `string`; \}, \{ `address`: \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}; `chainInfo`: \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}; `decimals`: `number`; `logoURI?`: `string` \| `null`; `name`: `string`; `symbol`: `string`; \}\>, `z.ZodNativeEnum`\<*typeof* [`FiatCurrency`](../common/src/README.md#fiatcurrency)\>\]\>

Zod schema for Denomination

***

### FETCH\_CONFIG

> `const` **FETCH\_CONFIG**: `object`

Standard fetch configuration for the SDK

#### Type Declaration

##### EXTENDED\_TIMEOUT

> `readonly` **EXTENDED\_TIMEOUT**: `30000`

Timeout for critical operations that need more time

##### SHORT\_TIMEOUT

> `readonly` **SHORT\_TIMEOUT**: `5000`

Timeout for quick operations

##### TIMEOUT

> `readonly` **TIMEOUT**: `10000`

Standard timeout for API calls in milliseconds

***

### FiatCurrencyAmountDataSchema

> `const` **FiatCurrencyAmountDataSchema**: `z.ZodObject`\<\{ `amount`: `z.ZodString`; `fiat`: `z.ZodNativeEnum`\<*typeof* [`FiatCurrency`](../common/src/README.md#fiatcurrency)\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `amount`: `string`; `fiat`: [`FiatCurrency`](../common/src/README.md#fiatcurrency); \}, \{ `amount`: `string`; `fiat`: [`FiatCurrency`](../common/src/README.md#fiatcurrency); \}\>

Zod schema for IFiatCurrencyAmount

***

### FiatCurrencySchema

> `const` **FiatCurrencySchema**: `z.ZodNativeEnum`\<*typeof* [`FiatCurrency`](../common/src/README.md#fiatcurrency)\>

FiatCurrencySchema
Zod schema for the FiatCurrency enum

***

### GasEstimationDataSchema

> `const` **GasEstimationDataSchema**: `z.ZodObject`\<\{ `gasFiatValue`: `z.ZodType`\<[`IFiatCurrencyAmount`](#ifiatcurrencyamount), `z.ZodTypeDef`, [`IFiatCurrencyAmount`](#ifiatcurrencyamount)\>; `gasTokenAmount`: `z.ZodType`\<[`ITokenAmount`](#itokenamount), `z.ZodTypeDef`, [`ITokenAmount`](#itokenamount)\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `gasFiatValue`: [`IFiatCurrencyAmount`](#ifiatcurrencyamount); `gasTokenAmount`: [`ITokenAmount`](#itokenamount); \}, \{ `gasFiatValue`: [`IFiatCurrencyAmount`](#ifiatcurrencyamount); `gasTokenAmount`: [`ITokenAmount`](#itokenamount); \}\>

***

### getViemChain

> `const` **getViemChain**: (`chainId`) => \{ `blockExplorers`: \{ `default`: \{ `apiUrl`: `"https://api.hyperevmscan.io/api"`; `name`: `"HyperEVMScan"`; `url`: `"https://hyperevmscan.io"`; \}; \}; `blockTime?`: `number`; `contracts`: \{ `multicall3`: \{ `address`: `"0xca11bde05977b3631167028862be2a173976ca11"`; `blockCreated`: `13051`; \}; \}; `custom?`: `Record`\<`string`, `unknown`\>; `ensTlds?`: readonly `string`[]; `experimental_preconfirmationTime?`: `number`; `extendSchema?`: `Record`\<`string`, `unknown`\>; `fees?`: `ChainFees`; `formatters?`: `undefined`; `id`: `999`; `name`: `"HyperEVM"`; `nativeCurrency`: \{ `decimals`: `18`; `name`: `"HYPE"`; `symbol`: `"HYPE"`; \}; `prepareTransactionRequest?`: ((`args`, `options`) => `Promise`\<`PrepareTransactionRequestParameters`\>) \| \[((`args`, `options`) => `Promise`\<`PrepareTransactionRequestParameters`\>) \| `undefined`, `object`\]; `rpcUrls`: \{ `default`: \{ `http`: readonly \[`"https://rpc.hyperliquid.xyz/evm"`\]; \}; \}; `serializers?`: `ChainSerializers`; `sourceId?`: `number`; `testnet?`: `boolean`; `verifyHash?`: (`client`, `parameters`) => `Promise`\<`VerifyHashActionReturnType`\>; \} \| \{ `blockExplorers`: \{ `default`: \{ `apiUrl`: `"https://api.basescan.org/api"`; `name`: `"Basescan"`; `url`: `"https://basescan.org"`; \}; \}; `blockTime`: `2000`; `contracts`: \{ `disputeGameFactory`: \{ `1`: \{ `address`: `"0x43edB88C4B80fDD2AdFF2412A7BebF9dF42cB40e"`; \}; \}; `gasPriceOracle`: \{ `address`: `"0x420000000000000000000000000000000000000F"`; \}; `l1Block`: \{ `address`: `"0x4200000000000000000000000000000000000015"`; \}; `l1StandardBridge`: \{ `1`: \{ `address`: `"0x3154Cf16ccdb4C6d922629664174b904d80F2C35"`; `blockCreated`: `17482143`; \}; \}; `l2CrossDomainMessenger`: \{ `address`: `"0x4200000000000000000000000000000000000007"`; \}; `l2Erc721Bridge`: \{ `address`: `"0x4200000000000000000000000000000000000014"`; \}; `l2OutputOracle`: \{ `1`: \{ `address`: `"0x56315b90c40730925ec5485cf004d835058518A0"`; \}; \}; `l2StandardBridge`: \{ `address`: `"0x4200000000000000000000000000000000000010"`; \}; `l2ToL1MessagePasser`: \{ `address`: `"0x4200000000000000000000000000000000000016"`; \}; `multicall3`: \{ `address`: `"0xca11bde05977b3631167028862be2a173976ca11"`; `blockCreated`: `5022`; \}; `portal`: \{ `1`: \{ `address`: `"0x49048044D57e1C92A77f79988d21Fa8fAF74E97e"`; `blockCreated`: `17482143`; \}; \}; \}; `custom?`: `Record`\<`string`, `unknown`\>; `ensTlds?`: readonly `string`[]; `experimental_preconfirmationTime?`: `number`; `extendSchema?`: `Record`\<`string`, `unknown`\>; `fees?`: `ChainFees`; `formatters`: \{ `block`: \{ `exclude`: \[\] \| `undefined`; `format`: (`args`, `action?`) => `object` & `object`; `type`: `"block"`; \}; `transaction`: \{ `exclude`: \[\] \| `undefined`; `format`: (`args`, `action?`) => \{ `blockHash`: ... \| ...; `blockNumber`: ... \| ...; `from`: `Address`; `gas`: `bigint`; `gasPrice?`: ... \| ...; `hash`: `Hash`; `input`: `Hex`; `isSystemTx?`: `boolean`; `maxFeePerBlobGas?`: ... \| ...; `maxFeePerGas`: `bigint`; `maxPriorityFeePerGas`: `bigint`; `mint?`: ... \| ... \| ...; `nonce`: `number`; `r`: `Hex`; `s`: `Hex`; `sourceHash`: `Hex`; `to`: ... \| ...; `transactionIndex`: ... \| ...; `type`: `"deposit"`; `typeHex`: ... \| ...; `v`: `bigint`; `value`: `bigint`; `yParity`: `number`; \} \| \{ `accessList?`: ... \| ...; `authorizationList?`: ... \| ...; `blobVersionedHashes?`: ... \| ...; `blockHash`: ... \| ...; `blockNumber`: ... \| ...; `chainId?`: ... \| ...; `from`: `Address`; `gas`: `bigint`; `gasPrice`: `bigint`; `hash`: `Hash`; `input`: `Hex`; `isSystemTx?`: ... \| ...; `maxFeePerBlobGas?`: ... \| ...; `maxFeePerGas?`: ... \| ...; `maxPriorityFeePerGas?`: ... \| ...; `mint?`: ... \| ...; `nonce`: `number`; `r`: `Hex`; `s`: `Hex`; `sourceHash?`: ... \| ...; `to`: ... \| ...; `transactionIndex`: ... \| ...; `type`: `"legacy"`; `typeHex`: ... \| ...; `v`: `bigint`; `value`: `bigint`; `yParity?`: ... \| ...; \} \| \{ `accessList`: `AccessList`; `authorizationList?`: ... \| ...; `blobVersionedHashes?`: ... \| ...; `blockHash`: ... \| ...; `blockNumber`: ... \| ...; `chainId`: `number`; `from`: `Address`; `gas`: `bigint`; `gasPrice`: `bigint`; `hash`: `Hash`; `input`: `Hex`; `isSystemTx?`: ... \| ...; `maxFeePerBlobGas?`: ... \| ...; `maxFeePerGas?`: ... \| ...; `maxPriorityFeePerGas?`: ... \| ...; `mint?`: ... \| ...; `nonce`: `number`; `r`: `Hex`; `s`: `Hex`; `sourceHash?`: ... \| ...; `to`: ... \| ...; `transactionIndex`: ... \| ...; `type`: `"eip2930"`; `typeHex`: ... \| ...; `v`: `bigint`; `value`: `bigint`; `yParity`: `number`; \} \| \{ `accessList`: `AccessList`; `authorizationList?`: ... \| ...; `blobVersionedHashes?`: ... \| ...; `blockHash`: ... \| ...; `blockNumber`: ... \| ...; `chainId`: `number`; `from`: `Address`; `gas`: `bigint`; `gasPrice?`: ... \| ...; `hash`: `Hash`; `input`: `Hex`; `isSystemTx?`: ... \| ...; `maxFeePerBlobGas?`: ... \| ...; `maxFeePerGas`: `bigint`; `maxPriorityFeePerGas`: `bigint`; `mint?`: ... \| ...; `nonce`: `number`; `r`: `Hex`; `s`: `Hex`; `sourceHash?`: ... \| ...; `to`: ... \| ...; `transactionIndex`: ... \| ...; `type`: `"eip1559"`; `typeHex`: ... \| ...; `v`: `bigint`; `value`: `bigint`; `yParity`: `number`; \} \| \{ `accessList`: `AccessList`; `authorizationList?`: ... \| ...; `blobVersionedHashes`: readonly ...; `blockHash`: ... \| ...; `blockNumber`: ... \| ...; `chainId`: `number`; `from`: `Address`; `gas`: `bigint`; `gasPrice?`: ... \| ...; `hash`: `Hash`; `input`: `Hex`; `isSystemTx?`: ... \| ...; `maxFeePerBlobGas`: `bigint`; `maxFeePerGas`: `bigint`; `maxPriorityFeePerGas`: `bigint`; `mint?`: ... \| ...; `nonce`: `number`; `r`: `Hex`; `s`: `Hex`; `sourceHash?`: ... \| ...; `to`: ... \| ...; `transactionIndex`: ... \| ...; `type`: `"eip4844"`; `typeHex`: ... \| ...; `v`: `bigint`; `value`: `bigint`; `yParity`: `number`; \} \| \{ `accessList`: `AccessList`; `authorizationList`: `SignedAuthorizationList`; `blobVersionedHashes?`: ... \| ...; `blockHash`: ... \| ...; `blockNumber`: ... \| ...; `chainId`: `number`; `from`: `Address`; `gas`: `bigint`; `gasPrice?`: ... \| ...; `hash`: `Hash`; `input`: `Hex`; `isSystemTx?`: ... \| ...; `maxFeePerBlobGas?`: ... \| ...; `maxFeePerGas`: `bigint`; `maxPriorityFeePerGas`: `bigint`; `mint?`: ... \| ...; `nonce`: `number`; `r`: `Hex`; `s`: `Hex`; `sourceHash?`: ... \| ...; `to`: ... \| ...; `transactionIndex`: ... \| ...; `type`: `"eip7702"`; `typeHex`: ... \| ...; `v`: `bigint`; `value`: `bigint`; `yParity`: `number`; \} & `object`; `type`: `"transaction"`; \}; `transactionReceipt`: \{ `exclude`: \[\] \| `undefined`; `format`: (`args`, `action?`) => `object` & `object`; `type`: `"transactionReceipt"`; \}; \}; `id`: `8453`; `name`: `"Base"`; `nativeCurrency`: \{ `decimals`: `18`; `name`: `"Ether"`; `symbol`: `"ETH"`; \}; `prepareTransactionRequest?`: ((`args`, `options`) => `Promise`\<`PrepareTransactionRequestParameters`\>) \| \[((`args`, `options`) => `Promise`\<`PrepareTransactionRequestParameters`\>) \| `undefined`, `object`\]; `rpcUrls`: \{ `default`: \{ `http`: readonly \[`"https://mainnet.base.org"`\]; \}; \}; `serializers`: \{ `transaction`: `serializeTransactionOpStack`; \}; `sourceId`: `1`; `testnet?`: `boolean`; `verifyHash?`: (`client`, `parameters`) => `Promise`\<`VerifyHashActionReturnType`\>; \} \| \{ `blockExplorers`: \{ `default`: \{ `apiUrl`: `"https://api.etherscan.io/api"`; `name`: `"Etherscan"`; `url`: `"https://etherscan.io"`; \}; \}; `blockTime`: `12000`; `contracts`: \{ `ensUniversalResolver`: \{ `address`: `"0xeeeeeeee14d718c2b47d9923deab1335e144eeee"`; `blockCreated`: `23085558`; \}; `multicall3`: \{ `address`: `"0xca11bde05977b3631167028862be2a173976ca11"`; `blockCreated`: `14353601`; \}; \}; `custom?`: `Record`\<`string`, `unknown`\>; `ensTlds?`: readonly `string`[]; `experimental_preconfirmationTime?`: `number`; `extendSchema?`: `Record`\<`string`, `unknown`\>; `fees?`: `ChainFees`; `formatters?`: `undefined`; `id`: `1`; `name`: `"Ethereum"`; `nativeCurrency`: \{ `decimals`: `18`; `name`: `"Ether"`; `symbol`: `"ETH"`; \}; `prepareTransactionRequest?`: ((`args`, `options`) => `Promise`\<`PrepareTransactionRequestParameters`\>) \| \[((`args`, `options`) => `Promise`\<`PrepareTransactionRequestParameters`\>) \| `undefined`, `object`\]; `rpcUrls`: \{ `default`: \{ `http`: readonly \[`"https://eth.merkle.io"`\]; \}; \}; `serializers?`: `ChainSerializers`; `sourceId?`: `number`; `testnet?`: `boolean`; `verifyHash?`: (`client`, `parameters`) => `Promise`\<`VerifyHashActionReturnType`\>; \} \| \{ `blockExplorers`: \{ `default`: \{ `apiUrl`: `"https://api.arbiscan.io/api"`; `name`: `"Arbiscan"`; `url`: `"https://arbiscan.io"`; \}; \}; `blockTime`: `250`; `contracts`: \{ `multicall3`: \{ `address`: `"0xca11bde05977b3631167028862be2a173976ca11"`; `blockCreated`: `7654707`; \}; \}; `custom?`: `Record`\<`string`, `unknown`\>; `ensTlds?`: readonly `string`[]; `experimental_preconfirmationTime?`: `number`; `extendSchema?`: `Record`\<`string`, `unknown`\>; `fees?`: `ChainFees`; `formatters?`: `undefined`; `id`: `42161`; `name`: `"Arbitrum One"`; `nativeCurrency`: \{ `decimals`: `18`; `name`: `"Ether"`; `symbol`: `"ETH"`; \}; `prepareTransactionRequest?`: ((`args`, `options`) => `Promise`\<`PrepareTransactionRequestParameters`\>) \| \[((`args`, `options`) => `Promise`\<`PrepareTransactionRequestParameters`\>) \| `undefined`, `object`\]; `rpcUrls`: \{ `default`: \{ `http`: readonly \[`"https://arb1.arbitrum.io/rpc"`\]; \}; \}; `serializers?`: `ChainSerializers`; `sourceId?`: `number`; `testnet?`: `boolean`; `verifyHash?`: (`client`, `parameters`) => `Promise`\<`VerifyHashActionReturnType`\>; \} \| \{ `blockExplorers`: \{ `default`: \{ `name`: `"Sonic Explorer"`; `url`: `"https://sonicscan.org"`; \}; \}; `blockTime`: `630`; `contracts`: \{ `multicall3`: \{ `address`: `"0xca11bde05977b3631167028862be2a173976ca11"`; `blockCreated`: `60`; \}; \}; `custom?`: `Record`\<`string`, `unknown`\>; `ensTlds?`: readonly `string`[]; `experimental_preconfirmationTime?`: `number`; `extendSchema?`: `Record`\<`string`, `unknown`\>; `fees?`: `ChainFees`; `formatters?`: `undefined`; `id`: `146`; `name`: `"Sonic"`; `nativeCurrency`: \{ `decimals`: `18`; `name`: `"Sonic"`; `symbol`: `"S"`; \}; `prepareTransactionRequest?`: ((`args`, `options`) => `Promise`\<`PrepareTransactionRequestParameters`\>) \| \[((`args`, `options`) => `Promise`\<`PrepareTransactionRequestParameters`\>) \| `undefined`, `object`\]; `rpcUrls`: \{ `default`: \{ `http`: readonly \[`"https://rpc.soniclabs.com"`\]; \}; \}; `serializers?`: `ChainSerializers`; `sourceId?`: `number`; `testnet`: `false`; `verifyHash?`: (`client`, `parameters`) => `Promise`\<`VerifyHashActionReturnType`\>; \}

#### Parameters

##### chainId

[`ChainId`](#chainid-2)

#### Returns

\{ `blockExplorers`: \{ `default`: \{ `apiUrl`: `"https://api.hyperevmscan.io/api"`; `name`: `"HyperEVMScan"`; `url`: `"https://hyperevmscan.io"`; \}; \}; `blockTime?`: `number`; `contracts`: \{ `multicall3`: \{ `address`: `"0xca11bde05977b3631167028862be2a173976ca11"`; `blockCreated`: `13051`; \}; \}; `custom?`: `Record`\<`string`, `unknown`\>; `ensTlds?`: readonly `string`[]; `experimental_preconfirmationTime?`: `number`; `extendSchema?`: `Record`\<`string`, `unknown`\>; `fees?`: `ChainFees`; `formatters?`: `undefined`; `id`: `999`; `name`: `"HyperEVM"`; `nativeCurrency`: \{ `decimals`: `18`; `name`: `"HYPE"`; `symbol`: `"HYPE"`; \}; `prepareTransactionRequest?`: ((`args`, `options`) => `Promise`\<`PrepareTransactionRequestParameters`\>) \| \[((`args`, `options`) => `Promise`\<`PrepareTransactionRequestParameters`\>) \| `undefined`, `object`\]; `rpcUrls`: \{ `default`: \{ `http`: readonly \[`"https://rpc.hyperliquid.xyz/evm"`\]; \}; \}; `serializers?`: `ChainSerializers`; `sourceId?`: `number`; `testnet?`: `boolean`; `verifyHash?`: (`client`, `parameters`) => `Promise`\<`VerifyHashActionReturnType`\>; \} \| \{ `blockExplorers`: \{ `default`: \{ `apiUrl`: `"https://api.basescan.org/api"`; `name`: `"Basescan"`; `url`: `"https://basescan.org"`; \}; \}; `blockTime`: `2000`; `contracts`: \{ `disputeGameFactory`: \{ `1`: \{ `address`: `"0x43edB88C4B80fDD2AdFF2412A7BebF9dF42cB40e"`; \}; \}; `gasPriceOracle`: \{ `address`: `"0x420000000000000000000000000000000000000F"`; \}; `l1Block`: \{ `address`: `"0x4200000000000000000000000000000000000015"`; \}; `l1StandardBridge`: \{ `1`: \{ `address`: `"0x3154Cf16ccdb4C6d922629664174b904d80F2C35"`; `blockCreated`: `17482143`; \}; \}; `l2CrossDomainMessenger`: \{ `address`: `"0x4200000000000000000000000000000000000007"`; \}; `l2Erc721Bridge`: \{ `address`: `"0x4200000000000000000000000000000000000014"`; \}; `l2OutputOracle`: \{ `1`: \{ `address`: `"0x56315b90c40730925ec5485cf004d835058518A0"`; \}; \}; `l2StandardBridge`: \{ `address`: `"0x4200000000000000000000000000000000000010"`; \}; `l2ToL1MessagePasser`: \{ `address`: `"0x4200000000000000000000000000000000000016"`; \}; `multicall3`: \{ `address`: `"0xca11bde05977b3631167028862be2a173976ca11"`; `blockCreated`: `5022`; \}; `portal`: \{ `1`: \{ `address`: `"0x49048044D57e1C92A77f79988d21Fa8fAF74E97e"`; `blockCreated`: `17482143`; \}; \}; \}; `custom?`: `Record`\<`string`, `unknown`\>; `ensTlds?`: readonly `string`[]; `experimental_preconfirmationTime?`: `number`; `extendSchema?`: `Record`\<`string`, `unknown`\>; `fees?`: `ChainFees`; `formatters`: \{ `block`: \{ `exclude`: \[\] \| `undefined`; `format`: (`args`, `action?`) => `object` & `object`; `type`: `"block"`; \}; `transaction`: \{ `exclude`: \[\] \| `undefined`; `format`: (`args`, `action?`) => \{ `blockHash`: ... \| ...; `blockNumber`: ... \| ...; `from`: `Address`; `gas`: `bigint`; `gasPrice?`: ... \| ...; `hash`: `Hash`; `input`: `Hex`; `isSystemTx?`: `boolean`; `maxFeePerBlobGas?`: ... \| ...; `maxFeePerGas`: `bigint`; `maxPriorityFeePerGas`: `bigint`; `mint?`: ... \| ... \| ...; `nonce`: `number`; `r`: `Hex`; `s`: `Hex`; `sourceHash`: `Hex`; `to`: ... \| ...; `transactionIndex`: ... \| ...; `type`: `"deposit"`; `typeHex`: ... \| ...; `v`: `bigint`; `value`: `bigint`; `yParity`: `number`; \} \| \{ `accessList?`: ... \| ...; `authorizationList?`: ... \| ...; `blobVersionedHashes?`: ... \| ...; `blockHash`: ... \| ...; `blockNumber`: ... \| ...; `chainId?`: ... \| ...; `from`: `Address`; `gas`: `bigint`; `gasPrice`: `bigint`; `hash`: `Hash`; `input`: `Hex`; `isSystemTx?`: ... \| ...; `maxFeePerBlobGas?`: ... \| ...; `maxFeePerGas?`: ... \| ...; `maxPriorityFeePerGas?`: ... \| ...; `mint?`: ... \| ...; `nonce`: `number`; `r`: `Hex`; `s`: `Hex`; `sourceHash?`: ... \| ...; `to`: ... \| ...; `transactionIndex`: ... \| ...; `type`: `"legacy"`; `typeHex`: ... \| ...; `v`: `bigint`; `value`: `bigint`; `yParity?`: ... \| ...; \} \| \{ `accessList`: `AccessList`; `authorizationList?`: ... \| ...; `blobVersionedHashes?`: ... \| ...; `blockHash`: ... \| ...; `blockNumber`: ... \| ...; `chainId`: `number`; `from`: `Address`; `gas`: `bigint`; `gasPrice`: `bigint`; `hash`: `Hash`; `input`: `Hex`; `isSystemTx?`: ... \| ...; `maxFeePerBlobGas?`: ... \| ...; `maxFeePerGas?`: ... \| ...; `maxPriorityFeePerGas?`: ... \| ...; `mint?`: ... \| ...; `nonce`: `number`; `r`: `Hex`; `s`: `Hex`; `sourceHash?`: ... \| ...; `to`: ... \| ...; `transactionIndex`: ... \| ...; `type`: `"eip2930"`; `typeHex`: ... \| ...; `v`: `bigint`; `value`: `bigint`; `yParity`: `number`; \} \| \{ `accessList`: `AccessList`; `authorizationList?`: ... \| ...; `blobVersionedHashes?`: ... \| ...; `blockHash`: ... \| ...; `blockNumber`: ... \| ...; `chainId`: `number`; `from`: `Address`; `gas`: `bigint`; `gasPrice?`: ... \| ...; `hash`: `Hash`; `input`: `Hex`; `isSystemTx?`: ... \| ...; `maxFeePerBlobGas?`: ... \| ...; `maxFeePerGas`: `bigint`; `maxPriorityFeePerGas`: `bigint`; `mint?`: ... \| ...; `nonce`: `number`; `r`: `Hex`; `s`: `Hex`; `sourceHash?`: ... \| ...; `to`: ... \| ...; `transactionIndex`: ... \| ...; `type`: `"eip1559"`; `typeHex`: ... \| ...; `v`: `bigint`; `value`: `bigint`; `yParity`: `number`; \} \| \{ `accessList`: `AccessList`; `authorizationList?`: ... \| ...; `blobVersionedHashes`: readonly ...; `blockHash`: ... \| ...; `blockNumber`: ... \| ...; `chainId`: `number`; `from`: `Address`; `gas`: `bigint`; `gasPrice?`: ... \| ...; `hash`: `Hash`; `input`: `Hex`; `isSystemTx?`: ... \| ...; `maxFeePerBlobGas`: `bigint`; `maxFeePerGas`: `bigint`; `maxPriorityFeePerGas`: `bigint`; `mint?`: ... \| ...; `nonce`: `number`; `r`: `Hex`; `s`: `Hex`; `sourceHash?`: ... \| ...; `to`: ... \| ...; `transactionIndex`: ... \| ...; `type`: `"eip4844"`; `typeHex`: ... \| ...; `v`: `bigint`; `value`: `bigint`; `yParity`: `number`; \} \| \{ `accessList`: `AccessList`; `authorizationList`: `SignedAuthorizationList`; `blobVersionedHashes?`: ... \| ...; `blockHash`: ... \| ...; `blockNumber`: ... \| ...; `chainId`: `number`; `from`: `Address`; `gas`: `bigint`; `gasPrice?`: ... \| ...; `hash`: `Hash`; `input`: `Hex`; `isSystemTx?`: ... \| ...; `maxFeePerBlobGas?`: ... \| ...; `maxFeePerGas`: `bigint`; `maxPriorityFeePerGas`: `bigint`; `mint?`: ... \| ...; `nonce`: `number`; `r`: `Hex`; `s`: `Hex`; `sourceHash?`: ... \| ...; `to`: ... \| ...; `transactionIndex`: ... \| ...; `type`: `"eip7702"`; `typeHex`: ... \| ...; `v`: `bigint`; `value`: `bigint`; `yParity`: `number`; \} & `object`; `type`: `"transaction"`; \}; `transactionReceipt`: \{ `exclude`: \[\] \| `undefined`; `format`: (`args`, `action?`) => `object` & `object`; `type`: `"transactionReceipt"`; \}; \}; `id`: `8453`; `name`: `"Base"`; `nativeCurrency`: \{ `decimals`: `18`; `name`: `"Ether"`; `symbol`: `"ETH"`; \}; `prepareTransactionRequest?`: ((`args`, `options`) => `Promise`\<`PrepareTransactionRequestParameters`\>) \| \[((`args`, `options`) => `Promise`\<`PrepareTransactionRequestParameters`\>) \| `undefined`, `object`\]; `rpcUrls`: \{ `default`: \{ `http`: readonly \[`"https://mainnet.base.org"`\]; \}; \}; `serializers`: \{ `transaction`: `serializeTransactionOpStack`; \}; `sourceId`: `1`; `testnet?`: `boolean`; `verifyHash?`: (`client`, `parameters`) => `Promise`\<`VerifyHashActionReturnType`\>; \} \| \{ `blockExplorers`: \{ `default`: \{ `apiUrl`: `"https://api.etherscan.io/api"`; `name`: `"Etherscan"`; `url`: `"https://etherscan.io"`; \}; \}; `blockTime`: `12000`; `contracts`: \{ `ensUniversalResolver`: \{ `address`: `"0xeeeeeeee14d718c2b47d9923deab1335e144eeee"`; `blockCreated`: `23085558`; \}; `multicall3`: \{ `address`: `"0xca11bde05977b3631167028862be2a173976ca11"`; `blockCreated`: `14353601`; \}; \}; `custom?`: `Record`\<`string`, `unknown`\>; `ensTlds?`: readonly `string`[]; `experimental_preconfirmationTime?`: `number`; `extendSchema?`: `Record`\<`string`, `unknown`\>; `fees?`: `ChainFees`; `formatters?`: `undefined`; `id`: `1`; `name`: `"Ethereum"`; `nativeCurrency`: \{ `decimals`: `18`; `name`: `"Ether"`; `symbol`: `"ETH"`; \}; `prepareTransactionRequest?`: ((`args`, `options`) => `Promise`\<`PrepareTransactionRequestParameters`\>) \| \[((`args`, `options`) => `Promise`\<`PrepareTransactionRequestParameters`\>) \| `undefined`, `object`\]; `rpcUrls`: \{ `default`: \{ `http`: readonly \[`"https://eth.merkle.io"`\]; \}; \}; `serializers?`: `ChainSerializers`; `sourceId?`: `number`; `testnet?`: `boolean`; `verifyHash?`: (`client`, `parameters`) => `Promise`\<`VerifyHashActionReturnType`\>; \} \| \{ `blockExplorers`: \{ `default`: \{ `apiUrl`: `"https://api.arbiscan.io/api"`; `name`: `"Arbiscan"`; `url`: `"https://arbiscan.io"`; \}; \}; `blockTime`: `250`; `contracts`: \{ `multicall3`: \{ `address`: `"0xca11bde05977b3631167028862be2a173976ca11"`; `blockCreated`: `7654707`; \}; \}; `custom?`: `Record`\<`string`, `unknown`\>; `ensTlds?`: readonly `string`[]; `experimental_preconfirmationTime?`: `number`; `extendSchema?`: `Record`\<`string`, `unknown`\>; `fees?`: `ChainFees`; `formatters?`: `undefined`; `id`: `42161`; `name`: `"Arbitrum One"`; `nativeCurrency`: \{ `decimals`: `18`; `name`: `"Ether"`; `symbol`: `"ETH"`; \}; `prepareTransactionRequest?`: ((`args`, `options`) => `Promise`\<`PrepareTransactionRequestParameters`\>) \| \[((`args`, `options`) => `Promise`\<`PrepareTransactionRequestParameters`\>) \| `undefined`, `object`\]; `rpcUrls`: \{ `default`: \{ `http`: readonly \[`"https://arb1.arbitrum.io/rpc"`\]; \}; \}; `serializers?`: `ChainSerializers`; `sourceId?`: `number`; `testnet?`: `boolean`; `verifyHash?`: (`client`, `parameters`) => `Promise`\<`VerifyHashActionReturnType`\>; \} \| \{ `blockExplorers`: \{ `default`: \{ `name`: `"Sonic Explorer"`; `url`: `"https://sonicscan.org"`; \}; \}; `blockTime`: `630`; `contracts`: \{ `multicall3`: \{ `address`: `"0xca11bde05977b3631167028862be2a173976ca11"`; `blockCreated`: `60`; \}; \}; `custom?`: `Record`\<`string`, `unknown`\>; `ensTlds?`: readonly `string`[]; `experimental_preconfirmationTime?`: `number`; `extendSchema?`: `Record`\<`string`, `unknown`\>; `fees?`: `ChainFees`; `formatters?`: `undefined`; `id`: `146`; `name`: `"Sonic"`; `nativeCurrency`: \{ `decimals`: `18`; `name`: `"Sonic"`; `symbol`: `"S"`; \}; `prepareTransactionRequest?`: ((`args`, `options`) => `Promise`\<`PrepareTransactionRequestParameters`\>) \| \[((`args`, `options`) => `Promise`\<`PrepareTransactionRequestParameters`\>) \| `undefined`, `object`\]; `rpcUrls`: \{ `default`: \{ `http`: readonly \[`"https://rpc.soniclabs.com"`\]; \}; \}; `serializers?`: `ChainSerializers`; `sourceId?`: `number`; `testnet`: `false`; `verifyHash?`: (`client`, `parameters`) => `Promise`\<`VerifyHashActionReturnType`\>; \}

***

### GLOBAL\_ROLE\_HASHES

> `const` **GLOBAL\_ROLE\_HASHES**: `Record`\<[`GlobalRoles`](../common/src/README.md#globalroles), [`HexData`](#hexdata) \| `null`\>

GLOBAL_ROLE_HASHES
Mapping of global role names to their contract hashes
Note: These will be populated at runtime from contract calls

***

### HoldingDataSchema

> `const` **HoldingDataSchema**: `z.ZodObject`\<\{ `amount`: `z.ZodType`\<[`ITokenAmount`](#itokenamount), `z.ZodTypeDef`, [`ITokenAmount`](#itokenamount)\>; `fiatValue`: `z.ZodType`\<[`IFiatCurrencyAmount`](#ifiatcurrencyamount), `z.ZodTypeDef`, [`IFiatCurrencyAmount`](#ifiatcurrencyamount)\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `amount`: [`ITokenAmount`](#itokenamount); `fiatValue`: [`IFiatCurrencyAmount`](#ifiatcurrencyamount); \}, \{ `amount`: [`ITokenAmount`](#itokenamount); `fiatValue`: [`IFiatCurrencyAmount`](#ifiatcurrencyamount); \}\>

Zod schema for IHolding

***

### hyperliquid

> `const` **hyperliquid**: `object`

#### Type Declaration

##### blockExplorers

> **blockExplorers**: `object`

###### blockExplorers.default

> `readonly` **default**: `object`

###### blockExplorers.default.apiUrl

> `readonly` **apiUrl**: `"https://api.hyperevmscan.io/api"`

###### blockExplorers.default.name

> `readonly` **name**: `"HyperEVMScan"`

###### blockExplorers.default.url

> `readonly` **url**: `"https://hyperevmscan.io"`

##### blockTime?

> `optional` **blockTime?**: `number`

##### contracts

> **contracts**: `object`

###### contracts.multicall3

> `readonly` **multicall3**: `object`

###### contracts.multicall3.address

> `readonly` **address**: `"0xca11bde05977b3631167028862be2a173976ca11"`

###### contracts.multicall3.blockCreated

> `readonly` **blockCreated**: `13051`

##### custom?

> `optional` **custom?**: `Record`\<`string`, `unknown`\>

##### ensTlds?

> `optional` **ensTlds?**: readonly `string`[]

##### experimental\_preconfirmationTime?

> `optional` **experimental\_preconfirmationTime?**: `number`

##### extendSchema?

> `optional` **extendSchema?**: `Record`\<`string`, `unknown`\>

##### fees?

> `optional` **fees?**: `ChainFees`

##### formatters?

> `optional` **formatters?**: `undefined`

##### id

> **id**: `999`

##### name

> **name**: `"HyperEVM"`

##### nativeCurrency

> **nativeCurrency**: `object`

###### nativeCurrency.decimals

> `readonly` **decimals**: `18`

###### nativeCurrency.name

> `readonly` **name**: `"HYPE"`

###### nativeCurrency.symbol

> `readonly` **symbol**: `"HYPE"`

##### prepareTransactionRequest?

> `optional` **prepareTransactionRequest?**: ((`args`, `options`) => `Promise`\<`PrepareTransactionRequestParameters`\>) \| \[((`args`, `options`) => `Promise`\<`PrepareTransactionRequestParameters`\>) \| `undefined`, `object`\]

##### rpcUrls

> **rpcUrls**: `object`

###### rpcUrls.default

> `readonly` **default**: `object`

###### rpcUrls.default.http

> `readonly` **http**: readonly \[`"https://rpc.hyperliquid.xyz/evm"`\]

##### serializers?

> `optional` **serializers?**: `ChainSerializers`

##### sourceId?

> `optional` **sourceId?**: `number`

##### testnet?

> `optional` **testnet?**: `boolean`

##### verifyHash?

> `optional` **verifyHash?**: (`client`, `parameters`) => `Promise`\<`VerifyHashActionReturnType`\>

###### Parameters

###### client

`Client`

###### parameters

`VerifyHashActionParameters`

###### Returns

`Promise`\<`VerifyHashActionReturnType`\>

***

### isChainId

> `const` **isChainId**: (`maybeChainId`) => `maybeChainId is ChainId`

#### Parameters

##### maybeChainId

`unknown`

#### Returns

`maybeChainId is ChainId`

***

### isLegacyChainId

> `const` **isLegacyChainId**: (`maybeChainId`) => `maybeChainId is LegacyChainId`

#### Parameters

##### maybeChainId

`unknown`

#### Returns

`maybeChainId is LegacyChainId`

***

### LegacyChainIds

> `const` **LegacyChainIds**: `object`

#### Type Declaration

##### ArbitrumOne

> `readonly` **ArbitrumOne**: `42161`

##### Base

> `readonly` **Base**: `8453`

##### Mainnet

> `readonly` **Mainnet**: `1`

##### Optimism

> `readonly` **Optimism**: `10`

##### Sonic

> `readonly` **Sonic**: `146`

***

### LegacyChainIdSchema

> `const` **LegacyChainIdSchema**: `z.ZodUnion`\<\[`z.ZodLiteral`\<`1` \| `8453` \| `42161` \| `146` \| `10`\>, `z.ZodLiteral`\<`1` \| `8453` \| `42161` \| `146` \| `10`\>, ...z.ZodLiteral\<1 \| 8453 \| 42161 \| 146 \| 10\>\[\]\]\>

***

### LendingPoolDataSchema

> `const` **LendingPoolDataSchema**: `z.ZodObject`\<\{ `collateralToken`: `z.ZodType`\<[`IToken`](#itoken), `z.ZodTypeDef`, [`IToken`](#itoken)\>; `debtToken`: `z.ZodType`\<[`IToken`](#itoken), `z.ZodTypeDef`, [`IToken`](#itoken)\>; `id`: `z.ZodType`\<[`ILendingPoolId`](#ilendingpoolid-1), `z.ZodTypeDef`, [`ILendingPoolId`](#ilendingpoolid-1)\>; `type`: `z.ZodLiteral`\<`PoolType.Lending`\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `collateralToken`: [`IToken`](#itoken); `debtToken`: [`IToken`](#itoken); `id`: [`ILendingPoolId`](#ilendingpoolid-1); `type`: `PoolType.Lending`; \}, \{ `collateralToken`: [`IToken`](#itoken); `debtToken`: [`IToken`](#itoken); `id`: [`ILendingPoolId`](#ilendingpoolid-1); `type`: `PoolType.Lending`; \}\>

Zod schema for ILendingPool

***

### LendingPoolIdDataSchema

> `const` **LendingPoolIdDataSchema**: `z.ZodObject`\<\{ `protocol`: `z.ZodType`\<[`IProtocol`](#iprotocol), `z.ZodTypeDef`, [`IProtocol`](#iprotocol)\>; `type`: `z.ZodLiteral`\<`PoolType.Lending`\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `protocol`: [`IProtocol`](#iprotocol); `type`: `PoolType.Lending`; \}, \{ `protocol`: [`IProtocol`](#iprotocol); `type`: `PoolType.Lending`; \}\>

Zod schema for ILendingPoolId

***

### LendingPoolInfoDataSchema

> `const` **LendingPoolInfoDataSchema**: `z.ZodObject`\<\{ `collateral`: `z.ZodType`\<[`ICollateralInfo`](#icollateralinfo), `z.ZodTypeDef`, [`ICollateralInfo`](#icollateralinfo)\>; `debt`: `z.ZodType`\<[`IDebtInfo`](#idebtinfo), `z.ZodTypeDef`, [`IDebtInfo`](#idebtinfo)\>; `id`: `z.ZodType`\<[`ILendingPoolId`](#ilendingpoolid-1), `z.ZodTypeDef`, [`ILendingPoolId`](#ilendingpoolid-1)\>; `type`: `z.ZodLiteral`\<`PoolType.Lending`\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `collateral`: [`ICollateralInfo`](#icollateralinfo); `debt`: [`IDebtInfo`](#idebtinfo); `id`: [`ILendingPoolId`](#ilendingpoolid-1); `type`: `PoolType.Lending`; \}, \{ `collateral`: [`ICollateralInfo`](#icollateralinfo); `debt`: [`IDebtInfo`](#idebtinfo); `id`: [`ILendingPoolId`](#ilendingpoolid-1); `type`: `PoolType.Lending`; \}\>

Zod schema for ILendingPoolInfo

***

### LendingPositionDataSchema

> `const` **LendingPositionDataSchema**: `z.ZodObject`\<\{ `collateralAmount`: `z.ZodType`\<[`ITokenAmount`](#itokenamount), `z.ZodTypeDef`, [`ITokenAmount`](#itokenamount)\>; `debtAmount`: `z.ZodType`\<[`ITokenAmount`](#itokenamount), `z.ZodTypeDef`, [`ITokenAmount`](#itokenamount)\>; `id`: `z.ZodType`\<[`ILendingPositionId`](#ilendingpositionid-1), `z.ZodTypeDef`, [`ILendingPositionId`](#ilendingpositionid-1)\>; `pool`: `z.ZodType`\<[`ILendingPool`](#ilendingpool), `z.ZodTypeDef`, [`ILendingPool`](#ilendingpool)\>; `subtype`: `z.ZodNativeEnum`\<*typeof* [`LendingPositionType`](../common/src/README.md#lendingpositiontype)\>; `type`: `z.ZodLiteral`\<`PositionType.Lending`\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `collateralAmount`: [`ITokenAmount`](#itokenamount); `debtAmount`: [`ITokenAmount`](#itokenamount); `id`: [`ILendingPositionId`](#ilendingpositionid-1); `pool`: [`ILendingPool`](#ilendingpool); `subtype`: [`LendingPositionType`](../common/src/README.md#lendingpositiontype); `type`: `PositionType.Lending`; \}, \{ `collateralAmount`: [`ITokenAmount`](#itokenamount); `debtAmount`: [`ITokenAmount`](#itokenamount); `id`: [`ILendingPositionId`](#ilendingpositionid-1); `pool`: [`ILendingPool`](#ilendingpool); `subtype`: [`LendingPositionType`](../common/src/README.md#lendingpositiontype); `type`: `PositionType.Lending`; \}\>

Zod schema for ILendingPosition

***

### LendingPositionIdDataSchema

> `const` **LendingPositionIdDataSchema**: `z.ZodObject`\<\{ `id`: `z.ZodString`; `type`: `z.ZodLiteral`\<`PositionType.Lending`\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `id`: `string`; `type`: `PositionType.Lending`; \}, \{ `id`: `string`; `type`: `PositionType.Lending`; \}\>

Zod schema for ILendingPositionId

***

### LendingPositionTypeSchema

> `const` **LendingPositionTypeSchema**: `z.ZodNativeEnum`\<*typeof* [`LendingPositionType`](../common/src/README.md#lendingpositiontype)\>

Zod schema for LendingPositionType

***

### MAX\_UINT256\_STRING

> `const` **MAX\_UINT256\_STRING**: `string`

***

### NATIVE\_CURRENCY\_ADDRESS\_LOWERCASE

> `const` **NATIVE\_CURRENCY\_ADDRESS\_LOWERCASE**: [`AddressValue`](#addressvalue-1)

***

### OracleProviderTypeSchema

> `const` **OracleProviderTypeSchema**: `z.ZodNativeEnum`\<*typeof* [`OracleProviderType`](../common/src/README.md#oracleprovidertype)\>

Zod schema for OracleProviderType

***

### PercentageDataSchema

> `const` **PercentageDataSchema**: `z.ZodObject`\<\{ `value`: `z.ZodNumber`; \}, `"strip"`, `z.ZodTypeAny`, \{ `value`: `number`; \}, \{ `value`: `number`; \}\>

Zod schema for IPercentage

***

### PoolDataSchema

> `const` **PoolDataSchema**: `z.ZodObject`\<\{ `id`: `z.ZodType`\<[`IPoolId`](#ipoolid-1), `z.ZodTypeDef`, [`IPoolId`](#ipoolid-1)\>; `type`: `z.ZodNativeEnum`\<*typeof* [`PoolType`](../common/src/README.md#pooltype)\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `id`: [`IPoolId`](#ipoolid-1); `type`: [`PoolType`](../common/src/README.md#pooltype); \}, \{ `id`: [`IPoolId`](#ipoolid-1); `type`: [`PoolType`](../common/src/README.md#pooltype); \}\>

Zod schema for IPool

***

### PoolIdDataSchema

> `const` **PoolIdDataSchema**: `z.ZodObject`\<\{ `protocol`: `z.ZodType`\<[`IProtocol`](#iprotocol), `z.ZodTypeDef`, [`IProtocol`](#iprotocol)\>; `type`: `z.ZodNativeEnum`\<*typeof* [`PoolType`](../common/src/README.md#pooltype)\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `protocol`: [`IProtocol`](#iprotocol); `type`: [`PoolType`](../common/src/README.md#pooltype); \}, \{ `protocol`: [`IProtocol`](#iprotocol); `type`: [`PoolType`](../common/src/README.md#pooltype); \}\>

Zod schema for IPoolId

***

### PoolInfoDataSchema

> `const` **PoolInfoDataSchema**: `z.ZodObject`\<\{ `id`: `z.ZodObject`\<\{ `protocol`: `z.ZodType`\<[`IProtocol`](#iprotocol), `z.ZodTypeDef`, [`IProtocol`](#iprotocol)\>; `type`: `z.ZodNativeEnum`\<*typeof* [`PoolType`](../common/src/README.md#pooltype)\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `protocol`: [`IProtocol`](#iprotocol); `type`: [`PoolType`](../common/src/README.md#pooltype); \}, \{ `protocol`: [`IProtocol`](#iprotocol); `type`: [`PoolType`](../common/src/README.md#pooltype); \}\>; `type`: `z.ZodNativeEnum`\<*typeof* [`PoolType`](../common/src/README.md#pooltype)\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `id`: \{ `protocol`: [`IProtocol`](#iprotocol); `type`: [`PoolType`](../common/src/README.md#pooltype); \}; `type`: [`PoolType`](../common/src/README.md#pooltype); \}, \{ `id`: \{ `protocol`: [`IProtocol`](#iprotocol); `type`: [`PoolType`](../common/src/README.md#pooltype); \}; `type`: [`PoolType`](../common/src/README.md#pooltype); \}\>

Zod schema for IPoolInfo

***

### PoolTypeSchema

> `const` **PoolTypeSchema**: `z.ZodNativeEnum`\<*typeof* [`PoolType`](../common/src/README.md#pooltype)\>

Zod schema for PoolType

***

### PositionDataSchema

> `const` **PositionDataSchema**: `z.ZodObject`\<\{ `id`: `z.ZodType`\<[`IPositionId`](#ipositionid-1), `z.ZodTypeDef`, [`IPositionId`](#ipositionid-1)\>; `pool`: `z.ZodType`\<[`IPool`](#ipool), `z.ZodTypeDef`, [`IPool`](#ipool)\>; `type`: `z.ZodNativeEnum`\<*typeof* [`PositionType`](../common/src/README.md#positiontype)\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `id`: [`IPositionId`](#ipositionid-1); `pool`: [`IPool`](#ipool); `type`: [`PositionType`](../common/src/README.md#positiontype); \}, \{ `id`: [`IPositionId`](#ipositionid-1); `pool`: [`IPool`](#ipool); `type`: [`PositionType`](../common/src/README.md#positiontype); \}\>

Zod schema for IPosition

***

### PositionIdDataSchema

> `const` **PositionIdDataSchema**: `z.ZodObject`\<\{ `id`: `z.ZodString`; `type`: `z.ZodNativeEnum`\<*typeof* [`PositionType`](../common/src/README.md#positiontype)\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `id`: `string`; `type`: [`PositionType`](../common/src/README.md#positiontype); \}, \{ `id`: `string`; `type`: [`PositionType`](../common/src/README.md#positiontype); \}\>

Zod schema for IPositionId

***

### PositionsManagerDataSchema

> `const` **PositionsManagerDataSchema**: `z.ZodObject`\<\{ `address`: `z.ZodObject`\<\{ `type`: `z.ZodNativeEnum`\<[`AddressType`](../common/src/README.md#addresstype)\>; `value`: `z.ZodType`\<`` `0x${string}` ``, `z.ZodTypeDef`, `` `0x${string}` ``\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}, \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `address`: \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}; \}, \{ `address`: \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}; \}\>

Zod schema for IPositionsManager

***

### PositionTypeSchema

> `const` **PositionTypeSchema**: `z.ZodNativeEnum`\<*typeof* [`PositionType`](../common/src/README.md#positiontype)\>

Zod schema for PositionType

***

### PriceDataSchema

> `const` **PriceDataSchema**: `z.ZodObject`\<\{ `base`: `z.ZodUnion`\<\[`z.ZodObject`\<\{ `address`: `z.ZodObject`\<\{ `type`: `z.ZodNativeEnum`\<[`AddressType`](../common/src/README.md#addresstype)\>; `value`: `z.ZodType`\<`` `0x${string}` ``, `z.ZodTypeDef`, `` `0x${string}` ``\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}, \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}\>; `chainInfo`: `z.ZodObject`\<\{ `chainId`: `z.ZodUnion`\<\[`z.ZodUnion`\<...\>, `z.ZodUnion`\<...\>\]\>; `name`: `z.ZodString`; \}, `"strip"`, `z.ZodTypeAny`, \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}, \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}\>; `decimals`: `z.ZodNumber`; `logoURI`: `z.ZodOptional`\<`z.ZodNullable`\<`z.ZodString`\>\>; `name`: `z.ZodString`; `symbol`: `z.ZodString`; \}, `"strip"`, `z.ZodTypeAny`, \{ `address`: \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}; `chainInfo`: \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}; `decimals`: `number`; `logoURI?`: `string` \| `null`; `name`: `string`; `symbol`: `string`; \}, \{ `address`: \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}; `chainInfo`: \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}; `decimals`: `number`; `logoURI?`: `string` \| `null`; `name`: `string`; `symbol`: `string`; \}\>, `z.ZodNativeEnum`\<[`FiatCurrency`](../common/src/README.md#fiatcurrency)\>\]\>; `quote`: `z.ZodUnion`\<\[`z.ZodObject`\<\{ `address`: `z.ZodObject`\<\{ `type`: `z.ZodNativeEnum`\<[`AddressType`](../common/src/README.md#addresstype)\>; `value`: `z.ZodType`\<`` `0x${string}` ``, `z.ZodTypeDef`, `` `0x${string}` ``\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}, \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}\>; `chainInfo`: `z.ZodObject`\<\{ `chainId`: `z.ZodUnion`\<\[`z.ZodUnion`\<...\>, `z.ZodUnion`\<...\>\]\>; `name`: `z.ZodString`; \}, `"strip"`, `z.ZodTypeAny`, \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}, \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}\>; `decimals`: `z.ZodNumber`; `logoURI`: `z.ZodOptional`\<`z.ZodNullable`\<`z.ZodString`\>\>; `name`: `z.ZodString`; `symbol`: `z.ZodString`; \}, `"strip"`, `z.ZodTypeAny`, \{ `address`: \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}; `chainInfo`: \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}; `decimals`: `number`; `logoURI?`: `string` \| `null`; `name`: `string`; `symbol`: `string`; \}, \{ `address`: \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}; `chainInfo`: \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}; `decimals`: `number`; `logoURI?`: `string` \| `null`; `name`: `string`; `symbol`: `string`; \}\>, `z.ZodNativeEnum`\<[`FiatCurrency`](../common/src/README.md#fiatcurrency)\>\]\>; `value`: `z.ZodString`; \}, `"strip"`, `z.ZodTypeAny`, \{ `base`: [`FiatCurrency`](../common/src/README.md#fiatcurrency) \| \{ `address`: \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}; `chainInfo`: \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}; `decimals`: `number`; `logoURI?`: `string` \| `null`; `name`: `string`; `symbol`: `string`; \}; `quote`: [`FiatCurrency`](../common/src/README.md#fiatcurrency) \| \{ `address`: \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}; `chainInfo`: \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}; `decimals`: `number`; `logoURI?`: `string` \| `null`; `name`: `string`; `symbol`: `string`; \}; `value`: `string`; \}, \{ `base`: [`FiatCurrency`](../common/src/README.md#fiatcurrency) \| \{ `address`: \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}; `chainInfo`: \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}; `decimals`: `number`; `logoURI?`: `string` \| `null`; `name`: `string`; `symbol`: `string`; \}; `quote`: [`FiatCurrency`](../common/src/README.md#fiatcurrency) \| \{ `address`: \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}; `chainInfo`: \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}; `decimals`: `number`; `logoURI?`: `string` \| `null`; `name`: `string`; `symbol`: `string`; \}; `value`: `string`; \}\>

Zod schema for IPrice

***

### ProtocolDataSchema

> `const` **ProtocolDataSchema**: `z.ZodObject`\<\{ `chainInfo`: `z.ZodType`\<[`IChainInfo`](#ichaininfo), `z.ZodTypeDef`, [`IChainInfo`](#ichaininfo)\>; `name`: `z.ZodNativeEnum`\<*typeof* [`ProtocolName`](../common/src/README.md#protocolname)\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `chainInfo`: [`IChainInfo`](#ichaininfo); `name`: [`ProtocolName`](../common/src/README.md#protocolname); \}, \{ `chainInfo`: [`IChainInfo`](#ichaininfo); `name`: [`ProtocolName`](../common/src/README.md#protocolname); \}\>

Zod schema for IProtocol

***

### ProtocolNameSchema

> `const` **ProtocolNameSchema**: `z.ZodNativeEnum`\<*typeof* [`ProtocolName`](../common/src/README.md#protocolname)\>

Zod schema for ProtocolName

***

### RebalanceDataSchema

> `const` **RebalanceDataSchema**: `z.ZodObject`\<\{ `amount`: `z.ZodObject`\<\{ `amount`: `z.ZodString`; `token`: `z.ZodType`\<[`IToken`](#itoken), `z.ZodTypeDef`, [`IToken`](#itoken)\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `amount`: `string`; `token`: [`IToken`](#itoken); \}, \{ `amount`: `string`; `token`: [`IToken`](#itoken); \}\>; `fromArk`: `z.ZodObject`\<\{ `type`: `z.ZodNativeEnum`\<[`AddressType`](../common/src/README.md#addresstype)\>; `value`: `z.ZodType`\<`` `0x${string}` ``, `z.ZodTypeDef`, `` `0x${string}` ``\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}, \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}\>; `toArk`: `z.ZodObject`\<\{ `type`: `z.ZodNativeEnum`\<[`AddressType`](../common/src/README.md#addresstype)\>; `value`: `z.ZodType`\<`` `0x${string}` ``, `z.ZodTypeDef`, `` `0x${string}` ``\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}, \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `amount`: \{ `amount`: `string`; `token`: [`IToken`](#itoken); \}; `fromArk`: \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}; `toArk`: \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}; \}, \{ `amount`: \{ `amount`: `string`; `token`: [`IToken`](#itoken); \}; `fromArk`: \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}; `toArk`: \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}; \}\>

Zod schema for IRebalanceData

***

### RiskRatioDataSchema

> `const` **RiskRatioDataSchema**: `z.ZodObject`\<\{ `type`: `z.ZodNativeEnum`\<*typeof* [`RiskRatioType`](#riskratiotype)\>; `value`: `z.ZodUnion`\<\[`z.ZodObject`\<\{ `value`: `z.ZodNumber`; \}, `"strip"`, `z.ZodTypeAny`, \{ `value`: `number`; \}, \{ `value`: `number`; \}\>, `z.ZodNumber`\]\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `type`: [`RiskRatioType`](#riskratiotype); `value`: `number` \| \{ `value`: `number`; \}; \}, \{ `type`: [`RiskRatioType`](#riskratiotype); `value`: `number` \| \{ `value`: `number`; \}; \}\>

Zod schema for IRiskRatioData

***

### SDKErrorDataSchema

> `const` **SDKErrorDataSchema**: `z.ZodObject`\<\{ `message`: `z.ZodString`; `reason`: `z.ZodString`; `type`: `z.ZodNativeEnum`\<*typeof* [`SDKErrorType`](../common/src/README.md#sdkerrortype)\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `message`: `string`; `reason`: `string`; `type`: [`SDKErrorType`](../common/src/README.md#sdkerrortype); \}, \{ `message`: `string`; `reason`: `string`; `type`: [`SDKErrorType`](../common/src/README.md#sdkerrortype); \}\>

Zod schema for ISDKError

***

### SimulationSchema

> `const` **SimulationSchema**: `z.ZodObject`\<\{ `balanceChanges`: `z.ZodArray`\<`z.ZodObject`\<\{ `amount`: `z.ZodType`\<[`ITokenAmount`](#itokenamount), `z.ZodTypeDef`, [`ITokenAmount`](#itokenamount)\>; `fiatValue`: `z.ZodType`\<[`IFiatCurrencyAmount`](#ifiatcurrencyamount), `z.ZodTypeDef`, [`IFiatCurrencyAmount`](#ifiatcurrencyamount)\>; `token`: `z.ZodType`\<[`IToken`](#itoken), `z.ZodTypeDef`, [`IToken`](#itoken)\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `amount`: [`ITokenAmount`](#itokenamount); `fiatValue`: [`IFiatCurrencyAmount`](#ifiatcurrencyamount); `token`: [`IToken`](#itoken); \}, \{ `amount`: [`ITokenAmount`](#itokenamount); `fiatValue`: [`IFiatCurrencyAmount`](#ifiatcurrencyamount); `token`: [`IToken`](#itoken); \}\>, `"many"`\>; `gasEstimations`: `z.ZodArray`\<`z.ZodObject`\<\{ `gasFiatValue`: `z.ZodType`\<[`IFiatCurrencyAmount`](#ifiatcurrencyamount), `z.ZodTypeDef`, [`IFiatCurrencyAmount`](#ifiatcurrencyamount)\>; `gasTokenAmount`: `z.ZodType`\<[`ITokenAmount`](#itokenamount), `z.ZodTypeDef`, [`ITokenAmount`](#itokenamount)\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `gasFiatValue`: [`IFiatCurrencyAmount`](#ifiatcurrencyamount); `gasTokenAmount`: [`ITokenAmount`](#itokenamount); \}, \{ `gasFiatValue`: [`IFiatCurrencyAmount`](#ifiatcurrencyamount); `gasTokenAmount`: [`ITokenAmount`](#itokenamount); \}\>, `"many"`\>; `steps`: `z.ZodArray`\<`z.ZodAny`, `"many"`\>; `type`: `z.ZodNativeEnum`\<*typeof* [`SimulationType`](../common/src/README.md#simulationtype)\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `balanceChanges`: `object`[]; `gasEstimations`: `object`[]; `steps`: `any`[]; `type`: [`SimulationType`](../common/src/README.md#simulationtype); \}, \{ `balanceChanges`: `object`[]; `gasEstimations`: `object`[]; `steps`: `any`[]; `type`: [`SimulationType`](../common/src/README.md#simulationtype); \}\>

Zod schema for ISimulation

***

### SpotPriceInfoDataSchema

> `const` **SpotPriceInfoDataSchema**: `z.ZodObject`\<\{ `price`: `z.ZodObject`\<\{ `base`: `z.ZodUnion`\<\[`z.ZodObject`\<\{ `address`: `z.ZodObject`\<\{ `type`: `z.ZodNativeEnum`\<...\>; `value`: `z.ZodType`\<..., ..., ...\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${(...)}` ``; \}, \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${(...)}` ``; \}\>; `chainInfo`: `z.ZodObject`\<\{ `chainId`: `z.ZodUnion`\<...\>; `name`: `z.ZodString`; \}, `"strip"`, `z.ZodTypeAny`, \{ `chainId`: ... \| ... \| ... \| ... \| ... \| ...; `name`: `string`; \}, \{ `chainId`: ... \| ... \| ... \| ... \| ... \| ...; `name`: `string`; \}\>; `decimals`: `z.ZodNumber`; `logoURI`: `z.ZodOptional`\<`z.ZodNullable`\<`z.ZodString`\>\>; `name`: `z.ZodString`; `symbol`: `z.ZodString`; \}, `"strip"`, `z.ZodTypeAny`, \{ `address`: \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}; `chainInfo`: \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}; `decimals`: `number`; `logoURI?`: `string` \| `null`; `name`: `string`; `symbol`: `string`; \}, \{ `address`: \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}; `chainInfo`: \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}; `decimals`: `number`; `logoURI?`: `string` \| `null`; `name`: `string`; `symbol`: `string`; \}\>, `z.ZodNativeEnum`\<[`FiatCurrency`](../common/src/README.md#fiatcurrency)\>\]\>; `quote`: `z.ZodUnion`\<\[`z.ZodObject`\<\{ `address`: `z.ZodObject`\<\{ `type`: `z.ZodNativeEnum`\<...\>; `value`: `z.ZodType`\<..., ..., ...\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${(...)}` ``; \}, \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${(...)}` ``; \}\>; `chainInfo`: `z.ZodObject`\<\{ `chainId`: `z.ZodUnion`\<...\>; `name`: `z.ZodString`; \}, `"strip"`, `z.ZodTypeAny`, \{ `chainId`: ... \| ... \| ... \| ... \| ... \| ...; `name`: `string`; \}, \{ `chainId`: ... \| ... \| ... \| ... \| ... \| ...; `name`: `string`; \}\>; `decimals`: `z.ZodNumber`; `logoURI`: `z.ZodOptional`\<`z.ZodNullable`\<`z.ZodString`\>\>; `name`: `z.ZodString`; `symbol`: `z.ZodString`; \}, `"strip"`, `z.ZodTypeAny`, \{ `address`: \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}; `chainInfo`: \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}; `decimals`: `number`; `logoURI?`: `string` \| `null`; `name`: `string`; `symbol`: `string`; \}, \{ `address`: \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}; `chainInfo`: \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}; `decimals`: `number`; `logoURI?`: `string` \| `null`; `name`: `string`; `symbol`: `string`; \}\>, `z.ZodNativeEnum`\<[`FiatCurrency`](../common/src/README.md#fiatcurrency)\>\]\>; `value`: `z.ZodString`; \}, `"strip"`, `z.ZodTypeAny`, \{ `base`: [`FiatCurrency`](../common/src/README.md#fiatcurrency) \| \{ `address`: \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}; `chainInfo`: \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}; `decimals`: `number`; `logoURI?`: `string` \| `null`; `name`: `string`; `symbol`: `string`; \}; `quote`: [`FiatCurrency`](../common/src/README.md#fiatcurrency) \| \{ `address`: \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}; `chainInfo`: \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}; `decimals`: `number`; `logoURI?`: `string` \| `null`; `name`: `string`; `symbol`: `string`; \}; `value`: `string`; \}, \{ `base`: [`FiatCurrency`](../common/src/README.md#fiatcurrency) \| \{ `address`: \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}; `chainInfo`: \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}; `decimals`: `number`; `logoURI?`: `string` \| `null`; `name`: `string`; `symbol`: `string`; \}; `quote`: [`FiatCurrency`](../common/src/README.md#fiatcurrency) \| \{ `address`: \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}; `chainInfo`: \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}; `decimals`: `number`; `logoURI?`: `string` \| `null`; `name`: `string`; `symbol`: `string`; \}; `value`: `string`; \}\>; `provider`: `z.ZodNativeEnum`\<*typeof* [`OracleProviderType`](../common/src/README.md#oracleprovidertype)\>; `token`: `z.ZodObject`\<\{ `address`: `z.ZodObject`\<\{ `type`: `z.ZodNativeEnum`\<[`AddressType`](../common/src/README.md#addresstype)\>; `value`: `z.ZodType`\<`` `0x${string}` ``, `z.ZodTypeDef`, `` `0x${string}` ``\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}, \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}\>; `chainInfo`: `z.ZodObject`\<\{ `chainId`: `z.ZodUnion`\<\[`z.ZodUnion`\<\[`z.ZodLiteral`\<...\>, `z.ZodLiteral`\<...\>, `...(...)`\]\>, `z.ZodUnion`\<\[`z.ZodLiteral`\<...\>, `z.ZodLiteral`\<...\>, `...(...)`\]\>\]\>; `name`: `z.ZodString`; \}, `"strip"`, `z.ZodTypeAny`, \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}, \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}\>; `decimals`: `z.ZodNumber`; `logoURI`: `z.ZodOptional`\<`z.ZodNullable`\<`z.ZodString`\>\>; `name`: `z.ZodString`; `symbol`: `z.ZodString`; \}, `"strip"`, `z.ZodTypeAny`, \{ `address`: \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}; `chainInfo`: \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}; `decimals`: `number`; `logoURI?`: `string` \| `null`; `name`: `string`; `symbol`: `string`; \}, \{ `address`: \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}; `chainInfo`: \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}; `decimals`: `number`; `logoURI?`: `string` \| `null`; `name`: `string`; `symbol`: `string`; \}\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `price`: \{ `base`: [`FiatCurrency`](../common/src/README.md#fiatcurrency) \| \{ `address`: \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}; `chainInfo`: \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}; `decimals`: `number`; `logoURI?`: `string` \| `null`; `name`: `string`; `symbol`: `string`; \}; `quote`: [`FiatCurrency`](../common/src/README.md#fiatcurrency) \| \{ `address`: \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}; `chainInfo`: \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}; `decimals`: `number`; `logoURI?`: `string` \| `null`; `name`: `string`; `symbol`: `string`; \}; `value`: `string`; \}; `provider`: [`OracleProviderType`](../common/src/README.md#oracleprovidertype); `token`: \{ `address`: \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}; `chainInfo`: \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}; `decimals`: `number`; `logoURI?`: `string` \| `null`; `name`: `string`; `symbol`: `string`; \}; \}, \{ `price`: \{ `base`: [`FiatCurrency`](../common/src/README.md#fiatcurrency) \| \{ `address`: \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}; `chainInfo`: \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}; `decimals`: `number`; `logoURI?`: `string` \| `null`; `name`: `string`; `symbol`: `string`; \}; `quote`: [`FiatCurrency`](../common/src/README.md#fiatcurrency) \| \{ `address`: \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}; `chainInfo`: \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}; `decimals`: `number`; `logoURI?`: `string` \| `null`; `name`: `string`; `symbol`: `string`; \}; `value`: `string`; \}; `provider`: [`OracleProviderType`](../common/src/README.md#oracleprovidertype); `token`: \{ `address`: \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}; `chainInfo`: \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}; `decimals`: `number`; `logoURI?`: `string` \| `null`; `name`: `string`; `symbol`: `string`; \}; \}\>

Zod schema for ISpotPriceInfo

***

### SpotPricesInfoDataSchema

> `const` **SpotPricesInfoDataSchema**: `z.ZodObject`\<\{ `priceByAddress`: `z.ZodRecord`\<`z.ZodString`, `z.ZodObject`\<\{ `base`: `z.ZodUnion`\<\[`z.ZodObject`\<\{ `address`: `z.ZodObject`\<\{ `type`: ...; `value`: ...; \}, `"strip"`, `z.ZodTypeAny`, \{ `type`: ...; `value`: ...; \}, \{ `type`: ...; `value`: ...; \}\>; `chainInfo`: `z.ZodObject`\<\{ `chainId`: ...; `name`: ...; \}, `"strip"`, `z.ZodTypeAny`, \{ `chainId`: ...; `name`: ...; \}, \{ `chainId`: ...; `name`: ...; \}\>; `decimals`: `z.ZodNumber`; `logoURI`: `z.ZodOptional`\<`z.ZodNullable`\<...\>\>; `name`: `z.ZodString`; `symbol`: `z.ZodString`; \}, `"strip"`, `z.ZodTypeAny`, \{ `address`: \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${(...)}` ``; \}; `chainInfo`: \{ `chainId`: ... \| ... \| ... \| ... \| ... \| ...; `name`: `string`; \}; `decimals`: `number`; `logoURI?`: `string` \| `null`; `name`: `string`; `symbol`: `string`; \}, \{ `address`: \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${(...)}` ``; \}; `chainInfo`: \{ `chainId`: ... \| ... \| ... \| ... \| ... \| ...; `name`: `string`; \}; `decimals`: `number`; `logoURI?`: `string` \| `null`; `name`: `string`; `symbol`: `string`; \}\>, `z.ZodNativeEnum`\<[`FiatCurrency`](../common/src/README.md#fiatcurrency)\>\]\>; `quote`: `z.ZodUnion`\<\[`z.ZodObject`\<\{ `address`: `z.ZodObject`\<\{ `type`: ...; `value`: ...; \}, `"strip"`, `z.ZodTypeAny`, \{ `type`: ...; `value`: ...; \}, \{ `type`: ...; `value`: ...; \}\>; `chainInfo`: `z.ZodObject`\<\{ `chainId`: ...; `name`: ...; \}, `"strip"`, `z.ZodTypeAny`, \{ `chainId`: ...; `name`: ...; \}, \{ `chainId`: ...; `name`: ...; \}\>; `decimals`: `z.ZodNumber`; `logoURI`: `z.ZodOptional`\<`z.ZodNullable`\<...\>\>; `name`: `z.ZodString`; `symbol`: `z.ZodString`; \}, `"strip"`, `z.ZodTypeAny`, \{ `address`: \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${(...)}` ``; \}; `chainInfo`: \{ `chainId`: ... \| ... \| ... \| ... \| ... \| ...; `name`: `string`; \}; `decimals`: `number`; `logoURI?`: `string` \| `null`; `name`: `string`; `symbol`: `string`; \}, \{ `address`: \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${(...)}` ``; \}; `chainInfo`: \{ `chainId`: ... \| ... \| ... \| ... \| ... \| ...; `name`: `string`; \}; `decimals`: `number`; `logoURI?`: `string` \| `null`; `name`: `string`; `symbol`: `string`; \}\>, `z.ZodNativeEnum`\<[`FiatCurrency`](../common/src/README.md#fiatcurrency)\>\]\>; `value`: `z.ZodString`; \}, `"strip"`, `z.ZodTypeAny`, \{ `base`: [`FiatCurrency`](../common/src/README.md#fiatcurrency) \| \{ `address`: \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}; `chainInfo`: \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}; `decimals`: `number`; `logoURI?`: `string` \| `null`; `name`: `string`; `symbol`: `string`; \}; `quote`: [`FiatCurrency`](../common/src/README.md#fiatcurrency) \| \{ `address`: \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}; `chainInfo`: \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}; `decimals`: `number`; `logoURI?`: `string` \| `null`; `name`: `string`; `symbol`: `string`; \}; `value`: `string`; \}, \{ `base`: [`FiatCurrency`](../common/src/README.md#fiatcurrency) \| \{ `address`: \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}; `chainInfo`: \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}; `decimals`: `number`; `logoURI?`: `string` \| `null`; `name`: `string`; `symbol`: `string`; \}; `quote`: [`FiatCurrency`](../common/src/README.md#fiatcurrency) \| \{ `address`: \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}; `chainInfo`: \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}; `decimals`: `number`; `logoURI?`: `string` \| `null`; `name`: `string`; `symbol`: `string`; \}; `value`: `string`; \}\>\>; `provider`: `z.ZodNativeEnum`\<*typeof* [`OracleProviderType`](../common/src/README.md#oracleprovidertype)\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `priceByAddress`: `Record`\<`string`, \{ `base`: [`FiatCurrency`](../common/src/README.md#fiatcurrency) \| \{ `address`: \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}; `chainInfo`: \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}; `decimals`: `number`; `logoURI?`: `string` \| `null`; `name`: `string`; `symbol`: `string`; \}; `quote`: [`FiatCurrency`](../common/src/README.md#fiatcurrency) \| \{ `address`: \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}; `chainInfo`: \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}; `decimals`: `number`; `logoURI?`: `string` \| `null`; `name`: `string`; `symbol`: `string`; \}; `value`: `string`; \}\>; `provider`: [`OracleProviderType`](../common/src/README.md#oracleprovidertype); \}, \{ `priceByAddress`: `Record`\<`string`, \{ `base`: [`FiatCurrency`](../common/src/README.md#fiatcurrency) \| \{ `address`: \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}; `chainInfo`: \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}; `decimals`: `number`; `logoURI?`: `string` \| `null`; `name`: `string`; `symbol`: `string`; \}; `quote`: [`FiatCurrency`](../common/src/README.md#fiatcurrency) \| \{ `address`: \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}; `chainInfo`: \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}; `decimals`: `number`; `logoURI?`: `string` \| `null`; `name`: `string`; `symbol`: `string`; \}; `value`: `string`; \}\>; `provider`: [`OracleProviderType`](../common/src/README.md#oracleprovidertype); \}\>

Zod schema for ISpotPriceInfo

***

### StakingBucketSchema

> `const` **StakingBucketSchema**: `z.ZodNativeEnum`\<*typeof* [`StakingBucket`](../common/src/README.md#stakingbucket)\>

Zod schema for StakingBucket

***

### StakingBucketValues

> `const` **StakingBucketValues**: [`StakingBucket`](../common/src/README.md#stakingbucket)[]

***

### SwapErrorDataSchema

> `const` **SwapErrorDataSchema**: `z.ZodObject`\<\{ `apiQuery`: `z.ZodString`; `message`: `z.ZodString`; `reason`: `z.ZodString`; `statusCode`: `z.ZodNumber`; `subtype`: `z.ZodNativeEnum`\<*typeof* [`SwapErrorType`](../common/src/README.md#swaperrortype)\>; `type`: `z.ZodLiteral`\<`SDKErrorType.SwapError`\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `apiQuery`: `string`; `message`: `string`; `reason`: `string`; `statusCode`: `number`; `subtype`: [`SwapErrorType`](../common/src/README.md#swaperrortype); `type`: `SDKErrorType.SwapError`; \}, \{ `apiQuery`: `string`; `message`: `string`; `reason`: `string`; `statusCode`: `number`; `subtype`: [`SwapErrorType`](../common/src/README.md#swaperrortype); `type`: `SDKErrorType.SwapError`; \}\>

Zod schema for ISwapError

***

### TokenAmountDataSchema

> `const` **TokenAmountDataSchema**: `z.ZodObject`\<\{ `amount`: `z.ZodString`; `token`: `z.ZodType`\<[`IToken`](#itoken), `z.ZodTypeDef`, [`IToken`](#itoken)\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `amount`: `string`; `token`: [`IToken`](#itoken); \}, \{ `amount`: `string`; `token`: [`IToken`](#itoken); \}\>

Zod schema for ITokenAmount

***

### TokenDataSchema

> `const` **TokenDataSchema**: `z.ZodObject`\<\{ `address`: `z.ZodObject`\<\{ `type`: `z.ZodNativeEnum`\<[`AddressType`](../common/src/README.md#addresstype)\>; `value`: `z.ZodType`\<`` `0x${string}` ``, `z.ZodTypeDef`, `` `0x${string}` ``\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}, \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}\>; `chainInfo`: `z.ZodObject`\<\{ `chainId`: `z.ZodUnion`\<\[`z.ZodUnion`\<\[`z.ZodLiteral`\<`1` \| `8453` \| `42161` \| `146` \| `999`\>, `z.ZodLiteral`\<`1` \| `8453` \| `42161` \| `146` \| `999`\>, `...z.ZodLiteral<(...)>[]`\]\>, `z.ZodUnion`\<\[`z.ZodLiteral`\<`1` \| `8453` \| `42161` \| `146` \| `10`\>, `z.ZodLiteral`\<`1` \| `8453` \| `42161` \| `146` \| `10`\>, `...z.ZodLiteral<(...)>[]`\]\>\]\>; `name`: `z.ZodString`; \}, `"strip"`, `z.ZodTypeAny`, \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}, \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}\>; `decimals`: `z.ZodNumber`; `logoURI`: `z.ZodOptional`\<`z.ZodNullable`\<`z.ZodString`\>\>; `name`: `z.ZodString`; `symbol`: `z.ZodString`; \}, `"strip"`, `z.ZodTypeAny`, \{ `address`: \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}; `chainInfo`: \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}; `decimals`: `number`; `logoURI?`: `string` \| `null`; `name`: `string`; `symbol`: `string`; \}, \{ `address`: \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}; `chainInfo`: \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}; `decimals`: `number`; `logoURI?`: `string` \| `null`; `name`: `string`; `symbol`: `string`; \}\>

Zod schema for IToken

***

### TokensProviderTypeSchema

> `const` **TokensProviderTypeSchema**: `z.ZodNativeEnum`\<*typeof* [`TokensProviderType`](../common/src/README.md#tokensprovidertype)\>

Zod schema for the TokensProviderType enum.

***

### TokenSymbolSchema

> `const` **TokenSymbolSchema**: `z.ZodString`

Zod schema for TokenSymbol

***

### UserDataSchema

> `const` **UserDataSchema**: `z.ZodObject`\<\{ `chainInfo`: `z.ZodType`\<[`IChainInfo`](#ichaininfo), `z.ZodTypeDef`, [`IChainInfo`](#ichaininfo)\>; `wallet`: `z.ZodType`\<[`IWallet`](#iwallet), `z.ZodTypeDef`, [`IWallet`](#iwallet)\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `chainInfo`: [`IChainInfo`](#ichaininfo); `wallet`: [`IWallet`](#iwallet); \}, \{ `chainInfo`: [`IChainInfo`](#ichaininfo); `wallet`: [`IWallet`](#iwallet); \}\>

Zod schema for the data part of IUser

***

### UserPortfolioDataSchema

> `const` **UserPortfolioDataSchema**: `z.ZodObject`\<\{ `totalFiatValue`: `z.ZodType`\<[`IFiatCurrencyAmount`](#ifiatcurrencyamount), `z.ZodTypeDef`, [`IFiatCurrencyAmount`](#ifiatcurrencyamount)\>; `user`: `z.ZodType`\<[`IUser`](#iuser), `z.ZodTypeDef`, [`IUser`](#iuser)\>; `walletHoldings`: `z.ZodArray`\<`z.ZodType`\<[`IHolding`](#iholding), `z.ZodTypeDef`, [`IHolding`](#iholding)\>, `"many"`\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `totalFiatValue`: [`IFiatCurrencyAmount`](#ifiatcurrencyamount); `user`: [`IUser`](#iuser); `walletHoldings`: [`IHolding`](#iholding)[]; \}, \{ `totalFiatValue`: [`IFiatCurrencyAmount`](#ifiatcurrencyamount); `user`: [`IUser`](#iuser); `walletHoldings`: [`IHolding`](#iholding)[]; \}\>

Zod schema for IUserPortfolio

***

### VaultDataSchema

> `const` **VaultDataSchema**: `z.ZodIntersection`\<`z.ZodObject`\<\{ `address`: `z.ZodObject`\<\{ `type`: `z.ZodNativeEnum`\<[`AddressType`](../common/src/README.md#addresstype)\>; `value`: `z.ZodType`\<`` `0x${string}` ``, `z.ZodTypeDef`, `` `0x${string}` ``\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}, \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}\>; `chainInfo`: `z.ZodObject`\<\{ `chainId`: `z.ZodUnion`\<\[`z.ZodUnion`\<\[`z.ZodLiteral`\<... \| ... \| ... \| ... \| ...\>, `z.ZodLiteral`\<... \| ... \| ... \| ... \| ...\>, `...(...)[]`\]\>, `z.ZodUnion`\<\[`z.ZodLiteral`\<... \| ... \| ... \| ... \| ...\>, `z.ZodLiteral`\<... \| ... \| ... \| ... \| ...\>, `...(...)[]`\]\>\]\>; `name`: `z.ZodString`; \}, `"strip"`, `z.ZodTypeAny`, \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}, \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}\>; `decimals`: `z.ZodNumber`; `logoURI`: `z.ZodOptional`\<`z.ZodNullable`\<`z.ZodString`\>\>; `name`: `z.ZodString`; `symbol`: `z.ZodString`; \}, `"strip"`, `z.ZodTypeAny`, \{ `address`: \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}; `chainInfo`: \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}; `decimals`: `number`; `logoURI?`: `string` \| `null`; `name`: `string`; `symbol`: `string`; \}, \{ `address`: \{ `type`: [`AddressType`](../common/src/README.md#addresstype); `value`: `` `0x${string}` ``; \}; `chainInfo`: \{ `chainId`: `1` \| `8453` \| `42161` \| `146` \| `999` \| `10`; `name`: `string`; \}; `decimals`: `number`; `logoURI?`: `string` \| `null`; `name`: `string`; `symbol`: `string`; \}\>, `z.ZodObject`\<\{ `asset`: `z.ZodType`\<[`IToken`](#itoken), `z.ZodTypeDef`, [`IToken`](#itoken)\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `asset`: [`IToken`](#itoken); \}, \{ `asset`: [`IToken`](#itoken); \}\>\>

Zod schema for IVault

***

### WalletDataSchema

> `const` **WalletDataSchema**: `z.ZodObject`\<\{ `address`: `z.ZodType`\<[`IAddress`](#iaddress), `z.ZodTypeDef`, [`IAddress`](#iaddress)\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `address`: [`IAddress`](#iaddress); \}, \{ `address`: [`IAddress`](#iaddress); \}\>

Zod schema for IWallet

***

### YieldPoolIdDataSchema

> `const` **YieldPoolIdDataSchema**: `z.ZodObject`\<\{ `protocol`: `z.ZodType`\<[`IProtocol`](#iprotocol), `z.ZodTypeDef`, [`IProtocol`](#iprotocol)\>; `type`: `z.ZodLiteral`\<`PoolType.Yield`\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `protocol`: [`IProtocol`](#iprotocol); `type`: `PoolType.Yield`; \}, \{ `protocol`: [`IProtocol`](#iprotocol); `type`: `PoolType.Yield`; \}\>

Zod schema for IYieldPoolId

***

### YieldPoolInfoDataSchema

> `const` **YieldPoolInfoDataSchema**: `z.ZodObject`\<\{ `currentApy`: `z.ZodType`\<[`IPercentage`](#ipercentage), `z.ZodTypeDef`, [`IPercentage`](#ipercentage)\>; `id`: `z.ZodType`\<[`IYieldPoolId`](#iyieldpoolid), `z.ZodTypeDef`, [`IYieldPoolId`](#iyieldpoolid)\>; `receiptToken`: `z.ZodType`\<[`IToken`](#itoken), `z.ZodTypeDef`, [`IToken`](#itoken)\>; `totalValueLocked`: `z.ZodType`\<[`IFiatCurrencyAmount`](#ifiatcurrencyamount), `z.ZodTypeDef`, [`IFiatCurrencyAmount`](#ifiatcurrencyamount)\>; `type`: `z.ZodLiteral`\<`PoolType.Yield`\>; `underlyingToken`: `z.ZodType`\<[`IToken`](#itoken), `z.ZodTypeDef`, [`IToken`](#itoken)\>; `yieldType`: `z.ZodNativeEnum`\<*typeof* [`YieldType`](../common/src/README.md#yieldtype)\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `currentApy`: [`IPercentage`](#ipercentage); `id`: [`IYieldPoolId`](#iyieldpoolid); `receiptToken`: [`IToken`](#itoken); `totalValueLocked`: [`IFiatCurrencyAmount`](#ifiatcurrencyamount); `type`: `PoolType.Yield`; `underlyingToken`: [`IToken`](#itoken); `yieldType`: [`YieldType`](../common/src/README.md#yieldtype); \}, \{ `currentApy`: [`IPercentage`](#ipercentage); `id`: [`IYieldPoolId`](#iyieldpoolid); `receiptToken`: [`IToken`](#itoken); `totalValueLocked`: [`IFiatCurrencyAmount`](#ifiatcurrencyamount); `type`: `PoolType.Yield`; `underlyingToken`: [`IToken`](#itoken); `yieldType`: [`YieldType`](../common/src/README.md#yieldtype); \}\>

Zod schema for IYieldPoolInfo

***

### YieldPositionDataSchema

> `const` **YieldPositionDataSchema**: `z.ZodObject`\<\{ `claimableRewards`: `z.ZodArray`\<`z.ZodType`\<[`ITokenAmount`](#itokenamount), `z.ZodTypeDef`, [`ITokenAmount`](#itokenamount)\>, `"many"`\>; `currentAmount`: `z.ZodType`\<[`ITokenAmount`](#itokenamount), `z.ZodTypeDef`, [`ITokenAmount`](#itokenamount)\>; `id`: `z.ZodType`\<[`IYieldPositionId`](#iyieldpositionid-1), `z.ZodTypeDef`, [`IYieldPositionId`](#iyieldpositionid-1)\>; `pool`: `z.ZodType`\<[`IPool`](#ipool), `z.ZodTypeDef`, [`IPool`](#ipool)\>; `poolId`: `z.ZodType`\<[`IYieldPoolId`](#iyieldpoolid), `z.ZodTypeDef`, [`IYieldPoolId`](#iyieldpoolid)\>; `principalAmount`: `z.ZodType`\<[`ITokenAmount`](#itokenamount), `z.ZodTypeDef`, [`ITokenAmount`](#itokenamount)\>; `type`: `z.ZodLiteral`\<`PositionType.Yield`\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `claimableRewards`: [`ITokenAmount`](#itokenamount)[]; `currentAmount`: [`ITokenAmount`](#itokenamount); `id`: [`IYieldPositionId`](#iyieldpositionid-1); `pool`: [`IPool`](#ipool); `poolId`: [`IYieldPoolId`](#iyieldpoolid); `principalAmount`: [`ITokenAmount`](#itokenamount); `type`: `PositionType.Yield`; \}, \{ `claimableRewards`: [`ITokenAmount`](#itokenamount)[]; `currentAmount`: [`ITokenAmount`](#itokenamount); `id`: [`IYieldPositionId`](#iyieldpositionid-1); `pool`: [`IPool`](#ipool); `poolId`: [`IYieldPoolId`](#iyieldpoolid); `principalAmount`: [`ITokenAmount`](#itokenamount); `type`: `PositionType.Yield`; \}\>

Zod schema for IYieldPosition

***

### YieldPositionIdDataSchema

> `const` **YieldPositionIdDataSchema**: `z.ZodObject`\<\{ `id`: `z.ZodString`; `type`: `z.ZodLiteral`\<`PositionType.Yield`\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `id`: `string`; `type`: `PositionType.Yield`; \}, \{ `id`: `string`; `type`: `PositionType.Yield`; \}\>

Zod schema for IYieldPositionId

***

### YieldTypeSchema

> `const` **YieldTypeSchema**: `z.ZodNativeEnum`\<*typeof* [`YieldType`](../common/src/README.md#yieldtype)\>

Zod schema for YieldType

## Functions

### borrowFromPosition()

> **borrowFromPosition**(`position`, `amount`): [`ILendingPosition`](#ilendingposition)

#### Parameters

##### position

[`ILendingPosition`](#ilendingposition)

##### amount

[`ITokenAmount`](#itokenamount)

#### Returns

[`ILendingPosition`](#ilendingposition)

***

### Cache()

> **Cache**(`profile`): (`targetOrMethod`, `propertyKeyOrContext`, `descriptor?`) => `any`

Method decorator to automatically cache the result of the method based on a VolatilityProfile.
The class using this decorator MUST have a `cacheOrchestrator` property.

#### Parameters

##### profile

[`VolatilityProfile`](../common/src/README.md#volatilityprofile)

The data volatility profile to govern caching rules.

#### Returns

(`targetOrMethod`, `propertyKeyOrContext`, `descriptor?`) => `any`

***

### calculatePriceImpact()

> **calculatePriceImpact**(`spotPrice`, `quotePrice`): [`IPercentage`](#ipercentage)

#### Parameters

##### spotPrice

[`IPrice`](#iprice)

This price represents a blend of spot prices from various exchanges.

##### quotePrice

[`IPrice`](#iprice)

The offer price is price quoted to us by a liquidity provider and takes
     into account price impact - where price impact is a measure of how much our trade
     affects the price. It is determined by the breadth and depth of liquidity.

#### Returns

[`IPercentage`](#ipercentage)

***

### createTimeoutSignal()

> **createTimeoutSignal**(`timeout?`): `AbortSignal`

Creates an AbortSignal with the standard timeout

#### Parameters

##### timeout?

`number`

Timeout in milliseconds (defaults to standard timeout)

#### Returns

`AbortSignal`

AbortSignal that will abort after the specified timeout

***

### depositToPosition()

> **depositToPosition**(`position`, `amount`): [`ILendingPosition`](#ilendingposition)

#### Parameters

##### position

[`ILendingPosition`](#ilendingposition)

##### amount

[`ITokenAmount`](#itokenamount)

#### Returns

[`ILendingPosition`](#ilendingposition)

***

### divideFiatCurrencyAmountByPercentage()

> **divideFiatCurrencyAmountByPercentage**(`fiatCurrencyAmount`, `percentage`): [`IFiatCurrencyAmountData`](#ifiatcurrencyamountdata)

divideFiatCurrencyAmountByPercentage

#### Parameters

##### fiatCurrencyAmount

[`IFiatCurrencyAmount`](#ifiatcurrencyamount)

The fiat currency amount to divide

##### percentage

[`IPercentage`](#ipercentage)

The percentage to divide by

#### Returns

[`IFiatCurrencyAmountData`](#ifiatcurrencyamountdata)

The resulting fiat currency amount

***

### dividePriceByPercentage()

> **dividePriceByPercentage**(`price`, `percentage`): [`IPriceData`](#ipricedata)

Divides a price by a percentage

#### Parameters

##### price

[`IPrice`](#iprice)

The price to divide

##### percentage

[`IPercentage`](#ipercentage)

The percentage to divide by

#### Returns

[`IPriceData`](#ipricedata)

The resulting price

***

### dividePriceByPrice()

> **dividePriceByPrice**(`price`, `otherPrice`): [`IPriceData`](#ipricedata)

Divide a price by another price

#### Parameters

##### price

[`IPrice`](#iprice)

The price to divide

##### otherPrice

[`IPrice`](#iprice)

The price to divide by

#### Returns

[`IPriceData`](#ipricedata)

The resulting price

***

### divideTokenAmountByPercentage()

> **divideTokenAmountByPercentage**(`tokenAmount`, `percentage`): [`ITokenAmountData`](#itokenamountdata)

divideTokenAmountByPercentage

#### Parameters

##### tokenAmount

[`ITokenAmount`](#itokenamount)

The token amount to divide

##### percentage

[`IPercentage`](#ipercentage)

The percentage to divide by

#### Returns

[`ITokenAmountData`](#itokenamountdata)

The resulting token amount

***

### fetchWithTimeout()

> **fetchWithTimeout**(`url`, `options?`): `Promise`\<`Response`\>

#### Parameters

##### url

`string`

##### options?

`RequestInit`

#### Returns

`Promise`\<`Response`\>

***

### getChainFamilyInfoByChainId()

> **getChainFamilyInfoByChainId**(`chainId`): [`ChainFamilyInfo`](#chainfamilyinfo)

getChainFamilyInfoByChainId
Retrieves the ChainFamilyInfo for a given chainId

#### Parameters

##### chainId

`number`

The chainId to retrieve the ChainFamilyInfo for

#### Returns

[`ChainFamilyInfo`](#chainfamilyinfo)

The ChainFamilyInfo for the given chainId

#### Throws

Error if the chainId is not supported

***

### getChainInfoByChainId()

> **getChainInfoByChainId**(`chainId`): [`ChainInfo`](#chaininfo-1)

getChainInfoByChainId
Retrieves the ChainInfo for a given chainId

#### Parameters

##### chainId

`number`

The chainId to retrieve the ChainInfo for

#### Returns

[`ChainInfo`](#chaininfo-1)

The ChainInfo for the given chainId

#### Throws

Error if the chainId is not supported

***

### getValueFromReference()

> **getValueFromReference**\<`T`\>(`reference`): `T`

#### Type Parameters

##### T

`T`

#### Parameters

##### reference

[`ReferenceableField`](#referenceablefield)\<`T`\>

#### Returns

`T`

***

### isAddress()

> **isAddress**(`maybeAddress`, `returnedErrors?`): `maybeAddress is IAddress`

Type guard for IAddress

#### Parameters

##### maybeAddress

`unknown`

##### returnedErrors?

`string`[]

#### Returns

`maybeAddress is IAddress`

true if the object is an IAddress

***

### isAddressValue()

> **isAddressValue**(`value`): `` value is `0x${string}` ``

#### Parameters

##### value

`unknown`

#### Returns

`` value is `0x${string}` ``

***

### isAmountValue()

> **isAmountValue**(`value`): `value is string`

#### Parameters

##### value

`unknown`

#### Returns

`value is string`

***

### isArmadaMigrationType()

> **isArmadaMigrationType**(`maybeArmadaMigrationType`): `maybeArmadaMigrationType is ArmadaMigrationType`

Type guard for ProtocolName

#### Parameters

##### maybeArmadaMigrationType

`unknown`

Object to be checked

#### Returns

`maybeArmadaMigrationType is ArmadaMigrationType`

true if the object is a ProtocolName

***

### isBalanceChange()

> **isBalanceChange**(`maybeBalanceChange`): `maybeBalanceChange is IBalanceChange`

#### Parameters

##### maybeBalanceChange

`unknown`

#### Returns

`maybeBalanceChange is IBalanceChange`

***

### isChainInfo()

> **isChainInfo**(`maybeChainInfo`, `returnedErrors?`): `maybeChainInfo is IChainInfo`

Type guard for IChainInfo

#### Parameters

##### maybeChainInfo

`unknown`

##### returnedErrors?

`string`[]

#### Returns

`maybeChainInfo is IChainInfo`

true if the object is an IChainInfo

***

### isCollateralInfo()

> **isCollateralInfo**(`maybeCollateralInfo`): `maybeCollateralInfo is Readonly<{ liquidationPenalty: IPercentage; liquidationThreshold: IRiskRatio; maxSupply: ITokenAmount; price: IPrice; priceUSD: IPrice; token: IToken; tokensLocked: ITokenAmount }>`

Type guard for ICollateralInfo

#### Parameters

##### maybeCollateralInfo

`unknown`

#### Returns

`maybeCollateralInfo is Readonly<{ liquidationPenalty: IPercentage; liquidationThreshold: IRiskRatio; maxSupply: ITokenAmount; price: IPrice; priceUSD: IPrice; token: IToken; tokensLocked: ITokenAmount }>`

true if the object is an ICollateralInfo

***

### isDebtInfo()

> **isDebtInfo**(`maybeDebtInfo`): `maybeDebtInfo is Readonly<{ debtAvailable: ITokenAmount; debtCeiling: ITokenAmount; dustLimit: ITokenAmount; interestRate: IPercentage; originationFee: IPercentage; price: IPrice; priceUSD: IPrice; token: IToken; totalBorrowed: ITokenAmount }>`

Type guard for IDebtInfo

#### Parameters

##### maybeDebtInfo

`unknown`

#### Returns

`maybeDebtInfo is Readonly<{ debtAvailable: ITokenAmount; debtCeiling: ITokenAmount; dustLimit: ITokenAmount; interestRate: IPercentage; originationFee: IPercentage; price: IPrice; priceUSD: IPrice; token: IToken; totalBorrowed: ITokenAmount }>`

true if the object is an IDebtInfo

***

### isDenomination()

> **isDenomination**(`maybeDenomination`): `maybeDenomination is Denomination`

Type guard for Denomination

#### Parameters

##### maybeDenomination

`unknown`

#### Returns

`maybeDenomination is Denomination`

true if the value is a Denomination

***

### isFiatCurrency()

> **isFiatCurrency**(`value`): `value is FiatCurrency`

isFiatCurrency

#### Parameters

##### value

`unknown`

Value to check if it is a FiatCurrency

#### Returns

`value is FiatCurrency`

true if the value is a FiatCurrency

***

### isFiatCurrencyAmount()

> **isFiatCurrencyAmount**(`maybeTokenAmount`): `maybeTokenAmount is IFiatCurrencyAmount`

Type guard for IFiatCurrencyAmount

#### Parameters

##### maybeTokenAmount

`unknown`

#### Returns

`maybeTokenAmount is IFiatCurrencyAmount`

true if the object is an ITokenAmount

***

### isGasEstimation()

> **isGasEstimation**(`maybeGasEstimation`): `maybeGasEstimation is IGasEstimation`

#### Parameters

##### maybeGasEstimation

`unknown`

#### Returns

`maybeGasEstimation is IGasEstimation`

***

### isHexData()

> **isHexData**(`value`): `` value is `0x${string}` ``

#### Parameters

##### value

`unknown`

#### Returns

`` value is `0x${string}` ``

***

### isHolding()

> **isHolding**(`maybeHolding`): `maybeHolding is IHolding`

Type guard for IHolding

#### Parameters

##### maybeHolding

`unknown`

Object to be checked

#### Returns

`maybeHolding is IHolding`

true if the object is an IHolding

***

### isLendingPool()

> **isLendingPool**(`maybePool`): `maybePool is ILendingPool`

Type guard for ILendingPool

#### Parameters

##### maybePool

`unknown`

Object to be checked

#### Returns

`maybePool is ILendingPool`

true if the object is an ILendingPool

It also asserts the type so that TypeScript knows that the object is an ILendingPool

***

### isLendingPoolId()

> **isLendingPoolId**(`maybePoolId`): `maybePoolId is ILendingPoolId`

Type guard for ILendingPoolId

#### Parameters

##### maybePoolId

`unknown`

Object to be checked

#### Returns

`maybePoolId is ILendingPoolId`

true if the object is an ILendingPoolId

It also asserts the type so that TypeScript knows that the object is an ILendingPoolId

***

### isLendingPoolInfo()

> **isLendingPoolInfo**(`maybePool`): `maybePool is ILendingPoolInfo`

Type guard for ILendingPoolInfo

#### Parameters

##### maybePool

`unknown`

Object to be checked

#### Returns

`maybePool is ILendingPoolInfo`

true if the object is an ILendingPool

It also asserts the type so that TypeScript knows that the object is an ILendingPool

***

### isLendingPosition()

> **isLendingPosition**(`maybeLendingPosition`): `maybeLendingPosition is ILendingPosition`

Type guard for ILendingPosition

#### Parameters

##### maybeLendingPosition

`unknown`

Object to be checked

#### Returns

`maybeLendingPosition is ILendingPosition`

true if the object is an ILendingPosition

It also asserts the type so that TypeScript knows that the object is an ILendingPool

***

### isLendingPositionId()

> **isLendingPositionId**(`maybeLendingPositionId`): `maybeLendingPositionId is ILendingPositionId`

Type guard for ILendingPositionId

#### Parameters

##### maybeLendingPositionId

`unknown`

Object to be checked

#### Returns

`maybeLendingPositionId is ILendingPositionId`

true if the object is an ILendingPositionId

It also asserts the type so that TypeScript knows that the object is an ILendingPool

***

### isLendingPositionType()

> **isLendingPositionType**(`maybeLendingPositionType`): `maybeLendingPositionType is LendingPositionType`

Type guard for LendingPositionType

#### Parameters

##### maybeLendingPositionType

`unknown`

Object to be checked

#### Returns

`maybeLendingPositionType is LendingPositionType`

true if the object is a LendingPositionType

***

### isOracleProviderType()

> **isOracleProviderType**(`maybeOracleProviderType`): `maybeOracleProviderType is OracleProviderType`

Type guard for OracleProviderType

#### Parameters

##### maybeOracleProviderType

`unknown`

#### Returns

`maybeOracleProviderType is OracleProviderType`

true if the object is an OracleProviderType

***

### isPercentage()

> **isPercentage**(`maybePercentage`, `returnedErrors?`): `maybePercentage is IPercentage`

Type guard for IPercentage

#### Parameters

##### maybePercentage

`unknown`

##### returnedErrors?

`string`[]

#### Returns

`maybePercentage is IPercentage`

true if the object is an IPercentage

***

### isPercentageData()

> **isPercentageData**(`maybePercentageData`, `returnedErrors?`): `maybePercentageData is Readonly<{ value: number }>`

Type guard for IPercentageData

#### Parameters

##### maybePercentageData

`unknown`

##### returnedErrors?

`string`[]

#### Returns

`maybePercentageData is Readonly<{ value: number }>`

true if the object is an IPercentageData

***

### isPool()

> **isPool**(`maybePool`): `maybePool is IPool`

Type guard for IPool

#### Parameters

##### maybePool

`unknown`

#### Returns

`maybePool is IPool`

true if the object is an IPool

***

### isPoolId()

> **isPoolId**(`maybePoolId`): `maybePoolId is IPoolId`

Type guard for IPoolId

#### Parameters

##### maybePoolId

`unknown`

#### Returns

`maybePoolId is IPoolId`

true if the object is an IPoolId

***

### isPoolInfo()

> **isPoolInfo**(`maybePoolInfo`): `maybePoolInfo is IPoolInfo`

Type guard for IPoolInfo

#### Parameters

##### maybePoolInfo

`unknown`

#### Returns

`maybePoolInfo is IPoolInfo`

true if the object is an IPoolInfo

***

### isPoolType()

> **isPoolType**(`maybePoolType`): `maybePoolType is PoolType`

Type guard for PoolType

#### Parameters

##### maybePoolType

`unknown`

Object to be checked

#### Returns

`maybePoolType is PoolType`

true if the object is a PoolType

***

### isPosition()

> **isPosition**(`maybePosition`): `maybePosition is IPosition`

Type guard for IPosition

#### Parameters

##### maybePosition

`unknown`

#### Returns

`maybePosition is IPosition`

true if the object is an IPosition

***

### isPositionId()

> **isPositionId**(`maybePositionId`): `maybePositionId is IPositionId`

Type guard for IPositionId

#### Parameters

##### maybePositionId

`unknown`

#### Returns

`maybePositionId is IPositionId`

true if the object is an IPositionId

***

### isPositionsManager()

> **isPositionsManager**(`maybePositionsManager`): `maybePositionsManager is IPositionsManager`

Type guard for IPositionsManager

#### Parameters

##### maybePositionsManager

`unknown`

#### Returns

`maybePositionsManager is IPositionsManager`

true if the object is an IPositionsManager

***

### isPositionType()

> **isPositionType**(`maybePositionType`): `maybePositionType is PositionType`

Type guard for PositionType

#### Parameters

##### maybePositionType

`unknown`

Object to be checked

#### Returns

`maybePositionType is PositionType`

true if the object is a PositionType

***

### isPrice()

> **isPrice**(`maybePrice`): `maybePrice is IPrice`

Type guard for isPrice

#### Parameters

##### maybePrice

`unknown`

#### Returns

`maybePrice is IPrice`

true if the object is an isPrice

***

### isProtocol()

> **isProtocol**(`maybeProtocol`): `maybeProtocol is IProtocol`

Type guard for IProtocol

#### Parameters

##### maybeProtocol

`unknown`

#### Returns

`maybeProtocol is IProtocol`

true if the object is an IProtocol

***

### isProtocolName()

> **isProtocolName**(`maybeProtocolName`): `maybeProtocolName is ProtocolName`

Type guard for ProtocolName

#### Parameters

##### maybeProtocolName

`unknown`

Object to be checked

#### Returns

`maybeProtocolName is ProtocolName`

true if the object is a ProtocolName

***

### isRebalanceData()

> **isRebalanceData**(`maybeRebalanceData`): `maybeRebalanceData is IRebalanceData`

Type guard for IRebalanceData

#### Parameters

##### maybeRebalanceData

`unknown`

#### Returns

`maybeRebalanceData is IRebalanceData`

true if the object is an IRebalanceData

***

### isRiskRatio()

> **isRiskRatio**(`maybeRiskRatio`): `maybeRiskRatio is IRiskRatio`

Type guard for IRiskRatio

#### Parameters

##### maybeRiskRatio

`unknown`

#### Returns

`maybeRiskRatio is IRiskRatio`

true if the object is an IRiskRatio

***

### isSDKError()

> **isSDKError**(`maybeErrorData`): `maybeErrorData is Readonly<{ message: string; reason: string; type: SDKErrorType }>`

Type guard for ISDKError

#### Parameters

##### maybeErrorData

`unknown`

#### Returns

`maybeErrorData is Readonly<{ message: string; reason: string; type: SDKErrorType }>`

true if the object is an ISDKError

***

### isSimulation()

> **isSimulation**(`maybeSimulationData`): `maybeSimulationData is ISimulation`

Type guard for ISimulation

#### Parameters

##### maybeSimulationData

`unknown`

#### Returns

`maybeSimulationData is ISimulation`

true if the object is an IToken

***

### isStakingBucket()

> **isStakingBucket**(`maybeStakingBucket`): `maybeStakingBucket is StakingBucket`

Type guard for StakingBucket

#### Parameters

##### maybeStakingBucket

`unknown`

Object to be checked

#### Returns

`maybeStakingBucket is StakingBucket`

true if the object is a StakingBucket

***

### isSwapError()

> **isSwapError**(`maybeSwapErrorData`): `maybeSwapErrorData is Readonly<{ apiQuery: string; message: string; reason: string; statusCode: number; subtype: SwapErrorType; type: SwapError }>`

Type guard for ISwapError

#### Parameters

##### maybeSwapErrorData

`unknown`

#### Returns

`maybeSwapErrorData is Readonly<{ apiQuery: string; message: string; reason: string; statusCode: number; subtype: SwapErrorType; type: SwapError }>`

true if the object is an ISwapError

***

### isToken()

> **isToken**(`maybeTokenData`): `maybeTokenData is IToken`

Type guard for IToken

#### Parameters

##### maybeTokenData

`unknown`

#### Returns

`maybeTokenData is IToken`

true if the object is an IToken

***

### isTokenAmount()

> **isTokenAmount**(`maybeTokenAmount`, `returnedErrors?`): `maybeTokenAmount is ITokenAmount`

Type guard for ITokenAmount

#### Parameters

##### maybeTokenAmount

`unknown`

##### returnedErrors?

`string`[]

#### Returns

`maybeTokenAmount is ITokenAmount`

true if the object is an ITokenAmount

***

### isTokenAmountData()

> **isTokenAmountData**(`maybeTokenAmount`): `maybeTokenAmount is Readonly<{ amount: string; token: IToken }>`

Type guard for ITokenAmountData

#### Parameters

##### maybeTokenAmount

`unknown`

#### Returns

`maybeTokenAmount is Readonly<{ amount: string; token: IToken }>`

true if the object is an ITokenAmountData

***

### isTokenData()

> **isTokenData**(`maybeTokenData`): maybeTokenData is Readonly\<\{ address: \{ type: AddressType; value: \`0x$\{string\}\` \}; chainInfo: \{ chainId: 1 \| 10 \| 146 \| 999 \| 8453 \| 42161; name: string \}; decimals: number; logoURI?: string; name: string; symbol: string \}\>

Type guard for ITokenData

#### Parameters

##### maybeTokenData

`unknown`

#### Returns

maybeTokenData is Readonly\<\{ address: \{ type: AddressType; value: \`0x$\{string\}\` \}; chainInfo: \{ chainId: 1 \| 10 \| 146 \| 999 \| 8453 \| 42161; name: string \}; decimals: number; logoURI?: string; name: string; symbol: string \}\>

true if the object is an ITokenData

***

### isTokensProviderType()

> **isTokensProviderType**(`maybeTokensProviderType`): `maybeTokensProviderType is TokensProviderType`

Type guard for TokensProviderType

#### Parameters

##### maybeTokensProviderType

`unknown`

Object to be checked

#### Returns

`maybeTokensProviderType is TokensProviderType`

true if the object is a TokensProviderType

***

### isTokenSymbol()

> **isTokenSymbol**(`maybeTokenSymbol`): `maybeTokenSymbol is string`

Type guard for TokenSymbol

#### Parameters

##### maybeTokenSymbol

`unknown`

#### Returns

`maybeTokenSymbol is string`

true if the object is an TokenSymbol

***

### isUser()

> **isUser**(`maybeUser`, `returnedErrors?`): `maybeUser is IUser`

Type guard for IUser

#### Parameters

##### maybeUser

`unknown`

Object to be checked

##### returnedErrors?

`string`[]

#### Returns

`maybeUser is IUser`

true if the object is an IUser

***

### isUserPortfolio()

> **isUserPortfolio**(`maybePortfolio`): `maybePortfolio is IUserPortfolio`

Type guard for IUserPortfolio

#### Parameters

##### maybePortfolio

`unknown`

Object to be checked

#### Returns

`maybePortfolio is IUserPortfolio`

true if the object is an IUserPortfolio

***

### isValueReference()

> **isValueReference**\<`T`\>(`value`): `value is ValueReference<T>`

#### Type Parameters

##### T

`T`

#### Parameters

##### value

`unknown`

#### Returns

`value is ValueReference<T>`

***

### isVault()

> **isVault**(`maybeVaultData`): `maybeVaultData is IVault`

Type guard for IVault

#### Parameters

##### maybeVaultData

`unknown`

#### Returns

`maybeVaultData is IVault`

true if the object is an IVault

***

### isVaultData()

> **isVaultData**(`maybeVaultData`): maybeVaultData is Readonly\<\{ address: \{ type: AddressType; value: \`0x$\{string\}\` \}; chainInfo: \{ chainId: 1 \| 10 \| 146 \| 999 \| 8453 \| 42161; name: string \}; decimals: number; logoURI?: string; name: string; symbol: string \} & \{ asset: IToken \}\>

Type guard for IVaultData

#### Parameters

##### maybeVaultData

`unknown`

#### Returns

maybeVaultData is Readonly\<\{ address: \{ type: AddressType; value: \`0x$\{string\}\` \}; chainInfo: \{ chainId: 1 \| 10 \| 146 \| 999 \| 8453 \| 42161; name: string \}; decimals: number; logoURI?: string; name: string; symbol: string \} & \{ asset: IToken \}\>

true if the object is an IVaultData

***

### isWallet()

> **isWallet**(`maybeWallet`): `maybeWallet is IWallet`

Type guard for IWallet

#### Parameters

##### maybeWallet

`unknown`

#### Returns

`maybeWallet is IWallet`

true if the object is an IWallet

***

### isYieldPoolId()

> **isYieldPoolId**(`maybeYieldPoolId`): `maybeYieldPoolId is IYieldPoolId`

Type guard for IYieldPoolId

#### Parameters

##### maybeYieldPoolId

`unknown`

Object to be checked

#### Returns

`maybeYieldPoolId is IYieldPoolId`

true if the object is an IYieldPoolId

***

### isYieldPoolInfo()

> **isYieldPoolInfo**(`maybePool`): `maybePool is IYieldPoolInfo`

Type guard for IYieldPoolInfo

#### Parameters

##### maybePool

`unknown`

Object to be checked

#### Returns

`maybePool is IYieldPoolInfo`

true if the object is an IYieldPoolInfo

***

### isYieldPosition()

> **isYieldPosition**(`maybeYieldPosition`): `maybeYieldPosition is IYieldPosition`

Type guard for IYieldPosition

#### Parameters

##### maybeYieldPosition

`unknown`

Object to be checked

#### Returns

`maybeYieldPosition is IYieldPosition`

true if the object is an IYieldPosition

***

### isYieldPositionId()

> **isYieldPositionId**(`maybeYieldPositionId`): `maybeYieldPositionId is IYieldPositionId`

Type guard for IYieldPositionId

#### Parameters

##### maybeYieldPositionId

`unknown`

Object to be checked

#### Returns

`maybeYieldPositionId is IYieldPositionId`

true if the object is an IYieldPositionId

***

### isYieldType()

> **isYieldType**(`maybeYieldType`): `maybeYieldType is YieldType`

Type guard for YieldType

#### Parameters

##### maybeYieldType

`unknown`

Object to be checked

#### Returns

`maybeYieldType is YieldType`

true if the object is a YieldType

***

### makeSDK()

> **makeSDK**(`params`): [`SDKManager`](#sdkmanager)

#### Parameters

##### params

`MakeSDKParams`

#### Returns

[`SDKManager`](#sdkmanager)

***

### makeSDKWithSigner()

> **makeSDKWithSigner**(`params`): [`SDKManagerWithSigner`](#sdkmanagerwithsigner)

#### Parameters

##### params

`MakeSDKWithSignerParams`

#### Returns

[`SDKManagerWithSigner`](#sdkmanagerwithsigner)

***

### multiplyFiatCurrencyAmountByPercentage()

> **multiplyFiatCurrencyAmountByPercentage**(`fiatCurrencyAmount`, `percentage`): [`IFiatCurrencyAmountData`](#ifiatcurrencyamountdata)

multiplyFiatCurrencyAmountByPercentage

#### Parameters

##### fiatCurrencyAmount

[`IFiatCurrencyAmount`](#ifiatcurrencyamount)

The fiat currency amount to multiply

##### percentage

[`IPercentage`](#ipercentage)

The percentage to multiply by

#### Returns

[`IFiatCurrencyAmountData`](#ifiatcurrencyamountdata)

The resulting fiat currency amount

***

### multiplyFiatCurrencyAmountByPrice()

> **multiplyFiatCurrencyAmountByPrice**(`fiatCurrencyAmount`, `price`): `Readonly`\<\{ `amount`: `string`; `token`: [`IToken`](#itoken); \}\> \| `Readonly`\<\{ `amount`: `string`; `fiat`: [`FiatCurrency`](../common/src/README.md#fiatcurrency); \}\>

Multiply a fiat currency amount by a price

#### Parameters

##### fiatCurrencyAmount

[`IFiatCurrencyAmount`](#ifiatcurrencyamount)

The fiat currency amount to multiply

##### price

[`IPrice`](#iprice)

The price to multiply by

#### Returns

`Readonly`\<\{ `amount`: `string`; `token`: [`IToken`](#itoken); \}\> \| `Readonly`\<\{ `amount`: `string`; `fiat`: [`FiatCurrency`](../common/src/README.md#fiatcurrency); \}\>

The resulting fiat currency amount or token amount depending on the price quote

***

### multiplyPriceByPercentage()

> **multiplyPriceByPercentage**(`price`, `percentage`): [`IPriceData`](#ipricedata)

Multiplies a price by a percentage

#### Parameters

##### price

[`IPrice`](#iprice)

The price to multiply

##### percentage

[`IPercentage`](#ipercentage)

The percentage to multiply by

#### Returns

[`IPriceData`](#ipricedata)

The resulting price

***

### multiplyPriceByPrice()

> **multiplyPriceByPrice**(`price`, `multiplier`): [`IPriceData`](#ipricedata)

Multiply a price by another price

#### Parameters

##### price

[`IPrice`](#iprice)

The price to multiply

##### multiplier

[`IPrice`](#iprice)

The price to multiply by

#### Returns

[`IPriceData`](#ipricedata)

The resulting price

***

### multiplyTokenAmountByPercentage()

> **multiplyTokenAmountByPercentage**(`tokenAmount`, `percentage`): [`ITokenAmountData`](#itokenamountdata)

multiplyTokenAmountByPercentage

#### Parameters

##### tokenAmount

[`ITokenAmount`](#itokenamount)

The token amount to multiply

##### percentage

[`IPercentage`](#ipercentage)

The percentage to multiply by

#### Returns

[`ITokenAmountData`](#itokenamountdata)

The resulting token amount

***

### multiplyTokenAmountByPrice()

> **multiplyTokenAmountByPrice**(`tokenAmount`, `price`): `Readonly`\<\{ `amount`: `string`; `token`: [`IToken`](#itoken); \}\> \| `Readonly`\<\{ `amount`: `string`; `fiat`: [`FiatCurrency`](../common/src/README.md#fiatcurrency); \}\>

Multiply a token amount by a price

#### Parameters

##### tokenAmount

[`ITokenAmount`](#itokenamount)

The token amount to multiply

##### price

[`IPrice`](#iprice)

The price to multiply by

#### Returns

`Readonly`\<\{ `amount`: `string`; `token`: [`IToken`](#itoken); \}\> \| `Readonly`\<\{ `amount`: `string`; `fiat`: [`FiatCurrency`](../common/src/README.md#fiatcurrency); \}\>

The resulting token amount or currency amount depending on the price quote

***

### newEmptyPositionFromPool()

> **newEmptyPositionFromPool**(`pool`): [`ILendingPosition`](#ilendingposition)

#### Parameters

##### pool

[`ILendingPoolData`](#ilendingpooldata)

#### Returns

[`ILendingPosition`](#ilendingposition)

***

### repayPositionDebt()

> **repayPositionDebt**(`position`, `amount`): [`ILendingPosition`](#ilendingposition)

#### Parameters

##### position

[`ILendingPosition`](#ilendingposition)

##### amount

[`ITokenAmount`](#itokenamount)

#### Returns

[`ILendingPosition`](#ilendingposition)

***

### toBytes32InHex()

> **toBytes32InHex**(`value`): `` `0x${string}` ``

#### Parameters

##### value

`string`

#### Returns

`` `0x${string}` ``

***

### valuesOfChainFamilyMap()

> **valuesOfChainFamilyMap**(`families`): [`ChainInfo`](#chaininfo-1)[]

#### Parameters

##### families

[`ChainFamilyName`](#chainfamilyname)[]

#### Returns

[`ChainInfo`](#chaininfo-1)[]

***

### withdrawFromPosition()

> **withdrawFromPosition**(`position`, `amount`): [`ILendingPosition`](#ilendingposition)

#### Parameters

##### position

[`ILendingPosition`](#ilendingposition)

##### amount

[`ITokenAmount`](#itokenamount)

#### Returns

[`ILendingPosition`](#ilendingposition)

## References

### AaveV3LendingPosition

Renames and re-exports [AaveV3LendingPoolId](#aavev3lendingpoolid)

***

### AaveV3LendingPositionId

Renames and re-exports [AaveV3LendingPoolId](#aavev3lendingpoolid)

***

### AaveV3Protocol

Renames and re-exports [AaveV3LendingPoolId](#aavev3lendingpoolid)

***

### AddressType

Re-exports [AddressType](../common/src/README.md#addresstype)

***

### ArmadaMigratablePositionApy

Re-exports [ArmadaMigratablePositionApy](../common/src/README.md#armadamigratablepositionapy)

***

### ArmadaMigrationType

Re-exports [ArmadaMigrationType](../common/src/README.md#armadamigrationtype)

***

### ArmadaOperationType

Re-exports [ArmadaOperationType](../common/src/README.md#armadaoperationtype)

***

### BlockchainProviderType

Re-exports [BlockchainProviderType](../common/src/README.md#blockchainprovidertype)

***

### CommonTokenSymbols

Re-exports [CommonTokenSymbols](../common/src/README.md#commontokensymbols)

***

### ContractSpecificRoleName

Re-exports [ContractSpecificRoleName](../common/src/README.md#contractspecificrolename)

***

### EmodeType

Renames and re-exports [AaveV3LendingPoolId](#aavev3lendingpoolid)

***

### FiatCurrency

Re-exports [FiatCurrency](../common/src/README.md#fiatcurrency)

***

### FlashloanProvider

Re-exports [FlashloanProvider](../common/src/README.md#flashloanprovider)

***

### formatTokenAmountHumanReadable

Re-exports [formatTokenAmountHumanReadable](../common/src/README.md#formattokenamounthumanreadable)

***

### GlobalRoles

Re-exports [GlobalRoles](../common/src/README.md#globalroles)

***

### GraphRoleName

Re-exports [GraphRoleName](../common/src/README.md#graphrolename)

***

### HistoricalFleetRateResult

Re-exports [HistoricalFleetRateResult](../common/src/README.md#historicalfleetrateresult)

***

### IAaveV3LendingPoolId

Renames and re-exports [AaveV3LendingPoolId](#aavev3lendingpoolid)

***

### IAaveV3Protocol

Renames and re-exports [AaveV3LendingPoolId](#aavev3lendingpoolid)

***

### IPrintable

Re-exports [IPrintable](../common/src/README.md#iprintable)

***

### isAaveV3LendingPoolId

Renames and re-exports [AaveV3LendingPoolId](#aavev3lendingpoolid)

***

### ITokenStanalone

Renames and re-exports [IToken](#itoken)

***

### LendingPositionType

Re-exports [LendingPositionType](../common/src/README.md#lendingpositiontype)

***

### LoggingService

Re-exports [LoggingService](../common/src/README.md#loggingservice)

***

### Maybe

Re-exports [Maybe](../common/src/README.md#maybe)

***

### OracleProviderType

Re-exports [OracleProviderType](../common/src/README.md#oracleprovidertype)

***

### PoolType

Re-exports [PoolType](../common/src/README.md#pooltype)

***

### PositionType

Re-exports [PositionType](../common/src/README.md#positiontype)

***

### ProtocolName

Re-exports [ProtocolName](../common/src/README.md#protocolname)

***

### QuoteDataStanalone

Renames and re-exports [QuoteData](#quotedata)

***

### Role

Re-exports [Role](../common/src/README.md#role)

***

### SDKErrorType

Re-exports [SDKErrorType](../common/src/README.md#sdkerrortype)

***

### SimulationSteps

Re-exports [SimulationSteps](../common/src/README.md#simulationsteps)

***

### SimulationType

Re-exports [SimulationType](../common/src/README.md#simulationtype)

***

### StakingBucket

Re-exports [StakingBucket](../common/src/README.md#stakingbucket)

***

### StakingStake

Re-exports [StakingStake](../common/src/README.md#stakingstake)

***

### steps

Re-exports [steps](../common/src/namespaces/steps.md)

***

### StrategyStep

Re-exports [StrategyStep](../common/src/README.md#strategystep)

***

### SwapErrorType

Re-exports [SwapErrorType](../common/src/README.md#swaperrortype)

***

### SwapProviderType

Re-exports [SwapProviderType](../common/src/README.md#swapprovidertype)

***

### TokensProviderType

Re-exports [TokensProviderType](../common/src/README.md#tokensprovidertype)

***

### TokenSymbol

Re-exports [TokenSymbol](../common/src/README.md#tokensymbol-1)

***

### TokenTransferTargetType

Re-exports [TokenTransferTargetType](../common/src/README.md#tokentransfertargettype)

***

### TransactionInfo

Re-exports [TransactionInfo](../common/src/README.md#transactioninfo)

***

### ValueReference

Re-exports [ValueReference](../common/src/README.md#valuereference)

***

### VaultApys

Re-exports [VaultApys](../common/src/README.md#vaultapys)

***

### VolatilityProfile

Re-exports [VolatilityProfile](../common/src/README.md#volatilityprofile)

***

### YieldType

Re-exports [YieldType](../common/src/README.md#yieldtype)
