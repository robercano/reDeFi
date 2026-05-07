import { expect, vi } from 'vitest'
import { IntentSwapClient } from '../../src/implementation/IntentSwapClient'
import { RPCMainClientType } from '../../src/rpc/SDKMainClient'
import { Signer } from '@ethersproject/abstract-signer'
import { OrderSigningUtils } from '@cowprotocol/cow-sdk'
import { Token, TokenAmount, ChainFamilyMap, Address } from '@thesolidchain/sdk-common'

export default async function intentSwapClientTest() {
  const mockSigner = {} as Signer
  
  const getSellOrderQuote = vi.fn().mockResolvedValue({ quote: 'mock' })
  const sendOrder = vi.fn().mockResolvedValue('order_id')
  const cancelOrder = vi.fn().mockResolvedValue('cancel_id')
  const checkOrder = vi.fn().mockResolvedValue({ status: 'open' })

  const rpcClient = {
    intentSwaps: {
      getSellOrderQuote: { query: getSellOrderQuote },
      sendOrder: { mutate: sendOrder },
      cancelOrder: { mutate: cancelOrder },
      checkOrder: { query: checkOrder },
    }
  } as unknown as RPCMainClientType

  const client = new IntentSwapClient({ rpcClient, signer: mockSigner })

  const usdcToken = Token.createFrom({
    address: Address.createFromEthereum({ value: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48' }),
    chainInfo: ChainFamilyMap.Ethereum.Mainnet,
    name: 'USD Coin',
    symbol: 'USDC',
    decimals: 6,
  })
  
  const daiToken = Token.createFrom({
    address: Address.createFromEthereum({ value: '0x6B175474E89094C44Da98b954EedeAC495271d0F' }),
    chainInfo: ChainFamilyMap.Ethereum.Mainnet,
    name: 'Dai Stablecoin',
    symbol: 'DAI',
    decimals: 18,
  })

  const fromAmount = TokenAmount.createFrom({
    token: usdcToken,
    amount: '100'
  })

  const sender = Address.createFromEthereum({ value: '0x1234567890123456789012345678901234567890' })
  const receiver = Address.createFromEthereum({ value: '0x0987654321098765432109876543210987654321' })

  // 1. getSellOrderQuote with limitPrice
  await client.getSellOrderQuote({
    fromAmount,
    toToken: daiToken,
    sender,
    receiver,
    partiallyFillable: false,
    limitPrice: '1.05'
  })
  expect(getSellOrderQuote).toHaveBeenCalled()

  // getSellOrderQuote without limitPrice
  await client.getSellOrderQuote({
    fromAmount,
    toToken: daiToken,
    sender,
    receiver,
    partiallyFillable: false,
  })
  expect(getSellOrderQuote).toHaveBeenCalledTimes(2)

  // Mock OrderSigningUtils
  const signOrderSpy = vi.spyOn(OrderSigningUtils, 'signOrder').mockResolvedValue('mock_signature' as never)
  const signCancelSpy = vi.spyOn(OrderSigningUtils, 'signOrderCancellation').mockResolvedValue('mock_cancel_signature' as never)

  // 2. sendOrder
  await client.sendOrder({
    chainId: 1,
    sender,
    fromAmount,
    order: {} as never
  })
  expect(signOrderSpy).toHaveBeenCalled()
  expect(sendOrder).toHaveBeenCalled()

  // 3. cancelOrder
  await client.cancelOrder({
    chainId: 1,
    orderId: 'mock_order_id'
  })
  expect(signCancelSpy).toHaveBeenCalled()
  expect(cancelOrder).toHaveBeenCalled()

  // 4. checkOrder
  await client.checkOrder({
    chainId: 1,
    orderId: 'mock_order_id'
  })
  expect(checkOrder).toHaveBeenCalled()

  // Invalid chainId
  await expect(client.sendOrder({ chainId: 999999 as never, sender, fromAmount, order: {} as never })).rejects.toThrow('Unsupported chainId: 999999')
}
