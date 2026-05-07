import { expect, vi } from 'vitest'
import { SwapManagerClient } from '../../src/implementation/SwapManagerClient'
import { RPCMainClientType } from '../../src/rpc/SDKMainClient'

export default async function swapManagerClientTest() {
  const getSwapQuoteExactInput = vi.fn().mockResolvedValue('mock_quote')

  const rpcClient = {
    swaps: {
      getSwapQuoteExactInput: { query: getSwapQuoteExactInput },
    }
  } as unknown as RPCMainClientType

  const client = new SwapManagerClient({ rpcClient })

  await client.getSwapQuoteExactInput({
    fromAmount: {} as never,
    toToken: {} as never,
    slippage: {} as never,
  })
  expect(getSwapQuoteExactInput).toHaveBeenCalled()
}
