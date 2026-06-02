import { isConvexStakingPositionId } from './src/plugins/convex/interfaces/IConvexStakingPositionId'
import { isConvexYieldPositionId } from './src/plugins/convex/interfaces/IConvexYieldPositionId'
import { ConvexStakingPositionId } from './src/plugins/convex/implementation/ConvexStakingPositionId'
import { ConvexYieldPositionId } from './src/plugins/convex/implementation/ConvexYieldPositionId'
import { ConvexStakingPoolId } from './src/plugins/convex/implementation/ConvexStakingPoolId'
import { Address } from '@thesolidchain/sdk-common'

const mockChainInfo = { id: 1 } as any
const wallet = { address: Address.createFromEthereum({ value: '0x1111111111111111111111111111111111111111' }) } as any

const poolId = new ConvexStakingPoolId('0x4444444444444444444444444444444444444444', mockChainInfo)
const positionId = new ConvexStakingPositionId(poolId, wallet, mockChainInfo)
const yieldPositionId = new ConvexYieldPositionId('0x3333333333333333333333333333333333333333', '0x1111111111111111111111111111111111111111', mockChainInfo)

console.log("Checking YieldPositionId...", isConvexYieldPositionId(yieldPositionId))
console.log("Checking StakingPositionId...", isConvexStakingPositionId(positionId))

import { ConvexStakingPositionIdDataSchema } from './src/plugins/convex/interfaces/IConvexStakingPositionId'
const res = ConvexStakingPositionIdDataSchema.safeParse(positionId)
if (!res.success) {
  console.dir(res.error.errors, { depth: null })
}
