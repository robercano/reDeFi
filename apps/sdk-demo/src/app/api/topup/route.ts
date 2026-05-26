import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { address } = await request.json()
    if (!address) {
      return NextResponse.json({ error: 'Address is required' }, { status: 400 })
    }

    const tenderlyUrl =
      process.env.NEXT_PUBLIC_TENDERLY_RPC_URL || process.env.E2E_SDK_FORK_URL_MAINNET
    if (!tenderlyUrl) {
      return NextResponse.json(
        { error: 'Tenderly RPC URL not configured in environment variables' },
        { status: 500 },
      )
    }

    const tokensToTopUp = [
      { name: 'ETH', address: null, isNative: true }, // ETH
      { name: 'USDC', address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48' },
      { name: 'WETH', address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2' },
      { name: 'USDT', address: '0xdAC17F958D2ee523a2206206994597C13D831ec7' },
      { name: 'DAI', address: '0x6B175474E89094C44Da98b954EedeAC495271d0F' },
    ]

    // Let's use 10,000 for everything appropriately.
    // 10,000 ETH = 0x021E19E0C9BAB2400000
    // 10,000 USDC (6 dec) = 0x2540BE400

    const ethAmountHex = '0x21e19e0c9bab2400000' // 10000 ETH
    const genericAmountHex = '0x21e19e0c9bab2400000' // 10000 with 18 decimals
    const usdcAmountHex = '0x2540BE400' // 10000 with 6 decimals

    const requests = tokensToTopUp.map((token, index) => {
      if (token.isNative) {
        return {
          jsonrpc: '2.0',
          method: 'tenderly_setBalance',
          params: [[address], ethAmountHex],
          id: index,
        }
      } else {
        const amount =
          token.address === '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48' ||
          token.address === '0xdAC17F958D2ee523a2206206994597C13D831ec7'
            ? usdcAmountHex
            : genericAmountHex
        return {
          jsonrpc: '2.0',
          method: 'tenderly_setErc20Balance',
          params: [token.address, address, amount],
          id: index,
        }
      }
    })

    const response = await fetch(tenderlyUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requests),
    })

    const data = await response.json()

    return NextResponse.json({ success: true, data })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
