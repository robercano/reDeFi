import { describe, it, expect, beforeAll, afterAll } from 'vitest'
import { TenderlyFork } from '@thesolidchain/tenderly-utils'
import { ChainIds, ChainFamilyMap, Address } from '@thesolidchain/sdk-common'
import * as dotenv from 'dotenv'

dotenv.config({ path: '../../../../.env' })

/**
 * @group e2e
 */
describe('TenderlyFork Integration Test', () => {
  let fork: TenderlyFork
  const testWallet = Address.createFromEthereum({
    value: '0x1234567890123456789012345678901234567890',
  })

  beforeAll(async () => {
    fork = await TenderlyFork.create({
      tenderlyApiUrl: `https://api.tenderly.co/api/v1/account/${process.env.TENDERLY_USER}/project/${process.env.TENDERLY_PROJECT}`,
      tenderlyAccessKey: process.env.TENDERLY_ACCESS_KEY as string,
      chainInfo: ChainFamilyMap.Ethereum.Mainnet,
      atBlock: 'latest',
    })
  }, 60000)

  afterAll(async () => {
    if (fork) {
      await fork.dispose()
    }
  })

  it('should be able to set ETH balance locally on Tenderly', async () => {
    const amountToSet = 1000000000000000000n // 1 ETH

    await fork.setETHBalance({
      amount: amountToSet,
      walletAddress: testWallet,
    })

    const balance = await fork.getETHBalance({
      walletAddress: testWallet,
    })

    expect(balance).toBe(amountToSet)
  })
})
