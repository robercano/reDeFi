import { parseAbi } from 'viem'

export const COMPOUND_V3_COMET_ABI = parseAbi([
  'function supply(address asset, uint amount)',
  'function withdraw(address asset, uint amount)',
  'function supplyTo(address dst, address asset, uint amount)',
  'function withdrawTo(address to, address asset, uint amount)',
  'function getAssetInfo(uint8 i) view returns (uint8 offset, address asset, address priceFeed, uint64 scale, uint64 borrowCollateralFactor, uint64 liquidateCollateralFactor, uint64 liquidationFactor, uint128 supplyCap)',
  'function getUtilization() view returns (uint)',
  'function getSupplyRate(uint utilization) view returns (uint64)',
  'function getBorrowRate(uint utilization) view returns (uint64)',
  'function totalsCollateral(address asset) view returns (uint128 totalSupplyAsset, uint128 _reserved)',
  'function userBasic(address account) view returns (int104 principal, uint64 baseTrackingIndex, uint64 baseTrackingAccrued, uint16 assetsIn, uint8 _reserved)',
  'function userCollateral(address account, address asset) view returns (uint128 balance, uint128 _reserved)',
  'function baseToken() view returns (address)',
])

export const COMPOUND_V3_COMET_EXT_ABI = parseAbi([
  'function collateralBalanceOf(address account, address asset) view returns (uint128)',
])
