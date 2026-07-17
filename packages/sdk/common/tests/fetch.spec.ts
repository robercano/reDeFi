import { afterEach, describe, expect, it, vi } from 'vitest'

import { createTimeoutSignal, FETCH_CONFIG, fetchWithTimeout } from '../src/configs/fetch'

describe('fetch config', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('createTimeoutSignal returns an AbortSignal using the default timeout', () => {
    const signal = createTimeoutSignal()
    expect(signal).toBeInstanceOf(AbortSignal)
    expect(signal.aborted).toBe(false)
  })

  it('createTimeoutSignal honors a custom timeout', () => {
    const signal = createTimeoutSignal(FETCH_CONFIG.SHORT_TIMEOUT)
    expect(signal).toBeInstanceOf(AbortSignal)
  })

  it('fetchWithTimeout forwards the url, options and an abort signal to fetch', async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response('ok'))
    vi.stubGlobal('fetch', fetchMock)

    await fetchWithTimeout('https://example.com', { method: 'POST' })

    expect(fetchMock).toHaveBeenCalledTimes(1)
    const [url, options] = fetchMock.mock.calls[0]
    expect(url).toBe('https://example.com')
    expect(options.method).toBe('POST')
    expect(options.signal).toBeInstanceOf(AbortSignal)
  })
})
