[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / DebtInfo

# Class: DebtInfo

DebtInfo

## See

IDebtInfo

For now this class can be re-used among all the protocols and there is no need for specialization

## Implements

- [`IDebtInfo`](../interfaces/IDebtInfo.md)

## Constructors

### Constructor

> `protected` **new DebtInfo**(`params`): `DebtInfo`

CONSTRUCTOR

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`DebtInfoParameters`](../type-aliases/DebtInfoParameters.md) |

#### Returns

`DebtInfo`

## Properties

### \[\_\_\_signature\_\_\]

> `readonly` **\[\_\_\_signature\_\_\]**: `symbol` = `__signature__`

SIGNATURE

#### Implementation of

[`IDebtInfo`](../interfaces/IDebtInfo.md).[`[___signature__]`](../interfaces/IDebtInfo.md#___signature__)

***

### debtAvailable

> `readonly` **debtAvailable**: [`ITokenAmount`](../interfaces/ITokenAmount.md)

The amount of the token that can still be borrowed

#### Implementation of

[`IDebtInfo`](../interfaces/IDebtInfo.md).[`debtAvailable`](../interfaces/IDebtInfo.md#debtavailable)

***

### debtCeiling

> `readonly` **debtCeiling**: [`ITokenAmount`](../interfaces/ITokenAmount.md)

The maximum amount of the token that can be borrowed

#### Implementation of

[`IDebtInfo`](../interfaces/IDebtInfo.md).[`debtCeiling`](../interfaces/IDebtInfo.md#debtceiling)

***

### dustLimit

> `readonly` **dustLimit**: [`ITokenAmount`](../interfaces/ITokenAmount.md)

The minimum amount of the token that can be borrowed

#### Implementation of

[`IDebtInfo`](../interfaces/IDebtInfo.md).[`dustLimit`](../interfaces/IDebtInfo.md#dustlimit)

***

### interestRate

> `readonly` **interestRate**: [`IPercentage`](../interfaces/IPercentage.md)

The interest rate of the debt. TODO: which units??

#### Implementation of

[`IDebtInfo`](../interfaces/IDebtInfo.md).[`interestRate`](../interfaces/IDebtInfo.md#interestrate)

***

### originationFee

> `readonly` **originationFee**: [`IPercentage`](../interfaces/IPercentage.md)

The fee that is charged for creating a new debt

#### Implementation of

[`IDebtInfo`](../interfaces/IDebtInfo.md).[`originationFee`](../interfaces/IDebtInfo.md#originationfee)

***

### price

> `readonly` **price**: [`IPrice`](../interfaces/IPrice.md)

The price of the token in the protocol's default denomination

#### Implementation of

[`IDebtInfo`](../interfaces/IDebtInfo.md).[`price`](../interfaces/IDebtInfo.md#price)

***

### priceUSD

> `readonly` **priceUSD**: [`IPrice`](../interfaces/IPrice.md)

The price of the token in USD

#### Implementation of

[`IDebtInfo`](../interfaces/IDebtInfo.md).[`priceUSD`](../interfaces/IDebtInfo.md#priceusd)

***

### token

> `readonly` **token**: [`IToken`](../interfaces/IToken.md)

ATTRIBUTES

#### Implementation of

[`IDebtInfo`](../interfaces/IDebtInfo.md).[`token`](../interfaces/IDebtInfo.md#token)

***

### totalBorrowed

> `readonly` **totalBorrowed**: [`ITokenAmount`](../interfaces/ITokenAmount.md)

The total amount of the token borrowed

#### Implementation of

[`IDebtInfo`](../interfaces/IDebtInfo.md).[`totalBorrowed`](../interfaces/IDebtInfo.md#totalborrowed)

## Methods

### createFrom()

> `static` **createFrom**(`params`): `DebtInfo`

FACTORY METHODS

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`DebtInfoParameters`](../type-aliases/DebtInfoParameters.md) |

#### Returns

`DebtInfo`
