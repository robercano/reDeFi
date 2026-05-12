[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / IRebalanceData

# Interface: IRebalanceData

IRebalanceData
Data structure for rebalancing assets, used by Keepers of a fleet

## Properties

### amount

> `readonly` **amount**: [`ITokenAmount`](ITokenAmount.md)

Amount of tokens to be moved

***

### boardData?

> `readonly` `optional` **boardData?**: `` `0x${string}` ``

Board data

***

### disembarkData?

> `readonly` `optional` **disembarkData?**: `` `0x${string}` ``

Disembark data

***

### fromArk

> `readonly` **fromArk**: [`IAddress`](IAddress.md)

Ark where the tokens are taken from

***

### toArk

> `readonly` **toArk**: [`IAddress`](IAddress.md)

Ark where the tokens are moved to
