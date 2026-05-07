import { describe, expect, it } from 'vitest'
import {
  newEmptyPositionFromPool,
  depositToPosition,
  withdrawFromPosition,
  borrowFromPosition,
  repayPositionDebt
} from '../src/common/utils/PositionUtils'

import { Token } from '../src/common/implementation/Token'
import { TokenAmount } from '../src/common/implementation/TokenAmount'
import { getChainInfoByChainId } from '../src/common/implementation/ChainFamilies'
import { Address } from '../src/common/implementation/Address'
import { ILendingPoolData } from '../src/lending-protocols/interfaces/ILendingPool'

describe('PositionUtils', () => {
  const chainInfo = getChainInfoByChainId(1)
  const collateralToken = Token.createFrom({
    chainInfo,
    address: Address.createFromEthereum({ value: '0x1111111111111111111111111111111111111111' }),
    decimals: 18,
    symbol: 'COL',
    name: 'Collateral Token'
  })

  const debtToken = Token.createFrom({
    chainInfo,
    address: Address.createFromEthereum({ value: '0x2222222222222222222222222222222222222222' }),
    decimals: 18,
    symbol: 'DEBT',
    name: 'Debt Token'
  })

  const poolData: ILendingPoolData = {
    collateralToken,
    debtToken
  } as never // Mocking the rest of pool data

  it('should create a new empty position from pool', () => {
    const position = newEmptyPositionFromPool(poolData)
    expect(position.collateralAmount.amount).toBe('0')
    expect(position.debtAmount.amount).toBe('0')
  })

  it('should handle depositToPosition', () => {
    const position = newEmptyPositionFromPool(poolData)
    const depositAmount = TokenAmount.createFrom({ token: collateralToken, amount: '100' })
    const updated = depositToPosition(position, depositAmount)
    expect(updated.collateralAmount.amount).toBe('100')
    expect(updated.debtAmount.amount).toBe('0')
  })

  it('should handle withdrawFromPosition', () => {
    const position = depositToPosition(newEmptyPositionFromPool(poolData), TokenAmount.createFrom({ token: collateralToken, amount: '100' }))
    const withdrawAmount = TokenAmount.createFrom({ token: collateralToken, amount: '40' })
    const updated = withdrawFromPosition(position, withdrawAmount)
    expect(updated.collateralAmount.amount).toBe('60')
  })

  it('should handle borrowFromPosition', () => {
    const position = newEmptyPositionFromPool(poolData)
    const borrowAmount = TokenAmount.createFrom({ token: debtToken, amount: '50' })
    const updated = borrowFromPosition(position, borrowAmount)
    expect(updated.debtAmount.amount).toBe('50')
  })

  it('should handle repayPositionDebt', () => {
    const position = borrowFromPosition(newEmptyPositionFromPool(poolData), TokenAmount.createFrom({ token: debtToken, amount: '50' }))
    const repayAmount = TokenAmount.createFrom({ token: debtToken, amount: '20' })
    const updated = repayPositionDebt(position, repayAmount)
    expect(updated.debtAmount.amount).toBe('30')
  })
})
