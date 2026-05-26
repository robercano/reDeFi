import { IYieldPositionId, YieldPositionIdDataSchema, __YieldPositionIdSignature__ } from '@thesolidchain/sdk-common'
import { z } from 'zod'
import { IMakerProtocol, isMakerProtocol } from './IMakerProtocol'

export const __signature__: unique symbol = Symbol.for('@thesolidchain/MakerYieldPositionId')

export const MakerYieldPositionIdDataSchema = z.object({
  ...YieldPositionIdDataSchema.shape,
  protocol: z.custom<IMakerProtocol>((val) => isMakerProtocol(val)),
  vaultAddress: z.string().regex(/^0x[a-fA-F0-9]{40}$/),
  walletAddress: z.string().regex(/^0x[a-fA-F0-9]{40}$/),
})

export type IMakerYieldPositionIdData = Readonly<z.infer<typeof MakerYieldPositionIdDataSchema>>

export function isMakerYieldPositionId(maybeId: unknown): maybeId is IMakerYieldPositionId {
  return MakerYieldPositionIdDataSchema.safeParse(maybeId).success
}

/**
 * Interface representing a Yield Position Id for the Maker Protocol
 */
export interface IMakerYieldPositionId extends IYieldPositionId {
  readonly [__signature__]: symbol
  readonly [__YieldPositionIdSignature__]: symbol
  /** The address of the Maker vault (e.g., sDAI or sUSDS contract) */
  readonly vaultAddress: string
  /** The address of the wallet that holds the position */
  readonly walletAddress: string
}

