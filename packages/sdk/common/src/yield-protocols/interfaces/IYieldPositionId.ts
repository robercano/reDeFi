import { z } from 'zod'
import { PositionType } from '../../common/enums/PositionType'
import { IPositionId, PositionIdDataSchema } from '../../common/interfaces/IPositionId'

/**
 * Unique signature to provide branded types to the interface
 */
export const __signature__: unique symbol = Symbol()

/**
 * IYieldPositionId
 * Unique identifier for a Yield position.
 */
export interface IYieldPositionId extends IPositionId, IYieldPositionIdData {
  readonly [__signature__]: symbol
  readonly type: PositionType.Yield
}

/**
 * Zod schema for IYieldPositionId
 */
export const YieldPositionIdDataSchema = z.object({
  ...PositionIdDataSchema.shape,
  type: z.literal(PositionType.Yield),
})

export type IYieldPositionIdData = Readonly<z.infer<typeof YieldPositionIdDataSchema>>

/**
 * Type guard for IYieldPositionId
 * @param maybeYieldPositionId Object to be checked
 * @returns true if the object is an IYieldPositionId
 */
export function isYieldPositionId(maybeYieldPositionId: unknown): maybeYieldPositionId is IYieldPositionId {
  return YieldPositionIdDataSchema.safeParse(maybeYieldPositionId).success
}
