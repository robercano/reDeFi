import { IYieldPositionId, YieldPositionIdDataSchema, PoolType } from '@thesolidchain/sdk-common'
import { z } from 'zod'
import { IYearnProtocol, isYearnProtocol } from './IYearnProtocol'

export const __signature__: unique symbol = Symbol()

export interface IYearnYieldPositionId extends IYieldPositionId, IYearnYieldPositionIdData {
  readonly [__signature__]: symbol
  readonly protocol: IYearnProtocol
  readonly vaultAddress: string
  readonly walletAddress: string
}

export const YearnYieldPositionIdDataSchema = z.object({
  ...YieldPositionIdDataSchema.shape,
  protocol: z.custom<IYearnProtocol>((val) => isYearnProtocol(val)),
  vaultAddress: z.string().regex(/^0x[a-fA-F0-9]{40}$/),
  walletAddress: z.string().regex(/^0x[a-fA-F0-9]{40}$/),
})

export type IYearnYieldPositionIdData = Readonly<z.infer<typeof YearnYieldPositionIdDataSchema>>

export function isYearnYieldPositionId(maybeId: unknown): maybeId is IYearnYieldPositionId {
  return YearnYieldPositionIdDataSchema.safeParse(maybeId).success
}
