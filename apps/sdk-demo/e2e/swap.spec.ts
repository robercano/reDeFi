import { test, expect } from '@playwright/test'

test.describe('SDK Demo App - Swap Simulator', () => {
  test('should fetch a swap quote successfully and not display validation errors', async ({
    page,
  }) => {
    // Navigate to the local development server
    await page.goto('/')

    // Click the Swap Simulator tab
    await page.getByTestId('tab-swap-viewer').click()

    // Fill in the token symbols and amount (assuming default is WETH to USDC for 1 unit)
    // The inputs are already populated by default in the state, but let's ensure we click the button

    const getQuoteButton = page.getByTestId('swap-quote-btn')
    await expect(getQuoteButton).toBeVisible()

    // Click the simulate swap button
    await getQuoteButton.click()

    // Wait for the simulation to finish

    // We should NOT see "Error: Invalid input"
    await expect(page.locator('text=Error: Invalid input')).toBeHidden({ timeout: 10000 })

    // We should see "Optimal Route Found" or a similar success state
    await expect(page.locator('text=Optimal Route Found')).toBeVisible({ timeout: 15000 })

    // The Execute Swap button should appear
    await expect(page.locator('button', { hasText: 'Execute Swap' })).toBeVisible()
  })
})
