import { createAnvil, type Anvil } from '@viem/anvil'
import * as dotenv from 'dotenv'

dotenv.config({ path: '../../.env' })
dotenv.config({ path: '../../.env.local' })

let anvil: Anvil

export default async function globalSetup() {
  console.log('Starting local Anvil Fork for E2E tests on port 8545...')
  const alchemyKey = process.env.ALCHEMY_ENDPOINT_API_KEY
  const forkUrl = alchemyKey 
    ? `https://base-mainnet.g.alchemy.com/v2/${alchemyKey}`
    : 'https://mainnet.base.org'

  anvil = createAnvil({
    forkUrl,
    port: 8545,
    startTimeout: 60000,
  })

  await anvil.start()

  const localRpcUrl = 'http://127.0.0.1:8545'

  // Expose the RPC URL for Playwright tests if they need to interact directly
  process.env.NEXT_PUBLIC_TENDERLY_RPC_URL = localRpcUrl
  process.env.E2E_SDK_FORK_URL_MAINNET = localRpcUrl

  return async () => {
    console.log('Tearing down local Anvil Fork...')
    await anvil?.stop()
  }
}
