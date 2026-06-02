import { isConvexStakingPositionId } from './packages/sdk/protocol-plugins/service/src/plugins/convex/interfaces/IConvexStakingPositionId'
import { ConvexStakingPositionId } from './packages/sdk/protocol-plugins/service/src/plugins/convex/implementation/ConvexStakingPositionId'
import { ConvexStakingPoolId } from './packages/sdk/protocol-plugins/service/src/plugins/convex/implementation/ConvexStakingPoolId'
import { Address, TokenAmount, Token } from '@thesolidchain/sdk-common'

const mockChainInfo = { id: 1 } as any
const wallet = { address: Address.createFromEthereum({ value: '0x1111111111111111111111111111111111111111' }) } as any

const poolId = new ConvexStakingPoolId('0x4444444444444444444444444444444444444444', mockChainInfo)
const positionId = new ConvexStakingPositionId(poolId, wallet, mockChainInfo)

console.log("Checking positionId...")
console.log(isConvexStakingPositionId(positionId))

import { ConvexStakingPositionIdDataSchema } from './packages/sdk/protocol-plugins/service/src/plugins/convex/interfaces/IConvexStakingPositionId'
const res = ConvexStakingPositionIdDataSchema.safeParse(positionId)
if (!res.success) {
  console.dir(res.error.errors, { depth: null })
}
