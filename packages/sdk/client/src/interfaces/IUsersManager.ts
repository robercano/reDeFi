import { Address, ChainInfo } from '@thesolidchain/sdk-common'
import type { IUserClient } from './IUserClient'

/**
 * @interface IUsersManager
 * Allows to retrieve a user by their wallet and network
 */
export interface IUsersManager {
  /**
   * getUserClient
   * Retrieves a user by their wallet and network
   *
   * @param params.chainInfo The chain to retrieve the user for
   * @param params.walletAddress The wallet to retrieve the user for
   *
   * @returns The user for the given wallet and network
   */
  getUserClient(params: { chainInfo: ChainInfo; walletAddress: Address }): Promise<IUserClient>
}
