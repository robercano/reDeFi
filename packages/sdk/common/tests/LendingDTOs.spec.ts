import { describe, expect, it } from 'vitest'
import { CollateralInfo } from '../src/lending-protocols/implementation/CollateralInfo'
import { DebtInfo } from '../src/lending-protocols/implementation/DebtInfo'
import { getChainInfoByChainId } from '../src/common/implementation/ChainFamilies'
import { Address } from '../src/common/implementation/Address'
import { Token } from '../src/common/implementation/Token'
import { Price } from '../src/common/implementation/Price'
import { TokenAmount } from '../src/common/implementation/TokenAmount'
import { Percentage } from '../src/common/implementation/Percentage'
import { RiskRatio } from '../src/common/implementation/RiskRatio'
import { RiskRatioType } from '../src/common/interfaces/IRiskRatio'

describe('Lending DTOs', () => {
  const chainInfo = getChainInfoByChainId(1)
  const mockToken = Token.createFrom({
    chainInfo,
    address: Address.createFromEthereum({ value: '0x1111111111111111111111111111111111111111' }),
    decimals: 18,
    symbol: 'MOCK',
    name: 'Mock Token'
  })
  
  const mockPrice = Price.createFrom({
    baseToken: mockToken,
    quoteToken: mockToken,
    value: 1
  })
  
  const mockTokenAmount = TokenAmount.createFrom({
    token: mockToken,
    amount: 1000n
  })
  
  const mockPercentage = Percentage.createFrom({
    value: 0.05
  })
  
  const mockRiskRatio = RiskRatio.createFrom({
    type: RiskRatioType.LTV,
    value: { value: 0.75 }
  })

  it('should create CollateralInfo', () => {
    const collateralInfo = CollateralInfo.createFrom({
      token: mockToken,
      price: mockPrice,
      priceUSD: mockPrice,
      liquidationThreshold: mockRiskRatio,
      maxSupply: mockTokenAmount,
      tokensLocked: mockTokenAmount,
      liquidationPenalty: mockPercentage
    })

    expect(collateralInfo.token.symbol).toBe('MOCK')
    expect(collateralInfo.liquidationPenalty.value).toBe(0.05)
  })

  it('should create DebtInfo', () => {
    const debtInfo = DebtInfo.createFrom({
      token: mockToken,
      price: mockPrice,
      priceUSD: mockPrice,
      interestRate: mockPercentage,
      totalBorrowed: mockTokenAmount,
      debtCeiling: mockTokenAmount,
      debtAvailable: mockTokenAmount,
      dustLimit: mockTokenAmount,
      originationFee: mockPercentage
    })

    expect(debtInfo.token.symbol).toBe('MOCK')
    expect(debtInfo.interestRate.value).toBe(0.05)
    expect(debtInfo.originationFee.value).toBe(0.05)
  })
})
