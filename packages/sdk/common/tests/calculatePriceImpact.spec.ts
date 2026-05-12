import { describe, expect, it } from 'vitest'
import { calculatePriceImpact } from '../src/swap/calculatePriceImpact'
import { Price } from '../src/common/implementation/Price'
import { Token } from '../src/common/implementation/Token'
import { ChainInfo } from '../src/common/implementation/ChainInfo'
import { Address } from '../src/common/implementation/Address'
import { FiatCurrency } from '../src/common/enums/FiatCurrency'

describe('calculatePriceImpact', () => {
  const chainInfo = ChainInfo.createFrom({ chainId: 1, name: 'Ethereum' })
  const token = Token.createFrom({
    chainInfo,
    address: Address.createFromEthereum({ value: '0x1111111111111111111111111111111111111111' }),
    decimals: 18,
    symbol: 'COL',
    name: 'Collateral',
  })

  it('should calculate price impact correctly', () => {
    const spotPrice = Price.createFrom({ token, currency: FiatCurrency.USD, value: '100' })
    const quotePrice = Price.createFrom({ token, currency: FiatCurrency.USD, value: '90' })
    const impact = calculatePriceImpact(spotPrice, quotePrice)
    expect(impact?.value).toBe(10)
  })

  it('should return null if either price is zero', () => {
    const spotPrice = Price.createFrom({ token, currency: FiatCurrency.USD, value: '0' })
    const quotePrice = Price.createFrom({ token, currency: FiatCurrency.USD, value: '90' })
    expect(calculatePriceImpact(spotPrice, quotePrice)).toBeNull()
  })

  it('should return null if either price is negative', () => {
    const spotPrice = Price.createFrom({ token, currency: FiatCurrency.USD, value: '-10' })
    const quotePrice = Price.createFrom({ token, currency: FiatCurrency.USD, value: '90' })
    expect(calculatePriceImpact(spotPrice, quotePrice)).toBeNull()
  })

  it('should return 0 if quote price is higher than spot price', () => {
    const spotPrice = Price.createFrom({ token, currency: FiatCurrency.USD, value: '90' })
    const quotePrice = Price.createFrom({ token, currency: FiatCurrency.USD, value: '100' })
    const impact = calculatePriceImpact(spotPrice, quotePrice)
    expect(impact?.value).toBe(0)
  })
})
