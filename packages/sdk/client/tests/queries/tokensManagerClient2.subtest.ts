import { expect, vi } from 'vitest'
import { TokensManagerClient2 } from '../../src/implementation/TokensManagerClient2'
import { RPCMainClientType } from '../../src/rpc/SDKMainClient'

export default async function tokensManagerClient2Test() {
  const getTokenBySymbol = vi.fn().mockResolvedValue('mock_token_by_symbol')
  const getTokenByAddress = vi.fn().mockResolvedValue('mock_token_by_address')

  const rpcClient = {
    tokens: {
      getTokenBySymbol: { query: getTokenBySymbol },
      getTokenByAddress: { query: getTokenByAddress },
    }
  } as unknown as RPCMainClientType

  const client = new TokensManagerClient2({ rpcClient })

  await client.getTokenBySymbol({ chainId: 1, symbol: 'USDC' })
  expect(getTokenBySymbol).toHaveBeenCalled()

  await client.getTokenByAddress({ chainId: 1, addressValue: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48' })
  expect(getTokenByAddress).toHaveBeenCalled()
}
