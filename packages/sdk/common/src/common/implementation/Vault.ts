import { SerializationService } from '../../services/SerializationService'
import { IToken } from '../interfaces/IToken'
import { IVault, IVaultData, __signature__ } from '../interfaces/IVault'
import { Token } from './Token'

/**
 * Type for the parameters of Vault
 */
export type VaultParameters = Omit<IVaultData, ''>

/**
 * Vault
 * @see IVault
 */
export class Vault extends Token implements IVault {
  /** SIGNATURE */
  readonly [__signature__] = __signature__

  /** ATTRIBUTES */
  readonly asset: IToken

  /** FACTORY */
  static createFrom(params: VaultParameters): Vault {
    return new Vault(params)
  }

  /** SEALED CONSTRUCTOR */
  private constructor(params: VaultParameters) {
    super(params)
    this.asset = Token.createFrom(params.asset)
  }
}

SerializationService.registerClass(Vault, { identifier: 'Vault' })
