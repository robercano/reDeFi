[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / MorphoMarketParameters

# Type Alias: MorphoMarketParameters

> **MorphoMarketParameters** = `object`

Morpho market parameters for a given market

## Properties

### collateralToken

> `readonly` **collateralToken**: [`IToken`](../../../../client/src/interfaces/IToken.md)

Collateral token used to collateralized the pool

***

### debtToken

> `readonly` **debtToken**: [`IToken`](../../../../client/src/interfaces/IToken.md)

Debt token, which can be borrowed from the pool

***

### irm

> `readonly` **irm**: [`IAddress`](../../../../client/src/interfaces/IAddress.md)

The interest rate module used in the Morpho market

***

### lltv

> `readonly` **lltv**: [`IRiskRatio`](../../../../client/src/interfaces/IRiskRatio.md)

The liquidation LTV for the Morpho market

***

### oracle

> `readonly` **oracle**: [`IAddress`](../../../../client/src/interfaces/IAddress.md)

The oracle used in the Morpho market
