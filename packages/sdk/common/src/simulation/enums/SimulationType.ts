/**
 * Type of simulation that the simulator accepts
 */
export enum SimulationType {
  /** Simple token transfer between wallets or to a smart contract */
  Transfer = 'Transfer',
  /** Staking tokens into a protocol (e.g. validator staking) */
  Stake = 'Stake',
  /** Lending operations (deposit collateral, borrow, repay, withdraw) */
  Lend = 'Lend',
  /** Passive yield operations (deposit into Yearn, Lido, etc.) */
  Yield = 'Yield',
  /** Swapping tokens through a DEX or Aggregator */
  Swap = 'Swap',
}
