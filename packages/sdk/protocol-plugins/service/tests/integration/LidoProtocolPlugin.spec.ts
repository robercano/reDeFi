import { createWalletClient, createPublicClient, http, defineChain } from 'viem'
import * as dotenv from 'dotenv'
dotenv.config({ path: '../../../../.env' })
import { IProtocolPluginContext } from '@thesolidchain/protocol-plugins-common'
import {
  TokenAmount,
  Percentage,
  Address,
  ChainFamilyMap,
  ChainIds,
} from '@thesolidchain/sdk-common'
import { LidoProtocolPlugin } from '../../src/plugins/lido/implementation/LidoProtocolPlugin'
import { LidoYieldPoolId } from '../../src/plugins/lido/implementation/LidoYieldPoolId'
import { LidoYieldPositionId } from '../../src/plugins/lido/implementation/LidoYieldPositionId'
import { createProtocolPluginContext } from '../utils/CreateProtocolPluginContext'
import { AnvilFork, OracleManagerMock } from '@thesolidchain/testing-utils'
import { Price, FiatCurrency } from '@thesolidchain/sdk-common'

const LIDO_STETH_ADDRESS = '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84'
const ETH_RPC_URL = process.env.E2E_SDK_FORK_URL_MAINNET || 'https://cloudflare-eth.com'

describe('Lido Protocol Plugin (Integration)', () => {
  let ctx: IProtocolPluginContext
  let validLidoPoolId: LidoYieldPoolId
  let plugin: LidoProtocolPlugin
  let fork: AnvilFork
  let snapshotId: string

  beforeAll(async () => {
    // Spawn local Anvil node natively
    fork = await AnvilFork.create({
      forkUrl: ETH_RPC_URL,
      chainInfo: ChainFamilyMap.Ethereum.Mainnet,
    })

    ctx = await createProtocolPluginContext(ChainFamilyMap.Ethereum.Mainnet, {}, fork.forkUrl)
    validLidoPoolId = new LidoYieldPoolId(LIDO_STETH_ADDRESS, ChainFamilyMap.Ethereum.Mainnet)
    plugin = new LidoProtocolPlugin()
    plugin.initialize({ context: ctx })
  }, 60000)

  beforeEach(async () => {
    snapshotId = await fork.snapshot()
  })

  afterEach(async () => {
    if (snapshotId) {
      await fork.revert(snapshotId)
    }
  })

  afterAll(async () => {
    if (fork) {
      await fork.dispose()
    }
  })

  it('correctly populates pool configuration from blockchain data', async () => {
    const oracleMock = ctx.oracleManager as OracleManagerMock
    oracleMock.setSpotPrice({
      price: Price.createFrom({ value: '3000' }),
    } as any)

    const poolInfo = await plugin.getYieldPoolInfo(validLidoPoolId)

    expect(poolInfo).toBeDefined()
    expect(poolInfo.type).toBe('Yield')
    expect(poolInfo.yieldType).toBe('Rebasing')
    expect(poolInfo.underlyingToken.symbol).toBe('MOCK')
    expect(poolInfo.receiptToken.symbol).toBe('MOCK')
    expect(poolInfo.receiptToken.address.value).toBe(LIDO_STETH_ADDRESS)
    
    expect(poolInfo.currentApy).toBeInstanceOf(Percentage)
    expect(Number(poolInfo.currentApy.value)).toBeGreaterThan(0)
    
    expect(poolInfo.totalValueLocked).toBeDefined()
    expect(Number(poolInfo.totalValueLocked!.amount)).toBeGreaterThan(0)
  })

  it('correctly retrieves user lending position data from blockchain after deposit', async () => {
    const userAddress = '0xAAf00613A099DeAe24EeB2c21Ad2965CaDEac244' as const // Test User
    
    // Set user balance directly via Anvil custom RPC
    await fork.setETHBalance({
      amount: 10000000000000000000n, // 10 ETH
      walletAddress: Address.createFromEthereum({ value: userAddress }),
    })

    const rpcUrl = fork.forkUrl
    const localChain = defineChain({
      id: ChainIds.Mainnet,
      name: 'Local',
      network: 'local',
      nativeCurrency: { decimals: 18, name: 'Ether', symbol: 'ETH' },
      rpcUrls: { default: { http: [rpcUrl] }, public: { http: [rpcUrl] } },
    })

    const publicClient = createPublicClient({ chain: localChain, transport: http(rpcUrl) })
    const walletClient = createWalletClient({ chain: localChain, transport: http(rpcUrl) })

    const testClient = fork.transactionUtils.testClient
    await testClient.impersonateAccount({ address: userAddress })

    // Simulate sending 1 ETH to the Lido contract (fallback mints stETH)
    const depositHash = await walletClient.sendTransaction({
      account: userAddress,
      to: LIDO_STETH_ADDRESS as `0x${string}`,
      value: 1000000000000000000n, // 1 ETH
      chain: null,
    })
    await publicClient.waitForTransactionReceipt({ hash: depositHash })
    await testClient.stopImpersonatingAccount({ address: userAddress })

    const positionId = new LidoYieldPositionId(
      LIDO_STETH_ADDRESS,
      userAddress,
      ChainFamilyMap.Ethereum.Mainnet,
    )

    const position = await plugin.getYieldPosition(positionId)

    expect(position).toBeDefined()
    expect(position.id.id).toBe(positionId.id)
    expect(position.type).toBe('Yield')

    expect(position.currentAmount).toBeInstanceOf(TokenAmount)
    expect(position.currentAmount.token.symbol).toBe('MOCK')
    // Due to 1-2 wei precision differences in Lido math, use closeTo or a small margin.
    // We expect >= 0.99 ETH
    const etherValue = Number(position.currentAmount.amount) / 1e18
    expect(etherValue).toBeGreaterThan(0.99)
  }, 60000)
})
