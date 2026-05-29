import { CompoundV3ContractNames } from '@thesolidchain/deployment-types'
import { GenericAbiMap } from '../../utils/ChainContractProvider'
import { COMPOUND_V3_COMET_ABI, COMPOUND_V3_COMET_EXT_ABI } from './CompoundV3ABIS'

export type CompoundV3AbiMapType = GenericAbiMap<CompoundV3ContractNames> & {
  Comet: typeof COMPOUND_V3_COMET_ABI
  CometExt: typeof COMPOUND_V3_COMET_EXT_ABI
  CompoundV3Encoder: null
}

export const CompoundV3AbiMap: CompoundV3AbiMapType = {
  Comet: COMPOUND_V3_COMET_ABI,
  CometExt: COMPOUND_V3_COMET_EXT_ABI,
  CompoundV3Encoder: null,
} as const
