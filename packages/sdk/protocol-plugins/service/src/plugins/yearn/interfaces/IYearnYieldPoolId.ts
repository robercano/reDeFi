import { IYieldPoolId, YieldPoolIdDataSchema, PoolType } from '@thesolidchain/sdk-common'
import { z } from 'zod'
import { IYearnProtocol, isYearnProtocol } from './IYearnProtocol'

export const __signature__: unique symbol = Symbol()

export interface IYearnYieldPoolId extends IYieldPoolId, IYearnYieldPoolIdData {
  readonly [__signature__]: symbol
  readonly protocol: IYearnProtocol
  readonly vaultAddress: string
}

export const YearnYieldPoolIdDataSchema = z.object({
  ...YieldPoolIdDataSchema.shape,
  protocol: z.custom<IYearnProtocol>((val) => isYearnProtocol(val)),
  vaultAddress: z.string().regex(/^0x[a-fA-F0-9]{40}$/),
})

export type IYearnYieldPoolIdData = Readonly<z.infer<typeof YearnYieldPoolIdDataSchema>>

export function isYearnYieldPoolId(maybeId: unknown): maybeId is IYearnYieldPoolId {
  return YearnYieldPoolIdDataSchema.safeParse(maybeId).success
}
