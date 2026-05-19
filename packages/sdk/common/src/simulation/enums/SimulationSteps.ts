/**
 * Enum for the different steps that the DMA simulator uses
 */
export enum SimulationSteps {
  Flashloan = 'Flashloan',
  Approve = 'Approve',
  Permit = 'Permit',
  Permit2 = 'Permit2',
  DepositBorrow = 'DepositBorrow',
  PaybackWithdraw = 'PaybackWithdraw',
  Swap = 'Swap',
  PullToken = 'PullToken',
  ReturnFunds = 'ReturnFunds',
  RepayFlashloan = 'RepayFlashloan',
  Import = 'Import',
  NewPositionEvent = 'NewPositionEvent',
  OpenPosition = 'OpenPosition',
  Skipped = 'Skipped',
  DepositYield = 'DepositYield',
  WithdrawYield = 'WithdrawYield',
}
