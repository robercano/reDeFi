import type { IToken } from '@thesolidchain/sdk-common'
import type { getChainHandler } from './getChainHandler'

export const getTokenTotalSupplyHandler =
  (getChain: ReturnType<typeof getChainHandler>) =>
  async ({ token }: { token: IToken }) => {
    const chain = await getChain({ chainId: token.chainInfo.chainId })
    const totalSupply = await chain.tokens.getTokenTotalSupply({ token }).catch((error) => {
      throw new Error(`Failed to get token total supply: ${error.message}`)
    })

    if (!totalSupply) {
      throw new Error(`SDK: Failed to get total supply for token: ${token.symbol}`)
    }

    return totalSupply
  }
