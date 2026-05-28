import { ISwapOrderPlanner, BuildOrderParams } from '@thesolidchain/order-planner-common'
import {
  SimulationType,
  Order,
  Maybe,
  ExecutionType,
  TransactionInfo,
  IAddress,
  SimulationSteps,
  steps,
 Address , SDKError, SDKErrorType } from '@thesolidchain/sdk-common'
import { encodeFunctionData } from 'viem'

export class SwapOrderPlanner implements ISwapOrderPlanner {
  getAcceptedSimulations(): SimulationType[] {
    return [SimulationType.Swap]
  }

  async buildOrder(params: BuildOrderParams): Promise<Maybe<Order>> {
    const { simulation, executionType = ExecutionType.Direct, contractsProvider } = params

    // Convert SimulationSteps into raw TransactionInfo payloads
    const transactions: TransactionInfo[] = []

    // In a full implementation we would iterate through simulation.steps
    // E.g.:
    for (const step of simulation.steps) {
      if (step.type === SimulationSteps.Approve) {
        const typedStep = step as steps.ApproveStep
        if (typedStep.outputs?.transaction) {
          transactions.push({
            transaction: typedStep.outputs.transaction,
            description: typedStep.name || 'Approve token',
          })
        }
      }
      if (step.type === SimulationSteps.Swap) {
        const typedStep = step as steps.SwapStep
        if (typedStep.outputs?.transaction) {
          transactions.push({
            transaction: typedStep.outputs.transaction,
            description: typedStep.name || 'Swap token',
          })
        }
      }
    }

    // If there are no transactions (e.g. no steps), return empty
    if (transactions.length === 0) {
      return { simulation, transactions: [] }
    }

    if (executionType === ExecutionType.Multicall) {
      // Encode all transaction data into a single Multicall payload
      // aggregate3(Call3[] calls) where Call3 = (address target, bool allowFailure, bytes callData)
      const MULTICALL3_ABI = [
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

      const multicallData = encodeFunctionData({
        abi: MULTICALL3_ABI,
        functionName: 'aggregate3',
        args: [
          transactions.map((txInfo) => ({
            target: txInfo.transaction.target.value as `0x${string}`,
            allowFailure: true,
            callData: txInfo.transaction.calldata as `0x${string}`,
          })),
        ],
      })

      const multicallAddress = await params.addressBookManager.getAddressByName({
        chainInfo: params.user.chainInfo,
        name: 'Multicall3',
      })
      if (!multicallAddress) {
        throw SDKError.createFrom({
          type: SDKErrorType.OrderPlannerError,
          reason: 'Address Not Found',
          message: `Could not find Multicall3 address for chain ${params.user.chainInfo.name}`,
        })
      }

      return {
        simulation,
        transactions: [
          {
            transaction: {
              target: multicallAddress,
              calldata: multicallData,
              value: transactions
                .reduce((acc, txInfo) => acc + BigInt(txInfo.transaction.value || 0), 0n)
                .toString(),
            },
            description: 'Bundled Swap Execution (Multicall)',
          },
        ],
      }
    }

    // Direct / Default fallback
    return {
      simulation,
      transactions,
    }
  }
}
