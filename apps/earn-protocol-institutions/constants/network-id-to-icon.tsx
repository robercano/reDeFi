import { Icon, networkIdIconNameMap } from '@thesolidchain/app-earn-ui'
import { type SupportedNetworkIds } from '@thesolidchain/app-types'

export const networkSDKChainIdIconMap = (chainId: SupportedNetworkIds, size?: number) => {
  const iconName = networkIdIconNameMap[chainId]

  return <Icon iconName={iconName} size={size ?? 17} />
}
