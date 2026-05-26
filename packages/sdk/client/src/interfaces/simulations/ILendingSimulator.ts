import { ILendingPoolId, ILendingPositionId, ISimulation, ITokenAmount } from '@thesolidchain/sdk-common'

export interface ILendingSimulator {
  simulateSupply(params: { poolId: ILendingPoolId; amount: ITokenAmount }): Promise<ISimulation>
  simulateBorrow(params: { poolId: ILendingPoolId; amount: ITokenAmount }): Promise<ISimulation>
  simulateWithdraw(params: {
    positionId: ILendingPositionId
    amount: ITokenAmount
  }): Promise<ISimulation>
  simulateRepay(params: {
    positionId: ILendingPositionId
    amount: ITokenAmount
  }): Promise<ISimulation>
}
