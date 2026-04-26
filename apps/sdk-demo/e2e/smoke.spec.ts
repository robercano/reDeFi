import { test, expect } from '@playwright/test';

test.describe('SDK Demo App - Smoke Test', () => {
  test('should load the homepage and display correct title', async ({ page }) => {
    // Navigate to the local development server
    await page.goto('/');

    // Assert that the page title or a specific main heading is present
    // Note: adjust the string to match your actual title/header
    await expect(page).toHaveTitle(/reDeFi|SDK Demo/i);
    
    // Check if the Yield Simulator link or button exists
    // This assumes there's some navigation element with text "Yield Simulator"
    // await expect(page.locator('text=Yield Simulator')).toBeVisible();
  });
});
