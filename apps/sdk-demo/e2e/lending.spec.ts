import { test, expect } from '@playwright/test'

test.describe('SDK Demo App - Lending Simulator', () => {
  test('should simulate a lending operation successfully and not display validation errors', async ({
    page,
  }) => {
    // Navigate to the local development server
    await page.goto('/')

    // Click the Lending Simulator tab
    await page.locator('button', { hasText: 'Lending Simulator' }).click()

    // Fill the amount input
    const amountInput = page.locator('input[type="number"]')
    await amountInput.fill('1')

    // Click the simulate button
    const simulateButton = page.locator('button', { hasText: 'Simulate Lending' })
    await expect(simulateButton).toBeVisible()
    await simulateButton.click()

    // We should NOT see "Error: "
    await expect(page.locator('text=Error:')).toBeHidden({ timeout: 10000 })

    // We should see a success state, or an Execute Order button
    await expect(page.locator('button', { hasText: 'Execute Order' })).toBeVisible({
      timeout: 15000,
    })
  })
})
