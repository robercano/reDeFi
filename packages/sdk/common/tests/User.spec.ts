import { describe, expect, it } from 'vitest'
import { Address } from '../src/common/implementation/Address'
import { getChainInfoByChainId } from '../src/common/implementation/ChainFamilies'
import { Wallet } from '../src/common/implementation/Wallet'
import { User } from '../src/user/implementation/User'

describe('User', () => {
  it('should create a User from parameters', () => {
    const chainInfo = getChainInfoByChainId(1)
    const wallet = Wallet.createFrom({
      address: Address.createFromEthereum({ value: '0x1234567890123456789012345678901234567890' }),
    })
    const user = User.createFrom({ chainInfo, wallet })

    expect(user.chainInfo).toBe(chainInfo)
    expect(user.wallet).toBe(wallet)
  })

  it('should create a User from Ethereum helper', () => {
    const user = User.createFromEthereum(1, '0x1234567890123456789012345678901234567890')
    expect(user.chainInfo.chainId).toBe(1)
    expect(user.wallet.address.value).toBe('0x1234567890123456789012345678901234567890')
  })

  it('should evaluate equality correctly', () => {
    const chainInfo = getChainInfoByChainId(1)
    const wallet1 = Wallet.createFrom({
      address: Address.createFromEthereum({ value: '0x1234567890123456789012345678901234567890' }),
    })
    const wallet2 = Wallet.createFrom({
      address: Address.createFromEthereum({ value: '0x0987654321098765432109876543210987654321' }),
    })

    const user1 = User.createFrom({ chainInfo, wallet: wallet1 })
    const user2 = User.createFrom({ chainInfo, wallet: wallet1 })
    const user3 = User.createFrom({ chainInfo, wallet: wallet2 })

    expect(user1.equals(user2)).toBe(true)
    expect(user1.equals(user3)).toBe(false)
  })

  it('should format toString correctly', () => {
    const user = User.createFromEthereum(1, '0x1234567890123456789012345678901234567890')
    expect(user.toString()).toContain('User: Wallet: 0x1234567890123456789012345678901234567890')
  })
})
