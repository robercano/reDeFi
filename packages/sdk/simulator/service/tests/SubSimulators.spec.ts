import { describe, it, expect } from 'vitest'
import { StakeSimulatorManager } from '../src/StakeSimulatorManager'
import { TransferSimulatorManager } from '../src/TransferSimulatorManager'
import { YieldSimulatorManager } from '../src/YieldSimulatorManager'
import { IProtocolManager } from '@thesolidchain/protocol-manager-common'
import { IBlockchainManager } from '@thesolidchain/blockchain-client-common'

describe('Sub-Simulator Stubs', () => {
  const mockProtocolManager = {} as IProtocolManager
  const mockBlockchainManager = {} as IBlockchainManager

  it('should instantiate StakeSimulatorManager', () => {
    const manager = new StakeSimulatorManager(mockProtocolManager, mockBlockchainManager)
    expect(manager).toBeDefined()
  })

  it('should instantiate TransferSimulatorManager', () => {
    const manager = new TransferSimulatorManager(mockProtocolManager, mockBlockchainManager)
    expect(manager).toBeDefined()
  })

  it('should instantiate YieldSimulatorManager', () => {
    const manager = new YieldSimulatorManager(mockProtocolManager, mockBlockchainManager)
    expect(manager).toBeDefined()
  })
})
