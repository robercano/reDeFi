import { ProtocolName } from '../../common/enums/ProtocolName'
import { IPercentage } from '../../common/interfaces/IPercentage'
import { IPrice } from '../../common/interfaces/IPrice'
import { IToken } from '../../common/interfaces/IToken'
import { ITokenAmount } from '../../common/interfaces/ITokenAmount'
import { ILendingPool } from '../../lending-protocols/interfaces/ILendingPool'
import { ILendingPosition } from '../../lending-protocols/interfaces/ILendingPosition'
import { SwapProviderType } from '../../swap/enums/SwapProviderType'

import { SwapRoute } from '../../swap/implementation/QuoteData'
import { FlashloanProvider } from '../enums/FlashloanProvider'
import { SimulationSteps } from '../enums/SimulationSteps'
import { TokenTransferTargetType } from '../enums/TokenTransferTargetType'
import { ReferenceableField, ValueReference } from './ValueReference'
import { IYieldPoolId } from '../../yield-protocols/interfaces/IYieldPoolId'
import { IYieldPosition } from '../../yield-protocols/interfaces/IYieldPosition'

export interface Step<T extends SimulationSteps, I, O = undefined> {
  type: T
  name: string
  inputs: I
  outputs: O
  skip?: boolean
}

export type FlashloanStep = Step<
  SimulationSteps.Flashloan,
  {
    amount: ITokenAmount
    provider: FlashloanProvider
  }
>

export type PullTokenStep = Step<
  SimulationSteps.PullToken,
  { amount: ReferenceableField<ITokenAmount> }
>

export type DepositBorrowStep = Step<
  SimulationSteps.DepositBorrow,
  {
    depositAmount: ReferenceableField<ITokenAmount>
    borrowAmount: ReferenceableField<ITokenAmount>
    position: ILendingPosition
    additionalDeposit?: ValueReference<ITokenAmount>
    borrowTargetType: TokenTransferTargetType
  },
  {
    depositAmount: ITokenAmount
    borrowAmount: ITokenAmount
  }
>

export type PaybackWithdrawStep = Step<
  SimulationSteps.PaybackWithdraw,
  {
    paybackAmount: ReferenceableField<ITokenAmount>
    withdrawAmount: ITokenAmount
    position: ILendingPosition
    withdrawTargetType: TokenTransferTargetType
  },
  {
    paybackAmount: ITokenAmount
    withdrawAmount: ITokenAmount
  }
>

export type SkippedStep = Step<
  SimulationSteps.Skipped,
  {
    type: SimulationSteps
    protocol?: ProtocolName
  }
>

export type SwapStep = Step<
  SimulationSteps.Swap,
  {
    provider: SwapProviderType
    routes: SwapRoute[]
    /** Spot price of the token being traded */
    spotPrice: IPrice
    /** Offer price of the token being traded, derived from the swap quote */
    offerPrice: IPrice
    /** Full amount sent to the swap contract */
    inputAmount: ITokenAmount
    /** Amount estimated by the swap service to be received, equal to `inputAmountAfterFee / offerPrice` */
    estimatedReceivedAmount: ITokenAmount
    /** Minimum amount to be received from the swap service, equal to `inputAmountAfterFee / offerPrice * (1 - slippage)` */
    minimumReceivedAmount: ITokenAmount
    /** Maximum slippage accepted for the swap */
    slippage: IPercentage
  },
  {
    /** Effective amount received after the actual swap */
    received: ITokenAmount
  }
>

export type ReturnFundsStep = Step<SimulationSteps.ReturnFunds, { token: IToken }>

export type RepayFlashloanStep = Step<
  SimulationSteps.RepayFlashloan,
  {
    amount: ITokenAmount
  }
>

export type NewPositionEventStep = Step<
  SimulationSteps.NewPositionEvent,
  {
    position: ILendingPosition
  }
>

export type OpenPosition = Step<
  SimulationSteps.OpenPosition,
  { pool: ILendingPool },
  { position: ILendingPosition }
>

export type DepositYieldStep = Step<
  SimulationSteps.DepositYield,
  {
    depositAmount: ReferenceableField<ITokenAmount>
    poolId: IYieldPoolId
  },
  {
    depositAmount: ITokenAmount
  }
>

export type WithdrawYieldStep = Step<
  SimulationSteps.WithdrawYield,
  {
    withdrawAmount: ReferenceableField<ITokenAmount>
    position: IYieldPosition
  },
  {
    withdrawAmount: ITokenAmount
  }
>

export type Steps =
  | FlashloanStep
  | PullTokenStep
  | DepositBorrowStep
  | PaybackWithdrawStep
  | SwapStep
  | ReturnFundsStep
  | RepayFlashloanStep
  | NewPositionEventStep
  | OpenPosition
  | SkippedStep
  | DepositYieldStep
  | WithdrawYieldStep
