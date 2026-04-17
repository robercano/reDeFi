/**
 * Type of simulation that the simulator accepts
 */
export enum SimulationType {
  /** Importing an external position into the protocol */
  ImportPosition = 'ImportPosition',
  /** Refinance an existing position into another protocol */
  Refinance = 'Refinance',
  /** Depositing or withdrawing from the protocol */
  Protocol = 'Protocol',
}
