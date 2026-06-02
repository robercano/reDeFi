import { ChainFamilyName } from '@thesolidchain/sdk-common'

/**
 * AaveV3Addresses
 * Core contract addresses required by the Aave V3 protocol plugin across supported chains.
 * Addresses are sourced from the official Aave Address Book.
 */
export const AaveV3Addresses = {
  // Mainnet
  [ChainFamilyName.Ethereum]: {
    PoolDataProvider: '0x0a16f2FCC0D44FaE41cc54e079281D84A363bECD',
    AavePool: '0x87870Bca3F3fD6335C3F4ce8392D69350B4fA4E2',
    Oracle: '0x54586bE62E3c3580375aE3723C145253060Ca0C2',
  },
  // Arbitrum
  [ChainFamilyName.Arbitrum]: {
    PoolDataProvider: '0x243Aa95cAC2a25651eda86e80bEe66114413c43b',
    AavePool: '0x794a61358D6845594F94dc1DB02A252b5b4814aD',
    Oracle: '0xb56c2F0B653B2e0b10C9b928C8580Ac5Df02C7C7',
    AaveL2Encoder: '0x9abADECD08572e0eA5aF4d47A9C7984a5AA503dC',
  },
  // Optimism
  [ChainFamilyName.Optimism]: {
    PoolDataProvider: '0x243Aa95cAC2a25651eda86e80bEe66114413c43b',
    AavePool: '0x794a61358D6845594F94dc1DB02A252b5b4814aD',
    Oracle: '0xD81eb3728a631871a7eBBaD631b5f424909f0c77',
    AaveL2Encoder: '0x9abADECD08572e0eA5aF4d47A9C7984a5AA503dC',
  },
  // Base
  [ChainFamilyName.Base]: {
    PoolDataProvider: '0x0F43731EB8d45A581f4a36DD74F5f358bc90C73A',
    AavePool: '0xA238Dd80C259a72e81d7e4664a9801593F98d1c5',
    Oracle: '0x2Cc0Fc26eD4563A5ce5e8bdcfe1A2878676Ae156',
    AaveL2Encoder: '0x39e97c588B2907Fb67F44fea256Ae3BA064207C5',
  },
}
