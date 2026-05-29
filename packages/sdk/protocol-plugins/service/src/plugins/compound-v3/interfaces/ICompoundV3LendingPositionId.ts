import {
  ILendingPositionId,
  LendingPositionIdDataSchema,
  IAddress,
  isAddress,
} from '@thesolidchain/sdk-common'
import { z } from 'zod'
import { ICompoundV3LendingPoolId, isCompoundV3LendingPoolId } from './ICompoundV3LendingPoolId'

/**
 * Unique signature to provide branded types to the interface
 */
export const __signature__: unique symbol = Symbol()

/**
 * @interface ICompoundV3LendingPositionId
 * ID for a position on Compound V3 protocols
 */
export interface ICompoundV3LendingPositionId extends ILendingPositionId, ICompoundV3LendingPositionIdData {
  /** Signature used to differentiate it from similar interfaces */
  readonly [__signature__]: symbol
  /** The pool ID associated with this position */
  readonly poolId: ICompoundV3LendingPoolId
  /** The wallet address of the position owner */
  readonly walletAddress: IAddress
}

/**
 * Zod schema for ICompoundV3LendingPositionId
 */
export const CompoundV3LendingPositionIdDataSchema = z.object({
  ...LendingPositionIdDataSchema.shape,
  poolId: z.custom<ICompoundV3LendingPoolId>((val) => isCompoundV3LendingPoolId(val)),
  walletAddress: z.custom<IAddress>((val) => isAddress(val)),
})

/**
 * Type for the data part of ICompoundV3LendingPositionId
 */
export type ICompoundV3LendingPositionIdData = Readonly<z.infer<typeof CompoundV3LendingPositionIdDataSchema>>

/**
 * Type guard for ICompoundV3LendingPositionId
 * @param maybePositionId
 * @returns true if the object is an ICompoundV3LendingPositionId
 */
export function isCompoundV3LendingPositionId(
  maybePositionId: unknown,
): maybePositionId is ICompoundV3LendingPositionId {
  return CompoundV3LendingPositionIdDataSchema.safeParse(maybePositionId).success
}
