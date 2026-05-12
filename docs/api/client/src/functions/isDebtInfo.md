[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [client/src](../README.md) / isDebtInfo

# Function: isDebtInfo()

> **isDebtInfo**(`maybeDebtInfo`): `maybeDebtInfo is Readonly<{ debtAvailable: ITokenAmount; debtCeiling: ITokenAmount; dustLimit: ITokenAmount; interestRate: IPercentage; originationFee: IPercentage; price: IPrice; priceUSD: IPrice; token: IToken; totalBorrowed: ITokenAmount }>`

Type guard for IDebtInfo

## Parameters

### maybeDebtInfo

`unknown`

## Returns

`maybeDebtInfo is Readonly<{ debtAvailable: ITokenAmount; debtCeiling: ITokenAmount; dustLimit: ITokenAmount; interestRate: IPercentage; originationFee: IPercentage; price: IPrice; priceUSD: IPrice; token: IToken; totalBorrowed: ITokenAmount }>`

true if the object is an IDebtInfo
