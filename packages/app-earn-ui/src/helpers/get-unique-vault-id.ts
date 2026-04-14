import { type SDKVaultishType } from '@thesolidchain/app-types'

export const getUniqueVaultId = (vault: SDKVaultishType) => {
  return `${vault.id}-${vault.protocol.network}`
}
