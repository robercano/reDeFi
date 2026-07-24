import { IOrderPlanner, BuildOrderParams } from '@thesolidchain/order-planner-common'
import {
  SimulationType,
  Order,
  Maybe,
  ExecutionType,
  TransactionInfo,
  SimulationSteps,
  steps,
  getValueFromReference,
  ILendingPoolId,
  ILendingPosition,
  TokenAmount,
  SDKError,
  SDKErrorType,
  multicall3Abi,
} from '@thesolidchain/sdk-common'
import { encodeFunctionData } from 'viem'

export class LendingOrderPlanner implements IOrderPlanner {
  getAcceptedSimulations(): SimulationType[] {
    return [SimulationType.Lend]
  }

  async buildOrder(params: BuildOrderParams): Promise<Maybe<Order>> {
    const { simulation, executionType = ExecutionType.Direct } = params

    const transactions: TransactionInfo[] = []
    // Approval steps are tracked separately so the Multicall branch below can bundle
    // only non-approval steps (see the executionType === Multicall handling).
    const approvalTransactions: TransactionInfo[] = []
    const nonApprovalTransactions: TransactionInfo[] = []

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
      if (step.type === SimulationSteps.DepositBorrow) {
        const typedStep = step as steps.DepositBorrowStep
        const inputs = typedStep.inputs
        const poolId = (inputs.poolId || inputs.position?.pool.id) as ILendingPoolId
        const plugin = params.protocolsRegistry.getPlugin({ protocolName: poolId.protocol.name })
        if (!plugin || !plugin.lending) throw new Error('Lending plugin not found')

        const depositAmount = getValueFromReference(inputs.depositAmount) as TokenAmount
        if (depositAmount && depositAmount.amount !== undefined) {
          const txInfo = await plugin.lending.getSupplyTransaction({
            poolId,
            amount: depositAmount,
            user: params.user,
          })
          transactions.push(txInfo)
          nonApprovalTransactions.push(txInfo)
        }

        const borrowAmount = getValueFromReference(inputs.borrowAmount) as TokenAmount
        if (borrowAmount && borrowAmount.amount !== undefined) {
          const txInfo = await plugin.lending.getBorrowTransaction({
            poolId,
            amount: borrowAmount,
            user: params.user,
          })
          transactions.push(txInfo)
          nonApprovalTransactions.push(txInfo)
        }
      }
      if (step.type === SimulationSteps.PaybackWithdraw) {
        const typedStep = step as steps.PaybackWithdrawStep
        const inputs = typedStep.inputs
        const position = inputs.position as ILendingPosition
        const poolId = position.pool.id as ILendingPoolId
        const plugin = params.protocolsRegistry.getPlugin({ protocolName: poolId.protocol.name })
        if (!plugin || !plugin.lending) throw new Error('Lending plugin not found')

        const paybackAmount = getValueFromReference(inputs.paybackAmount) as TokenAmount
        if (paybackAmount && paybackAmount.amount !== undefined) {
          const txInfo = await plugin.lending.getRepayTransaction({
            poolId,
            amount: paybackAmount,
            user: params.user,
          })
          transactions.push(txInfo)
          nonApprovalTransactions.push(txInfo)
        }

        const withdrawAmount = getValueFromReference(inputs.withdrawAmount) as TokenAmount
        if (withdrawAmount && withdrawAmount.amount !== undefined) {
          const txInfo = await plugin.lending.getWithdrawTransaction({
            poolId,
            amount: withdrawAmount,
            user: params.user,
          })
          transactions.push(txInfo)
          nonApprovalTransactions.push(txInfo)
        }
      }
    }

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

      const multicallData = encodeFunctionData({
        abi: multicall3Abi,
        functionName: 'aggregate3',
        args: [
          nonApprovalTransactions.map((txInfo) => {
            const txTarget = txInfo.transaction.target as unknown as { value?: string }
            return {
              target: txTarget.value
                ? (txTarget.value as `0x${string}`)
                : (txInfo.transaction.target as unknown as `0x${string}`),
              allowFailure: false,
              callData: txInfo.transaction.calldata as `0x${string}`,
            }
          }),
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
            description: 'Bundled Lend Execution (Multicall)',
          },
        ],
      }
    }

    return {
      simulation,
      transactions,
    }
  }
}
