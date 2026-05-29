import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SDKProvider } from '../src/components/SDKProvider'
import { useSDKContext } from '../src/components/SDKContext'

// A dummy component to consume the context for testing
function ConsumerComponent() {
  const { apiURL, apiKey } = useSDKContext()
  return (
    <div>
      <span data-testid="url">{apiURL}</span>
      <span data-testid="key">{apiKey || 'NO_KEY'}</span>
    </div>
  )
}

describe('SDK React | Unit | SDKProvider', () => {
  it('should render children and provide the correct context values without an apiKey', () => {
    render(
      <SDKProvider apiURL="https://api.test.com">
        <ConsumerComponent />
      </SDKProvider>
    )

    expect(screen.getByTestId('url').textContent).toBe('https://api.test.com')
    expect(screen.getByTestId('key').textContent).toBe('NO_KEY')
  })

  it('should render children and provide the correct context values with an apiKey', () => {
    render(
      <SDKProvider apiURL="https://api.test.com" apiKey="super-secret-key">
        <ConsumerComponent />
      </SDKProvider>
    )

    expect(screen.getByTestId('url').textContent).toBe('https://api.test.com')
    expect(screen.getByTestId('key').textContent).toBe('super-secret-key')
  })
})
