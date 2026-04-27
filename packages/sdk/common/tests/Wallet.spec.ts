import { Address, AddressType, Wallet } from '../src'

describe('SDK Common | Wallet', () => {
  describe('#createFrom()', () => {
    it('should instantiate with right data', () => {
      const wallet = Wallet.createFrom({
        address: Address.createFromEthereum({
          value: '0x0b2c639c533813f4aa9d7837caf62653d097ff85',
        }),
      })

      expect(wallet.address.value).toEqual('0x0b2c639c533813f4aa9d7837caf62653d097ff85')
      expect(wallet.address.type).toEqual(AddressType.Ethereum)
    })
  })

  describe('#toString()', () => {
    it('should return the stringified address', () => {
      const wallet = Wallet.createFrom({
        address: Address.createFromEthereum({
          value: '0x0b2c639c533813f4aa9d7837caf62653d097ff85',
        }),
      })

      expect(wallet.toString()).toEqual(
        'Wallet: 0x0b2c639c533813f4aa9d7837caf62653d097ff85 (Ethereum)',
      )
    })
  })

  describe('#equals()', () => {
    it('should correctly compare two wallets', () => {
      const wallet1 = Wallet.createFrom({
        address: Address.createFromEthereum({
          value: '0x0b2c639c533813f4aa9d7837caf62653d097ff85',
        }),
      })

      const wallet2 = Wallet.createFrom({
        address: Address.createFromEthereum({
          value: '0x0b2c639c533813f4aa9d7837caf62653d097ff85',
        }),
      })

      const wallet3 = Wallet.createFrom({
        address: Address.createFromEthereum({
          value: '0x1234567890123456789012345678901234567890',
        }),
      })

      expect(wallet1.equals(wallet2)).toBeTruthy()
      expect(wallet1.equals(wallet3)).toBeFalsy()
    })
  })
})
