import { describe, it, expect, beforeAll, afterAll } from 'vitest'
import { AnvilFork } from '@thesolidchain/testing-utils'
import { ChainIds, ChainFamilyMap, Address } from '@thesolidchain/sdk-common'
import { RpcUrls } from './utils/testConfig'

/**
 * @group e2e
 */
describe('AnvilFork Integration Test', () => {
  let anvilFork: AnvilFork
  const testWallet = Address.createFromEthereum({
    value: '0x1234567890123456789012345678901234567890',
  })

  beforeAll(async () => {
    anvilFork = await AnvilFork.create({
      forkUrl: RpcUrls[ChainIds.Base],
      chainInfo: ChainFamilyMap.Base.Mainnet,
    })
  }, 60000)

  afterAll(async () => {
    if (anvilFork) {
      await anvilFork.dispose()
    }
  })

  it('should be able to set ETH balance locally on Anvil', async () => {
    const amountToSet = 1000000000000000000n // 1 ETH

    await anvilFork.setETHBalance({
      amount: amountToSet,
      walletAddress: testWallet,
    })

    const balance = await anvilFork.getETHBalance({
      walletAddress: testWallet,
    })

    expect(balance).toBe(amountToSet)
  })
})
