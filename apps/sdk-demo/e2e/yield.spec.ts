import { test, expect } from '@playwright/test'

test.describe('SDK Demo App - Yield Simulator', () => {
  test('should simulate a yield deposit operation successfully and not display validation errors', async ({
    page,
  }) => {
    // Navigate to the local development server
    await page.goto('/')

    // Click the Yield Simulator tab
    await page.getByTestId('tab-yield-viewer').click()

    // Assuming we have a way to select the Yield provider, e.g. Yearn or Lido.
    // The UI should have it pre-selected or we can just try filling the amount and simulating.

    // Fill the amount input
    const amountInput = page.getByTestId('yield-amount-input')
    await amountInput.fill('1')

    // Click the simulate button
    const simulateButton = page.getByTestId('yield-simulate-btn')
    await expect(simulateButton).toBeVisible()
    await simulateButton.click()

    // We should NOT see "Error: "
    await expect(page.locator('text=Error:')).toBeHidden({ timeout: 10000 })

    // We should see a success state, or an Execute Order button
    await expect(page.getByTestId('yield-execute-btn')).toBeVisible({
      timeout: 15000,
    })
  })
})
