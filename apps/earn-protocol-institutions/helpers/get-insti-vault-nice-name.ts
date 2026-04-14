import { sdkNetworkToHumanNetwork, supportedSDKNetwork } from '@thesolidchain/app-utils'

export const getInstiVaultNiceName = ({
  symbol,
  network,
  institutionName,
}: {
  symbol: string
  network: string
  institutionName?: string
}) => {
  return `${institutionName ? `${institutionName} ` : ''}${symbol} ${sdkNetworkToHumanNetwork(supportedSDKNetwork(network))}`
}
