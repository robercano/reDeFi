import { ServiceContainer } from './service-container'
import { MorphoBlueStopLossEventBody } from '~types'
import { PublicClient } from 'viem'
import { Addresses, CurrentTriggerLike } from '@thesolidchain/triggers-shared'
import { Address, ChainId, PoolId } from '@thesolidchain/serverless-shared'
import { GetTriggersResponse } from '@thesolidchain/triggers-shared/contracts'
import { Logger } from '@aws-lambda-powertools/logger'
import memoize from 'just-memoize'
import { dmaMorphoBlueStopLossValidator } from './against-position-validators'
import { encodeMorphoBlueStopLoss } from './trigger-encoders'
import { encodeFunctionForDpm } from './encode-function-for-dpm'
import { getCurrentMorphoBlueStopLoss } from '@thesolidchain/triggers-calculations'
import {
  calculateCollateralPriceInDebtBasedOnLtv,
  getMorphoBluePosition,
} from '@thesolidchain/triggers-calculations'
import { SupportedActions } from '@thesolidchain/triggers-shared'

export interface GetMorphoBlueStopLossServiceContainerProps {
  rpc: PublicClient
  addresses: Addresses
  getTriggers: (address: Address, poolId: PoolId) => Promise<GetTriggersResponse>
  logger?: Logger
  chainId: ChainId
}

export const getMorphoBlueStopLossServiceContainer: (
  props: GetMorphoBlueStopLossServiceContainerProps,
) => ServiceContainer<MorphoBlueStopLossEventBody> = ({ rpc, addresses, logger, getTriggers }) => {
  const getPosition = memoize(async (params: Parameters<typeof getMorphoBluePosition>[0]) => {
    return await getMorphoBluePosition(
      params,
      rpc,
      {
        morphoBlue: addresses.MorphoBlue.MorphoBlue,
      },
      logger,
    )
  })
  return {
    simulatePosition: () => {
      return Promise.resolve({})
    },
    validate: async ({ trigger }) => {
      const position = await getPosition({
        address: trigger.dpm,
        poolId: trigger.triggerData.poolId,
        collateral: trigger.position.collateral,
        debt: trigger.position.debt,
      })

      const executionPrice = calculateCollateralPriceInDebtBasedOnLtv({
        ...position,
        ltv: trigger.triggerData.executionLTV,
      })

      const triggers = await getTriggers(trigger.dpm, trigger.triggerData.poolId)
      return dmaMorphoBlueStopLossValidator({
        position,
        executionPrice,
        triggerData: trigger.triggerData,
        action: trigger.action,
        triggers,
      })
    },
    getTransaction: async ({ trigger }) => {
      const action = trigger.action
      const triggers = await getTriggers(trigger.dpm, trigger.triggerData.poolId)
      const position = await getPosition({
        address: trigger.dpm,
        poolId: trigger.triggerData.poolId,
        collateral: trigger.position.collateral,
        debt: trigger.position.debt,
      })

      const currentTrigger: CurrentTriggerLike | undefined = getCurrentMorphoBlueStopLoss(
        triggers,
        position,
        logger,
      )

      const encodedData = encodeMorphoBlueStopLoss(position, trigger.triggerData, currentTrigger)

      const triggerData =
        action === SupportedActions.Remove
          ? {
              encodedTriggerData: encodedData.encodedTriggerData,
              txData: encodedData.removeTrigger,
            }
          : {
              encodedTriggerData: encodedData.encodedTriggerData,
              txData: encodedData.upsertTrigger,
            }

      if (triggerData.txData === undefined) {
        throw new Error('txData is undefined')
      }

      const transaction = encodeFunctionForDpm(
        {
          dpm: trigger.dpm,
          triggerTxData: triggerData.txData,
        },
        addresses,
      )
      return {
        encodedTriggerData: triggerData.encodedTriggerData,
        transaction,
      }
    },
  } as ServiceContainer<MorphoBlueStopLossEventBody>
}
