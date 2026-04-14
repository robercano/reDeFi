import type { IAllowanceManager } from '@summerfi/allowance-manager-common'
import type { IConfigurationProvider } from '@summerfi/configuration-provider-common'
import type { IContractsProvider } from '@summerfi/contracts-provider-common'
import { TransactionType, TokenAmount } from '@summerfi/sdk-common'

/**
 * @name AllowanceManager
 * @description This class is the implementation of the IAllowanceManager interface. Takes care of generating transactions for setting an allowance
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
  /** @see IAllowanceManager.getApproval */
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
        ? TokenAmount.createFromBaseUnit({ token: params.amount.token, amount: allowanceRaw.toString() })
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
