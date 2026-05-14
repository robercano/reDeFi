import { describe, it, expect } from 'vitest'
import { SimulatorManager } from '../src/SimulatorManager'
import { IProtocolManager } from '@thesolidchain/protocol-manager-common'
import { IBlockchainManager } from '@thesolidchain/blockchain-client-common'

describe('SimulatorManager', () => {
  const mockProtocolManager = {} as IProtocolManager
  const mockBlockchainManager = {} as IBlockchainManager

  it('should instantiate and expose sub-simulators', () => {
    const manager = new SimulatorManager(mockProtocolManager, mockBlockchainManager)

    expect(manager.lend).toBeDefined()
    expect(manager.stake).toBeDefined()
    expect(manager.transfer).toBeDefined()
    expect(manager.yield).toBeDefined()
  })
})
