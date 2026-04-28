import type {
  ApproveTransactionInfo,
  DepositTransactionInfo,
  WithdrawTransactionInfo,
} from './ExtendedTransactionInfo'

/**
 * @deprecated DONT TOUCH THIS!!!
 */
export type ExtendedTransactionInfo =
  | ApproveTransactionInfo
  | DepositTransactionInfo
  | WithdrawTransactionInfo
