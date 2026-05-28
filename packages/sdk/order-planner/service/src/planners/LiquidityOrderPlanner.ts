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

export class LiquidityOrderPlanner implements IOrderPlanner {
  getAcceptedSimulations(): SimulationType[] {
    return [SimulationType.Liquidity]
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
      if (step.type === SimulationSteps.ProvideLiquidity) {
        const inputs = step.inputs as steps.ProvideLiquidityStep['inputs']
        const plugin = params.protocolsRegistry.getPlugin({
          protocolName: inputs.poolId.protocol.name,
        })
        if (!plugin || !plugin.liquidity) throw new Error('Liquidity plugin not found')
        const txInfo = await plugin.liquidity.getProvideLiquidityTransaction({
          poolId: inputs.poolId,
          amounts: getValueFromReference(inputs.amounts) as TokenAmount[],
          user: params.user,
          tickLower: inputs.tickLower,
          tickUpper: inputs.tickUpper,
        })
        transactions.push(txInfo)
      }
      if (step.type === SimulationSteps.RemoveLiquidity) {
        const inputs = step.inputs as steps.RemoveLiquidityStep['inputs']
        const plugin = params.protocolsRegistry.getPlugin({
          protocolName: inputs.position.poolId.protocol.name,
        })
        if (!plugin || !plugin.liquidity) throw new Error('Liquidity plugin not found')
        const txInfo = await plugin.liquidity.getRemoveLiquidityTransaction({
          positionId: inputs.position.id,
          amount: getValueFromReference(inputs.removeAmount) as TokenAmount,
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
