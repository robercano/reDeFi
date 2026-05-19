import { IPercentage } from '../../common/interfaces/IPercentage'
import { IToken } from '../../common/interfaces/IToken'
import { ITokenAmount } from '../../common/interfaces/ITokenAmount'
import { IUser } from '../../user/interfaces/IUser'
import { SwapProviderType } from '../../swap/enums/SwapProviderType'

export interface ISwapSimulationParams {
  user: IUser
  sellToken: IToken
  buyToken: IToken
  sellAmount: ITokenAmount
  slippage: IPercentage
  preferredProvider?: SwapProviderType
}
