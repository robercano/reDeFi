[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / steps

# steps

## Interfaces

### Step

#### Type Parameters

##### T

`T` *extends* [`SimulationSteps`](../README.md#simulationsteps)

##### I

`I`

##### O

`O` = `undefined`

#### Properties

##### inputs

> **inputs**: `I`

##### name

> **name**: `string`

##### outputs

> **outputs**: `O`

##### skip?

> `optional` **skip?**: `boolean`

##### type

> **type**: `T`

## Type Aliases

### DepositBorrowStep

> **DepositBorrowStep** = [`Step`](#step)\<[`DepositBorrow`](../README.md#depositborrow), \{ `additionalDeposit?`: [`ValueReference`](../README.md#valuereference)\<[`ITokenAmount`](../README.md#itokenamount)\>; `borrowAmount`: [`ReferenceableField`](../README.md#referenceablefield)\<[`ITokenAmount`](../README.md#itokenamount)\>; `borrowTargetType`: [`TokenTransferTargetType`](../README.md#tokentransfertargettype); `depositAmount`: [`ReferenceableField`](../README.md#referenceablefield)\<[`ITokenAmount`](../README.md#itokenamount)\>; `position`: [`ILendingPosition`](../README.md#ilendingposition); \}, \{ `borrowAmount`: [`ITokenAmount`](../README.md#itokenamount); `depositAmount`: [`ITokenAmount`](../README.md#itokenamount); \}\>

***

### DepositYieldStep

> **DepositYieldStep** = [`Step`](#step)\<[`DepositYield`](../README.md#deposityield), \{ `depositAmount`: [`ReferenceableField`](../README.md#referenceablefield)\<[`ITokenAmount`](../README.md#itokenamount)\>; `poolId`: [`IYieldPoolId`](../README.md#iyieldpoolid); \}, \{ `depositAmount`: [`ITokenAmount`](../README.md#itokenamount); \}\>

***

### FlashloanStep

> **FlashloanStep** = [`Step`](#step)\<[`Flashloan`](../README.md#flashloan), \{ `amount`: [`ITokenAmount`](../README.md#itokenamount); `provider`: [`FlashloanProvider`](../README.md#flashloanprovider); \}\>

***

### NewPositionEventStep

> **NewPositionEventStep** = [`Step`](#step)\<[`NewPositionEvent`](../README.md#newpositionevent), \{ `position`: [`ILendingPosition`](../README.md#ilendingposition); \}\>

***

### OpenPosition

> **OpenPosition** = [`Step`](#step)\<[`OpenPosition`](../README.md#openposition), \{ `pool`: [`ILendingPool`](../README.md#ilendingpool); \}, \{ `position`: [`ILendingPosition`](../README.md#ilendingposition); \}\>

***

### PaybackWithdrawStep

> **PaybackWithdrawStep** = [`Step`](#step)\<[`PaybackWithdraw`](../README.md#paybackwithdraw), \{ `paybackAmount`: [`ReferenceableField`](../README.md#referenceablefield)\<[`ITokenAmount`](../README.md#itokenamount)\>; `position`: [`ILendingPosition`](../README.md#ilendingposition); `withdrawAmount`: [`ITokenAmount`](../README.md#itokenamount); `withdrawTargetType`: [`TokenTransferTargetType`](../README.md#tokentransfertargettype); \}, \{ `paybackAmount`: [`ITokenAmount`](../README.md#itokenamount); `withdrawAmount`: [`ITokenAmount`](../README.md#itokenamount); \}\>

***

### PullTokenStep

> **PullTokenStep** = [`Step`](#step)\<[`PullToken`](../README.md#pulltoken), \{ `amount`: [`ReferenceableField`](../README.md#referenceablefield)\<[`ITokenAmount`](../README.md#itokenamount)\>; \}\>

***

### RepayFlashloanStep

> **RepayFlashloanStep** = [`Step`](#step)\<[`RepayFlashloan`](../README.md#repayflashloan), \{ `amount`: [`ITokenAmount`](../README.md#itokenamount); \}\>

***

### ReturnFundsStep

> **ReturnFundsStep** = [`Step`](#step)\<[`ReturnFunds`](../README.md#returnfunds), \{ `token`: [`IToken`](../README.md#itoken); \}\>

***

### SkippedStep

> **SkippedStep** = [`Step`](#step)\<[`Skipped`](../README.md#skipped), \{ `protocol?`: [`ProtocolName`](../README.md#protocolname); `type`: [`SimulationSteps`](../README.md#simulationsteps); \}\>

***

### Steps

> **Steps** = [`FlashloanStep`](#flashloanstep) \| [`PullTokenStep`](#pulltokenstep) \| [`DepositBorrowStep`](#depositborrowstep) \| [`PaybackWithdrawStep`](#paybackwithdrawstep) \| [`SwapStep`](#swapstep) \| [`ReturnFundsStep`](#returnfundsstep) \| [`RepayFlashloanStep`](#repayflashloanstep) \| [`NewPositionEventStep`](#newpositioneventstep) \| [`OpenPosition`](#openposition) \| [`SkippedStep`](#skippedstep) \| [`DepositYieldStep`](#deposityieldstep) \| [`WithdrawYieldStep`](#withdrawyieldstep)

***

### SwapStep

> **SwapStep** = [`Step`](#step)\<[`Swap`](../README.md#swap), \{ `estimatedReceivedAmount`: [`ITokenAmount`](../README.md#itokenamount); `inputAmount`: [`ITokenAmount`](../README.md#itokenamount); `minimumReceivedAmount`: [`ITokenAmount`](../README.md#itokenamount); `offerPrice`: [`IPrice`](../README.md#iprice); `provider`: [`SwapProviderType`](../README.md#swapprovidertype); `routes`: [`SwapRoute`](../README.md#swaproute)[]; `slippage`: [`IPercentage`](../README.md#ipercentage); `spotPrice`: [`IPrice`](../README.md#iprice); \}, \{ `received`: [`ITokenAmount`](../README.md#itokenamount); \}\>

***

### WithdrawYieldStep

> **WithdrawYieldStep** = [`Step`](#step)\<[`WithdrawYield`](../README.md#withdrawyield), \{ `position`: [`IYieldPosition`](../README.md#iyieldposition); `withdrawAmount`: [`ReferenceableField`](../README.md#referenceablefield)\<[`ITokenAmount`](../README.md#itokenamount)\>; \}, \{ `withdrawAmount`: [`ITokenAmount`](../README.md#itokenamount); \}\>
