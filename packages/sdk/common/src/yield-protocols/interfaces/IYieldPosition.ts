import { z } from 'zod'
import { PositionType } from '../../common/enums/PositionType'
import { IPosition, PositionDataSchema } from '../../common/interfaces/IPosition'
import { ITokenAmount, isTokenAmount } from '../../common/interfaces/ITokenAmount'
import { IYieldPoolId, isYieldPoolId } from './IYieldPoolId'
import { IYieldPositionId, isYieldPositionId } from './IYieldPositionId'

/**
 * Unique signature to provide branded types to the interface
 */
export const __signature__: unique symbol = Symbol()

/**
 * IYieldPosition
 * Represents a position in a Yield protocol
 */
export interface IYieldPosition extends IPosition, IYieldPositionData {
  /** Signature to differentiate from similar interfaces */
  readonly [__signature__]: symbol
  /** Unique identifier for the position */
  readonly id: IYieldPositionId
  /** Pool ID where the position is located */
  readonly poolId: IYieldPoolId
  /** Amount originally deposited or the principal basis */
  readonly principalAmount: ITokenAmount
  /** Current total value including rebases or value appreciation */
  readonly currentAmount: ITokenAmount
  /** Any secondary claimable reward tokens accumulated */
  readonly claimableRewards: ITokenAmount[]

  // Re-declaring the properties to narrow the types
  readonly type: PositionType.Yield
}

/**
 * Zod schema for IYieldPosition
 */
export const YieldPositionDataSchema = z.object({
  ...PositionDataSchema.shape,
  id: z.custom<IYieldPositionId>((val) => isYieldPositionId(val)),
  poolId: z.custom<IYieldPoolId>((val) => isYieldPoolId(val)),
  principalAmount: z.custom<ITokenAmount>((val) => isTokenAmount(val)),
  currentAmount: z.custom<ITokenAmount>((val) => isTokenAmount(val)),
  claimableRewards: z.array(z.custom<ITokenAmount>((val) => isTokenAmount(val))),
  type: z.literal(PositionType.Yield),
})

/**
 * Type for the data part of the IYieldPosition interface
 */
export type IYieldPositionData = Readonly<z.infer<typeof YieldPositionDataSchema>>

/**
 * Type guard for IYieldPosition
 * @param maybeYieldPosition Object to be checked
 * @returns true if the object is an IYieldPosition
 */
export function isYieldPosition(maybeYieldPosition: unknown): maybeYieldPosition is IYieldPosition {
  return YieldPositionDataSchema.safeParse(maybeYieldPosition).success
}
