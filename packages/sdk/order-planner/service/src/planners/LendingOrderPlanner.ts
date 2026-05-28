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
  Address,
  TokenAmount,
  SDKError, SDKErrorType } from '@thesolidchain/sdk-common'
import { encodeFunctionData } from 'viem'

export class LendingOrderPlanner implements IOrderPlanner {
  getAcceptedSimulations(): SimulationType[] {
    return [SimulationType.Lend]
  }

  async buildOrder(params: BuildOrderParams): Promise<Maybe<Order>> {
    const { simulation, executionType = ExecutionType.Direct } = params

    const transactions: TransactionInfo[] = []

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
        }

        const borrowAmount = getValueFromReference(inputs.borrowAmount) as TokenAmount
        if (borrowAmount && borrowAmount.amount !== undefined) {
          const txInfo = await plugin.lending.getBorrowTransaction({
            poolId,
            amount: borrowAmount,
            user: params.user,
          })
          transactions.push(txInfo)
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
        }

        const withdrawAmount = getValueFromReference(inputs.withdrawAmount) as TokenAmount
        if (withdrawAmount && withdrawAmount.amount !== undefined) {
          const txInfo = await plugin.lending.getWithdrawTransaction({
            poolId,
            amount: withdrawAmount,
            user: params.user,
          })
          transactions.push(txInfo)
        }
      }
    }

    if (transactions.length === 0) {
      return { simulation, transactions: [] }
    }

    if (executionType === ExecutionType.Multicall) {
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
          transactions.map((txInfo) => {
            const txTarget = txInfo.transaction.target as unknown as { value?: string }
            return {
              target: txTarget.value
                ? (txTarget.value as `0x${string}`)
                : (txInfo.transaction.target as unknown as `0x${string}`),
              allowFailure: true,
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
          {
            transaction: {
              target: multicallAddress,
              calldata: multicallData,
              value: transactions
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
