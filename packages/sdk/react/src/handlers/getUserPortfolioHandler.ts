import type { ISDKManager } from '@thesolidchain/sdk-client'
import type { IUser } from '@thesolidchain/sdk-common'

export const getUserPortfolioHandler = (sdk: ISDKManager) => (params: { user: IUser }) => {
  return sdk.portfolio.getUserPortfolio(params)
}
