import type { Transaction } from './Transaction'

/**
 * @interface TransactionInfo
 * Contains the low level transaction plus a description of what the transaction is for.
 *              This could be used to display the transaction to the user.
 */
export interface TransactionInfo {
  /** Low level transaction that can be sent to the blockchain */
  transaction: Transaction
  /** High-level description of the transaction */
  description: string
}
