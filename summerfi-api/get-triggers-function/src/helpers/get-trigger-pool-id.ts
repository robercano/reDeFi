import type { TriggersQuery } from '@thesolidchain/automation-subgraph'

export const getTriggerPoolId = (trigger: TriggersQuery['triggers'][number]) =>
  trigger.decodedData[trigger.decodedDataNames.indexOf('poolId')]
