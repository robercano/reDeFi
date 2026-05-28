import { test, expect } from '@playwright/test'

test.describe('SDK Demo App - Portfolio Viewer', () => {
  test('should render the user portfolio successfully', async ({ page }) => {
    // Navigate to the local development server
    await page.goto('/')

    // Click the Portfolio Simulator tab
    const portfolioTab = page.getByTestId('tab-portfolio-viewer')
    await portfolioTab.click()

    // Since wallet is not connected in basic E2E (unless we mock it),
    // the UI might say "Wallet not connected. Using mock user for simulation."
    // We just verify the fetch works or the mock state is rendered.

    const fetchButton = page.locator('button', { hasText: 'Fetch Connected Portfolio' })
    
    // In mock mode it might not show the connect warning or fetch might just work for a mocked user
    if (await fetchButton.isVisible()) {
      await fetchButton.click()
    }

    // We should see the Total Portfolio Value eventually if it works, or we wait for the error to NOT be there
    await expect(page.locator('text=Total Portfolio Value')).toBeVisible({ timeout: 15000 })
    
    // Check that we see a formatted fiat string like $
    await expect(page.locator('text=$').first()).toBeVisible()
  })
})
