import type {
  ApproveTransactionInfo,
  IAddress,
  IChainInfo,
  ITokenAmount,
} from '@thesolidchain/sdk-common'

/**
 * IAllowanceManager
 * Interface for the Allowance Manager which handles generating transactions for setting an allowance
 */
export interface IAllowanceManager {
  /**
   * getApproval
   * Get the transactions needed to set an allowance for a token
   *
   * @param params.chainInfo Chain in which the token is
   * @param params.spender Address of the spender to approve
   * @param params.amount Amount of tokens to allow the spender to spend
   * @param params.owner (optional) Address of the owner of the tokens. If not provided, it will not check the current allowance and will always return the approval transaction
   *
   * @returns The transaction info needed to set the allowance, or undefined if no approval is needed (owner param is required for this)
   */
  getApproval(params: {
    chainInfo: IChainInfo
    spender: IAddress
    amount: ITokenAmount
    owner?: IAddress
  }): Promise<ApproveTransactionInfo | undefined>
}
