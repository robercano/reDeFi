import type { RegisterOptions } from 'superjson/dist/class-registry'
import type { CustomTransfomer } from 'superjson/dist/custom-transformer-registry'
import type { JSONValue } from 'superjson/dist/types'
import { SuperJSON } from 'superjson'
import { LoggingService } from './LoggingService'

export type Class = object

export class SerializationService {
  static registerClass(v: Class, options?: string | RegisterOptions | undefined): void {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    SuperJSON.registerClass(v as any, options)
  }

  static registerCustom<I, O extends JSONValue>(
    transformer: Omit<CustomTransfomer<I, O>, 'name'>,
    name: string,
  ): void {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    SuperJSON.registerCustom(transformer, name)
  }

  static stringify(v: unknown): string {
    return SuperJSON.stringify(v)
  }

  static parse<T>(v: string): T {
    return SuperJSON.parse(v)
  }

  static getTransformer() {
    return {
      input: {
        serialize: (obj: unknown) => {
          try {
            const serializedData = SuperJSON.serialize(obj)
            return serializedData
          } catch (error) {
            LoggingService.error(' => serialize request error :: ', obj, error)
            throw error
          }
        },
        deserialize: (serializedData: any) => {
          try {
            const parsedData = SuperJSON.deserialize(serializedData)
            return parsedData
          } catch (error) {
            LoggingService.error(' => deserialize request error :: ', serializedData, error)
            throw error
          }
        },
      },
      output: {
        serialize: (obj: unknown) => {
          try {
            const serializedData = SuperJSON.serialize(obj)
            return serializedData
          } catch (error) {
            LoggingService.error(' => serialize response error :: ', obj, error)
            throw error
          }
        },
        deserialize: (serializedData: any) => {
          try {
            const parsedData = SuperJSON.deserialize(serializedData)
            return parsedData
          } catch (error) {
            LoggingService.error(' => deserialize response error :: ', serializedData, error)
            throw error
          }
        },
      },
    }
  }
}
