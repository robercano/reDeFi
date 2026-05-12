import { createWalletClient, createPublicClient, http, defineChain } from 'viem'
import { mainnet } from 'viem/chains'
import * as dotenv from 'dotenv'
dotenv.config({ path: '../../../../.env' })
import { IProtocolPluginContext } from '@thesolidchain/protocol-plugins-common'
import { Price, RiskRatio, TokenAmount, Percentage, Address, User, Wallet, ChainInfo } from '@thesolidchain/sdk-common'
import { AaveV3ProtocolPlugin } from '../../src/plugins/aave-v3/implementation/AAVEv3ProtocolPlugin'
import { getAaveV3PoolIdMock } from '../mocks/AAVEv3PoolIdMock'
import { createProtocolPluginContext } from '../utils/CreateProtocolPluginContext'
import { IAaveV3LendingPoolId } from '../../src/plugins/aave-v3/interfaces/IAaveV3LendingPoolId'
import { AaveV3LendingPositionId } from '../../src/plugins/aave-v3/implementation/AaveV3LendingPositionId'
import { LendingPositionType } from '@thesolidchain/sdk-common'
import { ChainFamilyMap } from '@thesolidchain/sdk-common'
import { TenderlyFork } from '@thesolidchain/tenderly-utils'

describe('AAVEv3 Protocol Plugin (Integration)', () => {
  let ctx: IProtocolPluginContext
  let validAaveV3PoolId: IAaveV3LendingPoolId
  let aaveV3ProtocolPlugin: AaveV3ProtocolPlugin
  let fork: TenderlyFork
  let snapshotId: string

  beforeAll(async () => {
    fork = await TenderlyFork.create({
      tenderlyApiUrl: `https://api.tenderly.co/api/v1/account/${process.env.TENDERLY_USER}/project/${process.env.TENDERLY_PROJECT}`,
      tenderlyAccessKey: process.env.TENDERLY_ACCESS_KEY as string,
      chainInfo: ChainFamilyMap.Ethereum.Mainnet,
      atBlock: 'latest',
    })
    ctx = await createProtocolPluginContext(ChainFamilyMap.Ethereum.Mainnet, {}, fork.forkUrl)
    validAaveV3PoolId = await getAaveV3PoolIdMock()
    aaveV3ProtocolPlugin = new AaveV3ProtocolPlugin()
    aaveV3ProtocolPlugin.initialize({
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
  // added skip since Aave adds new tokens which doesn't affect us, but which causing to this test to fail
  // (aggread with team as temporary solution)
  it.skip('correctly populates collateral configuration from blockchain data', async () => {
    const pool = await aaveV3ProtocolPlugin.getLendingPool(validAaveV3PoolId)
    const aaveV3PoolInfo = await aaveV3ProtocolPlugin.getLendingPoolInfo(pool.id)

    const aaveV3PoolCollateralInfo = aaveV3PoolInfo.collateral

    expect(aaveV3PoolCollateralInfo).toBeDefined()
    expect(aaveV3PoolCollateralInfo).toMatchObject({
      token: expect.objectContaining(pool.collateralToken),
      price: expect.anything(),
      priceUSD: expect.anything(),
      liquidationThreshold: expect.anything(),
      tokensLocked: expect.anything(),
      maxSupply: expect.anything(),
      liquidationPenalty: expect.anything(),
    })

    const price = aaveV3PoolCollateralInfo!.price
    expect(price).toBeInstanceOf(Price)
    expect(Number(price.value)).toBeGreaterThan(0)

    const priceUSD = aaveV3PoolCollateralInfo!.priceUSD
    expect(priceUSD).toBeInstanceOf(Price)
    expect(Number(priceUSD.value)).toBeGreaterThan(0)

    const liquidationThreshold = aaveV3PoolCollateralInfo!.liquidationThreshold
    expect(liquidationThreshold).toBeInstanceOf(RiskRatio)
    expect(liquidationThreshold.toLTV().value).toBeGreaterThan(0)
    expect(liquidationThreshold.toLTV().value).toBeLessThan(100)

    const tokensLocked = aaveV3PoolCollateralInfo!.tokensLocked
    expect(tokensLocked).toBeInstanceOf(TokenAmount)
    expect(Number(tokensLocked.amount)).toBeGreaterThan(0)

    const maxSupply = aaveV3PoolCollateralInfo!.maxSupply
    expect(maxSupply).toBeInstanceOf(TokenAmount)
    expect(Number(maxSupply.amount)).toBeGreaterThan(0)

    const liquidationPenalty = aaveV3PoolCollateralInfo!.liquidationPenalty
    expect(liquidationPenalty).toBeInstanceOf(Percentage)
    expect(Number(liquidationPenalty.value)).toBeGreaterThan(100)
  })

  // added skip since Aave adds new tokens which doesn't affect us, but which causing to this test to fail
  // (aggread with team as temporary solution)
  it.skip('correctly populates debt configuration from blockchain data', async () => {
    const pool = await aaveV3ProtocolPlugin.getLendingPool(validAaveV3PoolId)
    const aaveV3PoolInfo = await aaveV3ProtocolPlugin.getLendingPoolInfo(pool.id)

    const aaveV3PoolDebtInfo = aaveV3PoolInfo.debt

    expect(aaveV3PoolDebtInfo).toBeDefined()
    expect(aaveV3PoolDebtInfo).toMatchObject({
      token: expect.objectContaining(pool.debtToken),
      price: expect.anything(),
      priceUSD: expect.anything(),
      interestRate: expect.anything(),
      totalBorrowed: expect.anything(),
      debtCeiling: expect.anything(),
      debtAvailable: expect.anything(),
      dustLimit: expect.anything(),
      originationFee: expect.anything(),
    })

    const price = aaveV3PoolDebtInfo!.price
    expect(price).toBeInstanceOf(Price)
    expect(Number(price.value)).toBeGreaterThan(0)

    const priceUSD = aaveV3PoolDebtInfo!.priceUSD
    expect(priceUSD).toBeInstanceOf(Price)
    expect(Number(priceUSD.value)).toBeGreaterThan(0)

    const totalBorrowed = aaveV3PoolDebtInfo!.totalBorrowed
    expect(totalBorrowed).toBeInstanceOf(TokenAmount)
    expect(Number(totalBorrowed.amount)).toBeGreaterThan(0)

    const debtCeiling = aaveV3PoolDebtInfo!.debtCeiling
    expect(debtCeiling).toBeInstanceOf(TokenAmount)
    expect(Number(debtCeiling.amount)).toBeGreaterThan(0)

    const debtAvailable = aaveV3PoolDebtInfo!.debtAvailable
    expect(debtAvailable).toBeInstanceOf(TokenAmount)
    expect(Number(debtAvailable.amount)).toBeGreaterThan(0)

    const dustLimit = aaveV3PoolDebtInfo!.dustLimit
    expect(dustLimit).toBeInstanceOf(TokenAmount)
    expect(Number(dustLimit.amount)).toBe(0)

    const originationFee = aaveV3PoolDebtInfo!.originationFee
    expect(originationFee).toBeInstanceOf(Percentage)
  })

  it('correctly retrieves user lending position data from blockchain data', async () => {
    // using a known pool (aaveV3PoolIdMock) and a mock address that probably has 0 balance
    const positionId = AaveV3LendingPositionId.createFrom({
      id: 'mockPositionId',
      poolId: validAaveV3PoolId,
      walletAddress: Address.createFromEthereum({ value: '0x1234567890123456789012345678901234567890' }),
    })

    const position = await aaveV3ProtocolPlugin.getLendingPosition(positionId)

    expect(position).toBeDefined()
    expect(position.id).toBe(positionId)
    expect(position.subtype).toBe(LendingPositionType.Borrow)
    
    expect(position.collateralAmount).toBeInstanceOf(TokenAmount)
    expect(position.collateralAmount.token.address.value).toBe(validAaveV3PoolId.collateralToken.address.value)
    // Balance might be zero for this random address
    expect(Number(position.collateralAmount.amount)).toBeGreaterThanOrEqual(0)

    expect(position.debtAmount).toBeInstanceOf(TokenAmount)
    expect(position.debtAmount.token.address.value).toBe(validAaveV3PoolId.debtToken.address.value)
    expect(Number(position.debtAmount.amount)).toBeGreaterThanOrEqual(0)
  })

  it('executes getSupplyTransaction on the fork and updates lending position', async () => {
    const rpcUrl = fork.forkUrl
    const tenderlyChain = defineChain({
      id: 9991,
      name: 'Tenderly',
      network: 'tenderly',
      nativeCurrency: { decimals: 18, name: 'Ether', symbol: 'ETH' },
      rpcUrls: { default: { http: [rpcUrl] }, public: { http: [rpcUrl] } },
    })

    const publicClient = createPublicClient({ chain: tenderlyChain, transport: http(rpcUrl) })
    const walletClient = createWalletClient({ chain: tenderlyChain, transport: http(rpcUrl) })

    const whaleAddress = '0x28C6c06298d514Db089934071355E5743bf21d60' as const // Binance 14
    const userAddress = '0xAAf00613A099DeAe24EeB2c21Ad2965CaDEac244' as const // E2E Test User
    const wethAddress = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2' as const

    // 1. Send 10 ETH from Whale to User
    const fundHash = await walletClient.sendTransaction({
      account: whaleAddress,
      to: userAddress,
      value: 10000000000000000000n, // 10 ETH
      chain: null,
    })
    await publicClient.waitForTransactionReceipt({ hash: fundHash })

    // 2. Wrap ETH into WETH as User
    const wrapHash = await walletClient.writeContract({
      account: userAddress,
      address: wethAddress,
      abi: [{ name: 'deposit', type: 'function', stateMutability: 'payable', inputs: [], outputs: [] }],
      functionName: 'deposit',
      value: 1000000000000000000n, // 1 ETH
      chain: null,
    })
    await publicClient.waitForTransactionReceipt({ hash: wrapHash })

    // 3. Generate supply transaction
    const positionId = AaveV3LendingPositionId.createFrom({
      id: 'forkPositionId',
      walletAddress: Address.createFromEthereum({ value: userAddress }),
      poolId: validAaveV3PoolId,
    })

    const supplyAmount = TokenAmount.createFrom({
      token: validAaveV3PoolId.collateralToken,
      amount: '1', // 1 WETH
    }) as TokenAmount

    const supplyTxInfo = await aaveV3ProtocolPlugin.getSupplyTransaction({
      poolId: validAaveV3PoolId,
      amount: supplyAmount,
      user: User.createFrom({
        chainInfo: ChainInfo.createFrom({ chainId: 1, name: 'Ethereum Mainnet' }),
        wallet: Wallet.createFrom({ address: Address.createFromEthereum({ value: userAddress }) }),
      }),
    })

    // 4. Approve Aave Pool
    const approveHash = await walletClient.writeContract({
      account: userAddress,
      address: wethAddress,
      abi: [{ name: 'approve', type: 'function', stateMutability: 'nonpayable', inputs: [{ name: 'spender', type: 'address' }, { name: 'amount', type: 'uint256' }], outputs: [{ type: 'bool' }] }],
      functionName: 'approve',
      args: [supplyTxInfo.transaction.target.value as `0x${string}`, 1000000000000000000n],
      chain: null,
    })
    await publicClient.waitForTransactionReceipt({ hash: approveHash })

    // 5. Execute Supply Transaction
    const supplyHash = await walletClient.sendTransaction({
      account: userAddress,
      to: supplyTxInfo.transaction.target.value as `0x${string}`,
      data: supplyTxInfo.transaction.calldata as `0x${string}`,
      value: BigInt(supplyTxInfo.transaction.value),
      chain: null,
    })
    await publicClient.waitForTransactionReceipt({ hash: supplyHash })

    // 6. Verify Position updated
    const newPosition = await aaveV3ProtocolPlugin.getLendingPosition(positionId)
    expect(Number(newPosition.collateralAmount.amount)).toBeGreaterThanOrEqual(1)
  }, 60000)
})
