import { createWalletClient, createPublicClient, http, defineChain } from 'viem'
import * as dotenv from 'dotenv'
dotenv.config({ path: '../../../../.env' })
import { IProtocolPluginContext } from '@thesolidchain/protocol-plugins-common'
import {
  TokenAmount,
  Address,
  User,
  Wallet,
  ChainInfo,
  Token,
} from '@thesolidchain/sdk-common'
import { CompoundV3ProtocolPlugin } from '../../src/plugins/compound-v3/CompoundV3ProtocolPlugin'
import { createProtocolPluginContext } from '../utils/CreateProtocolPluginContext'
import { CompoundV3LendingPoolId } from '../../src/plugins/compound-v3/implementation/CompoundV3LendingPoolId'
import { CompoundV3LendingPositionId } from '../../src/plugins/compound-v3/implementation/CompoundV3LendingPositionId'
import { CompoundV3YieldPoolId } from '../../src/plugins/compound-v3/implementation/CompoundV3YieldPoolId'
import { CompoundV3YieldPositionId } from '../../src/plugins/compound-v3/implementation/CompoundV3YieldPositionId'
import { CompoundV3Protocol } from '../../src/plugins/compound-v3/implementation/CompoundV3Protocol'
import { ChainFamilyMap } from '@thesolidchain/sdk-common'
import { TenderlyFork } from '@thesolidchain/tenderly-utils'

describe('Compound V3 Protocol Plugin (Integration)', () => {
  let ctx: IProtocolPluginContext
  let compoundV3ProtocolPlugin: CompoundV3ProtocolPlugin
  let fork: TenderlyFork
  let snapshotId: string
  
  const cUSDCv3Address = '0xc3d688B66703497DAA19211EEdff47f25384cdc3'
  const usdcAddress = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'

  const mockProtocol = CompoundV3Protocol.createFrom({
    name: 'CompoundV3',
    chainFamily: 'Ethereum',
    version: '3.0',
    description: 'Compound V3',
    chainInfo: ChainFamilyMap.Ethereum.Mainnet,
  } as any)

  const usdcToken = Token.createFrom({
    address: Address.createFromEthereum({ value: usdcAddress }),
    decimals: 6,
    symbol: 'USDC',
    name: 'USD Coin',
    chainInfo: ChainFamilyMap.Ethereum.Mainnet,
  })

  const cUSDCv3Token = Token.createFrom({
    address: Address.createFromEthereum({ value: cUSDCv3Address }),
    decimals: 6,
    symbol: 'cUSDCv3',
    name: 'Compound USDC III',
    chainInfo: ChainFamilyMap.Ethereum.Mainnet,
  })

  const cUSDCv3YieldPoolId = CompoundV3YieldPoolId.createFrom({
    id: 'CompoundV3_cUSDCv3_Yield',
    protocol: mockProtocol,
    address: Address.createFromEthereum({ value: cUSDCv3Address }),
    underlyingToken: usdcToken,
    receiptToken: cUSDCv3Token,
  } as any)

  beforeAll(async () => {
    fork = await TenderlyFork.create({
      tenderlyApiUrl: `https://api.tenderly.co/api/v1/account/${process.env.TENDERLY_USER}/project/${process.env.TENDERLY_PROJECT}`,
      tenderlyAccessKey: process.env.TENDERLY_ACCESS_KEY as string,
      chainInfo: ChainFamilyMap.Ethereum.Mainnet,
      atBlock: 'latest',
    })
    ctx = await createProtocolPluginContext(ChainFamilyMap.Ethereum.Mainnet, {}, fork.forkUrl)
    compoundV3ProtocolPlugin = new CompoundV3ProtocolPlugin()
    compoundV3ProtocolPlugin.initialize({
      context: ctx,
    })
  }, 30000)

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

  it('correctly populates yield pool info', async () => {
    const poolInfo = await compoundV3ProtocolPlugin.yield!.getYieldPoolInfo(cUSDCv3YieldPoolId)
    expect(poolInfo).toBeDefined()
  })

  it('executes getSupplyTransaction on the fork and updates yield position', async () => {
    const rpcUrl = fork.forkUrl
    const tenderlyChain = defineChain({
      id: 1,
      name: 'Tenderly',
      network: 'tenderly',
      nativeCurrency: { decimals: 18, name: 'Ether', symbol: 'ETH' },
      rpcUrls: { default: { http: [rpcUrl] }, public: { http: [rpcUrl] } },
    })

    const publicClient = createPublicClient({ chain: tenderlyChain, transport: http(rpcUrl) })
    const walletClient = createWalletClient({ chain: tenderlyChain, transport: http(rpcUrl) })

    const userAddress = '0xAAf00613A099DeAe24EeB2c21Ad2965CaDEac244' as const // E2E Test User

    const supplyAmount = TokenAmount.createFrom({
      token: usdcToken,
      amount: '100', // 100 USDC
    })

    // 1. Set 1000 USDC balance using Tenderly
    await fork.setErc20Balance({
      walletAddress: Address.createFromEthereum({ value: userAddress }),
      amount: TokenAmount.createFrom({ token: usdcToken, amount: '1000' })
    })

    // 2. Generate supply transaction
    const positionId = CompoundV3YieldPositionId.createFrom({
      id: 'forkPositionId',
      poolId: cUSDCv3YieldPoolId,
      walletAddress: Address.createFromEthereum({ value: userAddress }),
    })

    const supplyTxInfo = await compoundV3ProtocolPlugin.yield!.getDepositTransaction({
      poolId: cUSDCv3YieldPoolId,
      amount: supplyAmount as TokenAmount,
      user: User.createFrom({
        chainInfo: ChainInfo.createFrom({ chainId: 1, name: 'Ethereum Mainnet' }),
        wallet: Wallet.createFrom({ address: Address.createFromEthereum({ value: userAddress }) }),
      }),
    })

    // 3. Approve Compound Pool
    const approveHash = await walletClient.writeContract({
      account: userAddress,
      address: usdcAddress,
      abi: [
        {
          name: 'approve',
          type: 'function',
          stateMutability: 'nonpayable',
          inputs: [
            { name: 'spender', type: 'address' },
            { name: 'amount', type: 'uint256' },
          ],
          outputs: [{ type: 'bool' }],
        },
      ],
      functionName: 'approve',
      args: [supplyTxInfo.transaction.target.value as `0x${string}`, BigInt(100 * 10 ** 6)],
      chain: null,
    })
    await publicClient.waitForTransactionReceipt({ hash: approveHash })

    // 4. Execute Supply Transaction
    const supplyHash = await walletClient.sendTransaction({
      account: userAddress,
      to: supplyTxInfo.transaction.target.value as `0x${string}`,
      data: supplyTxInfo.transaction.calldata as `0x${string}`,
      value: BigInt(supplyTxInfo.transaction.value),
      chain: null,
    })
    await publicClient.waitForTransactionReceipt({ hash: supplyHash })

    // 5. Verify Position updated
    const newPosition = await compoundV3ProtocolPlugin.yield!.getYieldPosition(positionId)
    
    expect(Number(newPosition.principalAmount.amount)).toBeGreaterThan(80)
  }, 60000)
})
