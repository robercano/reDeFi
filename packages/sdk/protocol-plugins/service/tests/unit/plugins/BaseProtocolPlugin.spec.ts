import { IProtocolPluginContext } from '@thesolidchain/protocol-plugins-common'
import { SimulationSteps, steps } from '@thesolidchain/sdk-common'
import { BaseProtocolPlugin } from '../../../src/implementation/BaseProtocolPlugin'
import { AaveV3ProtocolPlugin } from '../../../src/plugins/aave-v3/implementation/AAVEv3ProtocolPlugin'
import { createProtocolPluginContext } from '../../utils/CreateProtocolPluginContext'
import assert from 'assert'
import { ChainFamilyMap } from '@thesolidchain/sdk-common'

describe('Base Protocol Plugin', () => {
  let ctx: IProtocolPluginContext
  let baseProtocolPlugin: BaseProtocolPlugin
  beforeAll(async () => {
    ctx = await createProtocolPluginContext(ChainFamilyMap.Ethereum.Mainnet)
    baseProtocolPlugin = new AaveV3ProtocolPlugin()
  })

  it.skip('should correctly return the corresponding action builder for a given simulation step', () => {
    // action builders are deprecated, test skipped
  })
})
