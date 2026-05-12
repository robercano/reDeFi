import { expect, vi } from 'vitest'
import { UserClient } from '../../src/implementation/UserClient'
import { RPCMainClientType } from '../../src/rpc/SDKMainClient'

export default async function userClientTest() {
  const getUserPortfolio = vi.fn().mockResolvedValue('mock_portfolio')
  const buildOrder = vi.fn().mockResolvedValue('mock_order')

  const rpcClient = {
    portfolio: {
      getUserPortfolio: { query: getUserPortfolio },
    },
    orders: {
      buildOrder: { mutate: buildOrder },
    },
  } as unknown as RPCMainClientType

  const client = new UserClient({
    rpcClient,
    chainInfo: { chainId: 1, name: 'Mainnet' } as never,
    wallet: { address: { value: '0x1234567890123456789012345678901234567890' } } as never,
  })

  await client.getPortfolio()
  expect(getUserPortfolio).toHaveBeenCalled()

  await client.getPositionsByProtocol({ protocol: {} as never })
  await client.getPositionsByIds({ positionIds: [] })
  await client.getPosition({ id: {} as never })

  await client.newOrder({ simulation: {} as never })
  expect(buildOrder).toHaveBeenCalled()
}
