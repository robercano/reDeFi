import { Address } from '@thesolidchain/common'

export interface ConfigEntry {
  name: string
  address?: Address
  addToRegistry?: boolean
  constructorArgs?: Array<string | number>
}
