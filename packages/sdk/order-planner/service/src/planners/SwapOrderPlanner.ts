import { ISwapOrderPlanner, BuildOrderParams } from '@thesolidchain/order-planner-common'
import {
  SimulationType,
  Order,
  Maybe,
  ExecutionType,
  TransactionInfo,
  SimulationSteps,
  steps,
  SDKError,
  SDKErrorType,
  multicall3Abi,
} from '@thesolidchain/sdk-common'
import { encodeFunctionData } from 'viem'

export class SwapOrderPlanner implements ISwapOrderPlanner {
  getAcceptedSimulations(): SimulationType[] {
    return [SimulationType.Swap]
  }

  async buildOrder(params: BuildOrderParams): Promise<Maybe<Order>> {
    const { simulation, executionType = ExecutionType.Direct } = params

    // Convert SimulationSteps into raw TransactionInfo payloads
    const transactions: TransactionInfo[] = []
    // Approval steps are tracked separately so the Multicall branch below can bundle
    // only non-approval steps (see the executionType === Multicall handling).
    const approvalTransactions: TransactionInfo[] = []
    const nonApprovalTransactions: TransactionInfo[] = []

    // In a full implementation we would iterate through simulation.steps
    // E.g.:
    for (const step of simulation.steps) {
      if (step.type === SimulationSteps.Approve) {
        const typedStep = step as steps.ApproveStep
        if (typedStep.outputs?.transaction) {
          const txInfo = {
            transaction: typedStep.outputs.transaction,
            description: typedStep.name || 'Approve token',
          }
          transactions.push(txInfo)
          approvalTransactions.push(txInfo)
        }
      }
      if (step.type === SimulationSteps.Swap) {
        const typedStep = step as steps.SwapStep
        if (typedStep.outputs?.transaction) {
          const txInfo = {
            transaction: typedStep.outputs.transaction,
            description: typedStep.name || 'Swap token',
          }
          transactions.push(txInfo)
          nonApprovalTransactions.push(txInfo)
        }
      }
    }

    // If there are no transactions (e.g. no steps), return empty
    if (transactions.length === 0) {
      return { simulation, transactions: [] }
    }

    if (executionType === ExecutionType.Multicall) {
      // Approvals are always kept as separate, direct transactions and never bundled into
      // the Multicall3 aggregate3 call: an approve() executed via aggregate3 would set the
      // allowance FROM the Multicall3 contract rather than from the user's EOA, which is
      // not the intent of an approval step. This is a scope-limited fix; the broader
      // msg.sender-dependent bundling problem (e.g. via Permit2 or ERC-4337 account
      // abstraction) is deferred to W6.2/W6.3.
      if (nonApprovalTransactions.length === 0) {
        return { simulation, transactions: approvalTransactions }
      }

      // Encode the non-approval transaction data into a single Multicall payload
      // aggregate3(Call3[] calls) where Call3 = (address target, bool allowFailure, bytes callData)
      const multicallData = encodeFunctionData({
        abi: multicall3Abi,
        functionName: 'aggregate3',
        args: [
          nonApprovalTransactions.map((txInfo) => ({
            target: txInfo.transaction.target.value as `0x${string}`,
            allowFailure: false,
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
          ...approvalTransactions,
          {
            transaction: {
              target: multicallAddress,
              calldata: multicallData,
              value: nonApprovalTransactions
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
