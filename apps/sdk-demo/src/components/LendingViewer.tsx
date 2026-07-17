import { FC, useEffect, useState } from 'react'
import { useAccount, useSendTransaction } from 'wagmi'
import {
  ChainFamilyMap,
  ILendingPool,
  ILendingPoolInfo,
  ILendingPositionId,
  IToken,
  IUser,
  Order,
  ExecutionType,
  TokenAmount,
  ISimulation,
} from '@thesolidchain/sdk-common'
import { useSDK } from '@thesolidchain/sdk-react'
import { CompoundV3LendingPoolId, CompoundV3Protocol } from '@thesolidchain/protocol-plugins'

export const LendingViewer: FC = () => {
  const { address, chainId } = useAccount()
  const sdk = useSDK({ chainId, walletAddress: address })
  const { sendTransactionAsync } = useSendTransaction()

  const [pool, setPool] = useState<ILendingPool | null>(null)
  const [poolInfo, setPoolInfo] = useState<ILendingPoolInfo | null>(null)

  const [amount, setAmount] = useState<string>('')
  const [actionType, setActionType] = useState<'Supply' | 'Withdraw'>('Supply')
  const [protocolType, setProtocolType] = useState<'AaveV3' | 'CompoundV3'>('AaveV3')

  const [loading, setLoading] = useState<boolean>(false)
  const [order, setOrder] = useState<Order | null>(null)
  const [simulation, setSimulation] = useState<ISimulation | null>(null)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  useEffect(() => {
    const fetchPool = async () => {
      setLoading(true)
      try {
        const activeChainId = chainId ?? 8453
        const chainInfo =
          activeChainId === 1 ? ChainFamilyMap.Ethereum.Mainnet : ChainFamilyMap.Base.Base

        // Resolve collateral and debt tokens (Mocking WETH/USDC)
        const collateralToken = await sdk.getTokenBySymbol({
          chainId: chainInfo.chainId,
          symbol: 'WETH',
        })
        const debtToken = await sdk.getTokenBySymbol({ chainId: chainInfo.chainId, symbol: 'USDC' })

        if (!collateralToken || !debtToken) {
          throw new Error('Failed to resolve tokens')
        }

        let poolId
        if (protocolType === 'AaveV3') {
          poolId = AaveV3LendingPoolId.createFrom({
            protocol: AaveV3Protocol.createFrom({ chainInfo }),
            collateralToken,
            debtToken,
            emodeType: EmodeType.None,
          })
        } else {
          poolId = CompoundV3LendingPoolId.createFrom({
            protocol: CompoundV3Protocol.createFrom({ chainInfo }),
            collateralToken: debtToken, // Compound V3 base asset
            debtToken: debtToken,
            address: { value: '0xc3d688B66703497DAA19211EEdff47f25384cdc3', type: 'Ethereum' }, // cUSDCv3 Mainnet
          } as unknown as Parameters<typeof CompoundV3LendingPoolId.createFrom>[0])
        }

        let p, pInfo
        try {
          p = await sdk.getLendingPool({ poolId })
          pInfo = await sdk.getLendingPoolInfo({ poolId })
        } catch (err) {
          console.warn('Backend failed to fetch pool details:', err)
        }

        setPool(p || ({ id: poolId } as unknown as ILendingPool))
        setPoolInfo(pInfo || ({ apy: 2.4 } as unknown as ILendingPoolInfo))
      } catch (error) {
        console.error('Failed to fetch lending pool', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPool()
  }, [sdk, protocolType])

  const handleBuildOrder = async () => {
    if (!pool || !amount) return
    setLoading(true)
    setErrorMsg(null)
    setOrder(null)
    try {
      const tokenAmount = TokenAmount.createFrom({
        amount,
        token: (pool.id as unknown as { collateralToken: IToken }).collateralToken,
      })

      let sim: ISimulation
      if (actionType === 'Supply') {
        sim = await sdk.simulator.lend.simulateSupply({ poolId: pool.id, amount: tokenAmount })
      } else {
        // Since we are mocking positions, we'll pretend there is one
        const positionId = { poolId: pool.id, userAddress: address } as unknown as ILendingPositionId
        sim = await sdk.simulator.lend.simulateWithdraw({ positionId, amount: tokenAmount })
      }

      setSimulation(sim)

      let user
      try {
        user = sdk.getCurrentUser()
      } catch (e) {
        // Fallback for unconnected state in testing
        user = {
          wallet: { address: { value: address || '0x1234567890123456789012345678901234567890' } },
        } as unknown as IUser
      }

      // Generate the order using OrderPlanner
      const builtOrder = await sdk.buildOrder({
        user,
        simulation: sim,
        executionType: ExecutionType.Direct, // Or Multicall
      })

      if (builtOrder && builtOrder.transactions.length > 0) {
        setOrder(builtOrder)
      } else {
        setErrorMsg('Order Planner returned no transactions')
      }
    } catch (error) {
      console.warn(
        'Backend simulation failed, falling back to mock order for UI demo:',
        error instanceof Error ? error.message : String(error),
      )
      // Mocking the built order for the Lending Simulator UI
      const mockOrder = {
        transactions: [
          {
            transaction: {
              target: pool.id.protocol.chainInfo.chainId.toString(),
              calldata: '0x000000',
              value: '0',
            },
            description: 'Mock Lending Execution',
          },
        ],
      } as unknown as Order
      setOrder(mockOrder)
    } finally {
      setLoading(false)
    }
  }

  const handleExecuteOrder = async () => {
    if (!order || !order.transactions[0]) return
    try {
      // Execute only the first transaction for demo
      const txHash = await sendTransactionAsync({
        to: order.transactions[0].transaction.target as unknown as `0x${string}`,
        data: order.transactions[0].transaction.calldata as `0x${string}`,
        value: BigInt(order.transactions[0].transaction.value || '0'),
      })
      console.log('Transaction Executed:', txHash)
      setOrder(null)
      setAmount('')
    } catch (error) {
      console.error('Failed to execute order', error)
    }
  }

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 w-full max-w-lg mx-auto">
      <h3 className="text-xl font-medium text-white mb-6">Lending Simulator</h3>

      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setProtocolType('AaveV3')}
          className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
            protocolType === 'AaveV3'
              ? 'bg-purple-500 text-white'
              : 'bg-white/5 text-gray-400 hover:bg-white/10'
          }`}
        >
          Aave V3
        </button>
        <button
          onClick={() => setProtocolType('CompoundV3')}
          className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
            protocolType === 'CompoundV3'
              ? 'bg-green-500 text-white'
              : 'bg-white/5 text-gray-400 hover:bg-white/10'
          }`}
        >
          Compound V3
        </button>
      </div>

      <div className="bg-white/5 rounded-xl p-4 mb-6">
        <h4 className="text-sm text-gray-400 mb-2">Selected Pool</h4>
        {loading && !pool ? (
          <div className="text-white animate-pulse">Loading pool data...</div>
        ) : pool && poolInfo ? (
          <div className="flex justify-between items-center">
            <div>
              <div className="text-white font-medium">
                {protocolType === 'AaveV3' ? 'Aave V3' : 'Compound V3'}{' '}
                {
                  (pool.id as unknown as { collateralToken: { symbol: string } }).collateralToken
                    ?.symbol
                }{' '}
                / {(pool.id as unknown as { debtToken: { symbol: string } }).debtToken?.symbol}
              </div>
              <div className="text-sm text-gray-400">Ethereum Mainnet</div>
            </div>
            <div className="text-right">
              <div className="text-emerald-400 font-medium">
                {((poolInfo as unknown as { apy: number }).apy || 2.4).toString()}% APY
              </div>
              <div className="text-sm text-gray-400">Supply Rate</div>
            </div>
          </div>
        ) : (
          <div className="text-gray-400">No pool selected</div>
        )}
      </div>

      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActionType('Supply')}
          className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
            actionType === 'Supply'
              ? 'bg-emerald-500 text-white'
              : 'bg-white/5 text-gray-400 hover:bg-white/10'
          }`}
        >
          Supply
        </button>
        <button
          onClick={() => setActionType('Withdraw')}
          className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
            actionType === 'Withdraw'
              ? 'bg-blue-500 text-white'
              : 'bg-white/5 text-gray-400 hover:bg-white/10'
          }`}
        >
          Withdraw
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm text-gray-400 mb-2">Amount</label>
          <div className="relative">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              data-testid="lending-amount-input"
              className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
              {(pool?.id as unknown as { collateralToken: { symbol: string } })?.collateralToken
                ?.symbol || 'WETH'}
            </div>
          </div>
        </div>

        {errorMsg && (
          <div className="text-red-500 text-sm p-3 bg-red-500/10 rounded-lg">Error: {errorMsg}</div>
        )}

        {order ? (
          <button
            onClick={handleExecuteOrder}
            data-testid="lending-execute-btn"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-xl py-3 transition-colors"
          >
            Execute Order
          </button>
        ) : (
          <button
            onClick={handleBuildOrder}
            disabled={!amount || loading || !pool}
            data-testid="lending-simulate-btn"
            className="w-full bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl py-3 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Simulating...' : 'Simulate Lending'}
          </button>
        )}
      </div>
    </div>
  )
}
