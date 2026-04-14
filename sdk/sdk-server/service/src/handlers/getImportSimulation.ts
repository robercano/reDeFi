import type { IImportPositionParameters } from '@thesolidchain/sdk-common'
import { IImportSimulation } from '@thesolidchain/sdk-common'
import { importPosition } from '@thesolidchain/simulator-service/strategies'
import { z } from 'zod'
import { publicProcedure } from '../SDKTRPC'

const inputSchema = z.custom<IImportPositionParameters>((parameters) => parameters !== undefined)

export const getImportSimulation = publicProcedure
  .input(inputSchema)
  .query(async (opts): Promise<IImportSimulation> => {
    const args: IImportPositionParameters = opts.input

    return await importPosition(args)
  })
