import { expect, vi } from 'vitest'
import { PortfolioManager } from '../../src/implementation/PortfolioManager'
import { RPCMainClientType } from '../../src/rpc/SDKMainClient'

export default async function portfolioManagerTest() {
  const getUserPortfolio = vi.fn().mockResolvedValue('mock_portfolio')
  const getWalletHoldings = vi.fn().mockResolvedValue('mock_holdings')

  const rpcClient = {
    portfolio: {
      getUserPortfolio: { query: getUserPortfolio },
      getWalletHoldings: { query: getWalletHoldings },
    },
  } as unknown as RPCMainClientType

  const client = new PortfolioManager({ rpcClient })

  await client.getPositions({ networks: [], wallet: {} as never })

  await client.getUserPortfolio({ user: {} as never })
  expect(getUserPortfolio).toHaveBeenCalled()

  await client.getWalletHoldings({ user: {} as never })
  expect(getWalletHoldings).toHaveBeenCalled()
}
