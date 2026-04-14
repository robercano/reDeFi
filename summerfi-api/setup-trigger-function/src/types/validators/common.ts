import { z } from 'zod'
import {
  supportedTriggersSchema,
  supportedChainSchema,
  supportedProtocolsSchema,
} from '@thesolidchain/triggers-shared'

export const pathParamsSchema = z.object({
  trigger: supportedTriggersSchema,
  chainId: supportedChainSchema,
  protocol: supportedProtocolsSchema,
})
