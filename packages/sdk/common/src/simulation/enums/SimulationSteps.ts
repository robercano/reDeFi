/**
 * Enum for the different steps that the DMA simulator uses
 */
export enum SimulationSteps {
  Approve = 'Approve',
  Permit = 'Permit',
  Permit2 = 'Permit2',
  DepositBorrow = 'DepositBorrow',
  PaybackWithdraw = 'PaybackWithdraw',
  Swap = 'Swap',
  DepositYield = 'DepositYield',
  WithdrawYield = 'WithdrawYield',
}
