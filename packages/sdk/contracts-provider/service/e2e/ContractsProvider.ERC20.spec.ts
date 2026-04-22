import { IBlockchainManager } from '@thesolidchain/blockchain-client-common'
import { IContractsProvider, IERC20 } from '@thesolidchain/contracts-provider-common'
import { Address, ChainFamilyMap, ChainInfo, TokenAmount, Token } from '@thesolidchain/sdk-common'
import { Tenderly, type Vnet } from '@thesolidchain/tenderly-utils'
import { BlockchainClientProviderMock } from '@thesolidchain/testing-utils'
import { ContractsProviderFactory } from '../src/implementation/ContractsProviderFactory'
import { ConfigurationProvider } from '@thesolidchain/configuration-provider'

describe.skip('Contracts Provider Service - ERC20 Contract', () => {
  const configurationProvider = new ConfigurationProvider()
  const tenderly = new Tenderly()

  const chainInfo: ChainInfo = ChainFamilyMap.Ethereum.Mainnet

  const contractAddress = Address.createFromEthereum({
    value: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', // USDC
  })

  const userAddress = Address.createFromEthereum({
    value: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
  })

  const spenderAddress = Address.createFromEthereum({
    value: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
  })

  const mockToken = Token.createFrom({
    address: contractAddress,
    chainInfo,
    decimals: 6,
    name: 'USD Coin',
    symbol: 'USDC',
  })

  let tenderlyFork: Vnet
  let contractsProvider: IContractsProvider
  let erc20Contract: IERC20
  let blockchainClientProvider: IBlockchainManager

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

    erc20Contract = await contractsProvider.getErc20Contract({
      chainInfo,
      address: contractAddress,
    })

    expect(erc20Contract).toBeDefined()
  })

  afterEach(() => {
    tenderlyFork.delete()
  })

  it('should retrieve information from the ERC20 contract', async () => {
    await tenderlyFork.setErc20Balance({
      amount: TokenAmount.createFromBaseUnit({
        token: mockToken,
        amount: '123000000', // 123 USDC
      }),
      walletAddress: userAddress,
    })

    const name = await erc20Contract.name()
    expect(name).toEqual('USD Coin')

    const symbol = await erc20Contract.symbol()
    expect(symbol).toEqual('USDC')

    const decimals = await erc20Contract.decimals()
    expect(decimals).toEqual(6)

    const userBalance = await erc20Contract.balanceOf(userAddress.value)
    expect(userBalance).toBeDefined()
    expect(userBalance).toEqual(123000000n)

    const userAllowance = await erc20Contract.allowance(userAddress.value, spenderAddress.value)
    expect(userAllowance).toBeDefined()
    expect(userAllowance).toEqual(0n)
  })

  it('should generate approve transaction', async () => {
    const approveTransaction = await erc20Contract.approve(spenderAddress.value, 84000000n)

    expect(approveTransaction).toBeDefined()
    expect(approveTransaction.description).toEqual('approve execution')
    expect(approveTransaction.transaction).toBeDefined()
    expect(approveTransaction.transaction.calldata).toBeDefined()
    expect(approveTransaction.transaction.value).toEqual('0')
  })
})
