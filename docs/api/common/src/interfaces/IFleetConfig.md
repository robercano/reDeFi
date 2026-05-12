[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / IFleetConfig

# Interface: IFleetConfig

IFleetConfig
Data structure for rebalancing assets, used by Keepers of a fleet

## Properties

### bufferArk

> `readonly` **bufferArk**: [`IAddress`](IAddress.md)

The address of the buffer Ark associated with this Fleet

***

### depositCap

> `readonly` **depositCap**: [`ITokenAmount`](ITokenAmount.md)

The maximum total value of assets that can be deposited into the fleet

***

### maxRebalanceOperations

> `readonly` **maxRebalanceOperations**: `string`

The maximum number of rebalance operations that can be performed in a single rebalance transaction

***

### minimumBufferBalance

> `readonly` **minimumBufferBalance**: [`ITokenAmount`](ITokenAmount.md)

The minimum balance that should be maintained in the buffer Ark

***

### stakingRewardsManager

> `readonly` **stakingRewardsManager**: [`IAddress`](IAddress.md)

The address of the staking rewards manager contract
