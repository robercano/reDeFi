import { User, Wallet } from '@thesolidchain/sdk-common'
import type { getChainInfoHandler } from './getChainInfoHandler'
import type { getWalletAddressHandler } from '../factories/getWalletAddressHandler'

export const getCurrentUserHandler =
  (
    getChainInfo: ReturnType<typeof getChainInfoHandler>,
    getWalletAddress: ReturnType<typeof getWalletAddressHandler>,
  ) =>
  () => {
    return User.createFrom({
      chainInfo: getChainInfo(),
      wallet: Wallet.createFrom({ address: getWalletAddress() }),
    })
  }
