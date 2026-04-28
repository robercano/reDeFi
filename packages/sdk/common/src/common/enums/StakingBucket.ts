import { z } from 'zod'

/**
 * StakingBucket
 * Enumerates the staking bucket types based on lockup periods
 */
export enum StakingBucket {
  NoLockup = 0,
  ShortTerm = 1,
  TwoWeeksToThreeMonths = 2,
  ThreeToSixMonths = 3,
  SixToTwelveMonths = 4,
  OneToTwoYears = 5,
  TwoToThreeYears = 6,
}

export const StakingBucketValues = Object.values(StakingBucket).filter(
  (value) => typeof value === 'number',
)

/**
 * Zod schema for StakingBucket
 */
export const StakingBucketSchema = z.nativeEnum(StakingBucket)

/**
 * Type guard for StakingBucket
 * @param maybeStakingBucket Object to be checked
 * @returns true if the object is a StakingBucket
 */
export function isStakingBucket(maybeStakingBucket: unknown): maybeStakingBucket is StakingBucket {
  return StakingBucketSchema.safeParse(maybeStakingBucket).success
}

/**
 * Checker to make sure that the schema is aligned with the interface
 */
const _schemaCheck: z.ZodType<StakingBucket> = StakingBucketSchema
