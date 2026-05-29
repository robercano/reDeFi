import { IAddress, isAddress, IToken, isToken, ILendingPoolId, LendingPoolIdDataSchema } from '@thesolidchain/sdk-common'
import { z } from 'zod'
import { ICompoundV3Protocol, isCompoundV3Protocol } from './ICompoundV3Protocol'

/**
 * Unique signature to provide branded types to the interface
 */
export const __signature__: unique symbol = Symbol()

/**
 * @interface ICompoundV3LendingPoolId
 * Identifier of a lending pool on the Compound v3 protocol
 */
export interface ICompoundV3LendingPoolId extends ILendingPoolId, ICompoundV3LendingPoolIdData {
  /** Interface signature used to differentiate it from similar interfaces */
  readonly [__signature__]: symbol
  /** Compound v3 protocol */
  readonly protocol: ICompoundV3Protocol
  /** The token used to collateralize the position */
  readonly collateralToken: IToken
  /** The token used to borrow funds (Base Asset in Compound V3) */
  readonly debtToken: IToken
  /** Address of the Comet market contract */
  readonly address: IAddress
}

/**
 * Zod schema for ICompoundV3LendingPoolId
 */
export const CompoundV3LendingPoolIdDataSchema = z.object({
  ...LendingPoolIdDataSchema.shape,
  protocol: z.custom<ICompoundV3Protocol>((val) => isCompoundV3Protocol(val)),
  collateralToken: z.custom<IToken>((val) => isToken(val)),
  debtToken: z.custom<IToken>((val) => isToken(val)),
  address: z.custom<IAddress>((val) => isAddress(val)),
})

/**
 * Type for the data part of ICompoundV3LendingPoolId
 */
export type ICompoundV3LendingPoolIdData = Readonly<z.infer<typeof CompoundV3LendingPoolIdDataSchema>>

/**
 * Type guard for ICompoundV3LendingPoolId
 * @param maybePoolId
 * @returns true if the object is an ICompoundV3LendingPoolId
 */
export function isCompoundV3LendingPoolId(maybePoolId: unknown): maybePoolId is ICompoundV3LendingPoolId {
  return CompoundV3LendingPoolIdDataSchema.safeParse(maybePoolId).success
}
