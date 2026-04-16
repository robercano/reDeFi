/* eslint-disable @typescript-eslint/no-explicit-any */
import { BigNumber } from 'bignumber.js'
import { SUMR_DECIMALS } from './constants'

export function formatToken(value: bigint, decimals: number): string {
  return BigNumber(value).shiftedBy(-decimals).toFixed()
}

export function formatSumr(value: bigint): string {
  return formatToken(value, Number(SUMR_DECIMALS))
}

export function displayMerklReward(reward: {
  amount: string
  claimed: string
  token: { decimals: number; symbol: string }
}): string {
  let result = reward.token.symbol + ': '
  result += `Amount: ${formatToken(BigInt(reward.amount), reward.token.decimals)}`
  result += `, Claimed: ${formatToken(BigInt(reward.claimed), reward.token.decimals)}`

  return result
}
