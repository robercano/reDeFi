import { ILendingPositionId, LendingPositionIdDataSchema, IAddress, isAddress } from '@thesolidchain/sdk-common'
import { z } from 'zod'
import { IAaveV3LendingPoolId, isAaveV3LendingPoolId } from './IAaveV3LendingPoolId'

/**
 * Unique signature to provide branded types to the interface
 */
export const __signature__: unique symbol = Symbol()

/**
 * @interface IAaveV3LendingPositionId
 * @description ID for a position on Aave V3 protocols
 *
 * This interface is used to add all the methods that the interface supports
 *
 */
export interface IAaveV3LendingPositionId extends ILendingPositionId, IAaveV3LendingPositionIdData {
  /** Signature used to differentiate it from similar interfaces */
  readonly [__signature__]: symbol
  /** The pool ID associated with this position */
  readonly poolId: IAaveV3LendingPoolId
  /** The wallet address of the position owner */
  readonly walletAddress: IAddress
}

/**
 * @description Zod schema for IAaveV3LendingPositionId
 */
export const AaveV3PositionIdDataSchema = z.object({
  ...LendingPositionIdDataSchema.shape,
  poolId: z.custom<IAaveV3LendingPoolId>((val) => isAaveV3LendingPoolId(val)),
  walletAddress: z.custom<IAddress>((val) => isAddress(val)),
})

/**
 * Type for the data part of IAaveV3LendingPositionId
 */
export type IAaveV3LendingPositionIdData = Readonly<z.infer<typeof AaveV3PositionIdDataSchema>>

/**
 * @description Type guard for IAaveV3LendingPositionId
 * @param maybePositionId
 * @returns true if the object is an IAaveV3LendingPositionId
 */
export function isAaveV3LendingPositionId(
  maybePositionId: unknown,
): maybePositionId is IAaveV3LendingPositionId {
  return AaveV3PositionIdDataSchema.safeParse(maybePositionId).success
}
