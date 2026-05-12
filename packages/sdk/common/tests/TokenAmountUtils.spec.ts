import { Address, ChainInfo, Token, TokenAmount } from '../src'
import { formatTokenAmountHumanReadable } from '../src/common/utils/TokenAmountUtils'

describe('TokenAmountUtils', () => {
  describe('#formatTokenAmountHumanReadable()', () => {
    let mockTokenAmount: import('../src').ITokenAmount

    beforeAll(() => {
      const USDC = Token.createFrom({
        address: Address.createFromEthereum({
          value: '0x0b2c639c533813f4aa9d7837caf62653d097ff85',
        }),
        chainInfo: ChainInfo.createFrom({
          chainId: 1,
          name: 'Ethereum',
        }),
        decimals: 6,
        symbol: 'USDC',
        name: 'USD Coin',
      })

      mockTokenAmount = TokenAmount.createFrom({
        token: USDC,
        amount: '1234567.89',
      })
    })

    it('should format token amount using default options', () => {
      const formatted = formatTokenAmountHumanReadable(mockTokenAmount)
      expect(formatted).toEqual('1.23M')
    })

    it('should format token amount using custom options', () => {
      const formatted = formatTokenAmountHumanReadable(mockTokenAmount, {
        maximumFractionDigits: 4,
      })
      expect(formatted).toEqual('1.2346M')
    })
  })
})
