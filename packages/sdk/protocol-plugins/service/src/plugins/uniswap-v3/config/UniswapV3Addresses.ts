import { ChainFamilyMap } from '@thesolidchain/sdk-common'

/**
 * Name used to register/retrieve the Uniswap V3 NonfungiblePositionManager contract address
 * through the `IAddressBookManager`.
 */
export const UNISWAP_V3_NPM_CONTRACT_NAME = 'UniswapV3NonfungiblePositionManager'

/**
 * UniswapV3Addresses
 * Core contract addresses required by the Uniswap V3 protocol plugin across supported chains.
 *
 * IMPORTANT: keys MUST be numeric chain IDs (not `ChainFamilyName` string labels). The
 * `AddressBookManager.registerAddresses` implementation does
 * `parseInt(chainIdStr, 10)` on every top-level key
 * (see `packages/sdk/address-book/service/src/implementation/AddressBookManager.ts`), so a
 * string label like `'Ethereum'` would silently resolve to `NaN` and the address would never be
 * found. Using `ChainFamilyMap.<Family>.<Network>.chainId` avoids that trap.
 *
 * This is the fix for issue #11 item 2: the NonfungiblePositionManager address used to be a
 * single hardcoded constant reused for every chain, which is WRONG for Base (Uniswap Labs
 * deployed V3 periphery there with a different deployer, producing a different address than on
 * Ethereum Mainnet / Arbitrum / Optimism, which all share the same address).
 */
export const UniswapV3Addresses: Record<number, Record<string, string>> = {
  // Ethereum Mainnet, Arbitrum One and Optimism all share the same NonfungiblePositionManager
  // address because Uniswap Labs deployed V3 periphery through the same deployer/nonce sequence
  // on those chains.
  [ChainFamilyMap.Ethereum.Mainnet.chainId]: {
    [UNISWAP_V3_NPM_CONTRACT_NAME]: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
  },
  [ChainFamilyMap.Arbitrum.ArbitrumOne.chainId]: {
    [UNISWAP_V3_NPM_CONTRACT_NAME]: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
  },
  [ChainFamilyMap.Optimism.Optimism.chainId]: {
    [UNISWAP_V3_NPM_CONTRACT_NAME]: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
  },
  // Base: Uniswap V3 was redeployed with a DIFFERENT deployer on Base, so it does NOT share the
  // address above. Reusing the mainnet address here was the specific bug fixed by this map
  // (issue #11 item 2).
  //
  // ⚠️ UNVERIFIED VALUE: this literal is a best-effort value and this sandboxed environment has
  // no network access to independently verify it against
  // https://docs.uniswap.org/contracts/v3/reference/deployments/base-deployments or Basescan
  // before merging. This is one of the reasons the plugin is deregistered from
  // `ProtocolPluginsRecord` until it has been independently verified (see issue #11 item 8).
  // Do NOT re-enable the plugin without confirming this address on-chain first.
  [ChainFamilyMap.Base.Base.chainId]: {
    [UNISWAP_V3_NPM_CONTRACT_NAME]: '0x03a520b32C04BF3bEEf7BF5d56C86A1a7Fc42A00',
  },
}
