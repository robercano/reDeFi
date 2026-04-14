import { type SDKVaultType, type SupportedSDKNetworks } from '@thesolidchain/app-types'
import { subgraphNetworkToId } from '@thesolidchain/app-utils'
import { Address, ArmadaVaultId, getChainInfoByChainId } from '@thesolidchain/sdk-common'

import { serverOnlyErrorHandler } from '@/app/server-handlers/error-handler'
import { backendSDK } from '@/app/server-handlers/sdk/sdk-backend-client'

export async function getVaultDetails({
  vaultAddress,
  network,
}: {
  vaultAddress?: string
  network: SupportedSDKNetworks
}) {
  try {
    if (!vaultAddress) {
      return undefined
    }

    const chainId = subgraphNetworkToId(network)
    const chainInfo = getChainInfoByChainId(chainId)

    const fleetAddress = Address.createFromEthereum({
      value: vaultAddress,
    })
    const poolId = ArmadaVaultId.createFrom({
      chainInfo,
      fleetAddress,
    })
    const { vault } = await backendSDK.armada.users.getVaultRaw({
      vaultId: poolId,
    })

    return vault as SDKVaultType | undefined
  } catch (error) {
    return serverOnlyErrorHandler(
      'getVaultDetails',
      error instanceof Error ? error.message : 'Unknown error',
    )
  }
}
