[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / MorphoMarketInfo

# Type Alias: MorphoMarketInfo

> **MorphoMarketInfo** = `object`

## Description

Morpho market info retrieved from the protocol

## Properties

### fee

> `readonly` **fee**: [`IPercentage`](../../../../client/src/interfaces/IPercentage.md)

Fee charged when borrowing from the market

***

### lastUpdated

> `readonly` **lastUpdated**: `bigint`

Block timestamp of the last update

***

### totalBorrowAssets

> `readonly` **totalBorrowAssets**: [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md)

The total borrow assets in the market, i.e. total debt borrowed

***

### totalBorrowShares

> `readonly` **totalBorrowShares**: `bigint`

The total borrow shares in the market having borrowed from the market

***

### totalSupplyAssets

> `readonly` **totalSupplyAssets**: [`ITokenAmount`](../../../../client/src/interfaces/ITokenAmount.md)

The total supply assets in the market, i.e. total collateral locked

***

### totalSupplyShares

> `readonly` **totalSupplyShares**: `bigint`

The total supply shares in the market having access to the supply assets
