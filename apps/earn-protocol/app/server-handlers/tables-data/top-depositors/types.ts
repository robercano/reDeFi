import { type Position } from '@thesolidchain/subgraph-manager-common'
import { type TopDepositors } from '@thesolidchain/summer-protocol-db'

export type TopDepositorPosition = Position & {
  changeSevenDays: string
  earningsStreak: bigint
  projectedOneYearEarnings: string
  projectedOneYearEarningsUsd: string
}

export type TopDepositorsPagination = {
  data: TopDepositors[]
  pagination: {
    currentPage: number
    totalPages: number
    totalItems: number
    itemsPerPage: number
  }
}

export type TopDepositorsSortBy =
  | 'balanceUsd'
  | 'balance'
  | 'balanceNormalized'
  | 'changeSevenDays'
  | 'projectedOneYearEarnings'
  | 'projectedOneYearEarningsUsd'
  | 'noOfDeposits'
  | 'earningsStreak'
