import type { IAllowanceManager } from '@thesolidchain/allowance-manager-common'
import type { IConfigurationProvider } from '@thesolidchain/configuration-provider-common'
import type { IContractsProvider } from '@thesolidchain/contracts-provider-common'
import { TransactionType, TokenAmount } from '@thesolidchain/sdk-common'

/**
 * AllowanceManager
 * This class is the concrete implementation of the IAllowanceManager interface.
 * It is responsible for orchestrating ERC-20 approval flows, verifying existing
 * token allowances against required transaction amounts, and generating the necessary
 * approval transaction payloads when allowances are insufficient.
 */
export class AllowanceManager implements IAllowanceManager {
  private _configProvider: IConfigurationProvider
  private _contractsProvider: IContractsProvider

  /** CONSTRUCTOR */
  constructor(params: {
    configProvider: IConfigurationProvider
    contractsProvider: IContractsProvider
  }) {
    this._configProvider = params.configProvider
    this._contractsProvider = params.contractsProvider
  }

  /** FUNCTIONS */
  /**
   * getApproval
   * Evaluates the current token allowance of a user for a specific spender and amount.
   * If the owner's allowance is equal to or greater than the required amount, no approval is needed.
   * Otherwise, it generates the unsigned transaction data required to approve the spender for the exact amount.
   *
   * @param params.amount - The required token amount needed by the spender.
   * @param params.spender - The address of the spender (e.g., a protocol vault or router).
   * @param params.owner - Optional owner address. If missing, it always generates an approval transaction.
   * @param params.chainInfo - The network chain context for the token contract.
   * @returns Unsigned transaction for approval, or undefined if the allowance is already sufficient.
   */
  async getApproval(
    params: Parameters<IAllowanceManager['getApproval']>[0],
  ): ReturnType<IAllowanceManager['getApproval']> {
    const erc20Contract = await this._contractsProvider.getErc20Contract({
      address: params.amount.token.address,
      chainInfo: params.chainInfo,
    })

    const [allowanceRaw, approveTx] = await Promise.all([
      params.owner != null
        ? erc20Contract.allowance(params.owner.value, params.spender.value)
        : Promise.resolve(null),
      erc20Contract.approve(params.spender.value, params.amount.toSolidityValue()),
    ])

    const allowance =
      allowanceRaw != null
        ? TokenAmount.createFromBaseUnit({
            token: params.amount.token,
            amount: allowanceRaw.toString(),
          })
        : null

    if (allowance != null && allowance.isGreaterOrEqualThan(params.amount)) {
      return undefined
    }

    return {
      ...approveTx,
      type: TransactionType.Approve,
      metadata: {
        approvalAmount: params.amount,
        approvalSpender: params.spender,
      },
    }
  }
}
