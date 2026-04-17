import { IBlockchainClientProvider } from '@thesolidchain/blockchain-client-common'
import { IContractsProvider, IERC4626 } from '@thesolidchain/contracts-provider-common'
import { Address, ChainFamilyMap, ChainInfo } from '@thesolidchain/sdk-common'
import { Tenderly, type Vnet } from '@thesolidchain/tenderly-utils'
import { BlockchainClientProviderMock } from '@thesolidchain/testing-utils'
import { ContractsProviderFactory } from '../src/implementation/ContractsProviderFactory'
import { ConfigurationProvider } from '@thesolidchain/configuration-provider'

describe.skip('Contracts Provider Service - ERC4626 Contract', () => {
  const configurationProvider = new ConfigurationProvider()
  const tenderly = new Tenderly()

  const chainInfo: ChainInfo = ChainFamilyMap.Base.Base

  const contractAddress = Address.createFromEthereum({
    value: '0xa09E82322f351154a155f9e0f9e6ddbc8791C794', // FleetCommander on Base
  })

  const USDC = Address.createFromEthereum({
    value: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
  })

  const receiverAddress = Address.createFromEthereum({
    value: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
  })

  let tenderlyFork: Vnet
  let contractsProvider: IContractsProvider
  let erc4626Contract: IERC4626
  let blockchainClientProvider: IBlockchainClientProvider

  const atBlock = 'latest'

  beforeEach(async () => {
    // Tenderly Fork
    tenderlyFork = await tenderly.createVnet({ chainInfo, atBlock })

    blockchainClientProvider = new BlockchainClientProviderMock({
      configProvider: configurationProvider,
      rpcUrl: tenderlyFork.getRpc(),
    })

    // Contracts Provider
    contractsProvider = ContractsProviderFactory.newContractsProvider({
      configProvider: configurationProvider,
      blockchainClientProvider,
    })

    erc4626Contract = await contractsProvider.getErc4626Contract({
      chainInfo,
      address: contractAddress,
    })

    expect(erc4626Contract).toBeDefined()
  })

  afterEach(() => {
    tenderlyFork.delete()
  })

  it('should retrieve asset', async () => {
    const asset = await erc4626Contract.asset()

    expect(asset).toBeDefined()
    expect(asset).toEqual(USDC.value)
  })

  it('should retrieve totalAssets', async () => {
    const totalAssets = await erc4626Contract.totalAssets()
    expect(totalAssets).toBeDefined()

    expect(totalAssets).toEqual(1000000n)
  })

  it('should generate deposit transaction', async () => {
    const rawAssetAmount = 1000000n

    const transactionInfo = await erc4626Contract.deposit(rawAssetAmount, receiverAddress.value)

    expect(transactionInfo).toBeDefined()
    expect(transactionInfo.description).toEqual('deposit execution')
    expect(transactionInfo.transaction).toBeDefined()
    expect(transactionInfo.transaction.calldata).toBeDefined()
    expect(transactionInfo.transaction.value).toEqual('0')
  })
})
