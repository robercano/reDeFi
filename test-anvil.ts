import { AnvilFork } from '@thesolidchain/testing-utils'
import { ChainFamilyMap } from '@thesolidchain/sdk-common'

async function run() {
  try {
    const fork = await AnvilFork.create({
      forkUrl: 'https://ethereum-rpc.publicnode.com',
      chainInfo: ChainFamilyMap.Ethereum.Mainnet,
    })
    console.log('SUCCESS: publicnode.com')
    await fork.dispose()
  } catch (e) {
    console.error('FAIL: publicnode.com', e)
  }

  try {
    const fork = await AnvilFork.create({
      forkUrl: 'https://eth.llamarpc.com',
      chainInfo: ChainFamilyMap.Ethereum.Mainnet,
    })
    console.log('SUCCESS: llamarpc.com')
    await fork.dispose()
  } catch (e) {
    console.error('FAIL: llamarpc.com', e)
  }
}

run()
