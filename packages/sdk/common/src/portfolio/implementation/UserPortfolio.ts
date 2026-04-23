import { SerializationService } from '../../services/SerializationService'
import { IUser } from '../../user/interfaces/IUser'
import { IHolding } from '../interfaces/IHolding'
import { IFiatCurrencyAmount } from '../../common/interfaces/IFiatCurrencyAmount'
import { IUserPortfolio, IUserPortfolioData, __signature__ } from '../interfaces/IUserPortfolio'

/**
 * Type for the parameters of UserPortfolio
 */
export type UserPortfolioParameters = IUserPortfolioData

/**
 * @name UserPortfolio
 * @see IUserPortfolio
 */
export class UserPortfolio implements IUserPortfolio {
  /** SIGNATURE */
  readonly [__signature__] = __signature__

  /** ATTRIBUTES */
  readonly user: IUser
  readonly walletHoldings: IHolding[]
  readonly totalFiatValue: IFiatCurrencyAmount

  private constructor(params: UserPortfolioParameters) {
    this.user = params.user
    this.walletHoldings = params.walletHoldings
    this.totalFiatValue = params.totalFiatValue
  }

  /** FACTORY */
  static createFrom(params: UserPortfolioParameters): UserPortfolio {
    return new UserPortfolio(params)
  }

  /** toString */
  toString(): string {
    return `UserPortfolio: ${this.walletHoldings.length} holdings ($${this.totalFiatValue.toString()})`
  }
}

SerializationService.registerClass(UserPortfolio, { identifier: 'UserPortfolio' })
