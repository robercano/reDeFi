import { ProtocolName, IProtocol, ProtocolDataSchema } from '@thesolidchain/sdk-common'
import { z } from 'zod'

export const __signature__: unique symbol = Symbol()

export interface IMakerProtocol extends IProtocol {
  readonly [__signature__]: symbol
  readonly name: ProtocolName.Maker
}

export const MakerProtocolDataSchema = z.object({
  ...ProtocolDataSchema.shape,
  name: z.literal(ProtocolName.Maker),
})

export type IMakerProtocolData = Readonly<z.infer<typeof MakerProtocolDataSchema>>

export function isMakerProtocol(maybeProtocol: unknown): maybeProtocol is IMakerProtocol {
  return MakerProtocolDataSchema.safeParse(maybeProtocol).success
}
