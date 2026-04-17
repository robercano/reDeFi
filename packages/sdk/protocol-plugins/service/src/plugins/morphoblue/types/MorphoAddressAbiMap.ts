import { morphoBlueAbi } from '@thesolidchain/abis'
import { MorphoBlueContractNames } from '@thesolidchain/deployment-types'
import { AddressValue } from '@thesolidchain/sdk-common'

type MorphoAbiMap = {
  MorphoBlue: typeof morphoBlueAbi
  AdaptiveCurveIrm: undefined
}

export type MorphoAddressAbiMap = {
  [K in MorphoBlueContractNames]: {
    address: AddressValue
    abi: MorphoAbiMap[K]
  }
}
