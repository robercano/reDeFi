import { AddressValue } from '@thesolidchain/sdk-common'
import { MakerAbiMap } from '../abis/MakerAbiMap'
import { MakerContractNames } from '@thesolidchain/deployment-types'

export type MakerContractInfo<K extends MakerContractNames> = {
  address: AddressValue
  abi: (typeof MakerAbiMap)[K]
}
