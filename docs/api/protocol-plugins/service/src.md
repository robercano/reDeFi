[**redefi**](../../README.md)

***

[redefi](../../README.md) / protocol-plugins/service/src

# protocol-plugins/service/src

## Enumerations

### EmodeType

EmodeType
Enumerates the efficiency modes of a lending pool

#### Enumeration Members

##### ETHCorrelated

> **ETHCorrelated**: `"ETHCorrelated"`

##### None

> **None**: `"None"`

##### Stablecoins

> **Stablecoins**: `"Stablecoins"`

## Classes

### AaveV3BorrowAction

#### Extends

- [`AaveV3LendingPoolId`](../../client/src.md#aavev3lendingpoolid)\<*typeof* [`Config`](#config)\>

#### Constructors

##### Constructor

> **new AaveV3BorrowAction**(): [`AaveV3BorrowAction`](#aavev3borrowaction)

###### Returns

[`AaveV3BorrowAction`](#aavev3borrowaction)

###### Inherited from

`BaseAction<typeof AaveV3BorrowAction.Config>.constructor`

#### Properties

##### Config

> `readonly` `static` **Config**: `object`

###### name

> `readonly` **name**: `"AaveV3Borrow"` = `'AaveV3Borrow'`

###### parametersAbi

> `readonly` **parametersAbi**: readonly \[`"(address asset, uint256 amount, address to)"`\]

###### storageInputs

> `readonly` **storageInputs**: readonly \[\] = `[]`

###### storageOutputs

> `readonly` **storageOutputs**: readonly \[`"borrowedAmount"`\]

###### version

> `readonly` **version**: `4` = `4`

#### Accessors

##### config

###### Get Signature

> **get** **config**(): `object`

###### Returns

`object`

###### name

> `readonly` **name**: `"AaveV3Borrow"` = `'AaveV3Borrow'`

###### parametersAbi

> `readonly` **parametersAbi**: readonly \[`"(address asset, uint256 amount, address to)"`\]

###### storageInputs

> `readonly` **storageInputs**: readonly \[\] = `[]`

###### storageOutputs

> `readonly` **storageOutputs**: readonly \[`"borrowedAmount"`\]

###### version

> `readonly` **version**: `4` = `4`

#### Methods

##### encodeCall()

> **encodeCall**(`params`, `paramsMapping?`): `ActionCall`

###### Parameters

###### params

###### borrowAmount

[`ITokenAmount`](../../client/src.md#itokenamount)

###### borrowTo

[`IAddress`](../../client/src.md#iaddress)

###### paramsMapping?

`InputSlotsMapping`

###### Returns

`ActionCall`

***

### AaveV3DepositAction

#### Extends

- [`AaveV3LendingPoolId`](../../client/src.md#aavev3lendingpoolid)\<*typeof* [`Config`](#config-2)\>

#### Constructors

##### Constructor

> **new AaveV3DepositAction**(): [`AaveV3DepositAction`](#aavev3depositaction)

###### Returns

[`AaveV3DepositAction`](#aavev3depositaction)

###### Inherited from

`BaseAction<typeof AaveV3DepositAction.Config>.constructor`

#### Properties

##### Config

> `readonly` `static` **Config**: `object`

###### name

> `readonly` **name**: `"AaveV3Deposit"` = `'AaveV3Deposit'`

###### parametersAbi

> `readonly` **parametersAbi**: readonly \[`"(address asset, uint256 amount, bool sumAmounts, bool setAsCollateral)"`\]

###### storageInputs

> `readonly` **storageInputs**: readonly \[`"asset"`, `"amountToDeposit"`\]

###### storageOutputs

> `readonly` **storageOutputs**: readonly \[`"depositedAmount"`\]

###### version

> `readonly` **version**: `0` = `0`

#### Accessors

##### config

###### Get Signature

> **get** **config**(): `object`

###### Returns

`object`

###### name

> `readonly` **name**: `"AaveV3Deposit"` = `'AaveV3Deposit'`

###### parametersAbi

> `readonly` **parametersAbi**: readonly \[`"(address asset, uint256 amount, bool sumAmounts, bool setAsCollateral)"`\]

###### storageInputs

> `readonly` **storageInputs**: readonly \[`"asset"`, `"amountToDeposit"`\]

###### storageOutputs

> `readonly` **storageOutputs**: readonly \[`"depositedAmount"`\]

###### version

> `readonly` **version**: `0` = `0`

#### Methods

##### encodeCall()

> **encodeCall**(`params`, `paramsMapping?`): `ActionCall`

###### Parameters

###### params

###### depositAmount

[`ITokenAmount`](../../client/src.md#itokenamount)

###### setAsCollateral

`boolean`

###### sumAmounts

`boolean`

###### paramsMapping?

`InputSlotsMapping`

###### Returns

`ActionCall`

***

### AaveV3DepositBorrowActionBuilder

#### Extends

- `BaseActionBuilder`\<`steps.DepositBorrowStep`\>

#### Constructors

##### Constructor

> **new AaveV3DepositBorrowActionBuilder**(): [`AaveV3DepositBorrowActionBuilder`](#aavev3depositborrowactionbuilder)

###### Returns

[`AaveV3DepositBorrowActionBuilder`](#aavev3depositborrowactionbuilder)

###### Inherited from

`BaseActionBuilder<steps.DepositBorrowStep>.constructor`

#### Properties

##### actions

> `readonly` **actions**: `ActionBuilderUsedAction`[]

###### See

IActionBuilder.actions

###### Overrides

`BaseActionBuilder.actions`

#### Methods

##### build()

> **build**(`params`): `Promise`\<`void`\>

###### Parameters

###### params

`ActionBuilderParams`\<`DepositBorrowStep`\>

###### Returns

`Promise`\<`void`\>

###### See

IActionBuilder.build

###### Overrides

`BaseActionBuilder.build`

***

### AaveV3LendingPool

AaveV3LendingPool

#### See

IAaveV3LendingPoolData

#### Extends

- [`LendingPool`](../../client/src.md#abstract-lendingpool)

#### Implements

- [`IAaveV3LendingPool`](#iaavev3lendingpool)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

###### Implementation of

[`IAaveV3LendingPool`](#iaavev3lendingpool).[`[___signature__]`](#___signature__-16)

###### Inherited from

[`LendingPool`](../../client/src.md#abstract-lendingpool).[`[___signature__]`](../../client/src.md#___signature__-8)

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

###### Implementation of

`IAaveV3LendingPool.[___signature__]`

###### Inherited from

`LendingPool.[___signature__]`

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

###### Implementation of

`IAaveV3LendingPool.[___signature__]`

###### Inherited from

`LendingPool.[___signature__]`

##### collateralToken

> `readonly` **collateralToken**: [`IToken`](../../client/src.md#itoken)

Collateral token used to collateralized the pool

###### Implementation of

[`IAaveV3LendingPool`](#iaavev3lendingpool).[`collateralToken`](#collateraltoken-2)

###### Inherited from

[`LendingPool`](../../client/src.md#abstract-lendingpool).[`collateralToken`](../../client/src.md#collateraltoken)

##### debtToken

> `readonly` **debtToken**: [`IToken`](../../client/src.md#itoken)

Debt token, which can be borrowed from the pool

###### Implementation of

[`IAaveV3LendingPool`](#iaavev3lendingpool).[`debtToken`](#debttoken-2)

###### Inherited from

[`LendingPool`](../../client/src.md#abstract-lendingpool).[`debtToken`](../../client/src.md#debttoken)

##### id

> `readonly` **id**: [`AaveV3LendingPoolId`](#aavev3lendingpoolid-1)

ATTRIBUTES

###### Implementation of

[`IAaveV3LendingPool`](#iaavev3lendingpool).[`id`](#id-3)

###### Overrides

[`LendingPool`](../../client/src.md#abstract-lendingpool).[`id`](../../client/src.md#id)

##### type

> `readonly` **type**: `Lending` = `PoolType.Lending`

ATTRIBUTES

###### Implementation of

[`IAaveV3LendingPool`](#iaavev3lendingpool).[`type`](#type-4)

###### Inherited from

[`LendingPool`](../../client/src.md#abstract-lendingpool).[`type`](../../client/src.md#type-1)

#### Methods

##### toString()

> **toString**(): `string`

###### Returns

`string`

###### See

IPrintable.toString

###### Implementation of

[`IAaveV3LendingPool`](#iaavev3lendingpool).[`toString`](#tostring-4)

###### Inherited from

[`LendingPool`](../../client/src.md#abstract-lendingpool).[`toString`](../../client/src.md#tostring-5)

##### createFrom()

> `static` **createFrom**(`params`): [`AaveV3LendingPool`](#aavev3lendingpool)

FACTORY

###### Parameters

###### params

[`AaveV3LendingPoolParameters`](#aavev3lendingpoolparameters)

###### Returns

[`AaveV3LendingPool`](#aavev3lendingpool)

***

### AaveV3LendingPoolId

AaveV3LendingPoolId

#### See

IAaveV3LendingPoolId

#### Extends

- [`LendingPoolId`](../../client/src.md#abstract-lendingpoolid)

#### Implements

- [`IAaveV3LendingPoolId`](#iaavev3lendingpoolid-1)
- [`IPrintable`](../../common/src/README.md#iprintable)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

###### Implementation of

[`IAaveV3LendingPoolId`](#iaavev3lendingpoolid-1).[`[___signature__]`](#___signature__-19)

###### Inherited from

[`LendingPoolId`](../../client/src.md#abstract-lendingpoolid).[`[___signature__]`](../../client/src.md#___signature__-10)

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

###### Implementation of

`IAaveV3LendingPoolId.[___signature__]`

###### Inherited from

`LendingPoolId.[___signature__]`

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

###### Implementation of

`IAaveV3LendingPoolId.[___signature__]`

###### Inherited from

`LendingPoolId.[___signature__]`

##### collateralToken

> `readonly` **collateralToken**: [`IToken`](../../client/src.md#itoken)

The token used to collateralized the position

###### Implementation of

[`IAaveV3LendingPoolId`](#iaavev3lendingpoolid-1).[`collateralToken`](#collateraltoken-3)

##### debtToken

> `readonly` **debtToken**: [`IToken`](../../client/src.md#itoken)

The token used to borrow funds

###### Implementation of

[`IAaveV3LendingPoolId`](#iaavev3lendingpoolid-1).[`debtToken`](#debttoken-3)

##### emodeType

> `readonly` **emodeType**: [`EmodeType`](#emodetype)

The pool's efficiency mode

###### Implementation of

[`IAaveV3LendingPoolId`](#iaavev3lendingpoolid-1).[`emodeType`](#emodetype-2)

##### protocol

> `readonly` **protocol**: [`IAaveV3Protocol`](#iaavev3protocol)

ATTRIBUTES

###### Implementation of

[`IAaveV3LendingPoolId`](#iaavev3lendingpoolid-1).[`protocol`](#protocol-1)

###### Overrides

[`LendingPoolId`](../../client/src.md#abstract-lendingpoolid).[`protocol`](../../client/src.md#protocol)

##### type

> `readonly` **type**: `Lending` = `PoolType.Lending`

ATTRIBUTES

###### Implementation of

[`IAaveV3LendingPoolId`](#iaavev3lendingpoolid-1).[`type`](#type-5)

###### Inherited from

[`LendingPoolId`](../../client/src.md#abstract-lendingpoolid).[`type`](../../client/src.md#type-2)

#### Methods

##### toString()

> **toString**(): `string`

###### Returns

`string`

###### See

IPrintable.toString

###### Implementation of

[`IPrintable`](../../common/src/README.md#iprintable).[`toString`](../../common/src/README.md#tostring-29)

###### Overrides

[`LendingPoolId`](../../client/src.md#abstract-lendingpoolid).[`toString`](../../client/src.md#tostring-6)

##### createFrom()

> `static` **createFrom**(`params`): [`AaveV3LendingPoolId`](#aavev3lendingpoolid-1)

FACTORY

###### Parameters

###### params

[`AaveV3LendingPoolIdParameters`](#aavev3lendingpoolidparameters)

###### Returns

[`AaveV3LendingPoolId`](#aavev3lendingpoolid-1)

***

### AaveV3LendingPosition

AaveV3Position

#### See

IAaveV3LendingPosition

#### Extends

- [`LendingPosition`](../../client/src.md#abstract-lendingposition)

#### Implements

- [`IAaveV3LendingPosition`](#iaavev3lendingposition)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

###### Implementation of

[`IAaveV3LendingPosition`](#iaavev3lendingposition).[`[___signature__]`](#___signature__-25)

###### Inherited from

[`LendingPosition`](../../client/src.md#abstract-lendingposition).[`[___signature__]`](../../client/src.md#___signature__-14)

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

###### Implementation of

`IAaveV3LendingPosition.[___signature__]`

###### Inherited from

`LendingPosition.[___signature__]`

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

###### Implementation of

`IAaveV3LendingPosition.[___signature__]`

###### Inherited from

`LendingPosition.[___signature__]`

##### collateralAmount

> `readonly` **collateralAmount**: [`ITokenAmount`](../../client/src.md#itokenamount)

Amount of collateral deposited in the pool

###### Implementation of

[`IAaveV3LendingPosition`](#iaavev3lendingposition).[`collateralAmount`](#collateralamount-1)

###### Inherited from

[`LendingPosition`](../../client/src.md#abstract-lendingposition).[`collateralAmount`](../../client/src.md#collateralamount)

##### debtAmount

> `readonly` **debtAmount**: [`ITokenAmount`](../../client/src.md#itokenamount)

Amount of debt borrowed from the pool

###### Implementation of

[`IAaveV3LendingPosition`](#iaavev3lendingposition).[`debtAmount`](#debtamount-1)

###### Inherited from

[`LendingPosition`](../../client/src.md#abstract-lendingposition).[`debtAmount`](../../client/src.md#debtamount)

##### id

> `readonly` **id**: [`IAaveV3LendingPositionId`](#iaavev3lendingpositionid-1)

The id of the position

###### Implementation of

[`IAaveV3LendingPosition`](#iaavev3lendingposition).[`id`](#id-5)

###### Overrides

[`LendingPosition`](../../client/src.md#abstract-lendingposition).[`id`](../../client/src.md#id-2)

##### pool

> `readonly` **pool**: [`IAaveV3LendingPool`](#iaavev3lendingpool)

ATTRIBUTES

###### Implementation of

[`IAaveV3LendingPosition`](#iaavev3lendingposition).[`pool`](#pool-1)

###### Overrides

[`LendingPosition`](../../client/src.md#abstract-lendingposition).[`pool`](../../client/src.md#pool)

##### subtype

> `readonly` **subtype**: [`LendingPositionType`](../../common/src/README.md#lendingpositiontype)

ATTRIBUTES

###### Implementation of

[`IAaveV3LendingPosition`](#iaavev3lendingposition).[`subtype`](#subtype-1)

###### Inherited from

[`LendingPosition`](../../client/src.md#abstract-lendingposition).[`subtype`](../../client/src.md#subtype)

##### type

> `readonly` **type**: `Lending` = `PositionType.Lending`

ATTRIBUTES

###### Implementation of

[`IAaveV3LendingPosition`](#iaavev3lendingposition).[`type`](#type-7)

###### Inherited from

[`LendingPosition`](../../client/src.md#abstract-lendingposition).[`type`](../../client/src.md#type-4)

#### Methods

##### createFrom()

> `static` **createFrom**(`params`): [`AaveV3LendingPosition`](#aavev3lendingposition)

FACTORY

###### Parameters

###### params

[`AaveV3LendingPositionParameters`](#aavev3lendingpositionparameters)

###### Returns

[`AaveV3LendingPosition`](#aavev3lendingposition)

***

### AaveV3LendingPositionId

AaveV3PositionId

#### See

IAaveV3LendingPositionIdData

#### Extends

- [`LendingPositionId`](../../client/src.md#abstract-lendingpositionid)

#### Implements

- [`IAaveV3LendingPositionId`](#iaavev3lendingpositionid-1)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

###### Implementation of

[`IAaveV3LendingPositionId`](#iaavev3lendingpositionid-1).[`[___signature__]`](#___signature__-28)

###### Inherited from

[`LendingPositionId`](../../client/src.md#abstract-lendingpositionid).[`[___signature__]`](../../client/src.md#___signature__-16)

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

###### Implementation of

`IAaveV3LendingPositionId.[___signature__]`

###### Inherited from

`LendingPositionId.[___signature__]`

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

###### Implementation of

`IAaveV3LendingPositionId.[___signature__]`

###### Inherited from

`LendingPositionId.[___signature__]`

##### id

> `readonly` **id**: `string`

ATTRIBUTES

###### Implementation of

[`IAaveV3LendingPositionId`](#iaavev3lendingpositionid-1).[`id`](#id-6)

###### Inherited from

[`LendingPositionId`](../../client/src.md#abstract-lendingpositionid).[`id`](../../client/src.md#id-3)

##### poolId

> `readonly` **poolId**: [`IAaveV3LendingPoolId`](#iaavev3lendingpoolid-1)

ATTRIBUTES

###### Implementation of

[`IAaveV3LendingPositionId`](#iaavev3lendingpositionid-1).[`poolId`](#poolid-1)

##### type

> `readonly` **type**: `Lending` = `PositionType.Lending`

ATTRIBUTES

###### Implementation of

[`IAaveV3LendingPositionId`](#iaavev3lendingpositionid-1).[`type`](#type-8)

###### Inherited from

[`LendingPositionId`](../../client/src.md#abstract-lendingpositionid).[`type`](../../client/src.md#type-5)

##### walletAddress

> `readonly` **walletAddress**: [`IAddress`](../../client/src.md#iaddress)

The wallet address of the position owner

###### Implementation of

[`IAaveV3LendingPositionId`](#iaavev3lendingpositionid-1).[`walletAddress`](#walletaddress-1)

#### Methods

##### toString()

> **toString**(): `string`

###### Returns

`string`

###### See

IPrintable.toString

###### Inherited from

[`LendingPositionId`](../../client/src.md#abstract-lendingpositionid).[`toString`](../../client/src.md#tostring-8)

##### createFrom()

> `static` **createFrom**(`params`): [`AaveV3LendingPositionId`](#aavev3lendingpositionid-1)

FACTORY

###### Parameters

###### params

[`AaveV3LendingPositionIdParameters`](#aavev3lendingpositionidparameters)

###### Returns

[`AaveV3LendingPositionId`](#aavev3lendingpositionid-1)

***

### AaveV3OpenPositionActionBuilder

#### Extends

- `BaseActionBuilder`\<`steps.OpenPosition`\>

#### Constructors

##### Constructor

> **new AaveV3OpenPositionActionBuilder**(): [`AaveV3OpenPositionActionBuilder`](#aavev3openpositionactionbuilder)

###### Returns

[`AaveV3OpenPositionActionBuilder`](#aavev3openpositionactionbuilder)

###### Inherited from

`BaseActionBuilder<steps.OpenPosition>.constructor`

#### Properties

##### actions

> `readonly` **actions**: `ActionBuilderUsedAction`[]

###### See

IActionBuilder.actions

###### Overrides

`BaseActionBuilder.actions`

#### Methods

##### build()

> **build**(`params`): `Promise`\<`void`\>

###### Parameters

###### params

`ActionBuilderParams`\<`OpenPosition`\>

###### Returns

`Promise`\<`void`\>

###### See

IActionBuilder.build

###### Overrides

`BaseActionBuilder.build`

***

### AaveV3PaybackAction

#### Extends

- [`AaveV3LendingPoolId`](../../client/src.md#aavev3lendingpoolid)\<*typeof* [`Config`](#config-4)\>

#### Constructors

##### Constructor

> **new AaveV3PaybackAction**(): [`AaveV3PaybackAction`](#aavev3paybackaction)

###### Returns

[`AaveV3PaybackAction`](#aavev3paybackaction)

###### Inherited from

`BaseAction<typeof AaveV3PaybackAction.Config>.constructor`

#### Properties

##### Config

> `readonly` `static` **Config**: `object`

###### name

> `readonly` **name**: `"AaveV3Payback"` = `'AaveV3Payback'`

###### parametersAbi

> `readonly` **parametersAbi**: readonly \[`"(address asset, uint256 amount, bool paybackAll, address onBehalf)"`\]

###### storageInputs

> `readonly` **storageInputs**: readonly \[`"asset"`, `"amountToPayback"`\]

###### storageOutputs

> `readonly` **storageOutputs**: readonly \[`"paybackedAmount"`\]

###### version

> `readonly` **version**: `4` = `4`

#### Accessors

##### config

###### Get Signature

> **get** **config**(): `object`

###### Returns

`object`

###### name

> `readonly` **name**: `"AaveV3Payback"` = `'AaveV3Payback'`

###### parametersAbi

> `readonly` **parametersAbi**: readonly \[`"(address asset, uint256 amount, bool paybackAll, address onBehalf)"`\]

###### storageInputs

> `readonly` **storageInputs**: readonly \[`"asset"`, `"amountToPayback"`\]

###### storageOutputs

> `readonly` **storageOutputs**: readonly \[`"paybackedAmount"`\]

###### version

> `readonly` **version**: `4` = `4`

#### Methods

##### encodeCall()

> **encodeCall**(`params`, `paramsMapping?`): `ActionCall`

###### Parameters

###### params

###### onBehalf

[`IAddress`](../../client/src.md#iaddress)

###### paybackAll

`boolean`

###### paybackAmount

[`ITokenAmount`](../../client/src.md#itokenamount)

###### paramsMapping?

`InputSlotsMapping`

###### Returns

`ActionCall`

***

### AaveV3PaybackWithdrawActionBuilder

#### Extends

- `BaseActionBuilder`\<`steps.PaybackWithdrawStep`\>

#### Constructors

##### Constructor

> **new AaveV3PaybackWithdrawActionBuilder**(): [`AaveV3PaybackWithdrawActionBuilder`](#aavev3paybackwithdrawactionbuilder)

###### Returns

[`AaveV3PaybackWithdrawActionBuilder`](#aavev3paybackwithdrawactionbuilder)

###### Inherited from

`BaseActionBuilder<steps.PaybackWithdrawStep>.constructor`

#### Properties

##### actions

> `readonly` **actions**: `ActionBuilderUsedAction`[]

###### See

IActionBuilder.actions

###### Overrides

`BaseActionBuilder.actions`

#### Methods

##### build()

> **build**(`params`): `Promise`\<`void`\>

###### Parameters

###### params

`ActionBuilderParams`\<`PaybackWithdrawStep`\>

###### Returns

`Promise`\<`void`\>

###### See

IActionBuilder.build

###### Overrides

`BaseActionBuilder.build`

***

### AaveV3Protocol

AaveV3Protocol

#### See

IAaveV3ProtocolData

#### Extends

- [`Protocol`](../../client/src.md#abstract-protocol)

#### Implements

- [`IAaveV3Protocol`](#iaavev3protocol)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

###### Implementation of

[`IAaveV3Protocol`](#iaavev3protocol).[`[___signature__]`](#___signature__-30)

###### Inherited from

[`Protocol`](../../client/src.md#abstract-protocol).[`[___signature__]`](../../client/src.md#___signature__-24)

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

SIGNATURE

###### Implementation of

`IAaveV3Protocol.[___signature__]`

###### Inherited from

`Protocol.[___signature__]`

##### chainInfo

> `readonly` **chainInfo**: [`IChainInfo`](../../client/src.md#ichaininfo)

The chain information

###### Implementation of

[`IAaveV3Protocol`](#iaavev3protocol).[`chainInfo`](#chaininfo-1)

###### Inherited from

[`Protocol`](../../client/src.md#abstract-protocol).[`chainInfo`](../../client/src.md#chaininfo-2)

##### name

> `readonly` **name**: `AaveV3` = `ProtocolName.AaveV3`

ATTRIBUTES

###### Implementation of

[`IAaveV3Protocol`](#iaavev3protocol).[`name`](#name-1)

###### Overrides

[`Protocol`](../../client/src.md#abstract-protocol).[`name`](../../client/src.md#name-1)

#### Methods

##### equals()

> **equals**(`protocol`): `boolean`

###### Parameters

###### protocol

[`Protocol`](../../client/src.md#abstract-protocol)

###### Returns

`boolean`

###### See

IProtocol.equals

###### Implementation of

[`IAaveV3Protocol`](#iaavev3protocol).[`equals`](#equals-1)

###### Inherited from

[`Protocol`](../../client/src.md#abstract-protocol).[`equals`](../../client/src.md#equals-2)

##### toString()

> **toString**(): `string`

###### Returns

`string`

###### See

IPrintable.toString

###### Inherited from

[`Protocol`](../../client/src.md#abstract-protocol).[`toString`](../../client/src.md#tostring-14)

##### createFrom()

> `static` **createFrom**(`params`): [`AaveV3Protocol`](#aavev3protocol)

FACTORY

###### Parameters

###### params

[`AaveV3ProtocolParameters`](#aavev3protocolparameters)

###### Returns

[`AaveV3Protocol`](#aavev3protocol)

***

### AaveV3ProtocolPlugin

AaveV3ProtocolPlugin
Aave V3 protocol plugin

#### See

BaseProtocolPlugin

#### Extends

- [`BaseLendingProtocolPlugin`](#abstract-baselendingprotocolplugin)

#### Constructors

##### Constructor

> **new AaveV3ProtocolPlugin**(): [`AaveV3ProtocolPlugin`](#aavev3protocolplugin)

###### Returns

[`AaveV3ProtocolPlugin`](#aavev3protocolplugin)

###### Inherited from

[`BaseLendingProtocolPlugin`](#abstract-baselendingprotocolplugin).[`constructor`](#constructor-9)

#### Properties

##### lending

> `readonly` **lending**: [`AaveV3ProtocolPlugin`](#aavev3protocolplugin)

Feature modules

###### Inherited from

[`BaseLendingProtocolPlugin`](#abstract-baselendingprotocolplugin).[`lending`](#lending-1)

##### protocolName

> `readonly` **protocolName**: `AaveV3` = `ProtocolName.AaveV3`

Name of the protocol that the plugin is implementing

###### Overrides

[`BaseLendingProtocolPlugin`](#abstract-baselendingprotocolplugin).[`protocolName`](#protocolname-1)

##### stake?

> `readonly` `optional` **stake?**: `IStakeProtocolFeatures`

###### Inherited from

[`BaseLendingProtocolPlugin`](#abstract-baselendingprotocolplugin).[`stake`](#stake-1)

##### supportedChains

> `readonly` **supportedChains**: [`ChainInfo`](../../client/src.md#chaininfo-1)[]

List of supported chains for the protocol

###### Overrides

[`BaseLendingProtocolPlugin`](#abstract-baselendingprotocolplugin).[`supportedChains`](#supportedchains-1)

##### yield?

> `readonly` `optional` **yield?**: `IYieldProtocolFeatures`

###### Inherited from

[`BaseLendingProtocolPlugin`](#abstract-baselendingprotocolplugin).[`yield`](#yield-1)

#### Methods

##### \_getLendingPoolImpl()

> **\_getLendingPoolImpl**(`aaveV3PoolId`): `Promise`\<[`AaveV3LendingPool`](#aavev3lendingpool)\>

LENDING POOLS

###### Parameters

###### aaveV3PoolId

[`IAaveV3LendingPoolId`](#iaavev3lendingpoolid-1)

###### Returns

`Promise`\<[`AaveV3LendingPool`](#aavev3lendingpool)\>

###### Overrides

`BaseLendingProtocolPlugin._getLendingPoolImpl`

##### \_getLendingPoolInfoImpl()

> **\_getLendingPoolInfoImpl**(`aaveV3PoolId`): `Promise`\<`AaveV3LendingPoolInfo`\>

getLendingPoolInfoImpl
Gets the lending pool info for the given pool ID

###### Parameters

###### aaveV3PoolId

[`IAaveV3LendingPoolId`](#iaavev3lendingpoolid-1)

###### Returns

`Promise`\<`AaveV3LendingPoolInfo`\>

The lending pool info for the specific protocol

###### Remarks

This method should be implemented by the protocol plugin as the external one is just a wrapper to
validate the input and call this one

###### Overrides

`BaseLendingProtocolPlugin._getLendingPoolInfoImpl`

##### getLendingPool()

> **getLendingPool**(`poolId`): `Promise`\<[`ILendingPool`](../../client/src.md#ilendingpool)\>

###### Parameters

###### poolId

[`ILendingPoolIdData`](../../client/src.md#ilendingpooliddata)

###### Returns

`Promise`\<[`ILendingPool`](../../client/src.md#ilendingpool)\>

###### See

ILendingProtocolFeatures.getLendingPool

###### Inherited from

[`BaseLendingProtocolPlugin`](#abstract-baselendingprotocolplugin).[`getLendingPool`](#getlendingpool-1)

##### getLendingPoolInfo()

> **getLendingPoolInfo**(`poolId`): `Promise`\<[`ILendingPoolInfo`](../../client/src.md#ilendingpoolinfo)\>

###### Parameters

###### poolId

[`ILendingPoolIdData`](../../client/src.md#ilendingpooliddata)

###### Returns

`Promise`\<[`ILendingPoolInfo`](../../client/src.md#ilendingpoolinfo)\>

###### See

ILendingProtocolFeatures.getLendingPoolInfo

###### Inherited from

[`BaseLendingProtocolPlugin`](#abstract-baselendingprotocolplugin).[`getLendingPoolInfo`](#getlendingpoolinfo-1)

##### getLendingPosition()

> **getLendingPosition**(`positionId`): `Promise`\<[`ILendingPosition`](../../client/src.md#ilendingposition)\>

POSITIONS

###### Parameters

###### positionId

[`ILendingPositionId`](../../client/src.md#ilendingpositionid-1)

###### Returns

`Promise`\<[`ILendingPosition`](../../client/src.md#ilendingposition)\>

###### Overrides

[`BaseLendingProtocolPlugin`](#abstract-baselendingprotocolplugin).[`getLendingPosition`](#getlendingposition-1)

##### getSupplyTransaction()

> **getSupplyTransaction**(`params`): `Promise`\<[`TransactionInfo`](../../common/src/README.md#transactioninfo)\>

SUPPLY TRANSACTION

###### Parameters

###### params

###### amount

[`TokenAmount`](../../client/src.md#tokenamount)

###### poolId

[`ILendingPoolIdData`](../../client/src.md#ilendingpooliddata)

###### user

[`IUser`](../../client/src.md#iuser)

###### Returns

`Promise`\<[`TransactionInfo`](../../common/src/README.md#transactioninfo)\>

###### Overrides

[`BaseLendingProtocolPlugin`](#abstract-baselendingprotocolplugin).[`getSupplyTransaction`](#getsupplytransaction-1)

##### initialize()

> **initialize**(`params`): `void`

###### Parameters

###### params

###### context

`IProtocolPluginContext`

###### Returns

`void`

###### See

IProtocolPlugin.initialize

###### Overrides

[`BaseLendingProtocolPlugin`](#abstract-baselendingprotocolplugin).[`initialize`](#initialize-1)

***

### AaveV3SetEmodeAction

#### Extends

- [`AaveV3LendingPoolId`](../../client/src.md#aavev3lendingpoolid)\<*typeof* [`Config`](#config-6)\>

#### Constructors

##### Constructor

> **new AaveV3SetEmodeAction**(): [`AaveV3SetEmodeAction`](#aavev3setemodeaction)

###### Returns

[`AaveV3SetEmodeAction`](#aavev3setemodeaction)

###### Inherited from

`BaseAction<typeof AaveV3SetEmodeAction.Config>.constructor`

#### Properties

##### Config

> `readonly` `static` **Config**: `object`

###### name

> `readonly` **name**: `"AaveV3SetEMode"` = `'AaveV3SetEMode'`

###### parametersAbi

> `readonly` **parametersAbi**: readonly \[`"(uint8 categoryId)"`\]

###### storageInputs

> `readonly` **storageInputs**: readonly \[\] = `[]`

###### storageOutputs

> `readonly` **storageOutputs**: readonly \[`"emodeCategory"`\]

###### version

> `readonly` **version**: `0` = `0`

#### Accessors

##### config

###### Get Signature

> **get** **config**(): `object`

###### Returns

`object`

###### name

> `readonly` **name**: `"AaveV3SetEMode"` = `'AaveV3SetEMode'`

###### parametersAbi

> `readonly` **parametersAbi**: readonly \[`"(uint8 categoryId)"`\]

###### storageInputs

> `readonly` **storageInputs**: readonly \[\] = `[]`

###### storageOutputs

> `readonly` **storageOutputs**: readonly \[`"emodeCategory"`\]

###### version

> `readonly` **version**: `0` = `0`

#### Methods

##### encodeCall()

> **encodeCall**(`params`, `paramsMapping?`): `ActionCall`

###### Parameters

###### params

###### emode

[`EmodeType`](#emodetype)

###### paramsMapping?

`InputSlotsMapping`

###### Returns

`ActionCall`

***

### AaveV3WithdrawAction

#### Extends

- [`AaveV3LendingPoolId`](../../client/src.md#aavev3lendingpoolid)\<*typeof* [`Config`](#config-8)\>

#### Constructors

##### Constructor

> **new AaveV3WithdrawAction**(): [`AaveV3WithdrawAction`](#aavev3withdrawaction)

###### Returns

[`AaveV3WithdrawAction`](#aavev3withdrawaction)

###### Inherited from

`BaseAction<typeof AaveV3WithdrawAction.Config>.constructor`

#### Properties

##### Config

> `readonly` `static` **Config**: `object`

###### name

> `readonly` **name**: `"AaveV3Withdraw"` = `'AaveV3Withdraw'`

###### parametersAbi

> `readonly` **parametersAbi**: readonly \[`"(address asset, uint256 amount, address to)"`\]

###### storageInputs

> `readonly` **storageInputs**: readonly \[\] = `[]`

###### storageOutputs

> `readonly` **storageOutputs**: readonly \[`"withdrawnAmount"`\]

###### version

> `readonly` **version**: `0` = `0`

#### Accessors

##### config

###### Get Signature

> **get** **config**(): `object`

###### Returns

`object`

###### name

> `readonly` **name**: `"AaveV3Withdraw"` = `'AaveV3Withdraw'`

###### parametersAbi

> `readonly` **parametersAbi**: readonly \[`"(address asset, uint256 amount, address to)"`\]

###### storageInputs

> `readonly` **storageInputs**: readonly \[\] = `[]`

###### storageOutputs

> `readonly` **storageOutputs**: readonly \[`"withdrawnAmount"`\]

###### version

> `readonly` **version**: `0` = `0`

#### Methods

##### encodeCall()

> **encodeCall**(`params`, `paramsMapping?`): `ActionCall`

###### Parameters

###### params

###### withdrawAmount

[`ITokenAmount`](../../client/src.md#itokenamount)

###### withdrawTo

[`IAddress`](../../client/src.md#iaddress)

###### paramsMapping?

`InputSlotsMapping`

###### Returns

`ActionCall`

***

### `abstract` BaseLendingProtocolPlugin

BaseLendingProtocolPlugin
Base class for all lending protocol plugins

It provides the lending feature module implementation, setting `lending = this`

#### Extends

- `BaseProtocolPlugin`

#### Extended by

- [`AaveV3ProtocolPlugin`](#aavev3protocolplugin)

#### Implements

- [`AaveV3LendingPoolId`](../../client/src.md#aavev3lendingpoolid)

#### Constructors

##### Constructor

> **new BaseLendingProtocolPlugin**(): [`BaseLendingProtocolPlugin`](#abstract-baselendingprotocolplugin)

###### Returns

[`BaseLendingProtocolPlugin`](#abstract-baselendingprotocolplugin)

###### Inherited from

`BaseProtocolPlugin.constructor`

#### Properties

##### lending

> `readonly` **lending**: [`BaseLendingProtocolPlugin`](#abstract-baselendingprotocolplugin)

Feature modules

###### Overrides

`BaseProtocolPlugin.lending`

##### protocolName

> `abstract` `readonly` **protocolName**: [`ProtocolName`](../../common/src/README.md#protocolname)

Name of the protocol that the plugin is implementing

###### Inherited from

`BaseProtocolPlugin.protocolName`

##### stake?

> `readonly` `optional` **stake?**: `IStakeProtocolFeatures`

###### Inherited from

`BaseProtocolPlugin.stake`

##### supportedChains

> `abstract` `readonly` **supportedChains**: [`ChainInfo`](../../client/src.md#chaininfo-1)[]

List of supported chains for the protocol

###### Inherited from

`BaseProtocolPlugin.supportedChains`

##### yield?

> `readonly` `optional` **yield?**: `IYieldProtocolFeatures`

###### Inherited from

`BaseProtocolPlugin.yield`

#### Methods

##### getLendingPool()

> **getLendingPool**(`poolId`): `Promise`\<[`ILendingPool`](../../client/src.md#ilendingpool)\>

###### Parameters

###### poolId

[`ILendingPoolIdData`](../../client/src.md#ilendingpooliddata)

###### Returns

`Promise`\<[`ILendingPool`](../../client/src.md#ilendingpool)\>

###### See

ILendingProtocolFeatures.getLendingPool

##### getLendingPoolInfo()

> **getLendingPoolInfo**(`poolId`): `Promise`\<[`ILendingPoolInfo`](../../client/src.md#ilendingpoolinfo)\>

###### Parameters

###### poolId

[`ILendingPoolIdData`](../../client/src.md#ilendingpooliddata)

###### Returns

`Promise`\<[`ILendingPoolInfo`](../../client/src.md#ilendingpoolinfo)\>

###### See

ILendingProtocolFeatures.getLendingPoolInfo

##### getLendingPosition()

> `abstract` **getLendingPosition**(`positionId`): `Promise`\<[`ILendingPosition`](../../client/src.md#ilendingposition)\>

###### Parameters

###### positionId

[`ILendingPositionIdData`](../../client/src.md#ilendingpositioniddata)

###### Returns

`Promise`\<[`ILendingPosition`](../../client/src.md#ilendingposition)\>

###### See

ILendingProtocolFeatures.getLendingPosition

##### getSupplyTransaction()

> `abstract` **getSupplyTransaction**(`params`): `Promise`\<[`TransactionInfo`](../../common/src/README.md#transactioninfo)\>

###### Parameters

###### params

###### amount

[`TokenAmount`](../../client/src.md#tokenamount)

###### poolId

[`ILendingPoolIdData`](../../client/src.md#ilendingpooliddata)

###### user

[`IUser`](../../client/src.md#iuser)

###### Returns

`Promise`\<[`TransactionInfo`](../../common/src/README.md#transactioninfo)\>

###### See

ILendingProtocolFeatures.getSupplyTransaction

##### initialize()

> **initialize**(`params`): `void`

###### Parameters

###### params

###### context

`IProtocolPluginContext`

###### Returns

`void`

###### See

IProtocolPlugin.initialize

###### Inherited from

`BaseProtocolPlugin.initialize`

***

### DepositBorrowActionBuilder

#### Extends

- `BaseActionBuilder`\<`steps.DepositBorrowStep`\>

#### Constructors

##### Constructor

> **new DepositBorrowActionBuilder**(): [`DepositBorrowActionBuilder`](#depositborrowactionbuilder)

###### Returns

[`DepositBorrowActionBuilder`](#depositborrowactionbuilder)

###### Inherited from

`BaseActionBuilder<steps.DepositBorrowStep>.constructor`

#### Properties

##### actions

> `readonly` **actions**: `ActionBuilderUsedAction`[]

###### See

IActionBuilder.actions

###### Overrides

`BaseActionBuilder.actions`

#### Methods

##### build()

> **build**(`params`): `Promise`\<`void`\>

###### Parameters

###### params

`ActionBuilderParams`\<`DepositBorrowStep`\>

###### Returns

`Promise`\<`void`\>

###### See

IActionBuilder.build

###### Overrides

`BaseActionBuilder.build`

***

### FlashloanActionBuilder

#### Extends

- `BaseActionBuilder`\<`steps.FlashloanStep`\>

#### Constructors

##### Constructor

> **new FlashloanActionBuilder**(): [`FlashloanActionBuilder`](#flashloanactionbuilder)

###### Returns

[`FlashloanActionBuilder`](#flashloanactionbuilder)

###### Inherited from

`BaseActionBuilder<steps.FlashloanStep>.constructor`

#### Properties

##### actions

> `readonly` **actions**: `ActionBuilderUsedAction`[]

Special case for the declared actions: the flashloan action is indicated here although
it is not used in the builder. This is due to the Flashloan inverstion problem in which
the flashloan action is used when the RepayFlashloan step is built, but for the
strategy definition we need to have the action registered at this moment

###### Overrides

`BaseActionBuilder.actions`

#### Methods

##### build()

> **build**(`params`): `Promise`\<`void`\>

###### Parameters

###### params

`ActionBuilderParams`\<`FlashloanStep`\>

###### Returns

`Promise`\<`void`\>

###### See

IActionBuilder.build

###### Overrides

`BaseActionBuilder.build`

***

### OpenPositionActionBuilder

#### Extends

- `BaseActionBuilder`\<`steps.OpenPosition`\>

#### Constructors

##### Constructor

> **new OpenPositionActionBuilder**(): [`OpenPositionActionBuilder`](#openpositionactionbuilder)

###### Returns

[`OpenPositionActionBuilder`](#openpositionactionbuilder)

###### Inherited from

`BaseActionBuilder<steps.OpenPosition>.constructor`

#### Properties

##### actions

> `readonly` **actions**: `ActionBuilderUsedAction`[]

###### See

IActionBuilder.actions

###### Overrides

`BaseActionBuilder.actions`

#### Methods

##### build()

> **build**(`params`): `Promise`\<`void`\>

###### Parameters

###### params

`ActionBuilderParams`\<`OpenPosition`\>

###### Returns

`Promise`\<`void`\>

###### See

IActionBuilder.build

###### Overrides

`BaseActionBuilder.build`

***

### PaybackWithdrawActionBuilder

#### Extends

- `BaseActionBuilder`\<`steps.PaybackWithdrawStep`\>

#### Constructors

##### Constructor

> **new PaybackWithdrawActionBuilder**(): [`PaybackWithdrawActionBuilder`](#paybackwithdrawactionbuilder)

###### Returns

[`PaybackWithdrawActionBuilder`](#paybackwithdrawactionbuilder)

###### Inherited from

`BaseActionBuilder<steps.PaybackWithdrawStep>.constructor`

#### Properties

##### actions

> `readonly` **actions**: `ActionBuilderUsedAction`[]

###### See

IActionBuilder.actions

###### Overrides

`BaseActionBuilder.actions`

#### Methods

##### build()

> **build**(`params`): `Promise`\<`void`\>

###### Parameters

###### params

`ActionBuilderParams`\<`PaybackWithdrawStep`\>

###### Returns

`Promise`\<`void`\>

###### See

IActionBuilder.build

###### Overrides

`BaseActionBuilder.build`

***

### ProtocolPluginsRegistry

ProtocolPluginsRegistry
Registry of protocol plugins that can be used to interact with the protocols

#### Implements

- [`AaveV3LendingPoolId`](../../client/src.md#aavev3lendingpoolid)

#### Constructors

##### Constructor

> **new ProtocolPluginsRegistry**(`params`): [`ProtocolPluginsRegistry`](#protocolpluginsregistry)

###### Parameters

###### params

###### context

`IProtocolPluginContext`

###### plugins

[`ProtocolPluginsRecordType`](#protocolpluginsrecordtype)

###### Returns

[`ProtocolPluginsRegistry`](#protocolpluginsregistry)

#### Properties

##### context

> `readonly` **context**: `IProtocolPluginContext`

##### plugins

> `readonly` **plugins**: [`ProtocolPluginsRecordType`](#protocolpluginsrecordtype)

#### Methods

##### getPlugin()

> **getPlugin**(`params`): `IProtocolPlugin`

getPlugin
Returns a plugin instance for the specified protocol

###### Parameters

###### params

###### protocolName

[`ProtocolName`](../../common/src/README.md#protocolname)

The name of the protocol to get the plugin for

###### Returns

`IProtocolPlugin`

The plugin instance for the specified protocol

***

### PullTokenActionBuilder

#### Extends

- `BaseActionBuilder`\<`steps.PullTokenStep`\>

#### Constructors

##### Constructor

> **new PullTokenActionBuilder**(): [`PullTokenActionBuilder`](#pulltokenactionbuilder)

###### Returns

[`PullTokenActionBuilder`](#pulltokenactionbuilder)

###### Inherited from

`BaseActionBuilder<steps.PullTokenStep>.constructor`

#### Properties

##### actions

> `readonly` **actions**: `ActionBuilderUsedAction`[]

###### See

IActionBuilder.actions

###### Overrides

`BaseActionBuilder.actions`

#### Methods

##### build()

> **build**(`params`): `Promise`\<`void`\>

###### Parameters

###### params

`ActionBuilderParams`\<`PullTokenStep`\>

###### Returns

`Promise`\<`void`\>

###### See

IActionBuilder.build

###### Overrides

`BaseActionBuilder.build`

***

### RepayFlashloanActionBuilder

#### Extends

- `BaseActionBuilder`\<`steps.RepayFlashloanStep`\>

#### Constructors

##### Constructor

> **new RepayFlashloanActionBuilder**(): [`RepayFlashloanActionBuilder`](#repayflashloanactionbuilder)

###### Returns

[`RepayFlashloanActionBuilder`](#repayflashloanactionbuilder)

###### Inherited from

`BaseActionBuilder<steps.RepayFlashloanStep>.constructor`

#### Properties

##### actions

> `readonly` **actions**: `ActionBuilderUsedAction`[]

Special case for this action builder: the Flashloan action is not declared in the list of used
actions as it was already declared in the FlashloanActionBuilder. This is due to the Flashloan
inversion problem in which the flashloan action is used when the RepayFlashloan step is built,
but for the strategy definition we need to have the action registered at the Flashloan builder moment

###### Overrides

`BaseActionBuilder.actions`

#### Methods

##### build()

> **build**(`params`): `Promise`\<`void`\>

###### Parameters

###### params

`ActionBuilderParams`\<`RepayFlashloanStep`\>

###### Returns

`Promise`\<`void`\>

###### See

IActionBuilder.build

###### Overrides

`BaseActionBuilder.build`

***

### ReturnFundsActionBuilder

#### Extends

- `BaseActionBuilder`\<[`ReturnFundsStep`](../../common/src/namespaces/steps.md#returnfundsstep)\>

#### Constructors

##### Constructor

> **new ReturnFundsActionBuilder**(): [`ReturnFundsActionBuilder`](#returnfundsactionbuilder)

###### Returns

[`ReturnFundsActionBuilder`](#returnfundsactionbuilder)

###### Inherited from

`BaseActionBuilder<steps.ReturnFundsStep>.constructor`

#### Properties

##### actions

> `readonly` **actions**: `ActionBuilderUsedAction`[]

###### See

IActionBuilder.actions

###### Overrides

`BaseActionBuilder.actions`

#### Methods

##### build()

> **build**(`params`): `Promise`\<`void`\>

###### Parameters

###### params

`ActionBuilderParams`\<[`ReturnFundsStep`](../../common/src/namespaces/steps.md#returnfundsstep)\>

###### Returns

`Promise`\<`void`\>

###### See

IActionBuilder.build

###### Overrides

`BaseActionBuilder.build`

***

### SwapActionBuilder

#### Extends

- `BaseActionBuilder`\<`steps.SwapStep`\>

#### Constructors

##### Constructor

> **new SwapActionBuilder**(): [`SwapActionBuilder`](#swapactionbuilder)

###### Returns

[`SwapActionBuilder`](#swapactionbuilder)

###### Inherited from

`BaseActionBuilder<steps.SwapStep>.constructor`

#### Properties

##### actions

> `readonly` **actions**: `ActionBuilderUsedAction`[]

###### See

IActionBuilder.actions

###### Overrides

`BaseActionBuilder.actions`

#### Methods

##### build()

> **build**(`params`): `Promise`\<`void`\>

###### Parameters

###### params

`ActionBuilderParams`\<`SwapStep`\>

###### Returns

`Promise`\<`void`\>

###### See

IActionBuilder.build

###### Overrides

`BaseActionBuilder.build`

## Interfaces

### IAaveV3LendingPool

IAaveV3LendingPool
Represents a lending pool in the Aave V3 protocol

#### Extends

- [`ILendingPool`](../../client/src.md#ilendingpool).[`IAaveV3LendingPoolData`](#iaavev3lendingpooldata)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature used to differentiate it from similar interfaces

###### Inherited from

[`ILendingPool`](../../client/src.md#ilendingpool).[`[___signature__]`](../../client/src.md#___signature__-46)

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

###### Inherited from

`ILendingPool.[___signature__]`

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

###### Inherited from

`ILendingPool.[___signature__]`

##### collateralToken

> `readonly` **collateralToken**: [`IToken`](../../client/src.md#itoken)

Collateral token used to collateralized the pool

###### Inherited from

[`ILendingPool`](../../client/src.md#ilendingpool).[`collateralToken`](../../client/src.md#collateraltoken-1)

##### debtToken

> `readonly` **debtToken**: [`IToken`](../../client/src.md#itoken)

Debt token, which can be borrowed from the pool

###### Inherited from

[`ILendingPool`](../../client/src.md#ilendingpool).[`debtToken`](../../client/src.md#debttoken-1)

##### id

> `readonly` **id**: [`IAaveV3LendingPoolId`](#iaavev3lendingpoolid-1)

The lending pool's ID

###### Overrides

[`ILendingPool`](../../client/src.md#ilendingpool).[`id`](../../client/src.md#id-8)

##### type

> `readonly` **type**: `Lending`

Type of the pool

###### Inherited from

[`ILendingPool`](../../client/src.md#ilendingpool).[`type`](../../client/src.md#type-16)

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

[`ILendingPool`](../../client/src.md#ilendingpool).[`toString`](../../client/src.md#tostring-26)

***

### IAaveV3LendingPoolId

IAaveV3LendingPoolId
Identifier of a lending pool on the Aave v3 protocol

Typescript forces the interface to re-declare any properties that have different BUT compatible types.
This may be fixed eventually, there is a discussion on the topic here: https://github.com/microsoft/TypeScript/issues/16936

#### Extends

- [`ILendingPoolId`](../../client/src.md#ilendingpoolid-1).[`IAaveV3LendingPoolIdData`](#iaavev3lendingpooliddata)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Interface signature used to differentiate it from similar interfaces

###### Inherited from

[`ILendingPoolId`](../../client/src.md#ilendingpoolid-1).[`[___signature__]`](../../client/src.md#___signature__-48)

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate it from other interfaces

###### Inherited from

`ILendingPoolId.[___signature__]`

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

###### Inherited from

`ILendingPoolId.[___signature__]`

##### collateralToken

> `readonly` **collateralToken**: [`IToken`](../../client/src.md#itoken)

The token used to collateralized the position

###### Overrides

`IAaveV3LendingPoolIdData.collateralToken`

##### debtToken

> `readonly` **debtToken**: [`IToken`](../../client/src.md#itoken)

The token used to borrow funds

###### Overrides

`IAaveV3LendingPoolIdData.debtToken`

##### emodeType

> `readonly` **emodeType**: [`EmodeType`](#emodetype)

The pool's efficiency mode

###### Overrides

`IAaveV3LendingPoolIdData.emodeType`

##### protocol

> `readonly` **protocol**: [`IAaveV3Protocol`](#iaavev3protocol)

Aave v3 protocol

###### Overrides

[`ILendingPoolId`](../../client/src.md#ilendingpoolid-1).[`protocol`](../../client/src.md#protocol-2)

##### type

> `readonly` **type**: `Lending`

Pool type

###### Inherited from

[`ILendingPoolId`](../../client/src.md#ilendingpoolid-1).[`type`](../../client/src.md#type-17)

***

### IAaveV3LendingPoolInfo

IAaveV3LendingPoolInfo
Represents a lending pool info in the Aave V3 protocol

Typescript forces the interface to re-declare any properties that have different BUT compatible types.
This may be fixed eventually, there is a discussion on the topic here: https://github.com/microsoft/TypeScript/issues/16936

#### Extends

- [`ILendingPoolInfo`](../../client/src.md#ilendingpoolinfo).[`IAaveV3LendingPoolInfoData`](#iaavev3lendingpoolinfodata)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature used to differentiate it from similar interfaces

###### Inherited from

[`ILendingPoolInfo`](../../client/src.md#ilendingpoolinfo).[`[___signature__]`](../../client/src.md#___signature__-50)

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

###### Inherited from

`ILendingPoolInfo.[___signature__]`

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

###### Inherited from

`ILendingPoolInfo.[___signature__]`

##### collateral

> `readonly` **collateral**: [`ICollateralInfo`](../../client/src.md#icollateralinfo)

The collateral information of the pool

###### Inherited from

[`ILendingPoolInfo`](../../client/src.md#ilendingpoolinfo).[`collateral`](../../client/src.md#collateral-1)

##### debt

> `readonly` **debt**: [`IDebtInfo`](../../client/src.md#idebtinfo)

The debt information of the pool

###### Inherited from

[`ILendingPoolInfo`](../../client/src.md#ilendingpoolinfo).[`debt`](../../client/src.md#debt-1)

##### id

> `readonly` **id**: [`IAaveV3LendingPoolId`](#iaavev3lendingpoolid-1)

The lending pool's ID

###### Overrides

[`ILendingPoolInfo`](../../client/src.md#ilendingpoolinfo).[`id`](../../client/src.md#id-9)

##### type

> `readonly` **type**: `Lending`

Type of the pool

###### Inherited from

[`ILendingPoolInfo`](../../client/src.md#ilendingpoolinfo).[`type`](../../client/src.md#type-18)

***

### IAaveV3LendingPosition

IAaveV3LendingPosition
Represents a lending position in the Aave V3 protocol

Typescript forces the interface to re-declare any properties that have different BUT compatible types.
This may be fixed eventually, there is a discussion on the topic here: https://github.com/microsoft/TypeScript/issues/16936

#### Extends

- [`ILendingPosition`](../../client/src.md#ilendingposition).[`IAaveV3LendingPositionData`](#iaavev3lendingpositiondata)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature used to differentiate it from similar interfaces

###### Inherited from

[`ILendingPosition`](../../client/src.md#ilendingposition).[`[___signature__]`](../../client/src.md#___signature__-52)

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

###### Inherited from

`ILendingPosition.[___signature__]`

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

###### Inherited from

`ILendingPosition.[___signature__]`

##### collateralAmount

> `readonly` **collateralAmount**: [`ITokenAmount`](../../client/src.md#itokenamount)

Amount of collateral deposited in the pool

###### Inherited from

[`ILendingPosition`](../../client/src.md#ilendingposition).[`collateralAmount`](../../client/src.md#collateralamount-1)

##### debtAmount

> `readonly` **debtAmount**: [`ITokenAmount`](../../client/src.md#itokenamount)

Amount of debt borrowed from the pool

###### Inherited from

[`ILendingPosition`](../../client/src.md#ilendingposition).[`debtAmount`](../../client/src.md#debtamount-1)

##### id

> `readonly` **id**: [`IAaveV3LendingPositionId`](#iaavev3lendingpositionid-1)

The id of the position

###### Overrides

[`ILendingPosition`](../../client/src.md#ilendingposition).[`id`](../../client/src.md#id-10)

##### pool

> `readonly` **pool**: [`IAaveV3LendingPool`](#iaavev3lendingpool)

The pool associated to this position

###### Overrides

[`ILendingPosition`](../../client/src.md#ilendingposition).[`pool`](../../client/src.md#pool-2)

##### subtype

> `readonly` **subtype**: [`LendingPositionType`](../../common/src/README.md#lendingpositiontype)

Subtype of the position in the Lending protocol

###### Overrides

[`ILendingPosition`](../../client/src.md#ilendingposition).[`subtype`](../../client/src.md#subtype-2)

##### type

> `readonly` **type**: `Lending`

Type of the position

###### Inherited from

[`ILendingPosition`](../../client/src.md#ilendingposition).[`type`](../../client/src.md#type-19)

***

### IAaveV3LendingPositionId

IAaveV3LendingPositionId
ID for a position on Aave V3 protocols

This interface is used to add all the methods that the interface supports

#### Extends

- [`ILendingPositionId`](../../client/src.md#ilendingpositionid-1).[`IAaveV3LendingPositionIdData`](#iaavev3lendingpositioniddata)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature used to differentiate it from similar interfaces

###### Inherited from

[`ILendingPositionId`](../../client/src.md#ilendingpositionid-1).[`[___signature__]`](../../client/src.md#___signature__-54)

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

###### Inherited from

`ILendingPositionId.[___signature__]`

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature to differentiate from similar interfaces

###### Inherited from

`ILendingPositionId.[___signature__]`

##### id

> `readonly` **id**: `string`

###### Inherited from

[`ILendingPositionId`](../../client/src.md#ilendingpositionid-1).[`id`](../../client/src.md#id-11)

##### poolId

> `readonly` **poolId**: [`IAaveV3LendingPoolId`](#iaavev3lendingpoolid-1)

The pool ID associated with this position

###### Overrides

`IAaveV3LendingPositionIdData.poolId`

##### type

> `readonly` **type**: `Lending`

Type of the position

###### Inherited from

[`ILendingPositionId`](../../client/src.md#ilendingpositionid-1).[`type`](../../client/src.md#type-20)

##### walletAddress

> `readonly` **walletAddress**: [`IAddress`](../../client/src.md#iaddress)

The wallet address of the position owner

###### Overrides

`IAaveV3LendingPositionIdData.walletAddress`

***

### IAaveV3Protocol

IAaveV3Protocol
Identifier of the Aave V3 protocol

Typescript forces the interface to re-declare any properties that have different BUT compatible types.
This may be fixed eventually, there is a discussion on the topic here: https://github.com/microsoft/TypeScript/issues/16936

#### Extends

- [`IProtocol`](../../client/src.md#iprotocol).[`IAaveV3ProtocolData`](#iaavev3protocoldata)

#### Properties

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Interface signature used to differentiate it from similar interfaces

###### Inherited from

[`IProtocol`](../../client/src.md#iprotocol).[`[___signature__]`](../../client/src.md#___signature__-63)

##### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol`

Signature used to differentiate it from similar interfaces

###### Inherited from

`IProtocol.[___signature__]`

##### chainInfo

> `readonly` **chainInfo**: [`IChainInfo`](../../client/src.md#ichaininfo)

The chain information

###### Inherited from

[`IProtocol`](../../client/src.md#iprotocol).[`chainInfo`](../../client/src.md#chaininfo-7)

##### name

> `readonly` **name**: `AaveV3`

The name of the protocol

###### Overrides

[`IProtocol`](../../client/src.md#iprotocol).[`name`](../../client/src.md#name-8)

#### Methods

##### equals()

> **equals**(`protocol`): `boolean`

Compare if the passed protocol is equal to the current protocol

###### Parameters

###### protocol

[`IProtocol`](../../client/src.md#iprotocol)

The protocol to compare

###### Returns

`boolean`

true if the protocols are equal

Equality is determined by the name and chain information

###### Inherited from

[`IProtocol`](../../client/src.md#iprotocol).[`equals`](../../client/src.md#equals-9)

## Type Aliases

### AaveV3LendingPoolIdParameters

> **AaveV3LendingPoolIdParameters** = `Omit`\<[`IAaveV3LendingPoolIdData`](#iaavev3lendingpooliddata), `"type"`\>

Type for the parameters of AaveV3LendingPoolId

***

### AaveV3LendingPoolParameters

> **AaveV3LendingPoolParameters** = `Omit`\<[`IAaveV3LendingPoolData`](#iaavev3lendingpooldata), `"type"`\>

Type for the parameters of AaveV3LendingPool

***

### AaveV3LendingPositionIdParameters

> **AaveV3LendingPositionIdParameters** = `Omit`\<[`IAaveV3LendingPositionIdData`](#iaavev3lendingpositioniddata), `"type"`\>

Type for the parameters of AaveV3PositionId

***

### AaveV3LendingPositionParameters

> **AaveV3LendingPositionParameters** = `Omit`\<[`IAaveV3LendingPositionData`](#iaavev3lendingpositiondata), `"type"`\>

Type for the parameters of AaveV3Position

***

### AaveV3ProtocolParameters

> **AaveV3ProtocolParameters** = `Omit`\<[`IAaveV3ProtocolData`](#iaavev3protocoldata), `"name"`\>

Type for the parameters of AaveV3Protocol

***

### IAaveV3LendingPoolData

> **IAaveV3LendingPoolData** = `Readonly`\<`z.infer`\<*typeof* [`AaveV3LendingPoolDataSchema`](#aavev3lendingpooldataschema)\>\>

Type for the data part of IAaveV3LendingPool

***

### IAaveV3LendingPoolIdData

> **IAaveV3LendingPoolIdData** = `Readonly`\<`z.infer`\<*typeof* [`AaveV3LendingPoolIdDataSchema`](#aavev3lendingpooliddataschema)\>\>

Type for the data part of IAaveV3LendingPoolId

***

### IAaveV3LendingPoolInfoData

> **IAaveV3LendingPoolInfoData** = `Readonly`\<`z.infer`\<*typeof* [`AaveV3LendingPoolInfoDataSchema`](#aavev3lendingpoolinfodataschema)\>\>

Type for the data part of IAaveV3LendingPool

***

### IAaveV3LendingPositionData

> **IAaveV3LendingPositionData** = `Readonly`\<`z.infer`\<*typeof* [`AaveV3LendingPositionDataSchema`](#aavev3lendingpositiondataschema)\>\>

Type for the data part of the IAaveV3Position interface

***

### IAaveV3LendingPositionIdData

> **IAaveV3LendingPositionIdData** = `Readonly`\<`z.infer`\<*typeof* [`AaveV3PositionIdDataSchema`](#aavev3positioniddataschema)\>\>

Type for the data part of IAaveV3LendingPositionId

***

### IAaveV3ProtocolData

> **IAaveV3ProtocolData** = `Readonly`\<`z.infer`\<*typeof* [`AaveV3ProtocolDataSchema`](#aavev3protocoldataschema)\>\>

Type for the data part of IAaveV3Protocol

***

### ProtocolPluginConstructor

> **ProtocolPluginConstructor** = () => [`AaveV3LendingPoolId`](../../client/src.md#aavev3lendingpoolid)

#### Returns

[`AaveV3LendingPoolId`](../../client/src.md#aavev3lendingpoolid)

***

### ProtocolPluginsRecordType

> **ProtocolPluginsRecordType** = `Partial`\<`Record`\<[`ProtocolName`](../../common/src/README.md#protocolname), [`ProtocolPluginConstructor`](#protocolpluginconstructor)\>\>

## Variables

### aaveV3EmodeCategoryMap

> `const` **aaveV3EmodeCategoryMap**: `Record`\<[`EmodeType`](#emodetype), `number`\>

***

### AaveV3LendingPoolDataSchema

> `const` **AaveV3LendingPoolDataSchema**: `ZodObject`\<\{ `collateralToken`: `ZodType`\<[`IToken`](../../client/src.md#itoken), `ZodTypeDef`, [`IToken`](../../client/src.md#itoken)\>; `debtToken`: `ZodType`\<[`IToken`](../../client/src.md#itoken), `ZodTypeDef`, [`IToken`](../../client/src.md#itoken)\>; `id`: `ZodType`\<[`IAaveV3LendingPoolId`](#iaavev3lendingpoolid-1), `ZodTypeDef`, [`IAaveV3LendingPoolId`](#iaavev3lendingpoolid-1)\>; `type`: `ZodLiteral`\<`Lending`\>; \}, `"strip"`, `ZodTypeAny`, \{ `collateralToken?`: [`IToken`](../../client/src.md#itoken); `debtToken?`: [`IToken`](../../client/src.md#itoken); `id?`: [`IAaveV3LendingPoolId`](#iaavev3lendingpoolid-1); `type?`: `Lending`; \}, \{ `collateralToken?`: [`IToken`](../../client/src.md#itoken); `debtToken?`: [`IToken`](../../client/src.md#itoken); `id?`: [`IAaveV3LendingPoolId`](#iaavev3lendingpoolid-1); `type?`: `Lending`; \}\>

Zod schema for IAaveV3LendingPool

***

### AaveV3LendingPoolIdDataSchema

> `const` **AaveV3LendingPoolIdDataSchema**: `ZodObject`\<\{ `collateralToken`: `ZodType`\<[`IToken`](../../client/src.md#itoken), `ZodTypeDef`, [`IToken`](../../client/src.md#itoken)\>; `debtToken`: `ZodType`\<[`IToken`](../../client/src.md#itoken), `ZodTypeDef`, [`IToken`](../../client/src.md#itoken)\>; `emodeType`: `ZodNativeEnum`\<*typeof* [`EmodeType`](#emodetype)\>; `protocol`: `ZodType`\<[`IAaveV3Protocol`](#iaavev3protocol), `ZodTypeDef`, [`IAaveV3Protocol`](#iaavev3protocol)\>; `type`: `ZodLiteral`\<`Lending`\>; \}, `"strip"`, `ZodTypeAny`, \{ `collateralToken?`: [`IToken`](../../client/src.md#itoken); `debtToken?`: [`IToken`](../../client/src.md#itoken); `emodeType?`: [`EmodeType`](#emodetype); `protocol?`: [`IAaveV3Protocol`](#iaavev3protocol); `type?`: `Lending`; \}, \{ `collateralToken?`: [`IToken`](../../client/src.md#itoken); `debtToken?`: [`IToken`](../../client/src.md#itoken); `emodeType?`: [`EmodeType`](#emodetype); `protocol?`: [`IAaveV3Protocol`](#iaavev3protocol); `type?`: `Lending`; \}\>

Zod schema for IAaveV3LendingPoolId

***

### AaveV3LendingPoolInfoDataSchema

> `const` **AaveV3LendingPoolInfoDataSchema**: `ZodObject`\<\{ `collateral`: `ZodType`\<[`ICollateralInfo`](../../client/src.md#icollateralinfo), `ZodTypeDef`, [`ICollateralInfo`](../../client/src.md#icollateralinfo)\>; `debt`: `ZodType`\<[`IDebtInfo`](../../client/src.md#idebtinfo), `ZodTypeDef`, [`IDebtInfo`](../../client/src.md#idebtinfo)\>; `id`: `ZodType`\<[`IAaveV3LendingPoolId`](#iaavev3lendingpoolid-1), `ZodTypeDef`, [`IAaveV3LendingPoolId`](#iaavev3lendingpoolid-1)\>; `type`: `ZodLiteral`\<`Lending`\>; \}, `"strip"`, `ZodTypeAny`, \{ `collateral?`: [`ICollateralInfo`](../../client/src.md#icollateralinfo); `debt?`: [`IDebtInfo`](../../client/src.md#idebtinfo); `id?`: [`IAaveV3LendingPoolId`](#iaavev3lendingpoolid-1); `type?`: `Lending`; \}, \{ `collateral?`: [`ICollateralInfo`](../../client/src.md#icollateralinfo); `debt?`: [`IDebtInfo`](../../client/src.md#idebtinfo); `id?`: [`IAaveV3LendingPoolId`](#iaavev3lendingpoolid-1); `type?`: `Lending`; \}\>

Zod schema for IAaveV3LendingPool

***

### AaveV3LendingPositionDataSchema

> `const` **AaveV3LendingPositionDataSchema**: `ZodObject`\<\{ `collateralAmount`: `ZodType`\<[`ITokenAmount`](../../client/src.md#itokenamount), `ZodTypeDef`, [`ITokenAmount`](../../client/src.md#itokenamount)\>; `debtAmount`: `ZodType`\<[`ITokenAmount`](../../client/src.md#itokenamount), `ZodTypeDef`, [`ITokenAmount`](../../client/src.md#itokenamount)\>; `id`: `ZodType`\<[`IAaveV3LendingPositionId`](#iaavev3lendingpositionid-1), `ZodTypeDef`, [`IAaveV3LendingPositionId`](#iaavev3lendingpositionid-1)\>; `pool`: `ZodType`\<[`IAaveV3LendingPool`](#iaavev3lendingpool), `ZodTypeDef`, [`IAaveV3LendingPool`](#iaavev3lendingpool)\>; `subtype`: `ZodNativeEnum`\<*typeof* [`LendingPositionType`](../../common/src/README.md#lendingpositiontype)\>; `type`: `ZodLiteral`\<`Lending`\>; \}, `"strip"`, `ZodTypeAny`, \{ `collateralAmount?`: [`ITokenAmount`](../../client/src.md#itokenamount); `debtAmount?`: [`ITokenAmount`](../../client/src.md#itokenamount); `id?`: [`IAaveV3LendingPositionId`](#iaavev3lendingpositionid-1); `pool?`: [`IAaveV3LendingPool`](#iaavev3lendingpool); `subtype?`: [`LendingPositionType`](../../common/src/README.md#lendingpositiontype); `type?`: `Lending`; \}, \{ `collateralAmount?`: [`ITokenAmount`](../../client/src.md#itokenamount); `debtAmount?`: [`ITokenAmount`](../../client/src.md#itokenamount); `id?`: [`IAaveV3LendingPositionId`](#iaavev3lendingpositionid-1); `pool?`: [`IAaveV3LendingPool`](#iaavev3lendingpool); `subtype?`: [`LendingPositionType`](../../common/src/README.md#lendingpositiontype); `type?`: `Lending`; \}\>

Zod schema for IAaveV3PositionId

***

### AaveV3PositionIdDataSchema

> `const` **AaveV3PositionIdDataSchema**: `ZodObject`\<\{ `id`: `ZodString`; `poolId`: `ZodType`\<[`IAaveV3LendingPoolId`](#iaavev3lendingpoolid-1), `ZodTypeDef`, [`IAaveV3LendingPoolId`](#iaavev3lendingpoolid-1)\>; `type`: `ZodLiteral`\<`Lending`\>; `walletAddress`: `ZodType`\<[`IAddress`](../../client/src.md#iaddress), `ZodTypeDef`, [`IAddress`](../../client/src.md#iaddress)\>; \}, `"strip"`, `ZodTypeAny`, \{ `id?`: `string`; `poolId?`: [`IAaveV3LendingPoolId`](#iaavev3lendingpoolid-1); `type?`: `Lending`; `walletAddress?`: [`IAddress`](../../client/src.md#iaddress); \}, \{ `id?`: `string`; `poolId?`: [`IAaveV3LendingPoolId`](#iaavev3lendingpoolid-1); `type?`: `Lending`; `walletAddress?`: [`IAddress`](../../client/src.md#iaddress); \}\>

Zod schema for IAaveV3LendingPositionId

***

### AaveV3ProtocolDataSchema

> `const` **AaveV3ProtocolDataSchema**: `ZodObject`\<\{ `chainInfo`: `ZodType`\<[`IChainInfo`](../../client/src.md#ichaininfo), `ZodTypeDef`, [`IChainInfo`](../../client/src.md#ichaininfo)\>; `name`: `ZodLiteral`\<`AaveV3`\>; \}, `"strip"`, `ZodTypeAny`, \{ `chainInfo?`: [`IChainInfo`](../../client/src.md#ichaininfo); `name?`: `AaveV3`; \}, \{ `chainInfo?`: [`IChainInfo`](../../client/src.md#ichaininfo); `name?`: `AaveV3`; \}\>

Zod schema for IAaveV3Protocol

***

### EmodeTypeSchema

> `const` **EmodeTypeSchema**: `ZodNativeEnum`\<*typeof* [`EmodeType`](#emodetype)\>

Zod schema for EmodeType

***

### ProtocolPluginsRecord

> `const` **ProtocolPluginsRecord**: [`ProtocolPluginsRecordType`](#protocolpluginsrecordtype)

Protocol plugins record

Note: add here the plugins you want to use in the SDK

## Functions

### isAaveV3LendingPool()

> **isAaveV3LendingPool**(`maybeLendingPool`): `maybeLendingPool is IAaveV3LendingPool`

Type guard for IAaveV3LendingPool

#### Parameters

##### maybeLendingPool

`unknown`

#### Returns

`maybeLendingPool is IAaveV3LendingPool`

true if the object is an IAaveV3LendingPool

***

### isAaveV3LendingPoolId()

> **isAaveV3LendingPoolId**(`maybePoolId`): `maybePoolId is IAaveV3LendingPoolId`

Type guard for IAaveV3LendingPoolId

#### Parameters

##### maybePoolId

`unknown`

#### Returns

`maybePoolId is IAaveV3LendingPoolId`

true if the object is an IAaveV3LendingPoolId

***

### isAaveV3LendingPoolInfo()

> **isAaveV3LendingPoolInfo**(`maybeLendingPoolInfo`): `maybeLendingPoolInfo is IAaveV3LendingPoolInfo`

Type guard for IAaveV3LendingPoolInfo

#### Parameters

##### maybeLendingPoolInfo

`unknown`

#### Returns

`maybeLendingPoolInfo is IAaveV3LendingPoolInfo`

true if the object is an IAaveV3LendingPoolInfo

***

### isAaveV3LendingPosition()

> **isAaveV3LendingPosition**(`maybePosition`): `maybePosition is IAaveV3LendingPosition`

Type guard for IAaveV3Position

#### Parameters

##### maybePosition

`unknown`

#### Returns

`maybePosition is IAaveV3LendingPosition`

true if the object is an IAaveV3Position

***

### isAaveV3LendingPositionId()

> **isAaveV3LendingPositionId**(`maybePositionId`): `maybePositionId is IAaveV3LendingPositionId`

Type guard for IAaveV3LendingPositionId

#### Parameters

##### maybePositionId

`unknown`

#### Returns

`maybePositionId is IAaveV3LendingPositionId`

true if the object is an IAaveV3LendingPositionId

***

### isAaveV3Protocol()

> **isAaveV3Protocol**(`maybeProtocol`): `maybeProtocol is Readonly<{ chainInfo?: IChainInfo; name?: AaveV3 }>`

Type guard for IAaveV3Protocol

#### Parameters

##### maybeProtocol

`unknown`

#### Returns

`maybeProtocol is Readonly<{ chainInfo?: IChainInfo; name?: AaveV3 }>`

true if the object is an IAaveV3Protocol

***

### isEmodeType()

> **isEmodeType**(`maybeEmodeType`): `maybeEmodeType is EmodeType`

Type guard for EmodeType

#### Parameters

##### maybeEmodeType

`unknown`

Object to be checked

#### Returns

`maybeEmodeType is EmodeType`

true if the object is an EmodeType
