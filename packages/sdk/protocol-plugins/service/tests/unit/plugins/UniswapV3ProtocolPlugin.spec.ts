import { vi } from 'vitest'
import { UniswapV3ProtocolPlugin } from '../../../src/plugins/uniswap-v3/UniswapV3ProtocolPlugin'
import { UNISWAP_V3_NPM_CONTRACT_NAME } from '../../../src/plugins/uniswap-v3/config/UniswapV3Addresses'

describe('UniswapV3ProtocolPlugin', () => {
  it('registers the per-chain NonfungiblePositionManager addresses on initialize (issue #11 item 2)', () => {
    const registerAddresses = vi.fn()
    const ctx: any = {
      provider: { chain: { id: 1 } },
      addressBookManager: { registerAddresses },
    }

    const plugin = new UniswapV3ProtocolPlugin()
    plugin.initialize({ context: ctx })

    expect(registerAddresses).toHaveBeenCalledTimes(1)
    const registered = registerAddresses.mock.calls[0][0]
    // Mainnet, Arbitrum One, Optimism and Base must all be registered, each with a distinct
    // NonfungiblePositionManager entry (Base must NOT reuse the mainnet address).
    expect(Object.keys(registered)).toHaveLength(4)
    expect(registered[1][UNISWAP_V3_NPM_CONTRACT_NAME]).toBeDefined()
    expect(registered[8453][UNISWAP_V3_NPM_CONTRACT_NAME]).toBeDefined()
    expect(registered[8453][UNISWAP_V3_NPM_CONTRACT_NAME]).not.toBe(
      registered[1][UNISWAP_V3_NPM_CONTRACT_NAME],
    )
    expect(plugin.liquidity).toBeDefined()
  })
})
