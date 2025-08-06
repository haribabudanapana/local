import { test, expect } from '@playwright/test';

test('Open SauceDemo login page', async ({ page }) => {
  await page.goto(process.env.BASE_URL || 'https://www.saucedemo.com/');
  await expect(page).toHaveTitle(/Swag Labs/);
});
