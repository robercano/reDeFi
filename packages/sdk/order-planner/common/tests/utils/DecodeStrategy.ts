import { ActionCall } from '@thesolidchain/protocol-plugins-common'
import { HexData } from '@thesolidchain/sdk-common'
import { decodeFunctionData, parseAbi } from 'viem'

type SkippableActionCall = ActionCall & {
  skipped: boolean
}

export function decodeStrategy(calldata: HexData): {
  strategyName: string
  actions: ActionCall[]
} {
  const abi = parseAbi(['function executeOp(Call[] memory calls, string calldata operationName)'])

  const args = decodeFunctionData({
    abi,
    data: calldata,
  })

  const actions = (args.args[0] as ActionCall[]).map((action) => action)

  return {
    strategyName: args.args[1] as string,
    actions: actions,
  }
}
