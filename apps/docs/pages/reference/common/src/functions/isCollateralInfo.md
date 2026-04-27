[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / isCollateralInfo

# Function: isCollateralInfo()

> **isCollateralInfo**(`maybeCollateralInfo`): `maybeCollateralInfo is Readonly<{ liquidationPenalty: IPercentage; liquidationThreshold: IRiskRatio; maxSupply: ITokenAmount; price: IPrice; priceUSD: IPrice; token: IToken; tokensLocked: ITokenAmount }>`

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `maybeCollateralInfo` | `unknown` | - |

## Returns

`maybeCollateralInfo is Readonly<{ liquidationPenalty: IPercentage; liquidationThreshold: IRiskRatio; maxSupply: ITokenAmount; price: IPrice; priceUSD: IPrice; token: IToken; tokensLocked: ITokenAmount }>`

true if the object is an ICollateralInfo

## Description

Type guard for ICollateralInfo
