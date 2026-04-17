import type {
  Address,
  AddressValue,
  ChainId,
  ContractSpecificRoleName,
  GlobalRoles,
  GraphRoleName,
  Percentage,
} from '@thesolidchain/sdk-common'
import type { TestClientIds, TestConfigs } from './testConfig'

export type ContractRoleScenario = {
  role: ContractSpecificRoleName
  targetAddress: Address
  shouldGrant?: boolean
  shouldRevoke?: boolean
}

export type GlobalRoleScenario = {
  role: GlobalRoles
  targetAddress: Address
  shouldGrant?: boolean
  shouldRevoke?: boolean
}

export type GovTestScenario = {
  chainConfigKey: keyof typeof TestConfigs
}

export type GetAllRolesScenario = {
  description: string
  roleName?: GraphRoleName
  targetContract?: AddressValue
  owner?: AddressValue
  first?: number
  skip?: number
  expectedMinimumCount?: number
}

export type RebalanceScenario = {
  description: string
  fromArk: Address
  toArk: Address
  amount: string
  tokenSymbol: string
}

export type PositionsScenario = {
  description: string
  clientId?: TestClientIds
  testSpecificFleet?: boolean
}

export type SwapScenario = {
  description: string
  chainId: ChainId
  fromTokenSymbol: string
  toTokenSymbol: string
  fromAmount: string
  slippage: Percentage
}
