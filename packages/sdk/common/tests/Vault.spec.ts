import { describe, expect, it } from 'vitest'
import { Address } from '../src/common/implementation/Address'
import { getChainInfoByChainId } from '../src/common/implementation/ChainFamilies'
import { Token } from '../src/common/implementation/Token'
import { Vault } from '../src/common/implementation/Vault'

describe('Vault', () => {
  it('should create a Vault instance', () => {
    const chainInfo = getChainInfoByChainId(1)
    const address = Address.createFromEthereum({
      value: '0x1234567890123456789012345678901234567890',
    })
    const assetToken = Token.createFrom({
      chainInfo,
      address,
      decimals: 18,
      symbol: 'USDC',
      name: 'USD Coin',
    })

    const vaultAddress = Address.createFromEthereum({
      value: '0x9876543210987654321098765432109876543210',
    })
    const vault = Vault.createFrom({
      chainInfo,
      address: vaultAddress,
      decimals: 18,
      symbol: 'vUSDC',
      name: 'Vault USDC',
      asset: assetToken,
    })

    expect(vault.symbol).toBe('vUSDC')
    expect(vault.asset.symbol).toBe('USDC')
    expect(vault.asset.decimals).toBe(18)
    expect(vault.chainInfo).toStrictEqual(chainInfo)
  })
})
