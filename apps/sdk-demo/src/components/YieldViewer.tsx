import { FC, useEffect, useState } from 'react'

import { useAccount, useSendTransaction } from 'wagmi'
import { ChainFamilyMap, ILendingPool, ILendingPoolInfo } from '@thesolidchain/sdk-common'
import { AaveV3LendingPoolId, AaveV3Protocol, EmodeType } from '@thesolidchain/protocol-plugins'
import { useSDK } from '@thesolidchain/sdk-react'

export const YieldViewer: FC = () => {
  const { address, chainId } = useAccount()
  const sdk = useSDK({ chainId, walletAddress: address })
  const { sendTransactionAsync } = useSendTransaction()

  const [pool, setPool] = useState<ILendingPool | null>(null)
  const [poolInfo, setPoolInfo] = useState<ILendingPoolInfo | null>(null)

  const [amount, setAmount] = useState<string>('')
  const [actionType, setActionType] = useState<'Deposit' | 'Withdraw'>('Deposit')

  const [loading, setLoading] = useState<boolean>(false)
  type OrderMock = {
    transactionParams: {
      to: `0x${string}`
      data: `0x${string}`
      value: string
    }
  }

  const [order, setOrder] = useState<OrderMock | null>(null)

  useEffect(() => {
    const fetchPool = async () => {
      setLoading(true)
      try {
        const chainInfo = ChainFamilyMap.Ethereum.Mainnet

        // Resolve collateral and debt tokens (Mocking WETH/USDC)
        const collateralToken = await sdk.getTokenBySymbol({
          chainId: chainInfo.chainId,
          symbol: 'WETH',
        })
        const debtToken = await sdk.getTokenBySymbol({ chainId: chainInfo.chainId, symbol: 'USDC' })

        if (!collateralToken || !debtToken) {
          throw new Error('Failed to resolve tokens')
        }

        const poolId = AaveV3LendingPoolId.createFrom({
          protocol: AaveV3Protocol.createFrom({ chainInfo }),
          collateralToken,
          debtToken,
          emodeType: EmodeType.None,
        })

        const p = await sdk.getLendingPool({ poolId })
        const pInfo = await sdk.getLendingPoolInfo({ poolId })

        setPool(p || null)
        setPoolInfo(pInfo || null)
      } catch (error) {
        console.error('Failed to fetch pool', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPool()
  }, [sdk])

  const handleBuildOrder = async () => {
    if (!pool || !amount) return
    setLoading(true)
    try {
      // Mocking the built order for the Yield Simulator UI
      const builtOrder: OrderMock = {
        transactionParams: {
          to: pool.id.protocol.chainInfo.chainId.toString() as `0x${string}`, // Mock destination
          data: '0x000000' as `0x${string}`, // Mock data
          value: '0',
        },
      }

      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setOrder(builtOrder || null)
    } catch (error) {
      console.error('Failed to build order', error)
    } finally {
      setLoading(false)
    }
  }

  const handleExecuteOrder = async () => {
    if (!order || !order.transactionParams) return
    try {
      const txHash = await sendTransactionAsync({
        to: order.transactionParams.to as `0x${string}`,
        data: order.transactionParams.data as `0x${string}`,
        value: BigInt(order.transactionParams.value),
      })
      console.log('Transaction Executed:', txHash)
      setOrder(null)
      setAmount('')
    } catch (error) {
      console.error('Failed to execute order', error)
    }
  }

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <h3 className="text-xl font-medium text-white mb-6">Yield Simulator</h3>

      <div className="bg-white/5 rounded-xl p-4 mb-6">
        <h4 className="text-sm text-gray-400 mb-2">Selected Pool</h4>
        {loading && !pool ? (
          <div className="text-white animate-pulse">Loading pool data...</div>
        ) : pool && poolInfo ? (
          <div className="flex justify-between items-center">
            <div>
              <div className="text-white font-medium">
                Aave V3{' '}
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
                {((poolInfo as unknown as { apy: number }).apy || 5.2).toString()}% APY
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
          onClick={() => setActionType('Deposit')}
          className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
            actionType === 'Deposit'
              ? 'bg-emerald-500 text-white'
              : 'bg-white/5 text-gray-400 hover:bg-white/10'
          }`}
        >
          Deposit
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
              data-testid="yield-amount-input"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
              {(pool?.id as unknown as { collateralToken: { symbol: string } })?.collateralToken
                ?.symbol || 'WETH'}
            </div>
          </div>
        </div>

        {order ? (
          <button
            data-testid="yield-execute-btn"
            onClick={handleExecuteOrder}
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-xl py-3 transition-colors"
          >
            Execute Order
          </button>
        ) : (
          <button
            data-testid="yield-simulate-btn"
            onClick={handleBuildOrder}
            disabled={!amount || loading || !pool}
            className="w-full bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl py-3 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Building...' : 'Build Order'}
          </button>
        )}
      </div>
    </div>
  )
}
