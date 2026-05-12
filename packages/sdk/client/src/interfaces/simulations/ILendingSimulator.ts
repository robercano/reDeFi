import { ITokenAmount, ILendingPoolId, ISimulation } from '@thesolidchain/sdk-common'

export interface ILendingSimulator {
  simulateSupply(params: { poolId: ILendingPoolId; amount: ITokenAmount }): Promise<ISimulation>
  simulateBorrow(params: { poolId: ILendingPoolId; amount: ITokenAmount }): Promise<ISimulation>
}
