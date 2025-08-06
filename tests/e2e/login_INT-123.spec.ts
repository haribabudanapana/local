
// Feature used: POM (separates test logic from element handling)
// Feature used: Reusability (LoginPage methods can be reused across tests)
// Feature used: Scalability (Clean test flow, easy to expand)

import { test, expect } from '@playwright/test';
import { logToAllure } from '../../utils/allureHelper'; //  importing custom logger
import { loadTestData } from '../../utils/testDataLoader';
import { LoginPage } from '../../pages/LoginPage';

const testData = loadTestData(__filename);

test('Login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  logToAllure('Starting login test for standard_user');

  logToAllure('Navigated to login page');
  await loginPage.navigate();
  logToAllure('Entered credentials and clicked login');
  await loginPage.login(testData.username, testData.password);

  await expect(page).toHaveURL(/inventory123/);
  logToAllure('Successfully landed on inventory page');
});

