import { test, expect } from '@playwright/test'

test.describe('SDK Demo App - Activity Tracking', () => {
  test('should display empty activity history initially', async ({ page }) => {
    await page.goto('/')

    // Click the activity button to open the modal
    await page.getByTestId('activity-btn').click()

    // Verify the Activity History section is visible
    await expect(page.locator('text=Activity History')).toBeVisible()

    // Check that it shows no recent activity
    // Because the activity is fetched asynchronously, wait for the text
    await expect(page.locator('text=Connect wallet to view history.')).toBeVisible({ timeout: 10000 })
  })

  test('should log an intent in the activity history after execution', async ({ page }) => {
    await page.goto('/')

    // Navigate to Intent Swaps tab
    const intentTab = page.locator('button', { hasText: 'Intent Swaps' })
    if (await intentTab.isVisible()) {
      await intentTab.click()

      // Get Quote
      const getQuoteButton = page.locator('button', { hasText: 'Get Intent Quote' })
      if (await getQuoteButton.isVisible()) {
        await getQuoteButton.click()

        // Wait for success
        await expect(page.locator('text=Optimal Intent Found')).toBeVisible({ timeout: 15000 })

        const signButton = page.locator('button', { hasText: 'Sign & Submit Intent' })
        await expect(signButton).toBeVisible()
        await signButton.click()

        // Should show Activity History with pending intent
        const activitySection = page.locator('text=Activity History').locator('..')
        await expect(activitySection.locator('text=PENDING')).toBeVisible({ timeout: 10000 })
      }
    }
  })
})
