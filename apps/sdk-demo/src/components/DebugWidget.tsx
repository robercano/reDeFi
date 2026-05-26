'use client'

import { useEffect, useState } from 'react'

export function DebugWidget() {
  const [errors, setErrors] = useState<string[]>([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleError = (msg: string) => {
      setErrors((prev) => [msg, ...prev].slice(0, 20))
    }

    const onUnhandledRejection = (event: PromiseRejectionEvent) => {
      const msg = event.reason?.message || String(event.reason)
      handleError(`[Promise] ${msg}`)
    }

    const onError = (event: ErrorEvent) => {
      handleError(`[Error] ${event.message}`)
    }

    const originalConsoleError = console.error
    console.error = (...args: unknown[]) => {
      const msg = args
        .map((a) =>
          typeof a === 'object' && a && 'message' in a ? String((a as Error).message) : String(a),
        )
        .join(' ')
      handleError(`[Error] ${msg}`)
      originalConsoleError.apply(console, args)
    }

    const originalConsoleDebug = console.debug
    console.debug = (...args: unknown[]) => {
      const msg = args
        .map((a) =>
          typeof a === 'object' && a && 'message' in a ? String((a as Error).message) : String(a),
        )
        .join(' ')
      handleError(`[Debug] ${msg}`)
      originalConsoleDebug.apply(console, args)
    }

    const originalConsoleWarn = console.warn
    console.warn = (...args: unknown[]) => {
      const msg = args
        .map((a) =>
          typeof a === 'object' && a && 'message' in a ? String((a as Error).message) : String(a),
        )
        .join(' ')
      handleError(`[Warn] ${msg}`)
      originalConsoleWarn.apply(console, args)
    }

    window.addEventListener('unhandledrejection', onUnhandledRejection)
    window.addEventListener('error', onError)

    return () => {
      window.removeEventListener('unhandledrejection', onUnhandledRejection)
      window.removeEventListener('error', onError)
      console.error = originalConsoleError
      console.debug = originalConsoleDebug
      console.warn = originalConsoleWarn
    }
  }, [])

  if (errors.length === 0) return null

  return (
    <div className="fixed bottom-4 left-4 z-[9999] flex flex-col gap-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm"
      >
        {errors.length} Errors {isOpen ? '▼' : '▲'}
      </button>

      {isOpen && (
        <div className="bg-black/95 border border-red-500 rounded-lg p-4 w-[90vw] max-w-md max-h-[60vh] overflow-y-auto text-xs font-mono text-red-400 shadow-2xl">
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold text-white">Debug Console</span>
            <button onClick={() => setErrors([])} className="text-white bg-gray-800 px-2 rounded">
              Clear
            </button>
          </div>
          {errors.map((e, i) => (
            <div
              key={i}
              className="border-b border-red-900/50 py-1 break-words whitespace-pre-wrap"
            >
              {e}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
