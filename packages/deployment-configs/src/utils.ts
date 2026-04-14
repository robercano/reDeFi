import { ChainsType } from '@thesolidchain/hardhat-utils'
import { DeploymentConfig } from './configs'
import { Config } from '@thesolidchain/deployment-types'

export function loadDeploymentConfig(network: ChainsType): Config | undefined {
  return DeploymentConfig[network]
}
