import React, { FC, useEffect, useState } from 'react'
import { useAccount, useSendTransaction } from 'wagmi'
import { ChainFamilyMap, ILendingPool, ILendingPoolInfo, Order, IYieldPositionId, TokenAmount, Address, IUser, ISimulation } from '@thesolidchain/sdk-common'
import { AaveV3LendingPoolId, AaveV3Protocol, EmodeType, LidoYieldPoolId, YearnYieldPoolId } from '@thesolidchain/protocol-plugins'
import { useSDK } from '@thesolidchain/sdk-react'

type ProtocolType = 'Aave V3' | 'Yearn' | 'Lido'

interface ProtocolDetails {
  name: string
  asset: string
  network: string
  apy: string
  type: string
}

const MOCK_PROTOCOLS: Record<ProtocolType, ProtocolDetails> = {
  'Aave V3': {
    name: 'Aave V3',
    asset: 'WETH / USDC',
    network: 'Ethereum Mainnet',
    apy: '5.2',
    type: 'Lending',
  },
  'Yearn': {
    name: 'Yearn Vaults',
    asset: 'yvUSDC',
    network: 'Ethereum Mainnet',
    apy: '7.8',
    type: 'Yield',
  },
  'Lido': {
    name: 'Lido Staking',
    asset: 'stETH',
    network: 'Ethereum Mainnet',
    apy: '3.4',
    type: 'Liquid Staking',
  },
}

export const ProtocolInteractor: FC = () => {
  const { address, chainId } = useAccount()
  const sdk = useSDK({ chainId, walletAddress: address })
  const { sendTransactionAsync } = useSendTransaction()

  const [selectedProtocol, setSelectedProtocol] = useState<ProtocolType>('Aave V3')
  const [actionType, setActionType] = useState<'Deposit' | 'Withdraw'>('Deposit')
  const [amount, setAmount] = useState<string>('')
  
  const [loading, setLoading] = useState<boolean>(false)
  const [aavePool, setAavePool] = useState<ILendingPool | null>(null)
  const [aavePoolInfo, setAavePoolInfo] = useState<ILendingPoolInfo | null>(null)

  const [order, setOrder] = useState<Order | null>(null)
  const [aavePoolIdObj, setAavePoolIdObj] = useState<unknown>(null)

  useEffect(() => {
    const fetchAaveData = async () => {
      try {
        const chainInfo = ChainFamilyMap.Ethereum.Mainnet
        const collateralToken = await sdk.getTokenBySymbol({ chainId: chainInfo.chainId, symbol: 'WETH' })
        const debtToken = await sdk.getTokenBySymbol({ chainId: chainInfo.chainId, symbol: 'USDC' })

        if (!collateralToken || !debtToken) return

        const poolId = AaveV3LendingPoolId.createFrom({
          protocol: AaveV3Protocol.createFrom({ chainInfo }),
          collateralToken,
          debtToken,
          emodeType: EmodeType.None,
        })

        const p = await sdk.getLendingPool({ poolId })
        const pInfo = await sdk.getLendingPoolInfo({ poolId })

        setAavePool(p || null)
        setAavePoolInfo(pInfo || null)
        setAavePoolIdObj(poolId)
      } catch (error) {
        console.error('Failed to fetch Aave V3 data:', error)
      }
    }

    if (selectedProtocol === 'Aave V3' && !aavePool) {
      fetchAaveData()
    }
  }, [sdk, selectedProtocol, aavePool])

  const handleBuildOrder = async () => {
    if (!amount) return
    setLoading(true)
    try {
      let finalOrder: Order | null = null
      const chainInfo = ChainFamilyMap.Ethereum.Mainnet
      
      if (selectedProtocol === 'Aave V3' && aavePoolIdObj) {
         // Fake order for Aave since we didn't implement fully for the UI yet
         finalOrder = {
           simulation: {} as unknown as ISimulation,
           transactions: [{
             description: 'Aave Mock Transaction',
             transaction: {
               target: Address.createFromEthereum({ value: '0x0000000000000000000000000000000000000000' }),
               calldata: '0x',
               value: '0',
             }
           }]
         } as unknown as Order
      } else if (selectedProtocol === 'Lido') {
         const poolId = new LidoYieldPoolId('0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84', chainInfo)
         const token = await sdk.getTokenBySymbol({ chainId: chainInfo.chainId, symbol: 'WETH' }) // we use WETH or ETH
         const tokenAmount = TokenAmount.createFrom({ token: token!, amount })
         const sdkUser = { wallet: { address: Address.createFromEthereum({ value: address! }) } } as unknown as IUser
         
         if (actionType === 'Deposit') {
           const simulation = await sdk.simulator.yield.simulateDeposit({ poolId, amount: tokenAmount })
           finalOrder = (await sdk.buildOrder({ user: sdkUser, simulation })) || null
         } else {
           // We need a dummy position for simulation!
           const positionId = { poolId, userAddress: sdkUser.wallet.address, type: 'Yield', tokenAddress: poolId.tokenAddress, walletAddress: sdkUser.wallet.address } as unknown as IYieldPositionId
           const simulation = await sdk.simulator.yield.simulateWithdraw({ positionId, amount: tokenAmount })
           finalOrder = (await sdk.buildOrder({ user: sdkUser, simulation })) || null
         }
      } else if (selectedProtocol === 'Yearn') {
         const poolId = new YearnYieldPoolId('0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', chainInfo, '0xa354F35829Ae975e850e23e9615b11Da1B3dC4DE')
         const token = await sdk.getTokenBySymbol({ chainId: chainInfo.chainId, symbol: 'USDC' })
         const tokenAmount = TokenAmount.createFrom({ token: token!, amount })
         const sdkUser = { wallet: { address: Address.createFromEthereum({ value: address! }) } } as unknown as IUser
         
         if (actionType === 'Deposit') {
           const simulation = await sdk.simulator.yield.simulateDeposit({ poolId, amount: tokenAmount })
           finalOrder = (await sdk.buildOrder({ user: sdkUser, simulation })) || null
         } else {
           const positionId = { poolId, userAddress: sdkUser.wallet.address, type: 'Yield', tokenAddress: poolId.tokenAddress, walletAddress: sdkUser.wallet.address } as unknown as IYieldPositionId
           const simulation = await sdk.simulator.yield.simulateWithdraw({ positionId, amount: tokenAmount })
           finalOrder = (await sdk.buildOrder({ user: sdkUser, simulation })) || null
         }
      }

      setOrder(finalOrder)
    } catch (error) {
      console.error('Failed to build order:', error)
      alert(`Simulation failed: ${(error as Error).message}`)
    } finally {
      setLoading(false)
    }
  }

  const handleExecuteOrder = async () => {
    if (!order) return
    try {
      const txInfo = order.transactions?.[0]?.transaction
      const txHash = await sendTransactionAsync({
        to: txInfo?.target?.value || '0x',
        data: txInfo?.calldata || '0x',
        value: BigInt(txInfo?.value || '0'),
      })
      console.log('Transaction Executed:', txHash)
      setOrder(null)
      setAmount('')
    } catch (error) {
      console.error('Execution failed:', error)
    }
  }

  const protocolData = MOCK_PROTOCOLS[selectedProtocol]
  const displayApy = selectedProtocol === 'Aave V3' && aavePoolInfo ? ((aavePoolInfo as unknown as { apy: number }).apy || protocolData.apy) : protocolData.apy

  return (
    <div className="w-full max-w-2xl mx-auto bg-neutral-900/40 border border-white/10 rounded-2xl p-8 backdrop-blur-xl shadow-2xl">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">Protocol Interactions</h2>
          <p className="text-neutral-400 text-sm">Create positions or withdraw across integrated protocols.</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-8">
        {(Object.keys(MOCK_PROTOCOLS) as ProtocolType[]).map((protocol) => (
          <button
            key={protocol}
            onClick={() => {
              setSelectedProtocol(protocol)
              setOrder(null)
              setAmount('')
            }}
            className={`py-3 rounded-xl border transition-all font-semibold ${
              selectedProtocol === protocol
                ? 'bg-[var(--neon-cyan)]/20 border-[var(--neon-cyan)] text-[var(--neon-cyan)]'
                : 'bg-black/20 border-white/5 text-neutral-400 hover:bg-white/5 hover:text-white'
            }`}
          >
            {protocol}
          </button>
        ))}
      </div>

      <div className="bg-black/30 border border-white/5 rounded-xl p-5 mb-8">
        <h4 className="text-xs uppercase tracking-wider text-neutral-500 font-bold mb-3">Selected Protocol</h4>
        <div className="flex justify-between items-center">
          <div>
            <div className="text-lg text-white font-semibold mb-1">{protocolData.name}</div>
            <div className="text-sm text-[var(--neon-orange)]">{protocolData.asset}</div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-black text-emerald-400 mb-1">{displayApy}%</div>
            <div className="text-xs uppercase tracking-wider text-neutral-500 font-bold">APY</div>
          </div>
        </div>
      </div>

      <div className="flex bg-black/40 rounded-xl p-1 mb-8 border border-white/5">
        <button
          onClick={() => setActionType('Deposit')}
          className={`flex-1 py-3 rounded-lg font-bold transition-all text-sm uppercase tracking-wide ${
            actionType === 'Deposit'
              ? 'bg-gradient-to-r from-[var(--neon-cyan)] to-emerald-500 text-black shadow-lg'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          Deposit
        </button>
        <button
          onClick={() => setActionType('Withdraw')}
          className={`flex-1 py-3 rounded-lg font-bold transition-all text-sm uppercase tracking-wide ${
            actionType === 'Withdraw'
              ? 'bg-gradient-to-r from-[var(--neon-orange)] to-pink-500 text-white shadow-lg'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          Withdraw
        </button>
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm text-neutral-400 font-medium">Amount to {actionType}</label>
          </div>
          <div className="relative">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.0"
              className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-2xl font-medium text-white placeholder-neutral-600 focus:outline-none focus:border-[var(--neon-cyan)] transition-colors"
            />
            <div className="absolute right-5 top-1/2 -translate-y-1/2 flex items-center gap-2 px-3 py-1 bg-white/5 rounded-lg border border-white/10 text-neutral-300 font-medium">
              {protocolData.asset.split('/')[0].trim()}
            </div>
          </div>
        </div>

        {order ? (
          <div className="animate-in fade-in slide-in-from-bottom-2">
            <button
              onClick={handleExecuteOrder}
              className="w-full relative overflow-hidden group bg-emerald-500 hover:bg-emerald-400 text-black font-black text-lg rounded-xl py-4 transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Execute {actionType}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </span>
            </button>
          </div>
        ) : (
          <button
            onClick={handleBuildOrder}
            disabled={!amount || loading}
            className={`w-full py-4 rounded-xl font-bold text-lg transition-all border ${
              !amount || loading
                ? 'bg-neutral-800/50 text-neutral-500 border-neutral-700/50 cursor-not-allowed'
                : 'bg-[var(--neon-cyan)]/10 text-[var(--neon-cyan)] border-[var(--neon-cyan)]/30 hover:bg-[var(--neon-cyan)]/20 hover:border-[var(--neon-cyan)] hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]'
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-3">
                <span className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                Simulating {actionType}...
              </span>
            ) : (
              `Simulate & Build Order`
            )}
          </button>
        )}
      </div>
    </div>
  )
}
