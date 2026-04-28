import { describe, expect, it, vi, afterEach } from 'vitest'
import { LoggingService } from '../src/services/LoggingService'

describe('LoggingService', () => {
  const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
  const infoSpy = vi.spyOn(console, 'info').mockImplementation(() => {})
  const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should log when SDK_LOGGING_ENABLED is true', () => {
    process.env.SDK_LOGGING_ENABLED = 'true'
    LoggingService.log('test')
    expect(logSpy).toHaveBeenCalledWith('test')

    process.env.SDK_LOGGING_ENABLED = 'false'
    LoggingService.log('test2')
    expect(logSpy).toHaveBeenCalledTimes(1)
  })

  it('should debug when SDK_DEBUG_ENABLED is true', () => {
    process.env.SDK_DEBUG_ENABLED = 'true'
    LoggingService.debug('test')
    expect(infoSpy).toHaveBeenCalledWith('test')

    process.env.SDK_DEBUG_ENABLED = 'false'
    LoggingService.debug('test2')
    expect(infoSpy).toHaveBeenCalledTimes(1)
  })

  it('should always error', () => {
    LoggingService.error('test')
    expect(errorSpy).toHaveBeenCalledWith('test')
  })
})
