import { describe, expect, it } from 'vitest'

import { ArmadaMigrationType, isArmadaMigrationType } from '../src/common/enums/ArmadaMigrationType'
import { isPoolType, PoolType } from '../src/common/enums/PoolType'
import { isPositionType, PositionType } from '../src/common/enums/PositionType'
import { isProtocolName, ProtocolName } from '../src/common/enums/ProtocolName'
import { isStakingBucket, StakingBucket } from '../src/common/enums/StakingBucket'
import { isTokenSymbol } from '../src/common/enums/TokenSymbol'
import { FiatCurrency } from '../src/common/enums/FiatCurrency'
import { isPoolInfo } from '../src/common/interfaces/IPoolInfo'
import { isPosition } from '../src/common/interfaces/IPosition'
import { isPositionId } from '../src/common/interfaces/IPositionId'
import { isRiskRatio } from '../src/common/interfaces/IRiskRatio'
import { isSDKError } from '../src/common/interfaces/ISDKError'
import { isVault, isVaultData } from '../src/common/interfaces/IVault'
import { isWallet } from '../src/common/interfaces/IWallet'
import { isAddressValue } from '../src/common/types/AddressValue'
import { isDenomination } from '../src/common/types/Denomination'
import { isRebalanceData } from '../src/common/types/IRebalanceData'
import { isCollateralInfo } from '../src/lending-protocols/interfaces/ICollateralInfo'
import { isDebtInfo } from '../src/lending-protocols/interfaces/IDebtInfo'
import { isLendingPool } from '../src/lending-protocols/interfaces/ILendingPool'
import { isLendingPoolId } from '../src/lending-protocols/interfaces/ILendingPoolId'
import { isLendingPoolInfo } from '../src/lending-protocols/interfaces/ILendingPoolInfo'
import { isLendingPosition } from '../src/lending-protocols/interfaces/ILendingPosition'
import { isLendingPositionId } from '../src/lending-protocols/interfaces/ILendingPositionId'
import {
  isLendingPositionType,
  LendingPositionType,
} from '../src/lending-protocols/types/LendingPositionType'
import { isLiquidityPoolId } from '../src/liquidity-protocols/interfaces/ILiquidityPoolId'
import { isLiquidityPoolInfo } from '../src/liquidity-protocols/interfaces/ILiquidityPoolInfo'
import { isLiquidityPosition } from '../src/liquidity-protocols/interfaces/ILiquidityPosition'
import { isLiquidityPositionId } from '../src/liquidity-protocols/interfaces/ILiquidityPositionId'
import { isOracleProviderType, OracleProviderType } from '../src/oracle/OracleProviderType'
import { isPositionsManager } from '../src/orders/common/interfaces/IPositionsManager'
import { isHolding } from '../src/portfolio/interfaces/IHolding'
import { isUserPortfolio } from '../src/portfolio/interfaces/IUserPortfolio'
import { isBalanceChange } from '../src/simulation/interfaces/IBalanceChange'
import { isGasEstimation } from '../src/simulation/interfaces/IGasEstimation'
import { isSimulation } from '../src/simulation/interfaces/ISimulation'
import { isStakingPoolId } from '../src/staking-protocols/interfaces/IStakingPoolId'
import { isStakingPoolInfo } from '../src/staking-protocols/interfaces/IStakingPoolInfo'
import { isStakingPosition } from '../src/staking-protocols/interfaces/IStakingPosition'
import { isStakingPositionId } from '../src/staking-protocols/interfaces/IStakingPositionId'
import { isSwapError } from '../src/swap/interfaces/ISwapError'
import { isTokensProviderType, TokensProviderType } from '../src/tokens/TokensProviderType'
import { isUser } from '../src/user/interfaces/IUser'
import { isYieldPoolId } from '../src/yield-protocols/interfaces/IYieldPoolId'
import { isYieldPoolInfo } from '../src/yield-protocols/interfaces/IYieldPoolInfo'
import { isYieldPosition } from '../src/yield-protocols/interfaces/IYieldPosition'
import { isYieldPositionId } from '../src/yield-protocols/interfaces/IYieldPositionId'
import { isYieldType, YieldType } from '../src/yield-protocols/types/YieldType'

describe('enum type guards', () => {
  const enumGuards: Array<{
    name: string
    guard: (value: unknown) => boolean
    values: Record<string, string>
  }> = [
    { name: 'isArmadaMigrationType', guard: isArmadaMigrationType, values: ArmadaMigrationType },
    { name: 'isPoolType', guard: isPoolType, values: PoolType },
    { name: 'isPositionType', guard: isPositionType, values: PositionType },
    { name: 'isProtocolName', guard: isProtocolName, values: ProtocolName },
    { name: 'isLendingPositionType', guard: isLendingPositionType, values: LendingPositionType },
    { name: 'isYieldType', guard: isYieldType, values: YieldType },
    { name: 'isOracleProviderType', guard: isOracleProviderType, values: OracleProviderType },
    { name: 'isTokensProviderType', guard: isTokensProviderType, values: TokensProviderType },
  ]

  it.each(enumGuards)('$name accepts every enum member', ({ guard, values }) => {
    for (const value of Object.values(values)) {
      expect(guard(value)).toBe(true)
    }
  })

  it.each(enumGuards)('$name rejects non-members', ({ guard }) => {
    expect(guard('definitely-not-a-member')).toBe(false)
    expect(guard(undefined)).toBe(false)
    expect(guard(null)).toBe(false)
    expect(guard(42)).toBe(false)
  })

  it('isStakingBucket accepts numeric members and rejects reverse-mapping keys', () => {
    for (const value of Object.values(StakingBucket).filter((v) => typeof v === 'number')) {
      expect(isStakingBucket(value)).toBe(true)
    }
    expect(isStakingBucket(999)).toBe(false)
    expect(isStakingBucket(undefined)).toBe(false)
  })

  it('isTokenSymbol accepts any string and rejects non-strings', () => {
    expect(isTokenSymbol('USDC')).toBe(true)
    expect(isTokenSymbol(42)).toBe(false)
    expect(isTokenSymbol(undefined)).toBe(false)
  })

  it('isDenomination accepts a fiat currency and rejects garbage', () => {
    expect(isDenomination(Object.values(FiatCurrency)[0])).toBe(true)
    expect(isDenomination('not-a-denomination')).toBe(false)
    expect(isDenomination(undefined)).toBe(false)
  })
})

describe('interface type guards', () => {
  const interfaceGuards: Array<{ name: string; guard: (value: unknown) => boolean }> = [
    { name: 'isPoolInfo', guard: isPoolInfo },
    { name: 'isPosition', guard: isPosition },
    { name: 'isPositionId', guard: isPositionId },
    { name: 'isRiskRatio', guard: isRiskRatio },
    { name: 'isSDKError', guard: isSDKError },
    { name: 'isVault', guard: isVault },
    { name: 'isVaultData', guard: isVaultData },
    { name: 'isWallet', guard: isWallet },
    { name: 'isRebalanceData', guard: isRebalanceData },
    { name: 'isCollateralInfo', guard: isCollateralInfo },
    { name: 'isDebtInfo', guard: isDebtInfo },
    { name: 'isLendingPool', guard: isLendingPool },
    { name: 'isLendingPoolId', guard: isLendingPoolId },
    { name: 'isLendingPoolInfo', guard: isLendingPoolInfo },
    { name: 'isLendingPosition', guard: isLendingPosition },
    { name: 'isLendingPositionId', guard: isLendingPositionId },
    { name: 'isLiquidityPoolId', guard: isLiquidityPoolId },
    { name: 'isLiquidityPoolInfo', guard: isLiquidityPoolInfo },
    { name: 'isLiquidityPosition', guard: isLiquidityPosition },
    { name: 'isLiquidityPositionId', guard: isLiquidityPositionId },
    { name: 'isPositionsManager', guard: isPositionsManager },
    { name: 'isHolding', guard: isHolding },
    { name: 'isUserPortfolio', guard: isUserPortfolio },
    { name: 'isBalanceChange', guard: isBalanceChange },
    { name: 'isGasEstimation', guard: isGasEstimation },
    { name: 'isSimulation', guard: isSimulation },
    { name: 'isStakingPoolId', guard: isStakingPoolId },
    { name: 'isStakingPoolInfo', guard: isStakingPoolInfo },
    { name: 'isStakingPosition', guard: isStakingPosition },
    { name: 'isStakingPositionId', guard: isStakingPositionId },
    { name: 'isSwapError', guard: isSwapError },
    { name: 'isUser', guard: isUser },
    { name: 'isYieldPoolId', guard: isYieldPoolId },
    { name: 'isYieldPoolInfo', guard: isYieldPoolInfo },
    { name: 'isYieldPosition', guard: isYieldPosition },
    { name: 'isYieldPositionId', guard: isYieldPositionId },
  ]

  it.each(interfaceGuards)('$name rejects values that are not the interface', ({ guard }) => {
    expect(guard(undefined)).toBe(false)
    expect(guard(null)).toBe(false)
    expect(guard('a string')).toBe(false)
    expect(guard(42)).toBe(false)
    expect(guard({})).toBe(false)
  })
})

describe('isAddressValue', () => {
  it('accepts a checksummed ethereum address', () => {
    expect(isAddressValue('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266')).toBe(true)
  })

  it('rejects malformed values', () => {
    expect(isAddressValue('0x123')).toBe(false)
    expect(isAddressValue(42)).toBe(false)
    expect(isAddressValue(undefined)).toBe(false)
  })
})
