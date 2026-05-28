import { IPercentage } from '../../common/interfaces/IPercentage'
import { IPrice } from '../../common/interfaces/IPrice'
import { IToken } from '../../common/interfaces/IToken'
import { ITokenAmount } from '../../common/interfaces/ITokenAmount'
import { ILendingPosition } from '../../lending-protocols/interfaces/ILendingPosition'
import { SwapProviderType } from '../../swap/enums/SwapProviderType'

import { SwapRoute } from '../../swap/implementation/QuoteData'
import { SimulationSteps } from '../enums/SimulationSteps'
import { ReferenceableField, ValueReference } from './ValueReference'
import { IYieldPoolId } from '../../yield-protocols/interfaces/IYieldPoolId'
import { IYieldPosition } from '../../yield-protocols/interfaces/IYieldPosition'
import { ILiquidityPoolId } from '../../liquidity-protocols/interfaces/ILiquidityPoolId'
import { ILiquidityPosition } from '../../liquidity-protocols/interfaces/ILiquidityPosition'

export interface Step<T extends SimulationSteps, I, O = undefined> {
  type: T
  name: string
  inputs: I
  outputs: O
  skip?: boolean
}

export type DepositBorrowStep = Step<
  SimulationSteps.DepositBorrow,
  {
    depositAmount: ReferenceableField<ITokenAmount>
    borrowAmount: ReferenceableField<ITokenAmount>
    position: ILendingPosition
    additionalDeposit?: ValueReference<ITokenAmount>
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
  },
  {
    paybackAmount: ITokenAmount
    withdrawAmount: ITokenAmount
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

export type ApproveStep = Step<
  SimulationSteps.Approve,
  {
    token: IToken
    amount: ReferenceableField<ITokenAmount>
    spender: string
  }
>

export type PermitStep = Step<
  SimulationSteps.Permit,
  {
    token: IToken
    amount: ReferenceableField<ITokenAmount>
    spender: string
    deadline: bigint
  }
>

export type Permit2Step = Step<
  SimulationSteps.Permit2,
  {
    token: IToken
    amount: ReferenceableField<ITokenAmount>
    spender: string
    nonce: bigint
    deadline: bigint
  }
>

export type ProvideLiquidityStep = Step<
  SimulationSteps.ProvideLiquidity,
  {
    amounts: ReferenceableField<ITokenAmount[]>
    poolId: ILiquidityPoolId
    tickLower?: number
    tickUpper?: number
  },
  {
    amounts: ITokenAmount[]
  }
>

export type RemoveLiquidityStep = Step<
  SimulationSteps.RemoveLiquidity,
  {
    removeAmount: ReferenceableField<ITokenAmount> // e.g. amount of LP tokens/liquidity units
    position: ILiquidityPosition
  },
  {
    removeAmount: ITokenAmount
  }
>

export type Steps =
  | DepositBorrowStep
  | PaybackWithdrawStep
  | SwapStep
  | DepositYieldStep
  | WithdrawYieldStep
  | ProvideLiquidityStep
  | RemoveLiquidityStep
  | ApproveStep
  | PermitStep
  | Permit2Step
