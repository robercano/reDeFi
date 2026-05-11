import {
  ActionBuilderParams,
  ActionBuilderUsedAction,
  FilterStep,
  IActionBuilder,
  IProtocolPlugin,
  IProtocolPluginContext,
} from '@thesolidchain/protocol-plugins-common'
import { ChainFamilyMap, IPoolId, Maybe, ProtocolName } from '@thesolidchain/sdk-common'
import { SimulationSteps, steps } from '@thesolidchain/sdk-common'

import { TransactionInfo } from '@thesolidchain/sdk-common'
import {
  ILendingPool,
  ILendingPoolId,
  ILendingPoolIdData,
  ILendingPoolInfo,
  ILendingPosition,
  ILendingPositionId,
} from '@thesolidchain/sdk-common'
import { IPositionsManager } from '@thesolidchain/sdk-common'
import { IUser } from '@thesolidchain/sdk-common'
import { StepBuilderContextMock } from '@thesolidchain/testing-utils'
import { BaseActionBuilder } from '../../src/implementation/BaseActionBuilder'

/* eslint-disable @typescript-eslint/no-unused-vars */

export class PaybackWithdrawActionBuilderMock extends BaseActionBuilder<steps.PaybackWithdrawStep> {
  actions: ActionBuilderUsedAction[] = []
  async build(params: ActionBuilderParams<steps.PaybackWithdrawStep>): Promise<void> {
    ;(params.context as StepBuilderContextMock).setCheckpoint('PaybackWithdrawActionBuilderMock')
  }
}

export class DepositBorrowActionBuilderMock extends BaseActionBuilder<steps.DepositBorrowStep> {
  actions: ActionBuilderUsedAction[] = []
  async build(params: ActionBuilderParams<steps.DepositBorrowStep>): Promise<void> {
    ;(params.context as StepBuilderContextMock).setCheckpoint('DepositBorrowActionBuilderMock')
  }
}

export class OpenPositionActionBuilderMock extends BaseActionBuilder<steps.OpenPosition> {
  actions: ActionBuilderUsedAction[] = []
  async build(params: ActionBuilderParams<steps.OpenPosition>): Promise<void> {
    ;(params.context as StepBuilderContextMock).setCheckpoint('OpenPositionActionBuilderMock')
  }
}

export class PaybackWithdrawActionBuilderNoCheckpointMock extends BaseActionBuilder<steps.PaybackWithdrawStep> {
  actions: ActionBuilderUsedAction[] = []
  async build(params: ActionBuilderParams<steps.PaybackWithdrawStep>): Promise<void> {}
}

export class DepositBorrowActionBuilderNoCheckpointMock extends BaseActionBuilder<steps.DepositBorrowStep> {
  actions: ActionBuilderUsedAction[] = []
  async build(params: ActionBuilderParams<steps.DepositBorrowStep>): Promise<void> {}
}

export class OpenPositionActionBuilderNoCheckpointMock extends BaseActionBuilder<steps.OpenPosition> {
  actions: ActionBuilderUsedAction[] = []
  async build(params: ActionBuilderParams<steps.OpenPosition>): Promise<void> {}
}

export class ProtocolPluginMock implements IProtocolPlugin {
  protocolName = ProtocolName.Spark
  supportedChains = [ChainFamilyMap.Ethereum.Mainnet]
  lending = this as any

  context = undefined as unknown as IProtocolPluginContext

  initialize(params: { context: IProtocolPluginContext }): void {
    this.context = params.context
  }

  isLendingPoolId(candidate: unknown): candidate is IPoolId {
    return true
  }

  validateLendingPoolId(candidate: unknown): asserts candidate is IPoolId {}

  async getLendingPool(poolId: ILendingPoolId): Promise<ILendingPool> {
    return undefined as unknown as ILendingPool
  }

  async getLendingPoolInfo(poolId: ILendingPoolIdData): Promise<ILendingPoolInfo> {
    return undefined as unknown as ILendingPoolInfo
  }

  async getLendingPosition(positionId: ILendingPositionId): Promise<ILendingPosition> {
    return undefined as unknown as ILendingPosition
  }



}

export class EmptyProtocolPluginMock implements IProtocolPlugin {
  protocolName = ProtocolName.Spark
  supportedChains = [ChainFamilyMap.Ethereum.Mainnet]
  lending = this as any

  context = undefined as unknown as IProtocolPluginContext

  initialize(params: { context: IProtocolPluginContext }): void {
    this.context = params.context
  }

  isLendingPoolId(candidate: unknown): candidate is IPoolId {
    return true
  }

  validateLendingPoolId(candidate: unknown): asserts candidate is IPoolId {}

  async getLendingPool(poolId: ILendingPoolId): Promise<ILendingPool> {
    return undefined as unknown as ILendingPool
  }

  async getLendingPoolInfo(poolId: ILendingPoolIdData): Promise<ILendingPoolInfo> {
    return undefined as unknown as ILendingPoolInfo
  }

  async getLendingPosition(positionId: ILendingPositionId): Promise<ILendingPosition> {
    return undefined as unknown as ILendingPosition
  }



}

export class NoCheckpointProtocolPluginMock implements IProtocolPlugin {
  protocolName = ProtocolName.Spark
  supportedChains = [ChainFamilyMap.Ethereum.Mainnet]
  lending = this as any

  context = undefined as unknown as IProtocolPluginContext

  initialize(params: { context: IProtocolPluginContext }): void {
    this.context = params.context
  }

  isLendingPoolId(candidate: unknown): candidate is IPoolId {
    return true
  }

  validateLendingPoolId(candidate: unknown): asserts candidate is IPoolId {}

  async getLendingPool(poolId: ILendingPoolId): Promise<ILendingPool> {
    return undefined as unknown as ILendingPool
  }

  async getLendingPoolInfo(poolId: ILendingPoolIdData): Promise<ILendingPoolInfo> {
    return undefined as unknown as ILendingPoolInfo
  }

  async getLendingPosition(positionId: ILendingPositionId): Promise<ILendingPosition> {
    return undefined as unknown as ILendingPosition
  }



}
