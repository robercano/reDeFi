import {
  AaveV3LendingPosition,
  AaveV3LendingPositionId,
  isAaveV3LendingPool,
} from '@thesolidchain/protocol-plugins'
import {
  TokenAmount,
  ProtocolName,
  ILendingPool,
  ILendingPosition,
  LendingPositionType,
  Address,
} from '@thesolidchain/sdk-common'

export function getTargetPosition(params: {
  sourcePosition: ILendingPosition
  targetPool: ILendingPool
}): ILendingPosition {
  switch (params.targetPool.id.protocol.name) {

    case ProtocolName.AaveV3:
      if (!isAaveV3LendingPool(params.targetPool)) {
        throw new Error('Pool is not AaveV3LendingPool')
      }

      return AaveV3LendingPosition.createFrom({
        subtype: LendingPositionType.Multiply,
        id: AaveV3LendingPositionId.createFrom({ 
          id: '0987654321',
          poolId: params.targetPool.id,
          walletAddress: Address.ZeroAddressEthereum
        }),
        pool: params.targetPool,
        debtAmount: TokenAmount.createFrom({
          amount: params.sourcePosition.debtAmount.amount,
          token: params.targetPool.debtToken,
        }),
        collateralAmount: TokenAmount.createFrom({
          amount: params.sourcePosition.collateralAmount.amount,
          token: params.targetPool.collateralToken,
        }),
      })

    default:
      throw new Error('Protocol not supported')
  }
}
