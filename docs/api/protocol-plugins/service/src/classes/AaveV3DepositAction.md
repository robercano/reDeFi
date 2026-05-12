[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / AaveV3DepositAction

# Class: AaveV3DepositAction

## Extends

- [`AaveV3LendingPoolId`](../../../../client/src/variables/AaveV3LendingPoolId.md)\<*typeof* [`Config`](#config)\>

## Constructors

### Constructor

> **new AaveV3DepositAction**(): `AaveV3DepositAction`

#### Returns

`AaveV3DepositAction`

#### Inherited from

`BaseAction<typeof AaveV3DepositAction.Config>.constructor`

## Properties

### Config

> `readonly` `static` **Config**: `object`

#### name

> `readonly` **name**: `"AaveV3Deposit"` = `'AaveV3Deposit'`

#### parametersAbi

> `readonly` **parametersAbi**: readonly \[`"(address asset, uint256 amount, bool sumAmounts, bool setAsCollateral)"`\]

#### storageInputs

> `readonly` **storageInputs**: readonly \[`"asset"`, `"amountToDeposit"`\]

#### storageOutputs

> `readonly` **storageOutputs**: readonly \[`"depositedAmount"`\]

#### version

> `readonly` **version**: `0` = `0`

## Accessors

### config

#### Get Signature

> **get** **config**(): `object`

##### Returns

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

## Methods

### encodeCall()

> **encodeCall**(`params`, `paramsMapping?`): `ActionCall`

#### Parameters

##### params

###### depositAmount

[`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md)

###### setAsCollateral

`boolean`

###### sumAmounts

`boolean`

##### paramsMapping?

`InputSlotsMapping`

#### Returns

`ActionCall`
