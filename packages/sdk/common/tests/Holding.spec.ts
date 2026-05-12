import { describe, expect, it } from 'vitest'
import { Holding } from '../src/portfolio/implementation/Holding'
import { getChainInfoByChainId } from '../src/common/implementation/ChainFamilies'
import { Address } from '../src/common/implementation/Address'
import { Token } from '../src/common/implementation/Token'
import { TokenAmount } from '../src/common/implementation/TokenAmount'
import { FiatCurrencyAmount } from '../src/common/implementation/FiatCurrencyAmount'
import { FiatCurrency } from '../src/common/enums/FiatCurrency'

describe('Holding', () => {
  const chainInfo = getChainInfoByChainId(1)
  const token = Token.createFrom({
    chainInfo,
    address: Address.createFromEthereum({ value: '0x1111111111111111111111111111111111111111' }),
    decimals: 18,
    symbol: 'MOCK',
    name: 'Mock Token',
  })

  const amount = TokenAmount.createFrom({
    token,
    amount: '1000000000000000000000',
  })

  const fiatValue = FiatCurrencyAmount.createFrom({
    fiat: FiatCurrency.USD,
    amount: '1500.5',
  })

  it('should create a Holding instance', () => {
    const holding = Holding.createFrom({
      amount,
      fiatValue,
    })

    expect(holding.amount).toBe(amount)
    expect(holding.fiatValue).toBe(fiatValue)
  })

  it('should stringify correctly', () => {
    const holding = Holding.createFrom({
      amount,
      fiatValue,
    })

    expect(holding.toString()).toContain('Holding:')
    expect(holding.toString()).toContain('MOCK')
  })
})
