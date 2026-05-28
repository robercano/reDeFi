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
  TokenAmount,
} from '@thesolidchain/sdk-common'

export class YieldOrderPlanner implements IOrderPlanner {
  getAcceptedSimulations(): SimulationType[] {
    return [SimulationType.Yield]
  }

  async buildOrder(params: BuildOrderParams): Promise<Maybe<Order>> {
    const { simulation } = params

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
      if (step.type === SimulationSteps.DepositYield) {
        const inputs = step.inputs as steps.DepositYieldStep['inputs']
        const plugin = params.protocolsRegistry.getPlugin({
          protocolName: inputs.poolId.protocol.name,
        })
        if (!plugin || !plugin.yield) throw new Error('Yield plugin not found')
        const txInfo = await plugin.yield.getDepositTransaction({
          poolId: inputs.poolId,
          amount: getValueFromReference(inputs.depositAmount) as TokenAmount,
          user: params.user,
        })
        transactions.push(txInfo)
      }
      if (step.type === SimulationSteps.WithdrawYield) {
        const inputs = step.inputs as steps.WithdrawYieldStep['inputs']
        const plugin = params.protocolsRegistry.getPlugin({
          protocolName: inputs.position.poolId.protocol.name,
        })
        if (!plugin || !plugin.yield) throw new Error('Yield plugin not found')
        const txInfo = await plugin.yield.getWithdrawTransaction({
          positionId: inputs.position.id,
          amount: getValueFromReference(inputs.withdrawAmount) as TokenAmount,
          user: params.user,
        })
        transactions.push(txInfo)
      }
    }

    if (transactions.length === 0) {
      return { simulation, transactions: [] }
    }

    return {
      simulation,
      transactions,
    }
  }
}
