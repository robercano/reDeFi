import { describe, expect, it, vi } from 'vitest'
import { SerializationService } from '../src/services/SerializationService'
import { LoggingService } from '../src/services/LoggingService'
import { SuperJSON } from 'superjson'

describe('SerializationService', () => {
  it('should stringify and parse correctly', () => {
    const data = { key: 'value' }
    const serialized = SerializationService.stringify(data)
    expect(serialized).toBeDefined()
    const parsed = SerializationService.parse<Record<string, unknown>>(serialized)
    expect(parsed.key).toBe('value')
  })

  it('should register custom transformer', () => {
    expect(() => {
      SerializationService.registerCustom(
        {
          isApplicable: (_v: unknown): _v is unknown => false,
          serialize: (v: unknown) => v as never,
          deserialize: (v: unknown) => v,
        },
        'Custom',
      )
    }).not.toThrow()
  })

  it('should return working transformer', () => {
    const transformer = SerializationService.getTransformer()
    const data = { test: 123 }
    const serializedInput = transformer.input.serialize(data)
    expect(serializedInput).toBeDefined()
    expect(transformer.input.deserialize(serializedInput)).toStrictEqual(data)

    const serializedOutput = transformer.output.serialize(data)
    expect(serializedOutput).toBeDefined()
    expect(transformer.output.deserialize(serializedOutput)).toStrictEqual(data)
  })

  it('should handle transformer errors and log them', () => {
    const transformer = SerializationService.getTransformer()
    const errorSpy = vi.spyOn(LoggingService, 'error').mockImplementation(() => {})

    const serializeSpy = vi.spyOn(SuperJSON, 'serialize').mockImplementation(() => {
      throw new Error('mock error')
    })
    const deserializeSpy = vi.spyOn(SuperJSON, 'deserialize').mockImplementation(() => {
      throw new Error('mock error')
    })

    expect(() => transformer.input.serialize({})).toThrow()
    expect(errorSpy).toHaveBeenCalled()

    expect(() => transformer.output.serialize({})).toThrow()
    expect(errorSpy).toHaveBeenCalled()

    expect(() => transformer.input.deserialize('invalid')).toThrow()
    expect(() => transformer.output.deserialize('invalid')).toThrow()

    serializeSpy.mockRestore()
    deserializeSpy.mockRestore()
  })
})
