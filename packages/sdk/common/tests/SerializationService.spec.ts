import { describe, expect, it, vi } from 'vitest'
import { SerializationService } from '../src/services/SerializationService'
import { LoggingService } from '../src/services/LoggingService'

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
    const debugSpy = vi.spyOn(LoggingService, 'debug').mockImplementation(() => {})

    const stringifySpy = vi.spyOn(SerializationService, 'stringify').mockImplementation(() => {
      throw new Error('mock error')
    })
    const parseSpy = vi.spyOn(SerializationService, 'parse').mockImplementation(() => {
      throw new Error('mock error')
    })

    expect(() => transformer.input.serialize({})).toThrow()
    expect(debugSpy).toHaveBeenCalled()

    expect(() => transformer.output.serialize({})).toThrow()
    expect(debugSpy).toHaveBeenCalled()

    expect(() => transformer.input.deserialize('invalid')).toThrow()
    expect(() => transformer.output.deserialize('invalid')).toThrow()

    stringifySpy.mockRestore()
    parseSpy.mockRestore()
  })
})
