import { describe, expect, it } from 'vitest'
import { UserPortfolio } from '../src/portfolio/implementation/UserPortfolio'
import { User } from '../src/user/implementation/User'
import { Holding } from '../src/portfolio/implementation/Holding'
import { getChainInfoByChainId } from '../src/common/implementation/ChainFamilies'
import { Address } from '../src/common/implementation/Address'
import { Token } from '../src/common/implementation/Token'
import { TokenAmount } from '../src/common/implementation/TokenAmount'
import { FiatCurrencyAmount } from '../src/common/implementation/FiatCurrencyAmount'
import { FiatCurrency } from '../src/common/enums/FiatCurrency'

describe('UserPortfolio', () => {
  const chainInfo = getChainInfoByChainId(1)
  const token = Token.createFrom({
    chainInfo,
    address: Address.createFromEthereum({ value: '0x1111111111111111111111111111111111111111' }),
    decimals: 18,
    symbol: 'MOCK',
    name: 'Mock Token'
  })

  const amount = TokenAmount.createFrom({
    token,
    amount: '1000000000000000000000'
  })

  const fiatValue = FiatCurrencyAmount.createFrom({
    fiat: FiatCurrency.USD,
    amount: '1500.5'
  })

  const holding = Holding.createFrom({
    amount,
    fiatValue
  })

  const user = User.createFromEthereum(1, '0x2222222222222222222222222222222222222222')

  it('should create a UserPortfolio instance', () => {
    const portfolio = UserPortfolio.createFrom({
      user,
      walletHoldings: [holding],
      totalFiatValue: fiatValue
    })

    expect(portfolio.user).toBe(user)
    expect(portfolio.walletHoldings.length).toBe(1)
    expect(portfolio.totalFiatValue).toBe(fiatValue)
  })

  it('should stringify correctly', () => {
    const portfolio = UserPortfolio.createFrom({
      user,
      walletHoldings: [holding],
      totalFiatValue: fiatValue
    })

    expect(portfolio.toString()).toContain('UserPortfolio:')
    expect(portfolio.toString()).toContain('1 holdings')
  })
})
