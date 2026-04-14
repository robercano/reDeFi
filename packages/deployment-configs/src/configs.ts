import { Config } from '@thesolidchain/deployment-types'
import { ChainsType } from '@thesolidchain/hardhat-utils'
import { DeploymentChain } from '@thesolidchain/deployment-utils'
import { MainnetConfig } from './mainnet'
import { LocalhostConfig } from './localhost'

export type ConfigMap = Partial<Record<ChainsType | DeploymentChain, Config>>

export const DeploymentConfig: ConfigMap = {
  localhost: LocalhostConfig,
  mainnet: MainnetConfig,
}
