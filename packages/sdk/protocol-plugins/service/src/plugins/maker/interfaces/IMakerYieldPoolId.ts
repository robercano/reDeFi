import { IYieldPoolId, YieldPoolIdDataSchema, __YieldPoolIdSignature__ } from '@thesolidchain/sdk-common'
import { z } from 'zod'
import { IMakerProtocol, isMakerProtocol } from './IMakerProtocol'

export const __signature__: unique symbol = Symbol.for('@thesolidchain/MakerYieldPoolId')

export const MakerYieldPoolIdDataSchema = z.object({
  ...YieldPoolIdDataSchema.shape,
  protocol: z.custom<IMakerProtocol>((val) => isMakerProtocol(val)),
  vaultAddress: z.string().regex(/^0x[a-fA-F0-9]{40}$/),
})

export type IMakerYieldPoolIdData = Readonly<z.infer<typeof MakerYieldPoolIdDataSchema>>

export function isMakerYieldPoolId(maybeId: unknown): maybeId is IMakerYieldPoolId {
  return MakerYieldPoolIdDataSchema.safeParse(maybeId).success
}

/**
 * Interface representing a Yield Pool Id for the Maker Protocol
 */
export interface IMakerYieldPoolId extends IYieldPoolId {
  readonly [__signature__]: symbol
  readonly [__YieldPoolIdSignature__]: symbol
  /** The address of the Maker vault (e.g., sDAI or sUSDS contract) */
  readonly vaultAddress: string
}

