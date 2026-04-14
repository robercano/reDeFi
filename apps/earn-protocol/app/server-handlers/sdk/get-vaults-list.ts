import { SupportedNetworkIds } from '@thesolidchain/app-types'
import { getChainInfoByChainId } from '@thesolidchain/sdk-common'

import { backendSDK } from '@/app/server-handlers/sdk/sdk-backend-client'

export const getVaultsListRaw = async () => {
  const vaultsListByNetwork = await Promise.all(
    Object.values(SupportedNetworkIds)
      .filter((networkId): networkId is number => typeof networkId === 'number')
      .map((networkId) =>
        backendSDK.armada.users.getVaultsRaw({
          chainInfo: getChainInfoByChainId(Number(networkId)),
        }),
      ),
  )

  return {
    vaults: vaultsListByNetwork.flatMap(({ vaults }) => vaults),
    callDataTimestamp: Date.now(),
  }
}
