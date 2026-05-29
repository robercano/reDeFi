import { IAddress, isAddress, IToken, isToken, IYieldPoolId, YieldPoolIdDataSchema } from '@thesolidchain/sdk-common'
import { z } from 'zod'
import { ICompoundV3Protocol, isCompoundV3Protocol } from './ICompoundV3Protocol'

/**
 * Unique signature to provide branded types to the interface
 */
export const __signature__: unique symbol = Symbol()

/**
 * @interface ICompoundV3YieldPoolId
 * Identifier of a yield pool on the Compound v3 protocol
 */
export interface ICompoundV3YieldPoolId extends IYieldPoolId, ICompoundV3YieldPoolIdData {
  /** Interface signature used to differentiate it from similar interfaces */
  readonly [__signature__]: symbol
  /** Compound v3 protocol */
  readonly protocol: ICompoundV3Protocol
  /** The base asset that is supplied for yield */
  readonly underlyingToken: IToken
  /** The receipt token (e.g. cUSDCv3) representing the supplied asset */
  readonly receiptToken: IToken
  /** Address of the Comet market contract */
  readonly address: IAddress
}

/**
 * Zod schema for ICompoundV3YieldPoolId
 */
export const CompoundV3YieldPoolIdDataSchema = z.object({
  ...YieldPoolIdDataSchema.shape,
  protocol: z.custom<ICompoundV3Protocol>((val) => isCompoundV3Protocol(val)),
  underlyingToken: z.custom<IToken>((val) => isToken(val)),
  receiptToken: z.custom<IToken>((val) => isToken(val)),
  address: z.custom<IAddress>((val) => isAddress(val)),
})

/**
 * Type for the data part of ICompoundV3YieldPoolId
 */
export type ICompoundV3YieldPoolIdData = Readonly<z.infer<typeof CompoundV3YieldPoolIdDataSchema>>

/**
 * Type guard for ICompoundV3YieldPoolId
 * @param maybePoolId
 * @returns true if the object is an ICompoundV3YieldPoolId
 */
export function isCompoundV3YieldPoolId(maybePoolId: unknown): maybePoolId is ICompoundV3YieldPoolId {
  return CompoundV3YieldPoolIdDataSchema.safeParse(maybePoolId).success
}
