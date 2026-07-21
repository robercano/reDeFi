/**
 * Minimal ABI fragment for the Multicall3 contract's `aggregate3` function.
 *
 * aggregate3(Call3[] calls) where Call3 = (address target, bool allowFailure, bytes callData)
 *
 * Shared by the order-planner planners so the Multicall3 encoding stays in one place
 * instead of being duplicated per planner.
 */
export const multicall3Abi = [
  {
    inputs: [
      {
        components: [
          { internalType: 'address', name: 'target', type: 'address' },
          { internalType: 'bool', name: 'allowFailure', type: 'bool' },
          { internalType: 'bytes', name: 'callData', type: 'bytes' },
        ],
        internalType: 'struct Multicall3.Call3[]',
        name: 'calls',
        type: 'tuple[]',
      },
    ],
    name: 'aggregate3',
    outputs: [
      {
        components: [
          { internalType: 'bool', name: 'success', type: 'bool' },
          { internalType: 'bytes', name: 'returnData', type: 'bytes' },
        ],
        internalType: 'struct Multicall3.Result[]',
        name: 'returnData',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
] as const
