import { IProtocol, ProtocolDataSchema, ProtocolName } from '@thesolidchain/sdk-common'
import { z } from 'zod'

export const __signature__: unique symbol = Symbol()

export interface IYearnProtocol extends IProtocol, IYearnProtocolData {
  readonly [__signature__]: symbol
  readonly name: ProtocolName.Yearn
}

export const YearnProtocolDataSchema = z.object({
  ...ProtocolDataSchema.shape,
  name: z.literal(ProtocolName.Yearn),
})

export type IYearnProtocolData = Readonly<z.infer<typeof YearnProtocolDataSchema>>

export function isYearnProtocol(maybeProtocol: unknown): maybeProtocol is IYearnProtocolData {
  return YearnProtocolDataSchema.safeParse(maybeProtocol).success
}
