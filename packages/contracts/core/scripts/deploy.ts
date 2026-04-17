import { loadDeploymentConfig } from '@thesolidchain/contracts-deployments'
import { DeploymentFlags, Deployments, ProviderTypes } from '@thesolidchain/deployment-utils'
import { ChainsType } from '@thesolidchain/hardhat-utils'
import hre from 'hardhat'
import { deployAll, configureAll, verifyAll, addAllDependencies } from '../src/lib/deployment'
import ContractsVersions from '../src/versions/contracts-versions.snapshot.json'

async function main() {
  const chain = hre.network.name as ChainsType

  const config = loadDeploymentConfig(chain)
  if (!config) {
    console.error(`No deployment config found for ${chain} network`)
    process.exit(1)
  }

  const ds = new Deployments({
    type: {
      provider: ProviderTypes.Hardhat,
      chain: chain,
      config: 'standard',
    },
    options: DeploymentFlags.Export,
    deploymentsDir: 'src/deployments',
    indexDir: 'src/',
  })

  await addAllDependencies(ds, ContractsVersions, config)
  await deployAll(ds, ContractsVersions, config)
  await configureAll(ds, ContractsVersions, config)
  await verifyAll(ds, ContractsVersions, config)

  ds.persist()

  console.log('Deployment done!')
}

main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .then(() => process.exit(0))
