import {
  IYieldPositionId,
  YieldPositionIdDataSchema,
  IAddress,
  isAddress,
} from '@thesolidchain/sdk-common'
import { z } from 'zod'
import { ICompoundV3YieldPoolId, isCompoundV3YieldPoolId } from './ICompoundV3YieldPoolId'

/**
 * Unique signature to provide branded types to the interface
 */
export const __signature__: unique symbol = Symbol()

/**
 * @interface ICompoundV3YieldPositionId
 * ID for a position on Compound V3 protocols
 */
export interface ICompoundV3YieldPositionId extends IYieldPositionId, ICompoundV3YieldPositionIdData {
  /** Signature used to differentiate it from similar interfaces */
  readonly [__signature__]: symbol
  /** The pool ID associated with this position */
  readonly poolId: ICompoundV3YieldPoolId
  /** The wallet address of the position owner */
  readonly walletAddress: IAddress
}

/**
 * Zod schema for ICompoundV3YieldPositionId
 */
export const CompoundV3YieldPositionIdDataSchema = z.object({
  ...YieldPositionIdDataSchema.shape,
  poolId: z.custom<ICompoundV3YieldPoolId>((val) => isCompoundV3YieldPoolId(val)),
  walletAddress: z.custom<IAddress>((val) => isAddress(val)),
})

/**
 * Type for the data part of ICompoundV3YieldPositionId
 */
export type ICompoundV3YieldPositionIdData = Readonly<z.infer<typeof CompoundV3YieldPositionIdDataSchema>>

/**
 * Type guard for ICompoundV3YieldPositionId
 * @param maybePositionId
 * @returns true if the object is an ICompoundV3YieldPositionId
 */
export function isCompoundV3YieldPositionId(
  maybePositionId: unknown,
): maybePositionId is ICompoundV3YieldPositionId {
  return CompoundV3YieldPositionIdDataSchema.safeParse(maybePositionId).success
}
