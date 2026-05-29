import { TenderlyFork } from '@thesolidchain/tenderly-utils'
import { ChainFamilyMap } from '@thesolidchain/sdk-common'
import * as dotenv from 'dotenv'

dotenv.config({ path: '../../.env' })
dotenv.config({ path: '../../.env.local' })

let fork: TenderlyFork

export default async function globalSetup() {
  console.log('Starting Tenderly Fork for E2E tests...')

  fork = await TenderlyFork.create({
    tenderlyApiUrl: `https://api.tenderly.co/api/v1/account/${process.env.TENDERLY_USER}/project/${process.env.TENDERLY_PROJECT}`,
    tenderlyAccessKey: process.env.TENDERLY_ACCESS_KEY as string,
    chainInfo: ChainFamilyMap.Base.Base,
    atBlock: 'latest',
  })

  const localRpcUrl = fork.forkUrl

  // Expose the RPC URL for Playwright tests if they need to interact directly
  process.env.NEXT_PUBLIC_TENDERLY_RPC_URL = localRpcUrl
  process.env.E2E_SDK_FORK_URL_MAINNET = localRpcUrl

  return async () => {
    console.log('Tearing down Tenderly Fork...')
    await fork?.dispose()
  }
}
