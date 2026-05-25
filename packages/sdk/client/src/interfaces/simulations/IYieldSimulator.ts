import { ITokenAmount, IYieldPoolId, IYieldPositionId, ISimulation } from '@thesolidchain/sdk-common'

export interface IYieldSimulator {
  simulateDeposit(params: { poolId: IYieldPoolId; amount: ITokenAmount }): Promise<ISimulation>
  simulateWithdraw(params: { positionId: IYieldPositionId; amount: ITokenAmount }): Promise<ISimulation>
}
