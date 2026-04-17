import { z } from 'zod'
import { IToken, TokenDataSchema, isToken } from './IToken'

/**
 * Unique signature to provide branded types to the interface
 */
export const __signature__: unique symbol = Symbol()

/**
 * @name IVault
 * @description Represents an ERC4626 Vault, which is an ERC20 token itself and wrapped around an underlying asset token
 */
export interface IVault extends IToken {
  /** Signature to differentiate from similar interfaces */
  readonly [__signature__]: symbol
  
  /** The underlying ERC20 token asset of the vault */
  readonly asset: IToken
}

/**
 * @description Zod schema for IVault
 */
export const VaultDataSchema = TokenDataSchema.and(
  z.object({
    asset: z.custom<IToken>((val) => isToken(val)),
  })
)

/**
 * Type for the data part of the IVault interface
 */
export type IVaultData = Readonly<z.infer<typeof VaultDataSchema>>

/**
 * @description Type guard for IVault
 * @param maybeVaultData
 * @returns true if the object is an IVault
 */
export function isVault(maybeVaultData: unknown): maybeVaultData is IVault {
  return isVaultData(maybeVaultData)
}

/**
 * @description Type guard for IVaultData
 * @param maybeVaultData
 * @returns true if the object is an IVaultData
 */
export function isVaultData(maybeVaultData: unknown): maybeVaultData is IVaultData {
  return VaultDataSchema.safeParse(maybeVaultData).success
}
