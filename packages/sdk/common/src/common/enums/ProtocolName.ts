import { z } from 'zod'

/**
 * ProtocolName
 * Enumerates the names of the protocols that are supported by the SDK
 */
export enum ProtocolName {
  AaveV3 = 'AAVE_V3',
  AaveV2 = 'AAVE',
  Spark = 'Spark',
  MorphoBlue = 'MorphoBlue',
  Maker = 'Maker',
  Ajna = 'Ajna_rc13',
  Armada = 'Armada',
  Yearn = 'Yearn',
  Lido = 'Lido',
  UniswapV3 = 'UniswapV3',
  CompoundV3 = 'CompoundV3',
}

/**
 * Zod schema for ProtocolName
 */
export const ProtocolNameSchema = z.nativeEnum(ProtocolName)

/**
 * Type guard for ProtocolName
 * @param maybeProtocolName Object to be checked
 * @returns true if the object is a ProtocolName
 */
export function isProtocolName(maybeProtocolName: unknown): maybeProtocolName is ProtocolName {
  return ProtocolNameSchema.safeParse(maybeProtocolName).success
}

/**
 * Checker to make sure that the schema is aligned with the interface
 */
/* eslint-disable @typescript-eslint/no-unused-vars */
const __schemaChecker: ProtocolName = {} as z.infer<typeof ProtocolNameSchema>
