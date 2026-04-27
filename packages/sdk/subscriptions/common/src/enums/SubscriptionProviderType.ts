import { z } from 'zod'

/**
 * @name SubscriptionProviderType
 * @description Represents the different subscription providers
 */
export enum SubscriptionProviderType {
  ALCHEMY = 'ALCHEMY',
  INFURA = 'INFURA',
  DEFAULT_RPC = 'DEFAULT_RPC'
}

/**
 * @description Zod schema for SubscriptionProviderType
 */
export const SubscriptionProviderTypeSchema = z.nativeEnum(SubscriptionProviderType)

/**
 * @description Type guard for SubscriptionProviderType
 * @param value 
 * @returns boolean true if the value is a SubscriptionProviderType
 */
export const isSubscriptionProviderType = (value: unknown): value is SubscriptionProviderType => {
  return SubscriptionProviderTypeSchema.safeParse(value).success
}
