import { IImportSimulation, IRefinanceSimulation } from '@thesolidchain/sdk-common'

export function generateStrategyName(simulation: IRefinanceSimulation | IImportSimulation): string {
  return `${simulation.type}${simulation.sourcePosition?.pool.id.protocol.name}${simulation.targetPosition?.pool.id.protocol.name}`
}
