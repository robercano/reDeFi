import { z } from 'zod'

/**
 * SubscriptionProviderType
 * Represents the different subscription providers
 */
export enum SubscriptionProviderType {
  ALCHEMY = 'ALCHEMY',
  INFURA = 'INFURA',
  DEFAULT_RPC = 'DEFAULT_RPC',
}

/**
 * Zod schema for SubscriptionProviderType
 */
export const SubscriptionProviderTypeSchema = z.nativeEnum(SubscriptionProviderType)

/**
 * Type guard for SubscriptionProviderType
 * @param value
 * @returns boolean true if the value is a SubscriptionProviderType
 */
export const isSubscriptionProviderType = (value: unknown): value is SubscriptionProviderType => {
  return SubscriptionProviderTypeSchema.safeParse(value).success
}
