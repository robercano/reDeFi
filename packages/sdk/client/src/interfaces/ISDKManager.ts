import type { IChainsManagerClient } from './IChainsManager'
import type { IOracleManagerClient } from './IOracleManagerClient'
import type { IPortfolioManager } from './IPortfolioManager'
import type { ISwapManagerClient } from './ISwapManagerClient'
import type { ITokensManagerClient2 } from './ITokensManagerClient2'
import type { IUsersManager } from './IUsersManager'
import type { ISimulatorClient } from './simulations/ISimulatorClient'
import type { IOrdersManagerClient } from './IOrdersManagerClient'
import type { IProtocolsManagerClient } from './IProtocolsManagerClient'
import type { IEventBus } from '@thesolidchain/events-common'

/**
 * Main entry point for interacting with the reDeFi SDK on the client side.
 *
 * This interface exposes all the available managers and services to handle chains, tokens, portfolios, swaps, oracles, and protocols.
 *
 * @interface ISDKManager
 */
export interface ISDKManager {
  /** The global event bus for SDK events */
  readonly eventBus: IEventBus
  /** Simulator for all the different operations supported in the SDK */
  readonly simulator: ISimulatorClient
  /** Chains Manager for interacting with the different chains supported in the SDK */
  readonly chains: IChainsManagerClient
  /** Tokens Manager for interacting with the different tokens supported in the SDK */
  readonly tokens: ITokensManagerClient2
  /** Users Manager for retrieving information about a user */
  readonly users: IUsersManager
  /** Portfolio Manager for retrieving information about a user's portfolio */
  readonly portfolio: IPortfolioManager
  /** Swap Manager for interacting with the swaps */
  readonly swaps: ISwapManagerClient
  /** Swap Manager for interacting with the swaps */
  readonly oracle: IOracleManagerClient
  /** Protocols Manager for interacting with protocols */
  readonly protocols: IProtocolsManagerClient
  /** Orders Manager for building and handling execution orders */
  readonly orders: IOrdersManagerClient
}
