[**redefi**](../../../../README.md)

***

[redefi](../../../../README.md) / [protocol-plugins/service/src](../README.md) / encodeMakerAllowThroughProxyActions

# Function: encodeMakerAllowThroughProxyActions()

> **encodeMakerAllowThroughProxyActions**(`params`): `object`

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `allowAddress`: `` `0x${string}` ``; `cdpId`: `string`; `cdpManagerAddress`: `` `0x${string}` ``; `makerProxyActionsAddress`: `` `0x${string}` ``; \} |
| `params.allowAddress` | `` `0x${string}` `` |
| `params.cdpId` | `string` |
| `params.cdpManagerAddress` | `` `0x${string}` `` |
| `params.makerProxyActionsAddress` | `` `0x${string}` `` |

## Returns

`object`

| Name | Type |
| ------ | ------ |
| `dsProxyParameters` | `object` |
| `dsProxyParameters.callData` | `` `0x${string}` `` |
| `dsProxyParameters.target` | `` `0x${string}` `` |
| `transactionCalldata` | `` `0x${string}` `` |
